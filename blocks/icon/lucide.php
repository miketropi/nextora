<?php

/**
 * Lucide icon helpers for nextora/icon block.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'nextora_icon_scroll_animation_enabled' ) ) {
	/**
	 * Whether scroll reveal is enabled (handles REST booleans and string values).
	 *
	 * @param array<string, mixed> $attributes Block attributes.
	 */
	function nextora_icon_scroll_animation_enabled( array $attributes ): bool {
		if ( ! array_key_exists( 'enableScrollAnimation', $attributes ) ) {
			return true;
		}

		$value = $attributes['enableScrollAnimation'];
		$bool  = filter_var( $value, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE );

		if ( null === $bool ) {
			return true;
		}

		return $bool;
	}
}

if ( ! function_exists( 'nextora_icon_enqueue_view_script' ) ) {
	/**
	 * Queue block view script when scroll reveal may run.
	 */
	function nextora_icon_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$registry = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/icon' );
		if ( ! $registry || empty( $registry->view_script_handles ) || ! is_array( $registry->view_script_handles ) ) {
			return;
		}

		foreach ( $registry->view_script_handles as $handle ) {
			if ( is_string( $handle ) && '' !== $handle ) {
				wp_enqueue_script( $handle );
			}
		}
	}
}

if ( ! function_exists( 'nextora_icon_resolve_color' ) ) {
	/**
	 * Map preset slug or hex to a CSS color value.
	 */
	function nextora_icon_resolve_color( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return 'currentColor';
		}

		if ( preg_match( '/^#([0-9a-f]{3}|[0-9a-f]{6})$/i', $raw ) ) {
			return $raw;
		}

		if ( preg_match( '/^var\(\s*--wp--preset--color--[a-z0-9_-]+\s*\)$/i', $raw ) ) {
			return $raw;
		}

		if ( preg_match( '/^has-([a-z0-9-]+)-color$/i', $raw, $preset_m ) ) {
			return 'var(--wp--preset--color--' . sanitize_html_class( strtolower( $preset_m[1] ) ) . ')';
		}

		return 'var(--wp--preset--color--' . sanitize_html_class( $raw ) . ')';
	}
}

if ( ! function_exists( 'nextora_build_svg_nodes' ) ) {
	/**
	 * Recursively build SVG child nodes from lucide icon-nodes format.
	 *
	 * @param array<int, mixed> $nodes Node list.
	 */
	function nextora_build_svg_nodes( array $nodes ): string {
		$html = '';

		foreach ( $nodes as $node ) {
			if ( ! is_array( $node ) || count( $node ) < 2 ) {
				continue;
			}

			$tag      = is_string( $node[0] ) ? $node[0] : '';
			$attrs    = is_array( $node[1] ) ? $node[1] : array();
			$children = isset( $node[2] ) && is_array( $node[2] ) ? $node[2] : array();

			if ( '' === $tag ) {
				continue;
			}

			$tag_esc    = tag_escape( $tag );
			$attr_str   = '';
			foreach ( $attrs as $key => $val ) {
				if ( ! is_string( $key ) || ( ! is_string( $val ) && ! is_numeric( $val ) ) ) {
					continue;
				}
				$attr_str .= ' ' . esc_attr( $key ) . '="' . esc_attr( (string) $val ) . '"';
			}

			$inner = ! empty( $children ) ? nextora_build_svg_nodes( $children ) : '';

			$html .= "<{$tag_esc}{$attr_str}>{$inner}</{$tag_esc}>";
		}

		return $html;
	}
}

if ( ! function_exists( 'nextora_get_lucide_svg' ) ) {
	/**
	 * Get inline SVG string for a Lucide icon.
	 *
	 * @param string $icon_name    Lucide icon name in kebab-case.
	 * @param int    $size         Width and height in px.
	 * @param string $color        CSS color value or currentColor.
	 * @param float  $stroke_width SVG stroke-width attribute value.
	 * @param string $aria_label   Accessible label (empty = decorative).
	 */
	function nextora_get_lucide_svg(
		string $icon_name,
		int $size = 24,
		string $color = 'currentColor',
		float $stroke_width = 2,
		string $aria_label = '',
	): string {
		static $icon_data = null;

		if ( null === $icon_data ) {
			$icon_data = array();
			$json_path = defined( 'NEXTORA_DIR' )
				? NEXTORA_DIR . '/assets/data/lucide-icons.json'
				: get_template_directory() . '/assets/data/lucide-icons.json';

			if ( is_readable( $json_path ) ) {
				$decoded = json_decode( (string) file_get_contents( $json_path ), true );
				if ( is_array( $decoded ) ) {
					foreach ( $decoded as $item ) {
						if (
							is_array( $item )
							&& isset( $item['name'], $item['nodes'] )
							&& is_string( $item['name'] )
							&& is_array( $item['nodes'] )
						) {
							$icon_data[ $item['name'] ] = $item['nodes'];
						}
					}
				}
			}
		}

		if ( ! isset( $icon_data[ $icon_name ] ) ) {
			return '';
		}

		$nodes      = $icon_data[ $icon_name ];
		$size_attr  = esc_attr( (string) $size );
		$color_attr = esc_attr( $color );
		$sw_attr    = esc_attr( (string) $stroke_width );
		$class      = 'lucide lucide-' . esc_attr( $icon_name );

		$aria = '' !== $aria_label
			? 'role="img" aria-label="' . esc_attr( $aria_label ) . '"'
			: 'aria-hidden="true" focusable="false"';

		$inner = nextora_build_svg_nodes( $nodes );

		return sprintf(
			'<svg xmlns="http://www.w3.org/2000/svg" width="%1$s" height="%1$s" viewBox="0 0 24 24"'
			. ' fill="none" stroke="%2$s" stroke-width="%3$s"'
			. ' stroke-linecap="round" stroke-linejoin="round"'
			. ' class="%4$s" %5$s>%6$s</svg>',
			$size_attr,
			$color_attr,
			$sw_attr,
			$class,
			$aria,
			$inner,
		);
	}
}
