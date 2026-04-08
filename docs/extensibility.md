# Nextora — theme extensibility

This theme is a **hybrid** setup: classic templates load **block template parts** (for example `header.php` → `parts/header.html`, `footer.php` → `parts/footer.html`). Plugins and child themes can extend the header and footer via WordPress actions and filters without editing core theme files.

## Related source files

| Topic | Path |
|--------|------|
| Header hooks | `inc/hooks/header-hooks.php` |
| Footer hooks | `inc/hooks/footer-hooks.php` |
| Navigation block ↔ menu locations | `inc/navigation/navigation.php` |
| Header shell | `header.php` |
| Footer shell | `footer.php` |
| Header markup (blocks) | `parts/header.html` |
| Footer markup (blocks) | `parts/footer.html` |
| Custom logo support | `inc/setup/theme-support.php` |
| Spotlight search (REST + markup) | `inc/search/spotlight-search.php` · [spotlight-search.md](./spotlight-search.md) |
| Header / footer nav layout (CSS) | `resources/css/modules/base/body.css` |
| Spotlight UI (CSS) | `resources/css/modules/components/spotlight-search.css` |

---

## Custom logo

The theme registers `custom-logo` (flexible dimensions). The header template part includes the **Site Logo** block before the **Site Title**. If no logo is set, the logo block is hidden with CSS so the title still shows.

Set the logo under **Appearance → Editor** (header template part) or **Appearance → Customize → Site Identity**, depending on your admin workflow.

---

## Header

### Header actions

These run in `header.php` around `block_template_part( 'header' )`.

| Hook | When |
|------|------|
| `nextora_header_before` | Immediately after `<header class="site-header">` opens. |
| `nextora_header_after` | Immediately before `</header>`. |

Use them for site-wide banners, skip links, or markup that should sit **outside** the block-based header group.

The theme ships a **search icon → modal** on `nextora_header_after_primary_nav` (priority 20) in `inc/hooks/header-hooks.php`. Markup uses **Tailwind** utilities plus required `nextora-modal*` classes (for `resources/ts/lib/modal.ts`).

**Mobile primary menu:** the **primary** `core/navigation` block is wrapped (`render_block` priority **12**) with a hamburger button. On small viewports the menu is **cloned** into a **portal** (`<div>` appended to `document.body`) so it is not clipped by header `overflow` or stacking contexts; see `resources/ts/header-nav.ts`. Disable the toggle + wrapper with:

```php
add_filter( 'nextora_show_header_nav_mobile_toggle', '__return_false' );
```

Disable entirely:

```php
add_filter( 'nextora_show_header_search_modal', '__return_false' );
```

**Actions:** `nextora_header_search_modal_before`, `nextora_header_search_modal_after` — both receive the resolved args array from `nextora_get_header_search_modal_markup_args()`.

**Filters:**

| Filter | Purpose |
|--------|---------|
| `nextora_header_search_modal_id` | Modal root `id` (sanitized). |
| `nextora_show_header_nav_mobile_toggle` | Return false to omit the mobile nav hamburger + drawer wrapper around the primary menu. |
| `nextora_header_nav_mobile_toggle_args` | Classes, ids, labels (`toggle_id`, `panel_id`, `portal_root_id`, `portal_panel_id`, `portal_title_id`, `portal_dialog_label`, `toggle_class`, `panel_class`, …). |
| `nextora_header_nav_mobile_toggle_icon_svg` | Hamburger icon SVG (`wp_kses`). |
| `nextora_header_search_modal_markup_args` | Merge class strings and labels (`title_text`, `spotlight_subtitle_text`, `spotlight_modal_header_class`, `spotlight_modal_header_text_class`, `spotlight_title_class`, `spotlight_subtitle_class`, `spotlight_close_wrap_class`, `subtitle_id`, `trigger_class`, …). Set `spotlight_subtitle_text` to `''` to hide the subtitle (and `aria-describedby`). Keep `nextora-modal` / `nextora-modal__surface` on the root and panel unless you replace `nextora_header_search_modal_output` entirely. |
| `nextora_header_search_modal_icon_svg` | Trigger icon markup (passed through SVG `wp_kses`). |
| `nextora_header_search_modal_close_icon_svg` | Close control icon (same). |
| `nextora_header_search_modal_form_html` | HTML from `get_search_form()` after generation. |
| `nextora_header_search_modal_output` | Final combined HTML string (full override). |

**Styling example** (larger hit target on the trigger):

```php
add_filter(
	'nextora_header_search_modal_markup_args',
	static function ( array $args ): array {
		$args['trigger_class'] = 'inline-flex size-11 items-center justify-center rounded-lg border border-base/20 bg-base/10 p-0 text-base backdrop-blur-sm transition hover:bg-base/20';
		return $args;
	}
);
```

**Spotlight AJAX search** (inside that modal) uses the WordPress REST route `wp/v2/search`, debounced requests, and `AbortController` for stale responses. Overview: [spotlight-search.md](./spotlight-search.md). PHP filters in `inc/search/spotlight-search.php`:

| Filter | Default / purpose |
|--------|-------------------|
| `nextora_spotlight_rest_url` | `rest_url( 'wp/v2/search' )` — point to a custom endpoint if needed. |
| `nextora_spotlight_debounce_ms` | `280` |
| `nextora_spotlight_min_query_length` | `2` |
| `nextora_spotlight_per_page` | `12` |
| `nextora_spotlight_search_inner_html` | Full inner form markup replacement. |

Strings shown in the UI are passed via the `nextoraSpotlight` script object (localized with `nextora-main`).

### Primary navigation suffix

The primary menu lives inside a flex group with class **`nextora-header-nav-cluster`**. Anything you add via the hook below appears **after** the `<nav>` (or navigation block output), still inside that cluster—so it stays on the same row as the menu, aligned to the end of the header.

| Hook | When |
|------|------|
| `nextora_header_after_primary_nav` | After the **primary** `core/navigation` block is rendered. Echo HTML here. |

| Filter | Arguments | Purpose |
|--------|-----------|---------|
| `nextora_header_after_primary_nav_html` | `(string $html, array $block)` | Change or append to the captured HTML before it is wrapped and output. |

Captured output is wrapped in:

```html
<div class="nextora-header-nav-suffix shrink-0">…</div>
```

The suffix container is a horizontal flex row (`align-items: center`, gap) so multiple controls (cart, CTA) line up cleanly.

#### When the header nav hook runs

- Only for `core/navigation` with `__unstableLocation` **`primary`**.
- Implemented with `render_block` at **priority 15**, after `nextora_render_navigation_from_menu_location()` (**10**).

---

## Footer

### Footer actions

These run in `footer.php` around `block_template_part( 'footer' )`.

| Hook | When |
|------|------|
| `nextora_footer_before` | Immediately after `<footer class="site-footer">` opens. |
| `nextora_footer_after` | Immediately before `</footer>`. |

Use them for analytics snippets, decorative markup, or content that should sit **outside** the main block footer group.

### Footer navigation suffix

The footer menu lives inside **`nextora-footer-nav-cluster`**, a centered, wrapping flex row. Hook output is appended **after** the footer `<nav>` (or navigation block output), still inside that cluster—so it sits beside the menu on wide viewports and wraps with it on small screens. The theme’s “Proudly powered by WordPress” line stays **below** this cluster (unchanged).

| Hook | When |
|------|------|
| `nextora_footer_after_footer_nav` | After the **footer** `core/navigation` block is rendered. Echo HTML here. |

| Filter | Arguments | Purpose |
|--------|-----------|---------|
| `nextora_footer_after_footer_nav_html` | `(string $html, array $block)` | Change or append to the captured HTML before it is wrapped and output. |

Captured output is wrapped in:

```html
<div class="nextora-footer-nav-suffix">…</div>
```

#### When the footer nav hook runs

- Only for `core/navigation` with `__unstableLocation` **`footer`** (the **Footer Menu** location in **Appearance → Menus**).
- Same `render_block` **priority 15** ordering as the header suffix (after the menu-location filter at **10**).

If no menu is assigned to the footer location, the navigation block may render empty; suffix-only output (for example icons without a menu) still appears inside the cluster.

---

## Examples

### Header — CTA after the menu

```php
add_action(
	'nextora_header_after_primary_nav',
	static function (): void {
		printf(
			'<a class="inline-flex rounded-md border border-current/30 px-3 py-1.5 text-sm font-medium hover:opacity-90" href="%s">%s</a>',
			esc_url( home_url( '/contact/' ) ),
			esc_html__( 'Contact', 'your-textdomain' )
		);
	}
);
```

### Header — append markup with a filter

```php
add_filter(
	'nextora_header_after_primary_nav_html',
	static function ( string $html, array $block ): string {
		return $html . '<span class="text-sm opacity-80">' . esc_html__( 'Sale ends Friday', 'your-textdomain' ) . '</span>';
	},
	10,
	2
);
```

### Footer — simple text or shortcode

```php
add_action(
	'nextora_footer_after_footer_nav',
	static function (): void {
		echo '<p class="text-sm text-secondary">' . esc_html__( '© Your Company', 'your-textdomain' ) . '</p>';
	}
);
```

### Footer — filter without echoing

```php
add_filter(
	'nextora_footer_after_footer_nav_html',
	static function ( string $html, array $block ): string {
		return $html . '<a class="text-sm underline" href="' . esc_url( wp_get_privacy_policy_url() ) . '">' . esc_html__( 'Privacy', 'your-textdomain' ) . '</a>';
	},
	10,
	2
);
```

### WooCommerce (header, illustrative)

The hook only provides a **slot** for HTML; use Woo’s blocks, shortcodes, or APIs as appropriate for your version:

```php
add_action(
	'nextora_header_after_primary_nav',
	static function (): void {
		if ( ! function_exists( 'woocommerce_mini_cart' ) ) {
			return;
		}
		echo '<div class="nextora-header-mini-cart">';
		woocommerce_mini_cart();
		echo '</div>';
	}
);
```

---

## Child theme recommendation

Put integrations in the child theme’s `functions.php` (or a small `inc/integrations.php` required from there) so updates to Nextora do not overwrite your code.
