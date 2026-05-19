<?php
/**
 * Server-side render: nextora/header.
 *
 * @package Nextora
 *
 * @var array         $attributes Block attributes.
 * @var string        $content    Inner blocks (unused).
 * @var WP_Block|null $block      Block instance.
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$attributes = is_array( $attributes ?? null ) ? $attributes : array();

if ( ! function_exists( 'nextora_header_block_sanitize_border_color' ) ) {
	/**
	 * Sanitize `bottomBorderColor` for a CSS `border-*-color` value.
	 *
	 * @param string $value Raw attribute.
	 */
	function nextora_header_block_sanitize_border_color( string $value ): string {
		$value = trim( $value );
		if ( '' === $value ) {
			return '';
		}

		// Serialized preset from block markup (Global Styles format).
		if ( preg_match( '/^var:preset\|color\|([a-z0-9_-]+)$/i', $value, $preset_m ) ) {
			return 'var(--wp--preset--color--' . strtolower( $preset_m[1] ) . ')';
		}

		$hex = sanitize_hex_color( $value );
		if ( is_string( $hex ) && '' !== $hex ) {
			return $hex;
		}

		// 8-digit RGBA hex (common from the color picker with alpha).
		if ( preg_match( '/^#([0-9a-f]{8})$/i', $value ) ) {
			return strtolower( $value );
		}

		// Theme palette (CSS variable).
		if ( preg_match( '/^var\(\s*--wp--preset--color--[a-z0-9_-]+\s*\)$/i', $value ) ) {
			return preg_replace( '/\s+/', ' ', $value );
		}

		// rgb()/rgba() and hsl()/hsla() — comma or space + slash; reject obvious injection.
		if ( strlen( $value ) <= 140
			&& ! preg_match( '/[;<>{}]|url\s*\(|expression\s*\(/i', $value )
			&& preg_match( '/^(?:rgb|hsl)a?\([^)]+\)$/i', $value ) ) {
			return preg_replace( '/\s+/', ' ', $value );
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_header_block_append_border_color_to_wrapper' ) ) {
	/**
	 * Append border-bottom-color as the last declaration in the wrapper style attribute so it wins over
	 * block-support styles and other rules in the same inline style.
	 *
	 * @param string $wrapper_attributes Output from get_block_wrapper_attributes().
	 * @param string $san_border         Sanitized color value.
	 */
	function nextora_header_block_append_border_color_to_wrapper( string $wrapper_attributes, string $san_border ): string {
		if ( '' === $san_border ) {
			return $wrapper_attributes;
		}

		$declaration = 'border-bottom-color:' . $san_border;

		if ( preg_match( '/\bstyle="([^"]*)"/', $wrapper_attributes, $m ) ) {
			$existing = html_entity_decode( $m[1], ENT_QUOTES | ENT_HTML5, 'UTF-8' );
			$new_css  = trim( rtrim( $existing, ';' ) ) . ';' . $declaration;

			return (string) preg_replace(
				'/\bstyle="[^"]*"/',
				'style="' . esc_attr( $new_css ) . '"',
				$wrapper_attributes,
				1
			);
		}

		return trim( $wrapper_attributes ) . ' style="' . esc_attr( $declaration ) . '"';
	}
}

if ( ! function_exists( 'nextora_header_block_sanitize_inner_max_width' ) ) {
	/**
	 * Sanitize custom max-width for `.nextora-header-block__inner` inline style only.
	 *
	 * @param string $value Raw attribute.
	 */
	function nextora_header_block_sanitize_inner_max_width( string $value ): string {
		$value = trim( $value );
		if ( '' === $value || strlen( $value ) > 120 ) {
			return '';
		}

		if ( preg_match( '/[;<>{}]|url\s*\(|expression\s*\(|\\\\/i', $value ) ) {
			return '';
		}

		if ( preg_match( '/^var\(\s*(--[a-zA-Z0-9][a-zA-Z0-9._-]*)\s*\)$/', $value, $var_m ) ) {
			return 'var(' . $var_m[1] . ')';
		}

		if ( preg_match( '/^(?:0|[0-9]*\.?[0-9]+)(?:px|rem|em|%|vw|vh|svw|svh|ch|cap)$/i', $value ) ) {
			return $value;
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_header_block_render_simple_search_form' ) ) {
	/**
	 * HTML5 search markup for header “simple” mode: underline field plus icon-only submit.
	 *
	 * The submit is painted on the logical start (overlaid). DOM order puts the input first so tab order is field → button.
	 */
	function nextora_header_block_render_simple_search_form(): void {
		$form_action  = home_url( '/' );
		$placeholder = apply_filters( 'nextora_header_simple_search_placeholder', __( 'Search …', 'nextora' ) );
		if ( ! is_string( $placeholder ) ) {
			$placeholder = __( 'Search …', 'nextora' );
		}
		$search_query = get_search_query();
		$icon_svg     = '<svg class="nextora-header-block__search-submit-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" /><path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>';
		$icon_svg     = apply_filters( 'nextora_header_simple_search_submit_icon_svg', $icon_svg );
		if ( ! is_string( $icon_svg ) || '' === trim( $icon_svg ) ) {
			$icon_svg = '<svg class="nextora-header-block__search-submit-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" /><path d="m21 21-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>';
		}
		?>
		<form role="search" method="get" class="search-form" action="<?php echo esc_url( $form_action ); ?>">
			<div class="nextora-header-block__search-simple-field">
				<label>
					<span class="screen-reader-text"><?php echo esc_html_x( 'Search for:', 'label', 'nextora' ); ?></span>
					<input
						type="search"
						class="search-field"
						name="s"
						value="<?php echo esc_attr( $search_query ); ?>"
						placeholder="<?php echo esc_attr( $placeholder ); ?>"
						autocomplete="off"
					/>
				</label>
				<button type="submit" class="search-submit">
					<span class="screen-reader-text"><?php echo esc_html_x( 'Search', 'submit button', 'nextora' ); ?></span>
					<?php
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- SVG from theme default or trusted filter-only replacement.
					echo $icon_svg;
					?>
				</button>
			</div>
		</form>
		<?php
	}
}

$woo_on = static function (): bool {
	return class_exists( 'WooCommerce', false );
};

/**
 * Logo region.
 *
 * @param array<string, mixed> $atts Attributes.
 */
$render_logo = static function ( array $atts ): string {
	do_action( 'nextora_header_block_before_logo', $atts );

	$logo_href = isset( $atts['logoLink'] ) && is_string( $atts['logoLink'] ) ? trim( $atts['logoLink'] ) : '';
	$logo_href = '' !== $logo_href ? $logo_href : home_url( '/' );
	$logo_href = (string) apply_filters( 'nextora_header_block_logo_link', $logo_href, $atts );

	$logo_w = isset( $atts['logoWidth'] ) ? (int) $atts['logoWidth'] : 150;
	if ( $logo_w < 1 ) {
		$logo_w = 150;
	}

	$logo_type = isset( $atts['logoType'] ) && 'text' === $atts['logoType'] ? 'text' : 'image';

	ob_start();
	?>
	<div class="nextora-header-block__logo">
		<a class="nextora-header-block__logo-link" href="<?php echo esc_url( $logo_href ); ?>" rel="home">
			<?php if ( 'text' === $logo_type ) : ?>
				<span class="nextora-header-block__logo-text">
					<?php
					$text = isset( $atts['logoText'] ) && is_string( $atts['logoText'] ) ? trim( $atts['logoText'] ) : '';
					echo esc_html( '' !== $text ? $text : get_bloginfo( 'name' ) );
					?>
				</span>
			<?php elseif ( function_exists( 'has_custom_logo' ) && has_custom_logo() ) : ?>
				<?php
				echo wp_get_attachment_image(
					(int) get_theme_mod( 'custom_logo' ),
					'full',
					false,
					array(
						'class'   => 'nextora-header-block__logo-img',
						'style'   => sprintf( 'max-width:%dpx;height:auto;', $logo_w ),
						'loading' => 'eager',
					)
				);
				?>
			<?php elseif ( 'image' === $logo_type && ! empty( $atts['logoImageUrl'] ) && is_string( $atts['logoImageUrl'] ) ) : ?>
				<img
					class="nextora-header-block__logo-img"
					src="<?php echo esc_url( $atts['logoImageUrl'] ); ?>"
					alt="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>"
					style="<?php echo esc_attr( sprintf( 'max-width:%dpx;height:auto;', $logo_w ) ); ?>"
					loading="eager"
					decoding="async"
				/>
			<?php else : ?>
				<span class="nextora-header-block__logo-text">
					<?php
					$text = isset( $atts['logoText'] ) && is_string( $atts['logoText'] ) ? trim( $atts['logoText'] ) : '';
					echo esc_html( '' !== $text ? $text : get_bloginfo( 'name' ) );
					?>
				</span>
			<?php endif; ?>
		</a>
	</div>
	<?php

	do_action( 'nextora_header_block_after_logo', $atts );

	return (string) ob_get_clean();
};

/**
 * Nav markup.
 *
 * @param array<string, mixed> $atts         Attributes.
 * @param string               $menu_dom_id Menu ul id.
 * @param string               $uid         Instance id.
 */
$render_nav = static function ( array $atts, string $menu_dom_id, string $uid ): string {
	do_action( 'nextora_header_block_before_nav', $atts );

	$menu_db_id = isset( $atts['menuId'] ) ? (int) $atts['menuId'] : 0;
	$depth      = isset( $atts['menuDepth'] ) ? (int) $atts['menuDepth'] : 4;
	$loc        = isset( $atts['menuLocation'] ) && is_string( $atts['menuLocation'] ) ? $atts['menuLocation'] : 'primary';
	$loc        = sanitize_key( $loc );

	$has_menu = $menu_db_id > 0 || ( '' !== $loc && has_nav_menu( $loc ) );

	if ( ! $has_menu ) {
		do_action( 'nextora_header_block_after_nav', $atts );
		return '<div class="nextora-header-block__nav-empty" role="presentation"></div>';
	}

	$menu_class = 'nextora-header-menu wp-block-navigation__container is-responsive';

	$on_classes = static function ( $classes, $item, $args, $depth ) use ( $atts ): array {
		if ( ! is_object( $args ) || empty( $args->nextora_header_block ) ) {
			return is_array( $classes ) ? $classes : array();
		}
		$d = is_numeric( $depth ) ? (int) $depth : 0;
		$c = is_array( $classes ) ? $classes : array();

		return (array) apply_filters( 'nextora_header_block_menu_item_classes', $c, $item, $d, $atts );
	};

	$on_links = static function ( $atts_link, $item, $args, $depth ) use ( $atts ): array {
		if ( ! is_object( $args ) || empty( $args->nextora_header_block ) ) {
			return is_array( $atts_link ) ? $atts_link : array();
		}
		$d = is_numeric( $depth ) ? (int) $depth : 0;
		$a = is_array( $atts_link ) ? $atts_link : array();

		return (array) apply_filters( 'nextora_header_block_menu_link_attributes', $a, $item, $d, $atts );
	};

	add_filter( 'nav_menu_css_class', $on_classes, 10, 4 );
	add_filter( 'nav_menu_link_attributes', $on_links, 10, 4 );

	$nav_args = array(
		'nextora_header_block' => true,
		'container'            => false,
		'menu_class'           => $menu_class,
		'menu_id'              => $menu_dom_id,
		'fallback_cb'          => false,
		'item_spacing'         => 'discard',
		'depth'                => max( 1, min( $depth, 10 ) ),
		'echo'                 => false,
		'walker'               => new Nextora_Header_Block_Menu_Walker(),
	);

	if ( $menu_db_id > 0 ) {
		$nav_args['menu'] = $menu_db_id;
	} else {
		$nav_args['theme_location'] = $loc;
	}

	$nav_args = apply_filters( 'nextora_header_block_nav_menu_args', $nav_args, $atts );
	$nav_html = wp_nav_menu( $nav_args );
	$nav_html = is_string( $nav_html ) ? $nav_html : '';

	remove_filter( 'nav_menu_css_class', $on_classes, 10 );
	remove_filter( 'nav_menu_link_attributes', $on_links, 10 );

	if ( '' === trim( $nav_html ) ) {
		do_action( 'nextora_header_block_after_nav', $atts );
		return '<div class="nextora-header-block__nav-empty" role="presentation"></div>';
	}

	$aria = apply_filters( 'nextora_header_block_nav_aria_label', __( 'Primary navigation', 'nextora' ), $atts );
	$aria = is_string( $aria ) ? $aria : '';

	$just = 'right';
	if ( isset( $atts['headerLayout'] ) && is_string( $atts['headerLayout'] ) ) {
		switch ( $atts['headerLayout'] ) {
			case 'logo-nav-center':
			case 'two-row':
				$just = 'center';
				break;
			case 'nav-start-logo-center':
				$just = 'left';
				break;
			default:
				$just = 'right';
		}
	}

	$nav_classes = array(
		'wp-block-navigation',
		'is-horizontal',
		'is-content-justification-' . $just,
		'is-layout-flex',
		'nextora-navigation-from-location',
		'nextora-navigation-from-location--primary',
		'nextora-header-block__nav-el',
	);
	$nav_classes = (array) apply_filters( 'nextora_header_block_nav_wrapper_classes', $nav_classes, $atts );
	$nav_classes = array_filter( array_map( 'trim', $nav_classes ) );

	ob_start();
	?>
	<nav
		class="<?php echo esc_attr( implode( ' ', $nav_classes ) ); ?>"
		aria-label="<?php echo esc_attr( $aria ); ?>"
		data-nextora-header-block-nav="<?php echo esc_attr( $uid ); ?>"
	>
		<?php
		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- From wp_nav_menu().
		echo $nav_html;
		?>
	</nav>
	<?php

	do_action( 'nextora_header_block_after_nav', $atts );

	return (string) ob_get_clean();
};

/**
 * Utilities column.
 *
 * @param array<string, mixed> $atts       Attributes.
 * @param string               $block_uid  Unique id prefix for this header instance (drawer DOM id).
 */
$render_utils = static function ( array $atts, string $block_uid ) use ( $woo_on ): string {
	$show_search = ! isset( $atts['showSearch'] ) || (bool) $atts['showSearch'];
	$show_cart   = ( ! isset( $atts['showMiniCart'] ) || (bool) $atts['showMiniCart'] ) && $woo_on();
	$show_acct   = ( ! isset( $atts['showMyAccount'] ) || (bool) $atts['showMyAccount'] ) && $woo_on();

	$hide_search_m = isset( $atts['showSearchMobile'] ) && ! (bool) $atts['showSearchMobile'];
	$hide_cart_m   = isset( $atts['showCartMobile'] ) && ! (bool) $atts['showCartMobile'];

	ob_start();

	do_action( 'nextora_header_block_utilities_start', $atts );
	?>
	<div class="nextora-header-block__utilities<?php echo $hide_search_m ? ' nextora-header-block__utilities--hide-search-mobile' : ''; ?><?php echo $hide_cart_m ? ' nextora-header-block__utilities--hide-cart-mobile' : ''; ?>">
		<?php if ( $show_search && apply_filters( 'nextora_show_header_search_modal', true ) ) : ?>
			<?php if ( isset( $atts['searchMode'] ) && 'simple' === $atts['searchMode'] ) : ?>
				<div class="nextora-header-block__search nextora-header-block__search--simple">
					<?php nextora_header_block_render_simple_search_form(); ?>
				</div>
			<?php elseif ( function_exists( 'nextora_merge_spotlight_search_block_modal_args' ) && function_exists( 'nextora_get_header_search_modal_markup' ) ) : ?>
				<?php
				// Header uses theme defaults for modal copy, IDs, and icon color. Customize via
				// the Spotlight search block or `nextora_spotlight_search_block_modal_args`.
				$sargs = nextora_merge_spotlight_search_block_modal_args( array() );
				if ( array() !== $sargs ) {
					$markup = nextora_get_header_search_modal_markup( $sargs );
					$markup = (string) apply_filters( 'nextora_header_search_modal_output', $markup, $sargs );
					if ( '' !== trim( $markup ) ) {
						$markup = (string) apply_filters( 'nextora_header_block_spotlight_search_output', $markup, $sargs, $atts );
						echo '<div class="nextora-header-block__search nextora-header-block__search--spotlight shrink-0">';
						// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
						echo $markup;
						echo '</div>';
					}
				}
				?>
			<?php endif; ?>
		<?php endif; ?>

		<?php
		if ( $show_cart && $woo_on() && function_exists( 'wc_get_cart_url' ) ) :
			$cart     = ( function_exists( 'WC' ) && WC() && isset( WC()->cart ) ) ? WC()->cart : null;
			$cart_ok  = $cart instanceof \WC_Cart;
			$rest_ssr = defined( 'REST_REQUEST' ) && REST_REQUEST;

			// ServerSideRender (block editor) often runs before WooCommerce initializes the cart on the request.
			if ( ! $cart_ok && $rest_ssr && function_exists( 'wc_load_cart' ) ) {
				wc_load_cart();
				$cart    = ( function_exists( 'WC' ) && WC() && isset( WC()->cart ) ) ? WC()->cart : null;
				$cart_ok = $cart instanceof \WC_Cart;
			}

			$show_cart_markup = $cart_ok || $rest_ssr;

			if ( $show_cart_markup ) :
				$cart_count      = $cart_ok ? (int) $cart->get_cart_contents_count() : 0;
				$drawer_id       = 'nextora-mini-cart-' . preg_replace( '/[^a-zA-Z0-9_-]/', '', $block_uid );
				$drawer_title_id = $drawer_id . '-title';
				$cart_title      = apply_filters( 'nextora_header_block_mini_cart_title', __( 'Cart', 'nextora' ), $atts );
				$cart_title      = is_string( $cart_title ) ? $cart_title : __( 'Cart', 'nextora' );

				do_action( 'nextora_header_block_before_cart', $atts );
				$cart_aria = function_exists( 'nextora_header_block_mini_cart_aria_label' )
					? nextora_header_block_mini_cart_aria_label( $cart_count, $atts )
					: __( 'Open shopping cart', 'nextora' );
				?>
				<div class="nextora-header-block__cart">
					<button
						type="button"
						class="nextora-header-block__cart-link nextora-header-block__cart-trigger"
						data-nextora-modal-open="<?php echo esc_attr( $drawer_id ); ?>"
						aria-haspopup="dialog"
						aria-label="<?php echo esc_attr( $cart_aria ); ?>"
					>
						<span class="nextora-header-block__cart-icon" aria-hidden="true">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 7h15l-1.5 9h-12L6 7Zm0 0L5 3H2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="20" r="1.35" fill="currentColor"/><circle cx="18" cy="20" r="1.35" fill="currentColor"/></svg>
						</span>
						<?php
						echo function_exists( 'nextora_header_block_mini_cart_badge_html' )
							? nextora_header_block_mini_cart_badge_html( $cart_count )
							: '<span class="nextora-header-block__cart-badge" aria-hidden="true"></span>';
						?>
					</button>
				</div>

				<div
					id="<?php echo esc_attr( $drawer_id ); ?>"
					class="nextora-modal nextora-modal--drawer-end nextora-header-block__mini-cart-modal"
					hidden
					data-nextora-modal
					data-nextora-header-mini-cart-portal
					aria-hidden="true"
				>
					<div class="nextora-modal__scrim" data-nextora-modal-dismiss tabindex="-1"></div>
					<div
						class="nextora-modal__surface"
						data-nextora-modal-surface
						role="dialog"
						aria-modal="true"
						aria-labelledby="<?php echo esc_attr( $drawer_title_id ); ?>"
						tabindex="-1"
					>
						<header class="nextora-modal__header">
							<h2 id="<?php echo esc_attr( $drawer_title_id ); ?>" class="nextora-modal__title">
								<?php echo esc_html( $cart_title ); ?>
							</h2>
							<button
								type="button"
								class="nextora-modal__close"
								data-nextora-modal-dismiss
								aria-label="<?php esc_attr_e( 'Close cart', 'nextora' ); ?>"
							>
								<span class="nextora-modal__close-icon" aria-hidden="true">
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
								</span>
							</button>
						</header>
						<div class="nextora-modal__body nextora-header-block__mini-cart-body woocommerce">
							<?php
							// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- WooCommerce template / core markup.
							echo '<div class="widget_shopping_cart_content" data-nextora-mini-cart-fragments="1">';
							woocommerce_mini_cart();
							echo '</div>';
							?>
						</div>
					</div>
				</div>
				<?php
				do_action( 'nextora_header_block_after_cart', $atts );
			endif;
		endif;
		?>

		<?php if ( $show_acct && function_exists( 'wc_get_account_endpoint_url' ) ) : ?>
			<?php
			$show_acct_text = ! isset( $atts['myAccountIconOnly'] ) || ! (bool) $atts['myAccountIconOnly'];
			$acct_class       = 'nextora-header-block__account-link' . ( $show_acct_text ? ' nextora-header-block__account-link--with-text' : '' );
			?>
			<div class="nextora-header-block__account">
				<a class="<?php echo esc_attr( $acct_class ); ?>" href="<?php echo esc_url( wc_get_account_endpoint_url( 'dashboard' ) ); ?>" aria-label="<?php esc_attr_e( 'My account', 'nextora' ); ?>">
					<span class="nextora-header-block__account-icon" aria-hidden="true">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.7"/></svg>
					</span>
					<?php if ( ! isset( $atts['myAccountIconOnly'] ) || ! (bool) $atts['myAccountIconOnly'] ) : ?>
						<span class="nextora-header-block__account-text">
							<?php echo is_user_logged_in() ? esc_html( wp_get_current_user()->display_name ) : esc_html__( 'Sign in', 'nextora' ); ?>
						</span>
					<?php endif; ?>
				</a>
			</div>
		<?php endif; ?>

		<?php do_action( 'nextora_header_block_utilities_end', $atts ); ?>
	</div>
	<?php
	return (string) ob_get_clean();
};

// -----------------------------------------------------------------------------
// Layout.
// -----------------------------------------------------------------------------

$uid            = wp_unique_id( 'nextora-hb-' );
$source_id      = $uid . '-nav-source';
$portal_root_id = $uid . '-portal-root';
$portal_panel   = $uid . '-portal-panel';
$portal_title   = $uid . '-portal-title';
$menu_dom_id    = 'menu-' . sanitize_html_class( str_replace( 'nextora-hb-', 'hb-', $uid ) );

$wrapper_classes   = (array) apply_filters( 'nextora_header_block_wrapper_classes', array( 'nextora-header-block' ), $attributes );
$wrapper_classes   = array_filter( array_map( 'trim', $wrapper_classes ) );

if ( ! empty( $attributes['stickyHeader'] ) ) {
	$wrapper_classes[] = 'nextora-header-block--sticky';
	$sticky_style      = isset( $attributes['stickyStyle'] ) && 'always' === $attributes['stickyStyle'] ? 'always' : 'scroll-up';
	$wrapper_classes[] = 'nextora-header-block--sticky-' . $sticky_style;
}

if ( ! empty( $attributes['showBottomBorder'] ) ) {
	$wrapper_classes[] = 'nextora-header-block--border-bottom';
}

$layout_raw    = isset( $attributes['headerLayout'] ) && is_string( $attributes['headerLayout'] ) ? $attributes['headerLayout'] : 'logo-nav-end';
$layouts_ok    = array( 'logo-nav-end', 'logo-nav-center', 'nav-start-logo-center', 'two-row' );
$header_layout = in_array( $layout_raw, $layouts_ok, true ) ? $layout_raw : 'logo-nav-end';
$attributes['headerLayout'] = $header_layout;
$wrapper_classes[]          = 'nextora-header-block--layout-' . sanitize_html_class( str_replace( '_', '-', $header_layout ) );

$wrapper_extra = array(
	'class' => implode( ' ', $wrapper_classes ),
	'role'  => 'banner',
);

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_extra, is_object( $block ?? null ) ? $block : null );

$raw_border = isset( $attributes['bottomBorderColor'] ) ? (string) $attributes['bottomBorderColor'] : '';
$san_border = nextora_header_block_sanitize_border_color( $raw_border );
if ( ! empty( $attributes['showBottomBorder'] ) && '' !== $san_border ) {
	$wrapper_attributes = nextora_header_block_append_border_color_to_wrapper( $wrapper_attributes, $san_border );
}

$nav_style_fragment = function_exists( 'nextora_header_block_nav_color_inline_declarations' )
	? nextora_header_block_nav_color_inline_declarations( $attributes )
	: '';
if ( '' !== $nav_style_fragment ) {
	$wrapper_attributes = nextora_header_block_append_inline_style_declarations( $wrapper_attributes, $nav_style_fragment );
}

$open_label  = __( 'Open menu', 'nextora' );
$close_label = __( 'Close menu', 'nextora' );
$dialog_lab  = __( 'Menu', 'nextora' );

do_action( 'nextora_header_block_before', $attributes );

$logo_markup = $render_logo( $attributes );
$utils_markup  = $render_utils( $attributes, $uid );
$nav_markup    = $render_nav( $attributes, $menu_dom_id, $uid );

ob_start();
?>
<button
	type="button"
	class="nextora-header-block__menu-toggle nextora-header-block__menu-toggle--hamburger"
	data-nextora-nav-toggle
	data-nextora-nav-clone-source="#<?php echo esc_attr( $source_id ); ?>"
	data-nextora-nav-portal-root="<?php echo esc_attr( $portal_root_id ); ?>"
	data-nextora-nav-portal-panel="<?php echo esc_attr( $portal_panel ); ?>"
	data-nextora-nav-portal-title="<?php echo esc_attr( $portal_title ); ?>"
	data-nextora-nav-portal-dialog-label="<?php echo esc_attr( $dialog_lab ); ?>"
	data-nextora-nav-open-label="<?php echo esc_attr( $open_label ); ?>"
	data-nextora-nav-close-label="<?php echo esc_attr( $close_label ); ?>"
	aria-expanded="false"
	aria-controls="<?php echo esc_attr( $portal_panel ); ?>"
	aria-label="<?php echo esc_attr( $open_label ); ?>"
>
	<span class="nextora-header-block__hamburger-line" aria-hidden="true"></span>
	<span class="nextora-header-block__hamburger-line" aria-hidden="true"></span>
	<span class="nextora-header-block__hamburger-line" aria-hidden="true"></span>
</button>
<?php
$menu_toggle_markup = (string) ob_get_clean();

ob_start();
?>
<div id="<?php echo esc_attr( $source_id ); ?>" class="nextora-header-block__nav-source" data-nextora-nav-source-panel>
	<?php
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- nav HTML from wp_nav_menu walker.
	echo $nav_markup;
	?>
</div>
<?php
$nav_source_markup = (string) ob_get_clean();

$inner_style_attr = '';
$raw_inner_max    = isset( $attributes['innerMaxWidth'] ) ? (string) $attributes['innerMaxWidth'] : '';
$san_inner_max    = nextora_header_block_sanitize_inner_max_width( $raw_inner_max );
if ( '' !== $san_inner_max ) {
	// Scoped to `.nextora-header-block__inner` only — does not alter the block wrapper or sibling markup.
	$inner_css        = 'max-width:' . $san_inner_max . ';margin-inline:auto;width:100%;box-sizing:border-box;';
	$inner_style_attr = ' style="' . esc_attr( $inner_css ) . '"';
}

?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php if ( 'two-row' === $header_layout ) : ?>
		<div class="nextora-header-block__inner"<?php echo $inner_style_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Built with esc_attr(). ?>>
			<div class="nextora-header-block__row nextora-header-block__row--top">
				<?php
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Logo region markup.
				echo $logo_markup;
				?>
				<div class="nextora-header-block__actions">
					<?php
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Utilities column markup.
					echo $utils_markup;
					// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Toggle control markup.
					echo $menu_toggle_markup;
					?>
				</div>
			</div>
			<div class="nextora-header-block__row nextora-header-block__row--nav">
				<?php
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Nav + clone source wrapper.
				echo $nav_source_markup;
				?>
			</div>
		</div>
	<?php else : ?>
		<div class="nextora-header-block__inner"<?php echo $inner_style_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Built with esc_attr(). ?>>
			<?php
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Logo region markup.
			echo $logo_markup;
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Nav + clone source wrapper.
			echo $nav_source_markup;
			?>
			<div class="nextora-header-block__actions">
				<?php
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Utilities column markup.
				echo $utils_markup;
				// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Toggle control markup.
				echo $menu_toggle_markup;
				?>
			</div>
		</div>
	<?php endif; ?>
</div>
<?php
do_action( 'nextora_header_block_after', $attributes );
