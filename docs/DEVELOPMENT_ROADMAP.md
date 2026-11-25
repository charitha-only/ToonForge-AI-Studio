# ToonForge development roadmap

## Current audit

The existing package has a healthy Agent Skills entrypoint, modular production references, portable tool-adaptation boundaries, source control, release assets, and a passing structural CI check. It already supports character consistency, scene continuity, six visual-style modules, episode planning, and quality gates.

This iteration closes the production-planning gaps: reusable templates, formal story-to-storyboard routing, audio-post decisions, editorial handoff, and an explicit version history.

## Delivered in the current iteration

1. Story, script, and storyboard reference plus beat-sheet and storyboard templates.
2. Voice, dialogue, music, effects, and mix-handoff reference plus audio cue sheet.
3. Cinematic editing/picture-lock reference plus stronger continuity documentation.
4. Reusable character and shot-ledger templates.
5. Changelog and validator coverage for new modules.

## v1.3.0 delivered

1. A complete, internally consistent, planned-only 45-second production example.
2. End-to-end story, character, reference, prompt, audio, editorial, and QC records.
3. Deterministic checks for example existence, exact planned runtime, and recurring ID integrity.

## v1.4.0 delivered locally

1. Real, inspected image-reference assets with versioned approval/rejection evidence.
2. Provider research and a human-operated video/media-management boundary for unverified accounts.
3. Asset-manifest, provider-adapter, and error-path validation.

## Next milestones

### M1 — Production package ergonomics

Collect feedback from use of the included example and add only narrowly justified record fields. Keep the example optional so it does not burden simple requests.

### M2 — Validation depth

Extend the local validator to check template availability and validate internal Markdown links across every reference. Keep semantic creative judgment in the human/agent QC checklists rather than brittle automation.

### M3 — Adoption feedback

Test the skill against a single-shot request, a two-character dialogue scene, and a short episodic request. Convert demonstrated omissions into narrowly scoped instructions; do not add provider-specific assumptions.

### M4 — Release discipline

For each user-facing revision: update this roadmap/changelog as appropriate, run the local validator, inspect the CI result, package a ZIP, and publish a new GitHub release only when requested or when a distributable version is intended.
