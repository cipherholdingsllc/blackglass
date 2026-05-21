# Anti-Slop

Blackglass rejects generic mobile interface output.

## Banned Visual Patterns

- decorative glass with no interface job
- purple-blue AI gradients
- neon dashboards
- fake live telemetry
- meaningless metric walls
- stock SaaS card grids
- web layouts squeezed into phone frames
- tiny tap targets
- hover-only meaning
- celebration effects for routine work
- endless shimmer
- one-off colors, radii, shadows, or durations
- low-contrast text on glass
- icons without labels where meaning is not obvious
- fake urgency copy

## Quality Gate

A Blackglass surface must answer:

- What is the job of this surface?
- What state is active?
- What should the user trust?
- What is the next action?
- What can be ignored?
- Can the meaning survive without color?
- Can the meaning survive with reduced motion?
- Does every control meet the tap target rule?

If those answers are unclear, polish is premature.

## Lint-Style Checks

Block a change when it introduces:

- raw color values outside the token catalog
- custom radius, shadow, or timing values
- tap targets under `44px`
- primary actions under `56px`
- glass on every repeated row
- animation without a reduced-motion fallback
- copy that claims certainty without visible source or context
- demo content that looks real or sensitive
