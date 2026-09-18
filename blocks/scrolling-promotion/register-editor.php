<?php

/**
 * Editor-only assets for nextora/scrolling-promotion block.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Pass lucide-icons.json URL to the block editor script for the icon picker.
 */
function nextora_scrolling_promotion_block_editor_assets(): void {
	$handle = 'nextora-scrolling-promotion-editor-script';

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

	require_once __DIR__ . '/../advanced-icon/lucide.php';

	/** @var list<array{slug: string, color: string, name: string}> $palette_entries */
	$palette_entries = array();
	if ( function_exists( 'nextora_icon_collect_palette_entries' ) ) {
		foreach ( nextora_icon_collect_palette_entries() as $entry ) {
			$palette_entries[] = array(
				'slug'  => $entry['slug'],
				'color' => $entry['color'],
				'name'  => ucwords( str_replace( '-', ' ', $entry['slug'] ) ),
			);
		}
	}

	$data = array(
		'iconsUrl'       => NEXTORA_URI . '/assets/data/lucide-icons.json',
		'paletteEntries' => $palette_entries,
	);

	wp_add_inline_script(
		$handle,
		'window.nextoraIconBlock = ' . wp_json_encode( $data ) . ';',
		'before',
	);
}
add_action( 'enqueue_block_editor_assets', 'nextora_scrolling_promotion_block_editor_assets', 100 );
