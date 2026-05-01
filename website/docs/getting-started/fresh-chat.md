---
title: Fresh Chats
description: How JARVIS OS keeps continuity when a chat becomes too long.
---

# Fresh Chats

JARVIS OS treats long chats as disposable. The project state is not disposable.

When a conversation gets long, expensive, compacted, or hard to trust, create a handoff and start fresh.

## Handoff Prompt

```text
Jarvis, use JARVIS OS.

Create a fresh-chat handoff for this project.
Include current objective, completed work, blockers, exact next steps,
and files the next chat should read first.
```

## What A Handoff Should Include

A good handoff contains:

- current objective;
- completed work;
- in-progress work;
- blockers and risks;
- exact next steps;
- files to read first;
- artifacts and their verification status.

The next agent should not need to reconstruct the project from a transcript.

## Starting The New Chat

Start the new chat with:

```text
Jarvis, use JARVIS OS.

This is a fresh continuation.
Read:
- AGENTS.md
- memory/projects/<project>/index.md
- handoffs/<handoff-file>.md

Then give compact status and state-aware options.
Do not start new work until I choose.
```

## When Not To Handoff

Do not create handoffs for tiny tasks, single-answer questions, or work that has no durable project state.
