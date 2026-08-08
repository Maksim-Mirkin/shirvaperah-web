# Cloudflare Pages deployment requirements

## Status

Approved

## Problem

The completed landing page exists only in GitHub and on a local computer. Visitors need a stable public HTTPS address, and the owner needs a safe deployment and rollback process that does not publish incomplete feature-branch work.

## Users

- Visitors who need a fast, reliable public Shir VaPerah website.
- The business owner, who controls the hosting account and future domain.
- The repository maintainer, who publishes verified changes through `main`.

## Goals

- Publish the static Vite build through Cloudflare Pages.
- Use `main` as the only automatic production source.
- Maintain the live `https://shirvaperah-web.pages.dev` production address while the custom domain is activated.
- Connect the ordered `shirvaperah.co.il` domain without changing application code.
- Preserve the current pull-request, CI, checkpoint, and rollback workflow.

## Non-goals

- Purchasing or registering the domain
- Email hosting
- Analytics, advertising pixels, cookies, forms, or user-data collection
- Backend services, Pages Functions, databases, or authentication
- Automatically deploying every feature-branch commit

## User journeys

1. A visitor opens the public Pages URL or future custom domain and sees the current production landing page over HTTPS.
2. The owner merges an approved PR to `main`; Cloudflare builds and replaces the production deployment only after the build succeeds.
3. The maintainer commits unfinished work to a feature branch without triggering a Cloudflare deployment.
4. If a production problem occurs, the maintainer restores a previously verified deployment or reverts the change in Git.
5. After the ordered domain is activated by SPD, the owner points its nameservers to Cloudflare and attaches the apex domain to the existing Pages project.

## Functional requirements

- **REQ-1:** Cloudflare Pages must build the GitHub repository from `main` and serve the generated `dist/` directory.
- **REQ-2:** The production build must run TypeScript checking before Vite compilation.
- **REQ-3:** Automatic preview-branch deployments must be disabled initially.
- **REQ-4:** The deployment must provide a temporary `*.pages.dev` production URL.
- **REQ-5:** The future apex domain `shirvaperah.co.il` must be attachable through Cloudflare DNS without an application-code change.
- **REQ-6:** Failed builds must not replace the last successful production deployment.
- **REQ-7:** The owner must retain access to deployment history and rollback controls.

## Quality requirements

- **REQ-8:** Production must use HTTPS and preserve Hebrew RTL behavior, responsive layout, images, metadata, and contact links.
- **REQ-9:** Hosting configuration must not add repository secrets or expose Cloudflare credentials.
- **REQ-10:** The hosting account and domain must be owned by the business owner; the maintainer may receive only the minimum access required later.
- **REQ-11:** Deployment must remain within the Cloudflare Free plan unless the owner explicitly approves a paid change.

## Acceptance criteria

- **AC-1:** Given the Pages project is connected, when `main` contains a successful verified build, then the public `*.pages.dev` URL serves that commit over HTTPS.
- **AC-2:** Given a commit exists only on a feature branch, when it is pushed, then no Cloudflare build or deployment starts.
- **AC-3:** Given type checking or production compilation fails, when Cloudflare runs the build, then the deployment fails and the previous production version remains live.
- **AC-4:** Given the public URL is opened on mobile and desktop, then the page matches the approved local release and has no broken local assets or contact links.
- **AC-5:** Given `shirvaperah.co.il` is purchased and added to the owner's Cloudflare account, when its nameservers and Pages custom-domain association are active, then the domain serves the same production deployment over HTTPS.
- **AC-6:** Given a faulty production release, when rollback is initiated, then a previously verified deployment can be restored and Git history is reconciled with a revert when necessary.

## Dependencies and constraints

- The owner will create or own the Cloudflare account.
- GitHub repository access must be granted only to `Maksim-Mirkin/shirvaperah-web`.
- Build command: `npm run typecheck && npm run build`.
- Build output directory: `dist`.
- Production branch: `main`.
- Preview branch deployments: disabled initially.
- Current Pages production URL: `https://shirvaperah-web.pages.dev`.
- `shirvaperah.co.il` was ordered through SPD and is awaiting registrar activation before nameserver changes can begin.
- Cloudflare's current Free plan allows 500 Pages builds per month and unlimited static-asset requests; this project should remain far below that limit.
- Connecting the apex domain later requires adding it as a Cloudflare zone and changing the registrar's nameservers to the Cloudflare-assigned values.

## Open questions

- None blocking. The Pages project and custom domain must ultimately live in the wife's owner-controlled Cloudflare account.

## Approval

- Owner: Maksim Mirkin
- Status: Approved
- Date: 2026-08-07
