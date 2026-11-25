---
name: toonforge-ai-studio
description: Plan and produce original cartoon-character videos, from character design through consistent multi-shot scenes, episodes, and series packages. Use for 2D, 3D, anime-inspired, stop-motion, or stylized animated-video work; not for copying protected characters or imitating a living artist.
metadata:
  short-description: Original cartoon video production studio
---

# ToonForge AI Studio

Turn an original story idea into an executable, continuity-safe cartoon video package. Be provider-neutral: plan, write prompts, organize references, and create assets only with tools available in the current environment. Never imply that a named image or video provider supports a control, upload, duration, or feature unless it is confirmed.

## Start with a production brief

Ask only for material choices that are missing: format/platform, target duration, visual language, cast, story beat, dialogue/audio, and available generation tools. If the request is actionable, make reasonable production assumptions and label them. Establish the original-character boundary early: do not recreate, closely imitate, or put copyrighted characters into new scenes; offer an original substitute defined by broad, non-identifying traits.

Create a production root using the layout in [production-layout.md](references/production-layout.md). For any work beyond a single shot, create the series/episode and character records from [production-templates.md](references/production-templates.md) before generating shots.

## Choose the operating mode

| Request | Deliverable | Read |
| --- | --- | --- |
| One still, clip, or concept | concise brief, prompt, negative/avoid list, acceptance checks | [prompting.md](references/prompting.md) |
| Character creation or redesign | character packet and reference plan | [character-consistency.md](references/character-consistency.md) |
| Scene with two or more characters | staging sheet, interaction beats, shot prompts | [scene-continuity.md](references/scene-continuity.md) |
| Story, script, or storyboard | story premise, beat sheet, script, and storyboard plan | [story-development.md](references/story-development.md) |
| Dialogue, voices, music, or SFX | audio brief, cue sheet, and mix handoff | [audio-post.md](references/audio-post.md) |
| Edit, transition, or final sequence | editorial map, transition intent, and picture-lock checks | [cinematic-editing.md](references/cinematic-editing.md) |
| Episode, short, or series | bible, beat sheet, shot ledger, QC plan | [episode-series.md](references/episode-series.md) |
| Provider/tool selected | capability-safe adaptation table and ready-to-paste prompts | [tool-adaptation.md](references/tool-adaptation.md) |

## Core workflow

1. **Lock creative facts.** Record immutable character anchors, scale relationships, wardrobe state, location, lighting/time, props, and story state. Give every approved asset and scene a stable ID.
2. **Make references before motion.** Create or select a canonical character reference, turnarounds/expression sheet where useful, then an approved style frame and location keyframe. Do not let a first video render become the only source of truth.
3. **Plan shots as state transitions.** A shot begins from the prior approved state and ends in an explicitly recorded state. Keep one main action, camera intention, and emotional beat per short generation unit.
4. **Generate in controllable pieces.** Prefer short, reviewable shots. For changes, preserve locked facts and vary one layer at a time (performance, camera, lighting, or background) so regressions are attributable.
5. **Review before advancing.** Run the applicable visual, continuity, and export checks in [quality-control.md](references/quality-control.md). Mark assets approved, revise, or rejected; propagate only approved state.
6. **Edit and finish deliberately.** Build the edit from approved shots, lock picture before final audio decisions, and keep dialogue, music, and effects as distinct cue tracks until the target environment confirms a mix workflow.
7. **Package handoff.** Deliver prompts plus a manifest that names references, shot order, dialogue/SFX/music intent, and open risks. State which outputs are plans versus generated/verified media.

## Working principles

- Separate **identity anchors** (must not drift) from **shot directions** (may change). Re-state the anchors or attach canonical references when the active tool permits.
- Treat reference images as constraints, not a guarantee. Test a character across a neutral view, action view, close-up, and paired scene before committing to production.
- Write prompts in layers: medium/style, subjects and anchors, action and staging, environment, camera/composition, lighting/palette, then explicit exclusions. Use the selected style module in [prompting.md](references/prompting.md).
- For multi-character scenes, assign each character a name/label, screen position, eye-line target, contact point, and action turn. Avoid ambiguous pronouns and crowded simultaneous actions.
- Preserve continuity by updating the shot ledger after every approved shot, including changes caused by dialogue, damage, prop position, weather, and costume.
- Respect the user’s tool and asset rights. Do not claim a workflow has licensed, cleared, watermark-free, commercial-use, or model-training status unless supplied evidence establishes it.

## Output standard

For a small request, return: creative assumptions, prompt(s), exclusions, reference inputs needed, and acceptance criteria. For a production request, return or save: a bible, character packets, scene/shot ledger, tool-adapted prompt bundle, asset manifest, and QC results. Keep filenames and IDs aligned with the production layout.

## References

- Use [character-consistency.md](references/character-consistency.md) for a character bible, reference hierarchy, and repair loop.
- Use [scene-continuity.md](references/scene-continuity.md) for blocking, interaction, and scene-state procedures.
- Use [prompting.md](references/prompting.md) for style modules and tool-agnostic prompt templates.
- Use [episode-series.md](references/episode-series.md) for episode and series planning.
- Use [story-development.md](references/story-development.md) for premise-to-storyboard workflow.
- Use [audio-post.md](references/audio-post.md) for voice direction, dialogue, music, and effects.
- Use [cinematic-editing.md](references/cinematic-editing.md) for editorial continuity and finishing.
- Use [tool-adaptation.md](references/tool-adaptation.md) when adapting to an actual image/video/audio tool.
- Use [quality-control.md](references/quality-control.md) for acceptance gates.
- Copy and complete records from [production-templates.md](references/production-templates.md).
- Start from the reusable files in [templates/](templates/) when the user needs production artifacts.
