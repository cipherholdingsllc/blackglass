# Black Glass

**The coded design system for calm, premium, trust-forward interfaces.**

Dense context → clear, tactile, high-craft surfaces.

Functional liquid glass. Semantic tokens. Visible trust. No slop.

This file + the tokens in `TOKENS.md` + the coded examples in `site/src/` + the rules in `ANTI_SLOP.md` and `LIQUID_GLASS.md` are the complete Black Glass language.

## Core Identity

- Deep, quiet backgrounds (`#0c1311` base)
- Ivory and muted text for calm readability
- Teal / signal for actions and insights
- Amber / rust for status and boundaries
- Glass only when it *does work* (hierarchy, focus, boundary, state)
- Motion only explains state
- Trust and context are always visible

## Tokens (summary)

See full `TOKENS.md` and live implementation in `site/src/styles.css`.

**Color (key)**
- `--bg-deep`: #0c1311
- `--action-primary`: #1f7a5a
- `--signal-strong`: #6be9cd
- `--text-primary`: #fffaf0

**Glass tiers**
- whisper: subtle (blur ~8px)
- present: primary material (blur ~16px)
- prominent: focus / capture (blur ~24px)

**Sizing**
- Tap min: 44px
- Primary action: 56px
- Prominent capture: 72px

**Motion**
- quick: 150ms
- base: 200ms
- slow: 300ms

## Rules (non-negotiable)

1. Tokens first. Never use raw values.
2. Glass must do a job. No decoration.
3. No fake live / shimmer / urgency.
4. Trust visible: source, context, confidence, limits shown.
5. Intent-sized controls.
6. Color is never the only signal.
7. Reduced motion must preserve meaning.
8. Synthetic / generic demo content only in this repo.

## Pattern Contract (every surface)

- Purpose (the job)
- States (default, active, disabled, loading, empty/error)
- Invariant (what must always be true)
- Accessibility (meaning without color/motion)
- Rejection criteria (when not to use)

## How to use with Claude Design 2.0

Import this repo (cipherholdingsllc/blackglass) as your design.

Strong prompt:

"Use Black Glass from this repo for the entire interface. 
Follow the tokens exactly from BLACK_GLASS.md and TOKENS.md. 
Apply functional liquid glass only where it clarifies something. 
Make trust and source visible. 
No decorative effects, no slop, no fake states. 
Generate clean, coded output that matches the style in the gallery."

You can also load the specific docs:
- ANTI_SLOP.md for rejection rules
- LIQUID_GLASS.md for material doctrine
- site/src/App.tsx and styles.css for coded examples

## Coded Gallery

The `site/` is the living, coded demonstration. Tokens are real CSS custom properties. Patterns are implemented (not just described).

When Claude generates from this repo it should be able to match the visual and structural language seen in the gallery source.

## Status

This is the source of truth for Black Glass.

One current application is the mobile site. The system itself is general.
