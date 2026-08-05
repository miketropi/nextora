# Nextora theme blocks — development standards

Use this when adding or changing blocks under `blocks/`. Registration: [`blocks/blocks.php`](../blocks/blocks.php). Scaffold: `npm run gen -- --name=my-block --ns=nextora`.

## Design system (default)

1. **Presets first** — Colors, fonts, spacing, and layout widths come from [`theme.json`](../theme.json). Enable `supports.color`, `supports.spacing`, and `supports.typography` in `block.json` so Global Styles apply in the editor and via `get_block_wrapper_attributes()` on the front end.
2. **CSS variables** — In `style.css` / block CSS, prefer `var(--wp--preset--color--*)`, `var(--wp--preset--font-size--*)`, `var(--wp--preset--spacing--*)`, and shared `--nextora-*` tokens from [`resources/css/app.css`](../resources/css/app.css) `@theme`. Avoid raw hex unless mapping a user-picked override (below).
3. **Tailwind in markup** — Editor preview and PHP may use utility classes (`text-contrast`, `bg-base`) only when they mirror presets; new block-specific layout belongs in `blocks/<name>/style.css` with `@layer` if added to the global bundle via `@source`.
4. **Build** — After `style.css` / `view.ts` changes: `npm run build:blocks` (and `npm run build:css` if the block is scanned from `app.css` `@source`). Do not commit hand-edited `index.js` / `index.asset.php`.

## When to use custom colour options

Use **native** `supports.color` when the whole block wrapper should follow Global Styles (typical content blocks).

Add **custom colour attributes + `PanelColorSettings`** when colour applies to a **part** of the block only — e.g. icon surface, carousel chrome, image band, overlay text, button fill inside a group block. Follow § Custom colour options below.

---

## Custom colour options (required when adding colour controls)

Any block that adds sidebar **Colors** controls for scoped areas must follow this pattern. Reference implementation: [`blocks/advanced-icon/`](../../blocks/advanced-icon/) — full walkthrough in [`docs/blocks/Theme Icon Block.md`](./blocks/Theme%20Icon%20Block.md) § Custom color settings.

### 1. Attribute naming — never use WordPress reserved names for scoped colours

WordPress treats `backgroundColor`, `textColor`, and (in some contexts) `borderColor` as **block-support attribute names**. If you reuse them for an inner surface, badge, or icon background, the editor can add `has-{slug}-background-color has-background` to the **block list wrapper** — wrong element, often stretched into a tall coloured bar in flex/stack layouts.

| Do not use for scoped overrides | Use instead |
|---------------------------------|-------------|
| `backgroundColor` | `surfaceBackgroundColor`, `imageAreaBackground`, `bandBackgroundColor`, `overlayBackgroundColor`, … |
| `textColor` | `labelColor`, `iconColor`, `overlayTextColor`, `numberColor`, … |
| `borderColor` (when not WP wrapper border) | `surfaceBorderColor`, `frameBorderColor`, … |

**Rule:** prefix or scope the name (`surface*`, `icon*`, `overlay*`, `band*`) so it is clearly not the block wrapper’s Global Styles colour.

### 2. Block supports

When colours are custom (`PanelColorSettings` on inner elements), disable native colour support on the same block:

```json
"supports": {
  "color": {
    "background": false,
    "text": false,
    "link": false
  }
}
```

Only enable `supports.color.background` / `text` if the **entire block wrapper** is what should change — and do not duplicate that with a custom attribute of the same name.

### 3. Storage — preset slug, not resolved hex

| User picks in editor | Save in attribute | PHP / CSS output |
|----------------------|-------------------|------------------|
| Theme preset “Secondary” | slug: `"secondary"` | `var(--wp--preset--color--secondary)` |
| Custom colour (hex) | `"#e50a46"` | `#e50a46` |
| Theme preset “Secondary” with opacity < 100% | `"#e50a4680"` (8-digit hex with alpha) | `#e50a4680` (preserve alpha) |
| Theme gradient “Primary” | slug: `"gradient-primary"` | `var(--wp--preset--gradient--gradient-primary)` |
| Custom gradient CSS | `"linear-gradient(135deg, …)"` | `linear-gradient(135deg, …)` |

**Never store resolved hex for a theme preset.** If the user selects Secondary, save `"secondary"`, not `#FFC247`. Otherwise **Browse styles → Color variations** will not update the block when the palette changes.

`PanelColorSettings` `onChange` often returns **hex** even for theme swatches — normalize to slug before `setAttributes`.

**8-digit hex with alpha:** `enableAlpha` causes `onChange` to return `#RRGGBBFF` (8-digit with full-opacity alpha `ff`). The hex→slug normalizer must **strip alpha** before comparing against palette entries (palette only has 6-digit hex). Only convert to slug when alpha = `ff`; keep the raw 8-digit hex when alpha < `ff` (to preserve intentional transparency).

**Gradient slugs:** `onGradientChange` from `PanelColorSettings` returns CSS gradient strings. Normalize to slug when the CSS matches a theme gradient preset. Resolve slug back to CSS string for the `gradientValue` prop (to highlight the correct swatch).

### 4. Editor (`edit.tsx`)

| Requirement | Detail |
|-------------|--------|
| **Control** | `PanelColorSettings` in a **Colors** panel (same as sibling blocks — not a one-off `ColorPicker` in Layout unless an existing reference block does that) |
| **onChange** | Run through `normalizeColorForStorage(value, palette)` — map theme hex → slug; keep custom hex |
| **value** | Run through `colorValueForPicker(stored, currentPalette, lookupPalette)` — show current palette hex for a stored slug so the swatch highlights correctly |
| **Palette lookup** | Merge active editor palette + all style-variation entries (localize from PHP via `register-editor.php` when hex→slug migration is needed) |
| **Migration** | On block load: legacy reserved names → scoped names; legacy hex → slug when identifiable |
| **enableAlpha** | Always pass `enableAlpha` to `PanelColorSettings` so the colour picker shows an opacity slider — `PanelColorSettings` should be `<PanelColorSettings enableAlpha title={…} colorSettings={…} />`. Without it, only a 6-digit hex picker is shown and alpha/transparency cannot be set. |
| **Gradient tabs** | Pass `gradients={themeGradients}` to `PanelColorSettings` and add `gradientValue`/`onGradientChange` to the colour setting entry that supports gradients. This enables the native Solid **\|** Gradient tabs. Also set `disableCustomGradients={false}` to show the manual gradient builder. |
| **Gradient storage** | Use `normalizeGradientForStorage(value, gradients)` on `onGradientChange` — map CSS gradient string → slug; use `gradientValueForPicker(slug, gradients)` to resolve slug → CSS string for the `gradientValue` prop. |
| **i18n** | Labels via `__('Background color', 'nextora')`, etc. |

Reusable helpers live in [`blocks/advanced-icon/color-utils.ts`](../../blocks/advanced-icon/color-utils.ts) — copy or extract shared utilities when adding a second block with the same pattern.

### 5. PHP (`render.php`)

| Requirement | Detail |
|-------------|--------|
| **Resolve** | Map slug → `var(--wp--preset--color--{slug})`; pass through custom hex (including 8-digit `#RRGGBBAA` with alpha); handle `var:preset\|color\|*` if present. **Important:** check 8-digit hex **before** `sanitize_hex_color()` since WP core only accepts 3/6-digit hex. |
| **Legacy hex** | Optionally map old saved hex back to slug by scanning theme + child + style-variation palettes (see `nextora_icon_hex_to_preset_slug()` in [`blocks/advanced-icon/lucide.php`](../../blocks/advanced-icon/lucide.php)) |
| **Apply colour** | On the **target inner element** (BEM modifier or CSS custom property), not on `get_block_wrapper_attributes()` unless the whole block is the target |
| **Fallback** | Read scoped attribute first, then legacy name: `$attributes['surfaceBackgroundColor'] ?? $attributes['backgroundColor'] ?? ''` |

### 6. CSS layout

When the coloured element sits inside **flex**, **stack**, or **columns**, prevent stretch:

```css
.wp-block-nextora-{slug} {
  align-items: flex-start;
  align-self: flex-start;
  width: fit-content;
  max-width: 100%;
}
/* inner surface / band */
.nextora-{slug}__surface {
  flex: 0 0 auto;
  width: fit-content;
  height: fit-content;
}
```

Editor-only: reset accidental `has-*-background-color` on the block list wrapper if legacy content still carries reserved attribute names — see [`blocks/advanced-icon/editor.css`](../../blocks/advanced-icon/editor.css).

### 7. Checklist (block with custom colour controls)

- [ ] Attribute names are **scoped** — not `backgroundColor` / `textColor` for inner/surface colours
- [ ] `supports.color.*` all `false` (or native support only for wrapper — not both)
- [ ] `PanelColorSettings` in **Colors** panel; labels match sibling blocks
- [ ] Store preset **slugs** (colors and gradients); `normalizeColorForStorage`/`normalizeGradientForStorage` on change; resolve slug in PHP
- [ ] Picker `value` uses current palette hex for stored slug; `gradientValue` uses `gradientValueForPicker`
- [ ] `normalizeColorForStorage` strips alpha for palette comparison; only stores slug when alpha = `ff`
- [ ] Colour rendered on correct inner element / CSS variable — not block wrapper background
- [ ] Legacy attribute + hex migration where templates already exist
- [ ] `width: fit-content` / `align-self: flex-start` when parent is flex/stack/column
- [ ] Verify in Site Editor: swatch matches, no tall background bar, colour updates after style variation change

---

## Style overrides (summary)

Add custom attributes **only** when Global Styles / `supports.color` on the wrapper are not enough.

| Convention | Detail |
|------------|--------|
| **Naming** | Scoped names only — see § Custom colour options. |
| **Sidebar** | Panel **Colors** or **Appearance**; labels match sibling blocks. |
| **Help text** | One line: what the control affects; empty = theme default. |
| **Front end** | CSS variable or BEM modifier on the affected element — not the whole block wrapper unless intentional. |

## Scroll animation (required pattern)

Every **content** block that benefits from motion should expose an editor toggle and honor reduced motion.

| Item | Standard |
|------|----------|
| **Attribute** | `enableScrollAnimation` — `boolean`, default `true`. |
| **Sidebar** | Panel **Animation** → `ToggleControl` label **Animate on scroll** (`nextora`). Help: *Fade or move content in when it enters the viewport. Disabled automatically when the visitor prefers reduced motion.* |
| **PHP** | When enabled, add `data-nextora-scroll-reveal="1"` on the block root (or a dedicated inner wrapper). When disabled, omit the attribute. |
| **JS** | In `view.ts` / `view.js`: run only if `data-nextora-scroll-reveal="1"`; use **GSAP + ScrollTrigger** (see [`blocks/image-gallery-grid/view.ts`](../blocks/image-gallery-grid/view.ts)) with `once: true` and `prefers-reduced-motion: reduce` → no animation. |
| **Init guard** | `data-nextora-{block}-scroll-init="1"` after setup to avoid double init. |

Existing reference: **image gallery grid** — scroll reveal for bento/editorial layouts (no toggle yet; new blocks should add the toggle).

## JavaScript layout blocks (carousel, slider, etc.)

Blocks that **depend on JS** for layout must avoid FOUC / broken first paint.

| Phase | Standard |
|-------|----------|
| **Markup** | Stable dimensions in CSS (`aspect-ratio`, `min-height`, `overflow: hidden`) so space is reserved before init. |
| **Loading** | Root class `nextora-{slug}--loading` until init completes; then `nextora-{slug}--ready`. Optional subtle opacity or skeleton in `style.css`. |
| **Pending** | `data-nextora-{slug}-init-pending="1"` while waiting (e.g. width measurement); remove when done. |
| **Done** | `data-nextora-{slug}-inited="1"` (or block-specific name already in use, e.g. `data-swiper-inited`). |
| **Init** | Idempotent `initRoot()`; `DOMContentLoaded` + optional custom event for re-render (e.g. `nextora-image-gallery-reinit`). |
| **Motion** | Respect `prefers-reduced-motion`; carousel may still init but skip autoplay / aggressive transitions. |

Reference: [`blocks/image-gallery-slide/view.ts`](../blocks/image-gallery-slide/view.ts) (`swiperInitPending`, width polling before mount).

## UI consistency across blocks

When adding controls, align with existing blocks:

| Control type | Align with |
|--------------|------------|
| Layout preset | **Image gallery grid** — `SelectControl` + layout class `nextora-{prefix}--layout-{slug}`. |
| Icon-only actions | **Header** utilities — `2.5rem` ghost control, `rounded-md`, `currentColor`. |
| Modals / search | **Spotlight search** — `data-nextora-modal`, shared modal CSS. |
| Spacing / align | `supports.align` `wide` / `full`; `category`: **`theme`** for site chrome blocks, **`media`** / **`design`** for content as appropriate. |
| Text domain | Always **`nextora`**. Block name: **`nextora/{slug}`**. |

### Shared component styles

When two or more blocks share the same type of UI element, they **must use the same visual styling** — identical tokens, sizes, spacing, and behaviour. Before building a new variant, check whether an existing block already has the component and copy its approach.

| Component | Reference block(s) | What to match |
|---|---|---|
| CTA / "View All" / action button | **Team section**, **Hero section**, **Call to action** | Font size (`--wp--preset--font-size--small`), weight (`600`), border width (`1.5px` on outline), padding (`0.625rem 1.75rem`), radius (`50px`), hover opacity (`0.9`), icon class + sizing, CSS variable naming |
| Carousel arrows | **Image gallery slide** | `aria-label` wording, SVG chevron paths, button dimensions, hover/focus states |
| Pagination dots | **Testimonial carousel**, **Image gallery slide** | Bullet size (7px), active width (20px), transition (width + border-radius + background), ARIA |
| Card / grid hover | **Post grid**, **Image gallery grid** | Image scale amount (`1.02`–`1.04`), transition duration (`0.3`–`0.4s`), title color shift |
| Scroll reveal | **Testimonial carousel**, **Image gallery grid** | `--reveal-pending`/`--reveal-ready` class system, GSAP timeline (`power3.out`, `0.95s` per element, `0.12s` stagger), fallback timeout (`1800ms`) |

**Sidebar controls for shared components must also match:** use the same panel title, control labels, and help text as the reference block. If the reference uses `PanelColorSettings` for a colour, the new block must too — not inline `ColorPicker` in a `PanelBody`.

Before shipping, compare sidebar structure and help strings with the closest existing block; reuse panel titles (**Settings**, **Layout**, **Animation**, **Colors**).

## Checklist (new block)

- [ ] `block.json`: `textdomain` `nextora`, sensible `supports`, `enableScrollAnimation` if content animates on scroll.
- [ ] `render.php`: escaped output, `get_block_wrapper_attributes()`, scroll data attribute when enabled.
- [ ] `style.css`: presets / `--wp--preset--*`; loading/ready states if `viewScript` present.
- [ ] `edit.tsx`: Animation toggle; colour overrides follow § Custom colour options if `PanelColorSettings` is added.
- [ ] `view.ts` (if needed): scroll reveal + init loading pattern; reduced motion.
- [ ] `npm run build:blocks` (and `npm run build` if CSS/TS global).

## Reference blocks (by pattern)

| Block | Pattern |
|-------|---------|
| `nextora/scrolling-promotion` | CSS-only marquee, `render.php`, no `viewScript`; items repeater in editor |
| `nextora/arc-gallery-section` | Arc layout + `arc-math.ts` / PHP mirror, live editor preview, `view.ts` scroll reveal |
| `nextora/image-gallery-grid` | Scroll reveal (GSAP) |
| `nextora/image-gallery-slide` | Swiper init / loading |
| `nextora/team-section` | Swiper member carousel, `members[]` repeater, scroll reveal; see [`docs/blocks/Our Team Section Block.md`](./blocks/Our%20Team%20Section%20Block.md) |
| `nextora/testimonial-carousel` | Fade testimonial carousel, `testimonials[]` repeater, trust avatars; see [`docs/blocks/Testimonial Carousel.md`](./blocks/Testimonial%20Carousel.md) |
| `nextora/testimonials` | Split-screen portrait + quote carousel, ring pagination; see [`docs/blocks/testimonials.md`](./blocks/testimonials.md) |
| `nextora/instagram-feed` | Curated Instagram tiles, Swiper carousel, lightbox modal; see [`docs/blocks/Instagram.md`](./blocks/Instagram.md) |
| `nextora/contact-form` | Get-in-touch form, REST submit, dual email, Tiptap message field; see [`docs/blocks/Contact Form Block.md`](./blocks/Contact%20Form%20Block.md) |
| `nextora/google-maps` | Iframe or JS API map embed, markers, directions; see [`docs/blocks/Google Maps Block.md`](./blocks/Google%20Maps%20Block.md) |
| `nextora/advanced-icon` | Lucide/upload icon, stacked/framed surfaces, **custom colour pattern** (slug storage, scoped attrs); see [`docs/blocks/Theme Icon Block.md`](./blocks/Theme%20Icon%20Block.md) |
| `nextora/advanced-button` | Advanced CTA buttons or icon-only items with Lucide/upload icons; see [`docs/blocks/Advanced Button.md`](./blocks/Advanced%20Button.md) |
| `nextora/box-icon` | Icon cards in slider or desktop grid (responsive always carousel); see [`docs/blocks/Box Icon.md`](./blocks/Box%20Icon.md) |

## Related docs

- [`AGENTS.md`](../AGENTS.md) — theme overview and build pipeline.
- [`docs/accessibility.md`](./accessibility.md) — WCAG patterns and block a11y checklist.
- [`docs/modal.md`](./modal.md), [`docs/spotlight-search.md`](./spotlight-search.md) — shared UI patterns.
- Skill: `.cursor/skills/nextora-add-theme-block/SKILL.md`
- Skill: `.cursor/skills/nextora-theme-styling-and-tokens/SKILL.md`
- Block specs: [`docs/blocks/Our Team Section Block.md`](./blocks/Our%20Team%20Section%20Block.md), [`docs/blocks/Testimonial Carousel.md`](./blocks/Testimonial%20Carousel.md)(./blocks/Testimonial%20Carousel.md), [`docs/blocks/Theme Icon Block.md`](./blocks/Theme%20Icon%20Block.md), [`docs/blocks/Advanced Button.md`](./blocks/Button%20Icon%20Block.md)
