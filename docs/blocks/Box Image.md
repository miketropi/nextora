# Block: Box Image

**Version:** 1.2
**Status:** Implemented as **`nextora/box-image`** in [`blocks/box-image/`](../../blocks/box-image/).
**For:** AI Agent Development

Reference mocks:
- Template 1 (`template1` — Programs): [`docs/blocks/home/09_alonepro-education-home.html`](./home/09_alonepro-education-home.html) — `.prog-grid` / `.prog` cards
- Template 2 (`template2` — Play): same HTML — `.play-grid` / `.pcard` cards

---

## 1. Template system overview

The block has a **Template** selector in the Layout inspector panel. It's the first control and controls the entire card design. Each template maps to a distinct HTML/CSS design.

| Template | `block.json` value | CSS class suffix | Card class suffix |
|----------|-------------------|------------------|-------------------|
| Default | `"default"` | — | — |
| Programs-style | `"template1"` | `--template-template1` | `--card--template1` |
| Play-style | `"template2"` | `--template-template2` | `--card--template2` |

### 1.1 Template selector in edit.tsx

```ts
const templateOptions: { label: string; value: BoxImageTemplate }[] = [
    { label: __('Default', 'nextora'), value: 'default' },
    { label: __('Template 1', 'nextora'), value: 'template1' },
    { label: __('Template 2', 'nextora'), value: 'template2' },
];
```

Auto-defaults on template change:
```ts
if (tpl === 'template1') {
    patch.layoutMode = 'grid'; patch.gridColumns = 3;
    patch.imageAspectRatio = '4/3'; patch.cardBorderRadius = 28; patch.cardBorderWidth = 2;
} else if (tpl === 'template2') {
    patch.layoutMode = 'grid'; patch.gridColumns = 4;
    patch.imageAspectRatio = '1/1'; patch.cardBorderRadius = 24; patch.cardBorderWidth = 0;
}
```

### 1.2 How to add a new template

1. **types.ts** — Add to `BoxImageTemplate` union:
   ```ts
   export type BoxImageTemplate = 'default' | 'template1' | 'template2' | 'newtemplate';
   ```

2. **edit.tsx** — Add option to `templateOptions`, handle auto-defaults in `onChange`, add editor preview branch (card class + structure):
   ```tsx
   className={... template === 'newtemplate' ? ' nextora-box-image__card--newtemplate' : '' ...}
   ```
   Render card structure matching the template's design.

3. **render.php** — Add to validation array, set `$is_*` flag, output correct `--card--newtemplate` class and structure. Handle link class if template has unique link style:
   ```php
   } elseif ('newtemplate' === $template) {
       $out .= '<article class="nextora-box-image__card nextora-box-image__card--newtemplate"' . $card_style . '>';
   }
   ```

4. **style.css** — Add CSS block scoped to `--template-newtemplate` and `--card--newtemplate`. Include:
   - Card layout (flex direction, border-radius, padding, background)
   - Image wrapper sizing
   - Title, description, link styles
   - Hover effects (only for `--grid-active` to disable in slider)
   - `@media` responsive breakpoints matching the mock design
   - Card hover background/text color overrides (prevent main `.nextora-box-image__card:hover` from leaking in)

5. **editor.css** — Add editor preview rules:
   - Grid mode: `--layout-grid .nextora-box-image__cards { display: grid; ... }`
   - Slider mode: `:not(.nextora-box-image--layout-grid) .nextora-box-image__cards { display: flex; overflow-x: auto; ... }`
   - Card sizing for slider: `flex: 0 0 min(..., 80vw); scroll-snap-align: start;`
   - Card sizing for grid: `flex: unset; max-width: none;`
   - Hover overrides to disable editor pseudo-states

6. **Build**: `npm run build:blocks`

---

## 2. CSS architecture

### 2.1 Cascade order in style.css

```
1. Base card styles (.nextora-box-image__card)
2. General link styles
3. Template-specific styles (.nextora-box-image--template-*)
4. Template responsive @media blocks
5. Reduced motion @media
```

### 2.2 Color variable chain

**Per-item overrides** (inline style on `<article>`):
- `--nextora-box-image-item-bg`
- `--nextora-box-image-item-title-color`
- `--nextora-box-image-item-desc-color`
- `--nextora-box-image-item-link-color`

**Global settings** (block wrapper CSS vars from `render.php` `$color_keys`):
- `--nextora-box-image-card-bg`
- `--nextora-box-image-card-title-color`
- `--nextora-box-image-card-desc-color`
- `--nextora-box-image-link-color`
- `--nextora-box-image-link-hover-color`
- `--nextora-box-image-card-border-color`
- `--nextora-box-image-card-border-width` (px)
- `--nextora-box-image-card-radius` (px)
- `--nextora-box-image-dot-color` / `--nextora-box-image-dot-active` / `--nextora-box-image-arrow-color`

**CSS selector pattern** (per-item → global → preset fallback):
```css
.nextora-box-image--template-template1 .nextora-box-image__card-body .nextora-box-image__link {
    color: var(--nextora-box-image-item-link-color, var(--nextora-box-image-link-color, var(--wp--preset--color--primary, ...)));
}
```

### 2.3 Hover scoping

Template card hover effects (transform + shadow) are **only active in grid mode**:
```css
.nextora-box-image--template-template1.nextora-box-image--grid-active .nextora-box-image__card--template1:hover {
    transform: translateY(-8px);
    box-shadow: ...;
}
```

The `--grid-active` class is added by `view.ts` when in grid mode (desktop). In slider mode (tablet/mobile) and in the editor, hover effects are disabled.

### 2.4 Editor vs front-end

- **Editor**: `@import './style.css'` + editor-specific overrides. Editor rules come AFTER the import so they win in cascade.
- **Front-end**: `style.css` only, via block.json `style` handle.
- **view.css**: auto-generated from view.ts imports (Swiper CSS + style.css).

---

## 3. Template 1 — Programs (`template1`)

**Design source**: `09_alonepro-education-home.html` — section `#programs`, `.prog-grid`

### 3.1 Card structure (render.php / edit.tsx)

```html
<article class="nextora-box-image__card nextora-box-image__card--template1">
    <div class="nextora-box-image__card-inner">
        <div class="nextora-box-image__image-wrap">
            <img ... >
            <span class="nextora-box-image__badge">Ages 0–2</span>  <!-- only this template -->
        </div>
        <div class="nextora-box-image__card-body">
            <h4 class="nextora-box-image__title">...</h4>
            <p class="nextora-box-image__description">...</p>
            <a class="nextora-box-image__link wp-block-button__link">...</a>
        </div>
    </div>
</article>
```

### 3.2 Key styles

| Element | Value | Notes |
|---------|-------|-------|
| Card border-radius | `28px` | auto-set on template select |
| Card border | `2px` | semi-transparent contrast (0.12 alpha) |
| Image wrap | `padding: 26px 26px 0` | image corners 20px |
| Badge | absolute top:38px left:38px | pill shape, white bg, primary text |
| Body | `padding: 20px 26px 30px` | flex column, title/desc centered |
| Link | outlined pill button | `border-radius: 50px; padding: 14px 28px` |
| Hover | `translateY(-8px)` + shadow | grid mode only |

### 3.3 Responsive

| Breakpoint | Image padding | Badge pos | Body padding | Title size | Link padding |
|------------|--------------|-----------|-------------|------------|-------------|
| Desktop | 26px | 38px | 20px 26px 30px | 1.5rem | 14px 28px |
| ≤860px | 18px | 28px | 16px 18px 24px | 1.25rem | 12px 22px |
| ≤480px | 14px | 22px | 14px 14px 20px | 1.125rem | 10px 20px |

### 3.4 Template-specific fields

- **Badge** (TextControl in modal) — overlay pill on image. Only visible in modal when `template === 'template1'`.

---

## 4. Template 2 — Play (`template2`)

**Design source**: `09_alonepro-education-home.html` — section `.play-grid`, `.pcard`

### 4.1 Card structure

```html
<article class="nextora-box-image__card nextora-box-image__card--template2">
    <div class="nextora-box-image__image-wrap">
        <img ... >  <!-- circular avatar -->
    </div>
    <h4 class="nextora-box-image__title">...</h4>
    <p class="nextora-box-image__description">...</p>
    <a class="nextora-box-image__link nextora-box-image__link--template2">...</a>
</article>
```

### 4.2 Key styles

| Element | Value | Notes |
|---------|-------|-------|
| Card border-radius | `24px` | no card border |
| Card background | `base` preset (white) | `--nextora-box-image-card-bg` fallback |
| Card padding | `24px` | text-align center, items center |
| Image wrap | `96×96px` circle | `border-radius: 50%; border: 4px solid` |
| Avatar border color | `--nextora-box-image-item-link-color` → link color chain | colored ring per-item |
| Title | `1.1875rem`, `margin-bottom: 6px` | — |
| Description | `0.8125rem`, `margin-bottom: 12px` | — |
| Link | inline text with arrow | `font-size: 0.84375rem; font-weight: 600` |
| Hover | `translateY(-6px)` | grid mode only |

### 4.3 Responsive

| Breakpoint | Avatar size | Border | Card padding | Title size | Description | Link size |
|------------|-------------|--------|-------------|------------|-------------|-----------|
| Desktop | 96px | 4px | 24px | 1.1875rem | 0.8125rem | 0.84375rem |
| ≤880px | 80px | 4px | 20px | 1.0625rem | — | — |
| ≤480px | 72px | 3px | 16px | 1rem | 0.75rem | 0.78125rem |

### 4.4 Template-specific behavior

- **Aspect ratio**: Hidden from Image panel (avatar is always 1:1 circle).
- **Badge**: Not applicable (hidden in modal).

---

## 5. Color system

### 5.1 Global colors (PanelColorSettings — sidebar Colors tab)

| Attribute | CSS Variable | Applies to |
|-----------|-------------|------------|
| `cardBorderColor` | `--nextora-box-image-card-border-color` | All templates |
| `cardBackgroundColor` | `--nextora-box-image-card-bg` | All templates |
| `cardTitleColor` | `--nextora-box-image-card-title-color` | All templates |
| `cardDescriptionColor` | `--nextora-box-image-card-desc-color` | All templates |
| `linkColor` | `--nextora-box-image-link-color` | All templates |
| `linkHoverColor` | `--nextora-box-image-link-hover-color` | All templates |
| `paginationColor` | `--nextora-box-image-dot-color` | Slider/carousel |
| `paginationActiveColor` | `--nextora-box-image-dot-active` | Slider/carousel |
| `arrowColor` | `--nextora-box-image-arrow-color` | Slider/carousel |

### 5.2 Per-item overrides (stored in `items[].*`, applied as inline CSS vars)

| Item field | CSS Variable | Purpose |
|-----------|-------------|---------|
| `backgroundColor` | `--nextora-box-image-item-bg` | Card background per item |
| `titleColor` | `--nextora-box-image-item-title-color` | Title color per item |
| `descriptionColor` | `--nextora-box-image-item-desc-color` | Description color per item |
| `linkColor` | `--nextora-box-image-item-link-color` | Link color per item (also avatar border for template2) |

Per-item colors are **not exposed in the modal UI** — they are set programmatically for template1 defaults and stored in block attributes. They can be re-enabled by adding `ColorPalette` components back to the modal.

---

## 6. Items array schema

### 6.1 Per-item fields (types.ts / block.json)

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `id` | `string` | UUID | Stable key |
| `title` | `string` | `""` | Card heading |
| `description` | `string` | `""` | Card body text |
| `showLink` | `boolean` | `true` | Show/hide link |
| `linkLabel` | `string` | `"Read more"` | Link text |
| `linkUrl` | `string` | `"#"` | Link destination |
| `linkTarget` | `"_self" \| "_blank"` | `"_self"` | Open in new tab |
| `imageId` | `number` | `0` | WP media attachment ID |
| `imageUrl` | `string` | `""` | External image URL (editor fallback) |
| `backgroundColor` | `string` | `""` | Per-item card background hex |
| `titleColor` | `string` | `""` | Per-item title color hex |
| `descriptionColor` | `string` | `""` | Per-item description color hex |
| `linkColor` | `string` | `""` | Per-item link/border color hex |
| `badge` | `string` | `""` | Badge text (template1 only) |

### 6.2 Item normalization

`item-utils.ts` `normalizeItems()` ensures all fields exist with sensible defaults. Missing fields in old data get empty strings / default booleans. `createItemId()` generates `crypto.randomUUID()` with fallback.

---

## 7. Inspector panels

| Panel | Contents |
|-------|----------|
| **Items** | Reorder, add/remove items; Edit opens large modal |
| **Layout** | Template (first), Desktop layout, Grid columns/min-width (grid only), Cards (gap, min-height, border-width, radius), Carousel, Autoplay, Navigation |
| **Image** | Aspect ratio (hidden for template2), Image fit |
| **Colors** | Global card/link/pagination/arrow colors |
| **Animation** | Animate on scroll toggle |
| **Advanced** | WP block supports |

---

## 8. Class naming conventions

| Element | Class |
|---------|-------|
| Block wrapper | `nextora-box-image` |
| Template modifier | `nextora-box-image--template-{name}` |
| Layout modifier | `nextora-box-image--layout-{slider\|grid}` |
| Grid active | `nextora-box-image--grid-active` (JS) |
| Loading/ready | `nextora-box-image--loading` / `--ready` |
| Carousel root | `nextora-box-image__carousel-root` |
| Card | `nextora-box-image__card` |
| Card template modifier | `nextora-box-image__card--{name}` |
| Card editable | `nextora-box-image__card--editable` (editor) |
| Card inner | `nextora-box-image__card-inner` (template1 only) |
| Image wrap | `nextora-box-image__image-wrap` |
| Badge | `nextora-box-image__badge` (template1 only) |
| Card body | `nextora-box-image__card-body` (template1 only) |
| Title | `nextora-box-image__title` |
| Description | `nextora-box-image__description` |
| Link | `nextora-box-image__link` |
| Link template modifier | `nextora-box-image__link--{name}` |
| Pagination | `nextora-box-image__pagination` |
| Arrows | `nextora-box-image__arrow` / `--prev` / `--next` |
| Modal form | `nextora-box-image__item-modal-form` (+ `-image`, `-fields`, `-color`) |

---

## 9. File map

```text
blocks/box-image/
├── block.json              ← attributes schema, item defaults, supports
├── index.tsx               ← registerBlockType entry
├── edit.tsx                ← inspector + modal + editor preview (React)
├── types.ts                ← BoxImageItem, BoxImageAttributes, BoxImageTemplate
├── item-utils.ts           ← normalizeItems, buildStyleVars, createItemId
├── icon-catalog.ts         ← storedColorToCss helper
├── spacing-utils.ts        ← (not used by box-image; kept for consistency)
├── font-family-utils.ts    ← (not used)
├── typography-utils.ts     ← (not used)
├── register-editor.php     ← window.nextoraBoxImage placeholder URL
├── render.php              ← PHP card loop, CSS vars, swiper opts
├── style.css               ← front-end styles (all templates + responsive)
├── editor.css              ← editor-specific overrides
├── view.ts                 ← Swiper init, grid/slider switch, scroll reveal
└── (generated) index.js, index.asset.php, view.js, view.css
```

Reuses [`blocks/advanced-icon/color-utils.ts`](../../blocks/advanced-icon/color-utils.ts) for `useThemeColorPalette`, `colorValueForPicker`, `normalizeColorForStorage`, `getMergedPaletteEntries`.

---

## 10. Build and quality

- **Build**: `npm run build:blocks` (or `npm run watch`)
- **PHP lint**: `npm run lint:php:all` (PHPStan level 8 + PHP CS Fixer)
- **TypeScript**: `npm run typecheck` (tsc --noEmit)
- **Pre-commit**: Husky runs lint-staged + `npm run precommit`

Generated files (`index.js`, `index.asset.php`, `view.js`, `view.css`) are **not** source — edit `*.ts`, `*.css`, `*.php` only.
