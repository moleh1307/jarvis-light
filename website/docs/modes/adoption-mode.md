---
title: Adoption Mode
description: How JARVIS OS takes over an existing project safely.
---

# Adoption Mode

Adoption Mode is Specialist Mode for an existing project.

Use it when the repo, research folder, website, app, or writing project already exists and JARVIS OS needs to take over without breaking things.

## First Principle

Existing code and files are evidence, not authority.

The agent should inspect before reorganizing, but after the audit and baseline preservation, the Specialist Mode team owns the project outcome.

## Adoption Prompt

```text
Jarvis, use JARVIS OS Specialist Mode.

Adopt this existing project:
/path/to/project

Your first role is Founder / Organizational Auditor.
Audit first, then create the company layer around the existing structure.
Do not reorganize or rewrite anything before the audit.
```

## Audit First

The adoption audit should record:

- what the project appears to be;
- folder structure;
- build/test/deploy surfaces;
- documentation state;
- known outputs;
- risks;
- unknowns;
- recommended Specialist Mode layer size.

Separate observed facts from inferences.

## After Audit

After baseline preservation, the team may:

- improve documentation;
- refactor;
- redesign;
- rebuild parts;
- merge duplicate state;
- create work orders;
- change structure if justified.

Changes must stay inside the charter, quality bar, verification path, and escalation boundaries.
