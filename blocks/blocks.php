<?php

declare( strict_types=1 );
/**
 * Register all blocks located in the /blocks directory.
 *
 * Each block folder must contain a block.json file.
 * WordPress reads block.json automatically — no need to list each block manually.
 *
 * Drop this into your theme's functions.php.
 */
function nextora_register_blocks(): void {
	$blocks_dir = get_template_directory() . '/blocks';

	if ( ! is_dir( $blocks_dir ) ) {
		return;
	}

	$block_dirs = glob( $blocks_dir . '/*', GLOB_ONLYDIR );
	if ( false === $block_dirs ) {
		return;
	}

	foreach ( $block_dirs as $block_dir ) {
		// Expects block.json + index.asset.php + index.js inside $block_dir
		register_block_type( $block_dir );
	}
}
add_action( 'init', 'nextora_register_blocks' );

$scrolling_promotion_styles = __DIR__ . '/scrolling-promotion/register-styles.php';
if ( is_readable( $scrolling_promotion_styles ) ) {
	require_once $scrolling_promotion_styles;
}

$arc_gallery_styles = __DIR__ . '/arc-gallery-section/register-styles.php';
if ( is_readable( $arc_gallery_styles ) ) {
	require_once $arc_gallery_styles;
}

$team_section_styles = __DIR__ . '/team-section/register-styles.php';
if ( is_readable( $team_section_styles ) ) {
	require_once $team_section_styles;
}

$testimonial_carousel_styles = __DIR__ . '/testimonial-carousel/register-styles.php';
if ( is_readable( $testimonial_carousel_styles ) ) {
	require_once $testimonial_carousel_styles;
}
