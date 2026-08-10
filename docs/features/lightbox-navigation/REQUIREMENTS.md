# Lightbox navigation requirements

## Status

Approved from the owner request on 2026-08-09.

## Problem

The gallery lightbox opens one photograph at a time and requires visitors to close it before viewing another photograph. Visitors need to browse the active gallery set without leaving the enlarged view.

## Requirements

- **REQ-1:** The lightbox must provide visible previous and next controls when the active gallery set contains more than one photograph.
- **REQ-2:** Previous and next navigation must wrap continuously at the beginning and end of the active gallery set.
- **REQ-3:** Left and right arrow keys must navigate while the lightbox is open, and Escape must continue to close it.
- **REQ-4:** A horizontal touch swipe starting anywhere in the lightbox overlay must navigate on mobile devices, including the space around photographs that do not fill the screen.
- **REQ-5:** Navigation must follow the active category's current order; the aggregate category must use its already-randomized order for the current page load.
- **REQ-6:** Clicking the backdrop or enlarged photograph must close the lightbox, while a completed navigation swipe must not also close it.
- **REQ-7:** Controls must remain keyboard accessible, visibly focused, and correctly labelled in Hebrew.
- **REQ-8:** Existing gallery filtering, carousel navigation, lightbox opening, and RTL behavior must remain functional.
- **REQ-9:** While the lightbox is open, the page behind it must not scroll, and closing the lightbox must restore the visitor to the same page position.
- **REQ-10:** Opening and closing the lightbox must not make the sticky header visually switch to a different scroll state or jump.

## Acceptance criteria

- **AC-1:** Given a multi-image gallery set, when a visitor opens any photograph and uses either visible arrow, then the adjacent photograph appears and navigation wraps at both ends.
- **AC-2:** Given an open lightbox, when a visitor presses the left or right arrow key, then the adjacent photograph appears; when they press Escape, the lightbox closes.
- **AC-3:** Given an open lightbox on a touch device, when a visitor swipes horizontally by the navigation threshold on the photograph or surrounding overlay, then the adjacent photograph appears without closing the lightbox.
- **AC-4:** Given the aggregate gallery, when the visitor opens and navigates the lightbox, then it follows the random order established for that page load.
- **AC-5:** Given an open lightbox, when the visitor activates the backdrop, enlarged photograph, or close control, then it closes; using a navigation control or completing a navigation swipe does not close it.
- **AC-6:** Given a visitor opens the lightbox after scrolling the page, when they attempt to scroll and then close the lightbox, then the background remains fixed while open and returns to its original position after closing.
- **AC-7:** Given the sticky header is in its scrolled state, when a visitor opens and closes a photograph, then the header preserves that state without a visible transition or jump.

## Architecture impact

No architecture change. The feature is limited to local gallery interaction state and controls.
