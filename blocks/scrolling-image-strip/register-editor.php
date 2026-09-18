<?php

/**
 * Editor-only assets for nextora/scrolling-image-strip block.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Pass palette entries for hex → slug color normalization in the editor.
 */
function nextora_scrolling_image_strip_block_editor_assets(): void {
	$handle = 'nextora-scrolling-image-strip-editor-script';

	if ( ! wp_script_is( $handle, 'registered' ) ) {
		return;
	}

	require_once dirname( __DIR__ ) . '/advanced-icon/lucide.php';

	/** @var list<array{slug: string, color: string, name: string}> $palette_entries */
	$palette_entries = array();
	foreach ( nextora_icon_collect_palette_entries() as $entry ) {
		$palette_entries[] = array(
			'slug'  => $entry['slug'],
			'color' => $entry['color'],
			'name'  => ucwords( str_replace( '-', ' ', $entry['slug'] ) ),
		);
	}

	$data = array(
		'paletteEntries' => $palette_entries,
	);

	wp_add_inline_script(
		$handle,
		'window.nextoraIconBlock = window.nextoraIconBlock || {};' .
		'window.nextoraIconBlock.paletteEntries = ' . wp_json_encode( $palette_entries ) . ';',
		'before',
	);
}
add_action( 'enqueue_block_editor_assets', 'nextora_scrolling_image_strip_block_editor_assets', 100 );
