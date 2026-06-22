# Block: Team Section

**Version:** 2.0  
**Status:** Implemented as **`nextora/team-section`** in [`blocks/team-section/`](../../blocks/team-section/).  
**For:** AI Agent Development  

This specification targets the **Nextora theme** block system. Follow [`docs/blocks.md`](../blocks.md), skills **nextora-add-theme-block** and **nextora-theme-styling-and-tokens**, and rules in [`.cursor/rules/nextora-blocks.mdc`](../../.cursor/rules/nextora-blocks.mdc) / [`.cursor/rules/nextora-a11y-blocks.mdc`](../../.cursor/rules/nextora-a11y-blocks.mdc) when implementing. Do **not** treat this block as a standalone plugin.

---

## 1. Overview

The **Team Section** block (`nextora/team-section`) renders **team member cards** — each card has a photo, name, role, tags, bio, and optional social links. **v2** adds **layout modes**: desktop can choose **Carousel** or **Grid**; responsive viewports always use carousel.

**Design direction:**

- **Cards:** Photo placeholder, member info (name/role), tags, bio (line clamp), optional social links
- **Photo:** Circular or with configurable border radius; placeholder from theme when no photo
- **Layout:** Editor chooses **Carousel** (default) or **Grid** for desktop; **responsive viewports always use Swiper carousel**
- **Hover:** Card hover effects on background and text (optional via CSS)

**Architecture:** Single dynamic block with a **`members[]` repeater** (same pattern as [`nextora/counters`](../../blocks/counters/), [`nextora/box-content`](../../blocks/box-content/)). No InnerBlocks. Markup from **`render.php`**; carousel from bundled **`view.ts`** (Swiper 11).

---

## 2. Theme context

| Item | Value |
|------|--------|
| **Block name** | `nextora/team-section` |
| **Title** | Our Team |
| **Category** | `design` (content band) |
| **Text domain** | `nextora` |
| **PHP prefix** | `nextora_` |
| **Registration** | Auto via [`blocks/blocks.php`](../../blocks/blocks.php) |
| **Source of truth** | `block.json`, `index.tsx`, `edit.tsx`, `types.ts`, `member-utils.ts`, `member-edit-form.tsx`, `render.php`, `style.css`, `editor.css`, `view.ts` |
| **Build** | `npm run build:blocks` (or `npm run watch`) — do **not** hand-edit `index.js` / `index.asset.php` / `view.js` |

Read first: [`AGENTS.md`](../../AGENTS.md), [`docs/blocks.md`](../blocks.md).

---

## 3. Layout modes (grid vs carousel)

### 3.1 Rules

| Viewport | `layoutMode: "carousel"` (default) | `layoutMode: "grid"` |
|----------|-----------------------------------|----------------------|
| **Desktop** (≥ `gridMinWidth`) | Swiper carousel | CSS grid (`gridColumns` columns) |
| **Responsive** (< `gridMinWidth`) | Swiper carousel | **Swiper carousel** (forced) |

**Critical:** Responsive **always** initializes Swiper when the layout root is in carousel mode OR when the viewport is below `gridMinWidth`. Grid CSS applies only at `≥ gridMinWidth` when `layoutMode === "grid"`.

### 3.2 Breakpoint

| Attribute | Default | UI | Description |
|-----------|---------|-----|-------------|
| `gridMinWidth` | `981` | **Hidden** (hardcoded) | Min viewport width (px) for desktop grid |

Implementation: `view.ts` uses `matchMedia(\`(min-width: ${gridMinWidth}px)\`)` to toggle grid vs carousel when `layoutMode === "grid"`.

### 3.3 Default

- **`layoutMode`:** `"carousel"` (product default)
- **`gridColumns`:** `4` (when grid mode is active on desktop)
- **`slidesPerView`:** `4` on desktop carousel

---

## 4. Architecture

```
nextora/team-section                   ← single dynamic block, no InnerBlocks
├── attributes.members[]               ← member repeater (photo, name, role, tags, bio, social)
├── attributes.layoutMode              ← "carousel" | "grid" (default "carousel")
├── attributes.gridColumns             ← desktop grid columns (1–6)
├── attributes.gridMinWidth            ← px breakpoint (981 default, no inspector UI)
├── attributes.* (swiper)              ← carousel options (Layout panel)
├── attributes.enableScrollAnimation   ← GSAP scroll reveal toggle
├── member-utils.ts                    ← buildSectionStyleVars(), normalizeMembers(), resolvePhotoUrl()
├── member-edit-form.tsx               ← per-member modal (all member fields)
├── render.php                         ← members loop + data-swiper-opts + data-layout-mode
├── view.ts                            ← Swiper init + responsive grid/carousel switch + scroll reveal
└── style.css                          ← card styles, grid layout, loading states
```

---

## 5. Card design

### 5.1 Anatomy (BEM)

| Element | Class | Notes |
|---------|-------|-------|
| List / track | `nextora-team-section__members-row` (editor) / `swiper-wrapper` (front) | Grid container or carousel wrapper |
| Card | `nextora-team-section__card` | Photo, name, role, tags, bio, social links |
| Photo | `nextora-team-section__card-photo` | Circular with configurable radius |
| Name | `nextora-team-section__card-name` | `<h3>` default |
| Role | `nextora-team-section__card-role` | `<p>` |
| Tags | `nextora-team-section__card-tags` / `__card-tag` | Optional skill/category tags |
| Bio | `nextora-team-section__card-bio` | Text with line clamp (1–5 lines) |
| Social links | `nextora-team-section__card-social` | Optional social media links |

---

## 6. Inspector panels

| Panel | Contents |
|-------|----------|
| **Members** | Reorder, add/remove; **Edit** opens modal (`member-edit-form.tsx`) |
| **Layout** | Desktop layout (carousel/grid), grid columns (grid only), **Carousel** settings (slides per view, gap, speed, loop, grab cursor, free mode) |
| **Autoplay** | Enable autoplay, delay, pause on hover |
| **Pagination** | Show pagination, type (bullets/fraction/progressbar) |
| **Navigation** | Show arrows |
| **Colors** | Background, pagination, card colors, tag colors |
| **Animation** | **Animate on scroll** toggle |
| **Advanced** | WordPress block supports (spacing, anchor) |

---

## 7. Attributes schema

### 7.1 Layout & display

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `layoutMode` | `string` | `"carousel"` | SelectControl | **Desktop layout** — `carousel` \| `grid` |
| `gridColumns` | `number` | `4` | RangeControl (1–6) | Shown when `layoutMode === "grid"` |
| `gridMinWidth` | `number` | `981` | *(no UI)* | Hardcoded breakpoint for grid → carousel |

### 7.2 Member repeater — `members[]`

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | `string` | yes | Stable React key (`crypto.randomUUID()` on add) |
| `photoId` | `number` | no | Media attachment ID |
| `photoUrl` | `string` | no | Editor fallback URL |
| `photoAlt` | `string` | no | Alt text |
| `name` | `string` | yes | Member name |
| `role` | `string` | no | Job title/role |
| `tags` | `string[]` | no | Skill/category tags |
| `bio` | `string` | no | Short bio |
| `bioLineClamp` | `number` | no | Bio line clamp (1–5), default 3 |
| `showSocialLinks` | `boolean` | no | Toggle social links display |
| `socialLinks` | `array` | no | Social media links (platform, url) |
| `cardBorderRadius` | `number` | no | Per-card photo radius override |

### 7.3 Carousel settings

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `slidesPerView` | `number` | `4` | RangeControl (1–6, step 0.5) | Desktop carousel only when `layoutMode === "carousel"` |
| `slidesPerViewTablet` | `number` | `2.5` | RangeControl (1–4, step 0.5) | Tablet (768–`gridMinWidth`−1) |
| `slidesPerViewMobile` | `number` | `1.2` | RangeControl (1–2, step 0.1) | Mobile — fractional peek encouraged |
| `spaceBetween` | `number` | `24` | RangeControl (0–60) | Gap between slides/cards (px) |
| `speed` | `number` | `500` | RangeControl (100–2000) | Transition ms |
| `loop` | `boolean` | `false` | ToggleControl | Infinite loop |
| `autoplay` | `boolean` | `false` | ToggleControl | Autoplay |
| `autoplayDelay` | `number` | `4000` | RangeControl | Autoplay interval ms |
| `pauseOnHover` | `boolean` | `true` | ToggleControl | Pause on hover |
| `showPagination` | `boolean` | `true` | ToggleControl | Pagination dots |
| `paginationType` | `string` | `"bullets"` | SelectControl | `bullets` \| `fraction` \| `progressbar` |
| `showArrows` | `boolean` | `false` | ToggleControl | Prev/next arrows |
| `grabCursor` | `boolean` | `true` | ToggleControl | Grab cursor |
| `freeMode` | `boolean` | `false` | ToggleControl | Free scroll |

### 7.4 Colors

| Attribute | Affects | Empty fallback |
|-----------|---------|----------------|
| `backgroundColor` | Section background | transparent |
| `paginationColor` | Inactive dots | theme muted |
| `paginationActiveColor` | Active dot | `primary` preset |
| `cardBackgroundColor` | Card background | transparent |
| `tagBackgroundColor` | Tag background | theme preset |
| `tagTextColor` | Tag text | theme preset |

### 7.5 Animation

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `enableScrollAnimation` | `boolean` | `true` | ToggleControl | **Animate on scroll** — standard help text |

---

## 8. Frontend HTML structure

```html
<div
  class="wp-block-nextora-team-section nextora-team-section nextora-team-section--layout-carousel nextora-team-section--loading"
  style="--nextora-team-grid-columns: 4; --nextora-team-card-radius: 16px; …"
  data-nextora-scroll-reveal="1"
>
  <div class="nextora-team-section__inner">
    <div
      class="nextora-team-section__carousel-root"
      data-swiper-opts='{"slidesPerView":4,"spaceBetween":24,…}'
      data-layout-mode="carousel"
      data-grid-min-width="981"
    >
      <div class="nextora-team-section__swiper swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <article class="nextora-team-section__card">
              <div class="nextora-team-section__card-photo">
                <img class="nextora-team-section__card-img" src="…" alt="…" />
              </div>
              <div class="nextora-team-section__card-body">
                <h3 class="nextora-team-section__card-name">Alex Morgan</h3>
                <p class="nextora-team-section__card-role">Creative Director</p>
                <div class="nextora-team-section__card-tags">
                  <span class="nextora-team-section__card-tag">Design</span>
                </div>
                <p class="nextora-team-section__card-bio">Leads brand…</p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="swiper-pagination nextora-team-section__pagination"></div>
      <button type="button" class="nextora-team-section__arrow nextora-team-section__arrow--prev" aria-label="…"></button>
      <button type="button" class="nextora-team-section__arrow nextora-team-section__arrow--next" aria-label="…"></button>
    </div>
  </div>
</div>
```

**PHP requirements:**

- `declare(strict_types=1);`
- Escape all output; `wp_kses_post()` for RichText fields
- `get_block_wrapper_attributes()` on section root
- `aria-label` on icon-only buttons via `esc_attr__()` with text domain `nextora`
- Enqueue `view.js` only when block present (block.json `viewScript`)

---

## 9. Editor behavior

| Topic | Rule |
|-------|------|
| Swiper in editor | **No** — static flex row (carousel) or CSS grid preview |
| Member editing | **Edit member** on canvas → large modal; Done in modal header |
| Card preview | Horizontal scroll (carousel) or grid per `layoutMode` |
| `layoutMode` help | Carousel: *All screen sizes use a carousel.* Grid: *Desktop shows a grid; tablet and mobile use a carousel.* |

---

## 10. Accessibility

- **Photos:** Provide alt text via media library or custom `photoAlt` field
- **Carousel:** Swiper `A11y` + `Keyboard` modules; visible focus on arrows and pagination
- **Motion:** honour `prefers-reduced-motion` in CSS and TS
- **Scroll reveal:** final content visible without JS (no permanent `opacity: 0`)
- **i18n:** all `aria-label` strings use text domain **`nextora`**

---

## 11. Changes in v2.0

### What's new

- **Layout modes:** Desktop can choose Carousel (default) or Grid
- **Grid columns:** Configurable 1–6 columns when grid mode active
- **Responsive grid → carousel:** Automatic switch below `gridMinWidth` (981px)
- **No header section:** Removed eyebrow, heading, description, button (v1 had section header)

### Removed in v2.0

- Section header (eyebrow, heading, description, headerLayout)
- CTA button (showButton, buttonText, buttonUrl, buttonStyle, etc.)
- Header-related colors (eyebrowColor, headingColor, descriptionColor, buttonColors)
- Content max width (now uses block padding/margin)

### Migration notes

Existing blocks with header data will continue to work (attributes remain in schema for backward compatibility) but header is not rendered in `render.php` v2.

---

## 12. Closest reference blocks

| Need | Block / doc |
|------|----------------|
| Layout grid/carousel switch | [`blocks/box-content/`](../../blocks/box-content/), [`docs/blocks/Box Content.md`](./Box%20Content.md) |
| Members repeater + PHP render | [`blocks/counters/`](../../blocks/counters/), [`blocks/scrolling-promotion/`](../../blocks/scrolling-promotion/) |
| Swiper init, `data-swiper-opts`, loading | [`blocks/image-gallery-slide/`](../../blocks/image-gallery-slide/), [`blocks/box-content/view.ts`](../../blocks/box-content/view.ts) |
| Scroll reveal toggle | [`blocks/image-gallery-grid/view.ts`](../../blocks/image-gallery-grid/view.ts) |
| Pagination / arrows | [`blocks/testimonial-carousel/`](../../blocks/testimonial-carousel/) |

---

## 13. Acceptance criteria

1. Block registered as **`nextora/team-section`** with **`textdomain` `nextora`**.
2. Default layout is **carousel**; switching to **grid** shows CSS grid on desktop only.
3. Below **`gridMinWidth`**, layout is **always carousel** whether `layoutMode` is `grid` or `carousel`.
4. Each card renders photo, name, role, tags (optional), bio (optional), and social links (optional).
5. Photo uses media library attachment or URL fallback; placeholder when empty.
6. **`enableScrollAnimation`** toggle works; reduced motion disables scroll reveal and autoplay.
7. Multiple instances on one page init independently.
8. Empty colour attributes fall back to **`theme.json`** presets via CSS.
9. **`cardBorderRadius`** configurable per card and globally.
10. Bio text respects `bioLineClamp` (1–5 lines).

---

## 14. What not to add (v2)

- InnerBlocks / child block per member
- CDN Swiper or runtime scripts
- Whole-site member sprite
- Autogenerated content from `WP_Query` (static repeater only)
- Hand-edited `index.js` / `view.js` artifacts
- Section header (removed in v2)
