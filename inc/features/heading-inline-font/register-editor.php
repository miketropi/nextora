<?php

/**
 * Block editor assets for the heading inline-font format.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue the editor script that registers the inline font format.
 */
function nextora_heading_inline_font_editor_assets(): void {
	$rel        = '/assets/js/editor.js';
	$path       = NEXTORA_DIR . $rel;
	$asset_path = NEXTORA_DIR . '/assets/js/editor.asset.php';

	if ( ! is_readable( $path ) || ! is_readable( $asset_path ) ) {
		return;
	}

	/** @var array{dependencies?: list<string>, version?: string} $asset */
	$asset  = require $asset_path;
	$handle = 'nextora-editor';

	wp_register_script(
		$handle,
		NEXTORA_URI . $rel,
		$asset['dependencies'] ?? array(),
		$asset['version'] ?? NEXTORA_VERSION,
		true,
	);

	wp_enqueue_script( $handle );

	wp_localize_script(
		$handle,
		'nextoraHeadingFont',
		array(
			'fonts' => nextora_get_heading_inline_font_families(),
		),
	);
}
add_action( 'enqueue_block_editor_assets', 'nextora_heading_inline_font_editor_assets' );
