---
title: Mental Model
description: The JARVIS OS model of chat, memory, projects, and artifacts.
---

# Mental Model

JARVIS OS separates live conversation from durable project state.

```text
Codex chat     = thinking and execution surface
Markdown vault = durable memory and routing layer
Project repo   = canonical work and artifacts
```

The agent should not pretend that chat memory is reliable. It should read the relevant files, act, and write back only what future sessions need.

## Durable State

Durable state includes:

- project purpose;
- current status;
- decisions;
- constraints;
- blockers;
- next steps;
- artifacts;
- verification;
- user preferences;
- reusable lessons.

## Canonical Homes

Each fact should have a natural home:

| Fact type | Preferred home |
| --- | --- |
| Project state | `memory/projects/<project>/index.md` |
| Session trace | `sessions/` |
| Fresh-chat continuation | `handoffs/` |
| Durable decision | `logs/decisions.md` |
| User working preference | `memory/personal/preferences.md` |
| Generated artifact | project output directory plus memory pointer |
| Reusable workflow lesson | `system/learning-log.md` |

Avoid duplicate truths. Duplication creates drift.

## Memory Quality

Good memory is operational:

- concise;
- source-aware when needed;
- specific about next actions;
- clear about blockers;
- linked to canonical artifacts;
- easy for the next agent to scan.

Bad memory is a transcript, a vibe, or a second copy of every conversation.
