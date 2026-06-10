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
	$icon = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
		<path d="M6 7h15l-1.5 9h-12L6 7Zm0 0L5 3H2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
		<circle cx="9" cy="20" r="1.35" fill="currentColor" />
		<circle cx="18" cy="20" r="1.35" fill="currentColor" />
	</svg>';

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

	/**
	 * Filter rendered WooCommerce Mini-Cart block HTML in the header.
	 *
	 * @param string               $markup Rendered block HTML.
	 * @param array<string, mixed> $atts   Header block attributes.
	 */
	return (string) apply_filters( 'nextora_header_block_woo_mini_cart_output', $markup, $atts );
}
