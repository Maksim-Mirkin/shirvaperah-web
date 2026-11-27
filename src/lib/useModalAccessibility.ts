import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

function getFocusableElements(container: HTMLElement) {
  return [...container.querySelectorAll<HTMLElement>(focusableSelector)]
    .filter((element) => !element.hidden && element.getAttribute('aria-hidden') !== 'true');
}

type ModalAccessibilityOptions = {
  active: boolean;
  containerRef: RefObject<HTMLElement | null>;
  initialFocusRef?: RefObject<HTMLElement | null>;
  onDismiss: () => void;
  inertRootId?: string;
};

export function useModalAccessibility({
  active,
  containerRef,
  initialFocusRef,
  onDismiss,
  inertRootId = 'root',
}: ModalAccessibilityOptions) {
  useLayoutEffect(() => {
    if (!active) return undefined;

    const container = containerRef.current;
    const inertRoot = document.getElementById(inertRootId);
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    if (!container) return undefined;

    const rootWasInert = inertRoot?.inert ?? false;
    if (inertRoot && !inertRoot.contains(container)) inertRoot.inert = true;

    const focusFrame = window.requestAnimationFrame(() => {
      const initialTarget = initialFocusRef?.current ?? getFocusableElements(container)[0] ?? container;
      initialTarget.focus({ preventScroll: true });
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onDismiss();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = getFocusableElements(container);
      if (focusable.length === 0) {
        event.preventDefault();
        container.focus({ preventScroll: true });
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !container.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !container.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', handleKeyDown);
      if (inertRoot) inertRoot.inert = rootWasInert;
      window.requestAnimationFrame(() => opener?.focus({ preventScroll: true }));
    };
  }, [active, containerRef, inertRootId, initialFocusRef, onDismiss]);
}
