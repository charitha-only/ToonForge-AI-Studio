# Quality control

Run the relevant checks before approving an asset. A failed locked item is a revision, not “close enough.”

## Image/reference gate

- Identity anchors, proportions, facial features, palette, wardrobe, and signature marks match the packet.
- Anatomy, hands, limbs, accessories, and silhouettes are coherent.
- Style treatment matches the approved visual language and is original.
- Scale, light direction, set perspective, and key props match the scene state.
- Filename, version, source/reference links, and approval status are recorded.

## Motion/shot gate

- The shot begins and ends in its ledgered state; action reads without unexplained changes.
- No character duplication, identity swap, wardrobe morph, prop teleportation, broken contact, or screen-direction reversal.
- Camera movement serves the action and does not create unwanted geometry/morphing.
- Motion, timing, performance, and cut points support the intended emotion.
- Any dialogue/audio alignment is verified only to the capability actually used.

## Episode/export gate

- Shot IDs play in intended order; cut transitions preserve geography, eyelines, and story state.
- Dialogue, captions/subtitles, SFX, music, credits, and accessibility needs are complete where requested.
- Export format, frame rate, dimensions, audio mix, and safe areas match the actual delivery requirement.
- Rights/provenance notes identify user-supplied, generated, and licensed assets without unverified claims.

## Defect report

`[asset/shot ID] | severity: blocker/major/minor | category | observed defect | violated lock | smallest proposed correction | recheck`.
