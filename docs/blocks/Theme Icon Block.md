# Block: Theme Icon

## Overview

The **Theme Icon** block (`nextora/icon`) renders a single icon in two source modes:

| Mode | Description |
|------|-------------|
| **Theme icon** | Editor opens a searchable Lucide picker; front end outputs inline `<svg>`. |
| **Custom upload** | Editor picks an image from the Media Library; front end outputs `<img>`. |

This is a **single self-contained dynamic block** — no inner blocks. Markup is produced in `render.php`; the editor uses TypeScript (`edit.tsx`) for the picker and inspector. Optional scroll reveal runs via `view.ts` when **Animate on scroll** is enabled.

**Design direction:**

- **Theme icons:** Lucide stroke SVG, `currentColor` by default (inherits `supports.color` text)
- **Uploaded icons:** `<img>` only (never inline SVG — XSS safety)
- **Layout:** Flex alignment (`left` / `center` / `right`); optional stacked/framed surface; optional link wrapper
- **Motion:** Optional GSAP scroll reveal (`enableScrollAnimation`); respects `prefers-reduced-motion`

---

## Theme context

This block belongs to the **Nextora** block theme. Follow theme conventions — `nextora/*` namespace, `nextora` text domain, `nextora_` PHP prefix.

| Item | Value |
|------|--------|
| **Block name** | `nextora/icon` |
| **Category** | `design` (pairs with `nextora/counters`, `nextora/call-to-action`) |
| **Text domain** | `nextora` |
| **PHP prefix** | `nextora_` |
| **Constants** | `NEXTORA_DIR`, `NEXTORA_URI` ([`functions.php`](../../functions.php)) |
| **Registration** | Auto via [`blocks/blocks.php`](../../blocks/blocks.php) — `get_template_directory()/blocks` |
| **Source of truth** | `block.json`, `index.tsx`, `edit.tsx`, `render.php`, `lucide.php`, `view.ts`, `style.css`, `editor.css` |
| **Build** | `npm run build:blocks` (or `npm run watch`) — do **not** hand-edit `index.js` / `index.asset.php` / `view.js` |
| **Scaffold** | `npm run gen -- --name=icon --ns=nextora --category=design` |
| **Icon data build** | `npm run build:icons` — generates `assets/data/lucide-icons.json` |

Read first: [`AGENTS.md`](../../AGENTS.md), [`docs/blocks.md`](../blocks.md), skills **nextora-add-theme-block** and **nextora-theme-styling-and-tokens**. Rules: `.cursor/rules/nextora-blocks.mdc`, `.cursor/rules/nextora-a11y-blocks.mdc`, `.cursor/rules/nextora-php.mdc`.

**Lucide runtime vs catalog:** Nextora also ships `lucide` for runtime toolbar icons ([`resources/ts/lib/comment-tiptap.ts`](../../resources/ts/lib/comment-tiptap.ts)). This block uses **`lucide-static`** (devDependency) at **build time** to bundle the full picker catalog.

---

## Scope and intent

Use `nextora/icon` for standalone decorative or informative icons: social links, feature bullets, CTA adornments, contact rows, and pattern placeholders.

The block should stay focused on **one icon per instance**. For icon grids or repeater lists, compose multiple block instances or build a dedicated list block.

---

## Architecture

```
nextora/icon                    ← single dynamic block, no InnerBlocks
├── attributes.iconSource        ← "theme" | "upload"
├── attributes.iconName          ← Lucide kebab-case name (theme mode)
├── attributes.uploadedIcon*     ← Media Library URL + attachment ID (upload mode)
├── attributes.iconSize          ← px width/height
├── attributes.strokeWidth       ← Lucide only
├── attributes.iconAlign         ← flex justify
├── attributes.iconStyle         ← default | stacked | framed
├── attributes.borderRadius      ← surface radius (stacked/framed)
├── attributes.backgroundColor   ← stacked surface fill
├── attributes.borderColor       ← framed border color
├── attributes.linkUrl/Target    ← optional <a> wrapper
├── attributes.ariaLabel         ← a11y name when icon is meaningful or linked
├── attributes.enableScrollAnimation ← scroll reveal toggle
├── lucide.php                   ← nextora_get_lucide_svg() + node builder
├── view.ts                      ← GSAP scroll reveal + opt-out
├── assets/data/lucide-icons.json← editor-only catalog (build output)
└── render.php                   ← escaped markup via get_block_wrapper_attributes()
```

### Scroll reveal (`view.ts`)

- **`enableScrollAnimation`** (default `true`) — sidebar **Animation** panel toggle per [`docs/blocks.md`](../blocks.md).
- When on: `data-nextora-scroll-reveal="1"`; `view.ts` fades/slides the block in once via GSAP ScrollTrigger.
- When off: `data-nextora-scroll-animation-init="1"` + `nextora-icon--scroll-off nextora-scroll-animation--ready` — opts out of parent theme class-driven animations too.
- Skip animation when `prefers-reduced-motion: reduce`.
- `render.php` calls `nextora_icon_enqueue_view_script()` so dynamic blocks load `view.js` when needed.

### Editor icon picker

The picker is **block-editor only**. Use `@wordpress/components` `Modal` — not theme [`modal.ts`](../../resources/ts/lib/modal.ts) (that contract is for front-end dialogs such as spotlight search and lightboxes).

---

## Lucide integration strategy

### Recommended approach: `lucide-static` + build-time JSON

| Phase | Mechanism |
|-------|-----------|
| **Build** | `scripts/build-lucide-icons.mjs` reads `lucide-static/icon-nodes.json` + `tags.json` → `assets/data/lucide-icons.json` |
| **Editor** | `edit.tsx` fetches JSON once (localized URL); powers search, tags, paginated grid |
| **Front end** | `nextora_get_lucide_svg()` reads the same JSON once per request; outputs inline `<svg>` for the saved `iconName` only |

### Approaches not used

| Approach | Problem |
|----------|---------|
| CDN `<script src="unpkg.com/lucide">` | External dependency, large payload |
| SVG sprite (all icons) | Loads entire library when one icon is needed |
| lucide.dev API at runtime | No stable public API; external dependency |
| Inline uploaded SVG | XSS risk from Media Library SVGs |

### Build script and `package.json`

Add to [`package.json`](../../package.json) (theme uses `"type": "module"` — script must be ESM `.mjs`):

```json
{
  "scripts": {
    "build:icons": "node ./scripts/build-lucide-icons.mjs",
    "build": "npm run build:icons && npm run build:css && npm run build:ts && npm run build:blocks"
  },
  "devDependencies": {
    "lucide-static": "^1.0.0"
  }
}
```

**`scripts/build-lucide-icons.mjs`** (outline):

```javascript
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const iconNodes = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../node_modules/lucide-static/icon-nodes.json'),
    'utf8'
  )
);
const tags = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../node_modules/lucide-static/tags.json'),
    'utf8'
  )
);

const output = Object.entries(iconNodes).map(([name, nodes]) => ({
  name,
  tags: tags[name] ?? [],
  nodes,
}));

const dest = path.join(__dirname, '../assets/data/lucide-icons.json');
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.writeFileSync(dest, JSON.stringify(output));
console.log(`Built ${output.length} icons → ${dest}`);
```

Run after installing or upgrading `lucide-static`:

```bash
npm install
npm run build:icons
```

`assets/data/lucide-icons.json` (~1–2 MB) ships with the theme. It is loaded in the **block editor only**, never enqueued on the public site.

---

## Block registration

| Property | Value |
|----------|--------|
| `name` | `nextora/icon` |
| `title` | Theme Icon |
| `category` | `design` |
| `textdomain` | `nextora` |
| `render` | `file:./render.php` (dynamic) |
| `editorScript` | `file:./index.js` (built from `index.tsx`) |
| `style` / `editorStyle` | `file:./style.css`, `file:./editor.css` |
| `viewScript` | `file:./view.js` (built from `view.ts`) |
| `supports.align` | `wide`, `full` |
| `supports.color` | `text: true` (stroke inherits via `currentColor`) |
| `supports.spacing` | `padding`, `margin` |
| `supports.html` | `false` |
| Inner blocks | none — `save: () => null` in `index.tsx` |

---

## Attributes schema

### Source

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `iconSource` | `string` | `"theme"` | RadioControl | `"theme"` or `"upload"` |
| `iconName` | `string` | `"star"` | Icon picker modal | Lucide name in **kebab-case** (theme mode) |
| `uploadedIconUrl` | `string` | `""` | MediaUpload | Attachment URL (upload mode) |
| `uploadedIconId` | `number` | `0` | MediaUpload | Attachment ID |

### Appearance

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `iconSize` | `number` | `24` | RangeControl (12–256) | Width and height in px |
| `iconColor` | `string` | `""` | PanelColorSettings or inherit | Empty = `currentColor` / Global Styles text color |
| `strokeWidth` | `number` | `2` | RangeControl (0.5–4, step 0.5) | Lucide theme icons only |
| `iconAlign` | `string` | `"left"` | SelectControl | `left`, `center`, `right` — maps to flex `justify-content` |
| `iconStyle` | `string` | `"default"` | SelectControl | `default`, `stacked`, `framed` |
| `borderRadius` | `number` | `8` | RangeControl | Surface radius when stacked/framed |
| `backgroundColor` | `string` | `""` | PanelColorSettings | Stacked surface fill |
| `borderColor` | `string` | `""` | PanelColorSettings | Framed border color |

Prefer **`supports.color`** for text/stroke when Global Styles suffice. Use `iconColor` only when the block needs an explicit override beyond wrapper text color.

### Animation

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `enableScrollAnimation` | `boolean` | `true` | ToggleControl | Fade/slide in on scroll; off opts out of parent scroll utilities too |

### Link

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `linkUrl` | `string` | `""` | TextControl | Optional `href` |
| `linkTarget` | `string` | `"_self"` | SelectControl | `_self` or `_blank` |

### Accessibility & extras

| Attribute | Type | Default | Control | Description |
|-----------|------|---------|---------|-------------|
| `ariaLabel` | `string` | `""` | TextControl | Required when icon is a standalone link or conveys meaning |
| `cssClass` | `string` | `""` | TextControl | Extra class on wrapper (escaped in PHP) |

---

## Design system

1. **Presets first** — Default stroke/fill via `currentColor` so `supports.color` text on the wrapper tints the SVG. Map preset slugs to `var(--wp--preset--color--{slug})` when `iconColor` stores a slug ([`docs/blocks.md`](../blocks.md) § Style overrides).
2. **CSS variables** — Block-scoped custom properties use the **`--nextora-icon-*`** prefix if needed (e.g. `--nextora-icon-size`).
3. **Alignment** — Use flex on the wrapper; avoid inline `justify-content` without also setting `display: flex` in `style.css`.
4. **Tokens** — Prefer `var(--wp--preset--spacing--*)` for padding/margin via `supports.spacing`; no ad-hoc hex in `style.css`.

---

## Class and BEM naming

| Generic / legacy | Nextora |
|------------------|----------|
| `wp-block-mytheme-icon` | `wp-block-nextora-icon` |
| `mytheme-icon-img` | `nextora-icon__img` |
| `mytheme-icon-link` | `nextora-icon__link` |
| `mytheme-icon-picker__*` | `nextora-icon-picker__*` (editor only) |

Root BEM block: **`nextora-icon`**. Scope front-end rules under `.wp-block-nextora-icon` / `.nextora-icon`.

Lucide SVG classes: `lucide lucide-{iconName}` (Lucide convention).

---

## Render output

### High-level HTML (theme mode, linked)

```html
<div
  class="wp-block-nextora-icon nextora-icon nextora-icon--align-center"
  style="--nextora-icon-size: 24px;"
>
  <a
    href="https://example.com"
    class="nextora-icon__link"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit our charity page"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-star"
      aria-hidden="true"
      focusable="false"
    >…</svg>
  </a>
</div>
```

**Key points:**

- Root attributes via **`get_block_wrapper_attributes()`** — merges Global Styles color/spacing.
- Alignment modifier: `nextora-icon--align-{left|center|right}` (preferred over inline-only styles).
- Linked icon: `aria-label` on `<a>`; inner SVG `aria-hidden="true"`.
- Decorative standalone icon: SVG `aria-hidden="true" focusable="false"`; no `role="img"` unless `ariaLabel` is set.
- Upload mode: `<img class="nextora-icon__img" …>` with `alt` from `ariaLabel` or empty + `aria-hidden` when decorative.

---

## PHP (`render.php` + `lucide.php`)

### `render.php` requirements

- `declare(strict_types=1);`
- Docblock: `@var array<string, mixed> $attributes`, `@var WP_Block $block`
- Early return if nothing to render
- `get_block_wrapper_attributes()` for the wrapper — do not hand-build `class="wp-block-nextora-icon"` alone
- Escape: `esc_url`, `esc_attr`, `esc_html` as appropriate
- `_blank` links: `rel="noopener noreferrer"`
- Include `lucide.php` from the block folder (not parent `inc/`)

### `nextora_get_lucide_svg()` (`blocks/icon/lucide.php`)

| Responsibility | Detail |
|----------------|--------|
| JSON path | `NEXTORA_DIR . '/assets/data/lucide-icons.json'` |
| Cache | `static $icon_data` — parse once per request |
| Lookup | Index by `name` for O(1) access |
| Output | Inline `<svg>` with escaped size, stroke, `stroke-width`, `class="lucide lucide-{name}"` |
| a11y | `ariaLabel` set → `role="img"` + `aria-label`; else `aria-hidden="true" focusable="false"` |
| Nodes | `nextora_build_svg_nodes()` recursively renders `[tag, attrs, children]` from icon-nodes format |

### Upload mode security

Uploaded SVGs are **always** `<img src="…">`, never parsed into inline SVG in PHP.

After editing: **`npm run lint:php:all`** from the theme root.

---

## Editor (`edit.tsx`)

Built from TypeScript via [`scripts/build-blocks.mjs`](../../scripts/build-blocks.mjs). Structure:

| File | Role |
|------|------|
| `index.tsx` | `registerBlockType(metadata.name, { edit: Edit, save: () => null })` |
| `edit.tsx` | Inspector panels, canvas preview, `IconPicker` modal |
| `types.ts` | `Attributes` interface (optional but recommended) |

### Suggested inspector panels

Align panel titles with [`docs/blocks.md`](../blocks.md): **Settings**, **Layout**, **Link**, **Accessibility**.

**Settings** (`initialOpen: true`)

- Source: Theme icon / Upload
- Theme: **Choose icon** button → opens picker; show current `iconName`
- Upload: `MediaUpload` / `MediaUploadCheck`, `allowedTypes={['image']}`

**Layout**

- Size (px)
- Stroke width (theme mode only)
- Alignment

**Colors** (when override needed)

- `PanelColorSettings` for icon/text color — match [`blocks/call-to-action/edit.tsx`](../../blocks/call-to-action/edit.tsx); label `__('Icon color', 'nextora')`

**Link** (`initialOpen: false`)

- URL, open in (when URL set)

**Accessibility** (`initialOpen: false`)

- Aria label — help: *Required if this icon is a standalone link with no surrounding text.*
- Extra CSS class
- `Notice` warning when `linkUrl` is set and `ariaLabel` is empty

All user-facing strings: **`__('…', 'nextora')`**.

### Icon picker component (editor-only)

| Feature | Standard |
|---------|----------|
| Shell | `@wordpress/components` `Modal` |
| Data | Fetch `nextoraIconBlock.iconsUrl` once; module-level cache |
| Search | Filter by `name` and `tags` |
| Tags | Horizontal chip row; cap visible tags (e.g. 20) |
| Grid | Paginate 60 icons per page; **Load more** button |
| Preview | Build SVG from `icon.nodes` in TS (mirror PHP node builder) |
| Grid buttons | `type="button"`, `aria-label={icon.name}`, decorative preview SVG `aria-hidden="true"` |
| Title | `__('Choose icon', 'nextora')` |

### Localize icons URL

[`blocks/icon/register-editor.php`](../../blocks/icon/register-editor.php) is required from [`blocks/blocks.php`](../../blocks/blocks.php). It injects `window.nextoraIconBlock` before the auto-registered `nextora-icon-editor-script`:

```php
function nextora_icon_block_editor_assets(): void {
	$handle = 'nextora-icon-editor-script';
	// ...
	wp_add_inline_script(
		$handle,
		'window.nextoraIconBlock = ' . wp_json_encode( $data ) . ';',
		'before',
	);
}
```

Handle `nextora-icon-editor-script` matches WordPress auto-registration for `nextora/icon`.

---

## Stylesheets

### `style.css` (front end)

- `.wp-block-nextora-icon` — `display: flex`, `line-height: 0`
- `.nextora-icon__link` — `inline-flex`, `color: inherit`, `:focus-visible` ring per theme buttons pattern
- `.nextora-icon svg.lucide` — `display: block`, `flex-shrink: 0`
- `.nextora-icon__img` — `object-fit: contain`
- `@media (prefers-reduced-motion: reduce)` — shorten link hover transitions if any

### `editor.css` (picker only)

- `.nextora-icon-picker__grid`, `__tags`, `__item`, `is-selected` states
- Picker buttons: `:focus-visible` outline — never `outline: none` without replacement ([`docs/accessibility.md`](../accessibility.md))

After CSS edits: **`npm run build:blocks`** or **`npm run build`**.

---

## Accessibility

Target **WCAG 2.1 AA** per [`.cursor/rules/nextora-a11y-blocks.mdc`](../../.cursor/rules/nextora-a11y-blocks.mdc).

| Scenario | Markup |
|----------|--------|
| Decorative icon | SVG or img `aria-hidden="true"` |
| Meaningful standalone icon | `role="img"` + `aria-label="<?php echo esc_attr( $aria_label ); ?>"` (translatable if authored in PHP; editor attribute escaped) |
| Icon inside link | `aria-label` on `<a>`; inner graphic `aria-hidden="true"` |
| Linked without label | Editor warning; do not ship as accessible standalone control |
| Editor picker items | `<button type="button" aria-label="…">` — not clickable `<div>` |

**i18n:** Block strings use text domain **`nextora`**. No hard-coded English in `aria-label` in PHP — use `esc_attr__( '…', 'nextora' )` for theme-owned defaults.

---

## Performance

| Concern | Solution |
|---------|----------|
| `lucide-icons.json` size (~1–2 MB) | Editor fetch only; never enqueued on front end |
| Front-end SVG weight | One icon’s paths only (~100–300 bytes) |
| PHP JSON parse | `static` cache — once per request regardless of block count |
| Editor DOM | Paginate 60 icons; filter before render |
| Editor fetch | Module-level `cachedIcons` in `edit.tsx` |

---

## Supported upload formats

| Format | Notes |
|--------|-------|
| `.svg` | Rendered as `<img>` only |
| `.png`, `.webp` | Supported |
| `.jpg` / `.jpeg`, `.gif` | Supported; not ideal for icons |

---

## File structure

```
nextora/
├── assets/
│   └── data/
│       └── lucide-icons.json       ← build output (ships with theme)
├── blocks/
│   └── icon/
│       ├── block.json
│       ├── index.tsx               ← source (builds to index.js)
│       ├── edit.tsx
│       ├── types.ts                ← optional
│       ├── lucide.php              ← nextora_get_lucide_svg()
│       ├── register-editor.php     ← nextoraIconBlock.iconsUrl
│       ├── view.ts                 ← scroll reveal (builds to view.js)
│       ├── render.php
│       ├── style.css
│       └── editor.css
├── scripts/
│   └── build-lucide-icons.mjs      ← dev-only; not loaded at runtime
└── functions.php                   ← wp_localize_script for iconsUrl
```

**Do not treat as source:** `blocks/icon/index.js`, `blocks/icon/index.asset.php`, `blocks/icon/view.js`.

---

## Development workflow

```bash
# From nextora/ theme root
composer install && npm install
npm run build:icons          # first time / after lucide-static upgrade
npm run gen -- --name=icon --ns=nextora --category=design   # if not scaffolded
npm run build:blocks         # or npm run watch
npm run lint:php:all         # after render.php / lucide.php edits
npm run ci                   # full gate before merge
```

---

## Rules for AI agents

| Rule | Detail |
|------|--------|
| **Namespace** | `nextora/icon` only — not `mytheme/icon` or `core/icon` |
| **Text domain** | `nextora` for block strings |
| **PHP prefix** | `nextora_` for helpers; use `NEXTORA_DIR` / `NEXTORA_URI` |
| **No external runtime requests** | Bundle `lucide-icons.json`; never fetch lucide.dev or CDNs |
| **Theme icons → inline SVG** | Via `nextora_get_lucide_svg()` |
| **Uploads → `<img>`** | Never inline uploaded SVG (XSS) |
| **`iconName` kebab-case** | e.g. `arrow-right`, not `ArrowRight` |
| **Editor JSON only** | Do not enqueue `lucide-icons.json` on the front end |
| **`strokeWidth` / color override** | Theme mode only; hide when `iconSource === "upload"` |
| **`get_block_wrapper_attributes()`** | Required on wrapper |
| **No hand-edited `index.js` / `view.js`** | Edit TS sources; run `build:blocks` |
| **`enableScrollAnimation`** | Follow [`docs/blocks.md`](../blocks.md) scroll reveal pattern |
| **Modal** | Editor: WP `Modal`; front end: theme `modal.ts` only for site dialogs — not for this block |
| **`currentColor` default** | Do not default stroke to hardcoded hex |
| **Quality gate** | `npm run lint:php:all` + `npm run build:blocks` after changes |

---

## Glossary

| Term | Meaning |
|------|---------|
| `lucide-static` | npm package with `icon-nodes.json` and `tags.json` for build-time catalog |
| `lucide` | Runtime package used elsewhere in the monorepo (e.g. parent Tiptap toolbar) — not the full picker catalog |
| `icon-nodes.json` | Map of icon name → SVG node tuples `[tag, attrs, children]` |
| `lucide-icons.json` | Nextora build artifact: `{ name, tags, nodes }[]` |
| `nextora_get_lucide_svg()` | PHP helper returning inline SVG for a saved icon name |
| `IconPicker` | Editor-only React modal for browsing Lucide icons |
| `currentColor` | CSS keyword; SVG stroke inherits parent `color` |

---

## Related docs

- [`docs/blocks.md`](../blocks.md) — shared block standards
- [`docs/accessibility.md`](../accessibility.md) — WCAG checklist
- [`docs/modal.md`](../modal.md) — front-end modal contract (not editor picker)
- [`blocks/call-to-action/`](../../blocks/call-to-action/) — scroll reveal + `PanelColorSettings` reference
- [`docs/blocks/Counters.md`](./Counters.md) — spec document structure reference

---

*Nextora — Theme Icon Block (`nextora/icon`) agent specification*
