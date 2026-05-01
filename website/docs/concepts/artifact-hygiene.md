---
title: Artifact Hygiene
description: How JARVIS OS keeps generated files trustworthy.
---

# Artifact Hygiene

Generated artifacts need status. Otherwise future agents cannot tell whether an output is canonical, temporary, broken, stale, or ready to share.

## Every Artifact Should Answer

- What is this?
- How was it made?
- Where is the canonical file?
- Is it canonical, delivery, diagnostic, temporary, or superseded?
- How was it verified?
- What caveats remain?

## Canonical Location

Canonical artifacts should live inside the relevant project repo or workspace.

Desktop and Downloads copies are temporary unless the user explicitly declares them canonical.

## Verification Examples

For data outputs:

- file exists;
- row count checked;
- key columns checked;
- sample inspected;
- caveats recorded.

For images and plots:

- file opens;
- dimensions are appropriate;
- labels and axes are correct;
- output path is canonical.

For docs and decks:

- file renders;
- expected content exists;
- formatting is not obviously broken.

For websites:

- local build passes;
- key pages load;
- links are valid;
- deployment state is distinguished from local state.
