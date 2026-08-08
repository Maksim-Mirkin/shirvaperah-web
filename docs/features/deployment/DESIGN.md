# Cloudflare Pages deployment design

## Status

Approved

## Related requirements

- [Deployment requirements](./REQUIREMENTS.md)
- Requirements covered: REQ-1 through REQ-11

## Overview

Deploy the existing static Vite application through Cloudflare Pages using its GitHub integration. `main` is the only production branch and automatic preview deployments are disabled, so feature commits remain local/GitHub-only until approved and merged.

```text
feature branch
  -> local checkpoint
  -> pull request + GitHub CI
  -> protected main
  -> Cloudflare Pages build
  -> shirvaperah-web.pages.dev
  -> shirvaperah.co.il (after registrar activation and DNS connection)
```

## Cloudflare configuration

- Product: Cloudflare Pages with Git integration
- Repository: `Maksim-Mirkin/shirvaperah-web`
- Production branch: `main`
- Framework preset: Vite
- Root directory: repository root
- Build command: `npm run typecheck && npm run build`
- Output directory: `dist`
- Environment variables: none
- Production branch deployments: enabled
- Preview branch deployments: disabled (`None`)

Cloudflare installs locked dependencies before executing the build command. A non-zero typecheck or Vite exit code fails the deployment and leaves the previous successful production deployment active.

## Ownership and access

- The wife owns the Cloudflare account, recovery email, two-factor authentication, Pages project, DNS zone, and future domain registration.
- GitHub access is limited to the single website repository.
- No Cloudflare API token or account credential is committed to GitHub or the repository.
- Additional collaborators receive least-privilege access only when needed.

## Domain connection

The live Pages project uses `https://shirvaperah-web.pages.dev`. After SPD activates the ordered `shirvaperah.co.il` registration:

1. Add `shirvaperah.co.il` as a zone in the owner's Cloudflare account.
2. Replace the registrar's nameservers with the two nameservers assigned by Cloudflare.
3. Add `shirvaperah.co.il` under the Pages project's Custom domains screen.
4. Add and redirect `www.shirvaperah.co.il` to the canonical apex domain.
5. Wait for DNS and managed HTTPS activation, then verify both hostnames.
6. Add the production canonical URL and absolute social-preview image URL to site metadata in a follow-up code change.

## Build and release behavior

- GitHub CI continues to validate pull requests independently of Cloudflare.
- Cloudflare production deployment begins only after an approved change reaches `main`.
- Feature branches do not consume Pages builds and do not create public preview URLs.
- A failed production build cannot replace the current live deployment.
- Deployment state is observable in both the Cloudflare dashboard and the commit status associated with `main`.

## Security and privacy

- The website remains static and sends no visitor data to an application backend.
- Cloudflare provides managed HTTPS for the Pages URL and attached domain.
- No cookies, analytics, Pages Functions, environment secrets, or user-data storage are introduced.
- Repository authorization is restricted to the one required repository.
- Account recovery and two-factor authentication remain under owner control.

## Alternatives considered

- **Vercel:** straightforward Vite deployment, but Cloudflare Pages provides a suitable free static-commercial path and will also manage the future apex DNS.
- **GitHub Pages:** adequate for static hosting, but has a less integrated production/rollback experience and would still require separate DNS handling.
- **Direct Upload/Wrangler:** avoids Git-triggered builds but requires deployment credentials in local or CI automation. Git integration is simpler and keeps credentials out of the repository.
- **Automatic branch previews:** useful later, but intentionally disabled because the owner does not want every feature-branch commit to trigger a build.

## Risks and rollback

- Risk: Incorrect Git branch controls could deploy unfinished feature work.
- Mitigation: Confirm production branch `main` and preview branches `None` before the first deployment.
- Risk: Incorrect nameserver changes could temporarily prevent the custom domain from resolving.
- Mitigation: Attach and verify the Pages project first, copy Cloudflare's exact nameserver values, and retain registrar access.
- Risk: A production change passes CI but has a visual defect.
- Mitigation: Keep the local checkpoint workflow and restore the prior Pages deployment immediately while preparing a Git revert.
- Rollback: Use Cloudflare deployment history to restore the last verified version, then revert or correct `main` so source control matches production.

## Open questions

- None blocking.

## Approval

- Owner: Maksim Mirkin
- Status: Approved
- Date: 2026-08-07
