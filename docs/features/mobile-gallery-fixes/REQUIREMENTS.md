# Mobile gallery fixes

## Status

Approved — included in the current deployment release after production review.

## Reported issues

- **BUG-1 — Touch scrolling:** On mobile, the gallery cannot be dragged horizontally with a finger. Arrow controls still work.
- **BUG-2 — Mobile lightbox:** Tapping a gallery photograph on mobile does not open it.
- **BUG-3 — Sticky hover effects:** While scrolling on mobile, hover styling appears and remains visible, creating distracting feedback on a touch device.

## Expected outcomes

- The gallery supports natural horizontal touch dragging without breaking its arrow controls.
- Tapping a photograph opens the same accessible lightbox experience available on desktop.
- Hover-only visual effects are limited to devices that actually support hover and do not activate during mobile scrolling.

## Release boundary

These fixes are included in the current deployment pull request so the corrected site is released in a single production build.
