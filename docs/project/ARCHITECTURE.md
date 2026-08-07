# Project architecture

## Status

This document describes the current architecture and approved boundaries. It is not a commitment to add systems that are not yet required.

## Current system

Shir VaPerah Web is a client-only React single-page application built with Vite and styled with Tailwind CSS.

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
  components/   reusable UI
  lib/          shared client helpers
  pages/        route-level page components
docs/
  project/      project-wide requirements and architecture
  features/     requirements, design, and tasks for each feature
public/         static public assets
```

## Architectural principles

- Prefer the smallest architecture that satisfies confirmed requirements.
- Keep page-specific code close to its page and extract reusable UI into `src/components/`.
- Keep shared non-visual client logic in `src/lib/`.
- Preserve Hebrew RTL behavior throughout layout and component design.
- Avoid new dependencies when the platform or existing stack is sufficient.
- Do not introduce a server, database, authentication provider, deployment service, or other external system without explicit approval and documentation.
- Never expose secrets in client code; all client-delivered values must be treated as public.

## Routing

The current application maps browser paths to entries in `pages.config.jsx` without a routing dependency. Revisit routing only when confirmed navigation requirements exceed this approach.

## Data and state

- React owns local interface state.
- TanStack Query is installed, but no backend data source is currently connected.
- Authentication and toast implementations are temporary local placeholders.
- Any persistent or personal data requires an approved data model, privacy review, and backend decision before implementation.

## Build and verification

- Node.js and npm manage the toolchain and dependencies.
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
