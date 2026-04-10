<?php
/**
 * Extensibility around the site header (CTAs, WooCommerce mini cart, etc.).
 *
 * ## Actions
 *
 * - `nextora_header_before` — Before the header template part (inside `<header class="site-header">`).
 * - `nextora_header_after` — After the header template part.
 * - `nextora_header_after_primary_nav` — Echo markup immediately after the **primary** navigation
 *   block inside `.nextora-header-nav-cluster` (same row as the menu, end-aligned cluster).
 *   By default the **spotlight UI is the `nextora/spotlight-search` block** in
 *   `parts/header.html` (not this hook). To restore PHP-only injection (no block),
 *   use `add_filter( 'nextora_header_spotlight_search_use_php_hook', '__return_true' );`
 *   — runs {@see nextora_header_search_modal_trigger()} on this action (priority 20).
 *   You can still disable modal output with `add_filter( 'nextora_show_header_search_modal', '__return_false' );`.
 * - Primary navigation (mobile): a hamburger toggle is injected **before** the nav via
 *   {@see nextora_wrap_primary_navigation_mobile_toggle()} (`render_block` priority 12).
 *   Disable with `add_filter( 'nextora_show_header_nav_mobile_toggle', '__return_false' );`.
 * - `nextora_header_search_modal_before` / `nextora_header_search_modal_after` — (array $args) Around legacy PHP search modal output.
 *
 * ## Filters
 *
 * - `nextora_header_after_primary_nav_html` — (string $html, array $block) Adjust suffix HTML.
 * - `nextora_show_header_nav_mobile_toggle` — (bool) Return false to omit the mobile menu button + drawer wrapper.
 * - `nextora_header_nav_mobile_toggle_args` — (array $args) Classes, ids, labels (`toggle_id`, `panel_id`, `portal_root_id`, `portal_panel_id`, `portal_title_id`, `portal_dialog_label`, …).
 * - `nextora_header_nav_mobile_toggle_icon_svg` — (string $svg, array $args) Hamburger icon markup (`wp_kses` SVG).
 *
 * **Spotlight search** (modal markup, inner form, REST localization, block merge, filter reference): `inc/features/spotlight-search/` · [spotlight-search.md](../../docs/spotlight-search.md).
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default hamburger icon SVG for the mobile primary nav toggle.
 */
function nextora_header_nav_mobile_toggle_default_icon_svg(): string {
	return '<svg width="22" color="white" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>';
}

/**
 * Class names, ids, and labels for the mobile nav toggle + panel wrapper.
 *
 * @return array<string, string>
 */
function nextora_get_header_nav_mobile_toggle_args(): array {
	$defaults = array(
		'toggle_id'              => 'nextora-primary-nav-toggle',
		'panel_id'               => 'nextora-primary-nav-panel',
		'portal_root_id'         => 'nextora-primary-nav-portal-root',
		'portal_panel_id'        => 'nextora-primary-nav-portal-panel',
		'portal_title_id'        => 'nextora-primary-nav-portal-title',
		'portal_dialog_label'    => __( 'Primary navigation', 'nextora' ),
		'shell_class'            => 'nextora-primary-nav-shell relative z-[1] flex min-w-0 flex-1 items-center justify-end gap-2',
		'toggle_class'           => 'nextora-nav-menu-toggle inline-flex size-10 shrink-0 items-center justify-center rounded-md border-0 bg-transparent p-0 text-base text-inherit transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-base md:hidden',
		'toggle_icon_wrap_class' => 'flex leading-none',
		'panel_class'            => 'nextora-primary-nav-panel nextora-primary-nav-panel--source hidden md:flex md:min-w-0 md:flex-1 md:items-center md:justify-end',
		'open_label'             => __( 'Open menu', 'nextora' ),
		'close_label'            => __( 'Close menu', 'nextora' ),
	);

	$args = apply_filters( 'nextora_header_nav_mobile_toggle_args', $defaults );
	$args = is_array( $args ) ? wp_parse_args( $args, $defaults ) : $defaults;

	foreach ( array_keys( $defaults ) as $key ) {
		if ( isset( $args[ $key ] ) && is_string( $args[ $key ] ) ) {
			continue;
		}
		$args[ $key ] = $defaults[ $key ];
	}

	return $args;
}

/**
 * Wrap primary `core/navigation` with a mobile hamburger toggle and sliding panel.
 *
 * Priority 12: after {@see nextora_render_navigation_from_menu_location()} (10),
 * before {@see nextora_append_header_primary_nav_suffix()} (15).
 *
 * @param string $block_content Rendered block HTML.
 * @param array  $block         Parsed block array.
 * @return string
 */
function nextora_wrap_primary_navigation_mobile_toggle( string $block_content, array $block ): string {
	if ( ! apply_filters( 'nextora_show_header_nav_mobile_toggle', true ) ) {
		return $block_content;
	}

	if ( ( $block['blockName'] ?? '' ) !== 'core/navigation' ) {
		return $block_content;
	}

	$attrs = $block['attrs'] ?? array();
	$location = isset( $attrs['__unstableLocation'] ) && is_string( $attrs['__unstableLocation'] )
		? $attrs['__unstableLocation']
		: '';
	if ( 'primary' !== $location ) {
		return $block_content;
	}

	if ( '' === trim( $block_content ) ) {
		return $block_content;
	}

	$args     = nextora_get_header_nav_mobile_toggle_args();
	$kses     = nextora_header_search_modal_kses_svg();
	$icon_svg = (string) apply_filters(
		'nextora_header_nav_mobile_toggle_icon_svg',
		nextora_header_nav_mobile_toggle_default_icon_svg(),
		$args
	);
	$icon_svg = wp_kses( $icon_svg, $kses );

	$toggle_id        = $args['toggle_id'];
	$panel_id         = $args['panel_id'];
	$portal_root_id   = $args['portal_root_id'];
	$portal_panel_id  = $args['portal_panel_id'];
	$portal_title_id  = $args['portal_title_id'];
	$source_selector  = '#' . $panel_id;

	ob_start();
	?>
	<div class="<?php echo esc_attr( $args['shell_class'] ); ?>">
		<button
			type="button"
			id="<?php echo esc_attr( $toggle_id ); ?>"
			class="<?php echo esc_attr( $args['toggle_class'] ); ?>"
			data-nextora-nav-toggle
			aria-controls="<?php echo esc_attr( $portal_panel_id ); ?>"
			aria-expanded="false"
			aria-haspopup="dialog"
			aria-label="<?php echo esc_attr( $args['open_label'] ); ?>"
			data-nextora-nav-open-label="<?php echo esc_attr( $args['open_label'] ); ?>"
			data-nextora-nav-close-label="<?php echo esc_attr( $args['close_label'] ); ?>"
			data-nextora-nav-clone-source="<?php echo esc_attr( $source_selector ); ?>"
			data-nextora-nav-portal-root="<?php echo esc_attr( $portal_root_id ); ?>"
			data-nextora-nav-portal-panel="<?php echo esc_attr( $portal_panel_id ); ?>"
			data-nextora-nav-portal-title="<?php echo esc_attr( $portal_title_id ); ?>"
			data-nextora-nav-portal-dialog-label="<?php echo esc_attr( $args['portal_dialog_label'] ); ?>"
		>
			<span class="<?php echo esc_attr( $args['toggle_icon_wrap_class'] ); ?>" aria-hidden="true">
				<?php echo $icon_svg; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- wp_kses() above. ?>
			</span>
		</button>
		<div
			id="<?php echo esc_attr( $panel_id ); ?>"
			class="<?php echo esc_attr( $args['panel_class'] ); ?>"
			data-nextora-nav-source-panel
		>
			<?php echo $block_content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Core / theme navigation HTML. ?>
		</div>
	</div>
	<?php
	return (string) ob_get_clean();
}

add_filter( 'render_block', 'nextora_wrap_primary_navigation_mobile_toggle', 12, 2 );

/**
 * Append plugin / child-theme output after the header primary navigation.
 *
 * Runs at priority 15 so it runs after {@see nextora_render_navigation_from_menu_location()} (10).
 *
 * @param string $block_content Rendered block HTML.
 * @param array  $block         Parsed block array.
 * @return string
 */
function nextora_append_header_primary_nav_suffix( string $block_content, array $block ): string {
	if ( ( $block['blockName'] ?? '' ) !== 'core/navigation' ) {
		return $block_content;
	}

	$attrs = $block['attrs'] ?? array();
	$location = isset( $attrs['__unstableLocation'] ) && is_string( $attrs['__unstableLocation'] )
		? $attrs['__unstableLocation']
		: '';
	if ( 'primary' !== $location ) {
		return $block_content;
	}

	ob_start();
	/**
	 * Fires after the primary navigation block markup; output is placed at the end of the nav cluster.
	 *
	 * Example — outline button CTA:
	 *
	 *     add_action( 'nextora_header_after_primary_nav', static function (): void {
	 *         printf(
	 *             '<a class="nextora-header-cta" href="%s">%s</a>',
	 *             esc_url( home_url( '/contact/' ) ),
	 *             esc_html__( 'Contact', 'textdomain' )
	 *         );
	 *     } );
	 *
	 * Example — WooCommerce (plugin-specific; only when Woo is active):
	 *
	 *     add_action( 'nextora_header_after_primary_nav', static function (): void {
	 *         if ( ! function_exists( 'woocommerce_mini_cart' ) ) {
	 *             return;
	 *         }
	 *         echo '<div class="nextora-header-mini-cart">';
	 *         woocommerce_mini_cart();
	 *         echo '</div>';
	 *     } );
	 */
	do_action( 'nextora_header_after_primary_nav' );

	$html = ob_get_clean();
	$html = is_string( $html ) ? $html : '';
	$html = apply_filters( 'nextora_header_after_primary_nav_html', $html, $block );

	if ( ! is_string( $html ) || '' === trim( $html ) ) {
		return $block_content;
	}

	return $block_content . '<div class="nextora-header-nav-suffix shrink-0">' . $html . '</div>';
}

add_filter( 'render_block', 'nextora_append_header_primary_nav_suffix', 15, 2 );
