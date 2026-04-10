<?php
/**
 * Spotlight search block — trigger + modal (dynamic).
 *
 * @package Nextora
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Inner blocks (unused).
 * @var WP_Block $block      Block instance.
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! apply_filters( 'nextora_show_header_search_modal', true ) ) {
	return;
}

if ( ! function_exists( 'nextora_merge_spotlight_search_block_modal_args' ) || ! function_exists( 'nextora_get_header_search_modal_markup' ) ) {
	return;
}

$args = nextora_merge_spotlight_search_block_modal_args( is_array( $attributes ) ? $attributes : array() );
if ( array() === $args ) {
	return;
}

$html = nextora_get_header_search_modal_markup( $args );
$html = (string) apply_filters( 'nextora_header_search_modal_output', $html, $args );
if ( '' === trim( $html ) ) {
	return;
}

$wrapper = get_block_wrapper_attributes(
	array(
		'class' => 'nextora-spotlight-search-block shrink-0',
	)
);

// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Modal HTML built with esc_* inside theme helpers; final filter may return full markup.
echo '<div ' . $wrapper . '>' . $html . '</div>'; 
