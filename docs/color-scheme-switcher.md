# Color & Font Scheme Switcher

Guest-facing appearance switcher for the Nextora block theme. Site visitors (no login required) can switch between **themes** (bundled color + font), **color presets**, and **font presets** from a floating popover, entirely client-side via JavaScript. Their choice persists across page loads and can be shared via URL query parameters.

The whole feature is gated behind a `wp-config.php` constant and is a **no-op** (zero scripts, zero data, zero markup) when the constant is absent or not strictly `true`.

## Enable / disable

```php
// wp-config.php — enable:
define( 'NEXTORA_COLOR_SCHEME_SWITCHER', true );
```

Disabled by default (constant undefined). Any value other than the boolean `true` also leaves it disabled — the gate is strict (`! defined( ... ) || true !== NEXTORA_COLOR_SCHEME_SWITCHER`).

## What it does

| Capability | Detail |
|------------|--------|
| **Themes** | One-click bundled presets that apply a color palette **and** a font pairing together (from style files that bundle both). |
| **Color presets** | Override `--wp--preset--color--{slug}` inline on `<html>`, recoloring every element that references those variables (body text, headings, links, buttons, surfaces). |
| **Font presets** | Override the role variables `--nextora-font-body` / `--nextora-font-heading` inline on `<html>`. |
| **Persistence** | `localStorage` key `nextora-scheme-preferences` → `{ "v": 3, "theme": "education", "color": null, "font": null }`. |
| **URL params** | `?theme=<slug>&color=<slug>&font=<slug>`. URL wins over storage; storage wins over the theme default. Applied values are re-persisted. |
| **Share** | The popover's **Copy link** button copies the current URL with `theme` / `color` / `font` params set. |
| **Reset** | Per-section "Default" options plus a global **Reset** remove all inline overrides and stored choices. |

## Files

| File | Purpose |
|------|---------|
| `inc/features/color-scheme-switcher/load.php` | Feature flag gate; requires `scheme-data.php` + `enqueue.php`. |
| `inc/features/color-scheme-switcher/scheme-data.php` | Builds the preset payload (themes, color presets, font presets, font registry); parent + child theme merge. |
| `inc/features/color-scheme-switcher/enqueue.php` | Enqueues `assets/js/scheme-switcher.js`, injects `window.NEXTORA_THEME_OPTIONS`, prints the popover skeleton. |
| `assets/js/scheme-switcher.js` | Hand-written vanilla IIFE (not in the esbuild bundle): popover UI, apply/reset, storage, URL params, copy link. |
| `resources/css/modules/components/scheme-switcher.css` | Popover styling (compiled into `assets/css/app.css`). |
| `styles/color-scheme/*.json` | Color presets (`midnight`, `lime`, `peach`, `warm-sand`). |
| `styles/font-preset/*.json` | Font presets (`classic`, `modern`, `elegant`, `mono`). |
| `scheme-switcher.json` | Optional curator config: per-preset on/off/order/label, `initial` default, section visibility (parent + child merged). |
| `theme.json` | Body/heading reference the font role variables (below). |
| `resources/css/app.css` | Defaults for `--nextora-font-body` / `--nextora-font-heading` (in `@theme`). |

## Data payload

`enqueue.php` injects a single global before the script runs:

```js
window.NEXTORA_THEME_OPTIONS = {
	colorPresets: { midnight: { title: "Midnight", colors: { base: "#0c1222", … } }, … },
	fontPresets:  { elegant: { title: "Elegant", body: "josefin-sans", heading: "noto-serif-display" }, … },
	themes:       { education: { title: "Education", colors: { … }, body: "\"Fredoka\", sans-serif", heading: "\"Nunito\", system-ui, sans-serif" }, … },
	fonts:        { sans: { name: "Arial", family: "Arial, Helvetica, sans-serif" }, … },
	config:       { initial: { theme: "", color: "", font: "" }, sections: { themes: …, colors: …, fonts: … } }
};
```

### Color presets — sources (later wins on slug)

1. `{parent}/styles/color-scheme/*.json`
2. `{child}/styles/color-scheme/*.json`
3. `{parent}/styles/*.json` (top-level style variations)
4. `{child}/styles/*.json` (top-level style variations)

A file is a valid preset when it has `settings.color.palette` (any theme.json-style JSON). Slug = `sanitize_title(title ?? basename)`. Malformed files are skipped silently.

### Font registry

Slug → `{ name, family }`, sourced from the **merged** theme.json `settings.typography.fontFamilies` via the existing `nextora_get_heading_inline_font_families()` helper (theme + child + Site Editor user customizations). Only fonts that are actually loaded (system stacks or self-hosted `fontFace`) are offered.

### Font presets — sources

`{parent,child}/styles/font-preset/*.json`, schema:

```json
{
	"version": 3,
	"title": "Elegant",
	"body": "josefin-sans",
	"heading": "noto-serif-display"
}
```

`body` / `heading` reference font-registry slugs. `heading` falls back to `body` when omitted or unknown. If no files exist, one preset per available font is generated (body = heading = that font).

### Themes — sources (bundled color + font)

A **theme** bundles a color palette **and** a font pairing in one preset. It is read from the same files as color presets — but only files that carry **both** a `settings.color.palette` and a font:

- `settings.typography.fontFamilies` (first entry = body, second = heading), or
- `styles.typography.fontFamily` / `styles.elements.heading.typography.fontFamily` (resolved through the font registry).

Files with a palette but no font stay color-only (not listed as themes). Slug = `sanitize_title(title)`; child wins on slug.

> **Font loading caveat:** a theme's font only actually renders if that font is loaded on the page. Fonts declared inside a style *variation* are only emitted when that variation is the active global style — so to make a theme's fonts switchable, add them to the theme's `theme.json` `settings.typography.fontFamilies` (with their `fontFace`).

## Configuration — `scheme-switcher.json`

An optional JSON file at the theme root (parent + child, child wins) that curates the switcher without touching code or deleting preset files. Absent keys fall back to defaults; a malformed file is ignored.

```jsonc
{
  "version": 1,
  "initial": { "theme": "", "color": "", "font": "" },   // first-visit selection; "" = theme default
  "sections": {
    "themes": { "enabled": true, "showDefault": true },
    "colors": { "enabled": true, "showDefault": true },
    "fonts":  { "enabled": true, "showDefault": true }
  },
  "presets": {
    "themes": [
      { "slug": "education", "enabled": true },
      { "slug": "medical",   "enabled": false }
    ],
    "colors": [
      { "slug": "a", "enabled": true,  "label": "A" },
      { "slug": "b", "enabled": true },
      { "slug": "c", "enabled": false }            // off: excluded entirely
    ],
    "fonts": [
      { "slug": "elegant", "enabled": true },
      { "slug": "modern",  "enabled": false }
    ]
  }
}
```

Semantics:

- **`presets.themes` / `presets.colors` / `presets.fonts` is an allowlist.** When present, only listed, `enabled` (default `true`) presets are shown, in list order. **Omitting the `presets` key entirely** keeps auto-discovery (all presets), which is what the shipped scaffold does — so a child theme's style variations stay visible until the child opts in to curating.
- **`enabled: false`** removes the preset completely (not clickable, not reachable via `?theme=`/`?color=`/`?font=`, and a stale saved choice silently falls back).
- **`label`** overrides the preset's own `title`; otherwise `title` is used.
- **`initial`** is the first-visit selection when there's no URL param and no saved choice. It is **not persisted** (so the popover's *Default/Reset* still returns to the theme's global-styles values). Slugs are validated against the filtered preset set.
- **`sections.*.enabled`** hides the whole section; **`sections.*.showDefault`** hides that section's *Default* reset button.
- **Child theme** overrides the parent at the key level; `presets.themes` / `presets.colors` / `presets.fonts` arrays are replaced wholesale (not merged by index).

## Override mechanism

- **Colors** — inline `style.setProperty('--wp--preset--color--{slug}', value)` on `<html>`. Inline styles on `html` beat the `global-styles` stylesheet, so no `!important` is needed. Reset uses `removeProperty()` so the cascade falls back to the theme's own values (including Site Editor customizations).
- **Fonts** — `theme.json` maps the role variables to global styles:
  - `styles.typography.fontFamily` → `var(--nextora-font-body)`
  - `styles.elements.heading.typography.fontFamily` → `var(--nextora-font-heading)`
  - Defaults in `resources/css/app.css` (`@theme`):
    - `--nextora-font-body: var(--wp--preset--font-family--sans, Arial, Helvetica, sans-serif)`
    - `--nextora-font-heading: var(--nextora-font-body)` (headings inherit the body font until a preset sets it independently)
  - The switcher sets `--nextora-font-body` / `--nextora-font-heading` inline on `<html>`; reset removes them.

## Child-theme support

- All preset sources are read from **both** `get_template_directory()` (parent) and `get_stylesheet_directory()` (child), merged with **child winning** on slug. This fixes the previous behavior where the switcher only read the (child) stylesheet directory and silently ignored the parent's presets under a child theme.
- A child theme supplies **data only** — the JS/CSS are always the parent's assets. A child can:
  - ship its own `styles/color-scheme/*.json` and/or `styles/font-preset/*.json`,
  - or simply expose its top-level `styles/*.json` style variations (read automatically),
  - or add `settings.typography.fontFamilies` to its `theme.json` to make extra fonts available to the switcher (fonts declared only inside a style variation load only when that variation is active).

## Known limitations

- Only values referenced through CSS variables change. Hardcoded colors or fonts are not affected — including block-level `fontFamily` / color attributes set in templates or blocks (e.g. a hero heading pinned to a display font), which intentionally outrank the global `--nextora-font-*` override.
- The script is `defer`red, so there is a brief flash of default colors/fonts on reload (accepted for v1).
- An **active style variation** that hardcodes its own `styles.typography.fontFamily` / element fonts takes precedence over `--nextora-font-*` (same class of limitation as colors).
- Full-page caches are unaffected (HTML is identical for all users), but caches must be purged after toggling the `wp-config.php` constant.

## Verification

1. Add the constant, hard-refresh, confirm the popover trigger appears and `window.NEXTORA_THEME_OPTIONS` is present.
2. Open the popover; pick a **theme** (applies color + font together) or pick a color and a font; inspect `<html>` in DevTools — inline `--wp--preset--color--*` and `--nextora-font-*` should match the selection.
3. Reload; confirm choices persist. Click **Reset**; confirm inline vars are gone.
4. Load `?theme=education` (or `?color=…&font=…`); confirm it applies and persists; click **Copy link** and paste to verify the URL carries `theme` / `color` / `font`.
5. Remove the constant; hard-refresh; confirm no script, no global, no popover.
6. Add a malformed JSON file to `styles/color-scheme/`; confirm no errors and other presets still work.
