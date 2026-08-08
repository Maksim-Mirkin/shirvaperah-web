# Mobile gallery fixes design

## Status

Approved from CHECKPOINT-2 production feedback.

## Interaction design

- Keep native horizontal overflow scrolling for touch devices and preserve vertical page scrolling.
- Use the gallery card's normal click activation for both touch and mouse lightbox opening.
- Suppress the click generated after an actual mouse drag so dragging never opens a photograph accidentally.
- Apply photograph zoom, dark overlay, and expand-icon hover feedback only inside a `(hover: hover) and (pointer: fine)` media query.
- Preserve arrow controls, infinite looping, keyboard controls, category transitions, and the existing lightbox.

## Architecture impact

No project-wide architecture change. The work is limited to gallery interaction behavior and responsive styling.
