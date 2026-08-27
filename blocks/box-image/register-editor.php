<?php

/**
 * Editor-only assets for nextora/box-image block.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Pass placeholder image URL to the block editor script.
 */
function nextora_box_image_block_editor_assets(): void {
	$handle = 'nextora-box-image-editor-script';

	if ( ! wp_script_is( $handle, 'registered' ) ) {
		return;
	}

	if ( ! defined( 'NEXTORA_URI' ) ) {
		return;
	}

	$data = array(
		'placeholderUrl' => NEXTORA_URI . '/assets/images/placeholder/general-img-landscape.png',
	);

	wp_add_inline_script(
		$handle,
		'window.nextoraBoxImage = ' . wp_json_encode( $data ) . ';',
		'before',
	);

	$json_path = ( defined( 'NEXTORA_DIR' ) ? NEXTORA_DIR : get_template_directory() ) . '/assets/data/lucide-icons.json';
	if ( is_readable( $json_path ) ) {
		$icon_data = array(
			'iconsUrl' => ( defined( 'NEXTORA_URI' ) ? NEXTORA_URI : get_template_directory_uri() ) . '/assets/data/lucide-icons.json',
		);
		wp_add_inline_script(
			$handle,
			'window.nextoraIconBlock = window.nextoraIconBlock || ' . wp_json_encode( $icon_data ) . ';',
			'before',
		);
	}
}
add_action( 'enqueue_block_editor_assets', 'nextora_box_image_block_editor_assets', 100 );
