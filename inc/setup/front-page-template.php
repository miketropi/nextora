<?php

/**
 * Front page template resolution.
 *
 * A static front page resolves through the page template hierarchy, so the
 * assigned page template (or page.html) renders the selected page. The theme's
 * front-page template stays in place as the default for the posts index.
 *
 * The Site Editor resolves the template for a page client-side and prefers a
 * `front-page` template whenever one exists, before it considers the page's
 * assigned template. Hide that entry from full template lists while a static
 * front page is configured so the editor matches the front end.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Whether the site uses a valid static page as its front page.
 */
function nextora_has_static_front_page(): bool {
	if ( 'page' !== get_option( 'show_on_front' ) ) {
		return false;
	}

	$front_page_id = (int) get_option( 'page_on_front' );

	return $front_page_id > 0 && 'page' === get_post_type( $front_page_id );
}

add_filter(
	'template_include',
	static function ( string $template ): string {
		if ( ! is_front_page() || ! nextora_has_static_front_page() ) {
			return $template;
		}

		$page_template = get_page_template();

		return '' !== $page_template ? $page_template : $template;
	},
	20,
);

add_filter(
	'get_block_templates',
	/**
	 * @param array<int, WP_Block_Template> $templates
	 * @param array<string, mixed>          $query
	 *
	 * @return array<int, WP_Block_Template>
	 */
	static function ( array $templates, array $query, string $template_type ): array {
		if ( 'wp_template' !== $template_type || ! nextora_has_static_front_page() ) {
			return $templates;
		}

		// Leave hierarchy lookups and single-template queries untouched.
		if ( ! empty( $query['slug__in'] ) || ! empty( $query['wp_id'] ) ) {
			return $templates;
		}

		foreach ( $templates as $index => $template ) {
			if ( 'front-page' === $template->slug ) {
				unset( $templates[ $index ] );
			}
		}

		return array_values( $templates );
	},
	10,
	3,
);
