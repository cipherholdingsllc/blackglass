# Liquid Glass

Liquid glass is a mobile material rule, not a visual gimmick. It earns its place only when it clarifies hierarchy, focus, boundary, or state.

## Core Rule

If the same surface works better as a flat card, use the flat card.

Glass can be used for:

- primary focus surfaces
- active controls
- sheets and disclosure layers
- source or confidence surfaces
- boundary states
- high-value capture moments

Glass should not be used for:

- random decoration
- fake luxury
- low-contrast text containers
- every repeated list item
- idle shimmer
- chromatic aberration
- mouse-driven effects in mobile patterns

## Intensity Tiers

| Tier | Use | Frame Budget |
|---|---|---:|
| `whisper` | quiet separation, secondary rows, low-density badges | `<=0.3ms` |
| `present` | primary cards, focused inputs, bottom sheets | `<=0.7ms` |
| `prominent` | capture controls, save states, active boundary moments | `<=1.5ms` |

Only one tier should dominate a screen. If every surface is prominent, no surface is prominent.

## Surface Modes

| Mode | Job |
|---|---|
| `flat` | stable material with no motion |
| `pressed` | tactile response on touch |
| `reactive` | small touch-position response |
| `pinned` | persistent header or nav material |
| `narrative` | one-shot reveal tied to a screen transition |

## Invariants

- No chromatic aberration.
- No idle animation on glass.
- No glass without a clear interface job.
- Reduced motion falls back to flat material.
- Text contrast beats material effect.
- Mobile input uses touch and device context, not hover-only meaning.

## Review Test

For every glass surface, answer:

- What does this layer separate?
- What state does it make clearer?
- What happens if motion is reduced?
- Can the same meaning survive without color?
- Would a flat version be more readable?
