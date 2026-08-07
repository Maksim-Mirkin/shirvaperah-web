# Project architecture

## Status

This document describes the current architecture and approved boundaries. It is not a commitment to add systems that are not yet required.

## Current system

Shir VaPerah Web is a client-only React single-page application written in strict TypeScript, built with Vite, and styled with Tailwind CSS.

```text
Browser
  -> Vite-built static assets
  -> React application
  -> pages, components, and local client helpers
```

There is currently no backend, database, real authentication provider, or approved external runtime service.

## Repository structure

```text
src/
  assets/       local images and other bundled media
  components/   reusable UI
  content/      typed static business copy, links, and image metadata
  pages/        page-level components
docs/
  project/      project-wide requirements and architecture
  features/     requirements, design, and tasks for each feature
public/         static public assets
```

## Architectural principles

- Prefer the smallest architecture that satisfies confirmed requirements.
- Write application source in TypeScript and keep strict type checking enabled.
- Keep page-specific code close to its page and extract reusable UI into `src/components/`.
- Keep shared non-visual client logic in `src/lib/`.
- Preserve Hebrew RTL behavior throughout layout and component design.
- Avoid new dependencies when the platform or existing stack is sufficient.
- Do not introduce a server, database, authentication provider, deployment service, or other external system without explicit approval and documentation.
- Never expose secrets in client code; all client-delivered values must be treated as public.

## Routing

The current application renders one landing page at the root URL. In-page sections use native anchor navigation and no client routing dependency is required. Revisit routing only when confirmed requirements introduce additional pages.

## Data and state

- React owns local interface state.
- Business copy, contact destinations, gallery metadata, and bundled image references are typed static modules under `src/content/`.
- There is no remote data source, server state library, authentication layer, or persistent client data.
- Any persistent or personal data requires an approved data model, privacy review, and backend decision before implementation.

## Build and verification

- Node.js and npm manage the toolchain and dependencies.
- TypeScript performs strict static checking through `npm run typecheck` without emitting files.
- Vite produces the static production bundle.
- GitHub Actions installs locked dependencies, audits them, and builds the bundle.
- Planned quality improvements include linting and focused automated tests before production launch.

## Branching and deployment model

```text
temporary branch
  -> pull request
  -> CI and preview deployment
  -> protected main
  -> production deployment
```

- `main` is the only permanent production branch.
- Preview and production are deployment environments, not permanent Git branches.
- Production rollback uses a Git revert or a previously verified deployment; repository state and production must then be reconciled.

## Architectural decision process

Document a decision in the relevant feature `DESIGN.md` when it affects only that feature. Update this document when a decision changes project-wide structure, boundaries, delivery, security, or long-term technical direction.

At the end of every substantive feature, review this document as part of the definition of done:

- Update it when the implemented feature changed a project-wide architectural fact or decision.
- Do not update it for feature-local components, copy, styles, or behavior that are already documented in the feature design.
- When no update is needed, record `No architecture change` in the feature's `TASKS.md` completion section.

An architectural change must include:

- Context and requirement
- Options considered
- Selected approach and tradeoffs
- Security, privacy, operations, and rollback impact
- Explicit owner approval when it adds an external service or expands system scope

## Decision: strict TypeScript application source

- **Date:** 2026-08-07
- **Context:** The landing page is still early in development, while interactive components such as the gallery and mobile menu already contain state, timers, DOM references, and event handling that benefit from compile-time validation.
- **Options considered:** Continue with JavaScript; add TypeScript gradually while allowing JavaScript; migrate the current source completely and enable strict checking.
- **Decision:** All application source under `src/` uses `.ts` or `.tsx`. The project uses strict TypeScript settings and provides `npm run typecheck` as a separate verification command.
- **Tradeoffs:** Type declarations add a small amount of implementation work, but catch unsafe DOM access, event assumptions, invalid component properties, and state mismatches before runtime. The build remains Vite-based and TypeScript does not emit a second output tree.
- **Security and privacy:** No new runtime service, secret, or data flow is introduced.
- **Operations and rollback:** CI and local release verification should run type checking before the production build. Rollback is a normal Git revert of the migration commit if required.
- **Approval:** Approved by the repository owner at CHECKPOINT-2 on 2026-08-07.
