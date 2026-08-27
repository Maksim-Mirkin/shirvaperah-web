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
- Lock scrolling on both the document element and body while the lightbox is open by temporarily applying `overflow: hidden` and `overscroll-behavior: none`, then restore their previous inline values on close. This prevents background scrolling without changing the body's positioning or replacing the current page offset.

## Architecture impact

No project-wide architecture change.
