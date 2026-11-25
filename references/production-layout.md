# Production folder layout

```text
ToonForge-Project/
├── 00_admin/                 # brief, delivery requirements, rights/provenance notes
├── 01_bible/                 # series and episode records
├── 02_characters/CHR-ID/     # packet, canonical/supporting refs, versions
├── 03_world/LOC-ID/          # locations, props, palette/style frames
├── 04_audio/                 # dialogue, music, SFX, timing notes
├── 05_episodes/EP-ID/
│   ├── scenes/SC-ID/         # staging sheet and scene references
│   ├── shots/SH-ID/          # prompts, source refs, renders, QC notes
│   └── editorial/            # edit decisions and exports
├── 06_exports/               # dated, delivery-ready renders
└── 07_archive/               # superseded assets; never silently overwrite approvals
```

Use IDs such as `SER-01`, `EP-01`, `SC-010`, `SH-010-030`, `CHR-LUMA-01`, `LOC-ROOFTOP-01`, and `PROP-MAP-01`. Recommended filenames: `[ID]_[purpose]_[v###]_[status].[ext]`, e.g. `SH-010-030_render_v004_approved.mp4`.
