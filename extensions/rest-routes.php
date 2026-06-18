<?php

/**
 * REST API routes for the Nextora Addon admin page.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register GET /nextora/v1/addon/child-themes.
 *
 * @return void
 */
function nextora_addon_rest_child_themes(): void {
	register_rest_route(
		'nextora/v1',
		'/addon/child-themes',
		array(
			'methods'             => 'GET',
			'callback'            => static function (): array {
				return nextora_get_child_themes();
			},
			'permission_callback' => static function (): bool {
				return current_user_can( 'manage_options' );
			},
		),
	);
}

/**
 * Register GET /nextora/v1/addon/plugins.
 *
 * @return void
 */
function nextora_addon_rest_plugins(): void {
	register_rest_route(
		'nextora/v1',
		'/addon/plugins',
		array(
			'methods'             => 'GET',
			'callback'            => static function (): array {
				$plugins = nextora_get_supported_plugins();

				foreach ( (array) $plugins as $key => $plugin ) {
					$plugins[ $key ]['isActive'] = is_plugin_active( $plugin['slug'] . '/' . $plugin['slug'] . '.php' );
				}

				return $plugins;
			},
			'permission_callback' => static function (): bool {
				return current_user_can( 'manage_options' );
			},
		),
	);
}

/**
 * Register GET /nextora/v1/addon/business-services.
 *
 * @return void
 */
function nextora_addon_rest_business_services(): void {
	register_rest_route(
		'nextora/v1',
		'/addon/business-services',
		array(
			'methods'             => 'GET',
			'callback'            => static function (): array {
				return nextora_get_business_services();
			},
			'permission_callback' => static function (): bool {
				return current_user_can( 'manage_options' );
			},
		),
	);
}

/**
 * Register all Nextora Addon REST API routes on rest_api_init.
 *
 * @return void
 */
function nextora_addon_register_rest_routes(): void {
	nextora_addon_rest_child_themes();
	nextora_addon_rest_plugins();
	nextora_addon_rest_business_services();
}

add_action( 'rest_api_init', 'nextora_addon_register_rest_routes' );
