# Feature specifications

Create one kebab-case directory per substantive feature:

```text
docs/features/<feature-name>/
  REQUIREMENTS.md
  DESIGN.md
  TASKS.md
  VERIFICATION.md
```

Copy the files from `_template/`, replace all placeholders, and keep the specification updated when an approved decision changes during implementation.

## Standard flow

```text
requirements -> design -> tasks -> implementation -> verification
```

Visual exploration may precede requirements, but tasks and implementation must wait for confirmed requirements and a final design.

## Verification and owner review

Every substantive user-visible feature uses two review layers:

1. Run the reusable project sanity check in [`docs/project/VERIFICATION.md`](../project/VERIFICATION.md).
2. Run the concrete owner actions in the feature's `VERIFICATION.md`.

The feature checklist must state actions and expected results and trace each scenario to requirements or acceptance criteria. Technical checks remain agent-owned and are recorded separately from owner review.

Every owner-review checkpoint or equivalent manual-review request must include clickable links to the project sanity check and the current feature's `VERIFICATION.md`.
