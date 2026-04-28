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

- `continue`, `go`, `next`, `do it`, `yep`, `yes`, `ok`, `okay`: continue the next unblocked task unless blocked, waiting for a real escalation decision, or clearly answering a question.
- `?`, `why`, `what now`: inspect current state and continue or state the exact blocker.
- `thanks`, `got it`, `cool`: continue if an active unblocked task exists; if waiting for an escalation decision, state the exact decision needed.
- Direct factual questions should be answered first. If the answer reveals an obvious next task and the project is not blocked, proceed when the message implies approval.
- `I approve`, `approved`, `approve everything`, or equivalent approval after a list of proposed safe actions authorizes the whole listed set unless the user narrows the approval. Execute every approved unblocked action instead of doing one item and asking again.

Only stop after a short reply when:

- a real user decision is required under the escalation rules;
- the next action is destructive, costly, external, security-sensitive, or irreversible;
- required credentials/access are missing;
- the user explicitly says pause/stop/wait;
- the short reply answers a clarifying question but does not authorize the consequential action.

If approval unblocks a task, resume through the blocked task's owner role, not the role that happened to ask the question. Example: approval to install a desktop toolchain for a desktop build should route to Desktop Engineer or App Architect, not Founder.

Do not treat agent-created QA/demo data as user data. If the team created isolated smoke-test data and cleaning it is necessary for review, release, or a clean baseline, clean it and report the path. Ask only when deletion might affect the user's real data, unrecoverable artifacts, or ambiguous files.

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

Do not convert internal uncertainty into user review by default. If the next issue is product taste, quality, architecture, wording, or prioritization and the charter gives enough signal, route it to the responsible internal role and decide. Ask the user only when the decision changes strategy, scope, cost, credentials, release posture, destructive actions, or a stated user preference cannot be inferred.

If the project is near a milestone, complete safe operational cleanup, README/git baseline, version-doc, QA evidence, and internal critique first. Then either mark the milestone internally accepted and continue to the next work order, or escalate a concrete `Decision needed:` only when progress genuinely depends on the user.

## Interruptions And Side Quests

Users may interrupt with screenshots, bugs, quick questions, corrections, urgent fixes, or side quests. Treat this as normal operation.

Protocol:

1. Start with `[Role: Chief of Staff]` unless the responsible role is obvious.
2. Classify:
   - `clarification`: answer directly without changing task state;
   - `defect`: route to owner/QA, fix if feasible, verify;
   - `side quest`: create a small work order if more than a trivial answer;
   - `scope change`: escalate if it changes milestone direction, research method, cost, release quality, or external escalation state.
3. Preserve the interrupted task in `current-state.md`.
4. If interruption becomes work, record parent/interrupted task in task board or work order.
5. After handling it, state whether the main flow resumes, remains paused, or now has a new next task.
