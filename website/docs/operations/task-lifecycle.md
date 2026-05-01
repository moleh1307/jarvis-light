---
title: Task Lifecycle
description: Task state, risk lanes, acceptance criteria, verification, and closeout.
---

# Task Lifecycle

Specialist Mode tasks need more than "todo" and "done".

Task Lifecycle keeps work orders, task boards, and final reports aligned.

## Core Fields

A meaningful work order should capture:

- task id;
- owner role;
- status;
- risk lane;
- objective;
- acceptance criteria;
- verification path;
- canonical artifacts;
- blockers;
- closeout state.

## Statuses

Use statuses such as:

- proposed;
- active;
- blocked;
- review;
- done;
- deferred;
- rejected;
- superseded.

## Risk Lanes

Risk should scale verification:

| Risk | Examples | Verification |
| --- | --- | --- |
| low | small docs edit, typo, isolated note | quick read/diff |
| medium | workflow docs, README, small code change | targeted checks |
| high | public release, data result, architecture change | broader QA and review |
| critical | destructive, credentials, cost, irreversible publish | explicit approval |

## Done Evidence

Do not mark meaningful work done without evidence:

- files changed;
- checks run;
- artifact paths;
- tests/build output;
- remaining caveats;
- next action if any.

## Closeout Integrity

Before closeout, verify that:

- current-state agrees with task board;
- work order status is accurate;
- version/changelog/docs match;
- public/private boundaries are respected;
- final answer does not claim more than verification supports.
