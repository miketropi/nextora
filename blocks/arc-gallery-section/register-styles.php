<?php

/**
 * Block style presets for nextora/arc-gallery-section.
 *
 * @package Nextora
 */

declare( strict_types=1 );

/**
 * Default gallery placeholder asset (theme-relative).
 */
function nextora_arc_gallery_section_photo_placeholder_url(): string {
	$url = get_theme_file_uri( 'assets/images/placeholder/general-img-portrait.png' );

	/** @var string $url */
	$url = apply_filters( 'nextora_arc_gallery_section_photo_placeholder_url', $url );

	return $url;
}

/**
 * Number of placeholder images shown when the gallery is empty.
 */
function nextora_arc_gallery_section_default_image_count(): int {
	$count = 5;

	/** @var int $count */
	$count = apply_filters( 'nextora_arc_gallery_section_default_image_count', $count );

	return max( 1, min( 7, $count ) );
}

/**
 * Expose placeholder URL to the block editor script.
 */
function nextora_arc_gallery_section_localize_editor_script(): void {
	wp_localize_script(
		'nextora-arc-gallery-section-editor-script',
		'nextoraArcGallerySection',
		array(
			'photoPlaceholderUrl' => nextora_arc_gallery_section_photo_placeholder_url(),
		),
	);
}
add_action( 'enqueue_block_editor_assets', 'nextora_arc_gallery_section_localize_editor_script' );

/**
 * Register style variations.
 */
function nextora_register_arc_gallery_section_block_styles(): void {
	register_block_style(
		'nextora/arc-gallery-section',
		array(
			'name'  => 'dark-strip',
			'label' => __( 'Dark strip', 'nextora' ),
		),
	);
}
add_action( 'init', 'nextora_register_arc_gallery_section_block_styles', 20 );
