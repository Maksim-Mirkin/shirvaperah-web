# Landing page design

## Status

Approved

## Related requirements

- [Landing page requirements](./REQUIREMENTS.md)
- Requirements covered: REQ-1 through REQ-15

## Overview

Build a single-page Hebrew RTL landing page that closely reproduces the approved Base44 reference while keeping the implementation static, accessible, responsive, and maintainable in the existing React/Vite client.

The visual direction uses warm off-white backgrounds, deep botanical green text, muted green supporting text, dusty-pink accents, generous whitespace, rounded photography, and Heebo typography. The three prominent hero text elements use the locally bundled Gveret Levin display face. Authentic business photographs carry most of the visual weight.

## User experience

### Page structure

1. **Header:** business logo, anchor navigation, Instagram and telephone links, a prominent WhatsApp/contact action, and a compact mobile menu.
2. **Hero:** the business name, “בוטיק פרחים בטבעון”, the Rotblit quotation, a short description, a primary WhatsApp action, and featured floral imagery.
3. **Gallery:** heading and description, four keyboard-operable category filters, and a responsive horizontal carousel for all photographs, bridal bouquets, table arrangements, and floral designs.
4. **Services:** three evenly distributed cards for event arrangements, wedding decoration, and flower-arranging workshops.
5. **About:** the published story of the two sisters, the quotation “ימי הפרח והאהבה”, and the approved portrait/work photograph.
6. **Contact and footer:** WhatsApp and telephone actions, telephone number, Instagram link, service area, and copyright notice.

Header navigation scrolls to page sections using stable anchor IDs. The header remains visually available while browsing, but must not cover a section heading after anchor navigation.

### Responsive behavior

- Mobile is the baseline layout: single-column content, touch-sized actions, gallery filters arranged in a stable two-by-two grid, and a menu button for navigation.
- Larger screens use split hero/about layouts, three-column service cards, and a wider gallery carousel.
- The wedding service card is first on mobile and returns to the middle position in the three-column desktop layout.
- Images preserve their intended crop with `object-fit: cover`; no essential faces or arrangements may be cropped without visual review.
- Page content uses a shared maximum width and fluid side padding.

### Gallery interaction

- The all-photographs category is selected by default and is shuffled once per page load.
- Selecting a filter changes the visible image set without navigation or persistence.
- The selected filter is visually distinct and exposed programmatically with `aria-pressed`.
- If an approved category has no images, it is omitted rather than showing an empty gallery.
- The carousel remains still until the visitor interacts, supports horizontal touch/pointer dragging and visible arrow controls, and loops continuously.
- Drag release preserves the natural position; arrow activation advances far enough to reveal the next photograph completely.
- Activating a photograph opens a lightbox. Escape, the close control, the backdrop, and the enlarged photograph all close it.
- Hover-only feedback is restricted to devices with a fine pointer and hover support.

### Content handling

- Hebrew copy and public business contact details are kept in a small local content module rather than embedded throughout components.
- The Base44 publication is the initial content source. Contact destinations and service-area wording must be checked by the owner before release.
- Downloaded assets are stored locally so the production page does not depend on Base44 or its storage URLs.

## Component design

```text
App
└── Layout (RTL document shell)
    └── Home
        ├── SiteHeader
        │   └── MobileNavigation
        ├── HeroSection
        ├── GallerySection
        │   ├── GalleryFilters
        │   ├── GalleryCarousel
        │   └── GalleryLightbox
        ├── ServicesSection
        │   └── ServiceCard × 3
        ├── AboutSection
        └── ContactFooter
```

- Section components live in `src/components/landing/`.
- Reusable primitives that are not landing-page-specific remain in `src/components/ui/`.
- Business copy, contact destinations, services, and gallery metadata live in `src/content/site-content.ts`.
- Optimized images live in `src/assets/images/` and are imported by the content module.
- `Home.tsx` composes sections and owns no business data.

The existing Base44-specific authentication, query-client, toaster, and multi-page configuration are unnecessary for this static public page and will be removed if no current landing-page requirement uses them. React and Vite remain the runtime and build foundation.

## Data and state

- All content is static and bundled at build time.
- Gallery selection, carousel interaction, lightbox visibility, hero rotation, and mobile-menu visibility are local React state.
- No state is persisted and no network request is required to render the page.
- External contact actions use normal links (`https://wa.me/`, `tel:`, and Instagram HTTPS) rather than JavaScript navigation.
- Image loading uses native browser behavior. Below-the-fold gallery images use lazy loading; the primary hero image is loaded eagerly.

## Accessibility

- Set `lang="he"` and `dir="rtl"` at the document level.
- Use one page-level `h1`, ordered section headings, semantic `header`, `nav`, `main`, `section`, and `footer` landmarks.
- Give content images concise Hebrew alternative text and empty alternative text to purely decorative imagery.
- Implement gallery filters and the mobile-menu trigger as native buttons with visible keyboard focus.
- Expose the mobile menu's expanded state with `aria-expanded` and connect it to the controlled navigation element.
- Keep interactive targets at least 44 by 44 CSS pixels where practical.
- Respect `prefers-reduced-motion`; content and navigation remain usable without transitions.
- Verify foreground/background combinations for WCAG AA contrast.

## Typography details

- Heebo remains the primary interface and body typeface.
- Gveret Levin is self-hosted through Fontsource and is used only for the hero business name, quotation, and description.
- Gveret Levin provides only a regular weight. A small SVG morphology filter visually thins those hero glyphs; the business name uses a slightly stronger value than the other two lines.

## Security and privacy

- No forms, accounts, cookies, analytics, backend, or user-data collection are introduced.
- External links opened in a new tab use `rel="noopener noreferrer"`.
- Only owner-approved public contact details and licensed/owned images are committed.
- Remote Base44/Supabase asset URLs are used only as acquisition sources, never as production runtime dependencies.

## Alternatives considered

- **Continue loading assets from Base44 storage:** rejected because it creates an avoidable production dependency and gives less control over availability and optimization.
- **Keep the generated Base44 authentication and data layers:** rejected because the approved page is public and static, and these layers add complexity without supporting a requirement.
- **Create separate routes for gallery, services, and about:** rejected because the first release is explicitly a single-page experience.
- **Add a staging branch:** rejected for now; temporary feature branches and local verification are sufficient, while production remains tied to `main`.

## Risks and rollback

- Risk: copied images may be too large for a fast mobile experience.
- Mitigation: produce appropriately sized WebP/AVIF derivatives, preserve originals outside Git, and verify the final bundle.
- Risk: contact or service-area details from the reference may be outdated.
- Mitigation: centralize them in one content module and require owner verification before release.
- Risk: visual reproduction may crop images differently across devices.
- Mitigation: visually test common mobile and desktop widths and adjust focal positioning per asset.
- Rollback: revert the feature merge on `main` or redeploy the last verified production build.

## Open questions

- None blocking design approval; contact details, service-area wording, and the current image selection were verified by the owner at the landing-page checkpoints.

## Approval

- Owner: Maksim Mirkin
- Status: Approved
- Date: 2026-08-07
