<?php
/**
 * Advanced List — dynamic block render template.
 *
 * @var array<string, mixed> $attributes Block attributes defined in block.json.
 * @var string               $content    Inner blocks HTML (empty for this block).
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

// Get items array
$items = $attributes['items'] ?? array();
if ( ! is_array( $items ) || empty( $items ) ) {
	return;
}

// Get icon settings
$icon_size         = absint( $attributes['iconSize'] ?? 14 );
$icon_circle_size  = absint( $attributes['iconCircleSize'] ?? 32 );
$icon_style        = sanitize_text_field( $attributes['iconStyle'] ?? 'stacked' );
$stroke_width      = (float) ( $attributes['strokeWidth'] ?? 2.5 );
$border_radius     = absint( $attributes['borderRadius'] ?? 50 );
$icon_color        = $attributes['iconColor'] ?? '';
$icon_bg_color     = $attributes['iconBackgroundColor'] ?? '';
$icon_border_color = $attributes['iconBorderColor'] ?? '';
$icon_text_gap     = absint( $attributes['iconTextGap'] ?? 14 );
$item_gap          = absint( $attributes['itemGap'] ?? 16 );

// Validate icon style
$allowed_styles = array( 'default', 'stacked', 'framed' );
if ( ! in_array( $icon_style, $allowed_styles, true ) ) {
	$icon_style = 'stacked';
}

// Scroll animation
$enable_scroll_animation = $attributes['enableScrollAnimation'] ?? true;

// Resolve colors
require_once get_theme_file_path( 'blocks/advanced-icon/lucide.php' );

if ( ! function_exists( 'nextora_advanced_list_resolve_color' ) ) {
	/**
	 * Resolve color attribute (slug, preset, var, or hex/rgb/hsl) to CSS value.
	 */
	function nextora_advanced_list_resolve_color( string $color ): string {
		$color = trim( $color );
		if ( '' === $color ) {
			return '';
		}
		if ( 'transparent' === $color ) {
			return 'transparent';
		}
		if ( 0 === strpos( $color, 'var:' ) ) {
			$slug = str_replace( 'var:preset|color|', '', $color );
			return "var(--wp--preset--color--{$slug})";
		}
		if ( 0 === strpos( $color, 'var(' ) || 0 === strpos( $color, '#' ) || 0 === strpos( $color, 'rgb' ) || 0 === strpos( $color, 'hsl' ) ) {
			return $color;
		}
		return "var(--wp--preset--color--{$color})";
	}
}

if ( ! function_exists( 'theme_get_gutenberg_color_props' ) ) {
	/**
	 * Resolves a stored color attribute into standard Gutenberg classes and inline style.
	 *
	 * @param string $color Attribute value (slug, preset string, or hex/rgb).
	 * @param string $type  'color' (for text) or 'background'.
	 *
	 * @return array{class: string, style: string, slug: string, value: string}
	 */
	function theme_get_gutenberg_color_props( string $color, string $type = 'color' ): array {
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
			if ( 'border' === $type ) {
				return array(
					'class' => 'has-border-color has-' . $slug . '-border-color',
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
		if ( 'border' === $type ) {
			return array(
				'class' => 'has-border-color',
				'style' => 'border-color:' . esc_attr( $color ) . ';',
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

$raw_icon_color        = (string) ( $attributes['iconColor'] ?? '' );
$raw_icon_bg_color     = (string) ( $attributes['iconBackgroundColor'] ?? '' );
$raw_icon_border_color = (string) ( $attributes['iconBorderColor'] ?? '' );

$icon_color_props = theme_get_gutenberg_color_props( $raw_icon_color, 'color' );
$icon_bg_props    = theme_get_gutenberg_color_props( $raw_icon_bg_color, 'background' );
$resolved_icon_border_color = nextora_advanced_list_resolve_color( $raw_icon_border_color );

$icon_classes = array( 'nextora-advanced-list__icon' );
if ( '' !== $icon_color_props['class'] ) {
	$icon_classes[] = $icon_color_props['class'];
}
if ( '' !== $icon_bg_props['class'] ) {
	$icon_classes[] = $icon_bg_props['class'];
}

$icon_inline_styles = array();
if ( '' !== $icon_color_props['style'] ) {
	$icon_inline_styles[] = $icon_color_props['style'];
}
if ( '' !== $icon_bg_props['style'] ) {
	$icon_inline_styles[] = $icon_bg_props['style'];
}
if ( '' !== $resolved_icon_border_color && 'framed' === $icon_style ) {
	$icon_inline_styles[] = 'border-color:' . esc_attr( $resolved_icon_border_color ) . ';';
}
$icon_style_attr = ! empty( $icon_inline_styles ) ? ' style="' . esc_attr( implode( ' ', $icon_inline_styles ) ) . '"' : '';

// Build CSS variables
$css_vars = array();
if ( '' !== $icon_color_props['value'] ) {
	$css_vars[] = '--nextora-list-icon-color: ' . $icon_color_props['value'];
}
if ( '' !== $icon_bg_props['value'] ) {
	$css_vars[] = '--nextora-list-icon-bg: ' . $icon_bg_props['value'];
}
if ( '' !== $resolved_icon_border_color ) {
	$css_vars[] = '--nextora-list-icon-border: ' . $resolved_icon_border_color;
}
$css_vars[] = '--nextora-list-icon-size: ' . $icon_size . 'px';
$css_vars[] = '--nextora-list-icon-circle-size: ' . $icon_circle_size . 'px';
$css_vars[] = '--nextora-list-icon-text-gap: ' . $icon_text_gap . 'px';
$css_vars[] = '--nextora-list-item-gap: ' . $item_gap . 'px';
$css_vars[] = '--nextora-list-border-radius: ' . $border_radius . '%';
$css_vars[] = '--nextora-list-stroke-width: ' . $stroke_width;

$css_vars_string = count( $css_vars ) > 0 ? esc_attr( implode( '; ', $css_vars ) ) : '';

// Wrapper attributes
$wrapper_classes = array(
	'wp-block-nextora-advanced-list',
	'wp-block-nextora-advanced-list--style-' . $icon_style,
);
if ( $enable_scroll_animation ) {
	$wrapper_classes[] = 'has-scroll-animation';
}

$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => implode( ' ', $wrapper_classes ),
		'data-nextora-scroll-reveal' => $enable_scroll_animation ? '1' : '0',
		'style' => $css_vars_string,
	),
);
?>

<div <?php echo $wrapper_attributes; ?>>
	<ul class="nextora-advanced-list__items">
		<?php foreach ( $items as $item ) : ?>
			<?php
			$item_id   = $item['id'] ?? '';
			$item_text = wp_kses_post( $item['text'] ?? '' );
			$icon_name = sanitize_text_field( $item['iconName'] ?? 'check' );

			if ( ! $item_text ) {
				continue;
			}

			// Get icon SVG from lucide
			$icon_svg = nextora_get_lucide_svg( $icon_name, $icon_size, 'currentColor', $stroke_width, '' );
			?>
			<li class="nextora-advanced-list__item" data-item-id="<?php echo esc_attr( $item_id ); ?>">
				<span class="<?php echo esc_attr( implode( ' ', $icon_classes ) ); ?>"<?php echo $icon_style_attr; ?> aria-hidden="true">
					<?php echo $icon_svg; ?>
				</span>
				<span class="nextora-advanced-list__text"><?php echo $item_text; ?></span>
			</li>
		<?php endforeach; ?>
	</ul>
</div>
