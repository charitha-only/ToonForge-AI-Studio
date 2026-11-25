# Quality-control report

## Documentation validation

| Test | Expected result | Actual assessment | Status | Required correction |
| --- | --- | --- | --- | --- |
| Character ID consistency | `CHR-ELIO-01` and `CHR-GLIM-01` remain stable | Present in bible, references, prompts, ledger, audio | PASS | None. |
| Prop / location continuity | Lantern and clearing IDs remain stable | `PROP-LANTERN-01` / `LOC-MOONMOSS-01` retained in plan | PASS | None. |
| Screen direction | Elio travels/faces right except documented framing | Recorded across ledger and EDL | PASS | Verify only after renders exist. |
| Runtime arithmetic | Seven shot durations total 45.0 seconds | 3+5+6+7+7+8+9 = 45.0 | PASS | Recalculate after real editorial changes. |
| Prompt boundary | Prompts do not claim generated media or provider features | Planned-only notes and adaptation guidance present | PASS | None. |
| Audio plan | Dialogue, ambience, music, and SFX have separate cue intent | Cue sheets and EDL map all planned entries | PASS | Time final cues from actual media. |

## Rendered-media validation — not performed

| Test | Expected result | Actual assessment | Status | Required correction |
| --- | --- | --- | --- | --- |
| Character identity | References and shots preserve locks | Still-image review recorded separately in `real-media-qc.md`; no video exists | NEEDS REVIEW | Generate/obtain video clips and compare to bible. |
| Proportions / outfit | Elio has one tail and fixed neckerchief; Glim has three fins | Still-image review recorded separately; no motion exists | NEEDS REVIEW | Review each video render with reference gate. |
| Interaction / action readability | Latch action and orbit are physically readable | No media exists to inspect | NEEDS REVIEW | Inspect motion frame-by-frame. |
| Camera / lighting | Screen direction and moon/amber light match | No media exists to inspect | NEEDS REVIEW | Compare cuts in editor. |
| Audio synchronization | Cues align to final action and dialogue | No audio/video exists | NEEDS REVIEW | Time cues after picture lock. |
| Final readiness | 45-second master meets delivery spec | No master or delivery spec exists | NEEDS REVIEW | Perform export QC with actual requirements. |

This report validates the written production package only; it is not evidence that any media-generation or rendering test passed.
