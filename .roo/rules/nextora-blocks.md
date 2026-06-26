# Nextora — theme blocks

> Applies to: `blocks/**`. Tokens, animation toggle, JS init, consistent controls.

Full standards: [`docs/blocks.md`](../../docs/blocks.md). Skills: `nextora-add-theme-block`, `nextora-theme-styling-and-tokens`.

## Registration & build

- Folders under `blocks/` with `block.json` → [`blocks/blocks.php`](../../blocks/blocks.php).
- Built **`index.js`** + **`index.asset.php`** via [`scripts/build-blocks.mjs`](../../scripts/build-blocks.mjs); `@wordpress/*` → `window.wp.*`.
- **`view.ts`** builds to `view.js` via esbuild in the build pipeline.
- Scaffold: `npm run gen -- --name=slug --ns=nextora` → **`npm run build:blocks`**.

## Theme scheme (required)

- Default styling from **`theme.json`** presets via `supports.color` / `spacing` / `typography` and `get_block_wrapper_attributes()`.
- CSS uses **`var(--wp--preset--color--*)`** / `@theme` tokens — **NEVER** ad-hoc hex/rgb hard-coded colors.
- All colors **MUST** come from the active style variation's color palette (e.g., `styles/children-orphanage.json`).

### Color usage rules

1. **Primary colors:** Use CSS variables with fallback matching the active style scheme:
   ```css
   color: var(--wp--preset--color--contrast, #2E1A47);
   background: var(--wp--preset--color--secondary, #FFC247);
   ```

2. **Color variations (opacity/transparency):** Use `rgb(from var(...))` or `color-mix()`:
   ```css
   /* Opacity variant */
   border: 1px solid rgb(from var(--wp--preset--color--contrast, #2E1A47) r g b / 0.2);
   
   /* Lightness variant */
   background: color-mix(in srgb, var(--wp--preset--color--secondary) 85%, white);
   ```

3. **Gradients:** Build from palette colors using `color-mix()` for tints/shades:
   ```css
   background: linear-gradient(140deg,
     color-mix(in srgb, var(--wp--preset--color--secondary) 85%, white),
     var(--wp--preset--color--secondary) 55%,
     color-mix(in srgb, var(--wp--preset--color--secondary) 90%, black)
   );
   ```

4. **Shadows:** Extract from palette colors with `rgb(from var(...))`:
   ```css
   box-shadow: 0 8px 16px rgb(from var(--wp--preset--color--contrast) r g b / 0.15);
   ```

### Forbidden patterns

```text
❌ background: #FFC247; (hard-coded hex)
❌ background: linear-gradient(#ffd876, #FFC247, #f0ab2e); (mixed hard-coded)
❌ box-shadow: 0 8px 16px rgba(224, 160, 48, 0.75); (hard-coded rgba)
❌ border: 1px solid rgba(46, 26, 71, 0.2); (hard-coded rgba)

✅ background: var(--wp--preset--color--secondary, #FFC247);
✅ background: linear-gradient(140deg, color-mix(...), var(--wp--preset--color--secondary), ...);
✅ box-shadow: 0 8px 16px rgb(from var(--wp--preset--color--secondary) r g b / 0.75);
✅ border: 1px solid rgb(from var(--wp--preset--color--contrast) r g b / 0.2);
```

## Style overrides (agent discretion)

- Add sidebar **Colors** / **Appearance** controls only when presets are insufficient; use **scoped** attribute names (`surfaceBackgroundColor`, `iconColor`) — never `backgroundColor` / `textColor` for inner elements unless the block uses native WP wrapper colour only. Store preset slugs; map in `render.php`. See [`docs/blocks/Theme Icon Block.md`](../../docs/blocks/Theme%20Icon%20Block.md) § Custom color settings.

## Scroll animation (content blocks)

- Attribute: **`enableScrollAnimation`** (boolean, default `true`).
- Sidebar: panel **Animation**, toggle **Animate on scroll** + standard help text (see `docs/blocks.md`).
- PHP: `data-nextora-scroll-reveal="1"` when on; JS in `view.ts` with GSAP ScrollTrigger, **`once: true`**, skip if **`prefers-reduced-motion: reduce`**.
- Reference: [`blocks/image-gallery-grid/view.ts`](../../blocks/image-gallery-grid/view.ts).

## Editor & render conventions

- `block.json`: use `textdomain` `nextora`, category `theme` for chrome blocks or `media`/`design` for content blocks.
- `render.php`: escape output; `get_block_wrapper_attributes()`; guard `WP_Block` with `instanceof` before `render()`.
- `edit.tsx`: align panel titles (**Settings**, **Layout**, **Animation**, **Colors**) with existing blocks; use consistent help text.
- `save.tsx`: minimal or server-rendered — prefer `useBlockProps.save()` with no dynamic content in save.

## JS layout (slider / carousel)

- Reserve space in CSS; root **`nextora-{slug}--loading`** → **`--ready`** after init.
- Use **`data-nextora-{slug}-init-pending`** / **`data-nextora-{slug}-inited`**; idempotent init.
- Reference: [`blocks/image-gallery-slide/view.ts`](../../blocks/image-gallery-slide/view.ts).

## Reference blocks

| Block | Pattern |
|-------|---------|
| `nextora/header` | Nav ARIA, drawer portal, Woo mini cart dialog |
| `nextora/spotlight-search` | Modal + REST search |
| `nextora/hero-section` | Layout, supports, scroll reveal |
| `nextora/scrolling-promotion` | CSS-only marquee, `render.php`, repeater items |
| `nextora/image-gallery-grid` | Scroll reveal (GSAP) |
| `nextora/image-gallery-slide` | Swiper init / loading states |
| `nextora/testimonial-carousel` | Fade Swiper, `testimonials[]` repeater |
| `nextora/call-to-action` | Override attributes, scroll reveal |
| `nextora/page-title` | Dynamic heading, reduced motion |
| `nextora/post-grid` | Query block, pagination |

## Consistency

- **Shared components** — When two or more blocks share the same type of UI (buttons, carousel arrows, pagination dots, card hovers, scroll reveal), copy the reference block's styling exactly: same tokens, font sizes, spacing, weights, border widths, hover states, and transition values. Before adding a new button or carousel, check `docs/blocks.md` § Shared component styles for the canonical reference block.
- PHP `render.php`: run **`npm run lint:php`** + **`npm run lint:php:check`** after edits (see [`nextora-php.md`](.roo/rules/nextora-php.md)).
- `view.ts` / block CSS: run **`npm run build:blocks`** (or full **`npm run build`**).

```text
❌ New block's "View All" button uses 13px / weight 500 / 1px border while team-section uses 0.875rem / weight 600 / 1.5px
✅ Copy team-section button styling exactly — fonts, gap, padding, border, hover, icon class, colour fallback
❌ New block with hard-coded #333 and no scroll toggle
✅ Presets + optional overrides + enableScrollAnimation + build:blocks
```
