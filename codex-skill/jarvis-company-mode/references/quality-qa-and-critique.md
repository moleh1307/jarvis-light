# Quality, QA, And Internal Critique

Use this reference for user-facing apps/sites/docs, design/product quality, QA, artifact readiness, and milestone review.

## Quality Bar

Company Mode should not optimize for "barely works."

Default expectations:

- Functional correctness is necessary but not sufficient for user-facing products.
- User review is not a substitute for internal QA.
- Design polish, UX clarity, empty states, visual hierarchy, and actual packaged/rendered behavior matter.
- Roles identify weak parts and create improvement work orders without waiting for the user.
- Roles critique the order itself when following it would produce weaker work.
- Founder reshapes plan, scope, team, or approach when evidence says the current path is wrong.
- "Done" means verified and ready for the next gate, not simply written.
- Milestones become `ready-for-user-review` until the user accepts them.

Founder must not mark a milestone as finally accepted, closed, or paused just because internal checks pass. Final stop/acceptance requires user approval or explicit stop instruction.

## Tool-Aware QA Gate

If a tool can verify the work, use it before involving the user.

For user-facing apps, websites, documents, decks, images, or packaged artifacts:

- QA tests the actual artifact, not only source files or build scripts.
- Use available tools such as Computer Use, browser testing, screenshots, renderers, test scripts, package launch commands, or file inspection.
- Apps: launch packaged app when feasible, inspect visible UI, exercise core flows, quit/reopen when persistence matters, and record evidence.
- Websites: inspect rendered page, key responsive states, navigation, forms/interactions, and console/build errors when feasible.
- Documents/decks/PDFs: render/open enough pages to confirm artifact is not corrupt and layout/content are credible.
- Do not ask the user to perform basic QA that tools can perform.

`Ready for review` is allowed only after internal tool-based QA passes or a concrete blocker explains why it could not be completed. User review is for subjective/product judgment, acceptance, or direction changes.

Before asking for review, complete safe cleanup and packaging hygiene that the team itself caused or can verify:

- remove isolated agent-created QA/demo records from the review build or database;
- rebuild/repackage after source changes;
- verify the exact app/bundle/export the user will open;
- update README/status/limitations so the repo is understandable;
- push the verified baseline when a GitHub repo is configured and no sensitive/protected/release blocker exists.

Do not ask the user to approve cleanup of the team's own isolated smoke-test records. Ask only if cleanup could delete or overwrite real user data.

## Internal Critique Loop

Before a milestone is presented as ready for user review, run a short critique:

- What is the weakest part?
- What would a top-tier version improve?
- What non-obvious move would make this meaningfully better?
- What are we assuming only because it is conventional?
- What would a world-class specialist challenge?
- What should be fixed before user review?
- Are there hidden verification gaps?
- Should the next task be polish, QA, packaging, documentation, research validation, or user review?

If obvious quality gaps exist, create new work orders and continue. Do not wait for the user to say "improve UI" or "make it better" when the gap is visible.

## Acceptance And Stop Rule

Founder may declare:

- `ready-for-user-review`;
- `internally accepted for review`;
- `no internal blockers found`.

Founder must not declare:

- final accepted;
- project complete;
- company paused/closed because the milestone is done;

unless the user explicitly approves or asks to stop.
