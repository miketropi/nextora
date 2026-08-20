<?php

/**
 * Nextora Cloud Template Importer.
 *
 * Imports templates downloaded from Nextora Cloud into WordPress natively
 * as Page posts (`post_type = 'page'`) or FSE Block Templates (`post_type = 'wp_template'`).
 *
 * @package Nextora
 */

declare( strict_types=1 );

namespace Nextora\Core\Cloud;

use WP_Error;
use WP_Post;

final class TemplateImporter {

	/**
	 * Import template data into WordPress.
	 *
	 * @param array<string, mixed> $template_data The template metadata from catalog / version.
	 * @param string               $content       The raw block markup (<!-- wp:... -->).
	 * @param string               $import_type   'page' or 'template'.
	 *
	 * @return array{success: true, post_id: int, edit_url: string, post_type: string, title: string}|WP_Error
	 */
	public static function import( array $template_data, string $content, string $import_type = 'page' ): array|WP_Error {
		$title = ! empty( $template_data['title'] ) && is_string( $template_data['title'] )
			? sanitize_text_field( $template_data['title'] )
			: ( ! empty( $template_data['slug'] ) && is_string( $template_data['slug'] ) ? sanitize_text_field( $template_data['slug'] ) : 'Nextora Cloud Template' );

		$slug = ! empty( $template_data['slug'] ) && is_string( $template_data['slug'] )
			? sanitize_title( $template_data['slug'] )
			: sanitize_title( $title );

		if ( 'template' === $import_type ) {
			return self::import_as_block_template( $title, $slug, $content, $template_data );
		}

		return self::import_as_page( $title, $slug, $content, $template_data );
	}

	/**
	 * Import as a WordPress Page (draft).
	 *
	 * @param string               $title         Page title.
	 * @param string               $slug          Page slug.
	 * @param string               $content       Raw Gutenberg block markup.
	 * @param array<string, mixed> $template_data Additional metadata.
	 *
	 * @return array{success: true, post_id: int, edit_url: string, post_type: string, title: string}|WP_Error
	 */
	public static function import_as_page( string $title, string $slug, string $content, array $template_data ): array|WP_Error {
		$post_id = wp_insert_post(
			array(
				'post_title'   => $title,
				'post_name'    => $slug,
				'post_content' => $content,
				'post_status'  => 'draft',
				'post_type'    => 'page',
				'post_author'  => get_current_user_id() ?: 1,
			),
			true,
		);

		if ( is_wp_error( $post_id ) ) {
			return $post_id;
		}

		// Store Nextora Cloud metadata as post meta.
		if ( ! empty( $template_data['id'] ) ) {
			update_post_meta( $post_id, '_nextora_cloud_template_id', sanitize_text_field( (string) $template_data['id'] ) );
		}
		if ( ! empty( $template_data['version'] ) ) {
			update_post_meta( $post_id, '_nextora_cloud_version', sanitize_text_field( (string) $template_data['version'] ) );
		}
		if ( ! empty( $template_data['theme']['slug'] ) ) {
			update_post_meta( $post_id, '_nextora_cloud_theme', sanitize_text_field( (string) $template_data['theme']['slug'] ) );
		}

		$edit_url = admin_url( 'post.php?post=' . $post_id . '&action=edit' );

		return array(
			'success'   => true,
			'post_id'   => $post_id,
			'edit_url'  => $edit_url,
			'post_type' => 'page',
			'title'     => $title,
		);
	}

	/**
	 * Import as a WordPress FSE Block Template (wp_template).
	 *
	 * @param string               $title         Template title.
	 * @param string               $slug          Template slug.
	 * @param string               $content       Raw Gutenberg block markup.
	 * @param array<string, mixed> $template_data Additional metadata.
	 *
	 * @return array{success: true, post_id: int, edit_url: string, post_type: string, title: string}|WP_Error
	 */
	public static function import_as_block_template( string $title, string $slug, string $content, array $template_data ): array|WP_Error {
		$theme_slug = get_stylesheet();

		// Check if wp_template custom post type exists and if a template with this slug already exists for current theme.
		$existing_template = get_posts(
			array(
				'post_type'              => 'wp_template',
				'post_status'            => 'publish',
				'name'                   => $slug,
				'posts_per_page'         => 1,
				'tax_query'              => array(
					array(
						'taxonomy' => 'wp_theme',
						'field'    => 'name',
						'terms'    => $theme_slug,
					),
				),
				'no_found_rows'          => true,
				'update_post_meta_cache' => false,
				'update_post_term_cache' => false,
			),
		);

		$post_data = array(
			'post_title'   => $title,
			'post_name'    => $slug,
			'post_content' => $content,
			'post_status'  => 'publish',
			'post_type'    => 'wp_template',
			'tax_input'    => array(
				'wp_theme' => array( $theme_slug ),
			),
		);

		if ( ! empty( $existing_template ) && $existing_template[0] instanceof WP_Post ) {
			$post_data['ID'] = $existing_template[0]->ID;
			$post_id         = wp_update_post( $post_data, true );
		} else {
			$post_id = wp_insert_post( $post_data, true );
		}

		if ( is_wp_error( $post_id ) ) {
			return $post_id;
		}

		// Attach wp_theme taxonomy term to associate with current theme.
		wp_set_post_terms( $post_id, array( $theme_slug ), 'wp_theme' );

		if ( ! empty( $template_data['id'] ) ) {
			update_post_meta( $post_id, '_nextora_cloud_template_id', sanitize_text_field( (string) $template_data['id'] ) );
		}
		if ( ! empty( $template_data['version'] ) ) {
			update_post_meta( $post_id, '_nextora_cloud_version', sanitize_text_field( (string) $template_data['version'] ) );
		}

		$edit_url = admin_url( 'site-editor.php?postId=' . rawurlencode( $theme_slug . '//' . $slug ) . '&postType=wp_template' );

		return array(
			'success'   => true,
			'post_id'   => $post_id,
			'edit_url'  => $edit_url,
			'post_type' => 'wp_template',
			'title'     => $title,
		);
	}
}
