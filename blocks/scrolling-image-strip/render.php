<?php
/**
 * Scrolling Image Strip — dynamic render.
 *
 * @package Nextora
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused (no InnerBlocks).
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'nextora_sis_enqueue_view_script' ) ) {
	function nextora_sis_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$registry = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/scrolling-image-strip' );
		if ( $registry && ! empty( $registry->view_script_handles ) && is_array( $registry->view_script_handles ) ) {
			foreach ( $registry->view_script_handles as $handle ) {
				if ( is_string( $handle ) && '' !== $handle ) {
					wp_enqueue_script( $handle );
				}
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/scrolling-image-strip/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/scrolling-image-strip/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-sis-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-sis-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-sis-view-fallback' );
		}
	}
}

if ( ! function_exists( 'nextora_sis_resolve_color' ) ) {
	function nextora_sis_resolve_color( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}

		if ( ! function_exists( 'nextora_icon_hex_to_preset_slug' ) ) {
			$lucide = dirname( __DIR__ ) . '/advanced-icon/lucide.php';
			if ( is_readable( $lucide ) ) {
				require_once $lucide;
			}
		}

		if ( preg_match( '/^var:preset\|color\|([a-z0-9_-]+)$/i', $raw, $preset_m ) ) {
			return 'var(--wp--preset--color--' . sanitize_html_class( strtolower( $preset_m[1] ) ) . ')';
		}

		if ( preg_match( '/^#([0-9a-f]{8})$/i', $raw ) ) {
			if ( function_exists( 'nextora_icon_hex_to_preset_slug' ) ) {
				$preset_slug = nextora_icon_hex_to_preset_slug( $raw );
				if ( '' !== $preset_slug ) {
					return 'var(--wp--preset--color--' . sanitize_html_class( $preset_slug ) . ')';
				}
			}
			return strtolower( $raw );
		}

		$hex = sanitize_hex_color( $raw );
		if ( is_string( $hex ) && '' !== $hex ) {
			if ( function_exists( 'nextora_icon_hex_to_preset_slug' ) ) {
				$preset_slug = nextora_icon_hex_to_preset_slug( $hex );
				if ( '' !== $preset_slug ) {
					return 'var(--wp--preset--color--' . sanitize_html_class( $preset_slug ) . ')';
				}
			}
			return $hex;
		}

		if ( strlen( $raw ) < 220 && preg_match( '/^var\(\s*--wp--preset--color--[a-z0-9_-]+\s*\)$/i', $raw ) ) {
			$normalized = preg_replace( '/\s+/', ' ', $raw );
			return is_string( $normalized ) ? $normalized : $raw;
		}

		if ( preg_match( '/^rgba?\(/', $raw ) || preg_match( '/^hsla?\(/', $raw ) ) {
			return $raw;
		}

		if ( preg_match( '/^[a-z0-9-]+$/i', $raw ) ) {
			return 'var(--wp--preset--color--' . sanitize_html_class( strtolower( $raw ) ) . ')';
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_sis_sanitize_css_size' ) ) {
	function nextora_sis_sanitize_css_size( string $raw, string $fallback ): string {
		$raw = trim( wp_strip_all_tags( $raw ) );
		if ( '' === $raw ) {
			return $fallback;
		}
		if ( preg_match( '/^(auto|inherit|0|\d+(?:\.\d+)?(?:px|rem|em|vh|vw|dvh|svh|lvh|%))$/i', $raw ) ) {
			return $raw;
		}
		return $fallback;
	}
}

if ( ! function_exists( 'nextora_sis_normalize_overlay_style' ) ) {
	function nextora_sis_normalize_overlay_style( string $raw ): string {
		return in_array( $raw, array( 'solid', 'fade-right', 'cinematic', 'diagonal' ), true ) ? $raw : 'solid';
	}
}

if ( ! function_exists( 'nextora_sis_render_item' ) ) {
	/**
	 * @param array<string, mixed> $attrs Block attributes.
	 */
	function nextora_sis_render_item( int $attachment_id, int $index, array $attrs ): string {
		$img_h            = isset( $attrs['imageHeight'] ) ? (int) $attrs['imageHeight'] : 200;
		$image_aspect_raw = isset( $attrs['imageAspectRatio'] ) ? (string) $attrs['imageAspectRatio'] : '3/4';

		$aspect_parts = explode( '/', $image_aspect_raw );
		if ( 2 === count( $aspect_parts ) && is_numeric( $aspect_parts[0] ) && is_numeric( $aspect_parts[1] ) ) {
			$aspect_w = (float) $aspect_parts[0];
			$aspect_h = (float) $aspect_parts[1];
		} else {
			$aspect_w = 3;
			$aspect_h = 4;
		}

	$img_w = ( $aspect_h > 0 ) ? (int) round( $img_h * ( $aspect_w / $aspect_h ) ) : $img_h;

	$tablet_h = (int) round( $img_h * 0.7 );
	$tablet_w = ( $aspect_h > 0 ) ? (int) round( $tablet_h * ( $aspect_w / $aspect_h ) ) : $img_h;

	$mobile_h = (int) round( $img_h * 0.55 );
	$mobile_w = ( $aspect_h > 0 ) ? (int) round( $mobile_h * ( $aspect_w / $aspect_h ) ) : $img_h;

	// Double the display width in sizes so the browser selects a large-enough
	// srcset entry. A display frame with aspect-ratio 3/4 at 300×400px needs
	// an image at least ~400px high. Typical source photos are wider than 3/4
	// (3:2, 4:3), so the srcset 300w thumbnail (200px high) would be upscaled
	// 2× vertically. Doubling sizes forces the browser to pick a 600 w+ entry
	// that provides ≥ 400px natural height, and the image is downscaled
	// (sharp) instead of upscaled (blurry). Also covers Retina (DPR 2).
	$sizes = sprintf(
		'(max-width: 480px) %dpx, (max-width: 768px) %dpx, %dpx',
		$mobile_w * 2,
		$tablet_w * 2,
		$img_w * 2,
	);

		$filter = static function ( array $attr ) use ( $sizes ): array {
			$attr['sizes'] = $sizes;
			return $attr;
		};
		add_filter( 'wp_get_attachment_image_attributes', $filter, 9999 );

		$image = wp_get_attachment_image(
			$attachment_id,
			'large',
			false,
			array(
				'class'    => 'nextora-sis__img',
				'loading'  => 'eager',
				'decoding' => 'async',
			),
		);

		remove_filter( 'wp_get_attachment_image_attributes', $filter, 9999 );

		if ( ! is_string( $image ) || '' === $image ) {
			return '';
		}

		$enable_tilt = isset( $attrs['enableTilt'] ) && (bool) $attrs['enableTilt'];
		$is_even     = ( $index % 2 === 0 );
		$rotate_angle = $is_even
			? ( isset( $attrs['tiltEvenAngle'] ) ? (float) $attrs['tiltEvenAngle'] : -2.0 )
			: ( isset( $attrs['tiltOddAngle'] ) ? (float) $attrs['tiltOddAngle'] : 5.0 );

		$item_classes = array( 'nextora-sis__item' );
		if ( $enable_tilt ) {
			$item_classes[] = 'nextora-sis__item--tilted';
		}

		$item_style_attr = '';
		if ( $enable_tilt ) {
			$item_style_attr = ' style="--nextora-sis-rotate:' . esc_attr( (string) $rotate_angle ) . 'deg"';
		}

		return sprintf(
			'<div class="%s"%s><div class="nextora-sis__frame">%s</div></div>',
			esc_attr( implode( ' ', $item_classes ) ),
			$item_style_attr,
			$image,
		);
	}
}

if ( ! function_exists( 'nextora_sis_render_half' ) ) {
	/**
	 * @param int[]                $ids   Attachment IDs.
	 * @param array<string, mixed> $attrs Block attributes.
	 */
	function nextora_sis_render_half( array $ids, array $attrs, bool $is_duplicate ): string {
		$out    = '';
		$index  = 0;

		foreach ( $ids as $attachment_id ) {
			$out .= nextora_sis_render_item( $attachment_id, $index, $attrs );
			$index++;
		}

		if ( '' === $out ) {
			return '';
		}

		$half_attrs = array( 'class' => 'nextora-sis__half' );
		$half_attrs['data-nextora-sis-half'] = $is_duplicate ? 'duplicate' : 'primary';
		if ( $is_duplicate ) {
			$half_attrs['aria-hidden'] = 'true';
		}

		$attr_parts = array();
		foreach ( $half_attrs as $key => $value ) {
			$attr_parts[] = $key . '="' . esc_attr( $value ) . '"';
		}

		return '<div ' . implode( ' ', $attr_parts ) . '>' . $out . '</div>';
	}
}

$raw_ids = isset( $attributes['imageIds'] ) && is_array( $attributes['imageIds'] )
	? array_values( array_filter( array_map( 'absint', $attributes['imageIds'] ) ) )
	: array();

$ids = array();
foreach ( $raw_ids as $id ) {
	if ( $id && wp_attachment_is_image( $id ) ) {
		$ids[] = $id;
	}
}

if ( ! $ids ) {
	return;
}

$image_height      = isset( $attributes['imageHeight'] ) ? max( 80, min( 600, (int) $attributes['imageHeight'] ) ) : 200;
$image_height_unit = isset( $attributes['imageHeightUnit'] ) ? (string) $attributes['imageHeightUnit'] : 'px';
$image_height_unit = in_array( $image_height_unit, array( 'px', 'rem', 'vh' ), true ) ? $image_height_unit : 'px';

$allowed_ratios = array( '3/4', '1/1', '4/5', '16/9', '9/16', 'auto' );
$image_aspect_ratio = isset( $attributes['imageAspectRatio'] ) ? (string) $attributes['imageAspectRatio'] : '3/4';
$image_aspect_ratio = in_array( $image_aspect_ratio, $allowed_ratios, true ) ? $image_aspect_ratio : '3/4';

$image_fit           = isset( $attributes['imageFit'] ) && 'contain' === $attributes['imageFit'] ? 'contain' : 'cover';
$image_border_radius = isset( $attributes['imageBorderRadius'] ) ? max( 0, min( 48, (int) $attributes['imageBorderRadius'] ) ) : 16;
$image_gap           = isset( $attributes['imageGap'] ) ? max( 0, min( 64, (int) $attributes['imageGap'] ) ) : 16;

$enable_tilt    = isset( $attributes['enableTilt'] ) ? (bool) $attributes['enableTilt'] : true;
$tilt_even      = isset( $attributes['tiltEvenAngle'] ) ? (float) $attributes['tiltEvenAngle'] : -2.0;
$tilt_odd       = isset( $attributes['tiltOddAngle'] ) ? (float) $attributes['tiltOddAngle'] : 5.0;

$direction      = isset( $attributes['direction'] ) && 'right' === $attributes['direction'] ? 'right' : 'left';
$speed          = isset( $attributes['speed'] ) ? max( 10, min( 120, (float) $attributes['speed'] ) ) : 40.0;
$pause_on_hover = ! isset( $attributes['pauseOnHover'] ) || (bool) $attributes['pauseOnHover'];

$enable_fade_mask = isset( $attributes['enableFadeMask'] ) ? (bool) $attributes['enableFadeMask'] : true;
$fade_mask_dir    = isset( $attributes['fadeMaskDirection'] ) ? (string) $attributes['fadeMaskDirection'] : 'horizontal';
$fade_mask_dir    = in_array( $fade_mask_dir, array( 'horizontal', 'vertical-top', 'vertical-bottom', 'vertical-both', 'both' ), true ) ? $fade_mask_dir : 'horizontal';
$fade_mask_left   = isset( $attributes['fadeMaskLeft'] ) ? max( 0, min( 50, (int) $attributes['fadeMaskLeft'] ) ) : 20;
$fade_mask_right  = isset( $attributes['fadeMaskRight'] ) ? max( 0, min( 50, (int) $attributes['fadeMaskRight'] ) ) : 20;
$fade_mask_color  = nextora_sis_resolve_color( isset( $attributes['fadeMaskColor'] ) ? (string) $attributes['fadeMaskColor'] : '' );

$overlay_color   = nextora_sis_resolve_color( isset( $attributes['overlayColor'] ) ? (string) $attributes['overlayColor'] : '' );
$overlay_opacity = isset( $attributes['overlayOpacity'] ) ? max( 0, min( 1, (float) $attributes['overlayOpacity'] ) ) : 0;
$overlay_style   = nextora_sis_normalize_overlay_style( isset( $attributes['overlayStyle'] ) ? (string) $attributes['overlayStyle'] : 'solid' );

$section_bg_color = nextora_sis_resolve_color( isset( $attributes['sectionBackgroundColor'] ) ? (string) $attributes['sectionBackgroundColor'] : '' );

// ── Resolve Gutenberg built-in spacing (Dimensions tab) for track padding ──
$spacing_style   = isset( $attributes['style']['spacing'] ) && is_array( $attributes['style']['spacing'] ) ? $attributes['style']['spacing'] : array();
$track_padding_v  = isset( $spacing_style['padding']['top'] ) ? (string) $spacing_style['padding']['top'] : '';
$track_padding_v  = '' !== $track_padding_v ? $track_padding_v : ( isset( $spacing_style['padding']['bottom'] ) ? (string) $spacing_style['padding']['bottom'] : '' );
$track_padding_h  = isset( $spacing_style['padding']['left'] ) ? (string) $spacing_style['padding']['left'] : '';
$track_padding_h  = '' !== $track_padding_h ? $track_padding_h : ( isset( $spacing_style['padding']['right'] ) ? (string) $spacing_style['padding']['right'] : '' );

if ( ! function_exists( 'nextora_sis_resolve_spacing' ) ) {
	function nextora_sis_resolve_spacing( string $raw, string $fallback = '' ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return $fallback;
		}
		if ( str_starts_with( $raw, 'var:preset|spacing|' ) ) {
			$slug = sanitize_key( substr( $raw, strlen( 'var:preset|spacing|' ) ) );
			return '' !== $slug ? 'var(--wp--preset--spacing--' . $slug . ')' : $fallback;
		}
		if ( preg_match( '/^\d+(?:\.\d+)?(?:px|rem|em|vh|vw|%)$/', $raw ) ) {
			return $raw;
		}
		return $fallback;
	}
}

$resolved_padding_top    = nextora_sis_resolve_spacing( isset( $spacing_style['padding']['top'] ) ? (string) $spacing_style['padding']['top'] : '', 'var(--wp--preset--spacing--40)' );
$resolved_padding_bottom = nextora_sis_resolve_spacing( isset( $spacing_style['padding']['bottom'] ) ? (string) $spacing_style['padding']['bottom'] : '', 'var(--wp--preset--spacing--40)' );
$resolved_padding_left   = nextora_sis_resolve_spacing( isset( $spacing_style['padding']['left'] ) ? (string) $spacing_style['padding']['left'] : '' );
$resolved_padding_right  = nextora_sis_resolve_spacing( isset( $spacing_style['padding']['right'] ) ? (string) $spacing_style['padding']['right'] : '' );

$track_inline_style_parts = array();
if ( '' !== $resolved_padding_top ) {
	$track_inline_style_parts[] = 'padding-top:' . $resolved_padding_top;
}
if ( '' !== $resolved_padding_bottom ) {
	$track_inline_style_parts[] = 'padding-bottom:' . $resolved_padding_bottom;
}
if ( '' !== $resolved_padding_left ) {
	$track_inline_style_parts[] = 'padding-left:' . $resolved_padding_left;
}
if ( '' !== $resolved_padding_right ) {
	$track_inline_style_parts[] = 'padding-right:' . $resolved_padding_right;
}
$track_inline_style = $track_inline_style_parts ? implode( ';', $track_inline_style_parts ) : '';

$section_min_height = nextora_sis_sanitize_css_size( isset( $attributes['sectionMinHeight'] ) ? (string) $attributes['sectionMinHeight'] : '', 'auto' );
$section_height     = nextora_sis_sanitize_css_size( isset( $attributes['sectionHeight'] ) ? (string) $attributes['sectionHeight'] : '', 'auto' );

$show_borders = ! empty( $attributes['showBorders'] );
$border_color = nextora_sis_resolve_color( isset( $attributes['borderColor'] ) ? (string) $attributes['borderColor'] : '' );
$border_width = isset( $attributes['borderWidth'] ) ? max( 1, min( 3, (int) $attributes['borderWidth'] ) ) : 1;

$enable_scroll = ! array_key_exists( 'enableScrollAnimation', $attributes ) || ! empty( $attributes['enableScrollAnimation'] );

$aria_label = isset( $attributes['ariaLabel'] ) ? trim( (string) $attributes['ariaLabel'] ) : '';
if ( '' === $aria_label ) {
	$aria_label = __( 'Featured image gallery', 'nextora' );
}

$style_rules = array(
	'--nextora-sis-height:' . $image_height . $image_height_unit,
	'--nextora-sis-aspect-ratio:' . $image_aspect_ratio,
	'--nextora-sis-fit:' . $image_fit,
	'--nextora-sis-radius:' . $image_border_radius . 'px',
	'--nextora-sis-gap:' . $image_gap . 'px',
	'--nextora-sis-speed:' . $speed . 's',
	'--nextora-sis-tilt-even:' . $tilt_even . 'deg',
	'--nextora-sis-tilt-odd:' . $tilt_odd . 'deg',
	'--nextora-sis-overlay-color:' . ( '' !== $overlay_color ? $overlay_color : 'transparent' ),
	'--nextora-sis-overlay-opacity:' . $overlay_opacity,
	'--nextora-sis-mask-color:' . ( '' !== $fade_mask_color ? $fade_mask_color : 'transparent' ),
	'--nextora-sis-mask-left:' . $fade_mask_left . '%',
	'--nextora-sis-mask-right:' . $fade_mask_right . '%',
	'--nextora-sis-bg:' . ( '' !== $section_bg_color ? $section_bg_color : 'transparent' ),
	'--nextora-sis-min-height:' . $section_min_height,
	'--nextora-sis-section-height:' . $section_height,
	'--nextora-sis-border-color:' . ( $show_borders && '' !== $border_color ? $border_color : 'transparent' ),
	'--nextora-sis-border-width:' . ( $show_borders ? (string) $border_width . 'px' : '0px' ),
);

$classes = array(
	'nextora-sis',
	'nextora-sis--loading',
	'nextora-sis--dir-' . $direction,
);

if ( ! $enable_fade_mask ) {
	$classes[] = 'nextora-sis--mask-none';
} else {
	$classes[] = 'nextora-sis--mask-' . $fade_mask_dir;
}

if ( $enable_scroll ) {
	$classes[] = 'nextora-sis--scroll-reveal';
}

if ( ! $pause_on_hover ) {
	$classes[] = 'nextora-sis--no-pause-on-hover';
}

$wrapper_args = array(
	'class' => implode( ' ', $classes ),
	'style' => implode( ';', $style_rules ),
);

if ( $enable_scroll ) {
	$wrapper_args['data-nextora-scroll-reveal'] = '1';
}

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_args );

nextora_sis_enqueue_view_script();
?>
<section <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
	aria-label="<?php echo esc_attr( $aria_label ); ?>">
	<div class="nextora-sis__track"<?php echo $track_inline_style ? ' style="' . esc_attr( $track_inline_style ) . '"' : ''; ?>>
		<div class="nextora-sis__inner nextora-sis__inner--<?php echo esc_attr( $direction ); ?>">
			<?php echo nextora_sis_render_half( $ids, $attributes, false ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
			<?php echo nextora_sis_render_half( $ids, $attributes, true ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
		</div>
	</div>
	<?php if ( $overlay_opacity > 0 ) : ?>
		<div class="nextora-sis__overlay nextora-sis__overlay--<?php echo esc_attr( $overlay_style ); ?>"
			aria-hidden="true"></div>
	<?php endif; ?>
</section>
