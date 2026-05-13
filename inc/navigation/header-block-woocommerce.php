<?php
/**
 * WooCommerce: mini cart count in {@see nextora/header} block output.
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
 * Refresh cart badge fragment for the theme header block mini cart trigger.
 *
 * @param array<string, string> $fragments Fragments.
 * @return array<string, string>
 */
function nextora_header_block_cart_fragments( array $fragments ): array {
	if ( ! function_exists( 'WC' ) || ! WC()->cart ) {
		return $fragments;
	}

	$count = (int) WC()->cart->get_cart_contents_count();

	$fragments['.nextora-header-block__cart-badge'] = nextora_header_block_mini_cart_badge_html( $count );

	return $fragments;
}

add_filter( 'woocommerce_add_to_cart_fragments', 'nextora_header_block_cart_fragments' );
