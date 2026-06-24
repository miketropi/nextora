<?php

/**
 * Editor assets for nextora/event.
 *
 * @package Nextora
 */

declare( strict_types=1 );

/**
 * Landscape placeholder for events without an image.
 */
function nextora_event_image_placeholder_url(): string {
	$url = get_theme_file_uri( 'assets/images/placeholder/general-img-landscape.png' );

	/** @var string $url */
	$url = apply_filters( 'nextora_event_image_placeholder_url', $url );

	return $url;
}

/**
 * Expose placeholder URL + palette entries to the block editor script.
 */
function nextora_event_localize_editor_script(): void {
	$handle = 'nextora-event-editor-script';

	if ( ! wp_script_is( $handle, 'registered' ) ) {
		return;
	}

	$palette_entries = array();

	$lucide_path = get_template_directory() . '/blocks/advanced-icon/lucide.php';
	if ( is_readable( $lucide_path ) ) {
		require_once $lucide_path;
		if ( function_exists( 'nextora_icon_collect_palette_entries' ) ) {
			foreach ( nextora_icon_collect_palette_entries() as $entry ) {
				$palette_entries[] = array(
					'slug'  => $entry['slug'],
					'color' => $entry['color'],
					'name'  => ucwords( str_replace( '-', ' ', $entry['slug'] ) ),
				);
			}
		}
	}

	wp_localize_script(
		$handle,
		'nextoraEvent',
		array(
			'imagePlaceholderUrl' => nextora_event_image_placeholder_url(),
			'paletteEntries'        => $palette_entries,
		),
	);

	// Color utils also read style-variation palette from nextoraIconBlock.
	if ( array() !== $palette_entries ) {
		wp_add_inline_script(
			$handle,
			'window.nextoraIconBlock = window.nextoraIconBlock || {}; window.nextoraIconBlock.paletteEntries = '
			. wp_json_encode( $palette_entries ) . ';',
			'before',
		);
	}
}
add_action( 'enqueue_block_editor_assets', 'nextora_event_localize_editor_script' );
