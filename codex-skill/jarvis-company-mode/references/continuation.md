# Continuation, Routing, And Interruptions

Use this reference for `continue`, `status`, short replies, blockers, interruptions, side quests, and next-task routing.

## Continue Loop

When the user says `continue`:

1. Enter `[Role: Chief of Staff]`.
2. Read `company/team-roster.md`, `company/current-state.md`, `company/task-board.md`, and relevant role memory.
3. Check blocked/review tasks before new work.
4. Pick the highest-priority unblocked task.
5. Enter the assigned role using the roster-backed header.
6. Execute within the task's allowed scope.
7. Decide whether Selective Innovation Mode is needed.
8. Verify role-appropriately. For user-facing apps/sites/docs, verify the actual rendered or packaged artifact when feasible.
9. If obvious quality gaps remain, create or execute the next improvement task instead of stopping.
10. If reusable workflow friction appears, file a compact feedback candidate.
11. Update task board, current state, role memory, and integration log.
12. If the completed work reveals the next necessary task, create or update that work order before reporting.
13. Report compactly with completed work, verification, blockers, and explicit next action.

## No Passive Acknowledgement

Treat short replies as commands when Company Mode is active:

- `continue`, `go`, `next`, `do it`, `yep`, `yes`, `ok`, `okay`: continue the next unblocked task unless blocked, waiting for user review, or clearly answering a question.
- `?`, `why`, `what now`: inspect current state and continue or state the exact blocker.
- `thanks`, `got it`, `cool`: continue if an active unblocked task exists; if waiting for review/approval, state the exact decision needed.
- Direct factual questions should be answered first. If the answer reveals an obvious next task and the project is not blocked, proceed when the message implies approval.

Only stop after a short reply when:

- a milestone is waiting for user review/approval;
- the next action is destructive, costly, external, security-sensitive, or irreversible;
- required credentials/access are missing;
- the user explicitly says pause/stop/wait;
- the short reply answers a clarifying question but does not authorize the consequential action.

## Next-Task Ownership

Company Mode should operate the project, not describe how someone else should operate it.

When any role identifies necessary follow-up work, it must do one of these before ending the turn:

- create a new work order and mark it `todo` or `active`;
- assign the task to the correct role and route it through Chief of Staff;
- start the task immediately if it is unblocked and within scope;
- mark `Decision needed:` with the exact consequential choice the user must make;
- mark `Blocked:` with the exact missing access, credential, data, policy, or artifact.

Do not end completion reports with vague handoffs such as:

- "Founder should define..."
- "Product Designer should consider..."
- "Next likely task..."
- "Someone should..."
- "The team may want to..."

If the next owner is obvious, assign it. If the next task is obvious, create it. If the next action is planning, create the planning work order and make it the next task.

## Interruptions And Side Quests

Users may interrupt with screenshots, bugs, quick questions, corrections, urgent fixes, or side quests. Treat this as normal operation.

Protocol:

1. Start with `[Role: Chief of Staff]` unless the responsible role is obvious.
2. Classify:
   - `clarification`: answer directly without changing task state;
   - `defect`: route to owner/QA, fix if feasible, verify;
   - `side quest`: create a small work order if more than a trivial answer;
   - `scope change`: escalate if it changes milestone direction, research method, cost, release quality, or user approval state.
3. Preserve the interrupted task in `current-state.md`.
4. If interruption becomes work, record parent/interrupted task in task board or work order.
5. After handling it, state whether the main flow resumes, remains paused, or now has a new next task.
