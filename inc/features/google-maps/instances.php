<?php

/**
 * Google Maps — block instance indexing.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Recursively collect `nextora/google-maps` blocks in document order.
 *
 * @param array<int, array<string, mixed>> $blocks Parsed blocks.
 *
 * @return list<array<string, mixed>>
 */
function nextora_google_maps_walk_blocks( array $blocks ): array {
	$instances = array();

	foreach ( $blocks as $block ) {
		$name = isset( $block['blockName'] ) && is_string( $block['blockName'] ) ? $block['blockName'] : '';
		if ( 'nextora/google-maps' === $name ) {
			$attrs       = isset( $block['attrs'] ) && is_array( $block['attrs'] ) ? $block['attrs'] : array();
			$instances[] = $attrs;
		}

		$inner = isset( $block['innerBlocks'] ) && is_array( $block['innerBlocks'] ) ? $block['innerBlocks'] : array();
		if ( $inner !== array() ) {
			$instances = array_merge( $instances, nextora_google_maps_walk_blocks( $inner ) );
		}
	}

	return $instances;
}

/**
 * All google-maps block attribute sets on the given post content.
 *
 * @param WP_Post|null $post Post object.
 *
 * @return list<array<string, mixed>>
 */
function nextora_google_maps_get_instances( ?WP_Post $post = null ): array {
	if ( null === $post ) {
		$post = get_post();
	}

	if ( ! $post instanceof WP_Post ) {
		return array();
	}

	/** @var array<int, array<string, mixed>> $parsed */
	$parsed = parse_blocks( $post->post_content );

	return nextora_google_maps_walk_blocks( $parsed );
}

/**
 * Whether attrs use API embed mode.
 *
 * @param array<string, mixed> $attributes Block attributes.
 */
function nextora_google_maps_is_api_mode( array $attributes ): bool {
	$mode = isset( $attributes['mapMode'] ) && is_string( $attributes['mapMode'] ) ? $attributes['mapMode'] : 'iframe';

	return 'api' === $mode;
}

/**
 * Whether the current singular post has at least one API-mode map block.
 *
 * @param WP_Post|null $post Post object.
 */
function nextora_google_maps_page_has_api_mode( ?WP_Post $post = null ): bool {
	foreach ( nextora_google_maps_get_instances( $post ) as $attrs ) {
		if ( nextora_google_maps_is_api_mode( $attrs ) ) {
			return true;
		}
	}

	return false;
}
