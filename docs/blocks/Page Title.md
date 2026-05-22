# Block: Page Title

## Overview

The **Page Title** block is a new Nextora theme block that renders the page title area for internal pages.

It is a **dynamic wrapper block** that can host native WordPress inner blocks, most importantly:

- `core/post-title` — the page / post `<h1>`
- `core/breadcrumbs` — the breadcrumb trail

The wrapper owns the section layout, background, spacing, and optional motion behavior. The inner blocks remain native WordPress blocks and are styled through scoped theme CSS.

---

## Theme context

This block must follow Nextora conventions:

- **Block name**: `nextora/page-title`
- **Category**: `theme`
- **Text domain**: `nextora`
- **Source of truth**: `block.json`, `edit.tsx`, `save.tsx`, `render.php`, `style.css`, `editor.css`, `view.ts`
- **Do not** hand-edit generated `index.js` or `index.asset.php`

This block is intended for the theme’s internal page header area, so it should integrate cleanly with `theme.json`, block presets, and scoped block styling.

---

## Scope and intent

`nextora/page-title` is a theme chrome block for internal content pages.

Use it for page-level headings where the title area should include:

- a consistent section layout
- optional breadcrumb navigation
- optional background treatment
- optional scroll reveal / motion behavior

The block should stay focused on wrapper behavior. The actual title markup remains the native `core/post-title` block.

---

## Architecture

```
nextora/page-title            ← custom wrapper block
├── core/breadcrumbs           ← native WordPress block
└── core/post-title            ← native WordPress block
```

### Why this approach

- Keeps title and breadcrumb markup native to WordPress.
- Lets the theme control layout and background at the wrapper level.
- Avoids duplicating core markup in PHP.
- Keeps the block aligned with FSE / Site Editor workflows.

---

## Block registration

The block should be registered as a dynamic block with `render.php`.

### Expected shape

- `block.json` defines attributes, supports, and template.
- `save.tsx` returns `null`.
- `render.php` outputs the wrapper markup and renders the inner block content provided by WordPress.
- `view.ts` is only used if the block needs front-end behavior such as scroll effects.

---

## Inner block template

The default template should place breadcrumbs above the title.

```json
{
  "name": "nextora/page-title",
  "template": [
    [
      "core/breadcrumbs",
      {
        "showHomeLink": true,
        "separator": "/"
      }
    ],
    [
      "core/post-title",
      {
        "level": 1,
        "isLink": false,
        "textAlign": "left"
      }
    ]
  ],
  "templateLock": "contentOnly"
}
```

> `templateLock: "contentOnly"` keeps the inner block structure fixed while still allowing users to edit block settings and content where applicable.

---

## Design direction

The Page Title block is a theme chrome block, so it should feel consistent with the site header and global layout.

Recommended visual direction:

- wide / full-width section
- generous vertical padding
- strong title hierarchy
- subtle breadcrumb styling
- background support through color, image, or video when needed
- accessible text contrast in all states

Use theme presets and tokens instead of hardcoded values wherever possible.

---

## Suggested attributes

These belong to `nextora/page-title` only.

| Attribute | Type | Default | Purpose |
|---|---:|---:|---|
| `backgroundType` | `string` | `color` | Background mode: `color`, `image`, or `video` |
| `backgroundColor` | `string` | `""` | Preset slug or custom color for solid background |
| `backgroundImageId` | `number` | `0` | Selected media attachment ID |
| `backgroundImageUrl` | `string` | `""` | Selected image URL |
| `backgroundVideoUrl` | `string` | `""` | Video URL for background mode |
| `overlayColor` | `string` | `""` | Overlay color for image/video mode |
| `overlayOpacity` | `number` | `0.3` | Overlay opacity from `0` to `1` |
| `textColor` | `string` | `""` | Optional text override for the wrapper |
| `minHeight` | `string` | `"320px"` | Minimum section height |
| `enableParallax` | `boolean` | `false` | Enables background parallax behavior |
| `parallaxSpeed` | `number` | `0.4` | Parallax intensity when enabled |
| `enableScrollAnimation` | `boolean` | `true` | Optional reveal animation toggle for content |

If the final implementation does not need one of these overrides, prefer `theme.json`, block supports, or scoped CSS instead of adding more custom attributes.

---

## Supports

Recommended supports for the wrapper block:

- `align`: `full`
- `color`: enabled when the block needs user-controlled background / text color
- `spacing`: enabled if the block exposes padding or margin controls
- `typography`: only if the block needs direct typography controls beyond inner blocks

Keep the block focused on layout and wrapper behavior. Typography should mostly come from the inner `core/post-title` block and the theme presets.

---

## Core block styling

The wrapper should scope styling to the inner core blocks instead of replacing their markup.

### Breadcrumbs

- small, muted, and secondary to the title
- usually upper-level spacing above the title
- should inherit the wrapper text color unless explicitly overridden

### Post title

- large, bold, and high-contrast
- should remain a proper `<h1>`
- should not be re-rendered manually by the wrapper

The wrapper CSS should scope styles under `.wp-block-nextora-page-title`.

---

## Render output

The PHP render callback should:

- skip rendering on the front page if the design calls for that
- sanitize all attribute values
- add `get_block_wrapper_attributes()` where appropriate
- render background markup only when required
- output `data-nextora-scroll-reveal="1"` when scroll animation is enabled
- output any parallax-related data attributes only when parallax is enabled

### High-level structure

```html
<section class="wp-block-nextora-page-title ...">
  <div class="page-title__bg" aria-hidden="true"></div>
  <div class="page-title__inner">
    <!-- WordPress rendered InnerBlocks content -->
  </div>
</section>
```

Use separate elements for background and content so the layout can be styled cleanly and safely.

---

## Front-end behavior

If the block includes motion, the behavior should follow Nextora’s block standards:

- respect `prefers-reduced-motion`
- only initialize when the relevant `data-*` attribute is present
- keep initialization idempotent
- avoid layout jumps on first paint

If scroll reveal is used, follow the pattern described in `docs/blocks.md` and use the standard `enableScrollAnimation` toggle.

If parallax is used, keep it lightweight and disable it on reduced motion.

---

## Editor controls

Keep the inspector UI consistent with the theme’s existing control patterns.

### Suggested panels

**Layout**
- Minimum height
- Alignment / width if relevant
- Text color override if needed

**Background**
- Background type
- Background color / image / video controls
- Overlay color and opacity when needed

**Animation**
- Animate on scroll toggle
- Parallax toggle if the design requires it

Use clear, theme-friendly labels and short help text. Prefer consistent naming like “Background image”, “Overlay color”, and “Animate on scroll”.

---

## CSS guidance

Use theme presets and tokens:

- `var(--wp--preset--color--*)`
- `var(--wp--preset--font-size--*)`
- `var(--wp--preset--spacing--*)`
- shared `--nextora-*` tokens from `resources/css/app.css`

Avoid raw colors unless the attribute specifically stores a custom user-picked value.

If the block needs loading / ready states or motion states, keep them in the block’s own stylesheet and make them easy to reason about.

---

## File structure

Suggested block files:

```
blocks/
└── page-title/
    ├── block.json
    ├── edit.tsx
    ├── save.tsx
    ├── render.php
    ├── style.css
    ├── editor.css
    ├── view.ts
    └── index.tsx
```

Generated build artifacts such as `index.js` and `index.asset.php` should not be edited by hand.

---

## Implementation checklist

- [ ] `block.json` uses `nextora/page-title` and `textdomain: nextora`
- [ ] `render.php` is dynamic and sanitizes all output
- [ ] Inner block template is locked appropriately
- [ ] Styles use theme presets / tokens and scope correctly
- [ ] `enableScrollAnimation` is included if the block animates on scroll
- [ ] `view.ts` respects reduced motion and uses idempotent init
- [ ] Build output is regenerated with the theme’s block build workflow

---

## Notes for the implementation phase

This document is a planning spec. When implementation starts, the block should be adapted to the Nextora codebase and build pipeline rather than treated as a generic WordPress example.
