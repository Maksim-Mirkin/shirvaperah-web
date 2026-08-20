# Project roadmap

## Status

Active

## Purpose

This roadmap records the agreed delivery order after the first public landing-page release. It coordinates project phases without replacing feature requirements, designs, tasks, checkpoints, or architecture decisions.

The order is intentional:

```text
public launch
  -> production stabilization
  -> accessibility baseline
  -> content-management planning approval
  -> incremental CMS delivery
```

Keep `main` production-ready throughout. Urgent production fixes may interrupt the sequence; new discretionary features should not.

## Phase 1 — Public launch

### Goal

Release the current landing page publicly without adding more last-minute product scope.

### Launch readiness

- Confirm the production deployment is built from the current `main` commit.
- Verify the production URL, custom domain when connected, HTTPS, and redirect behavior.
- Smoke-test a common desktop viewport and at least one real phone over mobile data.
- Verify WhatsApp, telephone, Instagram, header navigation, gallery filters, carousel controls, lightbox navigation, mobile swipes, and lightbox dismissal.
- Confirm Hebrew RTL presentation, current business copy, service area, and photograph selection.
- Confirm the previous verified Cloudflare deployment or a Git revert can be used for rollback.
- Avoid new visual or architectural changes after the release candidate is accepted.

### Exit condition

- The public production URL is available and the primary visitor and contact journeys work on desktop and mobile.

## Phase 2 — Production stabilization

### Goal

Observe the released site and correct real production problems before starting architecture work.

### Expected window

- The first two to three days after public launch.

### Scope

- Collect feedback from the business owners and a small number of real visitors.
- Check mobile image loading, gallery interaction, contact destinations, layout, and browser-specific behavior.
- Prioritize reproducible bugs that affect comprehension, browsing work examples, or contacting the business.
- Deliver urgent fixes through focused `fix/*` branches and pull requests.
- Record ideas that are not launch defects for later prioritization instead of expanding stabilization scope.

### Exit condition

- No known release-blocking or high-impact production defect remains open.

## Phase 3 — Accessibility baseline

### Goal

Improve the site's real technical accessibility before building the content editor, without adding a third-party accessibility overlay or claiming unverified formal compliance.

### Scope

- Create and approve a focused feature specification before implementation.
- Audit semantic structure, heading order, landmarks, keyboard operation, focus visibility, and skip navigation.
- Verify focus entry, containment where required, dismissal, and focus restoration for the lightbox and mobile menu.
- Test screen-reader names, roles, state changes, gallery announcements, and meaningful image alternatives.
- Verify color contrast, text resizing, zoom and reflow, reduced motion, touch targets, and common mobile/desktop layouts.
- Fix confirmed issues and rerun automated and manual checks.
- Decide whether to publish an accurate Hebrew `הצהרת נגישות` based on the verified result and applicable business obligations.
- Keep evidence supporting the business's current accessibility-exemption basis outside the public repository and reassess it when business circumstances change.

### Current legal context

- The owner reported that the business is currently below the relevant annual-turnover threshold discussed in the Israeli Equal Rights Commission guidance.
- This roadmap records a planning assumption, not legal advice or a permanent exemption determination.
- Reassess the applicable obligation if turnover, business registration, services, or official guidance changes.

### Exit condition

- The accepted accessibility feature criteria pass, remaining limitations are documented accurately, and accessibility requirements are ready to be inherited by the CMS specifications.

## Phase 4 — Content-management planning approval

### Goal

Return to the umbrella content-management specification and resolve its blocking design inputs before infrastructure or editor implementation begins.

### Source

- Planning branch: `feature/content-management-planning`
- Umbrella specification: `docs/features/content-management/REQUIREMENTS.md`

### Scope

- Rebase the planning branch on the current `main` before continuing.
- Review and approve the umbrella requirements.
- Resolve authentication method, editor identities, Supabase ownership and recovery, upload limits, retained version history, preview behavior, publication confirmation, and public fallback strategy.
- Incorporate the accepted accessibility baseline into public content and admin-editor requirements.
- Approve the project-wide architecture change before production begins to depend on Supabase.
- Do not generate implementation tasks while blocking requirements or design questions remain.

### Exit condition

- The umbrella requirements and architectural direction are approved and the first delivery slice is ready for its own requirements and design.

## Phase 5 — Incremental CMS delivery

### Goal

Deliver content management through small, independently reviewable features rather than one long-lived implementation branch.

### Planned sequence

1. Content-management and Supabase foundation without switching public rendering.
2. Private editor authentication, allowlist, session handling, and responsive admin shell.
3. Structured text and contact editing with shared drafts, preview, explicit publication, public reads, and fallback.
4. Image library with upload validation, metadata, optimized delivery, archive, restore, and safe deletion.
5. Hero collection membership and ordering.
6. Three themed gallery collections, All-only membership, deduplication, and random aggregate `All` behavior.
7. Publication history, restoration UI, conflict handling, recovery procedures, security review, and final architecture review.

### Delivery rules

- Each slice receives its own approved `REQUIREMENTS.md` and `DESIGN.md` before `TASKS.md` or implementation.
- Each slice uses a focused temporary branch and pull request.
- Each task traces to a requirement or acceptance criterion.
- Every editor surface supports mobile and desktop, Hebrew RTL, keyboard operation, understandable validation, and accessible status feedback.
- Every new meaningful photograph requires editor-managed alternative text or an explicit decorative designation.
- Draft content remains private; publication remains explicit and atomic.
- The public site switches to managed content only after data migration, authorization, fallback, rollback, and production-readiness checks pass.

### Exit condition

- All accepted CMS slices are released, operational procedures are documented, and project requirements and architecture match production reality.

## Deferred ideas

- New page sections remain separate developer-delivered features.
- Analytics, forms, bookings, payments, and other external services remain outside this roadmap until explicitly approved.
- A third-party accessibility widget is not planned; accessibility work should improve the actual product.

## Roadmap maintenance

- Update this file when the phase order, current priorities, or exit conditions change.
- Keep detailed product decisions in feature requirements and technical decisions in feature design or `ARCHITECTURE.md`.
- Review the roadmap after each phase exit and before committing to the next substantive feature.

## Last reviewed

- Date: 2026-08-10
- Owner: Maksim Mirkin
