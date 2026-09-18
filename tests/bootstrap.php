<?php

/**
 * PHPUnit bootstrap (no full WordPress load).
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', '/tmp/wordpress/' );
}

if ( ! function_exists( '__' ) ) {
	function __( string $text, string $domain = 'default' ): string {
		return $text;
	}
}

if ( ! function_exists( 'apply_filters' ) ) {
	function apply_filters( string $hook_name, mixed $value, mixed ...$args ): mixed {
		return $value;
	}
}

if ( ! function_exists( 'untrailingslashit' ) ) {
	function untrailingslashit( string $value ): string {
		return rtrim( $value, '/\\' );
	}
}

require dirname( __DIR__ ) . '/inc/bootstrap/version.php';
require dirname( __DIR__ ) . '/vendor/autoload.php';
