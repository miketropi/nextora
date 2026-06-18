# Block: Box Content

**Version:** 1.1  
**Status:** Implemented as **`nextora/box-content`** in [`blocks/box-content/`](../../blocks/box-content/).  
**For:** AI Agent Development  

This specification targets the **Nextora theme** block system. Follow [`docs/blocks.md`](../blocks.md), skills **nextora-add-theme-block** and **nextora-theme-styling-and-tokens**, and rules in [`.cursor/rules/nextora-blocks.mdc`](../../.cursor/rules/nextora-blocks.mdc) / [`.cursor/rules/nextora-a11y-blocks.mdc`](../../.cursor/rules/nextora-a11y-blocks.mdc) when implementing. Do **not** treat this block as a standalone plugin.

**Reference mock:** [`docs/blocks/home/06_alonepro-foodbank-home.html`](./home/06_alonepro-foodbank-home.html) — **Get involved** section (`.involve-grid` / `.inv` cards).

---

## 1. Overview

The **Box Content** block (`nextora/box-content`) renders **icon-led content cards** — each card has an icon (Lucide or upload), title, short description, and an optional text link with trailing arrow. **v1 ships cards only:** section eyebrow/heading attributes remain in `block.json` for backward compatibility but are **not** exposed in the inspector and **not** rendered in `render.php`.

**Design direction (from approved mock):**

- **Cards:** Bordered boxes (`2px` solid), flex column, configurable padding (`SpacingSizesControl`), equalised title row + links pinned to card foot via flex
- **Icon:** Circle surface (`54×54px` default) with Lucide SVG (`stroke: currentColor`) or upload `<img>`; block-level **Theme style:** `default` | `stacked` | `framed`
- **Hover:** Card inverts to contrast background / base text; icon circle inverts (stacked + framed fill with base, dark stroke inside); link accent on card hover (see §6)
- **Link row:** Uppercase, bold, small caps tracking — label + inline arrow SVG (not a full button)
- **Layout:** Editor chooses **Grid** or **Slider** for desktop; **responsive viewports always use Swiper** when `layoutMode` is `grid` (tablet/mobile carousel)

**Architecture:** Single dynamic block with an **`items[]` repeater** (recommended — same pattern as [`nextora/counters`](../../blocks/counters/), [`nextora/team-section`](../../blocks/team-section/)). No InnerBlocks. Markup from **`render.php`**; carousel from bundled **`view.ts`** (Swiper 11).

---

## 2. Theme context

| Item | Value |
|------|--------|
| **Block name** | `nextora/box-content` |
| **Title** | Box Content |
| **Category** | `design` (content band; pairs with `nextora/counters`, `nextora/call-to-action`, `nextora/team-section`) |
| **Text domain** | `nextora` |
| **PHP prefix** | `nextora_` |
| **Registration** | Auto via [`blocks/blocks.php`](../../blocks/blocks.php) |
| **Source of truth** | `block.json`, `index.tsx`, `edit.tsx`, `types.ts`, `item-utils.ts`, `spacing-utils.ts`, `editor-icon.tsx`, `item-modal-form.tsx`, `render.php`, `style.css`, `editor.css`, `view.ts`, `register-editor.php`; reuses [`blocks/advanced-icon/color-utils.ts`](../../blocks/advanced-icon/color-utils.ts) + `lucide.php` |
| **Build** | `npm run build:blocks` (or `npm run watch`) — do **not** hand-edit `index.js` / `index.asset.php` / `view.js` |
| **Scaffold** | `npm run gen -- --name=box-content --ns=nextora --category=design` |

Read first: [`AGENTS.md`](../../AGENTS.md), [`docs/blocks.md`](../blocks.md), [`docs/blocks/Theme Icon Block.md`](./Theme%20Icon%20Block.md) (icon colour + Lucide patterns).

---

## 3. Reference markup (foodbank demo)

Source: `06_alonepro-foodbank-home.html` lines 119–131 (CSS) and 384–398 (HTML).

### 3.1 Section header

```html
<div class="sec-head center">
  <span class="eyebrow center">Get involved</span>
  <h2>Four ways to fight hunger.</h2>
</div>
```

### 3.2 Card grid (desktop reference — block default layout is **slider**, not this grid)

```html
<div class="involve-grid">
  <div class="inv">
    <div class="ic"><i data-lucide="heart"></i></div>
    <h3>Donate</h3>
    <p>Just $1 puts four meals on a table. Give once or monthly.</p>
    <a href="#" class="go">Give now <i data-lucide="arrow-right"></i></a>
  </div>
  <!-- 3 more cards … -->
</div>
```

### 3.3 Mock → theme token mapping

| Mock token | Nextora default |
|------------|-----------------|
| `--ink` (border, hover fill) | `var(--wp--preset--color--contrast)` |
| `--cream` (hover text) | `var(--wp--preset--color--base)` |
| `--coral` (icon bg, link) | `var(--wp--preset--color--primary)` |
| `--gold` (hover link) | `var(--wp--preset--color--secondary)` or custom `linkHoverColor` |
| `--muted` (description) | `color-mix(in srgb, currentColor 55%, transparent)` or `paragraph` preset |
| `gap: 18px` | `var(--wp--preset--spacing--30)` or `--nextora-box-content-gap` |
| Eyebrow + rule | Match [`nextora/team-section`](../../blocks/team-section/) eyebrow pattern |

Do **not** hard-code mock hex in committed CSS — use presets + scoped override attributes (§8).

---

## 4. Layout modes (grid vs slider)

### 4.1 Rules

| Viewport | `layoutMode: "slider"` (default) | `layoutMode: "grid"` |
|----------|----------------------------------|----------------------|
| **Desktop** (≥ `gridMinWidth`) | Swiper carousel | CSS grid (`gridColumns` columns) |
| **Responsive** (< `gridMinWidth`) | Swiper carousel | **Swiper carousel** (forced) |

**Critical:** Responsive **always** initializes Swiper when the layout root is in slider mode OR when the viewport is below `gridMinWidth`. Grid CSS applies only at `≥ gridMinWidth` when `layoutMode === "grid"`.

### 4.2 Breakpoint

| Attribute | Default | UI | Description |
|-----------|---------|-----|-------------|
| `gridMinWidth` | `981` | **Hidden** (hardcoded) | Min viewport width (px) for desktop grid. Matches mock `@media (max-width: 980px)` + 1px. |

Implementation: `view.ts` uses `matchMedia(\`(min-width: ${gridMinWidth}px)\`)` to toggle grid vs carousel when `layoutMode === "grid"`.

### 4.3 Default

- **`layoutMode`:** `"slider"` (product default; mock shows grid for design reference only)
- **`gridColumns`:** `4` (when grid mode is active on desktop)
- **`slidesPerView`:** `4` on desktop slider; fractional peek optional (§7)

### 4.4 Editor preview

| Context | Behavior |
|---------|----------|
| **Editor canvas** | Static horizontal row or grid preview — **no Swiper in editor** (standard Nextora). Show cards in chosen `layoutMode` visually; carousel is front-end only. |
| **Front end** | `view.ts` idempotent init; `--loading` → `--ready` |

---

## 5. Architecture

```
nextora/box-content                    ← single dynamic block, no InnerBlocks
├── attributes.items[]                 ← card repeater (icon, title, text, link)
├── attributes.layoutMode              ← "slider" | "grid" (default "slider")
├── attributes.gridColumns             ← desktop grid columns (1–6)
├── attributes.gridMinWidth            ← px breakpoint (981 default, no inspector UI)
├── attributes.iconStyle               ← "default" | "stacked" | "framed" (Icons panel)
├── attributes.cardPadding             ← object (SpacingSizesControl; preset → CSS var)
├── attributes.* (card / hover colors) ← scoped PanelColorSettings (Block → Settings)
├── attributes.* (swiper)              ← carousel options (merged into Layout panel)
├── attributes.enableScrollAnimation   ← GSAP scroll reveal toggle
├── item-utils.ts                      ← buildStyleVars(), normalizeItems(), color → CSS in editor
├── spacing-utils.ts                   ← cardPadding preset resolution (`var:preset|spacing|*`)
├── editor-icon.tsx                    ← Lucide preview in canvas + modal
├── item-modal-form.tsx                ← per-item modal (content, link, icon overrides)
├── register-editor.php                ← Lucide catalog + palette for editor
├── render.php                         ← cards loop + data-swiper-opts (no section header)
├── view.ts                            ← Swiper init + responsive grid/slider switch + scroll reveal
└── style.css                          ← card hover, flex alignment, grid, loading states
```

### Why no inner blocks

- Cards are **structured data** (icon + title + short text + link) — not freeform layout.
- Repeater matches counters / team-section / scrolling-promotion.
- Icon rendering shares Lucide PHP helpers with [`nextora/advanced-icon`](../../blocks/advanced-icon/).
- Avoids InnerBlocks + dynamic parent `$content` complexity.

---

## 6. Card design & interaction

### 6.1 Anatomy (BEM)

| Element | Class | Notes |
|---------|-------|-------|
| List / track | `nextora-box-content__track` | Grid container or `swiper-wrapper` |
| Card | `nextora-box-content__card` | Border, padding, flex column; titles align across row; description `flex: 1` pushes link down |
| Icon wrap | `nextora-box-content__icon` | Modifiers `--style-default`, `--style-stacked`, `--style-framed` |
| Title | `nextora-box-content__title` | `<h3>` or configurable heading level per card (default `3`) |
| Description | `nextora-box-content__description` | `<p>` |
| Link | `nextora-box-content__link` | `<a href>` with optional `arrow-right` Lucide |

### 6.2 Hover (CSS — respect reduced motion)

| State | Card | Icon (stacked / framed) | Icon (default) | Description | Link |
|-------|------|-------------------------|----------------|-------------|------|
| Default | transparent / `cardBackgroundColor` | surface bg + stroke from scoped vars | stroke = `currentColor` | muted mix | `linkColor` → primary |
| `:hover` / `:focus-within` | `cardHoverBackgroundColor` → contrast | circle fill → base; stroke → contrast | stroke → base | `descriptionHoverColor` | `linkHoverColor` → **primary** on card hover |

**Implementation notes:**

- Lucide SVG always uses `stroke="currentColor"` in PHP; CSS sets `stroke: currentColor` so hover follows icon `color`.
- **Stacked** and **framed:** on card hover the circle gets **`iconHoverSurfaceBackgroundColor`** (fallback base) and dark stroke inside — matches foodbank `.inv:hover .ic`.
- **Framed:** border colour matches hover circle fill (base).
- **Default:** no circle fill; icon stroke flips to base on dark card.
- **Link on card hover:** uses `linkHoverColor` when set; empty fallback **`primary`** (not secondary) so link stays visible on dark card.
- `@media (prefers-reduced-motion: reduce)` disables transitions.
- **Keyboard:** `:focus-within` on card mirrors hover.
- Only `.nextora-box-content__link` is navigational (not whole-card link in v1).

### 6.3 Optional whole-card link

| Attribute | Default | Description |
|-----------|---------|-------------|
| `cardLinkBehavior` | `"text-link"` | `"text-link"` (mock) or `"whole-card"` |

When `"whole-card"`: wrap card content in `<a>` or use stretched-link pattern with single `aria-label` from title; hide redundant text link. Prefer **text-link** as default for a11y clarity.

---

## 7. Swiper / carousel settings

Align controls, labels, and help text with [`nextora/team-section`](../../blocks/team-section/) and [`docs/blocks.md`](../blocks.md) § Shared component styles (arrows, pagination dots).

Pass options as **`data-swiper-opts`** JSON on the carousel root ([`blocks/image-gallery-slide/render.php`](../../blocks/image-gallery-slide/render.php)).

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `slidesPerView` | `number` | `4` | RangeControl (1–6) | Desktop slider visible slides |
| `slidesPerViewTablet` | `number` | `2` | RangeControl (1–4, step 0.5) | Tablet (768–`gridMinWidth`−1) |
| `slidesPerViewMobile` | `number` | `1.15` | RangeControl (1–2, step 0.05) | Mobile — fractional peek encouraged |
| `spaceBetween` | `number` | `18` | RangeControl (0–60) | Gap between slides (px) |
| `speed` | `number` | `500` | RangeControl (100–2000) | Transition ms |
| `loop` | `boolean` | `false` | ToggleControl | Infinite loop |
| `autoplay` | `boolean` | `false` | ToggleControl | Autoplay |
| `autoplayDelay` | `number` | `4000` | RangeControl | Autoplay interval ms |
| `pauseOnHover` | `boolean` | `true` | ToggleControl | Pause on hover |
| `showPagination` | `boolean` | `true` | ToggleControl | Pagination dots (show on responsive + slider desktop) |
| `showArrows` | `boolean` | `false` | ToggleControl | Prev/next arrows |
| `grabCursor` | `boolean` | `true` | ToggleControl | Grab cursor |
| `freeMode` | `boolean` | `false` | ToggleControl | Free scroll |

**Reduced motion:** disable autoplay; carousel may still init for keyboard/a11y ([`blocks/team-section/view.ts`](../../blocks/team-section/view.ts)).

**Init guards:** `data-nextora-box-content-swiper-inited="1"`, `data-nextora-box-content-swiper-init-pending="1"`, root `nextora-box-content--loading` → `nextora-box-content--ready`.

---

## 8. Icon system (advanced-icon parity)

Per-item icons follow [`nextora/advanced-icon`](../../blocks/advanced-icon/) and [`docs/blocks/Theme Icon Block.md`](./Theme%20Icon%20Block.md). **Global defaults** in block attributes; **per-item overrides** optional.

### 8.1 Global icon defaults (block-level)

| Attribute | Type | Default | Maps to advanced-icon |
|-----------|------|---------|------------------------|
| `iconSource` | `string` | `"theme"` | `iconSource` (`theme` \| `upload`) |
| `iconSize` | `number` | `25` | `iconSize` (SVG width/height inside circle) |
| `strokeWidth` | `number` | `2` | `strokeWidth` |
| `iconCircleSize` | `number` | `54` | RangeControl | Surface diameter px |
| `iconCircleRadius` | `number` | `50` | RangeControl | Border radius % (stacked/framed only) |
| `iconStyle` | `string` | `"stacked"` | SelectControl | `default` \| `stacked` \| `framed` — **Icons** panel |
| `iconColor` | `string` | `""` | Colors panel | Lucide stroke; empty = CSS fallback per style |
| `iconSurfaceBackgroundColor` | `string` | `""` | `surfaceBackgroundColor` — **not** `backgroundColor` |
| `iconSurfaceBorderColor` | `string` | `""` | optional framed ring |
| `iconHoverColor` | `string` | `""` | stroke on card hover |
| `iconHoverSurfaceBackgroundColor` | `string` | `""` | circle fill on card hover |

**Colour storage:** preset **slug** or custom hex — `normalizeColorForStorage()` / `colorValueForPicker()` from [`blocks/advanced-icon/color-utils.ts`](../../blocks/advanced-icon/color-utils.ts). Editor `buildStyleVars()` resolves slugs via `storedColorToCss()`; PHP uses `nextora_box_content_resolve_color()`.

### 8.2 Per-item icon overrides (`items[]`)

| Field | Type | Description |
|-------|------|-------------|
| `iconSource` | `string` | Optional override: `theme` \| `upload` |
| `iconName` | `string` | Lucide kebab-case (e.g. `heart`, `hand-heart`) |
| `uploadedIconId` | `number` | Media attachment ID (upload mode) |
| `uploadedIconUrl` | `string` | Editor fallback URL |
| `iconColor` | `string` | Per-item stroke override |
| `iconSurfaceBackgroundColor` | `string` | Per-item circle background |

Empty per-item fields inherit global defaults.

### 8.3 Editor icon picker

- **Canvas:** `editor-icon.tsx` — Lucide preview via `assets/data/lucide-icons.json` (`register-editor.php`).
- **Per-item modal:** `item-modal-form.tsx` — icon source, Lucide picker modal, upload, per-item colour overrides (not icon style — style is block-level).
- Upload: `MediaUpload` — images only on front (`<img>`), never inline uploaded SVG.

### 8.4 Link arrow icon

- Trailing arrow: fixed Lucide `arrow-right` at `15px` (mock), not user-pickable in v1.
- `aria-hidden="true"` on decorative arrow; link accessible name = link label text.

---

## 9. block.json metadata

| Property | Value |
|----------|--------|
| `name` | `nextora/box-content` |
| `title` | Box Content |
| `category` | `design` |
| `icon` | `grid-view` (or `columns`) |
| `description` | Icon cards in a slider or grid — responsive viewports always use a carousel. |
| `keywords` | `["box", "cards", "grid", "slider", "carousel", "icon", "features", "nextora"]` |
| `textdomain` | `nextora` |

### 9.1 supports

```json
{
  "supports": {
    "html": false,
    "align": ["wide", "full"],
    "anchor": true,
    "color": {
      "background": true,
      "text": true,
      "link": true
    },
    "spacing": {
      "padding": true,
      "margin": true,
      "blockGap": true
    },
    "border": {
      "color": false,
      "radius": false,
      "style": false,
      "width": false
    },
    "typography": {
      "fontSize": true,
      "lineHeight": true
    }
  }
}
```

**Wrapper:** block root has **no** section border/padding (`style.css` + disabled `supports.border`). Card border/radius/padding are scoped attributes. Card colours use **`PanelColorSettings`** in Block → Settings (not duplicate block chrome).

---

## 10. Attributes schema

### 10.1 Section header (legacy — not rendered in v1)

Attributes remain in `block.json` for backward compatibility. **Not** shown in inspector; **not** output in `render.php`.

| Attribute | Type | Default | Notes |
|-----------|------|---------|-------|
| `showEyebrow` | `boolean` | `false` | — |
| `eyebrowText` | `string` | `"Get involved"` | — |
| `showHeading` | `boolean` | `false` | — |
| `headingText` | `string` | `"Four ways to fight hunger."` | — |
| `headingLevel` | `number` | `2` | — |
| `showDescription` | `boolean` | `false` | — |
| `descriptionText` | `string` | `""` | — |
| `headerAlign` | `string` | `"center"` | — |
| `contentMaxWidth` | `string` | `""` | Inner shell uses `wideSize` when empty |

### 10.2 Layout (single **Layout** panel)

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `layoutMode` | `string` | `"slider"` | SelectControl | **Desktop layout** — `slider` \| `grid` |
| `gridColumns` | `number` | `4` | RangeControl (1–6) | Shown when `layoutMode === "grid"` |
| `spaceBetween` | `number` | `18` | RangeControl (0–60) | **Gap between cards (px)** — grid + carousel |
| `cardMinHeight` | `number` | `240` | RangeControl (160–400) | Card min-height px |
| `cardPadding` | `object` | `{}` | `SpacingSizesControl` | Vertical + horizontal; supports theme spacing presets (`var:preset\|spacing\|*`) |
| `cardBorderWidth` | `number` | `2` | RangeControl (0–4) | Card border width px |
| `cardBorderRadius` | `number` | `8` | RangeControl (0–24) | Card corner radius px |
| `gridMinWidth` | `number` | `981` | *(no UI)* | Hardcoded breakpoint for grid → carousel |

**Carousel** (subsection — label **Carousel** or **Carousel (tablet & mobile)** when grid mode):

| Attribute | Default | Control |
|-----------|---------|---------|
| `slidesPerView` | `4` | Desktop only when `layoutMode === "slider"` |
| `slidesPerViewTablet` | `2` | Always |
| `slidesPerViewMobile` | `1.15` | Always |
| `speed` | `500` | Transition ms |
| `loop`, `grabCursor`, `freeMode` | toggles | — |

**Autoplay** subsection: `autoplay`, `autoplayDelay`, `pauseOnHover`.

**Navigation** subsection: `showPagination`, `showArrows`.

Legacy: `columnGap` string still read in PHP if present; UI removed — use `spaceBetween`.

### 10.3 Card content repeater — `items[]`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | yes | Stable React key (`crypto.randomUUID()` on add) |
| `title` | `string` | yes | Card heading |
| `description` | `string` | yes | Short body copy |
| `showLink` | `boolean` | no | Default `true` |
| `linkLabel` | `string` | no | e.g. `"Give now"` |
| `linkUrl` | `string` | no | Destination URL |
| `linkTarget` | `string` | no | `_self` \| `_blank` |
| `iconName` | `string` | no | Lucide name; inherits global default |
| `iconSource` | `string` | no | Per-item icon source override |
| `uploadedIconId` | `number` | no | Upload mode attachment |
| `uploadedIconUrl` | `string` | no | Editor preview |
| `iconColor` | `string` | no | Per-item stroke |
| `iconSurfaceBackgroundColor` | `string` | no | Per-item circle fill |

### 10.4 Default `items[]` (foodbank demo)

```json
[
  {
    "id": "1",
    "title": "Donate",
    "description": "Just $1 puts four meals on a table. Give once or monthly.",
    "showLink": true,
    "linkLabel": "Give now",
    "linkUrl": "",
    "linkTarget": "_self",
    "iconName": "heart"
  },
  {
    "id": "2",
    "title": "Volunteer",
    "description": "Sort, pack and deliver at a warehouse near you. No experience needed.",
    "showLink": true,
    "linkLabel": "Join in",
    "linkUrl": "",
    "linkTarget": "_self",
    "iconName": "hand-heart"
  },
  {
    "id": "3",
    "title": "Give food",
    "description": "Run a food drive at work or school, or drop off at a collection point.",
    "showLink": true,
    "linkLabel": "Start a drive",
    "linkUrl": "",
    "linkTarget": "_self",
    "iconName": "apple"
  },
  {
    "id": "4",
    "title": "Fundraise",
    "description": "Take on a challenge — every dollar multiplies into meals.",
    "showLink": true,
    "linkLabel": "Fundraise",
    "linkUrl": "",
    "linkTarget": "_self",
    "iconName": "megaphone"
  }
]
```

### 10.5 Colors (scoped — `PanelColorSettings` in **Block → Settings**)

| Attribute | Affects | Empty fallback |
|-----------|---------|----------------|
| `cardBorderColor` | Card border | `contrast` preset |
| `cardBackgroundColor` | Card default background | transparent |
| `cardHoverBackgroundColor` | Card hover/focus-within bg | `contrast` preset |
| `cardTitleColor` | Card title | `currentColor` (card uses contrast) |
| `cardDescriptionColor` | Card body | muted mix |
| `descriptionHoverColor` | Card body on hover | base at 78% mix |
| `linkColor` | Text link | `primary` preset |
| `linkHoverColor` | Link when card hovered / link `:hover` | `primary` on card hover; `secondary` on link-only hover |
| `iconColor` | Icon stroke | per `iconStyle` CSS fallback |
| `iconSurfaceBackgroundColor` | Circle fill | `primary` (stacked) — shown when stacked/framed |
| `iconSurfaceBorderColor` | Framed ring | `contrast` — shown when framed |
| `iconHoverColor` | Icon stroke on card hover | contrast (stacked/framed) / base (default) |
| `iconHoverSurfaceBackgroundColor` | Circle fill on card hover | `base` — shown when stacked/framed |
| `paginationColor` | Inactive dots | theme muted |
| `paginationActiveColor` | Active dot | `primary` preset |
| `arrowColor` | Nav arrows | match team-section |

**Editor:** `buildStyleVars()` + `storedColorToCss()` output resolved hex/`var(--wp--preset--color--*)` on block wrapper. **Front end:** `nextora_box_content_resolve_color()` in `render.php`.

Legacy colour attrs (`eyebrowColor`, `headingColor`, `descriptionColor`) remain in schema but have no inspector UI.

### 10.6 Animation

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `enableScrollAnimation` | `boolean` | `true` | ToggleControl | **Animate on scroll** — standard help from [`docs/blocks.md`](../blocks.md) |

PHP: `data-nextora-scroll-reveal="1"` on section header and/or card track when enabled. GSAP + ScrollTrigger in `view.ts`; `once: true`; skip when `prefers-reduced-motion: reduce`.

---

## 11. Frontend HTML structure

```html
<section
  class="wp-block-nextora-box-content nextora-box-content nextora-box-content--layout-slider nextora-box-content--loading alignwide"
  style="--nextora-box-content-gap: 18px; --nextora-box-content-card-min-height: 240px; …"
  data-nextora-scroll-reveal="1"
>
  <div class="nextora-box-content__inner">
    <!-- No section header in v1 -->

    <div
      class="nextora-box-content__carousel-root"
      data-swiper-opts='{"slidesPerView":4,"spaceBetween":18,…}'
      data-layout-mode="slider"
      data-grid-min-width="981"
    >
      <div class="nextora-box-content__swiper swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <article class="nextora-box-content__card">
              <div class="nextora-box-content__icon nextora-box-content__icon--style-stacked" aria-hidden="true">
                <!-- inline Lucide SVG, stroke currentColor -->
              </div>
              <h3 class="nextora-box-content__title">Donate</h3>
              <p class="nextora-box-content__description">…</p>
              <a class="nextora-box-content__link" href="…">…</a>
            </article>
          </div>
        </div>
      </div>
      <div class="swiper-pagination nextora-box-content__pagination"></div>
      <button type="button" class="nextora-box-content__arrow nextora-box-content__arrow--prev" aria-label="…"></button>
      <button type="button" class="nextora-box-content__arrow nextora-box-content__arrow--next" aria-label="…"></button>
    </div>
  </div>
</section>
```

**PHP requirements:**

- `declare(strict_types=1);`
- Escape all output; `wp_kses_post()` for RichText fields
- `get_block_wrapper_attributes()` on section root
- `aria-label` on icon-only buttons via `esc_attr__( 'Previous slide', 'nextora' )` / `Next slide`
- Enqueue `view.js` only when block present (block.json `viewScript`)

---

## 12. Class and CSS variable naming

| Mock / generic | Nextora |
|----------------|---------|
| `involve-grid` | `nextora-box-content__track` / `__carousel` |
| `inv` | `nextora-box-content__card` |
| `ic` | `nextora-box-content__icon` |
| `go` | `nextora-box-content__link` |
| `sec-head` | `nextora-box-content__header` |
| `--nextora-box-content-*` | All custom properties prefixed consistently |

Modifiers:

- `nextora-box-content--layout-slider`
- `nextora-box-content--layout-grid`
- `nextora-box-content--cols-{n}` (grid desktop)
- `nextora-box-content--loading` / `--ready`

---

## 13. Inspector panels

Use standard panel titles per [`docs/blocks.md`](../blocks.md):

| Panel | Contents |
|-------|----------|
| **Items** | Reorder, add/remove; **Edit** opens modal (`item-modal-form.tsx`) |
| **Layout** | Desktop layout, grid columns (grid only), **Cards** (gap, min height, padding, border, radius), **Carousel** (+ tablet/mobile when grid), **Autoplay**, **Navigation** |
| **Icons** | Theme style (`default` / `stacked` / `framed`), circle radius (stacked/framed), icon size, circle size, stroke width |
| **Colors** | Scoped `PanelColorSettings` — all card/link/icon/pagination colours (§10.5) |
| **Animation** | **Animate on scroll** toggle |
| **Advanced** | WordPress block supports (spacing, typography, anchor) |

No separate Content / Carousel / Pagination panels. Section header panel removed.

---

## 14. Editor behavior

| Topic | Rule |
|-------|------|
| Swiper in editor | **No** — static flex row (slider) or CSS grid preview |
| Item editing | **Edit item** on canvas → large modal; Done in modal header |
| Card preview | Horizontal scroll (slider) or grid per `layoutMode`; hover disabled in canvas |
| Colours | `PanelColorSettings` under **Block → Settings** tab; live preview via CSS vars on wrapper |
| Icon style | Block-level only (Icons panel); not in item modal |
| `ServerSideRender` | Not used — live React canvas |
| Help text on `layoutMode` | Slider: *All screen sizes use a carousel.* Grid: *Desktop shows a grid; tablet and mobile use a carousel.* |

---

## 15. Accessibility

- **Links:** real `<a href>` for card CTAs; `target="_blank"` → `rel="noopener noreferrer"`.
- **Icons:** decorative card icons `aria-hidden="true"`; meaningful icons need `ariaLabel` (advanced-icon pattern) when not accompanied by visible title.
- **Carousel:** Swiper `A11y` + `Keyboard` modules; visible focus on arrows and pagination ([`nextora-a11y-blocks.mdc`](../../.cursor/rules/nextora-a11y-blocks.mdc)).
- **Motion:** honour `prefers-reduced-motion` in CSS and TS.
- **Scroll reveal:** final content visible without JS (no permanent `opacity: 0`).
- **i18n:** all `aria-label` strings use text domain **`nextora`**.

---

## 16. File structure

```text
blocks/box-content/
├── block.json
├── index.tsx
├── edit.tsx
├── types.ts
├── item-utils.ts           # normalizeItems, buildStyleVars (editor CSS vars)
├── spacing-utils.ts        # cardPadding preset → CSS
├── editor-icon.tsx         # canvas + modal icon preview
├── item-modal-form.tsx     # per-item modal form
├── icon-catalog.ts         # Lucide JSON loader for editor
├── register-editor.php       # window.nextoraIconBlock localization
├── render.php
├── style.css
├── editor.css
├── view.ts
└── (generated) index.js, index.asset.php, view.js, view.css
```

Reuses [`blocks/advanced-icon/color-utils.ts`](../../blocks/advanced-icon/color-utils.ts) and [`blocks/advanced-icon/lucide.php`](../../blocks/advanced-icon/lucide.php).

---

## 17. Closest reference blocks

| Need | Block / doc |
|------|----------------|
| Items repeater + PHP render | [`blocks/counters/`](../../blocks/counters/), [`blocks/scrolling-promotion/`](../../blocks/scrolling-promotion/) |
| Swiper init, `data-swiper-opts`, loading | [`blocks/image-gallery-slide/`](../../blocks/image-gallery-slide/), [`blocks/team-section/view.ts`](../../blocks/team-section/view.ts) |
| Section header + eyebrow | [`blocks/team-section/`](../../blocks/team-section/), [`blocks/arc-gallery-section/`](../../blocks/arc-gallery-section/) |
| Lucide icons + scoped colours | [`blocks/advanced-icon/`](../../blocks/advanced-icon/), [`docs/blocks/Theme Icon Block.md`](./Theme%20Icon%20Block.md) |
| Text link + arrow styling | [`blocks/team-section/`](../../blocks/team-section/) CTA, [`docs/blocks.md`](../blocks.md) § Shared component styles |
| Scroll reveal toggle | [`blocks/image-gallery-grid/view.ts`](../../blocks/image-gallery-grid/view.ts) |
| Pagination / arrows | [`blocks/testimonial-carousel/`](../../blocks/testimonial-carousel/) |

---

## 18. Extensibility hooks (plan)

- `nextora_box_content_items`
- `nextora_box_content_wrapper_attributes`
- `nextora_box_content_swiper_options` — filter JSON for `data-swiper-opts`
- `nextora_box_content_card_classes`

---

## 19. Build and quality checklist

- [x] `block.json`: `textdomain` `nextora`, `cardBorderRadius` default `8`, `enableScrollAnimation`, `supports.border` disabled on wrapper
- [x] `render.php`: escaped output, `get_block_wrapper_attributes()`, scroll + swiper data attributes; no section header output
- [x] `layoutMode` default `slider`; responsive **always** slider below `gridMinWidth` when grid mode
- [x] Icons: Lucide via PHP (`currentColor` stroke); upload via `<img>`; `iconStyle` modifiers; scoped colour attrs
- [x] `view.ts`: idempotent init, loading/ready classes, reduced motion, matchMedia grid/slider switch
- [x] Editor: `SpacingSizesControl` for padding; Colors panel in Block → Settings; `buildStyleVars` resolves colour slugs
- [ ] Add row to **Reference blocks** table in [`docs/blocks.md`](../blocks.md) when published
- [x] Verify Site Editor: layout toggle, item modal, icon style, colours apply to canvas

---

## 20. Acceptance criteria

1. Block registered as **`nextora/box-content`** with **`textdomain` `nextora`**.
2. Default layout is **slider**; switching to **grid** shows CSS grid on desktop only.
3. Below **`gridMinWidth`**, layout is **always slider** whether `layoutMode` is `grid` or `slider`.
4. Each card renders icon (Lucide or upload), title, description, and optional link with arrow.
5. Icon settings align with **advanced-icon** (source, size, stroke, scoped surface colours, slug storage).
6. Card hover inverts card + icon circle (all three icon styles) + link accent; `prefers-reduced-motion` supported.
7. Carousel arrows and pagination match team-section styling.
8. **`enableScrollAnimation`** toggle works; reduced motion disables scroll reveal and autoplay.
9. Multiple instances on one page init independently.
10. Empty colour attributes fall back to **`theme.json`** presets via CSS, not mock hex.
11. **`cardBorderRadius`** defaults to **8px**; **`cardPadding`** accepts theme spacing presets.
12. Card titles align across a row; shorter descriptions add space above the link (flex column).

---

## 21. What not to add (v1)

- InnerBlocks / child block per card
- CDN Swiper or Lucide runtime scripts
- Dashicons on the front end
- Whole-site icon sprite
- Autogenerated content from `WP_Query` (static repeater only)
- Hand-edited `index.js` / `view.js` artifacts
