<?php

/**
 * Nextora Cloud API Client.
 *
 * Handles communication with the Nextora Cloud API for template catalogs,
 * theme listings, version downloads, and compatibility checking.
 *
 * @package Nextora
 */

declare( strict_types=1 );

namespace Nextora\Core\Cloud;

use WP_Error;

final class ApiClient {

	public const DEFAULT_API_URL = 'https://nextora-cloud-api.beplus-agency.cloud/api/v1';

	public const CACHE_GROUP = 'nextora_cloud';

	public const CACHE_TTL_CATALOG = 600; // 10 minutes.

	public const CACHE_TTL_THEMES = 3600; // 1 hour.

	public const CACHE_TTL_CATEGORIES = 3600; // 1 hour.

	/**
	 * Get the base API URL.
	 */
	public static function get_api_url(): string {
		$url = defined( 'NEXTORA_CLOUD_API_URL' )
			? (string) constant( 'NEXTORA_CLOUD_API_URL' )
			: self::DEFAULT_API_URL;

		/**
		 * Filters the Nextora Cloud API base URL.
		 *
		 * @param string $url The base API URL.
		 */
		$filtered_url = apply_filters( 'nextora_cloud_api_url', $url );

		return is_string( $filtered_url ) ? untrailingslashit( $filtered_url ) : untrailingslashit( $url );
	}

	/**
	 * Fetch category listing from the Cloud API.
	 *
	 * @param bool $force_refresh Skip transient cache.
	 *
	 * @return array<string, mixed>|WP_Error
	 */
	public static function get_categories( bool $force_refresh = false ): array|WP_Error {
		$cache_key = 'nextora_cloud_categories';

		if ( ! $force_refresh ) {
			$cached = get_transient( $cache_key );
			if ( is_array( $cached ) ) {
				return $cached;
			}
		}

		$endpoint = self::get_api_url() . '/categories';
		$response = wp_remote_get(
			$endpoint,
			array(
				'timeout' => 15,
				'headers' => array(
					'Accept' => 'application/json',
				),
			),
		);

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$code = wp_remote_retrieve_response_code( $response );
		$body = wp_remote_retrieve_body( $response );

		if ( $code < 200 || $code >= 300 ) {
			return new WP_Error(
				'nextora_cloud_http_error',
				sprintf(
					/* translators: %d: HTTP status code */
					__( 'Cloud API returned HTTP status %d.', 'nextora' ),
					$code,
				),
				array( 'status' => $code ),
			);
		}

		/** @var array<string, mixed>|null $data */
		$data = json_decode( $body, true );

		if ( ! is_array( $data ) || ! isset( $data['data'] ) ) {
			return new WP_Error(
				'nextora_cloud_invalid_json',
				__( 'Invalid JSON response from Nextora Cloud API.', 'nextora' ),
			);
		}

		set_transient( $cache_key, $data, self::CACHE_TTL_CATEGORIES );

		return $data;
	}

	/**
	 * Fetch theme listing from the Cloud API.
	 *
	 * @param bool $force_refresh Skip transient cache.
	 *
	 * @return array<string, mixed>|WP_Error
	 */
	public static function get_themes( bool $force_refresh = false ): array|WP_Error {
		$cache_key = 'nextora_cloud_themes';

		if ( ! $force_refresh ) {
			$cached = get_transient( $cache_key );
			if ( is_array( $cached ) ) {
				return $cached;
			}
		}

		$endpoint = self::get_api_url() . '/themes';
		$response = wp_remote_get(
			$endpoint,
			array(
				'timeout' => 15,
				'headers' => array(
					'Accept' => 'application/json',
				),
			),
		);

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$code = wp_remote_retrieve_response_code( $response );
		$body = wp_remote_retrieve_body( $response );

		if ( $code < 200 || $code >= 300 ) {
			return new WP_Error(
				'nextora_cloud_http_error',
				sprintf(
					/* translators: %d: HTTP status code */
					__( 'Cloud API returned HTTP status %d.', 'nextora' ),
					$code,
				),
				array( 'status' => $code ),
			);
		}

		/** @var array<string, mixed>|null $data */
		$data = json_decode( $body, true );

		if ( ! is_array( $data ) || ! isset( $data['data'] ) ) {
			return new WP_Error(
				'nextora_cloud_invalid_json',
				__( 'Invalid JSON response from Nextora Cloud API.', 'nextora' ),
			);
		}

		set_transient( $cache_key, $data, self::CACHE_TTL_THEMES );

		return $data;
	}

	/**
	 * Fetch template catalog for a specific theme.
	 *
	 * @param string               $theme_slug    The theme slug (e.g., 'nextora', 'nextora-saas').
	 * @param array<string, mixed> $args          Query arguments (category, search, page, perPage).
	 * @param bool                 $force_refresh Skip transient cache.
	 *
	 * @return array<string, mixed>|WP_Error
	 */
	public static function get_catalog( string $theme_slug, array $args = array(), bool $force_refresh = false ): array|WP_Error {
		$theme_slug = sanitize_title( $theme_slug );
		if ( empty( $theme_slug ) ) {
			$theme_slug = 'nextora';
		}

		$query_params = array();
		if ( ! empty( $args['category'] ) && is_string( $args['category'] ) && 'all' !== $args['category'] ) {
			$query_params['category'] = sanitize_text_field( $args['category'] );
		}
		if ( ! empty( $args['search'] ) && is_string( $args['search'] ) ) {
			$query_params['search'] = sanitize_text_field( $args['search'] );
		}
		if ( ! empty( $args['page'] ) && ( is_int( $args['page'] ) || is_numeric( $args['page'] ) ) ) {
			$query_params['page'] = max( 1, (int) $args['page'] );
		}
		if ( ! empty( $args['perPage'] ) && ( is_int( $args['perPage'] ) || is_numeric( $args['perPage'] ) ) ) {
			$query_params['perPage'] = min( 50, max( 1, (int) $args['perPage'] ) );
		}

		$cache_key = 'nextora_cloud_cat_' . md5( $theme_slug . '_' . wp_json_encode( $query_params ) );

		if ( ! $force_refresh ) {
			$cached = get_transient( $cache_key );
			if ( is_array( $cached ) ) {
				return $cached;
			}
		}

		$endpoint = self::get_api_url() . '/themes/' . rawurlencode( $theme_slug ) . '/templates';
		if ( ! empty( $query_params ) ) {
			$endpoint = add_query_arg( $query_params, $endpoint );
		}

		$response = wp_remote_get(
			$endpoint,
			array(
				'timeout' => 15,
				'headers' => array(
					'Accept' => 'application/json',
				),
			),
		);

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$code = wp_remote_retrieve_response_code( $response );
		$body = wp_remote_retrieve_body( $response );

		if ( 404 === $code ) {
			// Return empty catalog structure on 404 for nonexistent themes.
			return array(
				'data' => array(),
				'meta' => array(
					'page'       => 1,
					'perPage'    => 12,
					'total'      => 0,
					'totalPages' => 0,
				),
			);
		}

		if ( $code < 200 || $code >= 300 ) {
			return new WP_Error(
				'nextora_cloud_http_error',
				sprintf(
					/* translators: %d: HTTP status code */
					__( 'Cloud API returned HTTP status %d.', 'nextora' ),
					$code,
				),
				array( 'status' => $code ),
			);
		}

		/** @var array<string, mixed>|null $data */
		$data = json_decode( $body, true );

		if ( ! is_array( $data ) || ! isset( $data['data'] ) ) {
			return new WP_Error(
				'nextora_cloud_invalid_json',
				__( 'Invalid JSON response from Nextora Cloud API.', 'nextora' ),
			);
		}

		set_transient( $cache_key, $data, self::CACHE_TTL_CATALOG );

		return $data;
	}

	/**
	 * Download specific version content for a template.
	 *
	 * @param string $template_id The template ID (e.g. 'tpl_...').
	 * @param string $version     The version string (e.g. '1.1.0').
	 *
	 * @return array<string, mixed>|WP_Error
	 */
	public static function download_version( string $template_id, string $version ): array|WP_Error {
		$template_id = sanitize_text_field( $template_id );
		$version     = sanitize_text_field( $version );

		if ( empty( $template_id ) || empty( $version ) ) {
			return new WP_Error(
				'nextora_cloud_invalid_params',
				__( 'Template ID and version are required.', 'nextora' ),
			);
		}

		$endpoint = self::get_api_url() . '/templates/' . rawurlencode( $template_id ) . '/versions/' . rawurlencode( $version );

		$response = wp_remote_get(
			$endpoint,
			array(
				'timeout' => 20,
				'headers' => array(
					'Accept' => 'application/json',
				),
			),
		);

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$code = wp_remote_retrieve_response_code( $response );
		$body = wp_remote_retrieve_body( $response );

		if ( $code < 200 || $code >= 300 ) {
			return new WP_Error(
				'nextora_cloud_download_error',
				sprintf(
					/* translators: %d: HTTP status code */
					__( 'Failed to download template (HTTP %d).', 'nextora' ),
					$code,
				),
				array( 'status' => $code ),
			);
		}

		/** @var array<string, mixed>|null $data */
		$data = json_decode( $body, true );

		if ( ! is_array( $data ) || ! isset( $data['data'] ) ) {
			return new WP_Error(
				'nextora_cloud_invalid_json',
				__( 'Invalid template payload received.', 'nextora' ),
			);
		}

		return $data;
	}

	/**
	 * Check compatibility requirements against current environment.
	 *
	 * @param array<string, mixed> $requires Requirements array (e.g. ['theme' => '>=1.0.0', 'childTheme' => '>=1.0.0']).
	 *
	 * @return array{compatible: bool, message: string}
	 */
	public static function check_compatibility( array $requires ): array {
		if ( empty( $requires ) ) {
			return array(
				'compatible' => true,
				'message'    => __( 'Fully compatible', 'nextora' ),
			);
		}

		$current_theme_version = defined( 'NEXTORA_VERSION' ) ? (string) NEXTORA_VERSION : '0.0.1';

		if ( ! empty( $requires['theme'] ) && is_string( $requires['theme'] ) ) {
			$req_theme = trim( $requires['theme'] );
			$operator  = '>=';
			$version   = $req_theme;

			if ( preg_match( '/^(>=|<=|>|<|==|=|!=)\s*(.*)$/', $req_theme, $matches ) ) {
				$operator = $matches[1] === '=' ? '==' : $matches[1];
				$version  = $matches[2];
			}

			if ( ! version_compare( $current_theme_version, $version, $operator ) ) {
				return array(
					'compatible' => false,
					'message'    => sprintf(
						/* translators: 1: Required theme version, 2: Current theme version */
						__( 'Requires Nextora theme %1$s (Current: v%2$s)', 'nextora' ),
						$req_theme,
						$current_theme_version,
					),
				);
			}
		}

		return array(
			'compatible' => true,
			'message'    => sprintf(
				/* translators: %s: Current theme version */
				__( 'Compatible with Nextora v%s', 'nextora' ),
				$current_theme_version,
			),
		);
	}
}
