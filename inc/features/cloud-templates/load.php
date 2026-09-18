<?php

/**
 * Nextora Cloud Templates Feature Bootstrap.
 *
 * Integrates Nextora Cloud template catalog, native page/FSE importing,
 * Appearance admin menu page, and Gutenberg block editor integration.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once NEXTORA_DIR . '/inc/Core/Cloud/ApiClient.php';
require_once NEXTORA_DIR . '/inc/Core/Cloud/TemplateImporter.php';
require_once NEXTORA_DIR . '/inc/Core/Cloud/RestController.php';

use Nextora\Core\Cloud\ApiClient;
use Nextora\Core\Cloud\RestController;

/**
 * Register REST API routes.
 */
add_action( 'rest_api_init', array( RestController::class, 'register_routes' ) );

/**
 * Add "Templates" menu page under the Nextora Addon top-level menu.
 */
function nextora_cloud_templates_admin_menu(): void {
	add_submenu_page(
		'nextora-addon',
		__( 'Nextora Templates', 'nextora' ),
		__( 'Templates', 'nextora' ),
		'edit_posts',
		'nextora-cloud-templates',
		'nextora_cloud_templates_render_admin_page',
	);
}
add_action( 'admin_menu', 'nextora_cloud_templates_admin_menu', 20 );

/**
 * Render the root shell for the Nextora Templates admin page.
 */
function nextora_cloud_templates_render_admin_page(): void {
	echo '<div class="wrap nextora-cloud-wrap">
		<div style="display: none;"><h1></h1></div>
		<div id="nextora-cloud-templates-root"></div>
	</div>';
}

/**
 * Enqueue scripts and styles on the Nextora Templates admin page.
 *
 * @param string $hook_suffix Current admin page hook.
 */
function nextora_cloud_templates_enqueue_admin_assets( string $hook_suffix ): void {
	if ( false === strpos( $hook_suffix, 'nextora-cloud-templates' ) ) {
		return;
	}

	$rel        = '/assets/js/cloud-templates.js';
	$path       = NEXTORA_DIR . $rel;
	$asset_path = NEXTORA_DIR . '/assets/js/cloud-templates.asset.php';
	$css_path   = NEXTORA_DIR . '/assets/css/cloud-templates.css';

	if ( ! is_readable( $path ) || ! is_readable( $asset_path ) ) {
		return;
	}

	/** @var array{dependencies?: list<string>, version?: string} $asset */
	$asset  = require $asset_path;
	$handle = 'nextora-cloud-templates';

	wp_register_script(
		$handle,
		NEXTORA_URI . $rel,
		$asset['dependencies'] ?? array(),
		$asset['version'] ?? NEXTORA_VERSION,
		true,
	);

	wp_enqueue_script( $handle );

	wp_localize_script(
		$handle,
		'nextoraCloudData',
		array(
			'restUrl'      => esc_url_raw( rest_url( 'nextora/v1/cloud' ) ),
			'cloudApiUrl'  => ApiClient::get_api_url(),
			'nonce'        => wp_create_nonce( 'wp_rest' ),
			'activeTheme'  => get_stylesheet(),
			'parentTheme'  => get_template(),
			'themeVersion' => defined( 'NEXTORA_VERSION' ) ? (string) NEXTORA_VERSION : '1.0.0',
			'isChildTheme' => get_stylesheet() !== get_template(),
		),
	);

	if ( is_readable( $css_path ) ) {
		wp_enqueue_style(
			'nextora-cloud-templates-style',
			NEXTORA_URI . '/assets/css/cloud-templates.css',
			array(),
			(string) filemtime( $css_path ),
		);
	}
}
add_action( 'admin_enqueue_scripts', 'nextora_cloud_templates_enqueue_admin_assets' );

/**
 * Localize Block Editor with Nextora Cloud config and enqueue styles.
 */
function nextora_cloud_templates_editor_assets(): void {
	if ( ! current_user_can( 'edit_posts' ) ) {
		return;
	}

	$handle   = 'nextora-editor';
	$css_path = NEXTORA_DIR . '/assets/css/cloud-templates.css';

	wp_localize_script(
		$handle,
		'nextoraCloudEditorData',
		array(
			'restUrl'      => esc_url_raw( rest_url( 'nextora/v1/cloud' ) ),
			'cloudApiUrl'  => ApiClient::get_api_url(),
			'nonce'        => wp_create_nonce( 'wp_rest' ),
			'activeTheme'  => get_stylesheet(),
			'parentTheme'  => get_template(),
			'themeVersion' => defined( 'NEXTORA_VERSION' ) ? (string) NEXTORA_VERSION : '1.0.0',
			'isChildTheme' => get_stylesheet() !== get_template(),
		),
	);

	if ( is_readable( $css_path ) ) {
		wp_enqueue_style(
			'nextora-cloud-templates-style',
			NEXTORA_URI . '/assets/css/cloud-templates.css',
			array(),
			(string) filemtime( $css_path ),
		);
	}
}
add_action( 'enqueue_block_editor_assets', 'nextora_cloud_templates_editor_assets', 20 );
