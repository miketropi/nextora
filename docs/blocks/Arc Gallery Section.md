# Arc Gallery Section Block

**Version:** 1.0
**For:** AI Agent Development

---

## 1. Overview

This document specifies a Gutenberg block that renders a **creative section with images arranged along a curved arc path**, paired with eyebrow text, a heading, a primary CTA button, and a secondary link-style button below. The images fan out from the center like a hand of cards, each rotated tangentially to follow the curve of the arc.

**Reference:** See the attached screenshot showing the Rail Park section — 5 photos arranged in a concave arc (lowest at edges, highest at center), with text and call-to-action below.

**Core visual principle:** Images are positioned along an invisible circular arc using trigonometric calculations (`sin`/`cos`). Each image's rotation matches its position on the arc, creating a natural fan/spread effect. The center image sits highest and is most upright; edge images dip lower and tilt outward.

---

## 2. Block Identity & Registration

### 2.1 block.json Metadata

| Property | Value |
|---|---|
| `name` | `custom/arc-gallery-section` |
| `title` | `Arc Gallery Section` |
| `category` | `design` |
| `icon` | `images-alt2` (Dashicon) |
| `description` | A creative section with images arranged along a curved arc, plus eyebrow text, heading, and CTA buttons. |
| `textdomain` | `arc-gallery` |
| `supports.html` | `false` |
| `supports.align` | `["wide", "full"]` |
| `supports.multiple` | `true` |
| `supports.anchor` | `true` |

---

## 3. Block Attributes Schema

### 3.1 Image Gallery Attributes

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `images` | `array` | `[]` | MediaUpload (gallery) | Array of image objects. Each object: `{ id, url, alt }` |
| `imageWidth` | `number` | `220` | RangeControl (120–400) | Individual image card width in px |
| `imageHeight` | `number` | `280` | RangeControl (150–500) | Individual image card height in px |
| `imageBorderRadius` | `number` | `6` | RangeControl (0–24) | Image card corner radius in px |
| `imageBorderWidth` | `number` | `3` | RangeControl (0–8) | White border around each image in px |
| `imageBorderColor` | `string` | `"#FFFFFF"` | ColorPicker | Border color around each image |
| `showImageShadow` | `boolean` | `true` | ToggleControl | Show subtle drop shadow on image cards |

### 3.2 Arc Layout Attributes

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `arcRadius` | `number` | `600` | RangeControl (300–1500) | Radius of the invisible arc circle in px. Larger = flatter curve, smaller = more dramatic curve. |
| `arcSpread` | `number` | `50` | RangeControl (20–90) | Total angular spread of the arc in degrees. Controls how wide the fan spreads. |
| `arcDirection` | `string` | `"up"` | SelectControl | Arc curves upward (`"up"` — concave, center highest) or downward (`"down"` — convex, center lowest) |
| `galleryHeight` | `number` | `380` | RangeControl (250–600) | Height of the gallery container in px |
| `galleryOverflow` | `boolean` | `true` | ToggleControl | Allow images to overflow outside the section bounds (for edge images that extend beyond viewport) |

### 3.3 Text Content Attributes

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `eyebrowText` | `string` | `""` | RichText | Small text above the heading (eyebrow) |
| `headingText` | `string` | `""` | RichText | Main heading text |
| `descriptionText` | `string` | `""` | RichText | Supporting copy below the heading (bold, italic, links) |
| `headingLevel` | `number` | `2` | SelectControl (1–6) | Heading HTML tag level (h1–h6) |
| `textAlign` | `string` | `"center"` | AlignmentToolbar | Text alignment: `"left"`, `"center"`, `"right"` |
| `contentMaxWidth` | `string` | `"700px"` | TextControl | Max-width of the text + buttons area |

### 3.4 Button Attributes

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `showPrimaryButton` | `boolean` | `true` | ToggleControl | Show/hide primary CTA button |
| `primaryButtonText` | `string` | `"Donate Now"` | RichText | Primary button label |
| `primaryButtonUrl` | `string` | `""` | URLInput | Primary button link URL |
| `primaryButtonTarget` | `boolean` | `false` | ToggleControl | Open in new tab |
| `primaryButtonIcon` | `string` | `""` | TextControl | Optional Dashicon name for the primary button (e.g., `"heart"`) |
| `primaryButtonStyle` | `string` | `"solid"` | SelectControl | Button style: `"solid"`, `"outline"` |
| `showSecondaryButton` | `boolean` | `true` | ToggleControl | Show/hide secondary link-style button |
| `secondaryButtonText` | `string` | `"Learn More"` | RichText | Secondary button label |
| `secondaryButtonUrl` | `string` | `""` | URLInput | Secondary button link URL |
| `secondaryButtonTarget` | `boolean` | `false` | ToggleControl | Open in new tab |

### 3.5 Style Attributes

| Attribute | Type | Default | Control | Description |
|---|---|---|---|---|
| `backgroundColor` | `string` | `""` | ColorPicker | Section background color (empty = transparent) |
| `textColor` | `string` | `""` | ColorPicker | Heading text color |
| `eyebrowColor` | `string` | `""` | ColorPicker | Eyebrow text color |
| `primaryButtonBg` | `string` | `""` | ColorPicker | Primary button background |
| `primaryButtonColor` | `string` | `""` | ColorPicker | Primary button text color |
| `paddingTop` | `number` | `80` | RangeControl (0–200) | Section top padding in px |
| `paddingBottom` | `number` | `80` | RangeControl (0–200) | Section bottom padding in px |

---

## 4. How the Arc Positioning Works

This is the most important technical section. The AI agent must implement this math correctly.

### 4.1 The Arc Math

Images are distributed evenly along an arc segment of an invisible circle. Given `N` images, an `arcRadius` (R), and an `arcSpread` (total angle in degrees):

```
For each image i (0 to N-1):
  
  1. Calculate the angle for this image:
     angleStep = arcSpread / (N - 1)
     angle = -arcSpread/2 + (i * angleStep)
     angleRad = angle * (π / 180)
  
  2. Calculate position on the arc:
     x = centerX + R * sin(angleRad)
     y = centerY - R * cos(angleRad) + R    [for "up" arc]
     y = centerY + R * cos(angleRad) - R    [for "down" arc]
  
  3. Calculate rotation (tangent to the arc):
     rotation = angle degrees
```

### 4.2 Visual Explanation

```
                    Arc direction: "up" (concave)
                    
                          ┌───┐
                    ┌───┐ │ 3 │ ┌───┐
              ┌───┐ │ 2 │ │   │ │ 4 │ ┌───┐
              │ 1 │ │   │ └───┘ │   │ │ 5 │
              │╱  │ └───┘       └───┘ │  ╲│
              └───┘                   └───┘
         rotate:-12°  -6°    0°   +6°   +12°
         
    ──────────────────────────────────────────
    
              Eyebrow text here
              Main heading text
              [Primary CTA] [Learn More →]
```

### 4.3 Centering Logic

The gallery container has `position: relative` and a fixed height. All images use `position: absolute`. The x-positions are calculated so the entire set of images is centered horizontally within the container:

```js
const totalWidth = (N - 1) * spacingBetweenCenters;
const offsetX = (containerWidth - totalWidth) / 2;
// Each image's left = offsetX + (i * spacingBetweenCenters) - (imageWidth / 2)
```

Alternatively, all positions can be calculated from the arc math and then shifted so the center image aligns with `50%` of the container.

### 4.4 Single Image Edge Case

If only 1 image exists, place it centered with `rotation: 0deg`. No arc math needed.

### 4.5 Two Images Edge Case

With 2 images, use the two endpoints of the arc (e.g., `-arcSpread/2` and `+arcSpread/2`).

---

## 5. Frontend HTML Structure

```html
<div class="wp-block-arc-gallery-section alignfull"
     style="--ags-bg: #f5f7f5;
            --ags-padding-top: 80px;
            --ags-padding-bottom: 80px;
            --ags-text-color: #1A1A2E;
            --ags-eyebrow-color: #718096;
            --ags-btn-bg: #1A1A2E;
            --ags-btn-color: #FFFFFF;
            --ags-img-radius: 6px;
            --ags-img-border: 3px;
            --ags-img-border-color: #FFFFFF;">

  <!-- Gallery Arc -->
  <div class="arc-gallery"
       style="height: 380px;"
       role="img"
       aria-label="Gallery of 5 images arranged in an arc">

    <!-- Each image is absolutely positioned with inline transform -->
    <div class="arc-gallery__item"
         style="width: 220px; height: 280px;
                left: calc(50% - 320px);
                top: 80px;
                transform: rotate(-12deg);">
      <img src="{url}" alt="{alt}" />
    </div>

    <div class="arc-gallery__item"
         style="width: 220px; height: 280px;
                left: calc(50% - 180px);
                top: 35px;
                transform: rotate(-6deg);">
      <img src="{url}" alt="{alt}" />
    </div>

    <div class="arc-gallery__item"
         style="width: 220px; height: 280px;
                left: calc(50% - 110px);
                top: 10px;
                transform: rotate(0deg);">
      <img src="{url}" alt="{alt}" />
    </div>

    <div class="arc-gallery__item"
         style="width: 220px; height: 280px;
                left: calc(50% + 40px);
                top: 35px;
                transform: rotate(6deg);">
      <img src="{url}" alt="{alt}" />
    </div>

    <div class="arc-gallery__item"
         style="width: 220px; height: 280px;
                left: calc(50% + 180px);
                top: 80px;
                transform: rotate(12deg);">
      <img src="{url}" alt="{alt}" />
    </div>

  </div>

  <!-- Text Content -->
  <div class="arc-gallery__content" style="max-width: 700px; text-align: center;">

    <p class="arc-gallery__eyebrow">
      Behind the Rail Park there are people. Real people.
    </p>

    <h2 class="arc-gallery__heading">
      We're on a mission to bring the Rail Park to life.
    </h2>

    <!-- Buttons -->
    <div class="arc-gallery__buttons">
      <a class="arc-gallery__btn arc-gallery__btn--primary" href="#">
        <svg><!-- optional icon --></svg>
        Donate Now
      </a>
      <a class="arc-gallery__btn arc-gallery__btn--link" href="#">
        Learn More
        <svg><!-- right arrow icon --></svg>
      </a>
    </div>

  </div>

</div>
```

**Key point:** The `left` and `top` positions and `rotate()` values on each `.arc-gallery__item` are **computed in `save.js`** from the arc math (Section 4) and set as inline styles. They are NOT hardcoded — they change based on the number of images, `arcRadius`, and `arcSpread` attributes.

---

## 6. CSS Specification

### 6.1 Design Tokens

| Variable | Default | Description |
|---|---|---|
| `--ags-bg` | `transparent` | Section background |
| `--ags-padding-top` | `80px` | Top padding |
| `--ags-padding-bottom` | `80px` | Bottom padding |
| `--ags-text-color` | `inherit` | Heading color |
| `--ags-eyebrow-color` | `#718096` | Eyebrow text color |
| `--ags-btn-bg` | `#1A1A2E` | Primary button background |
| `--ags-btn-color` | `#FFFFFF` | Primary button text |
| `--ags-img-radius` | `6px` | Image card corners |
| `--ags-img-border` | `3px` | Image border width |
| `--ags-img-border-color` | `#FFFFFF` | Image border color |

### 6.2 Core Styles

```css
.wp-block-arc-gallery-section {
  background-color: var(--ags-bg, transparent);
  padding-top: var(--ags-padding-top, 80px);
  padding-bottom: var(--ags-padding-bottom, 80px);
  overflow: hidden; /* or visible, based on galleryOverflow attr */
}

/* ---- Gallery Container ---- */
.arc-gallery {
  position: relative;
  width: 100%;
  margin: 0 auto;
}

/* ---- Individual Image Card ---- */
.arc-gallery__item {
  position: absolute;
  border-radius: var(--ags-img-radius, 6px);
  border: var(--ags-img-border, 3px) solid var(--ags-img-border-color, #fff);
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              box-shadow 0.3s ease;
}

.arc-gallery__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Optional: hover lift effect */
.arc-gallery__item:hover {
  transform: scale(1.05) rotate(0deg) !important;
  z-index: 10;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

/* ---- Content Area ---- */
.arc-gallery__content {
  margin: 0 auto;
  padding: 0 24px;
}

.arc-gallery__eyebrow {
  font-size: 14px;
  color: var(--ags-eyebrow-color, #718096);
  margin: 0 0 8px;
  line-height: 1.5;
}

.arc-gallery__heading {
  font-size: clamp(1.5rem, 3.5vw, 2.75rem);
  font-weight: 700;
  color: var(--ags-text-color, inherit);
  line-height: 1.15;
  margin: 0 0 28px;
}

/* ---- Buttons ---- */
.arc-gallery__buttons {
  display: flex;
  justify-content: center; /* or flex-start/flex-end based on textAlign */
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

/* Primary CTA */
.arc-gallery__btn--primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: var(--ags-btn-bg, #1A1A2E);
  color: var(--ags-btn-color, #FFFFFF);
  font-size: 15px;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: opacity 0.2s ease, transform 0.15s ease;
}
.arc-gallery__btn--primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Primary outline variant */
.arc-gallery__btn--primary.is-outline {
  background: transparent;
  border: 2px solid var(--ags-btn-bg, #1A1A2E);
  color: var(--ags-btn-bg, #1A1A2E);
}

/* Secondary link-style */
.arc-gallery__btn--link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 14px 8px;
  background: none;
  border: none;
  color: var(--ags-text-color, inherit);
  font-size: 15px;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-thickness: 1.5px;
  transition: opacity 0.2s ease;
}
.arc-gallery__btn--link:hover {
  opacity: 0.7;
}
.arc-gallery__btn--link svg {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
}
.arc-gallery__btn--link:hover svg {
  transform: translateX(3px);
}
```

### 6.3 Responsive

```css
@media (max-width: 1024px) {
  .arc-gallery__item {
    width: 160px !important;
    height: 210px !important;
  }
}

@media (max-width: 768px) {
  .arc-gallery {
    height: auto !important;
    position: static;
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    padding: 0 16px;
  }

  .arc-gallery__item {
    position: static !important;
    transform: rotate(0deg) !important;
    width: calc(33% - 8px) !important;
    height: auto !important;
    aspect-ratio: 3/4;
  }

  .arc-gallery__buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .arc-gallery__btn--primary,
  .arc-gallery__btn--link {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .arc-gallery__item {
    width: calc(50% - 6px) !important;
  }
}
```

**Important:** On mobile (`< 768px`), the arc layout degrades gracefully to a **flat grid** — images lose their rotation and absolute positioning and become a standard responsive flex/grid layout. The arc effect only works on larger viewports.

---

## 7. save.js Implementation — Arc Position Calculator

The `save.js` must calculate inline positions for each image. Here is the calculation logic:

```jsx
function calculateArcPositions(images, arcRadius, arcSpread, galleryHeight, imageWidth, imageHeight, arcDirection) {
  const count = images.length;
  if (count === 0) return [];

  if (count === 1) {
    return [{
      left: `calc(50% - ${imageWidth / 2}px)`,
      top: `${(galleryHeight - imageHeight) / 2}px`,
      rotation: 0,
    }];
  }

  const spreadRad = (arcSpread * Math.PI) / 180;
  const halfSpread = spreadRad / 2;
  const positions = [];

  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0 : (i / (count - 1)) * 2 - 1; // -1 to 1
    const angle = t * halfSpread;

    // Horizontal position: spread images across the arc
    const x = arcRadius * Math.sin(angle);

    // Vertical position: arc curve
    const yArc = arcRadius * (1 - Math.cos(angle));
    const y = arcDirection === 'up'
      ? galleryHeight - imageHeight - yArc  // concave: center at top
      : yArc;                                // convex: center at bottom

    // Rotation: tangent to arc
    const rotationDeg = (angle * 180) / Math.PI;

    positions.push({
      left: `calc(50% + ${Math.round(x - imageWidth / 2)}px)`,
      top: `${Math.round(y)}px`,
      rotation: Math.round(rotationDeg * 10) / 10, // 1 decimal precision
    });
  }

  return positions;
}

// Usage in save.js:
const positions = calculateArcPositions(
  attributes.images,
  attributes.arcRadius,
  attributes.arcSpread,
  attributes.galleryHeight,
  attributes.imageWidth,
  attributes.imageHeight,
  attributes.arcDirection
);

// Apply to each image:
positions.forEach((pos, i) => {
  // style={{ left: pos.left, top: pos.top, transform: `rotate(${pos.rotation}deg)` }}
});
```

---

## 8. Editor (edit.js) Behavior

### 8.1 Image Management

- Use `MediaUpload` with `gallery={true}` and `multiple={true}` to allow bulk image selection from the media library.
- Display current images as a sortable thumbnail list in the Inspector.
- Support drag-and-drop reorder of images.
- Each image shows a small thumbnail, alt text field, and remove button.
- Minimum: 1 image. Maximum: recommended 7 (warn if more — arc becomes crowded).

### 8.2 Live Arc Preview

In the editor, render the **actual arc layout** using the same calculation logic from Section 7. Images should be positioned absolutely with computed inline styles, giving the user a WYSIWYG preview of the arc shape.

When `arcRadius` or `arcSpread` sliders change, the preview updates in real-time.

### 8.3 Inline Text Editing

- Eyebrow: `RichText`, `tagName="p"`, `placeholder="Eyebrow text..."`
- Heading: `RichText`, `tagName="h2"` (dynamic based on `headingLevel`), `placeholder="Your heading here..."`
- Primary button text: `RichText`, `tagName="span"`, `placeholder="Button text"`
- Secondary button text: `RichText`, `tagName="span"`, `placeholder="Link text"`

### 8.4 Inspector Panel Layout

**PanelBody: "Gallery Images"**

- `MediaUpload` — Select / Replace images (gallery mode)
- Sortable image list with thumbnails
- Each image: alt text TextControl + remove button

**PanelBody: "Arc Layout"**

- `RangeControl` — Arc Radius (300–1500, default 600). Label hint: "Larger = flatter, smaller = more dramatic"
- `RangeControl` — Arc Spread (20–90 degrees, default 50). Label hint: "Total angle of the fan"
- `SelectControl` — Arc Direction (up / down)
- `RangeControl` — Gallery Height (250–600 px)
- `ToggleControl` — Allow Overflow

**PanelBody: "Image Style"**

- `RangeControl` — Image Width (120–400 px)
- `RangeControl` — Image Height (150–500 px)
- `RangeControl` — Corner Radius (0–24 px)
- `RangeControl` — Border Width (0–8 px)
- `ColorPicker` — Border Color
- `ToggleControl` — Show Shadow on Hover

**PanelBody: "Primary Button"**

- `ToggleControl` — Show Primary Button
- `URLInput` — Button URL *(shown when visible)*
- `ToggleControl` — Open in New Tab *(shown when visible)*
- `TextControl` — Button Icon (Dashicon name, optional) *(shown when visible)*
- `SelectControl` — Button Style (solid / outline) *(shown when visible)*
- `ColorPicker` — Button Background *(shown when visible)*
- `ColorPicker` — Button Text Color *(shown when visible)*

**PanelBody: "Secondary Button"**

- `ToggleControl` — Show Secondary Button
- `URLInput` — Button URL *(shown when visible)*
- `ToggleControl` — Open in New Tab *(shown when visible)*

**PanelBody: "Colors & Spacing"**

- `ColorPicker` — Section Background
- `ColorPicker` — Heading Color
- `ColorPicker` — Eyebrow Color
- `RangeControl` — Padding Top (0–200 px)
- `RangeControl` — Padding Bottom (0–200 px)
- `TextControl` — Content Max Width
- `SelectControl` — Heading Level (h1–h6)

**BlockControls Toolbar:**

- `AlignmentToolbar` — Text alignment (left / center / right)

---

## 9. File Structure

```
arc-gallery-section/
├── block.json                        // Block metadata & attributes
├── index.js                          // registerBlockType entry
├── edit.js                           // Editor component (live arc preview + repeater)
├── save.js                           // Frontend render (computed arc positions)
├── arc-math.js                       // Shared arc position calculator (used by both edit & save)
├── style.css                         // Frontend + editor styles
├── editor.css                        // Editor-only styles
└── arc-gallery-section.php           // Server-side block registration
```

---

## 10. PHP Server-Side Registration

```php
<?php
/**
 * Plugin Name: Arc Gallery Section Block
 * Description: A creative Gutenberg block with images arranged along a curved arc path.
 * Version: 1.0.0
 * Text Domain: arc-gallery
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function ags_register_block() {
    register_block_type( __DIR__ );
}
add_action( 'init', 'ags_register_block' );
```

---

## 11. SVG Icon Specifications

### 11.1 Primary Button Icon (optional, e.g., heart)

- Viewbox: `0 0 24 24`
- Stroke: `currentColor`, stroke-width: `2`, stroke-linecap: `round`, fill: `none`
- Size: 16x16px inline

### 11.2 Secondary Button Arrow

- Viewbox: `0 0 24 24`
- Path: `M5 12h14M12 5l7 7-7 7`
- Stroke: `currentColor`, stroke-width: `2`, stroke-linecap: `round`
- Size: 16x16px inline
- On hover: translateX(3px) transition

---

## 12. Accessibility Requirements

- The gallery container must have `role="img"` and `aria-label="Gallery of N images arranged in a decorative arc"`.
- Each `<img>` must have meaningful `alt` text from the `images[].alt` attribute.
- Buttons must be `<a>` tags with `href` for proper keyboard navigation and screen reader access.
- If `primaryButtonTarget` is `true`, add `rel="noopener noreferrer"` and `target="_blank"`.
- The hover lift effect on images should respect `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  .arc-gallery__item {
    transition: none;
  }
  .arc-gallery__item:hover {
    transform: inherit !important; /* keep original rotation */
  }
  .arc-gallery__btn--link svg {
    transition: none;
  }
}
```

- Heading level must be semantically correct (default `h2`, configurable).

---

## 13. Responsive Behavior

| Viewport | Behavior |
|---|---|
| `> 1024px` | Full arc layout with all computed positions and rotations |
| `768px – 1024px` | Arc layout preserved but image cards shrink to `160×210px` |
| `< 768px` | **Graceful degradation:** Arc layout switches to a flat flex grid. All `position: absolute`, computed `left/top`, and `transform: rotate()` are overridden. Images display as a responsive 3-column grid with no rotation. |
| `< 480px` | Grid becomes 2-column |

---

## 14. Hover Interaction

When a user hovers over an image card:

1. The card scales up to `1.05`
2. Rotation resets to `0deg` (card straightens)
3. z-index bumps to `10` (card comes to front)
4. A subtle box-shadow appears: `0 12px 40px rgba(0, 0, 0, 0.15)`
5. Transition: `0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)` for smooth, organic feel

This creates a "pick up the photo" interaction — like lifting a photo from a table spread.

---

## 15. Acceptance Criteria

1. Block appears in the inserter under "Design" with correct icon and title.
2. Images can be selected from the media library in gallery mode (multiple select).
3. Images are arranged along an arc with correct trigonometric positioning and rotation.
4. `arcRadius` and `arcSpread` controls update the arc shape in real-time in the editor.
5. Arc direction toggle switches between concave (center top) and convex (center bottom).
6. Eyebrow text, heading, and both button texts are editable inline via RichText.
7. Primary CTA button renders with correct styling (solid or outline) and optional icon.
8. Secondary link-style button renders with underline text and arrow icon with hover animation.
9. Both buttons have configurable URLs and open-in-new-tab option.
10. Image hover effect (scale + straighten + shadow) works smoothly.
11. Mobile responsive: arc degrades to flat grid below 768px.
12. `prefers-reduced-motion` disables all transitions and hover transforms.
13. Multiple instances on the same page work independently.
14. No block validation errors on save/reload.
15. Works with WordPress 6.4+ and full/wide alignment.

---

## 16. Notes for AI Agent

- Use `@wordpress/scripts` for the build toolchain.
- **Extract the arc calculator** into a shared `arc-math.js` module imported by both `edit.js` and `save.js` to keep the math in sync.
- The `save.js` must output **inline styles** for each image's `left`, `top`, and `transform` — these are computed values, not CSS class-based.
- `Math.sin()` and `Math.cos()` operate in radians — always convert degrees to radians first.
- When the user changes `arcRadius` or `arcSpread` in the editor, `edit.js` should recalculate and re-render all positions immediately (React state update).
- The `calc(50% + Npx)` pattern for `left` ensures centering regardless of container width.
- Test with 1, 2, 3, 5, and 7 images to ensure the arc looks correct at all counts.
- The reference screenshot shows approximately 5 visible images with 2 partially cropped at the edges — this is achieved by `overflow: hidden` on the section and images placed beyond the container bounds.
- Use `useBlockProps()` in both `edit` and `save` functions.
- The white border on images in the reference gives them a "printed photo" feel — `imageBorderColor` defaults to white but is customizable.

---

## 17. Nextora theme implementation addendum (do not use generic spec as-is)

This section maps the spec above to the **Nextora** block theme (`wp-content/themes/nextora/`). When implementing, follow [`docs/blocks.md`](../../blocks.md), [`AGENTS.md`](../../AGENTS.md), skill **nextora-add-theme-block**, and skill **nextora-theme-styling-and-tokens**. **Do not** ship a standalone plugin or `@wordpress/scripts` bundle.

### 17.1 Identity and registration

| Spec (§2) | Nextora |
|-----------|---------|
| `custom/arc-gallery-section` | **`nextora/arc-gallery-section`** |
| `textdomain` `arc-gallery` | **`nextora`** |
| Category `design` | **`media`** (pairs with `nextora/image-gallery-grid`) or `theme` if used as a landing hero band |
| Plugin `arc-gallery-section.php` | **None** — auto-registered via [`blocks/blocks.php`](../../blocks/blocks.php) |
| `index.js` + `edit.js` + `save.js` | **`index.tsx`**, **`edit.tsx`**, **`save: () => null`** + **`render.php`** |

Scaffold: `npm run gen -- --name=arc-gallery-section --ns=nextora --category=media`

### 17.2 File structure (revised)

```text
blocks/arc-gallery-section/
├── block.json
├── index.tsx
├── edit.tsx              # Live arc preview (React + arc-math.ts)
├── types.ts
├── arc-math.ts           # Shared calculator (editor); mirror logic in render.php
├── render.php            # Arc positions as inline styles + wp_get_attachment_image
├── style.css
├── editor.css
└── (generated) index.js, index.asset.php
```

**Remove from generic spec:** `save.js`, plugin PHP, `arc-math.js` as the only math source.

### 17.3 Front-end output: `render.php`, not `save.js`

- Compute each card’s `left`, `top`, and `transform: rotate(...)` in **PHP** (same formulas as §7 / `arc-math.ts`) and output **escaped** inline `style` on `.nextora-arc-gallery__item`.
- Use **`wp_get_attachment_image( $id, 'large', false, [ 'alt' => … ] )`** when `images[].id` is set (align with **image gallery grid**); do not persist bare URLs only.
- Wrapper: **`get_block_wrapper_attributes()`** with section-level CSS variables (`--nextora-arc-*`), not only a custom root class.
- **Color attrs:** map preset slugs / hex via a helper like [`blocks/scrolling-promotion/render.php`](../../blocks/scrolling-promotion/render.php) `nextora_*_resolve_color()`.

### 17.4 Class and CSS variable naming

| Spec | Nextora |
|------|---------|
| `wp-block-arc-gallery-section` | `wp-block-nextora-arc-gallery-section` + BEM **`nextora-arc-gallery`** |
| `arc-gallery__*` | **`nextora-arc-gallery__*`** |
| `--ags-*` | **`--nextora-arc-*`** (e.g. `--nextora-arc-bg`, `--nextora-arc-padding-top`) |

Register block styles (optional presets from §15) in PHP with `register_block_style( 'nextora/arc-gallery-section', … )` and classes that set `--nextora-arc-*` overrides — same pattern as scrolling promotion.

### 17.5 Arc math: keep editor and server in sync

| Spec (§7, §16) | Nextora |
|----------------|---------|
| `arc-math.js` imported by `edit.js` and `save.js` | **`arc-math.ts`** — `calculateArcPositions()` exported for **`edit.tsx`** live preview |
| | **`render.php`** — PHP port of the same function (or thin wrapper in `inc/` if reused); **no drift** between TS and PHP |
| Inline styles from `save.js` | Inline styles from **`render.php`** only on the front |

**No `viewScript` for arc layout** — positions are fixed at render time. Responsive overrides stay **CSS-only** (§6.3 mobile grid), matching the spec.

Optional later enhancement: `view.ts` only to **recalculate on resize** above 768px — out of scope for v1 unless QA shows broken centering.

### 17.6 Scroll animation (`docs/blocks.md`)

This is a **content section** (heading + CTAs + decorative gallery). **Include:**

| Item | Nextora |
|------|---------|
| Attribute | **`enableScrollAnimation`** — `boolean`, default `true` |
| Sidebar | Panel **Animation** → **Animate on scroll** (standard help text from `docs/blocks.md`) |
| PHP | `data-nextora-scroll-reveal="1"` on **content wrapper** (`.nextora-arc-gallery__content`) or block root — not required on each image card |
| JS | **`view.ts`** — GSAP + ScrollTrigger, `once: true`, `prefers-reduced-motion: reduce` → no animation; pattern: [`blocks/image-gallery-grid/view.ts`](../../blocks/image-gallery-grid/view.ts) |

Arc hover lift (§14) remains **CSS**; scroll reveal is separate enter-viewport motion.

### 17.7 Design system and controls

**Prefer theme.json / block supports before duplicate pickers:**

| Spec attrs | Nextora approach |
|------------|------------------|
| `backgroundColor`, `textColor`, padding | **`supports.color`**, **`supports.spacing`** on block wrapper where possible |
| `eyebrowColor`, `primaryButtonBg`, … | Sidebar **Colors** panel for overrides only; empty = `var(--wp--preset--color--*)` |
| Typography on heading | **`supports.typography`** + `.nextora-arc-gallery__heading` using preset font sizes |
| Primary / secondary buttons | Reuse theme button tokens ([`resources/css/modules/components/buttons.css`](../../resources/css/modules/components/buttons.css)); BEM modifiers `nextora-arc-gallery__btn--primary` / `--link`; align visually with **hero** / **call-to-action** |

**Panel titles (inspector):** **Gallery images**, **Arc layout**, **Image style**, **Content**, **Buttons**, **Colors**, **Animation** — match [`docs/blocks.md`](../../blocks.md) wording.

### 17.8 Editor behavior

| Spec (§8) | Nextora |
|-----------|---------|
| `edit.js` + live arc | **`edit.tsx`** — compute positions with **`arc-math.ts`** on each render when attrs change (WYSIWYG arc) |
| `MediaUpload` gallery | Copy patterns from [`blocks/image-gallery-grid/edit.tsx`](../../blocks/image-gallery-grid/edit.tsx): `imageIds` or `images: { id, alt }[]`, reorder via **Up/Down** (no dnd-kit required v1) |
| RichText inline | **Eyebrow**, **heading**, button labels in canvas; URLs / toggles in sidebar |
| ServerSideRender-only preview | **Not sufficient** — spec requires real-time arc when sliders move; use React layout in editor |

Store **`imageIds: number[]`** plus optional **`imageAlts: Record<id, string>`** or `images: { id, alt }[]` — document one schema in `types.ts`.

### 17.9 Images attribute shape (recommended)

```json
"imageIds": { "type": "array", "default": [] },
"imageAlts": { "type": "object", "default": {} }
```

Or a single `images` array with `{ "id": number, "alt": string }` as in the spec — if used, **`url` is never saved**; resolve in PHP from attachment ID.

### 17.10 Accessibility adjustments

| Spec | Nextora |
|------|---------|
| `role="img"` on gallery | Prefer **`role="group"`** + `aria-label` on gallery; each **`<img>`** must have meaningful **`alt`** (required in editor when id set) |
| `prefers-reduced-motion` on hover | Keep §12 rules; also disable **scroll reveal** in `view.ts` when reduced motion |
| `primaryButtonIcon` Dashicon name | **Inline SVG** in PHP (16×16, `currentColor`) — theme does not load Dashicons on the front; optional attribute stores icon key (`heart`, `arrow`) mapped to SVG paths |

### 17.11 Responsive and CSS cautions

- Keep spec breakpoints (1024 / 768 / 480) in **`style.css`**.
- Avoid heavy **`!important`** stacks on mobile overrides; use `.nextora-arc-gallery--mobile-stack` modifier if needed.
- **`galleryOverflow`:** class `nextora-arc-gallery--overflow-visible` on section when true; default `overflow: hidden` on wrapper.

### 17.12 What not to add (v1)

- `@wordpress/scripts` / static `save.js` HTML in post content
- `viewScript` for arc positioning (unless resize recalc is required later)
- Dashicons on front-end buttons
- Duplicate of every color in sidebar when Global Styles already apply

### 17.13 Extensibility hooks (plan)

- `nextora_arc_gallery_section_images`
- `nextora_arc_gallery_section_wrapper_classes`
- `nextora_arc_gallery_section_wrapper_attributes`
- `nextora_arc_gallery_section_arc_positions` (filter computed positions array before markup)

### 17.14 Build and quality

- `npm run build:blocks` after TS/CSS changes; do not hand-edit `index.js` / `index.asset.php`
- `npm run lint:php` on `render.php` (PHPStan level 8)
- `npm run typecheck` for `arc-math.ts` / `edit.tsx`

### 17.15 Closest reference blocks

| Need | Block |
|------|--------|
| Media library + reorder | [`blocks/image-gallery-grid/`](../../blocks/image-gallery-grid/) |
| Section + heading + layout | [`blocks/hero-section/`](../../blocks/hero-section/), [`blocks/call-to-action/`](../../blocks/call-to-action/) |
| Dynamic render + color resolve | [`blocks/scrolling-promotion/`](../../blocks/scrolling-promotion/) |
| Scroll reveal + `view.ts` | [`blocks/image-gallery-grid/view.ts`](../../blocks/image-gallery-grid/view.ts) |

### 17.16 Acceptance criteria additions (Nextora)

16. Block passes **`npm run lint:php`** and **`npm run typecheck`**.
17. Editor arc updates **immediately** when arc radius / spread / image count changes (no full-page reload).
18. **`enableScrollAnimation`** toggle works; reduced motion disables scroll reveal and dampens hover lift per §12.
19. Images use attachment IDs and **`wp_get_attachment_image`** on the front (responsive `srcset`).
20. Buttons and colors align with **theme.json** presets when custom attrs are empty.