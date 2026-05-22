<?php
/**
 * Counters — dynamic block render.
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_counters_resolve_color' ) ) {
	/**
	 * Preset slug or hex → CSS color value.
	 */
	function nextora_counters_resolve_color( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}
		$hex = sanitize_hex_color( $raw );
		if ( $hex ) {
			return $hex;
		}
		if ( preg_match( '/^[a-z0-9-]+$/', $raw ) ) {
			return 'var(--wp--preset--color--' . sanitize_html_class( $raw ) . ')';
		}
		return '';
	}
}

if ( ! function_exists( 'nextora_counters_resolve_font_size' ) ) {
	/**
	 * Preset slug or custom CSS size → font-size value.
	 */
	function nextora_counters_resolve_font_size( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}
		if ( preg_match( '/^[a-z0-9-]+$/', $raw ) ) {
			return 'var(--wp--preset--font-size--' . sanitize_html_class( $raw ) . ')';
		}
		if ( preg_match( '/^clamp\(.+\)$/i', $raw ) || preg_match( '/^[\d.]+(?:rem|px|em|vw|vh|%)$/i', $raw ) ) {
			return $raw;
		}
		if ( preg_match( '/^[\d.]+$/', $raw ) ) {
			return $raw . 'px';
		}
		if ( is_numeric( $raw ) ) {
			return max( 12, min( 72, (int) $raw ) ) . 'px';
		}
		return '';
	}
}

if ( ! function_exists( 'nextora_counters_format_number' ) ) {
	/**
	 * Format numeric value for display (whole numbers without decimals).
	 */
	function nextora_counters_format_number( float $number ): string {
		if ( abs( $number - round( $number ) ) < 0.00001 ) {
			return (string) (int) round( $number );
		}
		return number_format( $number, 1, '.', '' );
	}
}

if ( ! function_exists( 'nextora_counters_format_display' ) ) {
	/**
	 * @param array<string, mixed> $item Counter item.
	 */
	function nextora_counters_format_display( array $item ): string {
		$number = isset( $item['number'] ) ? (float) $item['number'] : 0.0;
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
		'number' => isset( $item['number'] ) ? (float) $item['number'] : 0.0,
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

$columns = isset( $attributes['columns'] ) ? (int) $attributes['columns'] : 3;
$columns = max( 1, min( 6, $columns ) );

$column_gap = isset( $attributes['columnGap'] ) ? trim( (string) $attributes['columnGap'] ) : '';

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
	'nextora-counters--cols-' . $columns,
	'nextora-counters--align-' . $text_align,
);
if ( $divider ) {
	$wrapper_classes[] = 'nextora-counters--divider';
}

$wrapper_classes = (array) apply_filters(
	'nextora_counters_wrapper_classes',
	$wrapper_classes,
	$attributes,
);

$style_parts = array();
if ( '' !== $column_gap ) {
	$style_parts[] = '--nextora-counters-gap:' . esc_attr( $column_gap );
}
if ( '' !== $divider_color ) {
	$style_parts[] = '--nextora-counters-divider-color:' . esc_attr( $divider_color );
}

$number_color = nextora_counters_resolve_color(
	isset( $attributes['numberColor'] ) ? (string) $attributes['numberColor'] : '',
);
if ( '' !== $number_color ) {
	$style_parts[] = '--nextora-counters-number-color:' . esc_attr( $number_color );
}

$label_color = nextora_counters_resolve_color(
	isset( $attributes['labelColor'] ) ? (string) $attributes['labelColor'] : '',
);
if ( '' !== $label_color ) {
	$style_parts[] = '--nextora-counters-label-color:' . esc_attr( $label_color );
}

$number_font_size = nextora_counters_resolve_font_size(
	isset( $attributes['numberFontSize'] ) ? (string) $attributes['numberFontSize'] : '',
);
if ( '' !== $number_font_size ) {
	$style_parts[] = '--nextora-counters-number-size:' . esc_attr( $number_font_size );
}

$label_font_size = nextora_counters_resolve_font_size(
	isset( $attributes['labelFontSize'] ) ? (string) $attributes['labelFontSize'] : '',
);
if ( '' !== $label_font_size ) {
	$style_parts[] = '--nextora-counters-label-size:' . esc_attr( $label_font_size );
}

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

	$items_html .= sprintf(
		'<div class="nextora-counters__item">
			<span class="nextora-counters__number" data-nextora-counters-value="%s" data-nextora-counters-prefix="%s" data-nextora-counters-suffix="%s" aria-label="%s">%s</span>
			<span class="nextora-counters__label">%s</span>
		</div>',
		esc_attr( (string) $number ),
		esc_attr( $prefix ),
		esc_attr( $suffix ),
		esc_attr( $display ),
		esc_html( $display ),
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
