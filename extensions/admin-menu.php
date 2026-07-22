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
 * Add the Nextora Addon top-level menu page and its submenu items.
 *
 * @return void
 */
function nextora_addon_add_menu_page(): void {
	$icon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"/><rect x="14" y="2" width="8" height="8" rx="1"/></svg>';
	add_menu_page(
		__( 'Nextora Addon', 'nextora' ),
		__( 'Nextora Addon', 'nextora' ),
		'manage_options',
		'nextora-addon',
		'nextora_addon_render_page',
		'data:image/svg+xml;base64,' . base64_encode( $icon ),
		60,
	);

	add_submenu_page(
		'nextora-addon',
		__( 'Overview', 'nextora' ),
		__( 'Overview', 'nextora' ),
		'manage_options',
		'nextora-addon-overview',
		'nextora_addon_render_overview_page',
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

/**
 * Render the Nextora Addon Overview admin page shell.
 *
 * Prints the root <div> where the Overview React app mounts.
 *
 * @return void
 */
function nextora_addon_render_overview_page(): void {
	echo '<div class="wrap">
		<div style="display: none;"><h1></h1></div>
		<div id="nextora-addon-overview-root"></div>
	</div>';
}

add_action( 'admin_menu', 'nextora_addon_add_menu_page' );
