<?php

/**
 * Google Maps — API key accessor.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Site-wide Google Maps API key from theme options.
 */
function nextora_google_maps_get_api_key(): string {
	$key = get_option( 'nextora_google_maps_api_key', '' );
	if ( ! is_string( $key ) ) {
		$key = '';
	}

	return (string) apply_filters( 'nextora_google_maps_api_key', sanitize_text_field( trim( $key ) ) );
}

/**
 * API key for a block instance — block attribute overrides the site option.
 *
 * @param array<string, mixed> $attributes Block attributes.
 */
function nextora_google_maps_resolve_api_key( array $attributes = array() ): string {
	if ( isset( $attributes['apiKey'] ) && is_string( $attributes['apiKey'] ) ) {
		$block_key = sanitize_text_field( trim( $attributes['apiKey'] ) );
		if ( '' !== $block_key ) {
			return $block_key;
		}
	}

	return nextora_google_maps_get_api_key();
}

/**
 * First resolved API key from API-mode blocks on a post (for SDK enqueue).
 *
 * @param WP_Post|null $post Post object.
 */
function nextora_google_maps_resolve_page_api_key( ?WP_Post $post = null ): string {
	if ( ! function_exists( 'nextora_google_maps_get_instances' ) ) {
		return nextora_google_maps_get_api_key();
	}

	foreach ( nextora_google_maps_get_instances( $post ) as $attrs ) {
		if ( ! function_exists( 'nextora_google_maps_is_api_mode' ) || ! nextora_google_maps_is_api_mode( $attrs ) ) {
			continue;
		}

		$key = nextora_google_maps_resolve_api_key( $attrs );
		if ( '' !== $key ) {
			return $key;
		}
	}

	return nextora_google_maps_get_api_key();
}
