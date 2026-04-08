# Nextora — theme extensibility

This theme is a **hybrid** setup: classic templates load **block template parts** (for example `header.php` → `parts/header.html`, `footer.php` → `parts/footer.html`). Plugins and child themes can extend the header and footer via WordPress actions and filters without editing core theme files.

## Related source files

| Topic | Path |
|--------|------|
| Page heading (archives, search, singular hero) | `inc/template/page-heading.php`, `template-parts/page-heading.php` |
| Header hooks | `inc/hooks/header-hooks.php` |
| Footer hooks | `inc/hooks/footer-hooks.php` |
| Navigation block ↔ menu locations | `inc/navigation/navigation.php` |
| Header shell | `header.php` |
| Footer shell | `footer.php` |
| Header markup (blocks) | `parts/header.html` |
| Footer markup (blocks) | `parts/footer.html` |
| Custom logo support | `inc/setup/theme-support.php` |
| Spotlight search (REST + markup) | `inc/search/spotlight-search.php` · [spotlight-search.md](./spotlight-search.md) |
| Comments form + Tiptap / KSES | `inc/comments/comments.php` · [comments-tiptap.md](./comments-tiptap.md) |
| Comment toolbar strings (`nextoraComments`) | `inc/assets/assets.php` |
| Header / footer nav layout (CSS) | `resources/css/modules/base/body.css` |
| Spotlight UI (CSS) | `resources/css/modules/components/spotlight-search.css` |
| Comments + Tiptap UI (CSS) | `resources/css/modules/base/comments.css` |
| Article share (PHP helpers + filters) | `inc/template/article-share.php` |

---

## Page heading (title band)

Output by `nextora_render_page_heading()` on blog index, archives, search, single posts, and pages. Markup and **Tailwind** utilities: `template-parts/page-heading.php`. The outer band uses a solid **contrast** background; the inner wrapper class comes from **`nextora_get_page_heading_inner_shell_class()`** so spacing and width align with content shells below.

Singular views use one **H1** in the heading; the article template omits the duplicate title and skips the in-article featured image when the heading uses that image as the hero background.

| Filter | Purpose |
|--------|---------|
| `nextora_show_page_heading` | Return `false` to hide the section. |
| `nextora_page_heading_context` | Replace or adjust the context array; return `null` to hide. |
| `nextora_page_heading_term_image_url` | Background image URL for term archives (empty string default); args: `''`, `WP_Term`. |
| `nextora_page_heading_image_url` | Singular hero image URL (defaults to featured image); args: URL string, post ID. |
| `nextora_page_heading_blog_title` | Title on the blog / posts index. |
| `nextora_page_heading_blog_description` | Optional subtitle on the blog index. |
| `nextora_page_heading_section_classes` | Classes on the outer `<section>`. |
| `nextora_page_heading_inner_shell_class` | Classes on the inner content wrapper. |

### Single post sidebar

`single.php` can show a **sticky sidebar** beside the post (featured image, author, date, categories, tags, previous/next). On large viewports the layout uses **`flex-row-reverse`**, so the sidebar column sits **to the left** and the article (and comments) stay in the main column. Return `false` from **`nextora_show_single_post_sidebar`** to restore the one-column layout and inline meta on the article template.

### Article title, meta, and share

`template-parts/content-article-title-meta.php` outputs the **title** (when `show_entry_title` is true), an optional **meta** row for posts (`show_meta`: date, author, categories), and **share** controls on **single posts** (not cards): X, Facebook, LinkedIn, email, plus **copy link** (Clipboard API). Share is gated by `show_share_actions` from `nextora_content_article_vars()` (posts, default layout, non-empty permalink). Logic and defaults live in **`inc/template/article-share.php`** (`nextora_get_article_share_items()`, `nextora_render_article_share_block()`).

#### Actions

| Action | When |
|--------|------|
| `nextora_before_article_title_meta_header` | Before the opening `<header>` of the article title/meta block. Args: `$article_args`. |
| `nextora_after_article_title_meta_header` | After the closing `</header>`. Args: `$article_args`. |
| `nextora_article_title_meta_header_start` | Inside `<header>`, before title/meta/share. Args: `$article_args`. |
| `nextora_article_title_meta_header_end` | Inside `<header>`, after title/meta/share. Args: `$article_args`. |
| `nextora_article_share_before` | Inside the share wrapper, before the heading. Args: `$post_id`, `$article_args`, `$permalink`. |
| `nextora_article_share_after` | Inside the share wrapper, after the status region. Args: `$post_id`, `$article_args`, `$permalink`. |

#### Filters (title + meta)

| Filter | Arguments | Purpose |
|--------|-----------|---------|
| `nextora_article_display_title` | `(string $title, array $article_args)` | Adjust the title text. |
| `nextora_article_permalink` | `(string $permalink, array $article_args)` | Adjust URL used for the title link, share links, and copy. |
| `nextora_article_header_classes` | `(string $classes, array $article_args)` | Classes on the `<header>`. |
| `nextora_article_title_classes` | `(string $classes, array $article_args)` | Classes on the title `h1` / `h2`. |
| `nextora_article_title_link_classes` | `(string $classes, array $article_args)` | Classes on the title link when `link_title` is true. |
| `nextora_article_meta_pieces` | `(array $pieces, int $post_id, array $article_args)` | Each string is HTML for one meta segment (wrapped in a span; separated by the “between” HTML below). |
| `nextora_article_meta_row_classes` | `(string $classes, array $article_args)` | Classes on the meta row wrapper. |
| `nextora_article_meta_between_pieces_html` | `(string $html, int $post_id, array $article_args)` | Snippet between meta pieces (default: middot span). |

#### Filters (share)

| Filter | Arguments | Purpose |
|--------|-----------|---------|
| `nextora_show_article_share_actions` | `(bool $show, int $post_id, array $article_args)` | Return `false` to hide the whole share region. |
| `nextora_article_share_markup` | `(null $custom, int $post_id, array $article_args, string $permalink, string $title)` | Return a **non-empty string** to replace default share HTML entirely (you must escape output). |
| `nextora_article_share_items` | `(array $items, int $post_id, array $article_args, string $permalink, string $title)` | Reorder, add, or remove share targets. Each item: `id`, `type` (`link` \| `copy`), `url`, `target`, `rel`, `label`, `icon_html`, optional `class`. |
| `nextora_article_share_item` | `(array $item, string $id, int $post_id, array $article_args)` | Adjust one item before render; return an empty array to skip. |
| `nextora_article_share_wrapper_classes` | `(string $classes, int $post_id, array $article_args)` | Outer share container (has `data-nextora-article-share`). |
| `nextora_article_share_buttons_wrap_classes` | `(string $classes, int $post_id, array $article_args)` | Flex row around controls. |
| `nextora_article_share_button_classes` | `(string $classes, string $id, array $item, int $post_id, array $article_args)` | Per control (link or copy button). |
| `nextora_article_share_heading_text` | `(string $text, int $post_id, array $article_args)` | Plain-text heading above buttons. |
| `nextora_article_share_group_aria_label` | `(string $label, int $post_id, array $article_args)` | `aria-label` on the `role="group"` wrapper. |
| `nextora_article_share_icon_allowed_html` | `(array $allowed_tags)` | KSES allowlist for `icon_html` SVG snippets. |

#### Script localization

| Filter | Purpose |
|--------|---------|
| `nextora_article_share_script_vars` | `(array $strings)` before `wp_localize_script` builds **`window.nextoraArticleShare`** (`inc/assets/assets.php`). |

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
