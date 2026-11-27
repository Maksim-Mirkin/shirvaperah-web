# Accessibility baseline design

## Status

Approved — owner delegated technical accessibility decisions on 2026-08-20

## Related requirements

- [Accessibility baseline requirements](./REQUIREMENTS.md)
- Requirements covered: REQ-1 through REQ-26; AC-1 through AC-9

## Overview

Improve the existing landing page in place, using native HTML and small reusable React focus helpers rather than an overlay, toolbar, or large accessibility dependency. The work begins with a rendered-page audit, corrects confirmed semantic and interaction barriers, and ends with automated plus manual verification on desktop and mobile.

The visual identity and visitor journeys remain unchanged. Most changes will affect semantics, focus behavior, alternative text, announcements, motion preferences, and narrow/zoomed layouts rather than the normal visual presentation.

## User experience

### Page navigation

- Keep the existing Hebrew skip link and ensure its target can receive programmatic focus without placing it in the normal Tab sequence.
- Preserve the visible fixed header while ensuring anchor targets and focused content are not obscured by it.
- Maintain a logical DOM, heading, landmark, and keyboard order that follows the RTL page presentation.

### Mobile contact menu

- Treat the open mobile menu as a modal navigation surface on mobile.
- Store the element that opened the menu, move focus to the first menu action after opening, and restore focus to the trigger after every close path.
- While open, make the rest of the page inert and contain Tab/Shift+Tab within the trigger and menu actions.
- Keep Escape, trigger-toggle, and link activation as close paths.
- Preserve the existing visual animation, except when reduced motion is requested.

### Gallery carousel

- Keep the existing filters, infinite visual loop, pointer dragging, swipe behavior, arrow buttons, and random All ordering.
- Expose only the middle logical copy of looped photographs to keyboard and assistive technology. Visual duplicates remain hidden semantically and excluded from keyboard navigation, but support pointer/touch activation so every visible photograph can open regardless of the current loop copy.
- Recenter the visual loop only after native scrolling settles so the correction does not interrupt mobile swipe momentum.
- Provide an assistive-technology and keyboard skip link before the logical gallery images so visitors can continue to the services section without traversing every photograph.
- Give each gallery image a stable content record with its source and meaningful Hebrew alternative text instead of deriving identical alt text from the category label.
- Announce category and result-count changes through one dedicated polite status region. Avoid placing `aria-live` on the scrolling container, which can generate repeated announcements.
- Preserve buttons as complete non-gesture alternatives to drag and swipe.

### Lightbox

- Keep the full-screen visual layout, close button, backdrop/image dismissal, previous/next controls, keyboard arrows, full-screen swipe handling, and scroll lock.
- Store the exact gallery trigger that opened the lightbox and restore focus to it when the close transition finishes.
- Move focus to the close button on open and contain Tab/Shift+Tab within the dialog controls until close.
- Make the background application inert while the dialog is present.
- Provide a dialog description/status that announces the current image position and meaningful image alternative without repeatedly announcing unrelated carousel content.
- Prevent focus from moving to controls during the closing transition.

### Zoom, contrast, motion, and touch

- Audit the existing color tokens and component states; adjust only combinations that fail the accepted contrast criteria.
- Verify content and controls at 200% text size and the 400%-zoom equivalent narrow viewport. Replace fixed sizing or spacing only where it causes clipping, overlap, or two-dimensional page scrolling.
- Retain the existing minimum 44 CSS-pixel primary touch controls and correct smaller targets or insufficient spacing found by the audit.
- Extend the existing reduced-motion stylesheet so programmatic carousel scrolling, delayed fades, transforms, and smooth navigation use immediate behavior when the preference is active.

## Component design

```text
Home
├── SkipLink -> #main-content
├── SiteHeader
│   ├── desktop contact navigation
│   ├── mobile menu trigger
│   └── modal mobile contact navigation
├── main
│   ├── HeroSection
│   ├── GallerySection
│   │   ├── category controls
│   │   ├── dedicated gallery status
│   │   ├── looping visual carousel
│   │   └── modal lightbox
│   ├── ServicesSection
│   └── AboutSection
└── ContactFooter

shared interaction helpers
├── focusable-element query
├── focus containment
├── opener focus restoration
├── background inert management
└── reduced-motion detection
```

- Keep reusable focus/inert behavior in a small helper or hook under `src/lib/` when shared by the menu and lightbox.
- Keep component-specific state and labels in their existing landing components.
- Expand the current content records in `src/content/site-content.ts` for image alternative text; do not introduce a backend or content service.

## Data and state

- Gallery photographs become objects containing at least `src` and `alt`, while category membership continues to reference the same in-memory static content.
- UI state remains transient React state: active category, readiness, carousel position, menu visibility, lightbox index, and transition visibility.
- Each modal surface holds a ref to its opener and its preferred initial focus target.
- Background inert state and modified document styles are restored to their exact previous values during cleanup, including component unmount.
- Reduced-motion preference is read with `matchMedia`; behavior must also respond safely if the system preference changes while the page is open.
- No persistence, loading API, empty API response, personal data, or failure network state is introduced.

## Accessibility implementation

- Prefer native `header`, `nav`, `main`, `section`, `button`, `a`, `img`, and heading semantics; use ARIA only for state or relationships native HTML cannot express.
- Use `role="dialog"` and `aria-modal="true"` only for genuinely modal open states.
- Use the native `inert` property for inactive application regions, with controlled focus containment as behavioral defense.
- Avoid `aria-hidden` on an ancestor that contains focused content. Move focus before making a region inert or hidden.
- Use a single polite status node for gallery updates and avoid announcing purely visual loading transitions.
- Ensure decorative SVGs and images use `aria-hidden="true"` or empty alternative text as appropriate.
- Verify accessible names and Hebrew phrasing with VoiceOver rather than assuming ARIA output.

## Verification design

### Automated

- Run TypeScript, production build, dependency audit, and a rendered-page accessibility scanner at representative desktop and mobile viewport sizes.
- Check rendered markup for duplicate IDs, missing names, invalid ARIA, contrast findings detectable by tooling, and focusable elements inside hidden/inert regions.

### Manual desktop

- Chrome or Safari keyboard-only traversal at normal size and zoom/reflow sizes.
- Safari with macOS VoiceOver for landmarks, headings, controls, state, gallery changes, menu, and lightbox.
- Reduced-motion and increased text-size checks.

### Manual mobile

- Real iPhone Safari layout, orientation, zoom/text sizing, touch targets, menu, gallery, lightbox, scroll lock, and swipe regression checks.
- iPhone VoiceOver traversal using a short owner-assisted checklist.

### Evidence

- Record results in `VERIFICATION.md` with the tested commit, environment, checks, findings, fixes, remaining limitations, and retest outcome.

## Security and privacy

No additional data collection, external service, authentication, storage, or user tracking is introduced. Focus and preference state remain local to the current browser session. No accessibility or disability information is collected.

## Alternatives considered

- **Third-party accessibility widget:** Rejected because it does not correct underlying markup and interaction barriers, adds runtime and privacy risk, and is explicitly outside the approved requirements.
- **Large dialog/carousel dependency:** Rejected because the existing interactions are small enough to correct directly and a dependency would add bundle weight and regression surface.
- **Replace the looping carousel:** Rejected because the approved behavior can remain while duplicate visual copies are made inert and semantically hidden.
- **Publish an accessibility statement now:** Rejected as out of scope by the owner; this feature improves and verifies the product without publishing a declaration.

## Risks and rollback

- **Risk:** Focus containment can trap users if cleanup fails.
  - **Mitigation:** Share a small tested helper, restore exact prior state, verify every close path, and test unmount cleanup.
- **Risk:** Making background regions inert can accidentally include the active modal.
  - **Mitigation:** Keep each modal outside the region it disables and move focus before state changes.
- **Risk:** Gallery content-model changes can alter randomization or loop behavior.
  - **Mitigation:** Preserve object identity and category membership rules; add regression checks for ordering, filtering, and navigation.
- **Risk:** Contrast or reflow fixes can change the accepted visual appearance.
  - **Mitigation:** Prefer the smallest token or spacing adjustment and use the local desktop and phone review checkpoint.
- **Rollback:** Revert the focused feature commit or restore the previous verified Cloudflare production deployment, then reconcile `main` through Git.

## Architecture impact

No project-wide architecture change is expected. The work remains within the existing static React client and may add only shared client-side helpers under `src/lib/`. The final task review must confirm this conclusion.

## Open questions

None.

## Approval

- Owner: Maksim Mirkin
- Status: Approved
- Date: 2026-08-20
