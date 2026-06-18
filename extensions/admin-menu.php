<?php

/**
 * Admin menu registration for the Nextora Addon page.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Add the Nextora Addon top-level menu page.
 *
 * @return void
 */
function nextora_addon_add_menu_page(): void {
	add_menu_page(
		__( 'Nextora Addon', 'nextora' ),
		__( 'Nextora Addon', 'nextora' ),
		'manage_options',
		'nextora-addon',
		'nextora_addon_render_page',
		'dashicons-superhero-alt',
		60,
	);
}

/**
 * Render the Nextora Addon admin page shell.
 *
 * Prints the root <div> where the React app mounts.
 *
 * @return void
 */
function nextora_addon_render_page(): void {
	echo '<div class="wrap">
		<div style="display: none;"><h1></h1></div>
		<div id="nextora-addon-root"></div> 
	</div>';
}

add_action( 'admin_menu', 'nextora_addon_add_menu_page' );
