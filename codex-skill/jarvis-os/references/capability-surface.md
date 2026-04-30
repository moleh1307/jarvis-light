# Capability Surface Declaration

Use this reference when a task depends on tools, platform access, external services, local apps, files, browser inspection, generated assets, deployment, messaging, or verification capabilities.

The goal is not to build a full agent runtime. The goal is to prevent false blockers, skipped verification, accidental private-data exposure, and needless user handoffs when Codex already has the right capability.

## Principle

Before serious tool-dependent work, declare the capability surface:

- what capabilities are available;
- what capabilities are required for the next task;
- what is missing, risky, or permission-bound;
- what can be done autonomously;
- what verification tools will be used before reporting completion.

Keep it compact. Do not list every possible tool just because it exists.

## When To Use

Use Capability Surface Declaration when:

- starting or continuing a Specialist Mode work order that depends on tools, apps, files, builds, tests, search, deployment, or external platforms;
- adopting a project and deciding what can be tested locally;
- creating or updating a public artifact, release, app, package, document, website, dataset, image, email, calendar item, or GitHub surface;
- the user names a tool, plugin, URL, PDF, screenshot, repo, zip, app, or external resource;
- the team is about to ask the user to review, test, upload, deploy, or fetch something that available tools might handle;
- Stop-the-Line Review is triggered by missing evidence, skipped QA, stale state, or a capability mismatch.

Skip it for small Core tasks that can be answered from current context without tool-dependent side effects.

## Compact Declaration

Use this format in a work order, current state, or internal routing note when needed:

```text
Capability Surface:
- Available:
- Required now:
- Missing / uncertain:
- Risk boundary:
- Approval lane: autonomous / confirmation-needed / blocked
- Verification path:
```

For short user-facing updates, compress it into one sentence instead of dumping the whole declaration.

## Approval Lanes

### Autonomous

Proceed without asking when the action is inside the project/workspace and within existing JARVIS autonomy rules:

- local file reads, edits, searches, builds, tests, lint/type checks, package scripts, and diagnostics;
- project-scoped free dev/test dependencies and official stack plugins needed for the accepted stack or QA plan;
- Browser Use or browser automation for local/preview/web QA when no private upload or external account action is involved;
- Computer Use for local desktop/package smoke tests, screenshots, and app inspection;
- image generation for approved visual concepting or project assets when no private-data/publication boundary is crossed;
- isolated agent-created QA/demo data cleanup;
- README/changelog/version/status updates that keep public surfaces honest;
- verified branch pushes or baseline pushes when a repo/remote is already configured and no private, protected-branch, release, or sensitive-data boundary applies.

### Confirmation Needed

Ask for a concrete `Decision needed:` before:

- credentials, login, paid services, billing, subscriptions, or account linking;
- public release publishing, app-store style publishing, tags/releases intended as public release points, or protected-branch policy changes;
- deploying or uploading private/user content to a third-party service when not already approved for that task;
- sending email, calendar invites, messages, forms, applications, or external submissions;
- deleting, overwriting, or migrating real user data;
- sudo/admin/global installs, system-level changes, unusual large downloads, or background automation;
- changing the strategic stack, project direction, privacy posture, or external distribution model.

### Blocked

Mark blocked when:

- required access, file, credential, browser permission, app permission, API key, or source text is unavailable;
- the necessary tool is unavailable or broken and no reliable fallback exists;
- the only remaining action crosses a confirmation-needed boundary and the user has not approved it;
- evidence is inaccessible and promoting the result would create a misleading claim.

## Capability Classes

Use the smallest relevant labels:

- `filesystem`: local files, artifacts, project notes, generated outputs.
- `shell`: commands, builds, tests, scripts, package managers, git.
- `web`: current external information, primary-source retrieval, URLs, docs, PDFs.
- `browser`: rendered website/app inspection, local previews, interactions, screenshots.
- `computer-use`: desktop app launch, native UI smoke tests, packaged app inspection.
- `imagegen`: visual concepts, bitmap assets, image variants.
- `github`: repository, branch, PR, issue, CI, release, remote state.
- `email/calendar/messaging`: connected accounts, drafts, sends, events, external communication.
- `documents/spreadsheets/presentations`: render/edit/verify office artifacts.
- `data/compute`: experiments, notebooks, solvers, metrics, generated datasets.
- `deployment`: Vercel, hosting, app distribution, public URLs.
- `memory`: JARVIS vault, project memory, session notes, work orders.

## Verification Selection

Choose verification from the artifact and capability surface, not from habit:

- code: targeted tests, type/lint/build, relevant smoke command;
- website/app: rendered inspection, responsive checks, console/basic interactions, production/local distinction;
- desktop/native app: packaged launch, core flow smoke, persistence check if relevant;
- document/deck/PDF: render/open enough pages and inspect visible output;
- data/experiment: input/source check, schema/row count, reproducibility command, sample output, caveats;
- research/proof/claims: source provenance, theorem labels, confidence lane, adversarial review;
- release/GitHub: branch/status/remote/README/changelog/version/tag/release boundary check;
- email/calendar/message: draft before send unless the user explicitly asked to send and the recipient/content are verified.

If a verification tool exists and is safe, use it before asking the user to test manually.

## Stop-The-Line Triggers

Run Stop-the-Line Review when:

- the team asks the user to test or review something that available tools can verify;
- a task is called complete without using the declared verification path;
- a named URL, PDF, screenshot, repo, skill, or external reference was skipped;
- local and deployed/public state may differ but the report blurs them;
- a tool or permission boundary changed but the work order/current state was not updated;
- a role wants to proceed with a claim, release, design, artifact, or dataset while the required capability is missing.

## Work Order Integration

For serious Specialist Mode work orders, include a compact `Capability Surface` section when capabilities affect execution or QA.

Minimum useful fields:

- available capabilities;
- required capabilities;
- approval lane;
- verification path;
- blocker if missing.

If capability needs change during execution, update the work order or current state before reporting.

## Closeout

Before final reporting, check:

- Did the declared verification path actually run?
- Did any required capability remain unavailable?
- Did the team ask for user involvement only where the approval lane required it?
- Does the report distinguish local, preview, production, private, and public surfaces?

If not, fix the mismatch or report the exact blocker.
