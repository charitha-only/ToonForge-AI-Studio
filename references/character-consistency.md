# Character consistency

## Character packet

Each character gets a stable ID (for example `CHR-LUMA-01`) and one packet. Keep facts concise and observable.

| Field | Record |
| --- | --- |
| Identity anchors | silhouette, proportions, species/age range, skin/fur/material, face geometry, hairstyle, signature marks |
| Wardrobe anchors | garment pieces, colors/materials, footwear, accessories, permitted variants |
| Performance anchors | posture, gait, gesture vocabulary, temperament, default expression |
| Scale | height relative to named characters, head/body ratio, prop scale |
| Visual treatment | line weight/material response, palette tokens, shading rule |
| Canonical refs | asset IDs, view/expression coverage, approval status/version |
| Prohibitions | features that must not appear or change |

## Reference hierarchy and versioning

1. `canonical` — approved neutral full-body reference; highest authority.
2. `supporting` — turnarounds, facial expressions, wardrobe/prop sheets; resolve pose/view details.
3. `scene` — approved style frame, location, lighting, and staging references.
4. `shot` — last approved frame or source image, only for the current transition.

Name versions `CHR-LUMA-01_canonical_v003.png` and record a short change note. When references disagree, canonical beats supporting, supporting beats scene, and scene beats shot—unless a newer approved state deliberately changes the character (for example, a raincoat added in-story).

## Build and validate a character

1. Define anchors and a compact visual signature; avoid copying recognizably protected design combinations.
2. Generate/select a neutral canonical reference first. Then cover front/three-quarter/side/back only when production needs them, plus a compact expression/pose sheet.
3. Test four stress cases: neutral full body, close-up emotion, active pose, and same frame with another character.
4. Approve only references that preserve anchors in all needed cases. If a defect is repeatable, revise the packet/reference rather than compensating with ever-longer prompts.

## Prompt injection block

Place this stable block before shot-specific directions:

```text
CHARACTER LOCK — [ID / name]: [silhouette and proportions]; [face/hair/material anchors]; wearing [wardrobe anchors]; [signature accessory/mark]; [performance anchor]. Preserve these facts exactly. Do not add or remove wardrobe pieces, marks, fingers/limbs, or accessories.
```

Use only instructions and reference inputs that the selected tool actually supports. If it has no reference-image input, restate the lock and show the user that consistency risk is higher.

## Repair loop

Classify failure: identity drift, anatomy, wardrobe, palette/material, scale, or performance. Correct the smallest relevant layer; rerun the same test case; only replace the canonical reference after reviewing downstream impact. Never silently overwrite an approved canonical asset.
