# שיר ופרח — Shir VaPerah Web

Public web client for the Shir VaPerah project.

This repository contains the public, client-only website for Shir VaPerah. The previous private full-stack project and its history are not included.

## Current status

- Single-page Hebrew RTL landing page
- Responsive React and strict TypeScript implementation
- Vite build tooling and Tailwind CSS styling
- Local business photography and static content
- No backend, database, authentication, or persistent user data
- Production hosting on Cloudflare Pages: `https://shirvaperah-web.pages.dev`
- Custom domain `shirvaperah.co.il` ordered and awaiting registrar/DNS activation

## Requirements

- Node.js 18 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173`.

## Verify a change

```bash
npm run build
npm run typecheck
npm audit --audit-level=high
```

## Production preview

```bash
npm run build
npm run preview
```

## Add photographs

Keep original high-resolution photographs outside Git. Generate optimized WebP files directly into `src/assets/images/`:

```bash
npm run images:optimize -- /path/to/photo-1.jpg /path/to/photo-2.jpg
```

The optimizer corrects image orientation, limits oversized inputs to 1600 × 1600 pixels without enlargement, and produces WebP assets for the site. Import the generated files from `src/content/site-content.ts`.

## Contributing

Open a focused pull request against `main`. Automated dependency and production-build checks must pass before merging.

## Security

Please follow [SECURITY.md](SECURITY.md) when reporting a vulnerability. Do not include secrets or sensitive information in public issues.

## License

Licensed under the [MIT License](LICENSE).
