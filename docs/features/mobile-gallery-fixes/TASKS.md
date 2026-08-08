# Mobile gallery fixes tasks

## Implementation

- [x] **TASK-1 — Restore native mobile gallery gestures**
  - Covers: BUG-1
  - Verify: Horizontal finger dragging works while vertical page scrolling remains available.
- [x] **TASK-2 — Unify photograph activation**
  - Covers: BUG-2
  - Verify: A tap opens the lightbox and a mouse drag does not.
- [x] **TASK-3 — Restrict hover feedback to hover-capable devices**
  - Covers: BUG-3
  - Verify: Touch scrolling does not activate photograph hover styling; desktop hover remains unchanged.
- [x] **TASK-4 — Run release checks**
  - Verify: TypeScript, production build, and high-severity dependency audit pass.

- [x] **CHECKPOINT — Owner mobile verification**
  - Check touch dragging, photograph opening, absence of sticky hover effects, arrow controls, and vertical page scrolling.
