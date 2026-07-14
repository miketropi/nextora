# Task: Frontend Color Scheme Switcher for WordPress Block Theme

## Objective

Implement a **guest-facing color scheme switcher** for a WordPress block theme. Site visitors (no login required) can switch between color presets defined in the theme's `styles/color-scheme/*.json` files. The switch happens **entirely client-side via JavaScript** by overriding WordPress CSS custom properties (`--wp--preset--color--*`) as inline styles on the `<html>` element. The user's choice persists across page loads via `localStorage`.

The entire feature is gated behind a `wp-config.php` constant and must be a **no-op** (zero scripts, zero data output) when the constant is absent or not strictly `true`.

## Architectural Constraints (must follow)

1. **JS-only intervention.** PHP must NOT generate scoped CSS, must NOT add attributes to `<html>` server-side, and must NOT alter theme rendering logic. PHP's only jobs: (a) check the feature flag, (b) read the scheme JSON files, (c) expose a minimal data payload to JS, (d) enqueue one JS file.
2. **Override mechanism:** `document.documentElement.style.setProperty('--wp--preset--color--{slug}', value)`. Inline styles on `html` beat the `global-styles` stylesheet in the cascade, so no `!important` and no specificity tricks are needed.
3. **Reset mechanism:** `removeProperty()` for every variable that was set. Never store or re-apply "default" values — removing the inline override lets the cascade fall back to the theme's own `global-styles` output.
4. **Feature flag:** constant `MYTHEME_COLOR_SCHEME_SWITCHER` in `wp-config.php`. Enabled only when `defined()` AND strictly `=== true` (boolean). Default (undefined) = disabled. Rename the `MYTHEME_` prefix to match the actual theme slug if one is established in the codebase.
5. No build step, no external dependencies, vanilla JS (IIFE), compatible with classic `wp_enqueue_script`.

## Inputs / Environment

- WordPress 6.x block theme (has `theme.json`).
- Color presets live at `{stylesheet directory}/styles/color-scheme/*.json`. Each file follows the WordPress style-variation format, e.g.:

```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "title": "Ocean",
  "settings": {
    "color": {
      "palette": [
        { "slug": "base", "color": "#f5f9fc", "name": "Base" },
        { "slug": "contrast", "color": "#0b2540", "name": "Contrast" },
        { "slug": "primary", "color": "#1273b5", "name": "Primary" }
      ]
    }
  }
}
```

- **Assumption:** palette slugs in every scheme file match the slugs used in the root `theme.json` (e.g. `base`, `contrast`, `primary`). Overriding the variables only works when slugs are consistent. If a scheme file introduces slugs the root palette doesn't have, its variables will be set but nothing in the theme references them — this is acceptable, do not error.

## Deliverables

| # | File | Purpose |
|---|------|---------|
| 1 | `inc/color-scheme-switcher.php` | Feature-flagged PHP: read JSON, expose data, enqueue JS |
| 2 | `assets/js/scheme-switcher.js` | Client-side switch/persist/reset logic |
| 3 | `functions.php` (edit) | Conditionally require the inc file |
| 4 | Picker markup (pattern or template part) | Static HTML buttons with `data-scheme` |
| 5 | `wp-config.php` (documentation only) | One-line constant definition for the site owner |

## Implementation

### 1. `functions.php` — conditional load

Add (adapt to existing code style; do not duplicate if a feature-loading convention already exists):

```php
if ( defined( 'MYTHEME_COLOR_SCHEME_SWITCHER' ) && MYTHEME_COLOR_SCHEME_SWITCHER === true ) {
	require get_stylesheet_directory() . '/inc/color-scheme-switcher.php';
}
```

When the flag is off, the file is never loaded — no hooks registered, no output anywhere.

### 2. `inc/color-scheme-switcher.php`

```php
<?php
/**
 * Frontend color scheme switcher (guest-facing).
 * Loaded only when MYTHEME_COLOR_SCHEME_SWITCHER === true. See functions.php.
 */

defined( 'ABSPATH' ) || exit;

/**
 * Read styles/color-scheme/*.json and return a minimal schemes map:
 * [ slug => [ 'title' => string, 'colors' => [ colorSlug => colorValue ] ] ]
 */
function mytheme_get_color_schemes() {
	$schemes = array();
	$files   = glob( get_stylesheet_directory() . '/styles/color-scheme/*.json' );

	if ( empty( $files ) ) {
		return $schemes;
	}

	foreach ( $files as $file ) {
		$data = json_decode( (string) file_get_contents( $file ), true );

		if ( empty( $data['settings']['color']['palette'] ) || ! is_array( $data['settings']['color']['palette'] ) ) {
			continue; // Skip malformed or non-color files silently.
		}

		$slug   = sanitize_title( $data['title'] ?? basename( $file, '.json' ) );
		$colors = array();

		foreach ( $data['settings']['color']['palette'] as $color ) {
			if ( empty( $color['slug'] ) || empty( $color['color'] ) ) {
				continue;
			}
			// WP generates CSS vars from kebab-cased slugs.
			$colors[ _wp_to_kebab_case( $color['slug'] ) ] = $color['color'];
		}

		if ( $colors ) {
			$schemes[ $slug ] = array(
				'title'  => $data['title'] ?? $slug,
				'colors' => $colors,
			);
		}
	}

	return $schemes;
}

add_action( 'wp_enqueue_scripts', function () {
	$schemes = mytheme_get_color_schemes();

	if ( empty( $schemes ) ) {
		return; // No presets found: feature silently inactive.
	}

	wp_enqueue_script(
		'mytheme-scheme-switcher',
		get_stylesheet_directory_uri() . '/assets/js/scheme-switcher.js',
		array(),
		wp_get_theme()->get( 'Version' ),
		array( 'strategy' => 'defer', 'in_footer' => true )
	);

	wp_add_inline_script(
		'mytheme-scheme-switcher',
		'window.MYTHEME_SCHEMES = ' . wp_json_encode( $schemes ) . ';',
		'before'
	);
} );
```

Notes for the implementer:

- Do NOT use `WP_Theme_JSON` / `get_stylesheet()` here — we intentionally bypass CSS generation.
- Optional optimization (not required): cache `mytheme_get_color_schemes()` output in a transient keyed by `max( array_map( 'filemtime', $files ) )`.

### 3. `assets/js/scheme-switcher.js`

```js
/**
 * Color scheme switcher.
 * Reads window.MYTHEME_SCHEMES (injected server-side), overrides
 * --wp--preset--color--* as inline styles on <html>, persists via localStorage.
 */
( function () {
	'use strict';

	var schemes = window.MYTHEME_SCHEMES || {};
	var root = document.documentElement;
	var STORAGE_KEY = 'mytheme-color-scheme';

	function applyScheme( slug ) {
		var scheme = schemes[ slug ];
		if ( ! scheme ) {
			return false;
		}
		clearInlineVars();
		Object.keys( scheme.colors ).forEach( function ( colorSlug ) {
			root.style.setProperty(
				'--wp--preset--color--' + colorSlug,
				scheme.colors[ colorSlug ]
			);
		} );
		try {
			localStorage.setItem( STORAGE_KEY, slug );
		} catch ( e ) { /* storage unavailable: still works for this page view */ }
		updatePressedState( slug );
		return true;
	}

	function clearInlineVars() {
		Object.keys( schemes ).forEach( function ( slug ) {
			Object.keys( schemes[ slug ].colors ).forEach( function ( colorSlug ) {
				root.style.removeProperty( '--wp--preset--color--' + colorSlug );
			} );
		} );
	}

	function resetScheme() {
		clearInlineVars();
		try {
			localStorage.removeItem( STORAGE_KEY );
		} catch ( e ) {}
		updatePressedState( 'default' );
	}

	function updatePressedState( activeSlug ) {
		document.querySelectorAll( '[data-scheme]' ).forEach( function ( el ) {
			el.setAttribute(
				'aria-pressed',
				el.dataset.scheme === activeSlug ? 'true' : 'false'
			);
		} );
	}

	// Re-apply saved choice on load.
	var saved = null;
	try {
		saved = localStorage.getItem( STORAGE_KEY );
	} catch ( e ) {}
	if ( saved && schemes[ saved ] ) {
		applyScheme( saved );
	} else {
		updatePressedState( 'default' );
	}

	// Event delegation: any element with [data-scheme] acts as a trigger.
	document.addEventListener( 'click', function ( e ) {
		var btn = e.target.closest( '[data-scheme]' );
		if ( ! btn ) {
			return;
		}
		var slug = btn.dataset.scheme;
		if ( slug === 'default' ) {
			resetScheme();
		} else {
			applyScheme( slug );
		}
	} );
} )();
```

### 4. Picker markup

Static HTML — place inside a block pattern, template part, or a Custom HTML block. `data-scheme` values must match the sanitized slugs (derived from each JSON file's `title`, or the filename if no title). Example:

```html
<div class="scheme-picker" role="group" aria-label="Color scheme">
	<button type="button" data-scheme="default" aria-pressed="true">Default</button>
	<button type="button" data-scheme="ocean" aria-pressed="false">Ocean</button>
	<button type="button" data-scheme="sunset" aria-pressed="false">Sunset</button>
</div>
```

Because the flag-off state removes only the JS (not this markup), either: (a) place the picker in a pattern that the site owner adds/removes manually, or (b) preferably hide it when inactive with a tiny CSS rule shipped with the feature — implementer's choice; document which was chosen. Simplest robust option: in `scheme-switcher.js`, add a class to `<html>` (e.g. `has-scheme-switcher`) on init, and ship CSS `.scheme-picker { display:none }` / `html.has-scheme-switcher .scheme-picker { display:flex }` enqueued from the same inc file.

### 5. `wp-config.php` (site-owner documentation, not committed by this task)

```php
define( 'MYTHEME_COLOR_SCHEME_SWITCHER', true );
```

## Acceptance Criteria

1. **Flag off / undefined:** no `scheme-switcher.js` request, no `window.MYTHEME_SCHEMES` in page source, picker not visible (per §4 choice). Zero PHP errors.
2. **Flag on:** clicking a scheme button immediately recolors every element that uses the theme's preset colors, with no page reload and no layout shift.
3. **Persistence:** after choosing a scheme, a hard reload keeps the chosen colors (brief flash of default colors before the deferred script runs is acceptable for v1).
4. **Reset:** the "default" button removes all inline `--wp--preset--color--*` properties from `<html>` (verify in DevTools: `html` element style attribute is empty of these vars) and colors return to the theme/global-styles values — including any admin customizations made in the Site Editor.
5. **Admin customizations respected:** if an admin changed a palette color in the Site Editor, "default" shows the admin's value (not the theme.json file value), while named schemes show the JSON file values. This falls out naturally from the remove-vs-set design — do not special-case it.
6. **Malformed input:** an invalid or non-palette JSON file in `styles/color-scheme/` is skipped without warnings/notices. An empty directory results in the feature silently doing nothing (no script enqueued).
7. **Storage blocked:** with `localStorage` unavailable (private mode / blocked), switching still works for the current page view; no uncaught exceptions.
8. **Accessibility:** buttons expose `aria-pressed` reflecting the active scheme.
9. Code passes WordPress PHP coding standards (tabs, Yoda conditions per existing codebase style) and works with `SCRIPT_DEBUG` on/off.

## Known Limitations (do not attempt to fix in this task)

- Only colors referenced through `--wp--preset--color--*` variables change. Hardcoded colors or `styles`-section element mappings inside variation files are NOT reproduced.
- Deferred script means a brief FOUC of default colors on reload. A future iteration may inline an early `<head>` script that re-applies a cached color map from `localStorage`.
- Full-page caches are unaffected (HTML is identical for all users), but caches must be purged after toggling the wp-config constant.

## Verification Steps (run after implementation)

1. Add the constant to `wp-config.php`, hard-refresh, confirm script + `window.MYTHEME_SCHEMES` present.
2. Click each scheme; inspect `<html>` in DevTools and confirm inline `--wp--preset--color--*` properties match the JSON values.
3. Reload; confirm choice persists. Click "default"; confirm inline vars are gone.
4. Remove the constant; hard-refresh; confirm criteria #1.
5. Temporarily add a broken JSON file to `styles/color-scheme/`; confirm no errors and other schemes still work; remove it.