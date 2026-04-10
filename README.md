# Nextora

Hybrid WordPress theme used as a core starter: classic PHP templates plus `theme.json`, block-based template parts, and optional **theme blocks** in `blocks/`. Built with [Tailwind CSS v4](https://tailwindcss.com/), TypeScript, [PHPStan](https://phpstan.org/), and [PHPUnit](https://phpunit.de/).

**Agent / AI context:** see [`AGENTS.md`](./AGENTS.md) for load order, build pipeline, hooks, and file-level conventions.

## Requirements

- WordPress 6.4+ (tested with 6.7 in `style.css`)
- PHP 8.1+
- [Node.js](https://nodejs.org/) 18+ (for asset builds)
- [Composer](https://getcomposer.org/) (for PHP tooling and autoloading)

## Installation

1. Copy or clone this folder into `wp-content/themes/nextora/`.
2. From the theme directory:

   ```bash
   composer install
   npm install
   npm run build
   ```

3. Activate **Nextora** under **Appearance → Themes**.

The theme runs without `vendor/` (Composer is optional at runtime) but needs compiled assets: run `npm run build` if `assets/css/app.css`, `assets/js/main.js`, or block `index.js` files under `blocks/` are missing or stale.

### Integrations

- **WooCommerce**: `add_theme_support( 'woocommerce' )` and related gallery features in `inc/setup/theme-support.php`.
- **GiftFlow**: `add_theme_support( 'giftflow' )` in the same file. Campaign views can use **`giftflow.php`**, which delegates content to the plugin’s `giftflow_content()`.

## Project layout

| Path | Purpose |
|------|---------|
| `style.css` | Theme metadata (required by WordPress) |
| `functions.php` | Bootstrap, constants, loads `inc/**` and `blocks/blocks.php` (see `inc/README.md`) |
| `theme.json` | Global styles, color/spacing/typography presets (v3) |
| `AGENTS.md` | Concise briefing for agents: build steps, `inc/` map, blocks, GiftFlow |
| `header.php` / `footer.php` | Classic shell; call `block_template_part()` |
| `parts/*.html` | Block markup for header/footer (hybrid template parts) |
| `index.php`, `home.php`, `archive.php`, `page.php`, `single.php`, `search.php` | Main templates |
| `woocommerce.php` | WooCommerce template overrides when needed |
| `giftflow.php` | GiftFlow campaign singular shell (`giftflow_content()`) |
| `template-parts/*.php` | Article cards, page heading, sidebars, loops |
| `blocks/` | First-party Gutenberg blocks (`block.json` + TS/PHP); registered by `blocks/blocks.php` |
| `scripts/build-blocks.mjs` | esbuild pipeline for `blocks/*` → `index.js` + `index.asset.php` |
| `scripts/gen-block.mjs` | Scaffold a new block (`npm run gen`) |
| `inc/` | PHP modules by area + `Nextora\*` PSR-4 classes (`inc/README.md`) |
| `resources/css/app.css` | Tailwind source (`@theme` maps WP presets; modules under `resources/css/modules/`) |
| `resources/ts/main.ts` | Front-end TypeScript entry |
| `assets/css/app.css` | Compiled CSS (generated — do not hand-edit as source) |
| `assets/js/main.js` | Compiled JS (generated) |
| `scripts/clone-theme.mjs` | Duplicate theme with renamed slug/namespace (`npm run theme:clone`) |

## Tailwind and CSS variables

Editor and front output expose WordPress preset variables such as `--wp--preset--color--primary`. In `resources/css/app.css`, the `@theme` block maps Tailwind color/font tokens to those variables (with hex fallbacks). Align new colors in both `theme.json` and `@theme` when you extend the palette.

## npm scripts

| Command | Description |
|---------|-------------|
| `npm run build` | `build:css` + `build:ts` + **`build:blocks`** (full theme build) |
| `npm run build:css` | PostCSS / Tailwind → `assets/css/app.css` |
| `npm run build:ts` | esbuild → `assets/js/main.js` (minified) |
| `npm run build:blocks` | `node scripts/build-blocks.mjs` — compiles each `blocks/<name>/` entry to `index.js` + `index.asset.php` |
| `npm run watch` | Watches CSS, TS, and blocks concurrently (`&` between processes) |
| `npm run watch:blocks` | Watch mode for theme blocks only |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint:php` | Runs `composer phpstan` |
| `npm run gen` | Scaffold a new block (`scripts/gen-block.mjs`) |
| `npm run theme:clone` | See [Cloning a new theme](#cloning-a-new-theme) |

## Composer scripts

| Command | Description |
|---------|-------------|
| `composer phpstan` | Static analysis (`phpstan.neon`, WordPress stubs) |
| `composer test` | PHPUnit (`tests/`) |

## Cloning a new theme

From this directory:

```bash
npm run theme:clone -- --slug=my-project --name="My Project"
```

Optional: `--namespace=MyProject` (defaults to PascalCase from the slug, e.g. `my-project` → `MyProject`).

The script creates a sibling folder under `wp-content/themes/<slug>/`, skips `node_modules`, `vendor`, and `.git`, and rewrites identifiers (text domain, `NEXTORA_*` constants, `nextora_` function prefix, PSR-4 namespaces, package names, and a few CSS/body classes). Then in the new theme:

```bash
composer install
npm install
npm run build
```

## Theme blocks

Blocks live under `blocks/<block-name>/` with a `block.json`. Source is typically TypeScript/TSX (`index.tsx`, `edit.tsx`) plus **`render.php`** for this scaffold (dynamic block, `save: () => null`). After editing block sources, run **`npm run build`** or **`npm run build:blocks`**. Registration is automatic via **`blocks/blocks.php`** (see **`AGENTS.md`** for the esbuild / `window.wp.*` setup).

### Scaffold a block (`npm run gen`)

The script is [`scripts/gen-block.mjs`](./scripts/gen-block.mjs). Run it from the **theme root** (same as `npm run gen`).

#### CLI options

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--name` | **Yes** | — | Folder name and block slug segment. **Pattern:** `^[a-z][a-z0-9-]*$` (lowercase, hyphens, must start with a letter). Creates `blocks/<name>/`. |
| `--title` | No | Derived from `--name` | Human-readable block title in the inserter (words capitalized from slug, e.g. `hero-banner` → `Hero Banner`). |
| `--category` | No | `text` | WordPress block category slug in `block.json` (e.g. `text`, `design`, `widgets`, `embed`). |
| `--ns` | No | `mytheme` | Block **namespace** (`name` becomes `<ns>/<name>`), `textdomain` in `block.json`, and the text domain passed to `__()` in the generated `edit.tsx`. **For this theme, pass `--ns nextora`** so the block name and i18n match the theme. |

If `blocks/<name>/` already exists, the script exits with an error.

#### Examples

```bash
# Minimal (remember to set namespace for Nextora)
npm run gen -- --name hero-banner --ns nextora

# Full options
npm run gen -- --name hero-banner --title "Hero banner" --category design --ns nextora

# Equivalent without npm
node ./scripts/gen-block.mjs --name hero-banner --ns nextora
```

#### Generated files

For `blocks/<name>/` the script writes:

| File | Role |
|------|------|
| `block.json` | `apiVersion` 3, `editorScript`, `render`, default **supports** (align wide/full, color, spacing, typography), sample `heading` / `content` attributes |
| `index.tsx` | `registerBlockType` from metadata, dynamic block (`save: () => null`) |
| `edit.tsx` | `RichText` heading + body, `InspectorControls` panel, TypeScript `Attributes` / `EditProps` |
| `render.php` | Server render with `get_block_wrapper_attributes()`, `wp_kses` / `wp_kses_post` |

**Not** generated: `index.js` / `index.asset.php` — run **`npm run build:blocks`** (or **`npm run build`**) after scaffolding.

#### Next steps

1. `npm run build:blocks` (or `npm run build`)
2. Reload the block editor — the block appears under the category you set
3. Adjust `edit.tsx`, `render.php`, and `block.json` as needed

## Further reading

- [Bridging the gap: Hybrid themes](https://developer.wordpress.org/news/2024/12/bridging-the-gap-hybrid-themes/) (WordPress Developer Blog)
- [Theme handbook: Global settings & styles](https://developer.wordpress.org/themes/global-settings-and-styles/)
- In-repo: [`AGENTS.md`](./AGENTS.md), [`inc/README.md`](./inc/README.md), [`docs/`](./docs/)

## License

GPL-2.0-or-later (same as WordPress).
