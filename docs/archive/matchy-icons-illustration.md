# Icons

Our icon system provides symbolic representation of key actions and elements within Matchy's interface.

Icons should be **obvious** — simple, intuitive, and instantly recognizable, even in minimal form; **intentional** — used purposefully to support comprehension, since if an icon's meaning needs explaining, it probably shouldn't be used; and **consistent** — one shape language throughout, so icons read as one family rather than mixed sources.

## Characteristics

### Appearance

All icons are sourced from `lucide-react` rather than custom-drawn — a fast, tested way to get a consistent icon set without spending design time redrawing common symbols. A few examples: search, cart, heart, lock, calendar, notifications.

### Size

Icons follow a fixed scale rather than arbitrary sizing — e.g. the swipe deck's like/dislike icons use `lg` (24px), while a filter chip's icon uses `sm` (16px):

| Token | Size | Example | Use |
|---|---|---|---|
| `matchy-icon-size-sm` | 16px | <span style="font-size:16px">🔍</span> | Dense UI, inline with body text |
| `matchy-icon-size-md` | 20px | <span style="font-size:20px">🔍</span> | Paired with a 16px label |
| `matchy-icon-size-lg` | 24px | <span style="font-size:24px">🔍</span> | Default size, most UI icons |

### Color

Icons appear in 3 states:

| State | Example | Use |
|---|---|---|
| Default (dark) | <span style="display:inline-block;width:20px;height:20px;background:#383838;border-radius:4px;border:1px solid #D9CEC4;"></span> | Standard, on light backgrounds |
| White | <span style="display:inline-block;width:20px;height:20px;background:#FFF5EC;border-radius:4px;border:1px solid #D9CEC4;"></span> | On dark or colored backgrounds |

### Layout

Since every icon comes from `lucide-react`, they all sit on the same 24×24 grid with a consistent stroke weight — using one source instead of mixing icon sets keeps this automatic rather than something to manage by hand.

## Best practices

| ✅ Do | ❌ Don't |
|---|---|
| Give icon-only buttons an accessible name | Use icons purely for decoration with no functional or labeling purpose |
| Use icon colors with at least 3:1 contrast against their background | Use an icon color that fails the 3:1 minimum |
| Center-align icons next to a text label | Baseline-align icons next to a text label |
| Keep one consistent icon style, sourced from `lucide-react` | Mix icon styles from different sources or hand-drawn one-offs |

## Accessibility

- Icon-only buttons need an accessible name (e.g. `aria-label`) — an icon alone doesn't convey meaning to screen reader users.
- Icons need a minimum 3:1 contrast ratio against their background — the WCAG standard for non-text elements, separate from the 4.5:1 minimum used for text.
- Before adding a new icon to the set, check that its meaning translates across cultures — Matchy is built across a Sydney/LATAM context, so a symbol that reads clearly in one doesn't always read the same way in the other.
