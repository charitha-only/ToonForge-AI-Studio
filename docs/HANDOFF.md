# Development handoff

## Current checkpoint

- Local target: `v1.4.0` (not released).
- Remote branch: `main`.
- Last completed local scope: v1.3.0 complete production example and v1.4.0 real-image/real-media workflow additions.
- Do not create a GitHub release or tag unless the user explicitly asks.

## Verified commands

Run these from the repository root before changing the package:

```text
node scripts/validate-skill.mjs
node tests/provider-adapters.test.mjs
```

Both must pass before a checkpoint commit. The GitHub workflow runs the same commands on pushes and pull requests.

## Evidence status

- Six real images were generated with Codex built-in image generation and recorded in `examples/the-little-lightkeeper/assets/asset-manifest.json`.
- Five are visually inspected and approved; `REF-ELIO-CANON-01_v001` is deliberately retained as a rejected take because it violates the no-eyebrow lock.
- No Veo clip, audio asset, final film, or muse.ai upload exists. Do not report any as generated or approved.

## Safe continuation path

1. Read `docs/PROVIDER_RESEARCH_V1.4.md` and `references/real-media-production.md`.
2. Inspect the example asset manifest and real-media QC report before generating or ingesting anything.
3. To work with Veo, first confirm the exact interface, account authorization, project/billing/quota, available controls, and user approval for any cost-bearing generation.
4. To work with the intended media host, obtain its exact URL and official API documentation; otherwise use the manual upload manifest only.
5. Make one focused change, run both commands above, then create and push a descriptive checkpoint commit.

## Continuity records

- Example story/shot state: `examples/the-little-lightkeeper/storyboard/shot-ledger.md`
- Real assets and statuses: `examples/the-little-lightkeeper/assets/asset-manifest.json`
- Media review: `examples/the-little-lightkeeper/quality/real-media-qc.md`
- Provider boundaries: `docs/PROVIDER_RESEARCH_V1.4.md`
