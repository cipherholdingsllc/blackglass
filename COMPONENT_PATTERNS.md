# Component Patterns

Blackglass patterns are mobile reference surfaces. Each pattern needs a name, a job, a state model, an invariant, and a rejection rule.

## Pattern Requirements

Each pattern includes:

- title
- one-line purpose
- supported states
- invariant
- accessibility note
- do-not-use-when note

## Implemented Pattern Set

| Pattern | Purpose |
|---|---|
| Mobile Screen Shell | Safe-area layout, dark base, and thumb-zone action placement |
| Glass Surface Card | Functional material tier comparison |
| Mobile Action Button | Touch-sized command control |
| Capture Control | Large high-value input control |
| Timeline Event | Sequence item with source, status, and detail affordance |
| Bottom Sheet Preview | Context-preserving disclosure layer |
| Trust Row | Source, context, confidence, and limit cues |
| Empty State | Calm zero-state with one next action |

## Naming Rule

Avoid names like `CardDemo`, `Example1`, or `Panel2`. Names should describe the interface job, not the decoration.

## Promotion Rule

If a visual idea appears twice, promote it into a named token or pattern. If it appears once and has no clear job, delete it.
