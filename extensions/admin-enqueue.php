<?php

/**
 * Admin enqueue for the Nextora Addon page.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue the React app JS and CSS on the Nextora Addon admin page.
 *
 * @param string $hook_suffix The current admin page hook.
 *
 * @return void
 */
function nextora_addon_enqueue_admin_assets( string $hook_suffix ): void {
	if ( 'toplevel_page_nextora-addon' !== $hook_suffix ) {
		return;
	}

	$js_path  = NEXTORA_DIR . '/assets/js/admin-addon.js';
	$css_path = NEXTORA_DIR . '/assets/css/admin-addon.css';
	$asset    = NEXTORA_DIR . '/assets/js/admin-addon.asset.php';

	$deps       = array();
	$version    = (string) filemtime( NEXTORA_DIR . '/style.css' );
	$asset_data = is_readable( $asset ) ? require $asset : null;

	if ( is_array( $asset_data ) ) {
		$deps    = isset( $asset_data['dependencies'] ) ? (array) $asset_data['dependencies'] : array();
		$version = isset( $asset_data['version'] ) ? (string) $asset_data['version'] : $version;
	}

	wp_enqueue_script(
		'nextora-admin-addon',
		NEXTORA_URI . '/assets/js/admin-addon.js',
		$deps,
		$version,
		true,
	);

	wp_localize_script(
		'nextora-admin-addon',
		'nextoraAddon',
		array(
			'nonce' => wp_create_nonce( 'wp_rest' ),
		),
	);

	if ( is_readable( $css_path ) ) {
		wp_enqueue_style(
			'nextora-admin-addon-style',
			NEXTORA_URI . '/assets/css/admin-addon.css',
			array(),
			(string) filemtime( $css_path ),
		);
	}
}

add_action( 'admin_enqueue_scripts', 'nextora_addon_enqueue_admin_assets' );
