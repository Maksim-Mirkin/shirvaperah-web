# Landing page requirements

## Status

Approved

## Problem

People planning celebrations in Israel need a clear, visual way to understand Shir VaPerah's floral event-decoration offering, see examples of its work, and contact the business.

## Users

- Primary: people in Israel planning an upcoming wedding, bar or bat mitzvah, or similar celebration.
- Secondary: people comparing floral services, buying an arrangement, or considering a floral workshop.

## Goals

- Present Shir VaPerah as a floral business specializing in event decoration.
- Build trust through authentic floral photography, business story, and clear service descriptions.
- Help visitors quickly contact the business through the approved contact channels.
- Deliver a polished Hebrew RTL experience on mobile and desktop.

## Non-goals

- Online purchasing, checkout, or payment
- Customer accounts or authentication
- Event booking or inventory management
- Backend, database, or content-management system
- Multiple route-level pages for the first release

## Reference

The existing `https://shirvaperah.base44.app` landing page is the structural reference for the first result. Its observed sections are:

1. Header with logo, Instagram, telephone, and contact call to action
2. Hero introduction with floral imagery
3. Filtered work gallery
4. Services
5. About the business and its owners
6. Contact information and footer

The first release should reproduce the reference's structure, content, photographs, and visual direction as closely as practical in the current React/Vite codebase. Small implementation differences are acceptable when required for accessibility, responsive behavior, performance, security, or maintainability.

## User journeys

1. A visitor arrives, understands what Shir VaPerah offers, reviews event-floral examples, and starts a contact conversation.
2. A visitor explores the gallery to assess style and suitability for an upcoming celebration.
3. A visitor reviews services for a wedding, bar or bat mitzvah, or another event.
4. A visitor learns about the people behind the business and finds its service area and contact details.

## Functional requirements

- **REQ-1:** The first release must be presented as a single-page Hebrew landing page.
- **REQ-2:** The page must identify Shir VaPerah as a floral business offering event decoration.
- **REQ-3:** The page must include a clear hero introduction and primary contact action.
- **REQ-4:** The page must include a gallery of approved floral-work photographs.
- **REQ-5:** The page must describe approved services, including relevant event-decoration services.
- **REQ-6:** The page must include an about section describing the business and its owners.
- **REQ-7:** The page must expose the owner-approved contact channels and service area.
- **REQ-8:** Contact links must use the correct destination and interaction type, such as `tel:`, WhatsApp, or Instagram.

## Quality requirements

- **REQ-9:** The complete page must use correct Hebrew RTL layout and readable Hebrew typography.
- **REQ-10:** All sections and contact actions must remain usable on common mobile and desktop viewport sizes.
- **REQ-11:** Content images must have meaningful alternative text; decorative images must not create screen-reader noise.
- **REQ-12:** Interactive elements must be keyboard accessible and have visible focus states.
- **REQ-13:** The page must avoid committing secrets, personal data beyond approved public business contact details, or unlicensed assets.
- **REQ-14:** The production build and required CI checks must pass before release.
- **REQ-15:** Key content must remain understandable if animations are unavailable or reduced motion is requested.

## Acceptance criteria

- **AC-1:** Given a first-time visitor, when the page loads, then the business purpose and primary contact action are apparent in the initial experience.
- **AC-2:** Given a visitor planning an event, when they review the page, then they can find floral examples, services, business background, service area, and contact options without navigating to another internal page.
- **AC-3:** Given a supported mobile or desktop viewport, when the visitor uses the page, then no essential content is clipped or obscured and all contact controls remain usable.
- **AC-4:** Given keyboard-only navigation, when the visitor moves through interactive controls, then every control is reachable, identifiable, and visibly focused.
- **AC-5:** Given approved business contact details, when a visitor activates a contact link, then it opens the correct telephone, WhatsApp, or Instagram destination.
- **AC-6:** Given the final production change, when CI runs, then dependency audit and production build checks pass.

## Content and assets required

- The logo currently published on the Base44 reference
- The Hebrew copy currently published on the Base44 reference
- The floral gallery photographs currently published on the Base44 reference
- The about-section photograph currently published on the Base44 reference
- Public telephone number
- WhatsApp destination
- Instagram account
- Confirmed service-area wording
- Confirmation that all supplied images and copy may be published

## Dependencies and constraints

- Approved photographs and brand assets may be obtained from the Base44 reference when technically available. The owner confirmed the right to republish them.
- Optimized web derivatives belong in `src/assets/images/`; original high-resolution source files should be retained outside Git in owner-controlled storage.
- The current client-only React/Vite architecture must be preserved unless a separate architectural change is approved.
- Hosting and the production domain have not yet been selected.

## Resolved decisions

- The services section will initially reproduce the four services published on the Base44 reference: custom bouquets, floral arrangements for events, bar/bat mitzvah decoration, and flower-arranging workshops.
- WhatsApp is the primary contact action. Telephone and Instagram are secondary contact channels.
- The first release retains the three gallery filters published on the reference: bouquets, table arrangements, and floral designs.
- The first release uses the currently published service-area wording: Tivon and the surrounding area, with deliveries available. The owner will verify the wording before production release.
- Hosting and production-domain configuration are separate release-infrastructure decisions and do not block landing-page design or local implementation.

## Approval

- Owner: Maksim Mirkin
- Status: Approved
- Date: 2026-08-07
