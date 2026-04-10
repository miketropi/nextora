<?php
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
  
	foreach ( glob( $blocks_dir . '/*', GLOB_ONLYDIR ) as $block_dir ) {
		// Expects block.json + index.asset.php + index.js inside $block_dir
		register_block_type( $block_dir );
	}
}
add_action( 'init', 'nextora_register_blocks' );