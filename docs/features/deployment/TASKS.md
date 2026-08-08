# Cloudflare Pages deployment tasks

## Status

In progress — pull request approved; domain activation and post-merge production verification remain deferred

## Preconditions

- [x] Requirements are approved.
- [x] Design is approved.
- [x] No blocking product or technical questions remain.

## Execution rule

- Tasks run autonomously between explicit checkpoints.
- External account creation, GitHub authorization, and domain nameserver changes remain owner actions.
- Do not create a Cloudflare Pages project before CHECKPOINT-0 approval.

## Planning

- [x] **TASK-0 — Document deployment requirements and design**
  - Covers: REQ-1 through REQ-11
  - Work: Define ownership, branch controls, build configuration, temporary URL, custom-domain path, security boundaries, and rollback behavior.
  - Verify: Requirements and design contain no blocking questions and match the existing Git/CI workflow.

- [x] **CHECKPOINT-0 — Approve deployment plan**
  - Includes: Cloudflare Pages choice, owner-controlled account, `main`-only automatic deployment, disabled feature-branch previews, Free plan boundary, and future domain connection.
  - Continue when: The owner explicitly approves the requirements and design.

## Implementation after approval

- [x] **TASK-1 — Prepare repository deployment configuration**
  - Covers: REQ-1, REQ-2, REQ-6, REQ-8, REQ-9; AC-3
  - Work: Add only the static hosting files and documentation needed by the approved Pages configuration, then run local release checks.
  - Verify: `npm ci`, `npm run typecheck`, `npm audit --audit-level=high`, and `npm run build` pass and `dist/` contains all required assets.

- [x] **TASK-1A — Optimize bundled photography and document future imports**
  - Covers: REQ-8, REQ-11; AC-4
  - Work: Convert current photographs to efficient WebP assets, remove redundant committed JPEG derivatives, and add a repeatable local optimizer for future owner-supplied photographs.
  - Verify: All content images render from WebP files, the production build contains no JPEG photographs, and the total bundled photography size does not increase.

- [x] **TASK-1B — Address Lighthouse release findings**
  - Covers: REQ-8, REQ-9, REQ-11; AC-3, AC-4
  - Work: Prioritize the mobile LCP image, self-host the Hebrew font, add `robots.txt`, correct failed text contrast, and define a static-site content security policy for Cloudflare.
  - Verify: The production build contains the preloaded hero image, local font assets, valid robots rules, passing contrast colors, and the intended Cloudflare headers; repeat Lighthouse without browser extensions after deployment.

- [x] **TASK-1C — Defer below-the-fold gallery requests**
  - Covers: REQ-8, REQ-11; AC-4
  - Work: Keep the gallery layout stable while delaying its image elements until the carousel approaches the viewport, preventing below-the-fold photographs from competing with the first screen on a cold mobile load.
  - Verify: No gallery image request starts on the initial mobile viewport, and the complete carousel appears before the user reaches it while retaining all existing interactions.

- [x] **TASK-1D — Eliminate hidden desktop imagery on mobile**
  - Covers: REQ-8, REQ-11; AC-4
  - Work: Render and rotate the featured desktop carousel only when the desktop breakpoint is active, while preserving the existing mobile background-only composition.
  - Verify: Mobile initial load does not request the five desktop carousel photographs, while desktop behavior and image rotation remain unchanged.

- [x] **CHECKPOINT-1 — Review repository readiness**
  - Includes: Build output, hosting configuration, security boundaries, and exact Cloudflare dashboard values.
  - Continue when: The owner approves connecting the repository from the owner-controlled Cloudflare account.

- [x] **TASK-2 — Create and configure the Pages project with the owner**
  - Covers: REQ-1 through REQ-4, REQ-6, REQ-7, REQ-9 through REQ-11; AC-1 through AC-3
  - Work: Connect the single GitHub repository, configure Vite build settings, select `main`, disable preview branches, deploy, and record the generated URL.
  - Verify: Production deployment succeeds, the Pages URL uses HTTPS, and a feature-branch push does not trigger a Pages build.
  - Result: Production is available at `https://shirvaperah-web.pages.dev`; production builds are limited to `main` and preview-branch deployments are disabled.

- [x] **CHECKPOINT-2 — Review the public Pages deployment**
  - Includes: Public mobile and desktop appearance, assets, contact links, metadata, deployment history, and rollback controls.
  - Continue when: The owner approves the temporary public deployment.

- [x] **TASK-3 — Complete documentation and architecture review**
  - Covers: REQ-7, REQ-10, REQ-11; AC-6
  - Work: Record the Pages project URL and verified settings, update architecture and README, and prepare the pull request.
  - Verify: Documentation matches the live configuration and contains no credentials or private account data.

- [x] **CHECKPOINT-3 — Publish deployment configuration**
  - Includes: Final diff, CI, deployment evidence, documentation, and rollback instructions.
  - Continue when: The owner approves merging the deployment feature.

## Deferred domain tasks

- [x] Order `shirvaperah.co.il` through SPD in the wife's owner-controlled registrar account.
- [ ] Wait for SPD to activate the registration.
- [ ] Add the domain to the wife's Cloudflare account and change registrar nameservers.
- [ ] Attach apex and `www` hostnames to Pages and verify HTTPS.
- [ ] Add canonical and absolute social-preview metadata after the production hostname is active.

## Verification

- [x] Run `npm ci`.
- [x] Run `npm run typecheck`.
- [x] Run `npm audit --audit-level=high`.
- [x] Run `npm run build`.
- [x] Verify the public Pages URL on mobile and desktop.
- [x] Verify feature branches do not trigger Pages deployments.
- [ ] Verify rollback access and document the tested procedure.
- [x] Review `docs/project/ARCHITECTURE.md` and update the production-delivery architecture.

## Completion

- [ ] All approved tasks and acceptance criteria are complete.
- [ ] Required CI checks pass.
- [x] Pull request is ready for owner review.
- Architecture impact: Updated `docs/project/ARCHITECTURE.md` to record Cloudflare Pages as the production static-delivery platform.
