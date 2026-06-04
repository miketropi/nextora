<?php

/**
 * Custom block template metadata (title/description in Site Editor).
 *
 * @package Nextora
 */
declare( strict_types=1 );
/**
 * Register descriptions for custom templates declared in theme.json.
 *
 * WordPress only reads name, title, and postTypes from customTemplates;
 * descriptions must be supplied via this filter.
 *
 * @param array<string, array{title: string, description: string}> $template_types
 *
 * @return array<string, array{title: string, description: string}>
 */
add_filter(
	'default_template_types',
	static function ( array $template_types ): array {
		$template_types['page-full-width'] = array(
			'title'       => __( 'Page — Full Width', 'nextora' ),
			'description' => __( 'Wide, full-width content without the page title hero, breadcrumbs, or featured image. Best for landing pages and custom block layouts.', 'nextora' ),
		);
        $template_types['about-us'] = array(
            'title'       => __( 'About Us', 'nextora' ),
            'description' => __( 'A page with a about us layout', 'nextora' ),
        );
		return $template_types;
	},
);
