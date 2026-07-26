# שיר ופרח — Shir VaPerah Web

Public web client for the Shir VaPerah project.

This repository starts with a clean history and contains only the current React client. The previous private full-stack project and its history are not included.

## Current status

- Minimal Hebrew RTL home page
- Responsive React/Vite foundation
- TanStack Query configured
- Tailwind CSS styling
- Temporary local authentication and toast placeholders
- No backend or database integration

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
npm audit
```

## Production preview

```bash
npm run build
npm run preview
```

## Contributing

Open a focused pull request against `main`. Automated dependency and production-build checks must pass before merging.

## Security

Please follow [SECURITY.md](SECURITY.md) when reporting a vulnerability. Do not include secrets or sensitive information in public issues.

## License

Licensed under the [MIT License](LICENSE).
