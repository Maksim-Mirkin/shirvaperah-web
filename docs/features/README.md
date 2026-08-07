# Feature specifications

Create one kebab-case directory per substantive feature:

```text
docs/features/<feature-name>/
  REQUIREMENTS.md
  DESIGN.md
  TASKS.md
```

Copy the files from `_template/`, replace all placeholders, and keep the specification updated when an approved decision changes during implementation.

## Standard flow

```text
requirements -> design -> tasks -> implementation -> verification
```

Visual exploration may precede requirements, but tasks and implementation must wait for confirmed requirements and a final design.
