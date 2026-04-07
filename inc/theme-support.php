<?php
/**
 * Hybrid theme supports and editor integration.
 *
 * @package Nextora
 */

declare(strict_types=1);

add_action(
	'after_setup_theme',
	static function (): void {
		load_theme_textdomain( 'nextora', NEXTORA_DIR . '/languages' );

		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'responsive-embeds' );
		add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
		add_theme_support( 'wp-block-styles' );
		add_theme_support( 'editor-styles' );
		add_theme_support( 'block-template-parts' );
		add_theme_support( 'align-wide' );

		register_nav_menus(
			array(
				'primary' => __( 'Primary Menu', 'nextora' ),
			)
		);
	}
);
