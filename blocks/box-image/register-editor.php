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
}
add_action( 'enqueue_block_editor_assets', 'nextora_box_image_block_editor_assets', 100 );
