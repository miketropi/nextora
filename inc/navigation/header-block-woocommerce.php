<?php

/**
 * WooCommerce: {@see woocommerce/mini-cart} block output for {@see nextora/header}.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Editor placeholder when WooCommerce skips SSR cart markup (REST / admin).
 */
function nextora_header_block_woo_mini_cart_editor_placeholder(): string {
	$icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart" aria-hidden="true" focusable="false"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>';

	return '<div class="nextora-header-block__cart-placeholder" aria-hidden="true">'
		. '<span class="nextora-header-block__cart-placeholder-icon">' . $icon . '</span>'
		. '</div>';
}

/**
 * Render the WooCommerce Mini-Cart block in the header utilities column.
 *
 * @param array<string, mixed> $atts Block attributes (for filters).
 */
function nextora_header_block_render_woo_mini_cart( array $atts = array() ): string {
	if ( ! class_exists( 'WooCommerce' ) ) {
		return '';
	}

	$registry = WP_Block_Type_Registry::get_instance();
	if ( ! $registry->is_registered( 'woocommerce/mini-cart' ) ) {
		return '';
	}

	/**
	 * Mini-Cart block attributes passed to {@see render_block()}.
	 *
	 * @param array<string, mixed> $block_atts WooCommerce block attributes.
	 * @param array<string, mixed> $atts       Header block attributes.
	 */
	$block_atts = apply_filters(
		'nextora_header_block_woo_mini_cart_attributes',
		array(
			'miniCartIcon'           => 'cart',
			'onCartClickBehaviour'   => 'open_drawer',
			'addToCartBehaviour'     => 'open_drawer',
			'hasHiddenPrice'         => true,
			'productCountVisibility' => 'greater_than_zero',
		),
		$atts,
	);

	if ( ! is_array( $block_atts ) ) {
		$block_atts = array();
	}

	$parsed = array(
		'blockName'    => 'woocommerce/mini-cart',
		'attrs'        => $block_atts,
		'innerBlocks'  => array(),
		'innerHTML'    => '',
		'innerContent' => array(),
	);

	$markup = (string) render_block( $parsed );

	if ( '' === trim( $markup ) && defined( 'REST_REQUEST' ) && REST_REQUEST ) {
		return nextora_header_block_woo_mini_cart_editor_placeholder();
	}

	// Standardize WooCommerce Mini-Cart icon with official Lucide shopping-cart icon.
	$lucide_cart = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart wc-block-mini-cart__icon" aria-hidden="true" focusable="false"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>';
	if ( preg_match( '/<svg[^>]*class="[^"]*wc-block-mini-cart__icon[^"]*"[^>]*>.*?<\/svg>/s', $markup ) ) {
		$markup = (string) preg_replace( '/<svg[^>]*class="[^"]*wc-block-mini-cart__icon[^"]*"[^>]*>.*?<\/svg>/s', $lucide_cart, $markup, 1 );
	}

	/**
	 * Filter rendered WooCommerce Mini-Cart block HTML in the header.
	 *
	 * @param string               $markup Rendered block HTML.
	 * @param array<string, mixed> $atts   Header block attributes.
	 */
	return (string) apply_filters( 'nextora_header_block_woo_mini_cart_output', $markup, $atts );
}
