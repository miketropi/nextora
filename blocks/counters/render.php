<?php
/**
 * Counters — dynamic block render.
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_counters_get_color_props' ) ) {
	/**
	 * Resolves stored color attribute into standard Gutenberg classes and inline style.
	 *
	 * @param string $color Attribute value (slug, preset string, or hex/rgb).
	 * @param string $type  'color' (for text) or 'background'.
	 *
	 * @return array{class: string, style: string, slug: string, value: string}
	 */
	function nextora_counters_get_color_props( string $color, string $type = 'color' ): array {
		$color = trim( $color );
		if ( '' === $color ) {
			return array( 'class' => '', 'style' => '', 'slug' => '', 'value' => '' );
		}

		if (
			'transparent' === $color ||
			'rgba(0,0,0,0)' === $color ||
			'#00000000' === $color
		) {
			if ( 'border' === $type ) {
				return array(
					'class' => '',
					'style' => 'border-color:transparent;',
					'slug'  => 'transparent',
					'value' => 'transparent',
				);
			}
			if ( 'background' === $type ) {
				return array(
					'class' => 'has-background has-transparent-background-color',
					'style' => 'background-color:transparent;',
					'slug'  => 'transparent',
					'value' => 'transparent',
				);
			}
			return array(
				'class' => 'has-text-color has-transparent-color',
				'style' => 'color:transparent;',
				'slug'  => 'transparent',
				'value' => 'transparent',
			);
		}

		$slug = '';
		if ( preg_match( '/^var:preset\|color\|([a-z0-9_-]+)$/i', $color, $m ) ) {
			$slug = sanitize_html_class( strtolower( $m[1] ) );
		} elseif ( preg_match( '/^var\(\s*--wp--preset--color--([a-z0-9_-]+)\s*\)$/i', $color, $m ) ) {
			$slug = sanitize_html_class( strtolower( $m[1] ) );
		} elseif ( preg_match( '/^[a-z0-9_-]+$/i', $color ) && ! preg_match( '/^[0-9a-f]{3,8}$/i', $color ) ) {
			$slug = sanitize_html_class( strtolower( $color ) );
		}

		if ( 'transparent' === $slug ) {
			if ( 'border' === $type ) {
				return array(
					'class' => '',
					'style' => 'border-color:transparent;',
					'slug'  => 'transparent',
					'value' => 'transparent',
				);
			}
			if ( 'background' === $type ) {
				return array(
					'class' => 'has-background has-transparent-background-color',
					'style' => 'background-color:transparent;',
					'slug'  => 'transparent',
					'value' => 'transparent',
				);
			}
			return array(
				'class' => 'has-text-color has-transparent-color',
				'style' => 'color:transparent;',
				'slug'  => 'transparent',
				'value' => 'transparent',
			);
		}

		if ( '' !== $slug ) {
			if ( 'background' === $type ) {
				return array(
					'class' => 'has-background has-' . $slug . '-background-color',
					'style' => '',
					'slug'  => $slug,
					'value' => 'var(--wp--preset--color--' . $slug . ')',
				);
			}
			return array(
				'class' => 'has-text-color has-' . $slug . '-color',
				'style' => '',
				'slug'  => $slug,
				'value' => 'var(--wp--preset--color--' . $slug . ')',
			);
		}

		// Custom hex / rgb / hsl
		if ( 'background' === $type ) {
			return array(
				'class' => 'has-background',
				'style' => 'background-color:' . esc_attr( $color ) . ';',
				'slug'  => '',
				'value' => $color,
			);
		}
		return array(
			'class' => 'has-text-color',
			'style' => 'color:' . esc_attr( $color ) . ';',
			'slug'  => '',
			'value' => $color,
		);
	}
}

if ( ! function_exists( 'nextora_counters_resolve_color' ) ) {
	/**
	 * Resolves color string to CSS variable or color value.
	 */
	function nextora_counters_resolve_color( string $color ): string {
		$props = nextora_counters_get_color_props( $color );
		return $props['value'];
	}
}

if ( ! function_exists( 'nextora_counters_get_font_size_props' ) ) {
	/**
	 * Preset slug or custom CSS size → font-size props.
	 *
	 * @param string $raw          Font size attribute.
	 * @param string $default_size Default preset size slug if empty.
	 *
	 * @return array{class: string, style: string}
	 */
	function nextora_counters_get_font_size_props( string $raw, string $default_size = '' ): array {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			$raw = $default_size;
		}
		if ( '' === $raw ) {
			return array( 'class' => '', 'style' => '' );
		}

		$slug = '';
		if ( preg_match( '/^var:preset\|font-size\|([a-z0-9_-]+)$/i', $raw, $m ) ) {
			$slug = sanitize_html_class( strtolower( $m[1] ) );
		} elseif ( preg_match( '/^var\(\s*--wp--preset--font-size--([a-z0-9_-]+)\s*\)$/i', $raw, $m ) ) {
			$slug = sanitize_html_class( strtolower( $m[1] ) );
		} elseif ( ! preg_match( '/^(?:[\d.]+(?:px|rem|em|vw|vh|%)|clamp\(.+\))$/i', $raw ) && ! is_numeric( $raw ) && preg_match( '/^[a-z0-9-]+$/i', $raw ) ) {
			$slug = sanitize_html_class( strtolower( $raw ) );
		}

		if ( '' !== $slug ) {
			return array( 'class' => 'has-' . $slug . '-font-size', 'style' => '' );
		}

		$size = $raw;
		if ( is_numeric( $size ) ) {
			$size .= 'px';
		}
		return array( 'class' => '', 'style' => 'font-size:' . esc_attr( $size ) . ';' );
	}
}

if ( ! function_exists( 'nextora_counters_get_font_family_props' ) ) {
	/**
	 * Preset slug or custom font family → font-family props.
	 *
	 * @param string $raw Font family attribute.
	 *
	 * @return array{class: string, style: string}
	 */
	function nextora_counters_get_font_family_props( string $raw ): array {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return array( 'class' => '', 'style' => '' );
		}

		$slug = '';
		if ( preg_match( '/^var:preset\|font-family\|([a-z0-9_-]+)$/i', $raw, $m ) ) {
			$slug = sanitize_html_class( strtolower( $m[1] ) );
		} elseif ( preg_match( '/^var\(\s*--wp--preset--font-family--([a-z0-9_-]+)\s*\)$/i', $raw, $m ) ) {
			$slug = sanitize_html_class( strtolower( $m[1] ) );
		} elseif ( preg_match( '/^[a-z0-9-]+$/i', $raw ) ) {
			$slug = sanitize_html_class( strtolower( $raw ) );
		}

		if ( '' !== $slug ) {
			return array( 'class' => 'has-' . $slug . '-font-family', 'style' => '' );
		}

		return array( 'class' => '', 'style' => 'font-family:' . esc_attr( $raw ) . ';' );
	}
}

if ( ! function_exists( 'nextora_counters_format_number' ) ) {
	/**
	 * Format numeric value for display (whole numbers without decimals).
	 */
	function nextora_counters_format_number( float $number ): string {
		if ( abs( $number - round( $number ) ) < 0.00001 ) {
			return number_format( $number, 0, '.', ',' );
		}
		return number_format( $number, 1, '.', ',' );
	}
}

if ( ! function_exists( 'nextora_counters_format_display' ) ) {
	/**
	 * @param array<string, mixed> $item Counter item.
	 */
	function nextora_counters_format_display( array $item ): string {
		$number = isset( $item['number'] ) ? abs( (float) $item['number'] ) : 0.0;
		$prefix = isset( $item['prefix'] ) ? (string) $item['prefix'] : '';
		$suffix = isset( $item['suffix'] ) ? (string) $item['suffix'] : '';
		return $prefix . nextora_counters_format_number( $number ) . $suffix;
	}
}

$raw_items = isset( $attributes['items'] ) && is_array( $attributes['items'] ) ? $attributes['items'] : array();
$items     = array();

foreach ( $raw_items as $item ) {
	if ( ! is_array( $item ) ) {
		continue;
	}
	$items[] = array(
		'id'     => isset( $item['id'] ) ? (string) $item['id'] : '',
		'number' => isset( $item['number'] ) ? abs( (float) $item['number'] ) : 0.0,
		'prefix' => isset( $item['prefix'] ) ? (string) $item['prefix'] : '',
		'suffix' => isset( $item['suffix'] ) ? (string) $item['suffix'] : '',
		'label'  => isset( $item['label'] ) ? (string) $item['label'] : '',
	);
}

if ( array() === $items ) {
	$items = array(
		array(
			'id'     => '1',
			'number' => 100.0,
			'prefix' => '',
			'suffix' => 'k+',
			'label'  => __( 'Books & Supplies Provided', 'nextora' ),
		),
	);
}

/** @var list<array{id: string, number: float, prefix: string, suffix: string, label: string}> $items */
$items = array_values( (array) apply_filters( 'nextora_counters_items', $items, $attributes ) );

$columns        = isset( $attributes['columns'] ) ? (int) $attributes['columns'] : 3;
$columns        = max( 1, min( 6, $columns ) );
$columns_tablet = isset( $attributes['columnsTablet'] ) ? (int) $attributes['columnsTablet'] : 2;
$columns_tablet = max( 1, min( 6, $columns_tablet ) );
$columns_mobile = isset( $attributes['columnsMobile'] ) ? (int) $attributes['columnsMobile'] : 1;
$columns_mobile = max( 1, min( 4, $columns_mobile ) );

$column_gap = isset( $attributes['columnGap'] ) ? trim( (string) $attributes['columnGap'] ) : '';

$number_label_gap = isset( $attributes['numberLabelGap'] ) ? trim( (string) $attributes['numberLabelGap'] ) : '';

$divider = ! empty( $attributes['divider'] );

$divider_color = nextora_counters_resolve_color(
	isset( $attributes['dividerColor'] ) ? (string) $attributes['dividerColor'] : '',
);
if ( '' === $divider_color && $divider ) {
	$divider_color = 'color-mix(in srgb, currentColor 15%, transparent)';
}

$text_align = isset( $attributes['textAlign'] ) ? (string) $attributes['textAlign'] : 'center';
$allowed_align = array( 'center', 'left', 'right' );
if ( ! in_array( $text_align, $allowed_align, true ) ) {
	$text_align = 'center';
}

$enable_count_up = ! isset( $attributes['enableCountUp'] ) || (bool) $attributes['enableCountUp'];

$duration = isset( $attributes['countUpDuration'] ) ? (int) $attributes['countUpDuration'] : 2000;
$duration = max( 300, min( 5000, $duration ) );

$easing = isset( $attributes['countUpEasing'] ) ? (string) $attributes['countUpEasing'] : 'easeOutCubic';
$allowed_easing = array( 'linear', 'easeOutCubic', 'easeOutExpo' );
if ( ! in_array( $easing, $allowed_easing, true ) ) {
	$easing = 'easeOutCubic';
}

$wrapper_classes = array(
	'nextora-counters',
	'nextora-counters--align-' . $text_align,
	'nextora-counters--cols-d-' . (string) $columns,
	'nextora-counters--cols-t-' . (string) $columns_tablet,
	'nextora-counters--cols-m-' . (string) $columns_mobile,
);
if ( $divider ) {
	$wrapper_classes[] = 'nextora-counters--divider';
}

$wrapper_classes = (array) apply_filters(
	'nextora_counters_wrapper_classes',
	$wrapper_classes,
	$attributes,
);

$style_parts = array(
	'--nextora-counters-cols-m:' . (string) $columns_mobile,
	'--nextora-counters-cols-t:' . (string) $columns_tablet,
	'--nextora-counters-cols-d:' . (string) $columns,
);
if ( '' !== $column_gap ) {
	$style_parts[] = '--nextora-counters-gap:' . esc_attr( $column_gap );
}
if ( '' !== $number_label_gap ) {
	$style_parts[] = '--nextora-counters-number-label-gap:' . esc_attr( $number_label_gap );
}
if ( '' !== $divider_color ) {
	$style_parts[] = '--nextora-counters-divider-color:' . esc_attr( $divider_color );
}
if ( ! empty( $attributes['numberColor'] ) ) {
	$num_resolved = nextora_counters_resolve_color( (string) $attributes['numberColor'] );
	if ( '' !== $num_resolved ) {
		$style_parts[] = '--nextora-counters-number-color:' . esc_attr( $num_resolved );
	}
}
if ( ! empty( $attributes['labelColor'] ) ) {
	$lbl_resolved = nextora_counters_resolve_color( (string) $attributes['labelColor'] );
	if ( '' !== $lbl_resolved ) {
		$style_parts[] = '--nextora-counters-label-color:' . esc_attr( $lbl_resolved );
	}
}

$num_color_props = nextora_counters_get_color_props( (string) ( $attributes['numberColor'] ?? '' ), 'color' );
$num_size_props  = nextora_counters_get_font_size_props( (string) ( $attributes['numberFontSize'] ?? '' ), '' );
$num_ff_props    = nextora_counters_get_font_family_props( (string) ( $attributes['numberFontFamily'] ?? '' ) );

$number_classes = trim( 'nextora-counters__number ' . $num_color_props['class'] . ' ' . $num_size_props['class'] . ' ' . $num_ff_props['class'] );
$number_styles  = trim( $num_color_props['style'] . ' ' . $num_size_props['style'] . ' ' . $num_ff_props['style'] );
$number_style_attr = '' !== $number_styles ? ' style="' . esc_attr( $number_styles ) . '"' : '';

$label_color_props = nextora_counters_get_color_props( (string) ( $attributes['labelColor'] ?? '' ), 'color' );
$label_size_props  = nextora_counters_get_font_size_props( (string) ( $attributes['labelFontSize'] ?? '' ), '' );
$label_ff_props    = nextora_counters_get_font_family_props( (string) ( $attributes['labelFontFamily'] ?? '' ) );

$label_classes = trim( 'nextora-counters__label ' . $label_color_props['class'] . ' ' . $label_size_props['class'] . ' ' . $label_ff_props['class'] );
$label_styles  = trim( $label_color_props['style'] . ' ' . $label_size_props['style'] . ' ' . $label_ff_props['style'] );
$label_style_attr = '' !== $label_styles ? ' style="' . esc_attr( $label_styles ) . '"' : '';

$inline_style = implode( ';', $style_parts );

$wrapper_extra = array(
	'class' => implode( ' ', $wrapper_classes ),
);
if ( '' !== $inline_style ) {
	$wrapper_extra['style'] = $inline_style;
}
if ( $enable_count_up ) {
	$wrapper_extra['data-nextora-counters-count-up']       = '1';
	$wrapper_extra['data-nextora-counters-duration']       = (string) $duration;
	$wrapper_extra['data-nextora-counters-easing']         = $easing;
}

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_extra );
$wrapper_attributes = (string) apply_filters(
	'nextora_counters_wrapper_attributes',
	$wrapper_attributes,
	$attributes,
);

$items_html = '';
foreach ( $items as $item ) {
	$number  = $item['number'];
	$prefix  = $item['prefix'];
	$suffix  = $item['suffix'];
	$label   = $item['label'];
	$display = nextora_counters_format_display( $item );
	$initial_display = $enable_count_up ? $prefix . '0' . $suffix : $display;

	$items_html .= sprintf(
		'<div class="nextora-counters__item">
			<span class="%s"%s data-nextora-counters-value="%s" data-nextora-counters-prefix="%s" data-nextora-counters-suffix="%s" aria-label="%s">%s</span>
			<span class="%s"%s>%s</span>
		</div>',
		esc_attr( $number_classes ),
		$number_style_attr,
		esc_attr( (string) $number ),
		esc_attr( $prefix ),
		esc_attr( $suffix ),
		esc_attr( $display ),
		esc_html( $initial_display ),
		esc_attr( $label_classes ),
		$label_style_attr,
		esc_html( $label ),
	);
}

?>
<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<?php
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Built with esc_html/esc_attr.
	echo $items_html;
	?>
</div>
