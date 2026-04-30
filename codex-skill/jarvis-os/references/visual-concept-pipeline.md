# Visual Concept Pipeline

Use this reference when visual quality materially affects success and a clear design target would improve implementation: apps, websites, mobile/native surfaces, demos, dashboards, games, slide decks, launch assets, or other craft-critical artifacts.

This is a pipeline for turning a visual target into a working artifact. It complements Creative Preproduction; it does not replace product thinking, domain correctness, accessibility, or rendered QA.

Do not use this for tiny fixes, routine CRUD screens, mechanical copy changes, or artifacts where a plain functional UI is enough.

## Core Principle

For craft-critical UI, do not code from a vague visual intention. Create or choose a concrete visual target, freeze it, implement against it, then compare the rendered result back to the target.

Useful target types:

- generated UI concept image;
- user-provided screenshot;
- hand sketch or wireframe;
- reference app screenshot;
- existing product style frame;
- high-fidelity design mockup.

If no target exists and visual quality matters, use image generation when available to create one or more concept images. Treat generated concepts as design inputs, not as product truth.

## Pipeline

1. **Define the target**
   - Audience and job.
   - Product/domain truth that must not be broken.
   - Craft criticality and rejection tests.
   - Required states: empty, filled, modal/detail, mobile/narrow, error/loading where relevant.

2. **Create or gather concepts**
   - Use image generation, screenshots, references, or sketches.
   - For signature work, create or collect multiple divergent concepts.
   - Save selected concept artifacts inside the project workspace, for example under `design/concepts/` or another project-appropriate artifact folder.

3. **Freeze the selected concept**
   - Name the selected concept and mark it as the implementation target.
   - Extract concrete implementation notes: layout, density, typography, color/material logic, interaction states, iconography, spacing, and what must not be copied.
   - Record where the implementation may intentionally diverge for product correctness, responsiveness, accessibility, or real data.

4. **Implement from the target**
   - Re-open or inspect the frozen concept before coding.
   - Treat the concept as a visual spec, not mood-board inspiration.
   - Build real interaction, real states, and real data behavior rather than a static screenshot clone.

5. **Render and compare**
   - Use Browser Use, screenshots, package launch, or the appropriate rendered artifact check.
   - Compare the target concept against the implemented screenshot side by side.
   - Check fidelity for layout, hierarchy, density, rhythm, typography, color/material system, spacing, state coverage, and product feel.

6. **Reality check**
   - If the concept conflicts with real data, physics, domain rules, accessibility, responsiveness, privacy, or platform conventions, preserve reality and record the intentional deviation.
   - Do not fake data correctness just to match a pretty mockup.

7. **Iterate or stop the line**
   - If implementation drifts into generic UI or loses the concept's intent, run Stop-the-Line Review.
   - Fix now if scoped, or create a corrective design work order.

## Design QA Checklist

Before internal acceptance:

- Concept artifact exists or the reference target is explicitly named.
- Implementation screenshot exists for the relevant viewport/state.
- Side-by-side critique was performed.
- Intentional deviations are recorded.
- The implemented artifact is interactive or functional where required.
- Text is readable and not clipped.
- Responsive states are checked when relevant.
- The result does not look like a generic approximation of the concept.

## Image Generation Use

When using image generation:

- Use it to explore composition, tone, density, material, and asset direction.
- Ask for UI mockups with exact surface type and target state.
- Generate multiple concepts for high-stakes or signature work.
- Save final selected concepts in the project workspace before implementation.
- Do not leave project-bound concept images only in a default generated-images directory.
- Do not treat generated text, data, logos, maps, charts, or domain facts as authoritative; verify or replace them during implementation.

## Handoff Shape

For work orders that use this pipeline, include:

- Concept target:
- Concept artifact path or reference:
- Selected direction:
- Required states:
- Intentional deviations allowed:
- Implementation files:
- Rendered screenshots:
- Side-by-side critique:
- Follow-up fixes:
