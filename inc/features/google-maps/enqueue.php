<?php

/**
 * Google Maps — conditional SDK enqueue.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Resolve the registered view script handle for the block.
 */
function nextora_google_maps_view_script_handle(): string {
	$block_type = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/google-maps' );
	if (
		$block_type
		&& ! empty( $block_type->view_script_handles )
		&& is_array( $block_type->view_script_handles )
		&& isset( $block_type->view_script_handles[0] )
		&& is_string( $block_type->view_script_handles[0] )
	) {
		return $block_type->view_script_handles[0];
	}

	return 'nextora-google-maps-view-fallback';
}

/**
 * Enqueue Google Maps JavaScript SDK (API mode only).
 */
function nextora_google_maps_enqueue_sdk(): void {
	if ( is_admin() ) {
		return;
	}

	static $enqueued = false;
	if ( $enqueued ) {
		return;
	}

	$api_key = nextora_google_maps_resolve_page_api_key();
	if ( '' === $api_key ) {
		return;
	}

	$view_handle = nextora_google_maps_view_script_handle();
	if ( wp_script_is( $view_handle, 'registered' ) ) {
		wp_enqueue_script( $view_handle );
	}

	$sdk_url = add_query_arg(
		array(
			'key'      => $api_key,
			'callback' => 'nextoraInitGoogleMaps',
			'loading'  => 'async',
		),
		'https://maps.googleapis.com/maps/api/js',
	);

	wp_enqueue_script(
		'nextora-google-maps-sdk',
		$sdk_url,
		array( $view_handle ),
		null, // phpcs:ignore WordPress.WP.EnqueuedResourceParameters.MissingVersion
		true,
	);

	$enqueued = true;
}

/**
 * Late enqueue when singular content includes API-mode maps.
 */
function nextora_google_maps_maybe_enqueue_sdk(): void {
	if ( is_admin() || ! is_singular() ) {
		return;
	}

	if ( ! nextora_google_maps_page_has_api_mode() ) {
		return;
	}

	nextora_google_maps_enqueue_sdk();
}
add_action( 'wp_enqueue_scripts', 'nextora_google_maps_maybe_enqueue_sdk', 20 );
