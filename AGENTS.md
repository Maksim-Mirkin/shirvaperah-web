# Codex boundaries

These instructions apply to the entire repository.

## Scope

- This repository contains the public React web client only.
- Do not add a server, database, authentication provider, deployment target, or external service without explicit user approval.
- Keep reusable UI in `src/components/`, pages in `src/pages/`, and shared helpers in `src/lib/`.
- Preserve Hebrew RTL support unless a redesign explicitly changes the language direction.

## Safety

- Never commit secrets, credentials, tokens, private keys, personal data, `.env` files, `node_modules/`, or `dist/`.
- Do not copy files or history from the private `shirvaperah` repository.
- Do not change repository visibility, licensing, branch rules, access, or security settings without explicit approval.
- Do not force-push or delete `main`.

## Verification

Before publishing a change, run:

```bash
npm install
npm run build
npm audit
```

- The production build must pass.
- New dependency vulnerabilities must be reported and resolved when a safe fix exists.
- Keep changes focused and avoid unrelated rewrites.

## Git workflow

- Use a focused branch and pull request for substantive changes.
- Use concise commit messages.
- Do not bypass required checks or unresolved review discussions.
