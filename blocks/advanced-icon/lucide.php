<?php

/**
 * Lucide icon helpers for nextora/advanced-icon block.
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

		$registry = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/advanced-icon' );
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

if ( ! function_exists( 'nextora_icon_normalize_hex_for_compare' ) ) {
	/**
	 * Normalize #abc / #aabbcc for palette hex comparison.
	 */
	function nextora_icon_normalize_hex_for_compare( string $hex ): string {
		$sanitized = sanitize_hex_color( $hex );
		if ( ! is_string( $sanitized ) || '' === $sanitized ) {
			return '';
		}

		$sanitized = strtolower( $sanitized );
		if ( 4 === strlen( $sanitized ) ) {
			return sprintf(
				'#%1$s%1$s%2$s%2$s%3$s%3$s',
				$sanitized[1],
				$sanitized[2],
				$sanitized[3],
			);
		}

		return $sanitized;
	}
}

if ( ! function_exists( 'nextora_icon_collect_palette_entries' ) ) {
	/**
	 * Flat list of theme palette entries from active + style variation JSON files.
	 *
	 * @return list<array{slug: string, color: string}>
	 */
	function nextora_icon_collect_palette_entries(): array {
		static $cache = null;

		if ( null !== $cache ) {
			return $cache;
		}

		/** @var list<array{slug: string, color: string}> $entries */
		$entries = array();
		$seen    = array();

		$add_palette = static function ( array $palette ) use ( &$entries, &$seen ): void {
			foreach ( $palette as $entry ) {
				if ( ! is_array( $entry ) ) {
					continue;
				}

				$slug  = isset( $entry['slug'] ) ? sanitize_key( (string) $entry['slug'] ) : '';
				$color = isset( $entry['color'] ) ? trim( (string) $entry['color'] ) : '';

				if ( '' === $slug || '' === $color || ! preg_match( '/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i', $color ) ) {
					continue;
				}

				$key = $slug . '|' . strtolower( $color );
				if ( isset( $seen[ $key ] ) ) {
					continue;
				}

				$seen[ $key ] = true;
				$entries[]    = array(
					'slug'  => $slug,
					'color' => $color,
				);
			}
		};

		if ( function_exists( 'wp_get_global_settings' ) ) {
			$palette = wp_get_global_settings( array( 'color', 'palette' ) );
			if ( is_array( $palette ) ) {
				$add_palette( $palette );
			}
		}

		if ( class_exists( 'WP_Theme_JSON_Resolver' ) && is_callable( array( 'WP_Theme_JSON_Resolver', 'get_style_variations' ) ) ) {
			$variations = WP_Theme_JSON_Resolver::get_style_variations();
			if ( is_array( $variations ) ) {
				foreach ( $variations as $variation ) {
					if ( ! is_array( $variation ) ) {
						continue;
					}

					$palette = $variation['settings']['color']['palette'] ?? array();
					if ( is_array( $palette ) ) {
						$add_palette( $palette );
					}
				}
			}
		}

		$theme = wp_get_theme();
		$dirs  = array_values(
			array_unique(
				array_filter(
					array(
						$theme->get_stylesheet_directory(),
						$theme->get_template_directory(),
					),
				),
			),
		);

		foreach ( $dirs as $dir ) {
			$styles_dir = $dir . '/styles';
			if ( ! is_dir( $styles_dir ) ) {
				continue;
			}

			/** @var list<string> $files */
			$files = array();
			$root  = glob( $styles_dir . '/*.json' );
			if ( is_array( $root ) ) {
				$files = array_merge( $files, $root );
			}

			try {
				$iterator = new RecursiveIteratorIterator(
					new RecursiveDirectoryIterator( $styles_dir, FilesystemIterator::SKIP_DOTS ),
				);

				foreach ( $iterator as $file_info ) {
					if ( ! $file_info instanceof SplFileInfo || ! $file_info->isFile() ) {
						continue;
					}

					if ( 'json' !== strtolower( $file_info->getExtension() ) ) {
						continue;
					}

					$files[] = $file_info->getPathname();
				}
			} catch ( UnexpectedValueException ) {
				continue;
			}

			foreach ( array_unique( $files ) as $file ) {
				if ( ! is_string( $file ) || ! is_readable( $file ) ) {
					continue;
				}

				$data = json_decode( (string) file_get_contents( $file ), true );
				if ( ! is_array( $data ) ) {
					continue;
				}

				$palette = $data['settings']['color']['palette'] ?? array();
				if ( is_array( $palette ) ) {
					$add_palette( $palette );
				}
			}
		}

		if ( class_exists( 'WP_Theme_JSON_Resolver' ) ) {
			$theme_data = WP_Theme_JSON_Resolver::get_merged_data();
			$settings   = $theme_data->get_settings();
			$palette    = $settings['color']['palette'] ?? array();
			if ( is_array( $palette ) ) {
				$add_palette( $palette );
			}
		}

		$cache = $entries;

		return $cache;
	}
}

if ( ! function_exists( 'nextora_icon_hex_to_preset_slug' ) ) {
	/**
	 * Map a saved preset hex (legacy) back to its palette slug when possible.
	 */
	function nextora_icon_hex_to_preset_slug( string $hex ): string {
		$target = nextora_icon_normalize_hex_for_compare( $hex );
		if ( '' === $target ) {
			return '';
		}

		/** @var array<string, int> $counts */
		$counts = array();

		foreach ( nextora_icon_collect_palette_entries() as $entry ) {
			if ( nextora_icon_normalize_hex_for_compare( $entry['color'] ) !== $target ) {
				continue;
			}

			$counts[ $entry['slug'] ] = ( $counts[ $entry['slug'] ] ?? 0 ) + 1;
		}

		if ( array() === $counts ) {
			return '';
		}

		arsort( $counts );

		return (string) array_key_first( $counts );
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

		if ( preg_match( '/^var:preset\|color\|([a-z0-9_-]+)$/i', $raw, $preset_m ) ) {
			return 'var(--wp--preset--color--' . sanitize_html_class( strtolower( $preset_m[1] ) ) . ')';
		}

		if ( preg_match( '/^#([0-9a-f]{8})$/i', $raw ) ) {
			$preset_slug = nextora_icon_hex_to_preset_slug( $raw );
			if ( '' !== $preset_slug ) {
				return 'var(--wp--preset--color--' . sanitize_html_class( $preset_slug ) . ')';
			}

			return strtolower( $raw );
		}

		$hex = sanitize_hex_color( $raw );
		if ( is_string( $hex ) && '' !== $hex ) {
			$preset_slug = nextora_icon_hex_to_preset_slug( $hex );
			if ( '' !== $preset_slug ) {
				return 'var(--wp--preset--color--' . sanitize_html_class( $preset_slug ) . ')';
			}

			return $hex;
		}

		if ( preg_match( '/^var\(\s*--wp--preset--color--[a-z0-9_-]+\s*\)$/i', $raw ) ) {
			$normalized = preg_replace( '/\s+/', ' ', $raw );

			return is_string( $normalized ) ? $normalized : $raw;
		}

		if ( preg_match( '/^has-([a-z0-9-]+)-color$/i', $raw, $class_m ) ) {
			return 'var(--wp--preset--color--' . sanitize_html_class( strtolower( $class_m[1] ) ) . ')';
		}

		if ( preg_match( '/^[a-z0-9-]+$/i', $raw ) ) {
			return 'var(--wp--preset--color--' . sanitize_html_class( $raw ) . ')';
		}

		return $raw;
	}
}

if ( ! function_exists( 'nextora_build_svg_nodes' ) ) {
	/**
	 * Recursively build SVG child nodes from lucide icon-nodes format.
	 *
	 * @param array<int, mixed>                                                                   $nodes           Node list.
	 * @param array<int, array{classes?: list<string>, styles?: array<string, string|int|float>}> $animation_nodes Per-node animation metadata.
	 */
	function nextora_build_svg_nodes( array $nodes, array $animation_nodes = array(), int &$node_index = 0 ): string {
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

			if ( isset( $animation_nodes[ $node_index ] ) && is_array( $animation_nodes[ $node_index ] ) ) {
				$animation = $animation_nodes[ $node_index ];
				$classes   = isset( $animation['classes'] ) && is_array( $animation['classes'] ) ? $animation['classes'] : array();
				$styles    = isset( $animation['styles'] ) && is_array( $animation['styles'] ) ? $animation['styles'] : array();

				if ( ! empty( $classes ) ) {
					$attr_str .= ' class="' . esc_attr( implode( ' ', array_map( 'sanitize_html_class', $classes ) ) ) . '"';
					if ( in_array( 'al-anim-draw', $classes, true ) || in_array( 'al-anim-draw-line', $classes, true ) ) {
						$dash_length = isset( $styles['--al-dash-len'] ) ? (string) $styles['--al-dash-len'] : '50';
						$attr_str   .= ' stroke-dasharray="' . esc_attr( $dash_length ) . '" stroke-dashoffset="' . esc_attr( $dash_length ) . '"';
					}
				}

				if ( ! empty( $styles ) ) {
					$style_values = array();
					foreach ( $styles as $property => $value ) {
						if ( is_string( $property ) && preg_match( '/^--[a-z0-9-]+$/', $property ) && ( is_string( $value ) || is_numeric( $value ) ) ) {
							$style_values[] = $property . ':' . esc_attr( (string) $value );
						}
					}
					if ( ! empty( $style_values ) ) {
						$attr_str .= ' style="' . esc_attr( implode( ';', $style_values ) ) . '"';
					}
				}
			}

			$node_index++;
			$inner = ! empty( $children ) ? nextora_build_svg_nodes( $children, $animation_nodes, $node_index ) : '';

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
	 * @param bool   $animate      Add the optional Lucide hover animation class.
	 */
	function nextora_get_lucide_svg(
		string $icon_name,
		int $size = 24,
		string $color = 'currentColor',
		float $stroke_width = 2,
		string $aria_label = '',
		bool $animate = false,
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
							$icon_data[ $item['name'] ] = array(
								'nodes'     => $item['nodes'],
								'animation' => isset( $item['animation']['nodes'] ) && is_array( $item['animation']['nodes'] )
									? $item['animation']['nodes']
									: array(),
							);
						}
					}
				}
			}
		}

		if ( ! isset( $icon_data[ $icon_name ] ) ) {
			return '';
		}

		$icon       = $icon_data[ $icon_name ];
		$nodes      = $icon['nodes'];
		$animations = $animate ? $icon['animation'] : array();
		$size_attr  = esc_attr( (string) $size );
		$color_attr = esc_attr( $color );
		$sw_attr    = esc_attr( (string) $stroke_width );
		$class      = 'lucide lucide-' . esc_attr( $icon_name );
		if ( $animate ) {
			$class .= ' animated-lucide-icon';
		}

		$aria = '' !== $aria_label
			? 'role="img" aria-label="' . esc_attr( $aria_label ) . '"'
			: 'aria-hidden="true" focusable="false"';

		$node_index = 0;
		$inner      = nextora_build_svg_nodes( $nodes, $animations, $node_index );

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
