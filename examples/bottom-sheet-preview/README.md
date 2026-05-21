# Bottom Sheet Preview

## Purpose
Context-preserving disclosure for details, edits, and confirmation.

## States
- closed
- open
- saving
- error

## Invariant
The sheet never hides the parent context or primary escape path.

## Accessibility
Includes heading, focus trap expectations, and a visible dismiss affordance.

## Do-not-use-when (Avoid)
Do not use a full-screen takeover for small detail review.
