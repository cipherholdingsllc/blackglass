# Mobile Design System

Blackglass turns mobile interface taste into reusable rules: tokens, states, patterns, screenshots, and rejection criteria. The goal is not a large component library. The goal is a compact reference that helps builders make dense mobile workflows feel calm, premium, trustworthy, and touch-native.

## Direction

Blackglass screens should feel like precision mobile instruments: dark, quiet, tactile, readable, and built for repeated use. They should avoid dashboard sprawl, decorative glass, fake live activity, and web layouts squeezed into a phone frame.

## Non-Negotiables

- Mobile first: design for a narrow phone viewport before scaling outward.
- Safe-area first: no primary content or actions trapped under device chrome.
- Thumb-zone actions: primary actions belong in the lower reachable portion of the screen.
- Token discipline: no raw color, spacing, radius, shadow, or duration outside the token catalog.
- State models: every pattern declares default, active, disabled, loading, and empty/error behavior where relevant.
- Trust-forward UI: source, context, confidence, and limits are visible before the user acts.
- Synthetic content only: examples are illustrative and domain-neutral.

## Screen Rhythm

Use a four-part mobile rhythm:

1. Top context: small label, source, or status.
2. Primary object: the one visual idea the screen is about.
3. Supporting stack: timeline items, source rows, or compact cards.
4. Thumb action: one primary action, with secondary actions visually quieter.

The screen fails if the user cannot identify the primary object and primary action within three seconds.

## Pattern Contract

Every Blackglass pattern must include:

- Purpose: what job the surface performs.
- States: the minimum state set it supports.
- Invariant: the rule that must never be broken.
- Accessibility: how meaning survives without color or motion.
- Rejection: when not to use it.

## Ship Gate

A pattern is ready only when:

- Tap targets meet `44px` minimum and `56px` primary action size.
- Text remains readable on the smallest supported mobile viewport.
- Color is paired with shape, label, position, or pattern.
- Reduced-motion users receive the same meaning.
- Glass clarifies hierarchy, state, focus, or boundary.
- Copy is calm, direct, and free of fake urgency.
- The rendered screenshot looks useful, not just decorative.

## Review Loop

1. Define the interface job.
2. Choose the semantic state.
3. Apply tokens.
4. Render the screenshot.
5. Reject generic outputs.
6. Keep the smallest version that still feels distinctive.

## Anti-Drift Checks

- Does every glow mean something?
- Does every glass layer clarify depth or focus?
- Can color be understood without relying on color alone?
- Would the surface still work if motion were reduced?
- Is the screenshot useful in five seconds?

## Screenshot Captures

The site should provide screenshot-ready mobile references. Capture actual rendered pages at mobile and desktop widths using synthetic content only.

| Capture | Purpose |
|---|---|
| Mobile Hero | first impression and phone-scale design proof |
| Pattern Gallery | breadth of mobile pattern set |
| Glass Tiers | material discipline |
| Timeline Event | sequence and source pattern |
| Trust Row | confidence and context pattern |
| Empty State | calm zero-state |
| Quality Gate | public review rules |

## Implementation Examples

### CSS Tokens Example
```css
.card {
  background: var(--surface-glass);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}
```

### React Component Example
```tsx
function ActionButton({ primary, children }) {
  return (
    <button className={`button-link ${primary ? 'primary' : ''}`}>
      {children}
    </button>
  );
}
```
