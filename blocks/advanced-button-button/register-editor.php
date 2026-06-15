<?php

/**
 * Editor-only assets for nextora/advanced-button-button block.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Pass lucide-icons.json URL to the block editor script.
 */
function nextora_advanced_button_button_block_editor_assets(): void {
	$handle = 'nextora-advanced-button-button-editor-script';

	if ( ! wp_script_is( $handle, 'registered' ) ) {
		return;
	}

	if ( ! defined( 'NEXTORA_URI' ) || ! defined( 'NEXTORA_DIR' ) ) {
		return;
	}

	$json_path = NEXTORA_DIR . '/assets/data/lucide-icons.json';
	if ( ! is_readable( $json_path ) ) {
		return;
	}

	$data = array(
		'iconsUrl' => NEXTORA_URI . '/assets/data/lucide-icons.json',
	);

	wp_add_inline_script(
		$handle,
		'window.nextoraIconBlock = ' . wp_json_encode( $data ) . ';',
		'before',
	);
}
add_action( 'enqueue_block_editor_assets', 'nextora_advanced_button_button_block_editor_assets', 100 );
