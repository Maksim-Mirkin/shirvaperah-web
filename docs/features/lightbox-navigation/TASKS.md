# Lightbox navigation tasks

## Implementation

- [x] **TASK-1 — Track the active lightbox position**
  - Covers: REQ-2, REQ-5
- [x] **TASK-2 — Add visible and keyboard navigation**
  - Covers: REQ-1, REQ-2, REQ-3, REQ-7
- [x] **TASK-3 — Add mobile swipe navigation and preserve dismissal behavior**
  - Covers: REQ-4, REQ-6, REQ-9, REQ-10
- [x] **TASK-4 — Verify production behavior**
  - Covers: REQ-8, AC-1 through AC-7
  - Verification: `npm run typecheck` and `npm run build` pass; desktop and mobile browser checks cover visible controls, button navigation, keyboard navigation, wraparound, image interaction, dismissal, and browser console errors.

## CHECKPOINT — Owner visual review

- Verify arrows, keyboard navigation, mobile swipe, wraparound, backdrop dismissal, and category-specific order.
- Confirm desktop URL and same-network phone URL before approval.

## Completion

- Architecture review: No architecture change.
