# ToonForge AI Studio

An Agent Skill for planning and producing original cartoon-character videos with reliable visual identity, multi-character staging, and scene-to-scene continuity.

## What it covers

- character packets, canonical references, and controlled repair loops;
- 2D, 3D, anime-inspired, stop-motion-inspired, cut-paper, and mascot workflows;
- provider-neutral prompt templates and capability-safe adaptation;
- multi-character blocking, interaction beats, and a shot-state ledger;
- episode/series bible, production layout, asset manifest, and quality gates.
- story, storyboard, audio-post, and cinematic-editing modules with reusable records.

## Install

Download this repository as a ZIP or clone it. Keep `SKILL.md` at the root of the `ToonForge-AI-Studio` folder, then add that folder to your Agent Skills location. For a local Codex setup, copy it into `.codex/skills/` and reload Codex. In a ChatGPT skills workspace, upload the folder or its ZIP through the skills interface.

Invoke with `$toonforge-ai-studio`, for example:

> Use $toonforge-ai-studio to plan a 45-second original 2D cartoon short with two characters, then create the character packets and shot ledger.

## Validation

Run `node scripts/validate-skill.mjs` to check required package files, entrypoint frontmatter, and internal reference links. The same check runs on pushes and pull requests through GitHub Actions.

## Development

See [the development roadmap](docs/DEVELOPMENT_ROADMAP.md) for completed and planned capability work, and [the changelog](CHANGELOG.md) for version history.

## Design boundary

ToonForge is designed for original characters and descriptive visual directions. It does not direct recreation of protected characters or imitation of living artists.
