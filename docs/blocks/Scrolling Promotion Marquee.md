# Scrolling Promotion Marquee Block

**Version:** 1.0
**For:** AI Agent Development

---

## 1. Overview

This document specifies a Gutenberg block that renders a **continuous horizontal scrolling text marquee** — a strip of promotional messages that scroll seamlessly in a loop, either left-to-right or right-to-left. The animation is pure CSS (no JavaScript runtime), uses content duplication for seamless looping, and pauses on hover for accessibility.

**Common use cases:** announcement bars, promotional banners, sponsor tickers, brand statement strips, sale notifications.

**Core principle:** The text content is duplicated in the DOM so that when the first set scrolls off-screen, the identical second set fills in behind it — creating the illusion of infinite continuous scrolling with no gaps or jumps.

---

## 2. Block Identity & Registration

### 2.1 block.json Metadata

| Property | Value |
|---|---|
| `name` | `custom/scrolling-promotion` |
| `title` | `Scrolling Promotion` |
| `category` | `design` |
| `icon` | `controls-repeat` (Dashicon) |
| `description` | A continuous horizontal scrolling text marquee for promotions, announcements, and brand statements. |
| `textdomain` | `scrolling-promotion` |
| `supports.html` | `false` |
| `supports.align` | `["wide", "full"]` |
| `supports.multiple` | `true` |
| `supports.anchor` | `true` |

---

## 3. Block Attributes Schema

### 3.1 Content Attributes

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `items` | `array` | `[{"itemType":"text","text":"Your promotion here",...}]` | Repeater UI | Array of promotion items (text, image, or both). |
| `imageHeight` | `number` | `32` | RangeControl (16–120) | Height in px for image / text+image items |

Each item in the `items` array:

```json
{
  "itemType": "text",
  "text": "Free shipping on all orders over $50",
  "imageId": 0,
  "imageUrl": "",
  "imageAlt": ""
}
```

| `itemType` | Values | Description |
|---|---|---|
| `itemType` | `"text"` \| `"image"` \| `"text-image"` | Text only, logo/image only, or label beside image |
| `imageId` | `number` | Attachment ID from the media library |
| `imageUrl` | `string` | Fallback URL when ID is missing |
| `imageAlt` | `string` | Alt text for image items (falls back to attachment alt) |

Supported image MIME types in the editor: JPEG, PNG, GIF, WebP, AVIF, SVG (when SVG uploads are enabled).

### 3.2 Animation Attributes

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `direction` | `string` | `"left"` | SelectControl | Scroll direction: `"left"` (text moves left) or `"right"` (text moves right) |
| `speed` | `number` | `30` | RangeControl (5–120) | Animation duration in seconds for one full cycle. Higher = slower. |
| `pauseOnHover` | `boolean` | `true` | ToggleControl | Pause the animation when the user hovers over the marquee |

### 3.3 Separator Attributes

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `separatorType` | `string` | `"dot"` | SelectControl | Separator between items: `"dot"`, `"dash"`, `"pipe"`, `"star"`, `"custom"`, `"none"` |
| `customSeparator` | `string` | `"✦"` | TextControl | Custom separator character (used when `separatorType = "custom"`) |
| `separatorSize` | `number` | `6` | RangeControl (4–16) | Separator dot/icon size in px |
| `separatorColor` | `string` | `""` | ColorPicker | Separator color (empty = inherits text color at 40% opacity) |

### 3.4 Typography Attributes

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `fontSize` | `number` | `16` | RangeControl (12–72) | Font size in px |
| `fontWeight` | `string` | `"500"` | SelectControl | Font weight: `"400"`, `"500"`, `"600"`, `"700"`, `"800"`, `"900"` |
| `textTransform` | `string` | `"none"` | SelectControl | Text transform: `"none"`, `"uppercase"`, `"lowercase"`, `"capitalize"` |
| `letterSpacing` | `number` | `0` | RangeControl (0–10, step 0.5) | Letter spacing in px |
| `fontFamily` | `string` | `""` | FontFamilyPicker | Font family (empty = inherits theme font) |
| `textColor` | `string` | `""` | ColorPicker | Text color (empty = inherits from theme) |

### 3.5 Layout & Style Attributes

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `backgroundColor` | `string` | `""` | ColorPicker | Background color of the marquee strip (empty = transparent) |
| `paddingVertical` | `number` | `16` | RangeControl (0–60) | Vertical padding (top & bottom) in px |
| `itemGap` | `number` | `40` | RangeControl (16–120) | Horizontal gap between items in px |
| `showBorders` | `boolean` | `false` | ToggleControl | Show top and bottom border lines |
| `borderColor` | `string` | `""` | ColorPicker | Border color (empty = theme default border) |
| `borderWidth` | `number` | `1` | RangeControl (1–3) | Border width in px |

---

## 4. How the Seamless Loop Works

This is the critical technical concept. The AI agent must understand this to implement correctly.

### 4.1 The Duplication Technique

The scrolling effect uses **content duplication**. The full set of items is rendered **twice** inside a flex container that is wider than the viewport. A CSS `@keyframes` animation translates the container by exactly `-50%` (half its width = one full set of items), then jumps back to `0`. Because both halves are identical, the jump is invisible.

```
Visual representation:

Container (2x width):
┌──────────────────────────────────────────────────────────┐
│ [A] • [B] • [C] • [D] │ [A] • [B] • [C] • [D] │
│ ← original set →       │ ← duplicated set →      │
└──────────────────────────────────────────────────────────┘
                          ↑
                     At translateX(-50%), the view shows the duplicate set,
                     which looks identical to the original.
                     Animation resets to translateX(0) seamlessly.
```

### 4.2 Direction Logic

- **Left scroll** (`direction: "left"`): `translateX(0)` → `translateX(-50%)`
- **Right scroll** (`direction: "right"`): `translateX(-50%)` → `translateX(0)`

### 4.3 Why Not JavaScript?

Pure CSS animation is preferred because it runs on the compositor thread, resulting in butter-smooth 60fps scrolling without jank. JavaScript-based scrolling (requestAnimationFrame / setInterval) runs on the main thread and can stutter during page load or heavy DOM activity.

---

## 5. Frontend HTML Structure

```html
<div class="wp-block-scrolling-promotion"
     style="--sp-bg: #000000;
            --sp-text: #ffffff;
            --sp-font-size: 16px;
            --sp-font-weight: 500;
            --sp-text-transform: none;
            --sp-letter-spacing: 0px;
            --sp-padding: 16px;
            --sp-gap: 40px;
            --sp-speed: 30s;
            --sp-sep-size: 6px;
            --sp-sep-color: rgba(255,255,255,0.4);
            --sp-border-color: transparent;
            --sp-border-width: 0px;">

  <div class="scrolling-promotion__track">
    <div class="scrolling-promotion__inner scrolling-promotion__inner--left"
         aria-hidden="false">

      <!-- Original set -->
      <span class="scrolling-promotion__item">
        <span class="scrolling-promotion__sep" aria-hidden="true">●</span>
        Free shipping on all orders
      </span>
      <span class="scrolling-promotion__item">
        <span class="scrolling-promotion__sep" aria-hidden="true">●</span>
        Summer sale — up to 50% off
      </span>
      <span class="scrolling-promotion__item">
        <span class="scrolling-promotion__sep" aria-hidden="true">●</span>
        Use code WATER2025
      </span>

      <!-- Duplicated set (exact same content, for seamless loop) -->
      <span class="scrolling-promotion__item" aria-hidden="true">
        <span class="scrolling-promotion__sep" aria-hidden="true">●</span>
        Free shipping on all orders
      </span>
      <span class="scrolling-promotion__item" aria-hidden="true">
        <span class="scrolling-promotion__sep" aria-hidden="true">●</span>
        Summer sale — up to 50% off
      </span>
      <span class="scrolling-promotion__item" aria-hidden="true">
        <span class="scrolling-promotion__sep" aria-hidden="true">●</span>
        Use code WATER2025
      </span>

    </div>
  </div>

</div>
```

**Key points:**

- The duplicated set has `aria-hidden="true"` on each item so screen readers don't read the content twice.
- The `--sp-*` CSS custom properties are set inline from block attributes, enabling per-instance customization.
- The `scrolling-promotion__inner--left` modifier class determines direction. Use `--right` for right scroll.

---

## 6. CSS Specification

### 6.1 Core Styles

```css
.wp-block-scrolling-promotion {
  overflow: hidden;
  width: 100%;
  background-color: var(--sp-bg, transparent);
  border-top: var(--sp-border-width, 0) solid var(--sp-border-color, transparent);
  border-bottom: var(--sp-border-width, 0) solid var(--sp-border-color, transparent);
}

.scrolling-promotion__track {
  overflow: hidden;
  padding: var(--sp-padding, 16px) 0;
  position: relative;
}

.scrolling-promotion__inner {
  display: flex;
  align-items: center;
  white-space: nowrap;
  width: max-content;
  gap: 0;
}

/* Left scroll (default) */
.scrolling-promotion__inner--left {
  animation: sp-scroll-left var(--sp-speed, 30s) linear infinite;
}

/* Right scroll */
.scrolling-promotion__inner--right {
  animation: sp-scroll-right var(--sp-speed, 30s) linear infinite;
}

/* Pause on hover */
.wp-block-scrolling-promotion:hover .scrolling-promotion__inner {
  animation-play-state: paused;
}

/* No pause variant */
.wp-block-scrolling-promotion.no-pause-on-hover:hover .scrolling-promotion__inner {
  animation-play-state: running;
}

@keyframes sp-scroll-left {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes sp-scroll-right {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
```

### 6.2 Item & Separator Styles

```css
.scrolling-promotion__item {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-gap, 40px);
  padding: 0 calc(var(--sp-gap, 40px) / 2);
  font-size: var(--sp-font-size, 16px);
  font-weight: var(--sp-font-weight, 500);
  text-transform: var(--sp-text-transform, none);
  letter-spacing: var(--sp-letter-spacing, 0);
  color: var(--sp-text, inherit);
  flex-shrink: 0;
}

.scrolling-promotion__sep {
  width: var(--sp-sep-size, 6px);
  height: var(--sp-sep-size, 6px);
  border-radius: 50%;
  background-color: var(--sp-sep-color, currentColor);
  opacity: 0.4;
  flex-shrink: 0;
}

/* Separator type overrides */
.scrolling-promotion__sep--dash {
  width: 20px;
  height: 2px;
  border-radius: 1px;
}

.scrolling-promotion__sep--pipe {
  width: 2px;
  height: 1em;
  border-radius: 0;
}

.scrolling-promotion__sep--star,
.scrolling-promotion__sep--custom {
  width: auto;
  height: auto;
  background: none;
  font-size: var(--sp-sep-size, 12px);
  opacity: 0.6;
}
```

### 6.3 Prefers Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  .scrolling-promotion__inner {
    animation: none !important;
    flex-wrap: wrap;
    white-space: normal;
    justify-content: center;
    gap: 8px 24px;
  }

  .scrolling-promotion__item[aria-hidden="true"] {
    display: none;
  }
}
```

This is **critical for accessibility**. When the user has reduced motion enabled, the animation stops entirely, the duplicated items are hidden, and the remaining items wrap into a centered static layout.

---

## 7. Editor (edit.js) Behavior

### 7.1 Items Repeater

The editor must provide a repeater interface for managing text items:

- Display each item as an editable text field in a list
- "Add Item" button appends a new empty item
- Each item has a "Remove" button (trash icon)
- Items can be reordered via drag-and-drop or up/down buttons
- Minimum 1 item required (disable remove when only 1 remains)

Use a custom `PanelBody` in `InspectorControls`:

```
PanelBody: "Promotion Items"
├── TextControl — Item 1 text  [🗑]
├── TextControl — Item 2 text  [🗑]
├── TextControl — Item 3 text  [🗑]
└── [+ Add Item] button
```

### 7.2 Live Preview in Editor

In the editor, show a **static preview** of the marquee (no animation) displaying all items in a horizontal row with separators. This gives the user a visual sense of the layout without the distraction of movement while editing.

Optionally, add a toolbar button "Preview Animation" that toggles the CSS animation on/off in the editor.

### 7.3 Inspector Panel Layout

**PanelBody: "Promotion Items"**

- Repeater list (TextControl per item + Add/Remove)

**PanelBody: "Animation"**

- `SelectControl` — Direction (left / right)
- `RangeControl` — Speed (5–120 seconds, default 30)
- `ToggleControl` — Pause on Hover

**PanelBody: "Separator"**

- `SelectControl` — Separator Type (dot / dash / pipe / star / custom / none)
- `TextControl` — Custom Separator Character *(shown only when type = custom)*
- `RangeControl` — Separator Size (4–16 px)
- `ColorPicker` — Separator Color

**PanelBody: "Typography"**

- `RangeControl` — Font Size (12–72 px)
- `SelectControl` — Font Weight (400–900)
- `SelectControl` — Text Transform (none / uppercase / lowercase / capitalize)
- `RangeControl` — Letter Spacing (0–10 px, step 0.5)
- `FontFamilyPicker` — Font Family

**PanelBody: "Colors"**

- `ColorPicker` — Text Color
- `ColorPicker` — Background Color

**PanelBody: "Layout"**

- `RangeControl` — Vertical Padding (0–60 px)
- `RangeControl` — Item Gap (16–120 px)
- `ToggleControl` — Show Top/Bottom Borders
- `ColorPicker` — Border Color *(shown only when showBorders = true)*
- `RangeControl` — Border Width (1–3 px) *(shown only when showBorders = true)*

---

## 8. File Structure

```
scrolling-promotion/
├── block.json                          // Block metadata & attributes
├── index.js                            // registerBlockType entry
├── edit.js                             // Editor component (repeater + static preview)
├── save.js                             // Frontend render (static HTML with duplicated items)
├── style.css                           // Frontend + editor styles (animations, layout)
├── editor.css                          // Editor-only styles (static preview overrides)
└── scrolling-promotion.php             // Server-side block registration
```

---

## 9. PHP Server-Side Registration

```php
<?php
/**
 * Plugin Name: Scrolling Promotion Block
 * Description: A continuous horizontal scrolling text marquee Gutenberg block.
 * Version: 1.0.0
 * Text Domain: scrolling-promotion
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function sp_register_block() {
    register_block_type( __DIR__ );
}
add_action( 'init', 'sp_register_block' );
```

---

## 10. save.js Implementation Logic

The `save` function must implement the duplication logic. Pseudocode:

```jsx
export default function Save({ attributes }) {
  const {
    items, direction, speed, pauseOnHover,
    separatorType, customSeparator, separatorSize, separatorColor,
    fontSize, fontWeight, textTransform, letterSpacing,
    textColor, backgroundColor,
    paddingVertical, itemGap,
    showBorders, borderColor, borderWidth,
  } = attributes;

  const cssVars = {
    '--sp-bg': backgroundColor || 'transparent',
    '--sp-text': textColor || 'inherit',
    '--sp-font-size': `${fontSize}px`,
    '--sp-font-weight': fontWeight,
    '--sp-text-transform': textTransform,
    '--sp-letter-spacing': `${letterSpacing}px`,
    '--sp-padding': `${paddingVertical}px`,
    '--sp-gap': `${itemGap}px`,
    '--sp-speed': `${speed}s`,
    '--sp-sep-size': `${separatorSize}px`,
    '--sp-sep-color': separatorColor || undefined,
    '--sp-border-color': showBorders ? (borderColor || undefined) : 'transparent',
    '--sp-border-width': showBorders ? `${borderWidth}px` : '0px',
  };

  const dirClass = `scrolling-promotion__inner--${direction}`;
  const wrapperClass = pauseOnHover ? '' : 'no-pause-on-hover';

  // Render separator based on type
  const SepEl = getSeparator(separatorType, customSeparator);

  // Render items TWICE for seamless loop
  const renderItems = (ariaHidden) =>
    items.map((item, i) => (
      <span className="scrolling-promotion__item" aria-hidden={ariaHidden} key={`${ariaHidden}-${i}`}>
        {SepEl}
        {item.text}
      </span>
    ));

  return (
    <div {...useBlockProps.save({ style: cssVars, className: wrapperClass })}>
      <div className="scrolling-promotion__track">
        <div className={`scrolling-promotion__inner ${dirClass}`}>
          {renderItems(false)}   {/* Original — readable by screen readers */}
          {renderItems(true)}    {/* Duplicate — hidden from screen readers */}
        </div>
      </div>
    </div>
  );
}
```

---

## 11. Accessibility Requirements

- **Prefers Reduced Motion:** Animation MUST stop entirely when `prefers-reduced-motion: reduce` is active. Duplicated items must be hidden via CSS. Remaining items display as a static, centered, wrapping layout. (See Section 6.3)
- **aria-hidden on duplicates:** The second (duplicated) set of items must have `aria-hidden="true"` on each `<span>` so screen readers don't read content twice.
- **Pause on hover:** Enabled by default. When the user hovers, `animation-play-state: paused` stops the scroll so text can be read.
- **Keyboard focus:** If any item contains a link in the future, the marquee must pause when any child receives keyboard focus.
- **Role and label:** The wrapper should have `role="marquee"` and `aria-label="Promotional announcements"` for semantic clarity.
- **No `<marquee>` tag:** The deprecated HTML `<marquee>` element must NEVER be used. Pure CSS animation only.

---

## 12. Responsive Behavior

| Viewport | Changes |
|---|---|
| All sizes | The marquee is inherently responsive — it scrolls continuously regardless of viewport width. No breakpoint changes needed for the scroll behavior itself. |
| `< 768px` | If `fontSize > 24px`, consider scaling down via `clamp()`. The block should provide a `mobileFontSize` attribute or use `clamp(14px, 3vw, {fontSize}px)`. |
| `< 480px` | Reduce `paddingVertical` by ~25%. Reduce `itemGap` by ~25%. |
| Reduced motion | Animation stops. Items wrap into a centered static flex layout. Duplicated items hidden. |

---

## 13. Edge Cases & Validation

- **Single item:** If only 1 item exists, the marquee still works — the single item is duplicated, scrolling "Item • Item • Item •" seamlessly.
- **Very long text:** A single item with very long text must not break the layout. `white-space: nowrap` is always applied. The speed auto-adjusts visually since longer content = wider container = more distance to travel at the same duration.
- **Empty items:** The `save` function must filter out items with empty `text` before rendering. `items.filter(item => item.text.trim() !== '')`.
- **Block validation:** Ensure the `save` output is fully deterministic. The `items` array order and content must produce identical HTML every time — no random keys, no Date.now() IDs.
- **Multiple instances:** CSS custom properties are scoped per instance via inline styles, so multiple blocks on one page do not conflict. The `@keyframes` are global but shared safely since they always do the same thing (translate 0 ↔ -50%).

---

## 14. Separator Reference

| `separatorType` | Visual | Rendered as |
|---|---|---|
| `"dot"` | ● | `<span>` with border-radius: 50%, background-color |
| `"dash"` | — | `<span>` with width: 20px, height: 2px |
| `"pipe"` | \| | `<span>` with width: 2px, height: 1em |
| `"star"` | ✦ | `<span>` with text content `✦` |
| `"custom"` | (user-defined) | `<span>` with text content from `customSeparator` attribute |
| `"none"` | (nothing) | No separator rendered, gap-only spacing |

---

## 15. Design Variant Presets

These are optional presets the block could offer via a "Style" selector (block styles):

| Style Name | Font Size | Weight | Transform | BG | Text | Separator | Padding |
|---|---|---|---|---|---|---|---|
| Default | 16px | 500 | none | transparent | inherit | dot | 16px |
| Bold statement | 32px | 700 | uppercase | transparent | inherit | dot (10px, accent color) | 24px |
| Dark strip | 14px | 400 | uppercase | `#000000` | `#FFFFFF` | dot (6px, white 30%) | 14px |
| Announcement bar | 14px | 500 | none | theme primary | `#FFFFFF` | pipe | 12px |
| Minimal | 13px | 400 | uppercase | transparent | inherit | dash | 10px |

These presets can be registered as block styles via `register_block_style()` in PHP, each applying a CSS class that overrides the custom properties.

---

## 16. Acceptance Criteria

1. Block appears in the inserter under the "Design" category with correct icon and title.
2. Items can be added, removed, and reordered via the Inspector repeater UI.
3. All text items scroll continuously and seamlessly with no visible jump or gap at the loop point.
4. Direction toggles correctly between left and right scroll.
5. Speed control adjusts animation duration — lower values = faster scroll.
6. Pause on hover works: animation stops when cursor enters the marquee area.
7. All separator types render correctly (dot, dash, pipe, star, custom, none).
8. Typography controls (size, weight, transform, spacing) apply correctly.
9. Background color and border options render correctly.
10. `prefers-reduced-motion` query stops animation and shows static centered layout with duplicates hidden.
11. Screen readers read each item exactly once (duplicates have `aria-hidden="true"`).
12. Multiple instances on the same page work independently with their own settings.
13. No block validation errors on save/reload in the editor.
14. Works with WordPress 6.4+ and full-width/wide alignment.

---

## 17. Notes for AI Agent

- Use `@wordpress/scripts` for the build toolchain (`wp-scripts build`).
- The animation is **pure CSS** — no JavaScript is needed on the frontend. No `view.js` file required.
- The duplication happens in `save.js` at render time, not via JavaScript DOM manipulation.
- `width: max-content` on the inner container is essential — it makes the flex container as wide as its content, so `-50%` always equals exactly one set of items.
- Use `useBlockProps()` in both `edit` and `save` for proper WordPress block wrapper integration.
- `gap: 0` on the flex container — spacing is handled by `padding` on each `.scrolling-promotion__item` to ensure uniform spacing between original and duplicated sets at the seam.
- The `animation-timing-function` must be `linear` — any easing (ease, ease-in-out) creates visible acceleration/deceleration that breaks the seamless illusion.
- Test with 1 item, 2 items, and 10+ items to ensure the loop is seamless at all content lengths.
- For the editor repeater, use `@wordpress/components` `Button` and `TextControl`. Consider using `@dnd-kit` or a simple up/down button approach for reordering.