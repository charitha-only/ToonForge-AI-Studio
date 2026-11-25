# Video prompt package

Use only controls documented by the active tool. These prompts specify intent, not provider settings or a claim that video exists. Use the approved prior-shot state as source only if first/last-frame or image-to-video input is confirmed.

## Shared style and continuity block

```text
Original stylized cinematic 3D cartoon; rounded readable forms; tactile matte fur, moss, brass, and volumetric light; moonlit indigo/teal forest with warm amber lantern contrast. Preserve ELIO LOCK and GLIM LOCK exactly. Maintain the listed start/end state, prop geometry, scale, left-to-right screen direction, and one dominant action. Avoid duplicate characters, identity drift, extra limbs/fins/tails, wardrobe changes, floating props, text, logos, protected-character resemblance, and abrupt lighting reversal.
```

| Shot | Planned motion prompt |
| --- | --- |
| `SH-010-010` | Start on dark `PROP-LANTERN-01` beneath blue moss. Over 3 seconds, one soft amber pulse grows inside the glass and reveals Elio’s upside-down reflection; no other movement except slight fern response. End with lantern lit and Elio approaching from screen left. |
| `SH-010-020` | Begin with lit closed lantern center-right. Elio enters/crouches at left, parts one fern layer, tilts head toward Glim. Glim makes a small anxious pacing loop inside without leaving. End on eye contact. |
| `SH-010-030` | Same geography: Elio gently tests latch once, hears resistance, immediately releases and lowers ears; Glim recoils and dims but remains enclosed. End with closed latch and both paws away. |
| `SH-020-010` | Start with closed lantern, dim Glim. Elio places exactly two paws to steady it, warm reflected amber light grows, latch slowly lifts. End with door open and Glim still inside, brightening. |
| `SH-020-020` | Start with open lantern on ground. Glim exits upward, makes one clockwise orbit around stationary Elio, then hovers beside his face. Elio’s ears rise into a relieved smile. End at matched eye-line. |
| `SH-030-010` | Begin close profile facing right. Glim lightly touches Elio’s nose once; Elio closes eyes then opens them in awe as branch lights wake from left to right. End with a clear light path leading right. |
| `SH-030-020` | Start wide with established path. Elio takes three gentle steps right while Glim floats beside him; soft amber/mint lights bloom overhead into a star field. End on both continuing right, without teleporting the lantern or changing costumes. |

## Adaptation notes

If no motion control exists, treat each entry as a sequence plan and produce approved keyframes. If reference images are unsupported, include both lock blocks verbatim per shot. If duration is fixed by the tool, trim/extend only in the editor after checking the 45-second ledger; do not call the generated duration exact until measured.
