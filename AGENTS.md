# Codex workflow and boundaries

These instructions apply to the entire repository.

## Scope

- This repository contains the public React web client only.
- Do not add a server, database, authentication provider, deployment target, or external service without explicit user approval.
- Keep reusable UI in `src/components/`, pages in `src/pages/`, and shared helpers in `src/lib/`.
- Preserve Hebrew RTL support unless a redesign explicitly changes the language direction.

## Source of truth

- Project-wide product requirements live in `docs/project/REQUIREMENTS.md`.
- Project-wide technical decisions and system boundaries live in `docs/project/ARCHITECTURE.md`.
- Feature specifications live in `docs/features/<feature-name>/`.
- When code and documentation disagree, stop and surface the conflict. Do not silently redefine the requirement or architecture.

## Planning workflow

Use the following workflow for substantive features:

1. Write and validate `REQUIREMENTS.md`.
2. Write `DESIGN.md` against the accepted requirements.
3. Write `TASKS.md` from the accepted requirements and design.
4. Implement tasks on a focused feature branch.
5. Verify the acceptance criteria and update the specification if an approved decision changed.
6. Review `docs/project/ARCHITECTURE.md`; update it when the feature changed project-wide architecture, and record "No architecture change" in the feature tasks when it did not.
7. Open a pull request.

A visual exploration may begin with a design concept, but confirmed requirements must exist before tasks or implementation:

```text
design concept -> requirements -> final design -> tasks -> implementation
```

Rules for the workflow:

- Do not implement a substantive feature before its requirements and design are agreed.
- Do not generate implementation tasks while requirements or design contain unresolved blocking questions.
- Every task must reference the requirement or acceptance criterion it satisfies.
- Do not silently expand scope. Record suggestions under "Out of scope" or "Open questions" for user review.
- Keep requirements focused on outcomes, design focused on behavior and technical choices, and tasks focused on executable work.
- Every feature must finish with an architecture-impact review. Do not edit `ARCHITECTURE.md` merely to restate feature-local implementation details.
- Small typo, documentation-only, dependency-maintenance, and urgent security fixes may use a shortened workflow when the change is obvious and low risk.

## Execution and owner checkpoints

- Implementation tasks are agent-owned. Execute consecutive tasks autonomously in the documented order without asking the owner to approve each task.
- Owner review happens only at an explicit `CHECKPOINT` in the feature `TASKS.md`, unless progress is genuinely blocked by missing authority, missing required information, or a safety concern.
- Complete every task before the next checkpoint, run the checkpoint's stated verification, start the local site when visual review is required, and then stop for owner feedback.
- Do not start work after a checkpoint until the owner explicitly approves continuing.
- Apply requested checkpoint changes, re-run the checkpoint verification, and pause again until approved.
- Routine implementation choices that stay inside approved requirements and design do not require additional owner confirmation.
- Commits, pushes, and pull requests follow the feature's documented checkpoint instructions. Never publish merely because an implementation task finished.

## Safety

- Never commit secrets, credentials, tokens, private keys, personal data, `.env` files, `node_modules/`, or `dist/`.
- Do not copy files or history from the private `shirvaperah` repository.
- Do not change repository visibility, licensing, branch rules, access, or security settings without explicit approval.
- Do not force-push or delete `main`.

## Verification

Before publishing a change, run:

```bash
npm ci
npm run build
npm audit --audit-level=high
```

- The production build must pass.
- New dependency vulnerabilities must be reported and resolved when a safe fix exists.
- Keep changes focused and avoid unrelated rewrites.

## Git workflow

- Keep `main` as the single permanent production branch.
- Use a focused branch and pull request for substantive changes.
- Use temporary `feature/*`, `fix/*`, or automated dependency branches and delete them after merge.
- Use concise commit messages.
- Do not bypass required checks or unresolved review discussions.
- Deploy pull requests to preview environments when hosting is configured; deploy production only from `main`.
- Roll back production with a revert commit or a previously verified hosting deployment, then reconcile `main` immediately.
