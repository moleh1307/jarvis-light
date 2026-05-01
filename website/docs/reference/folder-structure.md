---
title: Folder Structure
description: What each folder in the JarvisOS template is for.
---

# Folder Structure

```text
.
├── AGENTS.md
├── README.md
├── VERSION
├── CHANGELOG.md
├── assets/
├── codex-skill/
├── handoffs/
├── logs/
├── memory/
├── sessions/
├── system/
├── templates/
└── website/
```

## Root Files

| Path | Purpose |
| --- | --- |
| `AGENTS.md` | workspace instructions for agents |
| `README.md` | short public landing README |
| `VERSION` | public template version |
| `CHANGELOG.md` | public version history |

## Memory And Continuity

| Path | Purpose |
| --- | --- |
| `memory/projects/` | project memory and current state |
| `memory/personal/` | user preferences and personal continuity |
| `sessions/` | meaningful work session notes |
| `handoffs/` | fresh-chat continuation notes |
| `logs/decisions.md` | durable decisions |

## System

| Path | Purpose |
| --- | --- |
| `system/learning-log.md` | learning candidates |
| `system/failure-patterns.md` | recurring failure modes |
| `system/upgrade-roadmap.md` | planned workflow improvements |
| `system/vault-map.md` | map of the vault |

## Skill And Docs

| Path | Purpose |
| --- | --- |
| `codex-skill/jarvis-os/` | installable Codex skill |
| `codex-skill/jarvis-os/references/` | modular workflow references |
| `website/` | Docusaurus documentation site |
