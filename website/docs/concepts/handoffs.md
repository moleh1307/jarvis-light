---
title: Handoffs
description: Durable continuation between long chats and fresh chats.
---

# Handoffs

Handoffs are one of the most important JARVIS OS artifacts.

They let the user retire a long chat without losing the working state.

## When To Create One

Create a handoff when:

- the chat is long;
- context compaction happened or is likely;
- a project will continue later;
- another agent needs to resume;
- there are important blockers, artifacts, or next steps.

Do not create one for trivial tasks.

## Handoff Shape

A handoff should include:

- objective;
- current status;
- completed work;
- in-progress work;
- blockers;
- exact next steps;
- files to read first;
- verification state;
- known risks.

## Good Handoff Example

```md
# Project Handoff

## Objective
Finish the public docs site and deploy it to GitHub Pages.

## Completed
- Docusaurus scaffold created in `website/`.
- Core docs pages written.
- Local build passed.

## Blockers
- GitHub Pages must be enabled in repo settings.

## Read First
- `README.md`
- `website/docs/intro.md`
- `.github/workflows/deploy-docs.yml`

## Next Step
Enable GitHub Pages with GitHub Actions as the source, then check the deployment URL.
```

## Closeout Discipline

After a meaningful task, the agent should make sure current state, handoff, task board, and final response do not contradict each other.
