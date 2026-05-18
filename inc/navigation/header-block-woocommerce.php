<?php
/**
 * WooCommerce: mini cart fragments for {@see nextora/header} block (badge + drawer HTML).
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Markup for the header mini-cart quantity badge (hidden when count is 0).
 *
 * @param int $count Cart item count.
 */
function nextora_header_block_mini_cart_badge_html( int $count ): string {
	$inner = $count > 0
		? '<span class="nextora-header-block__cart-count">' . esc_html( (string) $count ) . '</span>'
		: '';

	return '<span class="nextora-header-block__cart-badge" aria-hidden="true">' . $inner . '</span>';
}

/**
 * Accessible label for the mini-cart trigger, optionally including quantity.
 *
 * @param int                  $count Cart item count.
 * @param array<string, mixed> $atts  Block attributes (for filters).
 */
function nextora_header_block_mini_cart_aria_label( int $count, array $atts = array() ): string {
	$base = apply_filters( 'nextora_header_block_mini_cart_open_label', __( 'Open shopping cart', 'nextora' ), $atts );
	$base = is_string( $base ) ? $base : __( 'Open shopping cart', 'nextora' );

	if ( $count < 1 ) {
		return $base;
	}

	$with_count = sprintf(
		/* translators: %d: number of products in the cart */
		_n(
			'Open shopping cart, %d item',
			'Open shopping cart, %d items',
			$count,
			'nextora'
		),
		$count
	);
	$with_count = is_string( $with_count ) ? $with_count : $base;

	return (string) apply_filters( 'nextora_header_block_mini_cart_aria_label', $with_count, $count, $atts );
}

/**
 * Refresh cart badge and mini cart panel HTML on add-to-cart / cart AJAX (`wc-cart-fragments`).
 * The block renders the drawer outside the cart widget, so Woo does not add a default
 * `widget_shopping_cart_content` fragment for it — register an explicit selector.
 *
 * @param array<string, string> $fragments Fragments.
 * @return array<string, string>
 */
function nextora_header_block_cart_fragments( array $fragments ): array {
	if ( ! function_exists( 'WC' ) || ! WC()->cart ) {
		if ( function_exists( 'wc_load_cart' ) ) {
			wc_load_cart();
		}
		if ( ! function_exists( 'WC' ) || ! WC()->cart ) {
			return $fragments;
		}
	}

	$count = (int) WC()->cart->get_cart_contents_count();

	$fragments['.nextora-header-block__cart-badge'] = nextora_header_block_mini_cart_badge_html( $count );

	ob_start();
	woocommerce_mini_cart();
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- WooCommerce markup for fragment JSON.
	$mini_inner = ob_get_clean();

	$mini_wrapped = '<div class="widget_shopping_cart_content" data-nextora-mini-cart-fragments="1">' . $mini_inner . '</div>';

	// Core passes this key from `WC_AJAX::get_refreshed_fragments()`; keep it so `add-to-cart` / session restore hit the header mini cart.
	$fragments['div.widget_shopping_cart_content'] = $mini_wrapped;
	$fragments['[data-nextora-mini-cart-fragments]'] = $mini_wrapped;

	return $fragments;
}

add_filter( 'woocommerce_add_to_cart_fragments', 'nextora_header_block_cart_fragments' );
