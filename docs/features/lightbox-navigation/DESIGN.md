# Lightbox navigation design

## Status

Approved from the owner request on 2026-08-09.

## Interaction design

- Store the selected photograph's index in the active category instead of storing only its image URL.
- Derive the displayed image from the active category and selected index.
- Place RTL-aware previous and next buttons at the right and left edges of the overlay.
- Wrap index changes with modular arithmetic.
- Route keyboard arrows to the lightbox while it is open so the underlying carousel does not move.
- Attach touch gesture handling to the full-screen overlay, recognize horizontal gestures that cross a 50-pixel threshold as navigation swipes, and use the signed touch distance to choose direction.
- Keep backdrop, enlarged-photograph, and close-button dismissal; suppress the synthetic click immediately following a completed swipe and stop propagation from navigation controls.
- Announce the current position to assistive technology without adding a persistent visual counter.
- Lock the document and fixed-position body at the current scroll offset while the lightbox is open, then restore the prior inline styles and page position on close. This prevents background scrolling on mobile Safari without jumping to the top.
- Expose the preserved scroll offset as a temporary document data attribute so the sticky header uses the effective locked position instead of the transient `window.scrollY = 0` produced by fixed-body scroll locking.

## Architecture impact

No project-wide architecture change.
