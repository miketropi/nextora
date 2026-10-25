# Nextora — theme extensibility

Nextora is a **block theme**: templates and template parts are HTML block markup (`templates/`, `parts/`). Plugins and child themes extend behavior via **WordPress hooks and filters** on PHP render paths (especially `nextora/header`) without editing theme source.

## Related source files

| Topic | Path |
|--------|------|
| Site header block | `blocks/header/render.php`, `blocks/header/block.json` |
| Header markup (default) | `parts/header.html` |
| Footer markup | `parts/footer.html` |
| Navigation ↔ menu locations | `inc/navigation/navigation.php` |
| Spotlight search (REST + modal) | `inc/features/spotlight-search/` · [spotlight-search.md](./spotlight-search.md) |
| Comments + Tiptap / KSES | `inc/comments/comments.php` · [comments-tiptap.md](./comments-tiptap.md) |
| Comment toolbar strings | `inc/assets/assets.php` → `window.nextoraComments` |
| Modal behavior | `resources/ts/lib/modal.ts` · [modal.md](./modal.md) |
| Nav / drawer CSS | `resources/css/modules/base/nav-menus.css` |
| Post grid block | `blocks/post-grid/render.php` |

---

## `nextora/header` block

Primary header UI. Default placement: `parts/header.html`. Hooks fire from `blocks/header/render.php`.

### Block lifecycle

| Action | When |
|--------|------|
| `nextora_header_block_before` | Before inner layout markup. |
| `nextora_header_block_after` | After inner layout markup. |

### Logo

| Action / filter | Purpose |
|-----------------|---------|
| `nextora_header_block_before_logo` | Before logo region. |
| `nextora_header_block_after_logo` | After logo region. |
| `nextora_header_block_logo_link` | Filter home URL (`$url`, `$atts`). |

Logo is configured in the block sidebar (`logoType`, `logoImageId`, `logoText`, …) — not via Customizer `custom_logo`.

### Navigation

| Action / filter | Purpose |
|-----------------|---------|
| `nextora_header_block_before_nav` | Before nav markup. |
| `nextora_header_block_after_nav` | After nav markup. |
| `nextora_header_block_nav_menu_args` | `wp_nav_menu()` arguments. |
| `nextora_header_block_nav_aria_label` | Nav `aria-label`. |
| `nextora_header_block_nav_wrapper_classes` | Classes on `<nav>`. |
| `nextora_header_block_menu_item_classes` | Menu item `<li>` classes. |
| `nextora_header_block_menu_link_attributes` | Menu link attributes. |

### Utilities (search, cart, account)

| Action | When |
|--------|------|
| `nextora_header_block_utilities_start` | Start of utilities column. |
| `nextora_header_block_before_cart` | Before mini cart trigger. |
| `nextora_header_block_after_cart` | After mini cart drawer markup. |
| `nextora_header_block_utilities_end` | End of utilities column. |

| Filter | Purpose |
|--------|---------|
| `nextora_show_header_search_modal` | Return `false` to hide search UI. |
| `nextora_header_simple_search_placeholder` | Simple search field placeholder. |
| `nextora_header_simple_search_submit_icon_svg` | Simple search submit icon SVG. |
| `nextora_header_block_spotlight_search_output` | Spotlight markup from header block. |
| `nextora_header_block_mini_cart_title` | Cart drawer title. |
| `nextora_header_block_mini_cart_open_label` | Cart button base aria label. |
| `nextora_header_block_mini_cart_aria_label` | Full cart button aria label. |

WooCommerce cart badge fragments: `nextora_header_block_cart_fragments` filter in `inc/navigation/header-block-woocommerce.php`.

### Sticky header

| Filter | Purpose |
|--------|---------|
| `nextora_header_block_sticky_hide_after` | Scroll Y before scroll-up hide (default `72`). → `window.nextoraHeaderSticky.hideAfter`. |
| `nextora_header_block_wrapper_classes` | Extra classes on block wrapper. |

Front-end: `resources/ts/header-sticky.ts`, styles in `blocks/header/style.css`.

---

## Spotlight search

Default: **`nextora/header`** with search mode **spotlight**, or standalone **`nextora/spotlight-search`** block.

See [spotlight-search.md](./spotlight-search.md) for REST filters, `window.nextoraSpotlight`, and modal markup filters (`nextora_header_search_modal_*`, `nextora_spotlight_*`).

Disable search in the header:

```php
add_filter( 'nextora_show_header_search_modal', '__return_false' );
```

---

## Core navigation ↔ menu locations

`inc/navigation/navigation.php` renders **`wp_nav_menu()`** when a `core/navigation` block has `__unstableLocation` set and no saved inner blocks — used in **`parts/footer.html`** (footer location).

Register locations in `inc/setup/theme-support.php`: `primary`, `footer`.

---

## Comments

| Filter | Purpose |
|--------|---------|
| `nextora_comment_form_args` | `comment_form()` arguments. |
| `nextora_comment_tiptap_js_config` | Tiptap toolbar config for `window.nextoraCommentTiptap`. |

See [comments-tiptap.md](./comments-tiptap.md).

---

## `nextora/post-grid` block

| Filter | Purpose |
|--------|---------|
| `nextora_post_grid_query_args` | `WP_Query` arguments. |
| `nextora_post_grid_pagination_args` | Pagination arguments. |
| `nextora_post_grid_output` | Final HTML string. |

---

## Article share (client-side)

`resources/ts/lib/article-share.ts` binds copy-link buttons inside **`[data-nextora-article-share]`** regions. Add that markup via a block pattern, custom HTML block, or child theme template — there is no dedicated share block yet.

---

## Nextora Addon overview data

`admin.php?page=nextora-addon-overview` renders from `extensions/data/overview.php` → `nextora_get_overview_data()`, served as `GET /nextora/v1/addon/overview` (nonce + `manage_options`).

| Filter | Purpose | Runs |
|--------|---------|------|
| `nextora_addon_overview_videos` | Getting-started lessons for the video workspace. | First |
| `nextora_addon_overview_gallery` | Items in the extra `Extensions` showcase. | First |
| `nextora_addon_overview_data` | Whole payload; sees everything above. | Last |

Lesson records use the same field names as gallery items, and the returned array order is display order.

```php
add_filter(
	'nextora_addon_overview_videos',
	function ( array $videos ): array {
		$videos[] = array(
			'id'          => 'child-theme-setup',
			'title'       => __( 'Child theme setup', 'my-child-theme' ),
			'description' => __( 'Where the child theme files live.', 'my-child-theme' ),
			'url'         => 'https://example.com/lessons/child-theme.mp4',
			'thumbnail'   => 'https://example.com/lessons/child-theme.jpg', // Optional.
			'sourceLabel' => __( 'Child theme', 'my-child-theme' ),          // Optional badge.
		);

		return $videos;
	}
);
```

- The theme ships **no** tutorial videos, so the `Getting started` tab shows an empty state until a site or child theme supplies lessons.
- `url` must be directly playable media over http(s) (`mp4`/`webm`). Provider embeds are not supported.
- An entry without an `id`, a `title`, or a safe media URL is skipped, so malformed records never render a dead row.
- Lesson durations are read from the media metadata at runtime; do not supply them.

---

## Child theme recommendation

Put integrations in the child theme’s `functions.php` (or `inc/integrations.php`) so parent theme updates are safe.

For template changes, use **Appearance → Editor** or override `templates/` / `parts/` in the child theme.
