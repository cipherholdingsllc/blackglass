# Blackglass

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
![Static Site](https://img.shields.io/badge/site-static-green.svg)
![Mobile First](https://img.shields.io/badge/design-mobile--first-teal.svg)

Blackglass is a public mobile interface design reference for building calm, premium, touch-first apps with disciplined liquid glass, semantic tokens, restrained motion, and trust-forward surfaces.

[**View the Interactive Pattern Gallery**](https://blackglass-demo.cipherholdings.com) *(Placeholder)*

It is not a production app, backend, account system, analytics layer, or packaged component library. It is a compact reference for builders who want mobile screens that feel deliberate instead of generated, generic, or overdecorated.

## Why Blackglass?

Most design systems ask, "How do we make UI consistent?" Blackglass asks, "How do we make complex mobile workflows feel calm, premium, touch-native, and trustworthy?" By encoding taste into strict rules—glass that only appears to clarify state, targets that are always 44px+, and semantic colors that never act alone—Blackglass helps teams build interfaces that look like intentional instruments rather than generated dashboards.

## What This Teaches

- Mobile-first screen structure with safe-area discipline and thumb-zone actions.
- Functional liquid glass tiers: `whisper`, `present`, and `prominent`.
- Semantic tokens for color, spacing, radius, elevation, motion, tap targets, typography, and breakpoints.
- Trust-forward interface patterns for source, context, confidence, and boundary states.
- Touch-sized controls with clear state models.
- Anti-slop review rules for fast AI-assisted builds.

## Local Preview

```bash
cd site
npm install
npm run dev
npm run build
npm run preview
```

The gallery is static. It has no backend, account flow, tracking script, or live integration.

## Pattern Set

| Pattern | Job |
|---|---|
| Mobile Screen Shell | Safe area, dark base, content rhythm, and lower-screen action placement |
| Glass Surface Card | Functional material tiers without decorative blur |
| Mobile Action Button | Primary, secondary, ghost, disabled, and loading states |
| Capture Control | Large touch-first control for high-value input moments |
| Timeline Event | Sequence, source badge, timestamp, status dots, and detail affordance |
| Bottom Sheet Preview | Disclosure without losing screen context |
| Trust Row | Source, context, confidence, and ownership cues |
| Empty State | Calm zero-state with one next action |

## Core Rules

- Tokens first. Raw colors, spacing, shadows, and timing values belong in the token catalog.
- Touch first. Minimum tap target is `44px`; primary actions are `56px`; prominent capture controls are `72px`.
- Glass must do work. Use it for hierarchy, focus, boundary, or state. Remove it when it is only decoration.
- Motion explains state. Press, reveal, save, and sheet transitions are valid. Idle shimmer, fake urgency, and celebration effects are not.
- Trust is visible structure. Show source, context, confidence, uncertainty, and limits directly in the UI.
- Demo content stays synthetic and domain-neutral.

## Repo Map

```text
README.md                 Public front door
MOBILE_DESIGN_SYSTEM.md   Central mobile design doctrine
BLACKGLASS_THESIS.md      Core thesis
VISUAL_LANGUAGE.md        Visual direction
LIQUID_GLASS.md           Mobile material rules
TIMELINE_INTERFACES.md    Sequence patterns
TRUST_SURFACES.md         Source and confidence UI
MICROINTERACTIONS.md      Motion and response rules
ANTI_SLOP.md              Quality gate and rejections
TOKENS.md                 Public token catalog
COMPONENT_PATTERNS.md     Pattern contracts
ACCESSIBILITY.md          Mobile accessibility rules
PUBLIC_BOUNDARY.md        Publication boundary
site/                     Static Vite gallery
examples/                 Pattern notes
assets/                   Screenshot and visual slots
```

## Public Boundary

Blackglass uses public-safe language, synthetic content, and generic interface patterns. It does not include sensitive examples, live integrations, internal strategy, personal context, non-public implementation details, or copied product material.

See [PUBLIC_BOUNDARY.md](PUBLIC_BOUNDARY.md) before publishing screenshots, examples, or copy.

## License

MIT. See [LICENSE](LICENSE).
