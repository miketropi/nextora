<?php

/**
 * Nextora Cloud REST API Controller.
 *
 * Exposes endpoints for browsing the cloud catalog and importing templates.
 * Namespace: `nextora/v1`
 *
 * @package Nextora
 */

declare( strict_types=1 );

namespace Nextora\Core\Cloud;

use WP_Error;
use WP_REST_Request;
use WP_REST_Response;
use WP_REST_Server;

final class RestController {

	public const REST_NAMESPACE = 'nextora/v1';

	/**
	 * Register REST API routes.
	 */
	public static function register_routes(): void {
		register_rest_route(
			self::REST_NAMESPACE,
			'/cloud/catalog',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( self::class, 'get_catalog' ),
					'permission_callback' => array( self::class, 'check_permission' ),
					'args'                => array(
						'theme'    => array(
							'type'              => 'string',
							'required'          => false,
							'sanitize_callback' => 'sanitize_title',
						),
						'category' => array(
							'type'              => 'string',
							'required'          => false,
							'sanitize_callback' => 'sanitize_text_field',
						),
						'search'   => array(
							'type'              => 'string',
							'required'          => false,
							'sanitize_callback' => 'sanitize_text_field',
						),
						'page'     => array(
							'type'              => 'integer',
							'required'          => false,
							'default'           => 1,
							'sanitize_callback' => 'absint',
						),
						'perPage'  => array(
							'type'              => 'integer',
							'required'          => false,
							'default'           => 12,
							'sanitize_callback' => 'absint',
						),
						'refresh'  => array(
							'type'     => 'boolean',
							'required' => false,
							'default'  => false,
						),
					),
				),
			),
		);

		register_rest_route(
			self::REST_NAMESPACE,
			'/cloud/themes',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( self::class, 'get_themes' ),
					'permission_callback' => array( self::class, 'check_permission' ),
				),
			),
		);

		register_rest_route(
			self::REST_NAMESPACE,
			'/cloud/categories',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( self::class, 'get_categories' ),
					'permission_callback' => array( self::class, 'check_permission' ),
				),
			),
		);

		register_rest_route(
			self::REST_NAMESPACE,
			'/cloud/template-content',
			array(
				array(
					'methods'             => WP_REST_Server::READABLE,
					'callback'            => array( self::class, 'get_template_content' ),
					'permission_callback' => array( self::class, 'check_permission' ),
					'args'                => array(
						'template_id' => array(
							'type'              => 'string',
							'required'          => true,
							'sanitize_callback' => 'sanitize_text_field',
						),
						'version'     => array(
							'type'              => 'string',
							'required'          => true,
							'sanitize_callback' => 'sanitize_text_field',
						),
					),
				),
			),
		);

		register_rest_route(
			self::REST_NAMESPACE,
			'/cloud/import',
			array(
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( self::class, 'import_template' ),
					'permission_callback' => array( self::class, 'check_permission' ),
					'args'                => array(
						'template_id' => array(
							'type'              => 'string',
							'required'          => true,
							'sanitize_callback' => 'sanitize_text_field',
						),
						'version'     => array(
							'type'              => 'string',
							'required'          => true,
							'sanitize_callback' => 'sanitize_text_field',
						),
						'import_type' => array(
							'type'              => 'string',
							'required'          => false,
							'default'           => 'page',
							'enum'              => array( 'page', 'template' ),
							'sanitize_callback' => 'sanitize_text_field',
						),
					),
				),
			),
		);
	}

	/**
	 * Permission check: User must be able to edit posts.
	 *
	 * @return bool|WP_Error
	 */
	public static function check_permission(): bool|WP_Error {
		if ( ! current_user_can( 'edit_posts' ) ) {
			return new WP_Error(
				'rest_forbidden',
				__( 'You do not have permission to access Nextora Cloud templates.', 'nextora' ),
				array( 'status' => rest_authorization_required_code() ),
			);
		}

		return true;
	}

	/**
	 * Get allowed theme slugs (only active stylesheet and parent template).
	 *
	 * @return list<string>
	 */
	public static function get_allowed_theme_slugs(): array {
		$active_stylesheet = get_stylesheet();
		$parent_template   = get_template();

		if ( $active_stylesheet === $parent_template ) {
			return array( $active_stylesheet );
		}

		return array( $active_stylesheet, $parent_template );
	}

	/**
	 * Handler for GET /nextora/v1/cloud/catalog.
	 *
	 * @param WP_REST_Request<array<string, mixed>> $request The REST request.
	 *
	 * @return WP_REST_Response|WP_Error
	 */
	public static function get_catalog( WP_REST_Request $request ): WP_REST_Response|WP_Error {
		$theme_param       = (string) $request->get_param( 'theme' );
		$active_stylesheet = get_stylesheet();
		$parent_template   = get_template();
		$allowed_slugs     = self::get_allowed_theme_slugs();

		$theme_slug = ! empty( $theme_param ) ? $theme_param : $active_stylesheet;

		// Strictly enforce theme restriction: only allow active child or parent theme.
		if ( ! in_array( $theme_slug, $allowed_slugs, true ) ) {
			$theme_slug = $active_stylesheet;
		}

		$category = (string) $request->get_param( 'category' );
		$search   = (string) $request->get_param( 'search' );
		$page     = (int) ( $request->get_param( 'page' ) ?: 1 );
		$per_page = (int) ( $request->get_param( 'perPage' ) ?: 12 );
		$refresh  = (bool) $request->get_param( 'refresh' );

		$args = array(
			'category' => $category,
			'search'   => $search,
			'page'     => $page,
			'perPage'  => $per_page,
		);

		$result = ApiClient::get_catalog( $theme_slug, $args, $refresh );

		if ( is_wp_error( $result ) ) {
			return $result;
		}

		// Add compatibility flag and active theme metadata to each template item.
		/** @var array<string, mixed> $result */
		$templates = isset( $result['data'] ) && is_array( $result['data'] ) ? $result['data'] : array();

		/** @var list<array<string, mixed>> $enhanced_templates */
		$enhanced_templates = array();
		foreach ( $templates as $tpl ) {
			if ( ! is_array( $tpl ) ) {
				continue;
			}
			$requires             = isset( $tpl['requires'] ) && is_array( $tpl['requires'] ) ? $tpl['requires'] : array();
			$tpl['compatibility']  = ApiClient::check_compatibility( $requires );
			$enhanced_templates[] = $tpl;
		}

		$meta = isset( $result['meta'] ) && is_array( $result['meta'] ) ? $result['meta'] : array();

		return new WP_REST_Response(
			array(
				'data'       => $enhanced_templates,
				'meta'       => $meta,
				'themeInfo'  => array(
					'activeSlug'   => $active_stylesheet,
					'parentSlug'   => $parent_template,
					'queriedSlug'  => $theme_slug,
					'isChildTheme' => $active_stylesheet !== $parent_template,
					'allowedSlugs' => $allowed_slugs,
				),
			),
			200,
		);
	}

	/**
	 * Handler for GET /nextora/v1/cloud/themes.
	 *
	 * Filters returned themes to strictly only the currently active child theme and parent theme.
	 *
	 * @return WP_REST_Response|WP_Error
	 */
	public static function get_themes(): WP_REST_Response|WP_Error {
		$themes = ApiClient::get_themes();

		if ( is_wp_error( $themes ) ) {
			return $themes;
		}

		$allowed_slugs = self::get_allowed_theme_slugs();

		/** @var array{data?: list<array<string, mixed>>} $themes */
		$all_themes     = $themes['data'] ?? array();
		$filtered_themes = array();

		foreach ( $all_themes as $theme_item ) {
			$slug = isset( $theme_item['slug'] ) ? (string) $theme_item['slug'] : '';
			if ( in_array( $slug, $allowed_slugs, true ) ) {
				$filtered_themes[] = $theme_item;
			}
		}

		// If the active child theme isn't explicitly in cloud themes catalog yet, synthesize it so it can be selected.
		$active_stylesheet = get_stylesheet();
		$parent_template   = get_template();
		$has_active        = false;

		foreach ( $filtered_themes as $ft ) {
			if ( ( $ft['slug'] ?? '' ) === $active_stylesheet ) {
				$has_active = true;
				break;
			}
		}

		if ( ! $has_active && $active_stylesheet !== $parent_template ) {
			$wp_theme = wp_get_theme();
			array_unshift(
				$filtered_themes,
				array(
					'id'             => 'local_' . $active_stylesheet,
					'slug'           => $active_stylesheet,
					'name'           => $wp_theme->get( 'Name' ) ?: $active_stylesheet,
					'description'    => $wp_theme->get( 'Description' ) ?: '',
					'type'           => 'CHILD',
					'currentVersion' => $wp_theme->get( 'Version' ) ?: '1.0.0',
				),
			);
		}

		return new WP_REST_Response(
			array(
				'data' => $filtered_themes,
			),
			200,
		);
	}

	/**
	 * Handler for GET /nextora/v1/cloud/categories.
	 *
	 * @return WP_REST_Response|WP_Error
	 */
	public static function get_categories(): WP_REST_Response|WP_Error {
		$categories = ApiClient::get_categories();

		if ( is_wp_error( $categories ) ) {
			return $categories;
		}

		return new WP_REST_Response(
			$categories,
			200,
		);
	}

	/**
	 * Handler for GET /nextora/v1/cloud/template-content (for direct Block Editor insertion).
	 *
	 * @param WP_REST_Request<array<string, mixed>> $request The REST request.
	 *
	 * @return WP_REST_Response|WP_Error
	 */
	public static function get_template_content( WP_REST_Request $request ): WP_REST_Response|WP_Error {
		$template_id = (string) $request->get_param( 'template_id' );
		$version     = (string) $request->get_param( 'version' );
		$theme       = (string) $request->get_param( 'theme' );

		/**
		 * Filters whether to allow cloud template content retrieval / import.
		 *
		 * @param bool|WP_Error   $can_import Whether import/fetch is allowed.
		 * @param string          $theme      Theme slug.
		 * @param WP_REST_Request $request    The REST request.
		 */
		$can_import = apply_filters( 'nextora_cloud_templates_can_import', true, $theme, $request );
		if ( is_wp_error( $can_import ) ) {
			return $can_import;
		}
		if ( false === $can_import ) {
			return new WP_Error(
				'rest_forbidden',
				__( 'Cloud template import is not allowed.', 'nextora' ),
				array( 'status' => 403 ),
			);
		}

		$data = ApiClient::download_version( $template_id, $version );

		if ( is_wp_error( $data ) ) {
			return $data;
		}

		/** @var array{data?: array{template?: array<string, mixed>, version?: array{content?: string, requires?: array<string, mixed>}}} $data */
		$version_data = $data['data']['version'] ?? array();
		$content      = $version_data['content'] ?? '';
		$template     = $data['data']['template'] ?? array();

		return new WP_REST_Response(
			array(
				'content'  => $content,
				'template' => $template,
				'version'  => $version,
			),
			200,
		);
	}

	/**
	 * Handler for POST /nextora/v1/cloud/import.
	 *
	 * @param WP_REST_Request<array<string, mixed>> $request The REST request.
	 *
	 * @return WP_REST_Response|WP_Error
	 */
	public static function import_template( WP_REST_Request $request ): WP_REST_Response|WP_Error {
		$template_id = (string) $request->get_param( 'template_id' );
		$version     = (string) $request->get_param( 'version' );
		$import_type = (string) ( $request->get_param( 'import_type' ) ?: 'page' );
		$theme       = (string) $request->get_param( 'theme' );

		/**
		 * Filters whether to allow cloud template content retrieval / import.
		 *
		 * @param bool|WP_Error   $can_import Whether import/fetch is allowed.
		 * @param string          $theme      Theme slug.
		 * @param WP_REST_Request $request    The REST request.
		 */
		$can_import = apply_filters( 'nextora_cloud_templates_can_import', true, $theme, $request );
		if ( is_wp_error( $can_import ) ) {
			return $can_import;
		}
		if ( false === $can_import ) {
			return new WP_Error(
				'rest_forbidden',
				__( 'Cloud template import is not allowed.', 'nextora' ),
				array( 'status' => 403 ),
			);
		}

		// Step 1: Download version payload from Nextora Cloud.
		$download = ApiClient::download_version( $template_id, $version );

		if ( is_wp_error( $download ) ) {
			return $download;
		}

		/** @var array{data?: array{template?: array<string, mixed>, version?: array{content?: string, requires?: array<string, mixed>}}} $download */
		$version_data = $download['data']['version'] ?? array();
		$content      = $version_data['content'] ?? '';
		$template     = $download['data']['template'] ?? array();

		if ( empty( $content ) ) {
			return new WP_Error(
				'nextora_cloud_empty_content',
				__( 'The downloaded template contains no block content.', 'nextora' ),
				array( 'status' => 400 ),
			);
		}

		// Step 2: Check compatibility.
		$requires      = $version_data['requires'] ?? array();
		$compatibility = ApiClient::check_compatibility( $requires );

		// Step 3: Native WordPress import.
		$template_meta = array_merge(
			$template,
			array(
				'version' => $version,
			),
		);

		$import_result = TemplateImporter::import( $template_meta, $content, $import_type );

		if ( is_wp_error( $import_result ) ) {
			return $import_result;
		}

		return new WP_REST_Response(
			array_merge(
				$import_result,
				array(
					'compatibility' => $compatibility,
					'message'       => sprintf(
						/* translators: %s: Template title */
						__( 'Successfully imported "%s".', 'nextora' ),
						$import_result['title'],
					),
				),
			),
			200,
		);
	}
}
