# Accessibility baseline requirements

## Status

Approved

## Problem

The public landing page already includes several accessibility foundations, but it has not been verified as a complete, coherent experience for keyboard, screen-reader, low-vision, reduced-motion, or touch users. Interactive overlays, the looping gallery, visual focus, content alternatives, zoom, and reflow need a focused audit and confirmed fixes before the content-management system introduces more interface complexity.

## Users

- Visitors who navigate with a keyboard or switch-like input.
- Visitors using screen readers or other assistive technology in Hebrew RTL.
- Visitors with low vision who zoom, enlarge text, or need sufficient contrast and visible focus.
- Visitors with motion sensitivity or limited fine-motor control.
- Business owners who need an accurate account of the site's accessibility without making an unsupported compliance claim.

## Goals

- Establish a practical accessibility baseline for the existing public single-page site on mobile and desktop.
- Target the applicable WCAG 2.2 Level A and AA success criteria as a technical quality benchmark.
- Preserve the current Hebrew RTL design, content, contact journeys, and gallery behavior while removing confirmed barriers.
- Produce reproducible automated and manual verification evidence.
- Define accessibility expectations that future CMS features must inherit.

## Non-goals

- Legal certification, legal advice, or a guarantee of statutory compliance.
- Claiming WCAG conformance before every applicable criterion has been evaluated.
- Publishing a Hebrew accessibility statement as part of this feature.
- Adding a third-party accessibility overlay, toolbar, or cosmetic accessibility widget.
- Redesigning the brand, changing approved business copy, or adding unrelated site sections.
- Building CMS or editor functionality.
- Supporting obsolete browsers or assistive-technology combinations beyond the agreed verification matrix.

## User journeys

1. A keyboard user enters the page, skips repetitive navigation, reaches every interactive control in a logical order, sees where focus is, and never becomes trapped or loses context.
2. A screen-reader user understands the page structure, contact links, gallery filters, image controls, current gallery state, and expanded-image state in Hebrew.
3. A mobile user with limited dexterity can operate controls without relying on precise gestures; swipe-only actions have button alternatives.
4. A low-vision user zooms or enlarges text without losing content, controls, reading order, or the ability to contact the business.
5. A motion-sensitive user receives the same information and functionality with reduced non-essential motion.
6. A visitor opens and closes the mobile menu or lightbox and focus moves into the opened interface, stays within it where appropriate, and returns to the control that opened it.

## Functional requirements

- **REQ-1 — Structure and language:** The document must expose the correct Hebrew language and RTL direction, one clear primary heading, logical heading levels, appropriate landmarks, and a functional skip link to the main content.
- **REQ-2 — Keyboard access:** Every visitor action must be available with a keyboard without requiring pointer dragging, hovering, or swiping. Keyboard order must follow the visual and semantic reading order.
- **REQ-3 — Visible and unobscured focus:** Every interactive element must have a clearly visible focus indicator with sufficient contrast, and focused content must not be hidden behind the fixed header or an overlay.
- **REQ-4 — Mobile menu focus:** Opening the mobile menu must place focus at an appropriate control inside it, prevent focus from moving into inactive page content, support Escape dismissal, and restore focus to the menu trigger when closed.
- **REQ-5 — Lightbox focus:** Opening the lightbox must announce a modal dialog, place focus inside it, contain keyboard focus, expose close/previous/next controls with understandable Hebrew names, support Escape and arrow-key operation, and restore focus to the originating gallery item when closed.
- **REQ-6 — Background isolation:** While the mobile menu or lightbox is open, inactive page content must not be exposed as operable content to keyboard or assistive-technology users, and background page scrolling must remain locked without causing a visible layout jump.
- **REQ-7 — Gallery state:** Gallery category controls must expose their selected state. Category changes and the current expanded-image position must be announced without excessive or duplicate screen-reader output.
- **REQ-8 — Gallery alternatives:** The looping carousel must not expose duplicate copies to assistive technology or keyboard navigation. Previous/next buttons and direct image activation must remain available as alternatives to drag and swipe gestures.
- **REQ-9 — Images and icons:** Informative images must have concise, meaningful Hebrew text alternatives that distinguish their purpose or content. Decorative images and icons must be ignored by assistive technology. The logo's accessible treatment must avoid duplicate naming.
- **REQ-10 — Links and controls:** Contact links and controls must have understandable names, correct native semantics, accurate state, and a touch target meeting the accepted accessibility baseline. Links that open a new context must remain understandable from their accessible name or surrounding context.
- **REQ-11 — Contrast and non-color cues:** Text, controls, focus indicators, and meaningful graphical elements must meet the applicable accepted contrast criteria. Information and state must not depend on color alone.
- **REQ-12 — Zoom, resize, and reflow:** At 200% text sizing and up to 400% browser zoom at the corresponding narrow viewport, visitors must be able to read content and operate controls without clipped text or two-dimensional page scrolling, except where an applicable exception is documented.
- **REQ-13 — Motion:** When `prefers-reduced-motion: reduce` is active, non-essential smooth scrolling, automatic transitions, scaling, and carousel motion must be removed or reduced without removing information or functionality.
- **REQ-14 — Status and loading:** Loading, busy, selected, expanded, and changing gallery states must be conveyed programmatically where needed without moving keyboard focus unexpectedly.
- **REQ-15 — Robust markup:** The rendered page must avoid duplicate IDs, invalid interactive nesting, missing accessible names, and ARIA that conflicts with native HTML behavior.
## Quality requirements

- **REQ-16 — Responsive coverage:** Requirements must hold on common mobile and desktop layouts in both portrait and landscape where relevant.
- **REQ-17 — Hebrew RTL:** Fixes must preserve Hebrew RTL reading order and use natural, understandable Hebrew accessible names and announcements.
- **REQ-18 — No overlay dependency:** Core accessibility must be implemented in the site's markup, styles, and behavior without depending on an external accessibility widget.
- **REQ-19 — Performance:** Accessibility changes must not add a heavy runtime dependency or materially regress the initial production load.
- **REQ-20 — Privacy and services:** Verification must not introduce analytics, personal-data collection, authentication, or a new external service.
- **REQ-21 — Regression safety:** Existing desktop and mobile contact paths, gallery filters, carousel buttons, pointer dragging, full-screen swiping, lightbox dismissal, and random ordering of the All category must continue to work.

## Verification requirements

- **REQ-22 — Automated checks:** Run the production build and an automated accessibility scan of the rendered page at representative desktop and mobile viewports; document and resolve serious findings or record an approved limitation.
- **REQ-23 — Keyboard checks:** Manually verify skip navigation, complete Tab/Shift+Tab order, Enter/Space activation, Escape dismissal, arrow controls, modal containment, and focus restoration.
- **REQ-24 — Screen-reader checks:** Manually verify VoiceOver with Safari on macOS and VoiceOver with Safari on iPhone, with special attention to Hebrew pronunciation, landmarks, control names, state, and modal behavior.
- **REQ-25 — Visual checks:** Manually verify contrast, visible focus, 200% text sizing, 400% zoom/reflow, reduced motion, orientation, and touch-target usability.
- **REQ-26 — Evidence:** Record the tested URLs, build commit, viewport/device or browser combinations, automated findings, manual results, accepted limitations, and retest outcome in the feature documentation.

## Acceptance criteria

- **AC-1:** Given keyboard-only navigation from the top of the page, when the visitor uses Tab, Shift+Tab, Enter, Space, Escape, and applicable arrow keys, then every site action is operable in a logical order with visible, unobscured focus.
- **AC-2:** Given the mobile menu or lightbox is opened from a focused trigger, when the visitor navigates and closes it by every supported method, then focus enters the interface, cannot reach inactive background controls, and returns to the originating trigger.
- **AC-3:** Given a screen reader is running, when the visitor navigates the page and gallery, then landmarks, headings, controls, selected states, image alternatives, modal state, and image-position changes are understandable in Hebrew without duplicate carousel content.
- **AC-4:** Given reduced-motion preference is enabled, when the visitor navigates, filters, opens overlays, and changes images, then non-essential animation is absent or effectively reduced and all functionality remains available.
- **AC-5:** Given text enlargement and 400% zoom/reflow testing, when the visitor reads and operates the page at the agreed test sizes, then no essential content or control is clipped, overlapped, or requires two-dimensional page scrolling without a documented applicable exception.
- **AC-6:** Given automated scans at representative desktop and mobile viewports, when the release candidate is tested, then no unresolved serious automated accessibility violation remains.
- **AC-7:** Given the accepted manual verification matrix, when all checks are completed, then results and any remaining limitations are documented against the tested commit.
- **AC-8:** Given the accessibility changes are applied, when existing responsive and interaction regression checks run, then the approved Hebrew RTL presentation, contact paths, gallery behavior, and lightbox gestures remain functional.
- **AC-9:** Given the feature is ready for release, when the architecture-impact review is completed, then `ARCHITECTURE.md` is updated only if a project-wide boundary changed; otherwise `TASKS.md` records “No architecture change.”

## Dependencies and constraints

- The public React/Vite client remains the only application in this repository.
- WCAG 2.2 Level A and AA are used as a technical benchmark; this document does not itself assert conformance or resolve Israeli legal obligations.
- Automated tools supplement but do not replace keyboard, screen-reader, zoom, contrast, and touch testing.
- The feature must follow requirements approval, design approval, traced tasks, implementation, verification, architecture review, and pull-request checkpoints.
- Any private evidence about a business exemption or personal disability information must remain outside the public repository.

## Open questions

None.

## Approval

- Owner: Maksim Mirkin
- Status: Approved
- Date: 2026-08-20
