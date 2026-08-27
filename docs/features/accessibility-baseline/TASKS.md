# Accessibility baseline tasks

## Status

Verified — awaiting publication approval at CHECKPOINT-2

## Preconditions

- [x] Requirements are approved.
- [x] Design is approved.
- [x] No blocking product or technical questions remain.

## Execution rule

- Execute consecutive tasks autonomously until an explicit checkpoint.
- Owner review at CHECKPOINT-1 uses ordinary visual and interaction scenarios; technical accessibility verification remains agent-owned.

## Planning and audit

- [x] **TASK-0 — Approve requirements and design**
  - Covers: REQ-1 through REQ-26; AC-1 through AC-9
  - Work: Define scope, exclusions, interaction behavior, verification matrix, risks, and architecture expectation.
  - Verify: No open questions remain and no accessibility statement or third-party overlay is included.

- [x] **TASK-1 — Audit rendered structure and static content**
  - Covers: REQ-1, REQ-3, REQ-9 through REQ-15, REQ-22, REQ-25; AC-3, AC-5, AC-6
  - Work: Inspect headings, landmarks, focus, names, ARIA, image alternatives, contrast, zoom/reflow, touch targets, and reduced motion before editing.
  - Verify: Confirmed findings are recorded in implementation changes and later verification evidence.

## Implementation

- [x] **TASK-2 — Add reusable modal focus and background isolation**
  - Covers: REQ-2 through REQ-6, REQ-15, REQ-18 through REQ-20; AC-1, AC-2
  - Work: Add small shared focus-containment, opener-restoration, and inert-background behavior without a new runtime dependency.
  - Verify: Tab and Shift+Tab remain inside an open modal and focus returns after every close path.

- [x] **TASK-3 — Correct mobile menu semantics and focus behavior**
  - Covers: REQ-2 through REQ-6, REQ-10, REQ-13, REQ-17, REQ-21; AC-1, AC-2, AC-4, AC-8
  - Work: Render the open menu as a modal surface, manage initial focus and Escape, isolate background content, and preserve mobile layout and contact actions.
  - Verify: Keyboard, touch, resize, close, and focus-restoration scenarios pass.

- [x] **TASK-4 — Correct gallery content semantics and announcements**
  - Covers: REQ-7 through REQ-10, REQ-14, REQ-15, REQ-17, REQ-21; AC-3, AC-8
  - Work: Add meaningful Hebrew image alternatives, keep loop duplicates inert, and provide restrained category/result announcements.
  - Verify: Only logical carousel items are exposed and category changes are understandable without duplicate announcements.

- [x] **TASK-5 — Correct lightbox modal behavior**
  - Covers: REQ-2 through REQ-8, REQ-13 through REQ-15, REQ-17, REQ-21; AC-1 through AC-4, AC-8
  - Work: Portal the dialog outside inactive content, focus the close control, contain and restore focus, preserve controls/swipes/dismissal/scroll lock, and announce image position.
  - Verify: Keyboard, VoiceOver-oriented semantics, touch, swipe, backdrop, close button, and scroll restoration scenarios pass.

- [x] **TASK-6 — Correct focus, motion, contrast, touch, and reflow findings**
  - Covers: REQ-3, REQ-10 through REQ-13, REQ-16 through REQ-21, REQ-25; AC-1, AC-4, AC-5, AC-8
  - Work: Apply the smallest styling and behavior corrections found by the audit.
  - Verify: Representative normal, zoomed, narrow, landscape, and reduced-motion layouts remain usable and visually coherent.

## Verification

- [x] **TASK-7 — Run automated and manual desktop verification**
  - Covers: REQ-22, REQ-23, REQ-25, REQ-26; AC-1, AC-3 through AC-7
  - Work: Run typecheck/build/audit, rendered accessibility checks, keyboard traversal, zoom/reflow, reduced motion, and macOS Safari VoiceOver checks.
  - Verify: Results are recorded in `VERIFICATION.md`; serious findings are resolved or explicitly documented.

- [x] **TASK-8 — Run mobile regression verification and prepare owner review**
  - Covers: REQ-16, REQ-21, REQ-24 through REQ-26; AC-2 through AC-8
  - Work: Verify local phone behavior and prepare the project sanity check plus concrete accessibility-baseline owner scenarios in `VERIFICATION.md`.
  - Verify: Local desktop and same-network phone builds are current and the owner checklist contains actions and expected results.

- [x] **CHECKPOINT-1 — Owner visual and interaction review**
  - Review: Complete the reusable sanity check in `docs/project/VERIFICATION.md`, then the six concrete owner scenarios in this feature's `VERIFICATION.md`.
  - Agent-owned evidence: Keyboard, focus containment/restoration, semantics, contrast, zoom/reflow, reduced motion, automated scan, and macOS VoiceOver results.
  - Continue when: Owner accepts the ordinary visual/interaction experience and completes or delegates the short iPhone VoiceOver check.

## Completion after checkpoint

- [x] **TASK-9 — Apply checkpoint feedback and finalize evidence**
  - Covers: All accepted requirements and AC-1 through AC-8
  - Work: Correct accepted review findings and rerun affected verification.
  - Verify: `VERIFICATION.md` matches the final candidate.

- [x] **TASK-10 — Architecture review and publication preparation**
  - Covers: AC-9
  - Work: Confirm architecture impact, update feature status, run publication checks, and prepare the pull request.
  - Verify: Record “No architecture change” unless a project-wide boundary actually changed.

- [ ] **CHECKPOINT-2 — Commit, push, and open pull request**
  - Continue when: Owner approves publishing the verified feature branch.

## Architecture impact

No architecture change. The feature adds only local component behavior, shared client-side accessibility logic, content metadata, styles, and verification documentation within the existing React/Vite client boundary.
