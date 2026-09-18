# Scrolling Image Strip Block — Nextora spec

**Status:** Spec  
**Version:** 1.0  
**For:** AI Agent Development  

---

## 1. Overview

A Gutenberg block that renders a **continuous horizontal scrolling image strip** — a row of images that scroll seamlessly in a loop, with alternating tilt angles and a gradient fade mask. No text, no buttons, no inner content — pure images only.

**Core technique:** CSS-only marquee (content duplication + `translateX(-50%)` keyframe), inherited from `nextora/scrolling-promotion`. Images tilt alternately at configurable angles (like the `AnimatedMarqueeHero` reference). A gradient mask fades edges so images appear to emerge from and dissolve into the background. Optional overlay with opacity for dimming.

**Common use cases:** Hero section background, brand showcase, portfolio strip, editorial footer, gallery teaser.

| Topic | Requirement |
|-------|-------------|
| Block name | **`nextora/scrolling-image-strip`** |
| Text domain | **`nextora`** |
| Category | **`media`** |
| Render | **Dynamic `render.php`** — no `save.tsx` (`save: () => null`) |
| Editor entry | **`index.tsx`** + **`edit.tsx`** → esbuild → `index.js` |
| Build | `npm run build:blocks` |
| CSS technique | **CSS-only marquee** (duplication + keyframes) from `scrolling-promotion` |
| Tilt technique | **CSS `transform: rotate()`** per-item inline style, alternating even/odd indices |
| Fade mask | **CSS `mask-image: linear-gradient(...)`** on track |
| Overlay | Scoped color attrs + opacity (pattern from `advanced-container`) |
| JS init | Own marquee-fill logic (no re-use of `marquee-loop.ts` — different selectors) + GSAP ScrollTrigger scroll reveal |
| Color palette | `register-editor.php` passes palette entries to editor for hex→slug normalization |

**Authoritative references:**
- [`blocks/scrolling-promotion/`](../../blocks/scrolling-promotion/) — marquee engine (render.php, style.css, view.ts, duplication + ResizeObserver pattern)
- [`blocks/advanced-container/`](../../blocks/advanced-container/) — overlay styles (solid, fade-right, cinematic, diagonal), color resolution PHP, register-editor.php, view.ts scroll reveal
- [`blocks/advanced-icon/`](../../blocks/advanced-icon/) — custom color pattern (slug storage, scoped attrs, color-utils.ts)
- [`docs/blocks.md`](../blocks.md) — tokens, JS init loading pattern, custom color checklist

---

## 2. Block identity (`block.json`)

| Property | Value |
|----------|--------|
| `name` | `nextora/scrolling-image-strip` |
| `title` | `Scrolling Image Strip` |
| `category` | `media` |
| `icon` | `images-alt2` (Dashicon) |
| `description` | A continuous horizontal scrolling image strip with alternating tilt, fade mask, and overlay. |
| `keywords` | `["image", "marquee", "scrolling", "gallery", "strip", "nextora"]` |
| `textdomain` | `nextora` |
| `apiVersion` | `3` |
| `supports.html` | `false` |
| `supports.align` | `["wide", "full"]` |
| `supports.anchor` | `true` |
| `supports.color` | `{ "background": false, "text": false, "link": false }` |
| `supports.spacing` | `{ "margin": true, "padding": false }` |
| `supports.multiple` | `true` |
| `editorScript` | `file:./index.js` |
| `viewScript` | `file:./view.js` |
| `style` | `file:./style.css` |
| `editorStyle` | `file:./editor.css` |
| `render` | `file:./render.php` |

---

## 3. Attributes schema

### 3.1 Image attributes

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `imageIds` | `array` | `[]` | `MediaUpload` (multiple) | WordPress attachment IDs |
| `imageUrls` | `array` | `[]` | — | Fallback URLs (resolved in render.php from IDs; not persisted separately) |
| `imageHeight` | `number` | `200` | `RangeControl` (80–600) | Image height in px |
| `imageHeightUnit` | `string` | `"px"` | `SelectControl` (px/rem/vh) | Unit for image height |
| `imageAspectRatio` | `string` | `"3/4"` | `SelectControl` | CSS aspect-ratio: "3/4", "1/1", "4/5", "16/9", "9/16", "auto" |
| `imageFit` | `string` | `"cover"` | `SelectControl` (cover/contain) | `object-fit` value |
| `imageBorderRadius` | `number` | `16` | `RangeControl` (0–48) | Border radius in px |
| `imageGap` | `number` | `16` | `RangeControl` (0–64) | Gap between images in px |

### 3.2 Tilt attributes

Tilt follows `AnimatedMarqueeHero` reference: even-index images get one angle, odd-index get the other.

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `enableTilt` | `boolean` | `true` | `ToggleControl` | Enable alternating tilt on images |
| `tiltEvenAngle` | `number` | `-2` | `RangeControl` (-15–15) | Tilt angle for even-index images (°) — index 0, 2, 4… |
| `tiltOddAngle` | `number` | `5` | `RangeControl` (-15–15) | Tilt angle for odd-index images (°) — index 1, 3, 5… |

### 3.3 Animation attributes

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `direction` | `string` | `"left"` | `SelectControl` (left/right) | Scroll direction |
| `speed` | `number` | `40` | `RangeControl` (10–120) | Duration in seconds for one full cycle |
| `pauseOnHover` | `boolean` | `true` | `ToggleControl` | Pause animation on mouse hover |

### 3.4 Fade mask attributes

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `enableFadeMask` | `boolean` | `true` | `ToggleControl` | Fade images at edges via mask-image |
| `fadeMaskDirection` | `string` | `"horizontal"` | `SelectControl` | "horizontal", "vertical", "both" |

### 3.5 Overlay attributes (scoped — never `backgroundColor`/`textColor`)

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `overlayColor` | `string` | `""` | `PanelColorSettings` | Preset slug or hex; empty = transparent |
| `overlayOpacity` | `number` | `0` | `RangeControl` (0–1, step 0.05) | Overlay opacity |
| `overlayStyle` | `string` | `"solid"` | `SelectControl` | "solid", "fade-right", "cinematic", "diagonal" |

### 3.6 Layout attributes

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `sectionBackgroundColor` | `string` | `""` | `PanelColorSettings` | Background color (scoped attr) |
| `paddingVertical` | `number` | `32` | `RangeControl` (0–120) | Top/bottom padding in px |
| `sectionMinHeight` | `string` | `""` | `TextControl` | CSS min-height; empty = auto |
| `sectionHeight` | `string` | `""` | `TextControl` | Fixed CSS height; empty = auto |
| `showBorders` | `boolean` | `false` | `ToggleControl` | Show top/bottom border |
| `borderColor` | `string` | `""` | `PanelColorSettings` | Border color |
| `borderWidth` | `number` | `1` | `RangeControl` (1–3) | Border width in px |

### 3.7 Scroll animation (theme standard)

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `enableScrollAnimation` | `boolean` | `true` | `ToggleControl` | Fade in when entering viewport |

### 3.8 Accessibility

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `ariaLabel` | `string` | `""` | `TextControl` | ARIA label for the strip region |

---

## 4. How the seamless loop works

Identical to `scrolling-promotion` — see [`docs/blocks/Scrolling Promotion Marquee.md`](./Scrolling%20Promotion%20Marquee.md) § 4.

**Duplication:** Images are rendered **twice** inside a flex container that is wider than the viewport. A CSS `@keyframes` animation translates the container by exactly `-50%` (one full set of images), then jumps back to `0`. Because both halves are identical, the jump is invisible.

```
Container (2x width):
┌──────────────────────────────────────────┐
│ [A] [B] [C] [D] [E] │ [A] [B] [C] [D] [E] │
│ ← original set →     │ ← duplicated set →   │
└──────────────────────────────────────────┘
                     At translateX(-50%), the view shows the duplicate set,
                     which looks identical. Animation resets seamlessly.
```

**CSS-only:** Runs on the compositor thread for butter-smooth 60fps. No JavaScript animation needed.

**JS fallback (`view.ts`):** When the content (even doubled) is narrower than the track (e.g. only 1–2 images), the view script dynamically duplicates items in each half until they fill the track width. This uses the same algorithm as `scrolling-promotion/marquee-loop.ts` but with block-specific selectors (`nextora-sis` instead of `nextora-scrolling-promotion`).

---

## 5. Frontend HTML structure

```html
<section class="wp-block-nextora-scrolling-image-strip nextora-sis nextora-sis--loading"
         style="--nextora-sis-height: 200px;
                --nextora-sis-aspect-ratio: 3/4;
                --nextora-sis-fit: cover;
                --nextora-sis-radius: 16px;
                --nextora-sis-gap: 16px;
                --nextora-sis-speed: 40s;
                --nextora-sis-tilt-even: -2deg;
                --nextora-sis-tilt-odd: 5deg;
                --nextora-sis-overlay-color: var(--wp--preset--color--contrast, #0f172a);
                --nextora-sis-overlay-opacity: 0.3;
                --nextora-sis-padding: 32px;
                --nextora-sis-bg: transparent;
                --nextora-sis-min-height: auto;
                --nextora-sis-section-height: auto;
                --nextora-sis-border-color: transparent;
                --nextora-sis-border-width: 0px;"
         aria-label="Featured image gallery">

  <div class="nextora-sis__track">
    <div class="nextora-sis__inner nextora-sis__inner--left">

      <!-- Original set -->
      <div class="nextora-sis__half" data-nextora-sis-half="primary">
        <!-- Even index (0): tiltEvenAngle = -2deg -->
        <div class="nextora-sis__item nextora-sis__item--tilted"
             style="--nextora-sis-rotate: -2deg;">
          <div class="nextora-sis__frame">
            <img class="nextora-sis__img"
                 src="..." alt="..."
                 loading="lazy" decoding="async" />
          </div>
        </div>
        <!-- Odd index (1): tiltOddAngle = 5deg -->
        <div class="nextora-sis__item nextora-sis__item--tilted"
             style="--nextora-sis-rotate: 5deg;">
          <div class="nextora-sis__frame">
            <img class="nextora-sis__img" ... />
          </div>
        </div>
        <!-- ... more items alternating ... -->
      </div>

      <!-- Duplicated set (seamless loop, hidden from screen readers) -->
      <div class="nextora-sis__half" data-nextora-sis-half="duplicate"
           aria-hidden="true">
        <!-- identical content -->
      </div>

    </div>
  </div>

  <!-- Color overlay (when overlayOpacity > 0) -->
  <div class="nextora-sis__overlay nextora-sis__overlay--solid"
       aria-hidden="true"></div>

</section>
```

**Key points:**
- Section root uses `<section>` with `get_block_wrapper_attributes()`.
- Duplicated half has `aria-hidden="true"` — screen readers read images once.
- Each item gets `--nextora-sis-rotate` inline style: even indices use `tiltEvenAngle`, odd indices use `tiltOddAngle`.
- Overlay is `aria-hidden="true"` (visual only).
- `--nextora-sis-*` CSS custom properties from block attributes enable per-instance customization.
- Eager CSS marquee runs on page load; JS marquee-fill refines when track is wider than content.

---

## 6. CSS specification

### 6.1 Root and track

```css
.nextora-sis {
  --nextora-sis-height: 200px;
  --nextora-sis-aspect-ratio: 3/4;
  --nextora-sis-fit: cover;
  --nextora-sis-radius: 16px;
  --nextora-sis-gap: 16px;
  --nextora-sis-speed: 40s;
  --nextora-sis-tilt-even: -2deg;
  --nextora-sis-tilt-odd: 5deg;
  --nextora-sis-overlay-color: transparent;
  --nextora-sis-overlay-opacity: 0;
  --nextora-sis-padding: 32px;
  --nextora-sis-bg: transparent;
  --nextora-sis-min-height: auto;
  --nextora-sis-section-height: auto;
  --nextora-sis-border-color: transparent;
  --nextora-sis-border-width: 0;
  overflow: hidden;
  position: relative;
  width: 100%;
  background-color: var(--nextora-sis-bg);
  border-top: var(--nextora-sis-border-width) solid var(--nextora-sis-border-color);
  border-bottom: var(--nextora-sis-border-width) solid var(--nextora-sis-border-color);
  min-height: var(--nextora-sis-min-height);
  height: var(--nextora-sis-section-height);
  box-sizing: border-box;
}

.nextora-sis__track {
  overflow: hidden;
  position: relative;
  padding: var(--nextora-sis-padding) 0;
}
```

### 6.2 Inner flex and keyframes

```css
.nextora-sis__inner {
  display: flex;
  align-items: center;
  white-space: nowrap;
  width: max-content;
  gap: 0;
}

.nextora-sis__half {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

/* Left scroll (default) */
.nextora-sis__inner--left {
  animation: nextora-sis-scroll-left var(--nextora-sis-speed) linear infinite;
}

/* Right scroll */
.nextora-sis__inner--right {
  animation: nextora-sis-scroll-right var(--nextora-sis-speed) linear infinite;
}

@keyframes nextora-sis-scroll-left {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes nextora-sis-scroll-right {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

/* Pause on hover */
.nextora-sis:hover .nextora-sis__inner {
  animation-play-state: paused;
}

.nextora-sis--no-pause-on-hover:hover .nextora-sis__inner {
  animation-play-state: running;
}

.nextora-sis:focus-within .nextora-sis__inner {
  animation-play-state: paused;
}
```

### 6.3 Image items and tilt

```css
.nextora-sis__item {
  display: inline-flex;
  flex-shrink: 0;
  padding: 0 calc(var(--nextora-sis-gap) / 2);
  align-items: center;
  justify-content: center;
}

.nextora-sis__item--tilted {
  transform: rotate(var(--nextora-sis-rotate));
}

.nextora-sis__frame {
  overflow: hidden;
  border-radius: var(--nextora-sis-radius);
  aspect-ratio: var(--nextora-sis-aspect-ratio);
  height: var(--nextora-sis-height);
  width: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.nextora-sis__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: var(--nextora-sis-fit);
}

/* No-tilt variant */
.nextora-sis__item:not(.nextora-sis__item--tilted) {
  transform: none;
}
```

### 6.4 Fade mask

```css
/* Horizontal fade — default: fade left + right edges */
.nextora-sis--mask-horizontal .nextora-sis__track {
  -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
  mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
}

/* Vertical fade — fade top + bottom */
.nextora-sis--mask-vertical .nextora-sis__track {
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
  mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
}

/* Both directions */
.nextora-sis--mask-both .nextora-sis__track {
  -webkit-mask-image: radial-gradient(ellipse at center, black 60%, transparent 100%);
  mask-image: radial-gradient(ellipse at center, black 60%, transparent 100%);
}

.nextora-sis--mask-none .nextora-sis__track {
  -webkit-mask-image: none;
  mask-image: none;
}
```

### 6.5 Overlay (from `advanced-container`)

```css
.nextora-sis__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
}

.nextora-sis__overlay--solid {
  background-color: var(--nextora-sis-overlay-color);
  opacity: var(--nextora-sis-overlay-opacity);
}

.nextora-sis__overlay--fade-right {
  background: linear-gradient(
    to right,
    var(--nextora-sis-overlay-color),
    transparent 70%
  );
  opacity: var(--nextora-sis-overlay-opacity);
}

.nextora-sis__overlay--cinematic {
  opacity: var(--nextora-sis-overlay-opacity);
  background:
    linear-gradient(
      to top,
      var(--nextora-sis-overlay-color) 6%,
      color-mix(in srgb, var(--nextora-sis-overlay-color) 55%, transparent) 46%,
      color-mix(in srgb, var(--nextora-sis-overlay-color) 25%, transparent)
    ),
    linear-gradient(
      to right,
      color-mix(in srgb, var(--nextora-sis-overlay-color) 80%, transparent),
      transparent 62%
    );
}

.nextora-sis__overlay--diagonal {
  opacity: var(--nextora-sis-overlay-opacity);
  background: linear-gradient(
    105deg,
    var(--nextora-sis-overlay-color) 32%,
    color-mix(in srgb, var(--nextora-sis-overlay-color) 70%, transparent) 60%,
    transparent
  );
}
```

### 6.6 Responsive

```css
@media (max-width: 768px) {
  .nextora-sis {
    --nextora-sis-height: calc(var(--nextora-sis-height) * 0.7);
    --nextora-sis-gap: calc(var(--nextora-sis-gap) * 0.75);
    --nextora-sis-padding: calc(var(--nextora-sis-padding) * 0.75);
  }
}

@media (max-width: 480px) {
  .nextora-sis {
    --nextora-sis-height: calc(var(--nextora-sis-height) * 0.55);
    --nextora-sis-radius: calc(var(--nextora-sis-radius) * 0.75);
  }
}
```

### 6.7 Prefers reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  .nextora-sis__inner {
    animation: none !important;
  }

  .nextora-sis__half[aria-hidden="true"] {
    display: none;
  }

  .nextora-sis__item--tilted {
    transform: none !important;
  }
}
```

This is **critical for accessibility**. When reduced motion is active, animation stops, duplicated images are hidden, and tilt is removed. Images display as a static, wrapping flex row.

### 6.8 Scroll reveal

```css
.nextora-sis--scroll-reveal.nextora-sis--reveal-pending:not(.nextora-sis--ready) {
  opacity: 0;
  transform: translateY(28px);
}

.nextora-sis--scroll-reveal:not(.nextora-sis--reveal-pending),
.nextora-sis--scroll-reveal.nextora-sis--ready {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .nextora-sis--scroll-reveal {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
}
```

### 6.9 Loading / ready states

```css
/* CSS marquee runs immediately — no layout jump needed */
.nextora-sis--loading .nextora-sis__inner {
  /* CSS animation runs from paint; JS refines fill after init */
}

/* After JS init completes marquee-fill + scroll reveal */
.nextora-sis--ready .nextora-sis__inner {
  /* animation already running; class used by scroll reveal */
}
```

---

## 7. Design tokens

Map to Nextora presets in [`theme.json`](../../theme.json). Block CSS uses `--nextora-sis-*` properties with fallbacks.

| Token | Default | Source |
|-------|---------|--------|
| `--nextora-sis-height` | `200px` | `imageHeight` + `imageHeightUnit` |
| `--nextora-sis-aspect-ratio` | `3/4` | `imageAspectRatio` |
| `--nextora-sis-fit` | `cover` | `imageFit` |
| `--nextora-sis-radius` | `16px` | `imageBorderRadius` |
| `--nextora-sis-gap` | `16px` | `imageGap` |
| `--nextora-sis-speed` | `40s` | `speed` |
| `--nextora-sis-tilt-even` | `-2deg` | `tiltEvenAngle` |
| `--nextora-sis-tilt-odd` | `5deg` | `tiltOddAngle` |
| `--nextora-sis-overlay-color` | `transparent` | `overlayColor` (resolved) |
| `--nextora-sis-overlay-opacity` | `0` | `overlayOpacity` |
| `--nextora-sis-padding` | `32px` | `paddingVertical` |
| `--nextora-sis-bg` | `transparent` | `sectionBackgroundColor` (resolved) |
| `--nextora-sis-min-height` | `auto` | `sectionMinHeight` |
| `--nextora-sis-section-height` | `auto` | `sectionHeight` |
| `--nextora-sis-border-color` | `transparent` | `borderColor` (resolved) |
| `--nextora-sis-border-width` | `0px` | `borderWidth` (only when `showBorders`) |

---

## 8. Custom color options

Follow [`docs/blocks.md`](../blocks.md) § Custom colour options exactly. Key points:

| Do not use | Use instead |
|------------|-------------|
| `backgroundColor` | `sectionBackgroundColor` |
| `textColor` | Not needed (no text) |

**Attribute naming is scoped** — never reuse WordPress-reserved names for inner elements.

**Storage:** preset slug (e.g. `"secondary"`), never resolved hex. Use `normalizeColorForStorage()` flow from `advanced-icon/color-utils.ts`.

**PHP resolution:** Follow `nextora_ac_resolve_color()` pattern from `advanced-container/render.php`:
1. `var:preset|color|slug` → `var(--wp--preset--color--slug)`
2. 8-digit hex → return as-is (before `sanitize_hex_color()`)
3. 3/6-digit hex → `sanitize_hex_color()`
4. Preset slug → `var(--wp--preset--color--slug)`
5. `var(...)` passthrough

Reusable helpers exist in:
- [`blocks/advanced-icon/color-utils.ts`](../../blocks/advanced-icon/color-utils.ts) — `normalizeColorForStorage()`, `colorValueForPicker()`
- [`blocks/advanced-icon/lucide.php`](../../blocks/advanced-icon/lucide.php) — `nextora_icon_hex_to_preset_slug()`

---

## 9. Block entry (`index.tsx`)

Pure dynamic render — no `save.tsx`. Registers with `save: () => null` (identical to `scrolling-promotion/index.tsx`):

```tsx
import { registerBlockType, type BlockConfiguration } from '@wordpress/blocks';
import Edit from './edit';
import metadata from './block.json';
import type { ScrollingImageStripAttributes } from './types';

registerBlockType(metadata as BlockConfiguration<ScrollingImageStripAttributes>, {
  edit: Edit,
  save: () => null,
});
```

---

## 10. TypeScript types (`types.ts`)

```ts
export interface ScrollingImageStripAttributes {
  imageIds: number[];
  imageUrls: string[];
  imageHeight: number;
  imageHeightUnit: string;
  imageAspectRatio: string;
  imageFit: string;
  imageBorderRadius: number;
  imageGap: number;
  enableTilt: boolean;
  tiltEvenAngle: number;
  tiltOddAngle: number;
  direction: string;
  speed: number;
  pauseOnHover: boolean;
  enableFadeMask: boolean;
  fadeMaskDirection: string;
  overlayColor: string;
  overlayOpacity: number;
  overlayStyle: string;
  sectionBackgroundColor: string;
  paddingVertical: number;
  sectionMinHeight: string;
  sectionHeight: string;
  showBorders: boolean;
  borderColor: string;
  borderWidth: number;
  enableScrollAnimation: boolean;
  ariaLabel: string;
}
```

---

## 11. PHP render (`render.php`)

### 11.1 Key functions

| Function | Source pattern | Purpose |
|----------|---------------|---------|
| `nextora_sis_enqueue_view_script()` | `advanced-container/render.php` | Ensure view.js is enqueued |
| `nextora_sis_resolve_color($raw)` | `advanced-container/render.php` | Slug/hex → CSS color (full 5-step resolution) |
| `nextora_sis_sanitize_css_size($raw, $fallback)` | `advanced-container/render.php` | Validate CSS length |
| `nextora_sis_render_half($ids, $attrs, $is_duplicate)` | Custom | Render one `<div class="nextora-sis__half">` with image items |
| `nextora_sis_render_item($id, $url, $alt, $index, $attrs)` | Custom | Render one `.nextora-sis__item` with tilt inline style |

### 11.2 Render flow

```
1. Resolve imageIds → filter valid attachments → collect URLs + alt texts
2. If empty imageIds → return (no output)
3. Resolve colors: sectionBackgroundColor, overlayColor, borderColor
4. Sanitize sizes: sectionMinHeight, sectionHeight, imageHeight, paddingVertical
5. Normalize overlay style (solid/fade-right/cinematic/diagonal)
6. Build CSS variables inline style string
7. Build wrapper class string:
   - nextora-sis nextora-sis--loading
   - nextora-sis--dir-{left|right}
   - nextora-sis--mask-{horizontal|vertical|both|none}
   - nextora-sis--scroll-reveal (if enableScrollAnimation)
   - nextora-sis--no-pause-on-hover (if !pauseOnHover)
8. Set data-nextora-scroll-reveal="1" when enableScrollAnimation
9. Render primary half via nextora_sis_render_half()
10. Render duplicate half via nextora_sis_render_half($is_duplicate = true)
11. Output overlay div when overlayOpacity > 0
12. Enqueue view script via nextora_sis_enqueue_view_script()
```

### 11.3 Tilt application in `nextora_sis_render_item()`

```php
$is_even = ( $index % 2 === 0 );
$rotate_angle = $is_even ? $attrs['tiltEvenAngle'] : $attrs['tiltOddAngle'];

$item_classes = array( 'nextora-sis__item' );
if ( $attrs['enableTilt'] ) {
    $item_classes[] = 'nextora-sis__item--tilted';
}

$item_style = $attrs['enableTilt']
    ? '--nextora-sis-rotate:' . $rotate_angle . 'deg'
    : '';
```

- Index 0, 2, 4… (even): `tiltEvenAngle` (default `-2deg`)
- Index 1, 3, 5… (odd): `tiltOddAngle` (default `5deg`)

If `enableTilt === false`, omit `.nextora-sis__item--tilted` class and `--nextora-sis-rotate`.

### 11.4 Full `render.php` skeleton

```php
<?php
/**
 * Scrolling Image Strip — dynamic render.
 *
 * @package Nextora
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused (no InnerBlocks).
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// ── Enqueue view script ──
if ( ! function_exists( 'nextora_sis_enqueue_view_script' ) ) {
    function nextora_sis_enqueue_view_script(): void {
        if ( is_admin() ) return;
        $registry = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/scrolling-image-strip' );
        if ( $registry && ! empty( $registry->view_script_handles ) && is_array( $registry->view_script_handles ) ) {
            foreach ( $registry->view_script_handles as $handle ) {
                if ( is_string( $handle ) && '' !== $handle ) {
                    wp_enqueue_script( $handle );
                }
            }
            return;
        }
        // fallback direct enqueue (see advanced-container/render.php)
    }
}

// ── Color resolution ──
if ( ! function_exists( 'nextora_sis_resolve_color' ) ) {
    function nextora_sis_resolve_color( string $raw ): string {
        // ... follow nextora_ac_resolve_color() 5-step pattern (see docs/blocks.md § Custom colour options)
    }
}

// ── CSS size sanitization ──
if ( ! function_exists( 'nextora_sis_sanitize_css_size' ) ) {
    function nextora_sis_sanitize_css_size( string $raw, string $fallback ): string {
        // ... follow nextora_ac_sanitize_css_size() (see advanced-container/render.php)
    }
}

// ── Render helpers ──
// nextora_sis_render_item()
// nextora_sis_render_half()

// ── Resolve images ──
$raw_ids = isset( $attributes['imageIds'] ) && is_array( $attributes['imageIds'] )
    ? array_values( array_filter( array_map( 'absint', $attributes['imageIds'] ) ) )
    : array();
$ids = array();
foreach ( $raw_ids as $id ) {
    if ( $id && wp_attachment_is_image( $id ) ) {
        $ids[] = $id;
    }
}
if ( ! $ids ) return;

// ── Read + normalize attributes ──
// ... (all attribute reading + clamping with defaults)

// ── Build CSS variables ──
$css_vars = array(
    '--nextora-sis-height'       => $image_height . $image_height_unit,
    '--nextora-sis-aspect-ratio' => $image_aspect_ratio,
    // ... all tokens
);
$inline_style = implode( ';', array_map(
    fn( string $k, string $v ) => $k . ':' . $v,
    array_keys( $css_vars ),
    $css_vars,
) );

// ── Build classes + data attrs ──
$classes = array( 'nextora-sis', 'nextora-sis--loading' );
// ... direction, mask, scroll-reveal, no-pause-on-hover

$wrapper_args = array(
    'class' => implode( ' ', $classes ),
    'style' => $inline_style,
);
if ( $enable_scroll_animation ) {
    $wrapper_args['data-nextora-scroll-reveal'] = '1';
}

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_args );
$aria_label         = $aria_label ?: __( 'Featured image gallery', 'nextora' );

nextora_sis_enqueue_view_script();
?>
<section <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
         aria-label="<?php echo esc_attr( $aria_label ); ?>">
  <div class="nextora-sis__track">
    <div class="nextora-sis__inner nextora-sis__inner--<?php echo esc_attr( $direction ); ?>">
      <?php echo nextora_sis_render_half( $ids, $urls, $alts, $attributes, false ); ?>
      <?php echo nextora_sis_render_half( $ids, $urls, $alts, $attributes, true ); ?>
    </div>
  </div>
  <?php if ( $overlay_opacity > 0 ) : ?>
    <div class="nextora-sis__overlay nextora-sis__overlay--<?php echo esc_attr( $overlay_style ); ?>"
         aria-hidden="true"></div>
  <?php endif; ?>
</section>
```

---

## 12. register-editor.php

Pass theme palette entries to the editor for hex→slug normalization in `PanelColorSettings`. Follow `advanced-container/register-editor.php` pattern:

```php
<?php
/**
 * Editor-only assets for nextora/scrolling-image-strip block.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function nextora_scrolling_image_strip_block_editor_assets(): void {
    $handle = 'nextora-scrolling-image-strip-editor-script';

    if ( ! wp_script_is( $handle, 'registered' ) ) {
        return;
    }

    require_once dirname( __DIR__ ) . '/advanced-icon/lucide.php';

    /** @var list<array{slug: string, color: string, name: string}> $palette_entries */
    $palette_entries = array();
    foreach ( nextora_icon_collect_palette_entries() as $entry ) {
        $palette_entries[] = array(
            'slug'  => $entry['slug'],
            'color' => $entry['color'],
            'name'  => ucwords( str_replace( '-', ' ', $entry['slug'] ) ),
        );
    }

    $data = array(
        'paletteEntries' => $palette_entries,
    );

    wp_add_inline_script(
        $handle,
        'window.nextoraScrollingImageStripBlock = ' . wp_json_encode( $data ) . ';',
        'before',
    );
}
add_action( 'enqueue_block_editor_assets', 'nextora_scrolling_image_strip_block_editor_assets', 100 );
```

---

## 13. Editor behavior (`edit.tsx`)

### 13.1 Image selection

```tsx
<MediaUpload
  onSelect={(mediaList: { id: number; url: string }[]) => {
    const ids = mediaList.map((m) => m.id).filter(Boolean);
    setAttributes({ imageIds: ids });
  }}
  allowedTypes={['image']}
  multiple
  gallery
  render={({ open }) => (
    <Button variant="primary" onClick={open}>
      {imageIds.length > 0
        ? sprintf(__('%d images selected', 'nextora'), imageIds.length)
        : __('Select images', 'nextora')}
    </Button>
  )}
/>
```

Show thumbnail previews of selected images in a horizontal scrollable row. When empty, show `Placeholder` with upload instructions. Minimum 1 image required.

### 13.2 Inspector panels

Use panel titles consistent with `docs/blocks.md` § UI consistency:

| Panel | Controls |
|-------|----------|
| **Images** | `MediaUpload` (multiple, with thumbnail preview), `RangeControl` imageHeight (80–600), `SelectControl` imageHeightUnit, `SelectControl` imageAspectRatio, `SelectControl` imageFit, `RangeControl` imageBorderRadius (0–48), `RangeControl` imageGap (0–64) |
| **Animation** | `SelectControl` direction (left/right), `RangeControl` speed (10–120), `ToggleControl` pauseOnHover |
| **Tilt** | `ToggleControl` enableTilt, `RangeControl` tiltEvenAngle (-15–15, label "Even-index angle"), `RangeControl` tiltOddAngle (-15–15, label "Odd-index angle") |
| **Fade mask** | `ToggleControl` enableFadeMask, `SelectControl` fadeMaskDirection (horizontal/vertical/both) |
| **Overlay** | `PanelColorSettings` overlayColor (label "Overlay color", help "Empty uses no overlay."), `RangeControl` overlayOpacity (0–1, step 0.05), `SelectControl` overlayStyle (solid/fade-right/cinematic/diagonal) |
| **Colors** | `PanelColorSettings` sectionBackgroundColor (label "Background color", help "Empty uses theme default.") |
| **Layout** | `RangeControl` paddingVertical (0–120), `TextControl` sectionMinHeight, `TextControl` sectionHeight, `ToggleControl` showBorders, `PanelColorSettings` borderColor (shown when showBorders), `RangeControl` borderWidth (1–3, shown when showBorders) |
| **Animation** | `ToggleControl` enableScrollAnimation (label "Animate on scroll", help "Fade in when entering the viewport. Disabled automatically when the visitor prefers reduced motion.") |
| **Accessibility** | `TextControl` ariaLabel (help "Describes the image gallery for screen readers. Falls back to 'Featured image gallery' when empty.") |

### 13.3 Editor preview

Use `ServerSideRender` for live preview. Images render statically (no CSS animation in editor — animation is front-end only). Tilt is visible since it's inline `style` from render.php.

**Block toolbar:** No toolbar buttons needed (alignment is via `supports.align`).

### 13.4 Color controls

`overlayColor`, `sectionBackgroundColor`, `borderColor` use `PanelColorSettings` with `enableAlpha`. Follow [`docs/blocks.md`](../blocks.md) § Custom colour options exactly:
- `onChange` → `normalizeColorForStorage(value, palette)`
- `value` → `colorValueForPicker(stored, currentPalette, lookupPalette)`
- Labels via `__('Overlay color', 'nextora')`, `__('Background color', 'nextora')`, `__('Border color', 'nextora')`
- Help text: "Empty uses theme default."
- Get palette from `window.nextoraScrollingImageStripBlock.paletteEntries` (set by `register-editor.php`)

---

## 14. View script (`view.ts`)

Handles three concerns:
1. **Marquee fill** — dynamically duplicate items in each half so content fills the track (own implementation, selectors tailored to `.nextora-sis`)
2. **Loading → ready** — mark block as ready after marquee fill
3. **Scroll reveal** — GSAP + ScrollTrigger fade-in when `data-nextora-scroll-reveal="1"`

**Do NOT reuse `scrolling-promotion/marquee-loop.ts` directly** — its selectors (`data-nextora-marquee-half`, `.nextora-scrolling-promotion__track`) are different. Copy the algorithm and adapt selectors.

### 14.1 Full `view.ts`

```ts
/**
 * Scrolling image strip — marquee fill + scroll reveal (front end only).
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ROOT_SELECTOR = '.nextora-sis:not([data-nextora-sis-ready])';
const READY_ATTR = 'data-nextora-sis-ready';
const PRIMARY_HALF_SEL = '[data-nextora-sis-half="primary"]';
const DUPLICATE_HALF_SEL = '[data-nextora-sis-half="duplicate"]';
const TRACK_SEL = '.nextora-sis__track';
const REVEAL_START_RATIO = 0.88;
const REVEAL_FALLBACK_MS = 1800;

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
  );
}

// ── Marquee fill (adapted from scrolling-promotion/marquee-loop.ts) ──

/** Wait for all <img> inside root to load or fail. */
function whenImagesReady(root: HTMLElement): Promise<void> {
  const imgs = [...root.querySelectorAll<HTMLImageElement>('img')];
  if (imgs.length === 0) return Promise.resolve();
  return Promise.all(
    imgs.map(
      (img) =>
        new Promise<void>((resolve) => {
          if (img.complete) { resolve(); return; }
          const done = (): void => {
            img.removeEventListener('load', done);
            img.removeEventListener('error', done);
            resolve();
          };
          img.addEventListener('load', done);
          img.addEventListener('error', done);
        }),
    ),
  ).then(() => undefined);
}

/** Clone items inside `half` until `scrollWidth >= minWidth`. */
function fillHalf(half: HTMLElement, minWidth: number): void {
  let template = half.dataset.nextoraSisTemplate ?? '';
  if (template === '') {
    template = half.innerHTML.trim();
    if (template === '') return;
    half.dataset.nextoraSisTemplate = template;
  } else {
    half.innerHTML = template;
  }

  let safety = 0;
  while (half.scrollWidth < minWidth && safety < 64) {
    half.insertAdjacentHTML('beforeend', template);
    safety += 1;
  }
}

/** Copy primary half HTML into duplicate half. */
function syncDuplicateHalf(primary: HTMLElement, duplicate: HTMLElement): void {
  duplicate.innerHTML = primary.innerHTML;
  duplicate.setAttribute('aria-hidden', 'true');
}

function fillScrollingImageStrip(root: HTMLElement): void {
  const track = root.querySelector<HTMLElement>(TRACK_SEL);
  const primary = root.querySelector<HTMLElement>(PRIMARY_HALF_SEL);
  const duplicate = root.querySelector<HTMLElement>(DUPLICATE_HALF_SEL);

  if (!track || !primary || !duplicate) return;
  if (prefersReducedMotion()) return;

  const minWidth = Math.max(track.clientWidth, 1);
  fillHalf(primary, minWidth);
  syncDuplicateHalf(primary, duplicate);
}

// ── Scroll reveal (adapted from advanced-container/view.ts) ──

function initScrollReveal(root: HTMLElement): void {
  if (root.getAttribute('data-nextora-scroll-reveal') !== '1') return;
  if (prefersReducedMotion()) {
    root.classList.add('nextora-sis--ready');
    root.classList.remove('nextora-sis--reveal-pending');
    return;
  }

  root.classList.add('nextora-sis--reveal-pending');

  // If already in viewport, skip animation
  const rect = root.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  if (rect.top <= vh * REVEAL_START_RATIO && rect.bottom > 0) {
    root.classList.add('nextora-sis--ready');
    root.classList.remove('nextora-sis--reveal-pending');
    return;
  }

  // Fallback: show after timeout even if trigger never fires
  const fallbackTimer = window.setTimeout(() => {
    if (root.classList.contains('nextora-sis--ready')) return;
    gsap.killTweensOf(root);
    root.classList.add('nextora-sis--ready');
    root.classList.remove('nextora-sis--reveal-pending');
  }, REVEAL_FALLBACK_MS);

  ScrollTrigger.create({
    trigger: root,
    start: `top ${Math.round(REVEAL_START_RATIO * 100)}%`,
    once: true,
    onEnter: () => {
      window.clearTimeout(fallbackTimer);
      gsap.fromTo(
        root,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: 'power3.out',
          onComplete: () => {
            root.classList.add('nextora-sis--ready');
            root.classList.remove('nextora-sis--reveal-pending');
          },
        },
      );
    },
  });
}

// ── Init ──

async function initRoot(root: HTMLElement): Promise<void> {
  if (root.getAttribute(READY_ATTR) === '1') return;

  await whenImagesReady(root);
  fillScrollingImageStrip(root);
  root.setAttribute(READY_ATTR, '1');
  root.classList.remove('nextora-sis--loading');
  root.classList.add('nextora-sis--ready');

  initScrollReveal(root);
}

function initAllIn(container: ParentNode = document): void {
  container.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach((root) => {
    void initRoot(root);
  });
}

// ── Observe resizes (re-run marquee fill) ──

function observeResize(root: HTMLElement): void {
  const track = root.querySelector<HTMLElement>(TRACK_SEL);
  if (!track || typeof ResizeObserver === 'undefined') return;

  let frame = 0;
  const observer = new ResizeObserver(() => {
    if (prefersReducedMotion()) return;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      delete root.dataset.nextoraSisReady;
      root.classList.remove('nextora-sis--ready');
      void initRoot(root);
    });
  });
  observer.observe(track);
  (root as Record<string, unknown>).__nextoraSisObserver = observer;
}

function initAll(): void {
  document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach((root) => {
    void initRoot(root).then(() => observeResize(root));
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll, { once: true });
} else {
  initAll();
}
```

---

## 15. Accessibility

- **Prefers reduced motion:** Animation stops. Duplicated images hidden. Tilt removed. Static wrapping row. Scroll reveal skipped (opacity 1 immediately). (CSS §6.7 + JS §14)
- **aria-hidden on duplicates:** The second `<div class="nextora-sis__half">` has `aria-hidden="true"` — screen readers announce images once.
- **ARIA label:** Section `<section>` has `aria-label` from attribute or defaults to `"Featured image gallery"`.
- **Image alt text:** Each `<img>` gets alt from WordPress attachment alt text. If empty, `alt=""` (decorative).
- **Pause on hover/focus:** `animation-play-state: paused` on hover and `:focus-within`.
- **No `<marquee>` tag:** Pure CSS animation only.
- **Scroll reveal fallback:** JS fallback timer (1800ms) ensures content is always visible even if ScrollTrigger never fires.

---

## 16. Responsive behavior

| Viewport | Changes |
|----------|---------|
| All sizes | Marquee scrolls continuously regardless of viewport width. |
| `< 768px` | Scale height to 70%, reduce gap and padding to 75%. |
| `< 480px` | Scale height to 55%, reduce radius to 75%. |
| Reduced motion | Animation stops. Duplicates hidden. Tilt removed. Static centered row. JS marquee fill skipped. Scroll reveal skipped. |

---

## 17. Edge cases

- **Single image:** Loop is seamless — single item duplicated fills both halves.
- **Two images:** Works; duplication creates infinite loop.
- **Empty imageIds:** Return early in `render.php` — no output. Editor shows `Placeholder`.
- **Very large images:** `object-fit: cover` + fixed height constrains them. `loading="lazy"` for performance.
- **Multiple instances:** CSS custom properties are inline per instance. Keyframes are global but shared safely. Each instance gets independent JS init (guarded by `data-nextora-sis-ready`).
- **Block validation:** `save: () => null` — no saved markup to validate.
- **Zero tilt:** When `enableTilt === false`, omit `.nextora-sis__item--tilted` class; items render flat.
- **Zero overlay opacity:** Omit `.nextora-sis__overlay` div from markup.
- **No fade mask:** Class `nextora-sis--mask-none` sets `mask-image: none`.
- **JS disabled:** CSS marquee still runs (eager render from PHP). Scroll reveal fallback — without JS, content is visible via `--reveal-pending` being never added.

---

## 18. File structure

```
blocks/scrolling-image-strip/
├── block.json              # Metadata, attributes, supports
├── index.tsx               # registerBlockType + save: () => null
├── edit.tsx                # Editor component (MediaUpload, panels, ServerSideRender)
├── render.php              # Server-side render (marquee shell + images + overlay)
├── register-editor.php     # Pass theme palette → editor (hex→slug normalization)
├── style.css               # Front-end CSS (keyframes, tilt, mask, overlay, responsive)
├── editor.css              # Editor-only styles (thumbnail previews, placeholder)
├── view.ts                 # Front-end JS (marquee fill, loading→ready, scroll reveal, ResizeObserver)
├── types.ts                # TypeScript attribute interface
└── register-styles.php     # Optional block style presets
```

**Built (do not edit):** `index.js`, `index.asset.php`, `view.js`.

**No `save.tsx`** — pure dynamic render block uses `save: () => null`.

---

## 19. Acceptance criteria

1. Block appears in inserter under **Media** category.
2. Multiple images can be selected via Media Library (minimum 1).
3. Images scroll continuously and seamlessly — no visible jump or gap at loop point.
4. Direction toggles between left and right scroll.
5. Speed control adjusts animation duration — lower = faster.
6. Tilt angles apply correctly: even-index images use `tiltEvenAngle`, odd-index use `tiltOddAngle`.
7. Tilt can be disabled entirely (flat images).
8. Fade mask renders at track edges (horizontal, vertical, or both).
9. Fade mask can be disabled (no mask).
10. Overlay color, opacity, and style render correctly (solid, fade-right, cinematic, diagonal).
11. Overlay with zero opacity is not rendered in DOM.
12. Background color, borders, padding, min-height work correctly.
13. Pause on hover works: animation stops on mouse enter.
14. `prefers-reduced-motion`: animation stops, duplicates hidden, tilt removed, static layout, scroll reveal skipped.
15. Screen readers read each image once (duplicates have `aria-hidden="true"`).
16. Image alt text from WordPress attachment metadata.
17. Multiple instances on one page work independently.
18. No block validation errors on save/reload.
19. JS marquee fill handles edge cases (1–2 images, narrow track, resize).
20. Scroll reveal fades block in when entering viewport; fallback timer shows content if trigger never fires.
21. Text controls for sectionMinHeight and sectionHeight accept valid CSS values (px/rem/em/vh/vw/%); reject invalid ones.
22. Works with WordPress 6.4+, wide/full alignment.
23. Passes `npm run lint:php:all` and `npm run typecheck`.

---

## 20. Implementation checklist (agent)

Use skill **`nextora-add-theme-block`**:

- [ ] Scaffold block: `npm run gen -- --name=scrolling-image-strip --ns=nextora --category=media`
- [ ] Delete generated `save.tsx` (not needed — pure dynamic render)
- [ ] `block.json` — attributes §3, supports §2
- [ ] `types.ts` — `ScrollingImageStripAttributes` interface §10
- [ ] `index.tsx` — register with `save: () => null` §9
- [ ] `render.php` — full dynamic render §11: color resolution, image loop, CSS vars, overlay, tilt parity, duplication
- [ ] `register-editor.php` — pass palette to editor §12
- [ ] `style.css` — full CSS spec §6: keyframes, tilt, mask, overlay, responsive, reduced-motion, scroll-reveal, loading/ready
- [ ] `editor.css` — editor thumbnail row, placeholder, ServerSideRender adjustments
- [ ] `edit.tsx` — MediaUpload multi-select with thumbnail preview, panels §13.2, `ServerSideRender`
- [ ] `view.ts` — own marquee fill + scroll reveal GSAP §14 (do NOT import from `scrolling-promotion/marquee-loop.ts` — copy algorithm with `.nextora-sis` selectors)
- [ ] Color controls: `PanelColorSettings` with scoped attrs, slug storage, normalizers §8
- [ ] Compare sidebar labels with `scrolling-promotion` and `image-gallery-slide`
- [ ] `npm run build:blocks` + `npm run lint:php:all` + `npm run typecheck`

---

## 21. References

| Reference | What to copy |
|-----------|-------------|
| [`blocks/scrolling-promotion/render.php`](../../blocks/scrolling-promotion/render.php) | CSS vars building, duplicate half rendering pattern, `save: () => null` entry |
| [`blocks/scrolling-promotion/style.css`](../../blocks/scrolling-promotion/style.css) | Keyframes, track/inner/half flex structure, pause-on-hover, responsive, reduced-motion |
| [`blocks/scrolling-promotion/view.ts`](../../blocks/scrolling-promotion/view.ts) | ResizeObserver pattern, init loop |
| [`blocks/scrolling-promotion/marquee-loop.ts`](../../blocks/scrolling-promotion/marquee-loop.ts) | **Algorithm** for `fillHalf()` + `syncDuplicateHalf()` — copy logic, use `.nextora-sis` selectors |
| [`blocks/advanced-container/render.php`](../../blocks/advanced-container/render.php) | `nextora_ac_resolve_color()`, `nextora_ac_sanitize_css_size()`, enqueue view script pattern |
| [`blocks/advanced-container/style.css`](../../blocks/advanced-container/style.css) | Overlay CSS (solid, fade-right, cinematic, diagonal) |
| [`blocks/advanced-container/view.ts`](../../blocks/advanced-container/view.ts) | Scroll reveal GSAP + ScrollTrigger, fallback timer |
| [`blocks/advanced-container/register-editor.php`](../../blocks/advanced-container/register-editor.php) | Palette localization for editor |
| [`blocks/advanced-icon/color-utils.ts`](../../blocks/advanced-icon/color-utils.ts) | `normalizeColorForStorage()`, `colorValueForPicker()` |
| [`blocks/advanced-icon/lucide.php`](../../blocks/advanced-icon/lucide.php) | `nextora_icon_hex_to_preset_slug()`, `nextora_icon_collect_palette_entries()` |
| [`docs/blocks.md`](../blocks.md) | Custom color options §, scroll animation standard, JS init loading pattern, UI consistency |
| [`docs/blocks/Scrolling Promotion Marquee.md`](./Scrolling%20Promotion%20Marquee.md) | Full marquee duplication logic |
