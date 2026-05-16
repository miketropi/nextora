<?php
/**
 * Header block: inline style helpers (navigation color CSS variables).
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Append semicolon-separated declarations to the wrapper `style` attribute.
 *
 * @param string $wrapper_attributes Output from get_block_wrapper_attributes().
 * @param string $declarations      e.g. `--x:red;--y:blue`.
 */
function nextora_header_block_append_inline_style_declarations( string $wrapper_attributes, string $declarations ): string {
	$declarations = trim( $declarations );
	if ( '' === $declarations ) {
		return $wrapper_attributes;
	}

	if ( preg_match( '/\bstyle="([^"]*)"/', $wrapper_attributes, $m ) ) {
		$existing = html_entity_decode( $m[1], ENT_QUOTES | ENT_HTML5, 'UTF-8' );
		$new_css  = trim( rtrim( $existing, ';' ) ) . ';' . $declarations;

		return (string) preg_replace(
			'/\bstyle="[^"]*"/',
			'style="' . esc_attr( $new_css ) . '"',
			$wrapper_attributes,
			1
		);
	}

	return trim( $wrapper_attributes ) . ' style="' . esc_attr( $declarations ) . '"';
}

/**
 * Build `--nextora-header-nav-*` CSS variables from block attributes (sanitized).
 *
 * @param array<string, mixed> $attributes Block attributes.
 */
function nextora_header_block_nav_color_inline_declarations( array $attributes ): string {
	if ( ! function_exists( 'nextora_header_block_sanitize_border_color' ) ) {
		return '';
	}

	$map = array(
		'navTopColor'               => '--nextora-header-nav-top',
		'navTopHoverColor'          => '--nextora-header-nav-top-hover',
		'navTopActiveColor'         => '--nextora-header-nav-top-active',
		'navSubmenuBgColor'         => '--nextora-header-nav-submenu-bg',
		'navSubmenuBorderColor'     => '--nextora-header-nav-submenu-border',
		'navSubmenuLinkColor'       => '--nextora-header-nav-submenu-link',
		'navSubmenuLinkHoverColor'  => '--nextora-header-nav-submenu-link-hover',
		'navSubmenuLinkActiveColor' => '--nextora-header-nav-submenu-link-active',
		'navSubmenuRowHoverColor'   => '--nextora-header-nav-submenu-row-hover',
		'navSubmenuRowActiveColor'  => '--nextora-header-nav-submenu-row-active',
	);

	$bits = array();
	foreach ( $map as $attr => $prop ) {
		$raw = isset( $attributes[ $attr ] ) ? (string) $attributes[ $attr ] : '';
		$san = nextora_header_block_sanitize_border_color( $raw );
		if ( '' !== $san ) {
			$bits[] = $prop . ':' . $san;
		}
	}

	return implode( ';', $bits );
}
