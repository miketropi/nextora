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
