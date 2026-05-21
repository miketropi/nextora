<?php

/**
 * Front-end and editor assets.
 *
 * @package Nextora
 */

declare( strict_types=1 );

/**
 * Webfonts hook: Arial / system stack comes from theme.json — no remote font stylesheet.
 */
function nextora_enqueue_fonts(): void {
	// Intentionally empty (keeps action name stable for child themes / plugins).
}
add_action( 'wp_enqueue_scripts', 'nextora_enqueue_fonts', 5 );
add_action( 'enqueue_block_assets', 'nextora_enqueue_fonts', 5 );

/**
 * Core block CSS + block-template skip link on the front end.
 *
 * Runs at priority 1 so `global-styles` is enqueued before theme styles that list it as a dependency.
 */
function nextora_enqueue_core_block_styles(): void {
	wp_enqueue_style( 'wp-block-library' );
	wp_enqueue_style( 'wp-block-library-theme' );
	wp_enqueue_style( 'global-styles' );

	if ( function_exists( 'wp_enqueue_block_template_skip_link' ) ) {
		wp_enqueue_block_template_skip_link();
	}
}
add_action( 'wp_enqueue_scripts', 'nextora_enqueue_core_block_styles', 1 );

/** Let core load block styles per-block where supported (helps with Elementor + block markup). */
add_filter( 'should_load_separate_core_block_assets', '__return_true' );

/** Elementor otherwise may print kit Google fonts in a way that competes with theme/block font loading. */
add_filter( 'elementor/frontend/print_google_fonts', '__return_false' );

/**
 * Enqueue compiled Tailwind / theme styles (front + block editor canvas).
 */
function nextora_enqueue_styles(): void {
	$rel  = '/assets/css/app.css';
	$path = NEXTORA_DIR . $rel;
	if ( ! is_readable( $path ) ) {
		return;
	}

	$deps = array();
	// Load after WP global styles so unlayered theme rules can override block margins.
	if ( wp_style_is( 'global-styles', 'registered' ) ) {
		$deps[] = 'global-styles';
	}
	wp_enqueue_style(
		'nextora-app',
		NEXTORA_URI . $rel,
		$deps,
		(string) filemtime( $path ),
	);
}
add_action( 'wp_enqueue_scripts', 'nextora_enqueue_styles' );
add_action( 'enqueue_block_assets', 'nextora_enqueue_styles' );

add_action(
	'after_setup_theme',
	static function (): void {
		add_editor_style( 'assets/css/app.css' );
	},
);

/**
 * Script handles `nextora-main` depends on (WooCommerce mini cart needs `wc-cart-fragments` + AJAX handler order).
 *
 * @return list<string>
 */
function nextora_main_script_dependencies(): array {
	$deps = array( 'jquery' );

	if ( ! class_exists( 'WooCommerce' ) || is_admin() ) {
		return $deps;
	}

	// `wc-cart-fragments.js` is normally only enqueued by the cart *widget*; the header block mini cart still needs it
	// (`wc_cart_fragments_params`, `wc_fragment_refresh`, `wc_fragments_refreshed`).
	if ( wp_script_is( 'wc-cart-fragments', 'registered' ) ) {
		wp_enqueue_script( 'wc-cart-fragments' );
		$deps[] = 'wc-cart-fragments';
	}

	if ( 'yes' === get_option( 'woocommerce_enable_ajax_add_to_cart' ) && wp_script_is( 'wc-add-to-cart', 'registered' ) ) {
		wp_enqueue_script( 'wc-add-to-cart' );
		$deps[] = 'wc-add-to-cart';
	}

	return $deps;
}

/**
 * Enqueue TypeScript build output.
 */
function nextora_enqueue_scripts(): void {
	$rel  = '/assets/js/main.js';
	$path = NEXTORA_DIR . $rel;
	if ( ! is_readable( $path ) ) {
		return;
	}

	wp_enqueue_script(
		'nextora-main',
		NEXTORA_URI . $rel,
		nextora_main_script_dependencies(),
		(string) filemtime( $path ),
		true,
	);

	wp_localize_script(
		'nextora-main',
		'nextoraNav',
		array(
			'openMenu'     => __( 'Open menu', 'nextora' ),
			'closeMenu'    => __( 'Close menu', 'nextora' ),
			'openSubmenu'  => __( 'Open submenu', 'nextora' ),
			'closeSubmenu' => __( 'Close submenu', 'nextora' ),
		),
	);

	wp_localize_script(
		'nextora-main',
		'nextoraHeaderSticky',
		array(
			'hideAfter' => (int) apply_filters( 'nextora_header_block_sticky_hide_after', 72 ),
		),
	);

	wp_localize_script(
		'nextora-main',
		'nextoraModal',
		array(
			'closeLabel' => __( 'Close dialog', 'nextora' ),
		),
	);

	wp_localize_script(
		'nextora-main',
		'nextoraComments',
		array(
			'toolbarLabel'      => __( 'Comment formatting', 'nextora' ),
			'toolBold'          => __( 'Bold', 'nextora' ),
			'toolBoldHint'      => __( 'Bold (Ctrl+B)', 'nextora' ),
			'toolItalic'        => __( 'Italic', 'nextora' ),
			'toolItalicHint'    => __( 'Italic (Ctrl+I)', 'nextora' ),
			'toolStrike'        => __( 'Strikethrough', 'nextora' ),
			'toolStrikeHint'    => __( 'Strikethrough', 'nextora' ),
			'toolCode'          => __( 'Inline code', 'nextora' ),
			'toolCodeHint'      => __( 'Inline code', 'nextora' ),
			'toolQuote'         => __( 'Blockquote', 'nextora' ),
			'toolQuoteHint'     => __( 'Blockquote', 'nextora' ),
			'toolLink'          => __( 'Link', 'nextora' ),
			'toolLinkHint'      => __( 'Add or edit link', 'nextora' ),
			'linkPromptTitle'   => __( 'Link URL', 'nextora' ),
			'linkPromptDefault' => 'https://',
		),
	);

	wp_localize_script(
		'nextora-main',
		'nextoraCommentTiptap',
		nextora_get_comment_tiptap_js_config(),
	);
}
add_action( 'wp_enqueue_scripts', 'nextora_enqueue_scripts', 20 );

/**
 * Script modules + import map: some plugin templates call `get_header()` / `get_footer()` so interactive
 * blocks may enqueue script modules after `wp_head()`. Move the import map to `wp_footer` so
 * `@wordpress/interactivity` resolves on those views.
 */
add_action(
	'after_setup_theme',
	static function (): void {
		if ( ! wp_is_block_theme() ) {
			return;
		}

		$sm = wp_script_modules();

		remove_action( 'wp_head', array( $sm, 'print_import_map' ) );
		remove_action( 'wp_head', array( $sm, 'print_script_module_preloads' ) );
		remove_action( 'wp_head', array( $sm, 'print_head_enqueued_script_modules' ) );

		add_action( 'wp_footer', array( $sm, 'print_import_map' ), 9 );
		add_action( 'wp_footer', array( $sm, 'print_script_module_preloads' ), 9 );
		add_action( 'wp_footer', array( $sm, 'print_head_enqueued_script_modules' ), 9 );
	},
	20,
);
