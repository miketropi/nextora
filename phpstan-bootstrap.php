<?php

/**
 * Constants and optional plugin stubs for PHPStan analysis.
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', '/tmp/wordpress/' );
}
require_once __DIR__ . '/inc/bootstrap/version.php';
if ( ! defined( 'NEXTORA_DIR' ) ) {
	define( 'NEXTORA_DIR', __DIR__ );
}
if ( ! defined( 'NEXTORA_URI' ) ) {
	define( 'NEXTORA_URI', 'https://example.test/wp-content/themes/nextora' );
}

if ( ! class_exists( 'WC_Cart', false ) ) {
	/**
	 * Minimal WooCommerce cart stub (optional plugin).
	 */
	class WC_Cart {
		public function get_cart_contents_count(): int {
			return 0;
		}
	}
}

if ( ! function_exists( 'woocommerce_mini_cart' ) ) {
	/**
	 * @param array<string, mixed> $args
	 */
	function woocommerce_mini_cart( $args = array() ): void {
	}
}

if ( ! function_exists( 'WC' ) ) {
	/**
	 * @return object{cart: WC_Cart|null}
	 */
	function WC(): object {
		static $instance = null;
		if ( null === $instance ) {
			$instance = (object) array( 'cart' => new WC_Cart() );
		}

		return $instance;
	}
}

if ( ! function_exists( 'wc_load_cart' ) ) {
	function wc_load_cart(): void {
	}
}

if ( ! function_exists( 'wc_get_cart_url' ) ) {
	function wc_get_cart_url(): string {
		return '';
	}
}

if ( ! function_exists( 'wc_get_account_endpoint_url' ) ) {
	function wc_get_account_endpoint_url( string $endpoint ): string {
		return '';
	}
}

if ( ! function_exists( 'tribe_get_events' ) ) {
	/**
	 * The Events Calendar plugin (optional) stub.
	 *
	 * @param array<string, mixed> $args
	 *
	 * @return array<int, WP_Post>
	 */
	function tribe_get_events( $args = array() ): array {
		return array();
	}
}

if ( ! function_exists( 'tribe_get_start_date' ) ) {
	/**
	 * @param int|WP_Post|null $event
	 */
	function tribe_get_start_date( $event = null, bool $display_time = true, string $date_format = 'Y-m-d' ): string {
		return '';
	}
}

if ( ! function_exists( 'tribe_get_venue' ) ) {
	/**
	 * @param int|WP_Post|null $event
	 */
	function tribe_get_venue( $event = null ): string {
		return '';
	}
}

if ( ! function_exists( 'tribe_get_city' ) ) {
	/**
	 * @param int|WP_Post|null $event
	 */
	function tribe_get_city( $event = null ): string {
		return '';
	}
}

if ( ! function_exists( 'tribe_get_cost' ) ) {
	/**
	 * @param int|WP_Post|null $event
	 */
	function tribe_get_cost( $event = null, bool $with_currency_symbol = false ): string {
		return '';
	}
}
