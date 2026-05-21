# Tokens

Blackglass tokens are public mobile design constraints. They exist so repeated screens feel intentional instead of hand-styled.

## Color

| Token | Value | Role |
|---|---:|---|
| `color.bg.deep` | `#0c1311` | root mobile background |
| `color.bg.card` | `#121c19` | card and sheet surface |
| `color.bg.theme` | `#1c2e26` | elevated dark green surface |
| `color.text.primary` | `#fffaf0` | primary ivory text |
| `color.text.muted` | `#9ca3af` | supporting text |
| `color.border.subtle` | `rgba(229,231,235,0.10)` | quiet border |
| `color.border.emphasis` | `rgba(229,231,235,0.22)` | active border |
| `color.action.primary` | `#1f7a5a` | primary action |
| `color.action.pressed` | `#175a44` | pressed action |
| `color.signal.early` | `#5ccfb3` | active signal or focus |
| `color.signal.strong` | `#6be9cd` | high-signal accent |
| `color.signal.dim` | `rgba(92,207,179,0.24)` | quiet signal fill |
| `color.status.waiting` | `#d4a017` | waiting or review |
| `color.status.boundary` | `#b45432` | blocked or limit state |
| `color.status.quiet` | `#66736d` | deferred or inactive |

### CSS Implementation
```css
:root {
  --bg-deep: #0c1311;
  --bg-card: #121c19;
  --action-primary: #1f7a5a;
  --signal-strong: #6be9cd;
  /* ... */
}
```

## Spacing

Use a 4px grid: `0`, `4`, `8`, `12`, `16`, `24`, `32`, `48`, `64`, `96`.

No custom spacing unless a new token is added with a named role.

## Radius

| Token | Value | Role |
|---|---:|---|
| `radius.sm` | `4px` | chips and small controls |
| `radius.md` | `8px` | cards and list items |
| `radius.lg` | `12px` | phone surfaces and sheets |
| `radius.xl` | `16px` | large capture surfaces |
| `radius.full` | `999px` | circular controls and pills |

## Elevation

| Token | Role |
|---|---|
| `elevation.0` | no shadow |
| `elevation.sm` | small raised control |
| `elevation.md` | active card or sheet |
| `elevation.lg` | phone frame or prominent focus surface |

## Glass Tiers

| Token | Value | Role |
|---|---|---|
| `glass.whisper` | `blur(8px)` | quiet separation, secondary rows |
| `glass.present` | `blur(16px)` | primary material, focused inputs |
| `glass.prominent` | `blur(24px)` | active focus, boundaries |

## Motion

| Token | Value | Role |
|---|---:|---|
| `motion.quick` | `150ms` | press response |
| `motion.base` | `200ms` | small reveal |
| `motion.slow` | `300ms` | sheet transition |
| `motion.slowest` | `450ms` | one-shot progress reveal |

## Tap Targets

| Token | Value | Role |
|---|---:|---|
| `tap.min` | `44px` | minimum interactive target |
| `tap.primary` | `56px` | primary action |
| `tap.prominent` | `72px` | high-value capture control |

## Typography

| Token | Role |
|---|---|
| `font.display` | editorial headings and hero labels |
| `font.body` | interface text |
| `font.mono` | counters, status labels, source chips |
| `size.caption` | 12px |
| `size.body` | 16px |
| `size.title` | 20px |
| `size.heading` | 28px |
| `size.display` | 44px |

## Breakpoints

| Token | Value | Role |
|---|---:|---|
| `breakpoint.androidSm` | `360px` | small Android width |
| `breakpoint.se` | `375px` | compact iPhone width |
| `breakpoint.std` | `390px` | common phone width |
| `breakpoint.proMax` | `430px` | large phone width |
