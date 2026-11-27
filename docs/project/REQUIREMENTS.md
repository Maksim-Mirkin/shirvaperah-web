# Project requirements

## Purpose

Shir VaPerah Web is the public web client for the Shir VaPerah project. This document records confirmed project-wide requirements. Feature-specific requirements belong in `docs/features/<feature-name>/REQUIREMENTS.md`.

## Confirmed requirements

### Product

- The application is a public landing page for a floral business that decorates events.
- The primary audience is people in Israel planning an upcoming celebration, including weddings and bar or bat mitzvahs.
- The first release is a single-page website that reproduces the existing `https://shirvaperah.base44.app` site as closely as practical in this codebase.
- The current experience is Hebrew and must support right-to-left presentation.
- The interface must work on common mobile and desktop viewport sizes.
- The repository contains the web client only.
- The landing page must make it easy to understand the business, see examples of its work, review available services, learn about the owners, and make contact.

### Delivery

- `main` is the single permanent, production-ready branch.
- Substantive changes are proposed through temporary branches and pull requests.
- Required CI checks must pass before a pull request is merged.
- Production deployment will originate only from `main`.
- Feature branches should receive preview deployments when hosting is configured.
- A release must be recoverable through a Git revert and/or restoration of a previously verified deployment.

### Security and privacy

- Secrets, credentials, private keys, personal data, `.env` files, build output, and installed dependencies must not be committed.
- No files or Git history may be copied from the private `shirvaperah` repository.
- New external services, authentication, data collection, backend services, and databases require explicit approval.
- High-severity dependency audit findings must block release until resolved or explicitly accepted by the owner.

### Quality

- The production bundle must build successfully.
- New features must define verifiable acceptance criteria.
- Accessibility, responsive behavior, Hebrew text direction, loading behavior, empty states, and failure states must be considered when relevant.

## Current scope

- React/Vite client foundation
- Tailwind CSS styling
- A Hebrew RTL single-page floral-event landing page
- Header with direct contact paths
- Hero introduction
- Work gallery
- Event-floral services
- About section
- Contact section and footer
- Planning, CI, security, and future deployment foundations

## Out of scope until approved

- Backend or database
- Real authentication or authorization
- Payments or commerce
- User data collection
- Analytics, monitoring, or other external services

## Approved launch decisions

- The published Hebrew copy is approved for the first release.
- The owner confirmed that Shir VaPerah has the right to republish the logo, photographs, and text currently published on the Base44 reference.
- The approved logo and photographs are stored as optimized local assets in the public client.
- Launch contact actions are WhatsApp, telephone, and Instagram; no contact form is included.
- Cloudflare Pages is the production host, and `https://shirvaperah.co.il` is the canonical production URL.
- No blocking product questions remain for the released landing page.

## Definition of ready for a feature

A feature is ready for implementation when:

- Its problem, users, scope, exclusions, and acceptance criteria are documented.
- Its design resolves relevant UI, behavior, data, accessibility, responsive, and technical decisions.
- Blocking questions are resolved.
- Its tasks trace back to requirements or acceptance criteria.

## Definition of done for a feature

A feature is done when:

- All accepted tasks and acceptance criteria are complete.
- Relevant automated checks and the production build pass.
- The reusable project sanity check and the feature-specific verification scenarios pass.
- The change has been reviewed in a pull-request preview when available.
- Documentation matches the implemented result.
