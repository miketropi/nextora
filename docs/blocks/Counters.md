# Block: Counters

## Overview

The **Counters** block (`nextora/counters`) displays a responsive grid of animated statistical figures. Each counter shows a large numeric value with optional prefix/suffix and a short label beneath it.

This is a **single self-contained dynamic block** — no inner blocks, no child blocks. All counter items are stored as a structured attribute array (`items`) and rendered entirely via `render.php`. Editors manage items through a custom repeater UI in the Inspector panel.

**Design direction (from approved mock):**

- **Number:** Extra-large, bold, high-contrast sans-serif (e.g. `100k+`)
- **Label:** Smaller, regular weight, centered, muted relative to the number (e.g. `Books & Supplies Provided`)
- **Background:** Dark band — prefer `var(--wp--preset--color--contrast)` via block color supports, not hardcoded hex
- **Layout:** Centered equal-width columns; 1 col mobile → up to 4 cols desktop (configurable 1–6)
- **Animation:** Count-up on scroll into viewport (`0 → target`); static final value always present in the DOM for SSR and accessibility

---

## Theme context

This block must follow Nextora conventions:

| Item | Value |
|------|--------|
| **Block name** | `nextora/counters` |
| **Category** | `design` (content/stat band; pairs with `nextora/call-to-action`, `nextora/hero-section`) |
| **Text domain** | `nextora` |
| **Registration** | Auto via [`blocks/blocks.php`](../../blocks/blocks.php) — no standalone plugin |
| **Source of truth** | `block.json`, `index.tsx`, `edit.tsx`, `save.tsx`, `render.php`, `types.ts`, `style.css`, `editor.css`, `view.ts` |
| **Build** | `npm run build:blocks` (or `npm run watch`) — do **not** hand-edit `index.js` / `index.asset.php` |
| **Scaffold** | `npm run gen -- --name=counters --ns=nextora --category=design` |

Read first: [`AGENTS.md`](../../AGENTS.md), [`docs/blocks.md`](../blocks.md), skills **nextora-add-theme-block** and **nextora-theme-styling-and-tokens**.

---

## Scope and intent

Use `nextora/counters` for impact statistics on landing pages, about sections, and campaign bands — anywhere a row of bold numbers with short labels is needed.

The block should stay focused on **data-driven counter items**, not freeform layout. Counter rows are attributes, not nested blocks.

---

## Architecture

```
nextora/counters              ← single dynamic block, no InnerBlocks
├── attributes.items[]        ← array of counter objects (id, number, prefix, suffix, label)
├── attributes.columns        ← desktop grid column count (1–6)
├── attributes.columnGap      ← optional gap override
├── attributes.divider        ← vertical dividers between items
├── attributes.dividerColor   ← divider color (preset slug or hex)
├── attributes.textAlign      ← center | left | right
├── attributes.enableCountUp  ← count-up animation toggle
├── attributes.countUpDuration
├── attributes.countUpEasing
└── render.php                ← loops items[], outputs all HTML
    view.ts                   ← IntersectionObserver count-up (when enabled)
```

### Why no inner blocks

- Counter items are **data**, not rich content — no freeform text, no nested layout choices.
- A repeater attribute array is simpler, safer, and faster to edit than child blocks.
- `render.php` owns markup; no InnerBlocks coordination or `render_block` filter hacks for animation data.
- Aligns with [`nextora/scrolling-promotion`](../../blocks/scrolling-promotion/) (items repeater + PHP render).

### Motion model

This block uses **`enableCountUp`** as its enter-viewport motion (IntersectionObserver + `requestAnimationFrame` in `view.ts`). It does **not** use the standard GSAP **`enableScrollAnimation`** toggle from [`docs/blocks.md`](../blocks.md) — count-up already triggers when the section enters the viewport, similar to how `nextora/scrolling-promotion` uses CSS marquee motion instead of scroll reveal.

If a future iteration needs a separate section fade-in in addition to count-up, add `enableScrollAnimation` following the image gallery grid pattern.

---

## Block registration

| Property | Value |
|----------|--------|
| `name` | `nextora/counters` |
| `title` | Counters |
| `category` | `design` |
| `render` | `file:./render.php` (dynamic) |
| `editorScript` | `file:./index.js` (built from `index.tsx`) |
| `viewScript` | `file:./view.js` (built from `view.ts`) |
| `style` / `editorStyle` | `file:./style.css`, `file:./editor.css` |
| `supports.align` | `wide`, `full` |
| `supports.color` | `background`, `text` |
| `supports.spacing` | `padding`, `margin`, `blockGap` |
| `supports.html` | `false` |
| Inner blocks | none — `save.tsx` returns `null` |

---

## Attributes schema

### Content

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `items` | `array` | 3 sample items | Inspector repeater | Counter rows (see item schema below) |

### Layout

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `columns` | `number` | `3` | RangeControl (1–6) | Desktop column count |
| `columnGap` | `string` | `""` | UnitControl | Column gap override; empty = theme preset spacing |
| `divider` | `boolean` | `false` | ToggleControl | Vertical dividers between items |
| `dividerColor` | `string` | `""` | Color control | Preset slug or hex; empty = muted contrast at ~15% opacity |
| `textAlign` | `string` | `"center"` | SelectControl | `center`, `left`, `right` |

### Animation

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `enableCountUp` | `boolean` | `true` | ToggleControl | Animate numbers when block enters viewport |
| `countUpDuration` | `number` | `2000` | RangeControl (300–5000, step 100) | Duration in ms |
| `countUpEasing` | `string` | `"easeOutCubic"` | SelectControl | `linear`, `easeOutCubic`, `easeOutExpo` |

Prefer **`supports.color`** and **`supports.spacing`** for background, text, padding, and margin. Add custom color attributes only when Global Styles are insufficient (e.g. scoped `dividerColor`).

### Item object schema

Each entry in `attributes.items`:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | yes | Stable key for React list rendering (e.g. `crypto.randomUUID()` in editor) |
| `number` | `number` | yes | Raw numeric target (e.g. `100`) |
| `prefix` | `string` | no | Prepended text (e.g. `$`) |
| `suffix` | `string` | no | Appended text (e.g. `k+`, `%`) |
| `label` | `string` | yes | Short label below the number |

> `number` is stored as integer/float only. Display string (`100k+`) is assembled at render time from `prefix + number + suffix`.

Define shared types in `types.ts` (see [`blocks/scrolling-promotion/types.ts`](../../blocks/scrolling-promotion/types.ts)).

---

## Design system

1. **Presets first** — Background and text from `supports.color` + `get_block_wrapper_attributes()`. Spacing from `supports.spacing` and `var(--wp--preset--spacing--*)`.
2. **CSS variables** — Block-scoped custom properties use the **`--nextora-counters-*`** prefix (not `--theme--*`).
3. **Label muting** — Prefer `color-mix(in srgb, currentColor 60%, transparent)` or a preset muted token; avoid hardcoded `rgba(255,255,255,0.6)` unless mapping a user-picked override.
4. **Typography** — Number size via `clamp()` and preset font sizes where possible; label via `var(--wp--preset--font-size--small)` or equivalent from [`theme.json`](../../theme.json).

---

## Class and CSS variable naming

| Generic / old | Nextora |
|---------------|---------|
| `wp-block-theme-counters` | `wp-block-nextora-counters` |
| `counter-item` | `nextora-counters__item` |
| `counter-item__number` | `nextora-counters__number` |
| `counter-item__label` | `nextora-counters__label` |
| `has-{n}-columns` | `nextora-counters--cols-{n}` (or `has-{n}-columns` on root if consistent with grid utilities) |
| `has-divider` | `nextora-counters--divider` |
| `has-text-align-{align}` | WordPress alignment class or `nextora-counters--align-{align}` |
| `--theme--counter-cols` | `--nextora-counters-cols` |
| `--theme--counter-gap` | `--nextora-counters-gap` |
| `--theme--divider-color` | `--nextora-counters-divider-color` |

Root BEM block: **`nextora-counters`**. Scope all rules under `.wp-block-nextora-counters` / `.nextora-counters`.

---

## Render output

### High-level HTML

```html
<div
  class="wp-block-nextora-counters nextora-counters nextora-counters--cols-3 nextora-counters--align-center nextora-counters--divider"
  style="--nextora-counters-gap: …; --nextora-counters-divider-color: …;"
  data-nextora-counters-count-up="1"
  data-nextora-counters-duration="2000"
  data-nextora-counters-easing="easeOutCubic"
>
  <!-- Repeated for each item in attributes.items -->
  <div class="nextora-counters__item">
    <span
      class="nextora-counters__number"
      data-nextora-counters-value="100"
      data-nextora-counters-prefix=""
      data-nextora-counters-suffix="k+"
      aria-label="100k+"
    >100k+</span>
    <span class="nextora-counters__label">Books &amp; Supplies Provided</span>
  </div>
</div>
```

**Key points:**

- Root attributes via **`get_block_wrapper_attributes()`** so color/spacing supports apply correctly.
- Count-up config on the wrapper: `data-nextora-counters-count-up`, `data-nextora-counters-duration`, `data-nextora-counters-easing`. Omit count-up attributes when `enableCountUp` is false.
- `data-nextora-counters-value` holds the **raw number only**; prefix/suffix are separate data attributes. JS assembles the display string.
- SSR text in `.nextora-counters__number` must match the final animated value.

---

## PHP render callback (`render.php`)

Requirements:

- Start with **`declare(strict_types=1);`**
- File docblock: `@var array<string, mixed> $attributes`, `@var WP_Block $block`
- Sanitize/escape all output; use `esc_attr`, `esc_html` as appropriate
- Resolve `dividerColor` preset slugs → `var(--wp--preset--color--{slug})` (pattern: `nextora_scrolling_promotion_resolve_color()` in [`blocks/scrolling-promotion/render.php`](../../blocks/scrolling-promotion/render.php))
- Column count: modifier class drives `--nextora-counters-cols` in CSS — do not set `grid-template-columns` inline
- Integer display: whole numbers render without decimals; floats keep one decimal place

After editing: **`npm run lint:php:all`** from the theme root.

---

## Front-end behavior (`view.ts`)

Count-up runs in **`view.ts`**, bundled to `view.js` via [`scripts/build-blocks.mjs`](../../scripts/build-blocks.mjs).

| Item | Standard |
|------|----------|
| **Selector** | `.wp-block-nextora-counters[data-nextora-counters-count-up="1"]` |
| **Trigger** | `IntersectionObserver` on the block root, `threshold: 0.3`, **`once: true`** (unobserve after first fire) |
| **Animation** | `requestAnimationFrame` easing map (`linear`, `easeOutCubic`, `easeOutExpo`); all items in a block animate together |
| **Reduced motion** | Skip animation when `prefers-reduced-motion: reduce` — static SSR values remain |
| **Init guard** | Set `data-nextora-counters-count-init="1"` after setup to avoid double init |
| **Idempotent** | Safe on `DOMContentLoaded`; multiple block instances on one page are independent |

Easing helpers and `animateCounter()` logic can live in `view.ts` or a small colocated module. **Do not** use GSAP for count-up unless there is a strong reason — vanilla RAF keeps the script lightweight.

Optional loading state (only if FOUC is observed): root class `nextora-counters--loading` → `nextora-counters--ready` after init per [`docs/blocks.md`](../blocks.md) JS layout guidance.

---

## Editor (`edit.tsx`)

The editor uses a **repeater UI** in the Inspector and a **live canvas preview** matching the front-end grid.

Align repeater UX with [`blocks/scrolling-promotion/edit.tsx`](../../blocks/scrolling-promotion/edit.tsx):

- Up/down buttons for reorder (no external dnd-kit required for v1)
- Minimum one item; disable remove when only one remains
- **`__('…', 'nextora')`** for all strings

### Suggested inspector panels

**Counter items** (`initialOpen: true`)

- Per item: Prefix, Number, Suffix, Label
- Move up / move down / remove
- **Add counter** button

**Layout**

- Columns (1–6)
- Column gap (UnitControl; help: empty = theme default)
- Show dividers (toggle)
- Divider color (when dividers on; help: empty = theme default)
- Text alignment

**Animation**

- **Enable count-up** toggle
- Duration (ms) and easing (when count-up enabled)
- Help text: *Numbers animate when the block enters the viewport. Disabled automatically when the visitor prefers reduced motion.*

Canvas preview mirrors `render.php` markup/classes without requiring ServerSideRender for layout (live React preview is sufficient; SSR optional for parity checks).

Generate item `id` with **`crypto.randomUUID()`** in the editor — no extra npm dependency.

---

## CSS guidance (`style.css`)

Use theme presets and Nextora tokens:

```css
/* Example tokens — adjust to match theme.json */
--wp--preset--font-size--small       /* Label */
--wp--preset--spacing--10            /* Gap between number and label */
--wp--preset--spacing--20            /* Item inline padding */
--wp--preset--spacing--40            /* Mobile gap / inline padding */
--wp--preset--spacing--60            /* Default column gap */
--wp--preset--spacing--80            /* Section block padding */
--nextora-counters-cols              /* Active column count (set by modifier) */
--nextora-counters-gap               /* Overridable column gap */
--nextora-counters-divider-color     /* Divider line color */
```

### Layout

- Root: CSS Grid, `grid-template-columns: repeat(var(--nextora-counters-cols, 3), 1fr)`
- Modifiers: `.nextora-counters--cols-1` … `--cols-6` set `--nextora-counters-cols`
- Number: `clamp()` for responsive display size; `font-weight: 700`; `line-height: 1`
- Label: centered, max-width ~`18ch`, muted via `currentColor` mix or preset

### Responsive overrides

| Breakpoint | Columns | Notes |
|------------|---------|-------|
| Desktop (`≥1024px`) | As set in editor (1–6) | Full grid |
| Tablet (`768px–1023px`) | Max 2 | CSS override |
| Mobile (`<600px`) | 1 | Stacked; dividers switch from inline-end to block-end |

### Dividers

When `.nextora-counters--divider` is active, items get `border-inline-end`; last item none. On mobile, use `border-block-end` instead.

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  .nextora-counters__number { transition: none; }
}
```

Run **`npm run build:blocks`** after CSS changes. If utilities are added to global Tailwind scan targets, run **`npm run build`** as needed.

---

## Accessibility

- `.nextora-counters__number` has **`aria-label`** set to the final display value (`prefix + number + suffix`) — screen readers announce the target value, not intermediate count-up frames.
- Count-up is **skipped** when `prefers-reduced-motion: reduce` is set; static SSR value is always in the DOM.
- **No ARIA live regions** — count-up is decorative; do not add `role="timer"`.
- Labels use plain `<span>` — no heading level (page heading hierarchy stays in template / inner blocks elsewhere).

---

## File structure

```
blocks/
└── counters/
    ├── block.json          # Registration, attributes, supports, viewScript
    ├── index.tsx           # registerBlockType; save: () => null
    ├── edit.tsx            # Canvas preview + Inspector repeater
    ├── types.ts            # CountersAttributes, CounterItem
    ├── render.php          # Dynamic HTML output
    ├── view.ts             # Count-up IntersectionObserver + RAF
    ├── style.css           # Front-end + shared layout
    ├── editor.css          # Repeater / inspector-only styles
    └── (generated) index.js, index.asset.php, view.js
```

**Do not add:** standalone plugin PHP, `save.js` static HTML, `@wordpress/scripts` toolchain, hand-edited build artifacts.

---

## Closest reference blocks

| Need | Block |
|------|--------|
| Items repeater + PHP render | [`blocks/scrolling-promotion/`](../../blocks/scrolling-promotion/) |
| Color preset resolve in PHP | [`blocks/scrolling-promotion/render.php`](../../blocks/scrolling-promotion/render.php) |
| `view.ts` init + reduced motion | [`blocks/image-gallery-grid/view.ts`](../../blocks/image-gallery-grid/view.ts) |
| Section band + supports | [`blocks/call-to-action/`](../../blocks/call-to-action/), [`blocks/hero-section/`](../../blocks/hero-section/) |

---

## Implementation checklist

- [ ] Scaffold: `npm run gen -- --name=counters --ns=nextora --category=design`
- [ ] `block.json`: `nextora/counters`, `textdomain: nextora`, color/spacing supports, `viewScript`
- [ ] `types.ts`: `CounterItem`, `CountersAttributes`
- [ ] `render.php`: escaped output, `get_block_wrapper_attributes()`, divider color resolve
- [ ] `edit.tsx`: repeater UI, panel titles (**Counter items**, **Layout**, **Animation**), all strings `nextora`
- [ ] `view.ts`: count-up observer, easing, init guard, reduced motion
- [ ] `style.css`: `--nextora-counters-*` tokens, responsive columns, divider variants
- [ ] `npm run build:blocks` and **`npm run lint:php:all`**
- [ ] `npm run typecheck` if TS sources changed
- [ ] Site Editor: block inserter, repeater add/remove/reorder, count-up on front end, reduced motion respected

---

## Notes for implementation

- **Single dynamic block** — `save.tsx` returns `null`. Do not introduce `InnerBlocks`.
- All counter data lives in **`attributes.items`** only. Each item needs a stable **`id`** for React keys.
- **`get_block_wrapper_attributes()`** on the root — required for Global Styles color/spacing classes.
- **`data-nextora-counters-value`** = raw number; prefix/suffix separate. JS and PHP must produce the **same final display string**.
- Column count via **CSS modifier classes** → `--nextora-counters-cols`; never inline `grid-template-columns`.
- **`countUpDuration`** → `data-nextora-counters-duration` on wrapper; JS reads via `dataset.nextoraCountersDuration` (camelCase dataset conversion).
- Count-up observer watches the **wrapper once**; all items animate simultaneously on the same viewport trigger.
- Prefer **theme.json presets** over sidebar duplicate pickers when `supports.color` / `supports.spacing` suffice.
- Optional extensibility hooks (plan): `nextora_counters_items`, `nextora_counters_wrapper_attributes`, `nextora_counters_wrapper_classes`.

---

## Related docs

- [`docs/blocks.md`](../blocks.md) — block standards (tokens, JS init, consistent controls)
- [`AGENTS.md`](../../AGENTS.md) — theme overview and build pipeline
- [`.cursor/skills/nextora-add-theme-block/SKILL.md`](../../.cursor/skills/nextora-add-theme-block/SKILL.md)
- [`.cursor/skills/nextora-theme-styling-and-tokens/SKILL.md`](../../.cursor/skills/nextora-theme-styling-and-tokens/SKILL.md)
