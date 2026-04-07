# Nextora

Hybrid WordPress theme used as a core starter: classic PHP templates plus `theme.json` and block-based template parts. Built with [Tailwind CSS v4](https://tailwindcss.com/), TypeScript, [PHPStan](https://phpstan.org/), and [PHPUnit](https://phpunit.de/).

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

The theme runs without `vendor/` (Composer is optional at runtime) but needs compiled assets: run `npm run build` if `assets/css/app.css` or `assets/js/main.js` are missing.

## Project layout

| Path | Purpose |
|------|---------|
| `style.css` | Theme metadata (required by WordPress) |
| `functions.php` | Bootstrap, constants, loads `inc/` |
| `theme.json` | Global styles, color/spacing/typography presets |
| `header.php` / `footer.php` | Classic shell; call `block_template_part()` |
| `parts/*.html` | Block markup for header/footer (hybrid template parts) |
| `index.php`, `page.php`, `single.php` | Main templates |
| `inc/` | PHP modules and `Nextora\*` classes (PSR-4) |
| `resources/css/app.css` | Tailwind source (`@import "tailwindcss"`, `@theme` tokens) |
| `resources/ts/main.ts` | Front-end TypeScript entry |
| `assets/css/app.css` | Compiled CSS (generated) |
| `assets/js/main.js` | Compiled JS (generated) |
| `scripts/clone-theme.mjs` | Duplicate theme with renamed slug/namespace |

## Tailwind and CSS variables

Editor and front output expose WordPress preset variables such as `--wp--preset--color--primary`. In `resources/css/app.css`, the `@theme` block maps Tailwind color/font tokens to those variables (with hex fallbacks). Align new colors in both `theme.json` and `@theme` when you extend the palette.

## npm scripts

| Command | Description |
|---------|-------------|
| `npm run build` | PostCSS → `assets/css/app.css`, esbuild → `assets/js/main.js` |
| `npm run watch` | Watch CSS and JS (two processes; use two terminals on Windows if `&` is awkward) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint:php` | Runs `composer phpstan` |
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

## Further reading

- [Bridging the gap: Hybrid themes](https://developer.wordpress.org/news/2024/12/bridging-the-gap-hybrid-themes/) (WordPress Developer Blog)
- [Theme handbook: Global settings & styles](https://developer.wordpress.org/themes/global-settings-and-styles/)

## License

GPL-2.0-or-later (same as WordPress).
