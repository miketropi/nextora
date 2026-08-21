# Implementation Plan: Template 4 for Box Image Block (`nextora/box-image`)

## 1. Overview & Objectives

Integrate **Template 4** into the `nextora/box-image` block, inspired by modern Step-by-Step / "How It Works" card interfaces, tailored to the WordPress Block system of the **Nextora** theme:

- **UI Inspiration**: Modern step-process card layout with prominent step numbering, rounded corners, subtle shadows, and smooth hover interactions.
- **Specific Adjustments for Theme Nextora**:
  1. **Remove Top Pin SVG Icon**: The original component featured a pin icon at the top; this will be omitted.
  2. **Automatic Step Counter (01, 02, 03...)**: Numbers are generated dynamically based on the item index (`sprintf('%02d', $index + 1)`), eliminating the need for manual badge input.
  3. **Image Integration**: Each card includes an image container with full support for theme options (`imageAspectRatio`, `imageFit`, custom upload/selection via WP Media Library).
  4. **Typography & Styling Standards**: Strictly adheres to the Nextora theme typography system (`--nextora-font-heading`, `--nextora-font-body`, theme font size presets from `theme.json`).
  5. **Action Link at Bottom**: Bottom action link with arrow icon (supports both button/link style and full-card clickable mode via `linkWrapCard`).
  6. **Gutenberg Editor Integration**:
     - Reuses all existing block controls.
     - Conditionally hides irrelevant fields when Template 4 is selected (e.g. manual `badge` field in the edit item modal).
     - Renders a 1:1 matching live preview in the Gutenberg canvas.
  7. **Backward Compatibility & Isolation**: Zero impact on existing templates (**Default, Template 1, Template 2, Template 3**).

---

## 2. HTML Markup Structure

### Frontend Render (`render.php`)
```html
<article class="nextora-box-image__card nextora-box-image__card--template4" style="...">
  <!-- 1. Image Wrapper -->
  <div class="nextora-box-image__image-wrap">
    <img class="nextora-box-image__card-image" src="..." alt="" loading="lazy" decoding="async" />
  </div>

  <!-- 2. Card Content Body -->
  <div class="nextora-box-image__card-body">
    <!-- Automatic Step Counter (01, 02, 03...) -->
    <span class="nextora-box-image__step-number" aria-hidden="true">01</span>

    <!-- Card Title -->
    <h4 class="nextora-box-image__title">Create Account</h4>

    <!-- Card Description -->
    <p class="nextora-box-image__description">
      Sign up in minutes. Enter your details and verify your email to get started.
    </p>

    <!-- Bottom Action Link (if showLink is enabled) -->
    <a class="nextora-box-image__link nextora-box-image__link--template4" href="...">
      <span>Read more</span>
      <span class="nextora-box-image__link-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </a>
  </div>
</article>
```
*(When `linkWrapCard` is enabled, the entire card is wrapped in an `<a>` tag, consistent with other templates).*

---

## 3. Typography & Styling Guidelines (CSS & Design System)

- **Font Family**:
  - Title (`.nextora-box-image__title`): `font-family: var(--nextora-font-heading, inherit);`
- **Full "How It Works" Stage Layout**:
  - **Lined Paper Grid Background**: A subtle horizontal line grid overlay (`linear-gradient(color-mix(in srgb, currentColor 8%, transparent) 1px, transparent 1px)` with `background-size: 100% 32px`) across the steps wrapper, paired with side gradient fades.
  - **Animated Connecting S-Curve**: A responsive SVG with dashed curve path (`stroke-dasharray="8 6"`) weaving from card to card with infinite dash loop animation (`@keyframes nextora-box-image-dash`).
  - **Staggered Zigzag Positions**: On desktop (>= 768px), cards alternate left/right with playful tilts (`rotate(8deg)` / `rotate(-8deg)`) and smooth hover lift with scale and rotation reset (`hover:rotate(0deg) hover:scale(1.05)`). On mobile (< 768px), cards stack vertically.
- **Card Envelope / Framed Box Aesthetics**:
  - **Outer Frame** (`.nextora-box-image__card--template4`): `border-radius: 25px; padding: 8px; background: #fff; box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.08); border: 1px solid rgba(0,0,0,0.08);`.
  - **Inner Box** (`.nextora-box-image__card-inner`): `border-radius: 16px; padding: 16px;` with themed background tints & borders (Orange, Blue, Purple or customized via item colors).
  - **Inside Content Structure**:
    1. **Image** (`.nextora-box-image__image-wrap`): `aspect-ratio: 16/10; border-radius: 10px; overflow: hidden; margin-bottom: 14px;`.
    2. **Automatic Step Number** (`.nextora-box-image__step-number`): `01`, `02`, `03`... with `font-size: 2.25rem; font-weight: 700; font-family: var(--nextora-font-heading); color: var(--nextora-step-accent);`.
    3. **Title** (`.nextora-box-image__title`): `font-size: 1.25rem; font-weight: 600; line-height: 1.25; margin: 0 0 8px;`.
    4. **Description** (`.nextora-box-image__description`): `font-size: 0.84375rem; line-height: 1.5; margin: 0 0 14px;`.
    5. **Bottom Action Link** (`.nextora-box-image__link--template4`): `font-size: 0.8125rem; font-weight: 600; display: inline-flex; align-items: center; gap: 6px; margin-top: auto;` with arrow icon.

### 3. `blocks/box-image/edit.tsx`
- Add Template 4 to `templateOptions`:
  ```ts
  { label: __('Template 4', 'nextora'), value: 'template4' },
  ```
- Inspector Controls & Item Modal:
  - When `template === 'template4'`:
    - **Item Edit Modal**: Added a dedicated **Accent Color** picker for each card. The default accent (e.g. Card 1 = Orange `#f97316`, Card 2 = Blue `#2563eb`, Card 3 = Purple `#9333ea`) is shown as the default value in the picker. Customizing the Accent color automatically updates the step number, link, inner background tint, and border for that card.
    - **Outer Block Colors**: Hide global accent/link color settings so only general colors (outer card background, outer card border, title color, description color) are configured globally.
    - **Step Vertical Gap**: Added `stepVerticalGap` (default `480px`, range `340px`–`700px`) in the Layout panel to control the vertical distance and breathing room between cards in the zigzag layout.
    - **Sequential SVG Path Animation**: When `scrollAnimationStyle === 'sequential'`, the animated connecting S-curve path weaves dynamically from card to card, drawing each line segment just before revealing the corresponding step card, then seamlessly transitioning into the continuous marching dashed loop.
    - **Mobile Card Gap**: Added `spaceBetween` control to customize card spacing on mobile screens.
    - Hide manual `Badge` field in the modal when `template === 'template4'` (as step numbers are automatic).
  - Keep all relevant controls: Image, Title, Description, Show link, Entire card clickable, Link label, Link URL, Open in new tab.
- Editor Canvas Preview:
  - Add JSX branch for `template === 'template4'`.
  - Display automatic step counter (`01`, `02`, `03`...) matching the item's index.
  - Apply custom or default Accent color to the inner card style in real-time.
  - Dynamically recalculate stage height and SVG curve path based on `stepVerticalGap`.
  - Retain the item edit overlay button for seamless in-editor editing.

### 4. `blocks/box-image/style.css`
- Add scoped CSS rules for `.nextora-box-image--template-template4` and `.nextora-box-image__card--template4`.
- Style `.nextora-box-image__step-number` with theme typography and color accents.
- Style `.nextora-box-image__card--template4` with padding, borders, radius, and hover transitions.
- Style `.nextora-box-image__link--template4` and its arrow icon.
- Include media queries for Tablet and Mobile breakpoints.
- Support `.nextora-box-image--no-card-hover` class when hover effects are disabled.

### 5. `blocks/box-image/editor.css`
- Add any required editor-specific styles to ensure the preview in Gutenberg matches the front-end layout exactly.

---

## 5. Verification & Quality Assurance Plan

1. **Template 4 Verification**:
   - Add a `box-image` block and select Template 4.
   - Add/remove/reorder items -> Verify that step numbers update dynamically (`01`, `02`, `03`, `04`...).
   - Upload images, enter titles and descriptions, configure links -> Check render accuracy in both Editor and Frontend.
   - Switch between **Grid** and **Slider** modes -> Validate responsiveness and Swiper behavior.
   - Test color customizations (Card background, text colors, link colors, border radius).
2. **Regression Testing**:
   - Switch to **Default**, **Template 1**, **Template 2**, and **Template 3** -> Ensure zero layout or functional regressions.
3. **Build Validation**:
   - Verify TypeScript compilation and Webpack asset builds without any errors (`npm run build` / `npm run watch`).
