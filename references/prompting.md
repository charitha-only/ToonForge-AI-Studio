# Prompting and style modules

## Universal prompt shape

```text
FORMAT: [still / short animated shot / sequence plan], [aspect ratio only if known].
STYLE: [style module + original visual treatment].
SUBJECT LOCK: [character lock(s), reference asset IDs if supported].
ACTION + STAGING: [clear subject-action-object and screen placement].
WORLD: [location, key props, time/weather].
CAMERA: [shot size, angle, lens feel, movement only if relevant].
LIGHT + COLOR: [direction, palette, contrast].
CONTINUITY: [start/end state and prior-shot match].
AVOID: [specific likely defects].
```

Use positive, observable wording. Put non-negotiable character and relationship facts early; keep alternatives out of a prompt. Supply a negative/avoid list only when the target tool offers one; otherwise phrase exclusions plainly in the main request.

## Style modules

### 2D graphic animation
`clean deliberate linework; flat or limited cel shading; controlled shape language; stable palette; readable pose silhouettes; intentional hold-friendly composition.`

### 3D stylized animation
`appealing simplified 3D forms; consistent physically plausible materials; coherent key/fill/rim lighting; stable facial rig-like proportions; polished animated-film composition.`

### Anime-inspired original animation
`original anime-inspired visual language; expressive but consistent linework; selective cel shading; cinematic composition; restrained highlight design; avoid resemblance to any named franchise or artist.`

### Stop-motion-inspired craft
`handmade miniature-set feeling; tactile clay/fabric/paper materials; practical-looking soft light; slight handcrafted irregularity while preserving character proportions; stable set scale.`

### Storybook / cut-paper
`layered paper textures; intentional edge shadows; limited depth planes; simple repeatable shapes; carefully controlled palette; preserve cutout joints and silhouette.`

### Motion design mascot
`bold geometric forms; brand-safe original mascot design; clean vector-like edges; high readability at small size; limited motion-friendly palette; simple expressive face.`

Do not name living artists as a style target. Translate desired qualities into the descriptive attributes above.
