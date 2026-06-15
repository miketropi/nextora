# Block: Advanced Button

## Overview

The **Advanced Button** block (`nextora/advanced-button`) renders a theme CTA button with an optional **Lucide theme icon** or **uploaded image icon** beside the label — similar to WordPress **`core/button`**, extended with the icon system from [`nextora/icon`](../../blocks/icon/).

| Layer | Description |
|-------|-------------|
| **Button** | `<a class="wp-element-button">` link with label text, fill/outline styles, preset colors |
| **Icon** | Leading, trailing, or icon-only — same Lucide / upload pipeline as Theme Icon |
| **Motion** | Optional scroll reveal via `enableScrollAnimation` + `view.ts` |

Use for donation CTAs, “View all” actions, header-style pill buttons, and any labeled control that needs a consistent icon + text treatment without nesting `core/button` + Theme Icon manually.

---

## Theme context

| Item | Value |
|------|--------|
| **Block name** | `nextora/advanced-button` |
| **Title** | Advanced Button |
| **Category** | `design` |
| **Text domain** | `nextora` |
| **PHP prefix** | `nextora_` |
| **Constants** | `NEXTORA_DIR`, `NEXTORA_URI` |
| **Registration** | [`blocks/blocks.php`](../../blocks/blocks.php) |
| **Scaffold** | `npm run gen -- --name=advanced-button --ns=nextora --category=design` |
| **Icon data** | Shared `assets/data/lucide-icons.json` — `npm run build:icons` |
| **Build** | `npm run build:blocks` (or `npm run watch`) |

Read first: [`AGENTS.md`](../../AGENTS.md), [`docs/blocks.md`](../blocks.md), [`docs/blocks/Theme Icon Block.md`](./Theme%20Icon%20Block.md), skills **nextora-add-theme-block** and **nextora-theme-styling-and-tokens**.

**Reference implementation (icon layer):** [`blocks/icon/`](../../blocks/icon/) — reuse `lucide.php`, `icon-picker.tsx`, `lucide-preview.tsx`, and `register-editor.php` patterns. Do not duplicate Lucide build logic.

**Gutenberg reference:** [`core/button`](https://developer.wordpress.org/block-editor/reference-guides/core-blocks/#button) — match link semantics, `wp-element-button`, fill/outline class naming, and color supports where practical.

---

## Scope and intent

| Use `nextora/advanced-button` | Use `nextora/icon` instead |
|----------------------------|-----------------------------|
| Labeled CTA with URL (Donate, Learn more, View all) | Standalone decorative / informative glyph |
| Icon + text or icon-only button | Icon inside arbitrary layout without button chrome |
| Needs fill/outline button styles | Needs stacked/framed icon surface only |

One button per block instance. For button groups, insert multiple blocks or use `core/buttons` wrapper in patterns (see [`patterns/donate-cta.php`](../../patterns/donate-cta.php)).

---

## Comparison with `core/button`

| Feature | `core/button` | `nextora/advanced-button` |
|---------|---------------|------------------------|
| Label | `text` (RichText) | `text` (RichText) — same |
| Link | `url`, `linkTarget`, `rel` | `url`, `linkTarget`, `rel` — same |
| Styles | `is-style-fill`, `is-style-outline` | `buttonStyle`: `fill` \| `outline` |
| Colors | `supports.color` background + text | `supports.color` + optional overrides |
| Icon | Not built-in | Theme Lucide picker + Media Library upload |
| Icon position | — | `left` \| `right` \| `only` |
| Icon surface | — | `iconStyle`: `default` \| `stacked` \| `framed` + `borderRadius` |
| Scroll reveal | — (use utility classes) | `enableScrollAnimation` toggle |
| Render | Saved HTML in post | Dynamic `render.php` |

Align button chrome with shared CTA tokens in [`docs/blocks.md`](../blocks.md) § Shared component styles (team section, hero, call to action, blog list carousel view-all).

---

## Architecture

```
nextora/advanced-button
├── attributes.text              ← button label (RichText)
├── attributes.url               ← required href (like core/button)
├── attributes.linkTarget/rel
├── attributes.buttonStyle       ← fill | outline (core button styles)
├── attributes.buttonAlign       ← left | center | right
├── attributes.borderRadius      ← button pill radius (px)
├── attributes.iconPosition      ← left | right | only
├── attributes.iconSource        ← theme | upload (from Theme Icon)
├── attributes.iconName          ← Lucide kebab-case
├── attributes.uploadedIcon*
├── attributes.iconSize          ← glyph px size
├── attributes.iconColor
├── attributes.strokeWidth
├── attributes.iconStyle         ← default | stacked | framed (icon glyph)
├── attributes.iconBorderRadius  ← icon surface radius when stacked/framed
├── attributes.backgroundColor   ← stacked icon / button overrides
├── attributes.borderColor       ← framed icon / outline button
├── attributes.enableScrollAnimation
├── lucide.php                   ← require ../../icon/lucide.php (shared helpers)
├── icon-picker.tsx              ← import from ../icon/ (shared)
├── view.ts                      ← scroll reveal + opt-out (mirror icon/view.ts)
└── render.php                   ← <a wp-element-button> + icon + label
```

---

## Block registration

| Property | Value |
|----------|--------|
| `name` | `nextora/advanced-button` |
| `title` | Advanced Button |
| `category` | `design` |
| `textdomain` | `nextora` |
| `render` | `file:./render.php` |
| `editorScript` | `file:./index.js` (from `index.tsx`) |
| `viewScript` | `file:./view.js` (from `view.ts`) |
| `style` / `editorStyle` | `file:./style.css`, `file:./editor.css` |
| `supports.align` | `wide`, `full` |
| `supports.color` | `background: true`, `text: true`, `link: false` |
| `supports.spacing` | `padding`, `margin` |
| `supports.typography` | `fontSize: true`, `lineHeight: false` |
| `supports.html` | `false` |

---

## Attributes schema

### Button content & link

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `text` | `string` | `"Button"` | RichText (canvas) | Visible button label; may be empty when `iconPosition === "only"` |
| `url` | `string` | `""` | TextControl / toolbar | **Required** for a valid button; maps to `href` |
| `linkTarget` | `string` | `"_self"` | SelectControl | `_self` or `_blank` |
| `rel` | `string` | `""` | TextControl (advanced) | Optional `rel`; auto-append `noopener noreferrer` when `_blank` |

### Button chrome

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `buttonStyle` | `string` | `"fill"` | SelectControl | `fill` (solid) or `outline` — maps to `nextora-advanced-button--style-fill` / `--style-outline` |
| `buttonAlign` | `string` | `"left"` | SelectControl | `left`, `center`, `right` — flex on wrapper |
| `borderRadius` | `number` | `50` | RangeControl (0–999) | Button border radius in px; default matches [`theme.json`](../../theme.json) pill (`100px` → use `50` for half-height pill or read preset) |

### Icon (shared with Theme Icon)

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `iconSource` | `string` | `"theme"` | RadioControl | `theme` or `upload` |
| `iconName` | `string` | `"arrow-right"` | Icon picker modal | Lucide kebab-case name |
| `uploadedIconUrl` | `string` | `""` | MediaUpload | Upload mode URL |
| `uploadedIconId` | `number` | `0` | MediaUpload | Attachment ID |
| `iconPosition` | `string` | `"left"` | SelectControl | `left`, `right`, `only` |
| `iconSize` | `number` | `20` | RangeControl (12–48) | Icon width/height in px |
| `iconColor` | `string` | `""` | PanelColorSettings | Empty = inherit button text color |
| `strokeWidth` | `number` | `2` | RangeControl | Lucide only |
| `iconStyle` | `string` | `"default"` | SelectControl | `default`, `stacked`, `framed` — applies to **icon glyph** inside button |
| `iconBorderRadius` | `number` | `8` | RangeControl | When `stacked` or `framed`; icon surface radius |

### Colors (overrides)

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `backgroundColor` | `string` | `""` | PanelColorSettings | Button fill or stacked icon background; preset slug or empty = theme default |
| `textColor` | `string` | `""` | PanelColorSettings | Button label + default icon stroke |
| `borderColor` | `string` | `""` | PanelColorSettings | Outline button border or framed icon border |

Prefer **`supports.color`** first; custom attributes only when inspector needs explicit overrides beyond Global Styles.

### Accessibility & animation

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `ariaLabel` | `string` | `""` | TextControl | **Required** when `iconPosition === "only"` or when `text` is empty |
| `cssClass` | `string` | `""` | TextControl | Extra class on wrapper |
| `enableScrollAnimation` | `boolean` | `true` | ToggleControl (Animation panel, last) | Scroll reveal on block root |

---

## Design system

### Button tokens (match `core/button` + theme blocks)

From [`docs/blocks.md`](../blocks.md) shared CTA row:

| Token | Value |
|-------|--------|
| Font size | `var(--wp--preset--font-size--small)` / `0.875rem` |
| Font weight | `600` |
| Padding | `0.625rem 1.75rem` |
| Fill radius | `50px` pill (or `borderRadius` attribute) |
| Outline border | `1.5px solid` |
| Hover | `opacity: 0.9` or theme.json button `:hover` |
| Gap (icon ↔ label) | `0.5rem` |

Default fill colors inherit [`theme.json`](../../theme.json) `styles.elements.button` (`primary` background, `base` text).

### Icon tokens

Reuse Theme Icon rules: Lucide `currentColor`, upload as `<img>`, never inline uploaded SVG. Icon-only buttons use square/min dimensions (`2.5rem` min touch target per header ghost controls).

### CSS variables

Prefix: **`--nextora-advanced-button-*`**

| Variable | Purpose |
|----------|---------|
| `--nextora-advanced-button-radius` | Button border radius |
| `--nextora-advanced-button-gap` | Icon–label gap |
| `--nextora-advanced-button-bg` | Fill background override |
| `--nextora-advanced-button-text` | Text + icon color override |
| `--nextora-advanced-button-border` | Outline border color |
| `--nextora-advanced-button-icon-radius` | Stacked/framed icon surface |

---

## Class and BEM naming

| Element | Class |
|---------|--------|
| Root | `wp-block-nextora-advanced-button nextora-advanced-button` |
| Alignment | `nextora-advanced-button--align-{left\|center\|right}` |
| Button style | `nextora-advanced-button--style-fill` / `--style-outline` |
| Link | `nextora-advanced-button__button wp-element-button` |
| Label | `nextora-advanced-button__label` |
| Icon wrap | `nextora-advanced-button__icon` |
| Icon position | `nextora-advanced-button__icon--left` / `--right` / `--only` |
| Icon surface | `nextora-advanced-button__icon-surface` (stacked/framed) |
| Scroll off | `nextora-advanced-button--scroll-off` |

Mirror Gutenberg: root may also include `wp-block-button` compatibility class **only if** needed for global button CSS — prefer scoped BEM under `.nextora-advanced-button`.

---

## Render output

### Fill style, icon left

```html
<div
  class="wp-block-nextora-advanced-button nextora-advanced-button nextora-advanced-button--align-center nextora-advanced-button--style-fill"
  style="--nextora-advanced-button-radius:50px;--nextora-advanced-button-gap:0.5rem;"
  data-nextora-scroll-reveal="1"
>
  <a
    href="https://example.com/donate"
    class="nextora-advanced-button__button wp-element-button"
    target="_self"
  >
    <span class="nextora-advanced-button__icon nextora-advanced-button__icon--left" aria-hidden="true">
      <svg class="lucide lucide-heart" …>…</svg>
    </span>
    <span class="nextora-advanced-button__label">Donate now</span>
  </a>
</div>
```

### Outline style, icon only

```html
<div class="wp-block-nextora-advanced-button nextora-advanced-button nextora-advanced-button--style-outline …">
  <a
    href="https://example.com"
    class="nextora-advanced-button__button wp-element-button"
    aria-label="Open menu"
  >
    <span class="nextora-advanced-button__icon nextora-advanced-button__icon--only" aria-hidden="true">
      <svg class="lucide lucide-menu" …>…</svg>
    </span>
  </a>
</div>
```

**Rules:**

- Single interactive element: **`<a>`** with `wp-element-button` (not `<button>` unless form submit is added later).
- `rel="noopener noreferrer"` when `linkTarget` is `_blank`.
- Icon markup: `aria-hidden="true"` when label is present; `aria-label` on `<a>` when icon-only or empty label.
- Upload mode: `<img class="nextora-advanced-button__img">` inside icon span.
- `get_block_wrapper_attributes()` on root — never hand-build wrapper classes alone.
- Empty `url` → render placeholder in editor; return early on front end (or render `<span>` disabled state in editor only).

---

## PHP (`render.php`)

Requirements (same quality gate as Theme Icon):

- `declare(strict_types=1);`
- `require_once __DIR__ . '/../icon/lucide.php';` — shared helpers (`nextora_get_lucide_svg`, `nextora_icon_resolve_color`, `nextora_icon_scroll_animation_enabled`)
- Resolve color preset slugs → `var(--wp--preset--color--{slug})`
- Map `buttonStyle` → BEM modifier classes
- Map `iconStyle` stacked/framed → inner `nextora-advanced-button__icon-surface` wrapper (same pattern as `nextora-icon__surface`)

### Scroll animation (same contract as Theme Icon)

| `enableScrollAnimation` | PHP output |
|-------------------------|------------|
| `true` (default) | `data-nextora-scroll-reveal="1"` + enqueue `view.js` |
| `false` | `data-nextora-scroll-animation-init="1"`, classes `nextora-advanced-button--scroll-off nextora-scroll-animation--ready` — **no** `data-nextora-scroll-reveal` |

Use `nextora_icon_scroll_animation_enabled()` (shared) or duplicate as `nextora_advanced_button_scroll_animation_enabled()` with identical `filter_var` logic.

After editing: **`npm run lint:php:all`**.

---

## Editor (`edit.tsx`)

### Canvas

- **RichText** for `text` inside the button preview (tagName `span`, class `nextora-advanced-button__label`) — mirror `core/button` inline editing.
- **ServerSideRender** for front-end-accurate preview, or inline preview matching `render.php`.
- Toolbar (optional v2): link popover like core/button for `url`.

### Inspector panels (order)

| Panel | Controls |
|-------|----------|
| **Settings** | Source, Choose icon / Upload, Icon position, URL, Open in |
| **Layout** | Button style (fill/outline), Alignment, Button border radius, Icon size, Stroke width, Icon theme style (default/stacked/framed), Icon border radius (when stacked/framed) |
| **Colors** | Text, Background, Icon color, Border (outline/framed), Stacked background |
| **Accessibility** | Aria label, Extra CSS class; `Notice` when icon-only without aria label |
| **Animation** | **Animate on scroll** toggle (last panel) — same help text as Theme Icon / [`docs/blocks.md`](../blocks.md) |

All strings: **`__('…', 'nextora')`**.

### Icon picker

Import shared [`blocks/icon/icon-picker.tsx`](../../blocks/icon/icon-picker.tsx). Same modal UX (wide modal, search only, no tag chips). Localized via existing `nextoraIconBlock.iconsUrl` in [`blocks/icon/register-editor.php`](../../blocks/icon/register-editor.php).

---

## Front-end JS (`view.ts`)

Copy the scroll-reveal contract from [`blocks/icon/view.ts`](../../blocks/icon/view.ts):

- Selector: `.wp-block-nextora-advanced-button.nextora-advanced-button`
- When `data-nextora-scroll-reveal="1"`: GSAP fade-up (`power3.out`, `0.95s`, `once: true`)
- When off: `optOutScrollAnimation()` — set `data-nextora-scroll-animation-init="1"`, kill tweens, add `nextora-scroll-animation--ready` so parent `animation-inner-fade` utilities do not animate the block

Honor `prefers-reduced-motion: reduce`.

---

## Stylesheets

### `style.css`

- Wrapper flex + alignment modifiers
- `.nextora-advanced-button__button` — CTA tokens (padding, weight, radius, hover, `:focus-visible`)
- `--style-fill` / `--style-outline` variants
- Icon gap and size; `__icon-surface` for stacked/framed
- Scroll pending/ready states (mirror Theme Icon)
- `@media (prefers-reduced-motion: reduce)` — shorten transitions

### `editor.css`

- Icon picker styles: reuse or `@import` from `../icon/editor.css` patterns
- Editor: force `opacity: 1` on `--scroll-off` and pending states

---

## Accessibility

| Scenario | Requirement |
|----------|-------------|
| Icon + label | Icon `aria-hidden="true"`; label visible text |
| Icon only | `aria-label` on `<a>` (required) |
| Empty URL | Editor warning; do not render broken link on front end |
| Focus | `:focus-visible` ring on `.nextora-advanced-button__button` — match [`buttons.css`](../nextora/resources/css/modules/components/buttons.css) patterns |
| Touch target | Min `44×44px` for icon-only (`padding` + `min-width` / `min-height`) |

---

## File structure

```
nextora/
├── assets/data/lucide-icons.json     ← shared with nextora/icon
├── blocks/
│   ├── icon/                         ← shared icon layer (existing)
│   │   ├── lucide.php
│   │   ├── icon-picker.tsx
│   │   └── register-editor.php
│   └── advanced-button/
│       ├── block.json
│       ├── index.tsx
│       ├── edit.tsx
│       ├── types.ts
│       ├── render.php
│       ├── view.ts
│       ├── style.css
│       └── editor.css
```

**Do not treat as source:** `index.js`, `view.js`, `index.asset.php`.

---

## Development workflow

```bash
# From nextora/ theme root
npm run build:icons          # if lucide catalog missing
npm run gen -- --name=advanced-button --ns=nextora --category=design
# Implement edit.tsx, render.php, view.ts, styles
npm run build:blocks
npm run lint:php:all
npm run ci                   # before merge
```

---

## Rules for AI agents

| Rule | Detail |
|------|--------|
| **Namespace** | `nextora/advanced-button` only |
| **Text domain** | `nextora` |
| **Reuse icon layer** | `../icon/lucide.php`, `icon-picker.tsx` — no second Lucide JSON build |
| **Button semantics** | `<a href class="wp-element-button">` — not clickable `<div>` |
| **Match core/button** | `url`, `text`, fill/outline, color supports |
| **Match Theme Icon** | Lucide inline SVG; upload as `<img>`; same picker modal |
| **Scroll toggle** | Off → no `data-nextora-scroll-reveal`; set `data-nextora-scroll-animation-init="1"` |
| **Animation panel** | Last sidebar panel |
| **CTA styling** | Copy team-section / blog-list-carousel view-all tokens from [`docs/blocks.md`](../blocks.md) |
| **Quality** | `npm run lint:php:all` + `npm run build:blocks` after changes |

---

## Related docs

- [`docs/blocks/Theme Icon Block.md`](./Theme%20Icon%20Block.md) — icon source, picker, Lucide build
- [`docs/blocks.md`](../blocks.md) — shared CTA + scroll reveal standards
- [`docs/accessibility.md`](../accessibility.md)
- WordPress [`core/button` block reference](https://developer.wordpress.org/block-editor/reference-guides/core-blocks/#button)

---

*Nextora — Advanced Button Block (`nextora/advanced-button`) agent specification*
