# Tool-agnostic adaptation

First inspect the actual tool’s documented controls or ask the user what is available. Build only from confirmed controls; omit unsupported techniques rather than fabricating settings.

| Confirmed capability | Adaptation |
| --- | --- |
| Reference image(s) | attach canonical reference(s); state their role and priority; record asset IDs |
| Image-to-video / first frame | use approved scene or shot frame as source; state start-state and intended change |
| Last-frame / end-frame | use only for an explicit end-state; check transition ownership |
| Seed / variation control | record values and use for controlled comparisons, not as a promise of identity lock |
| Character/asset library | map the character packet to provider asset IDs and keep internal IDs too |
| Motion/camera controls | specify only the chosen controls; keep action singular and camera intention simple |
| Negative prompt | move `AVOID` items to the native field |
| Timeline/editor | place approved shots in ledger order and preserve handles/transitions as supported |
| Audio/dialogue controls | separate dialogue, SFX, music, and timing notes; verify lip-sync capability before promising it |

When capability is unknown, deliver: a portable prompt, required reference inputs, and an adaptation note such as “If your tool supports a reference image, attach `CHR-LUMA-01_canonical_v003`; otherwise repeat the character lock in each shot.”

Never present UI labels, maximum duration, resolution, seed behavior, camera controls, or commercial-rights claims as universal facts.
