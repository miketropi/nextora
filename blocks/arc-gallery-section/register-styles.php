<?php

/**
 * Block style presets for nextora/arc-gallery-section.
 *
 * @package Nextora
 */

declare( strict_types=1 );

/**
 * Register style variations.
 */
function nextora_register_arc_gallery_section_block_styles(): void {
	$block = 'nextora/arc-gallery-section';

	register_block_style(
		$block,
		array(
			'name'  => 'bold-statement',
			'label' => __( 'Bold statement', 'nextora' ),
		),
	);

	register_block_style(
		$block,
		array(
			'name'  => 'dark-strip',
			'label' => __( 'Dark strip', 'nextora' ),
		),
	);

	register_block_style(
		$block,
		array(
			'name'  => 'announcement-bar',
			'label' => __( 'Announcement bar', 'nextora' ),
		),
	);

	register_block_style(
		$block,
		array(
			'name'  => 'minimal',
			'label' => __( 'Minimal', 'nextora' ),
		),
	);
}
add_action( 'init', 'nextora_register_arc_gallery_section_block_styles', 20 );
