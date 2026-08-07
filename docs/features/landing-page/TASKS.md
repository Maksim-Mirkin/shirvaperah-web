# Landing page tasks

## Status

In progress — awaiting CHECKPOINT-1 approval

## Preconditions

- [x] Requirements are approved.
- [x] Design is approved.
- [x] No blocking questions remain.

## Execution rule

- TASK items are executed autonomously and do not require individual owner approval.
- Work pauses only at CHECKPOINT items (or for a genuine blocker or safety issue).
- At each CHECKPOINT, the owner reviews the running local result and explicitly approves continuation.

## Implementation

- [x] **TASK-1 — Acquire and prepare approved assets**
  - Covers: REQ-4, REQ-6, REQ-11, REQ-13
  - Work: Download the logo and published business photographs from the Base44 reference, select the images required by each section, create optimized web derivatives, and store them under `src/assets/images/` with descriptive names.
  - Verify: Every rendered image is local, opens correctly, has an intentional crop, and has either meaningful Hebrew alternative text or an empty decorative alternative.

- [x] **TASK-2 — Simplify the static application shell**
  - Covers: REQ-1, REQ-9, REQ-13
  - Work: Set Hebrew language and RTL direction at document level; remove unused generated authentication, query, toast, and multi-page plumbing; retain a minimal React/Vite application shell.
  - Verify: The root route renders without loading/authentication states, no removed module is imported, and the page has `lang="he"` and `dir="rtl"`.

- [x] **TASK-3 — Create the centralized site-content model**
  - Covers: REQ-2, REQ-5, REQ-6, REQ-7, REQ-8, REQ-13
  - Work: Add the approved Hebrew copy, services, gallery metadata, contact destinations, service-area wording, and image imports to `src/content/site-content.js`.
  - Verify: Components contain no duplicated business contact values, and telephone, WhatsApp, and Instagram destinations match the approved public information.

- [x] **TASK-4 — Build the header and hero**
  - Covers: REQ-2, REQ-3, REQ-8, REQ-9, REQ-10, REQ-12, REQ-15; AC-1, AC-3, AC-4, AC-5
  - Work: Implement the responsive site header, anchor navigation, accessible mobile menu, hero copy, featured photography, and primary WhatsApp action in the Base44 visual direction.
  - Verify: Purpose and contact action are visible in the initial experience; menu and actions work by keyboard and touch at mobile and desktop widths.

- [x] **CHECKPOINT-1 — Review the first screen locally**
  - Includes: Application shell, header, mobile menu, hero, primary contact action, typography, colors, and initial photography.
  - Review: Run the site locally and pause implementation while the owner checks mobile and desktop appearance and requests changes.
  - Continue when: The owner explicitly approves the first screen; record the approved state in a focused feature-branch commit.

- [ ] **TASK-5 — Build the gallery**
  - Covers: REQ-4, REQ-9, REQ-10, REQ-11, REQ-12, REQ-15; AC-2, AC-3, AC-4
  - Work: Implement the three approved category filters and responsive local-image grid with correct selected-state semantics and reduced-motion behavior.
  - Verify: Each filter reveals the correct photographs, reports its state with `aria-pressed`, and creates no clipped content or keyboard trap.

- [ ] **TASK-6 — Build services and about sections**
  - Covers: REQ-5, REQ-6, REQ-9, REQ-10, REQ-11, REQ-15; AC-2, AC-3
  - Work: Implement the four approved service cards and the business-story section with the approved photograph and quotation.
  - Verify: All approved content is readable in Hebrew RTL and remains complete with animation disabled.

- [ ] **TASK-7 — Build contact footer**
  - Covers: REQ-7, REQ-8, REQ-9, REQ-10, REQ-12; AC-2, AC-3, AC-4, AC-5
  - Work: Implement WhatsApp and telephone actions, Instagram, service area, and copyright content using semantic links and visible focus styles.
  - Verify: Each link has the correct interaction type and destination and is usable by keyboard and touch.

- [ ] **CHECKPOINT-2 — Review the complete page locally**
  - Includes: Gallery and filters, services, about content, contact footer, section order, copy, photographs, and contact destinations.
  - Review: Run the complete page locally and pause implementation while the owner checks content and interaction and requests changes.
  - Continue when: The owner explicitly approves the complete page structure and content; record the approved state in a focused feature-branch commit.

- [ ] **TASK-8 — Finish responsive styling and page metadata**
  - Covers: REQ-9, REQ-10, REQ-12, REQ-15; AC-1, AC-3, AC-4
  - Work: Apply the approved palette, typography, spacing, image treatments, focus states, reduced-motion rules, responsive layouts, favicon, title, description, and social metadata.
  - Verify: The result closely matches the Base44 reference at common mobile and desktop sizes, remains readable without animation, and contains no Base44 “Copy” title or branding.

- [ ] **TASK-9 — Verify release readiness**
  - Covers: REQ-10, REQ-11, REQ-12, REQ-13, REQ-14, REQ-15; AC-1 through AC-6
  - Work: Review the finished page locally, validate approved contact/content details with the owner, run repository checks, and resolve any defects found.
  - Verify: `npm ci`, `npm audit --audit-level=high`, and `npm run build` pass; mobile, desktop, RTL, keyboard, focus, alt-text, reduced-motion, and contact-link checks pass.

- [ ] **CHECKPOINT-3 — Final release review locally**
  - Includes: Final responsive polish, metadata, accessibility behavior, optimized assets, and release build.
  - Review: Run the production build locally and pause while the owner performs final acceptance before pushing or opening a pull request.
  - Continue when: The owner explicitly approves publishing the feature branch.

- [ ] **TASK-10 — Complete documentation and architecture review**
  - Covers: REQ-14, AC-6
  - Work: Record final verification results, update feature documents if approved decisions changed, review `docs/project/ARCHITECTURE.md`, and prepare the pull request.
  - Verify: Documentation matches the implementation, architecture impact is recorded below, and CI passes on the pull request.

## Verification

- [ ] Run the relevant automated tests.
- [ ] Run `npm ci`.
- [ ] Run `npm audit --audit-level=high`.
- [ ] Run `npm run build`.
- [ ] Check relevant mobile and desktop behavior.
- [ ] Check Hebrew RTL and accessibility behavior.
- [ ] Confirm all acceptance criteria in the pull-request preview when available.
- [ ] Confirm final contact destinations, service-area wording, copy, and image selection with the owner.
- [ ] Update requirements, design, architecture, and README documentation if approved decisions changed.
- [ ] Review `docs/project/ARCHITECTURE.md` and either update it or record `No architecture change` below.

## Completion

- [ ] All tasks and acceptance criteria are complete.
- [ ] Required CI checks pass.
- [ ] Pull request is ready for owner review.
- Architecture impact: Pending implementation review
