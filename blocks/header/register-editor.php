<?php

/**
 * Editor-only assets for nextora/header block.
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
function nextora_header_block_editor_assets(): void {
	$handle = 'nextora-header-editor-script';

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

	$is_giftflow_active = defined( 'GIFTFLOW_VERSION' )
		|| post_type_exists( 'campaign' )
		|| function_exists( 'giftflow_prepare_campaign_status_bar_data' );

	$data = array(
		'iconsUrl'         => NEXTORA_URI . '/assets/data/lucide-icons.json',
		'isGiftFlowActive' => $is_giftflow_active,
	);

	wp_add_inline_script(
		$handle,
		'window.nextoraIconBlock = ' . wp_json_encode( $data ) . ';',
		'before',
	);
}
add_action( 'enqueue_block_editor_assets', 'nextora_header_block_editor_assets', 100 );
