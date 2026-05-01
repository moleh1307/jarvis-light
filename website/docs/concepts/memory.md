---
title: Memory System
description: How JARVIS OS stores project state, decisions, preferences, and lessons.
---

# Memory System

JARVIS OS uses markdown as the canonical memory layer.

Memory should preserve the next useful action, not the whole story.

## Retrieval Order

For project-specific work:

1. read the relevant project memory;
2. read recent session or handoff notes only if current state is missing;
3. check decisions when the work depends on a durable choice;
4. inspect repo files before editing.

For JARVIS system work:

1. read the JARVIS project index;
2. read the current state;
3. use the reference router;
4. load only the references needed for the task.

## What Deserves Memory

Write durable memory for:

- accepted decisions;
- project constraints;
- blockers;
- exact next steps;
- canonical artifact paths;
- verification results;
- stable user preferences;
- repeated workflow friction;
- meaningful self-improvement candidates.

## What Usually Does Not

Avoid storing:

- full transcripts;
- filler;
- minor acknowledgements;
- duplicate summaries;
- speculative thoughts that were not adopted;
- temporary implementation details that the code already records.

## Source-Aware Facts

When provenance matters, label facts:

- `User-stated`;
- `Observed in repo`;
- `Tool result`;
- `Agent inference`;
- `External source`.

Use labels to prevent fake certainty, not to create bureaucracy.

## Lifecycle Lanes

When freshness matters, facts can be marked as:

- active;
- stable;
- candidate;
- archived;
- superseded.

This helps agents avoid treating old notes as current truth.
