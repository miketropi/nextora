<?php

/**
 * Global theme constants (loaded before Composer autoload).
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'NEXTORA_VERSION' ) ) {
	define( 'NEXTORA_VERSION', '0.0.1' );
}

if ( ! defined( 'NEXTORA_DIR' ) ) {
	define( 'NEXTORA_DIR', get_template_directory() );
}

if ( ! defined( 'NEXTORA_URI' ) ) {
	define( 'NEXTORA_URI', get_template_directory_uri() );
}

/**
 * WP Update Hub server URL for theme update checks.
 *
 * Replace with your actual WP Update Hub deployment URL.
 */
if ( ! defined( 'NEXTORA_UPDATE_SERVER_URL' ) ) {
	define( 'NEXTORA_UPDATE_SERVER_URL', 'https://wp-update-hub.beplus-agency.cloud' );
}

/**
 * GitHub repository (owner/repo) that hosts this theme's releases.
 */
if ( ! defined( 'NEXTORA_UPDATE_GITHUB_REPO' ) ) {
	define( 'NEXTORA_UPDATE_GITHUB_REPO', 'miketropi/nextora' );
}
