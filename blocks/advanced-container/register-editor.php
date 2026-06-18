<?php

/**
 * Editor-only assets for nextora/advanced-container block.
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
function nextora_advanced_container_block_editor_assets(): void {
	$handle = 'nextora-advanced-container-editor-script';

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

	/** @var list<array{slug: string, gradient: string, name: string}> $gradient_entries */
	$gradient_entries = array();
	if ( class_exists( 'WP_Theme_JSON_Resolver' ) ) {
		$theme_data = WP_Theme_JSON_Resolver::get_merged_data();
		$settings   = $theme_data->get_settings();
		$gradients  = $settings['color']['gradients'] ?? array();
		if ( is_array( $gradients ) ) {
			foreach ( $gradients as $entry ) {
				if ( ! is_array( $entry ) || empty( $entry['slug'] ) || empty( $entry['gradient'] ) ) {
					continue;
				}
				$gradient_entries[] = array(
					'slug'     => (string) $entry['slug'],
					'gradient' => (string) $entry['gradient'],
					'name'     => isset( $entry['name'] ) ? (string) $entry['name'] : ucwords( str_replace( '-', ' ', (string) $entry['slug'] ) ),
				);
			}
		}
	}

	$data = array(
		'paletteEntries'  => $palette_entries,
		'gradientEntries' => $gradient_entries,
	);

	wp_add_inline_script(
		$handle,
		'window.nextoraAdvancedContainerBlock = ' . wp_json_encode( $data ) . ';',
		'before',
	);
}
add_action( 'enqueue_block_editor_assets', 'nextora_advanced_container_block_editor_assets', 100 );
