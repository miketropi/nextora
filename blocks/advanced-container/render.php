<?php
/**
 * Advanced Container — dynamic render.
 *
 * @package Nextora
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Saved inner HTML.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'nextora_ac_enqueue_view_script' ) ) {
	/**
	 * Ensure the front-end view script is available for scroll reveal.
	 */
	function nextora_ac_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$registry = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/advanced-container' );
		if ( $registry && ! empty( $registry->view_script_handles ) && is_array( $registry->view_script_handles ) ) {
			foreach ( $registry->view_script_handles as $handle ) {
				if ( is_string( $handle ) && '' !== $handle ) {
					wp_enqueue_script( $handle );
				}
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/advanced-container/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/advanced-container/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-ac-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-ac-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-ac-view-fallback' );
		}
	}
}

if ( ! function_exists( 'nextora_ac_resolve_color' ) ) {
	/**
	 * Map preset slug, hex, or var() to a safe CSS color value.
	 */
	function nextora_ac_resolve_color( string $raw ): string {
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

		if ( preg_match( '/^#([0-9a-f]{8})$/i', $raw ) ) {
			if ( function_exists( 'nextora_icon_hex_to_preset_slug' ) ) {
				$preset_slug = nextora_icon_hex_to_preset_slug( $raw );
				if ( '' !== $preset_slug ) {
					return 'var(--wp--preset--color--' . sanitize_html_class( $preset_slug ) . ')';
				}
			}

			return strtolower( $raw );
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

if ( ! function_exists( 'nextora_ac_sanitize_css_size' ) ) {
	/**
	 * Sanitize a CSS length / size value.
	 */
	function nextora_ac_sanitize_css_size( string $raw, string $fallback ): string {
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

if ( ! function_exists( 'nextora_ac_normalize_focal_point' ) ) {
	/**
	 * Clamp focal point coordinates to 0–1.
	 *
	 * @param mixed $raw Raw attribute value.
	 *
	 * @return array{x: float, y: float}
	 */
	function nextora_ac_normalize_focal_point( mixed $raw ): array {
		$x = 0.5;
		$y = 0.5;

		if ( is_array( $raw ) ) {
			if ( isset( $raw['x'] ) && is_numeric( $raw['x'] ) ) {
				$x = (float) $raw['x'];
			}
			if ( isset( $raw['y'] ) && is_numeric( $raw['y'] ) ) {
				$y = (float) $raw['y'];
			}
		}

		return array(
			'x' => max( 0.0, min( 1.0, $x ) ),
			'y' => max( 0.0, min( 1.0, $y ) ),
		);
	}
}

if ( ! function_exists( 'nextora_ac_build_background_image_style' ) ) {
	/**
	 * Build inline CSS for the background image layer.
	 *
	 * @param array<string, mixed> $attributes Block attributes.
	 */
	function nextora_ac_build_background_image_style( array $attributes, string $image_url ): string {
		$focal_point = nextora_ac_normalize_focal_point( $attributes['backgroundImageFocalPoint'] ?? null );
		$size        = isset( $attributes['backgroundImageSize'] ) ? (string) $attributes['backgroundImageSize'] : 'cover';
		$size        = in_array( $size, array( 'cover', 'contain', 'tile' ), true ) ? $size : 'cover';
		$custom_size = nextora_ac_sanitize_css_size(
			isset( $attributes['backgroundImageCustomSize'] ) ? (string) $attributes['backgroundImageCustomSize'] : '',
			'auto',
		);
		$repeat = ! empty( $attributes['backgroundImageRepeat'] );

		$style_bits   = array();
		$style_bits[] = 'background-image:url(' . esc_url( $image_url ) . ')';
		$style_bits[] = sprintf(
			'background-position:%s%% %s%%',
			(string) round( $focal_point['x'] * 100, 2 ),
			(string) round( $focal_point['y'] * 100, 2 ),
		);

		if ( 'contain' === $size ) {
			$style_bits[] = 'background-size:contain';
			$style_bits[] = 'background-repeat:no-repeat';
		} elseif ( 'tile' === $size ) {
			$style_bits[] = 'background-size:' . $custom_size;
			$style_bits[] = 'background-repeat:' . ( $repeat ? 'repeat' : 'no-repeat' );
		} else {
			$style_bits[] = 'background-size:cover';
			$style_bits[] = 'background-repeat:no-repeat';
		}

		return implode( ';', $style_bits );
	}
}

if ( ! function_exists( 'nextora_ac_normalize_overlay_style' ) ) {
	/**
	 * Sanitize overlay style slug.
	 */
	function nextora_ac_normalize_overlay_style( string $raw ): string {
		return in_array( $raw, array( 'solid', 'fade-right', 'cinematic' ), true ) ? $raw : 'solid';
	}
}

if ( ! function_exists( 'nextora_ac_normalize_background_animation' ) ) {
	/**
	 * Sanitize background animation slug.
	 */
	function nextora_ac_normalize_background_animation( string $raw ): string {
		$allowed = array( 'ken-burns', 'slow-zoom', 'gentle-pan', 'subtle-drift', 'breathing' );

		return in_array( $raw, $allowed, true ) ? $raw : 'ken-burns';
	}
}

if ( ! function_exists( 'nextora_ac_normalize_section_fill' ) ) {
	/**
	 * Sanitize section background fill mode.
	 */
	function nextora_ac_normalize_section_fill( string $raw ): string {
		return in_array( $raw, array( 'solid', 'gradient' ), true ) ? $raw : 'solid';
	}
}

if ( ! function_exists( 'nextora_ac_resolve_gradient' ) ) {
	/**
	 * Map preset slug or CSS gradient to a safe background value.
	 */
	function nextora_ac_resolve_gradient( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}

		if ( preg_match( '/^var:preset\|gradient\|([a-z0-9_-]+)$/i', $raw, $preset_m ) ) {
			return 'var(--wp--preset--gradient--' . sanitize_html_class( strtolower( $preset_m[1] ) ) . ')';
		}

		if ( preg_match( '/^var\(\s*--wp--preset--gradient--[a-z0-9_-]+\s*\)$/i', $raw ) ) {
			$normalized = preg_replace( '/\s+/', ' ', $raw );

			return is_string( $normalized ) ? $normalized : $raw;
		}

		if ( preg_match( '/^[a-z0-9-]+$/i', $raw ) ) {
			return 'var(--wp--preset--gradient--' . sanitize_html_class( strtolower( $raw ) ) . ')';
		}

		if ( preg_match( '/^(linear|radial)-gradient\(/i', $raw ) ) {
			$safe = safecss_filter_attr( 'background:' . $raw );
			if ( ! is_string( $safe ) || '' === $safe ) {
				return '';
			}

			if ( str_starts_with( $safe, 'background:' ) ) {
				return substr( $safe, strlen( 'background:' ) );
			}

			return '';
		}

		return '';
	}
}

$background_type = isset( $attributes['backgroundType'] ) ? (string) $attributes['backgroundType'] : 'color';
$background_type = in_array( $background_type, array( 'color', 'image', 'video' ), true ) ? $background_type : 'color';
$section_background_fill = nextora_ac_normalize_section_fill(
	isset( $attributes['sectionBackgroundFill'] ) ? (string) $attributes['sectionBackgroundFill'] : 'solid',
);
$section_background_gradient = isset( $attributes['sectionBackgroundGradient'] )
	? trim( (string) $attributes['sectionBackgroundGradient'] )
	: '';
$section_background_color = nextora_ac_resolve_color(
	isset( $attributes['sectionBackgroundColor'] ) && '' !== (string) $attributes['sectionBackgroundColor']
		? (string) $attributes['sectionBackgroundColor']
		: ( isset( $attributes['backgroundColor'] ) ? (string) $attributes['backgroundColor'] : '' ),
);
$resolved_section_gradient = '';
if ( 'gradient' === $section_background_fill ) {
	$resolved_section_gradient = nextora_ac_resolve_gradient( $section_background_gradient );
}
$background_image_id = isset( $attributes['backgroundImageId'] ) ? (int) $attributes['backgroundImageId'] : 0;
$background_image_url = isset( $attributes['backgroundImageUrl'] ) ? esc_url_raw( trim( (string) $attributes['backgroundImageUrl'] ) ) : '';
$background_video_url = isset( $attributes['backgroundVideoUrl'] ) ? esc_url_raw( trim( (string) $attributes['backgroundVideoUrl'] ) ) : '';
$overlay_color = nextora_ac_resolve_color( isset( $attributes['overlayColor'] ) ? (string) $attributes['overlayColor'] : '' );
$overlay_opacity = isset( $attributes['overlayOpacity'] ) ? max( 0, min( 1, (float) $attributes['overlayOpacity'] ) ) : 0.3;
$overlay_style   = nextora_ac_normalize_overlay_style(
	isset( $attributes['overlayStyle'] ) ? (string) $attributes['overlayStyle'] : 'solid',
);
$enable_parallax           = ! empty( $attributes['enableParallax'] );
$enable_background_animation = ! empty( $attributes['enableBackgroundAnimation'] );
$background_animation        = nextora_ac_normalize_background_animation(
	isset( $attributes['backgroundAnimation'] ) ? (string) $attributes['backgroundAnimation'] : 'ken-burns',
);
$background_animation_speed = isset( $attributes['backgroundAnimationSpeed'] )
	? max( 1.0, min( 3.5, (float) $attributes['backgroundAnimationSpeed'] ) )
	: 1.75;
if ( abs( $background_animation_speed - 0.5 ) < 0.001 || abs( $background_animation_speed - 0.75 ) < 0.001 ) {
	$background_animation_speed = 1.0;
}
$parallax_speed  = isset( $attributes['parallaxSpeed'] ) ? max( 0, min( 1, (float) $attributes['parallaxSpeed'] ) ) : 0.5;
$enable_scroll   = ! array_key_exists( 'enableScrollAnimation', $attributes ) || ! empty( $attributes['enableScrollAnimation'] );
$enable_hover_reveal = ! empty( $attributes['enableHoverReveal'] );
$hover_reveal_image_id = isset( $attributes['hoverRevealImageId'] ) ? (int) $attributes['hoverRevealImageId'] : 0;
$hover_reveal_image_url = isset( $attributes['hoverRevealImageUrl'] )
	? esc_url_raw( trim( (string) $attributes['hoverRevealImageUrl'] ) )
	: '';

if ( $background_image_id > 0 && '' === $background_image_url ) {
	$resolved_image = wp_get_attachment_image_url( $background_image_id, 'full' );
	if ( is_string( $resolved_image ) && '' !== $resolved_image ) {
		$background_image_url = esc_url_raw( $resolved_image );
	}
}

if ( $hover_reveal_image_id > 0 && '' === $hover_reveal_image_url ) {
	$resolved_reveal_image = wp_get_attachment_image_url( $hover_reveal_image_id, 'full' );
	if ( is_string( $resolved_reveal_image ) && '' !== $resolved_reveal_image ) {
		$hover_reveal_image_url = esc_url_raw( $resolved_reveal_image );
	}
}

if ( $enable_hover_reveal && '' === $hover_reveal_image_url && '' !== $background_image_url ) {
	$hover_reveal_image_url = $background_image_url;
}

$use_hover_reveal = 'color' === $background_type && $enable_hover_reveal && '' !== $hover_reveal_image_url;
$hover_reveal_mask_is_gradient = 'gradient' === $section_background_fill && '' !== $resolved_section_gradient;
$hover_reveal_mask_color       = $section_background_color;
if ( '' === $hover_reveal_mask_color ) {
	$hover_reveal_mask_color = 'var(--wp--preset--color--surface, #fbf7f0)';
}

$use_image = 'image' === $background_type && '' !== $background_image_url && ! $use_hover_reveal;
$use_video = 'video' === $background_type && '' !== $background_video_url;
$use_overlay = ( $use_image || $use_video || $use_hover_reveal ) && $overlay_opacity > 0;

$classes    = array( 'wp-block-nextora-advanced-container', 'nextora-advanced-container' );
$style_bits = array();

$min_height = nextora_ac_sanitize_css_size( isset( $attributes['minHeight'] ) ? (string) $attributes['minHeight'] : '', '' );
if ( '' !== $min_height ) {
	$style_bits[] = '--nextora-ac-min-height:' . $min_height;
}

if ( $use_overlay ) {
	$style_bits[] = '--nextora-ac-overlay-color:' . ( $overlay_color ? $overlay_color : 'var(--wp--preset--color--contrast, #0f172a)' );
	$style_bits[] = '--nextora-ac-overlay-opacity:' . (string) $overlay_opacity;
}

if ( 'color' === $background_type && ! $use_hover_reveal ) {
	if ( 'gradient' === $section_background_fill && '' !== $resolved_section_gradient ) {
		$classes[]    = 'nextora-advanced-container--fill-gradient';
		$style_bits[] = '--nextora-ac-section-bg:' . $resolved_section_gradient;
		$style_bits[] = 'background:var(--nextora-ac-section-bg)';

		if ( preg_match( '/^[a-z0-9-]+$/i', $section_background_gradient ) ) {
			$classes[] = 'has-' . sanitize_html_class( strtolower( $section_background_gradient ) ) . '-gradient-background';
		}
	} elseif ( '' !== $section_background_color ) {
		$style_bits[] = 'background-color:' . $section_background_color;
	}
}
if ( $use_hover_reveal ) {
	$classes[] = 'nextora-advanced-container--hover-reveal';
	if ( $hover_reveal_mask_is_gradient ) {
		$classes[]    = 'nextora-advanced-container--hover-reveal-gradient';
		$style_bits[] = '--nextora-ac-section-bg:' . $resolved_section_gradient;
	} else {
		$style_bits[] = '--nextora-ac-hover-mask-color:' . $hover_reveal_mask_color;
	}
}
if ( $enable_parallax && ( $use_image || $use_video ) && ! $enable_background_animation ) {
	$classes[] = 'nextora-advanced-container--parallax';
}
$classes[] = 'nextora-advanced-container--bg-' . $background_type;
if ( $enable_background_animation && $use_image ) {
	$classes[] = 'nextora-advanced-container--bg-anim';
	$classes[] = 'nextora-advanced-container--bg-anim-' . $background_animation;
	$base_durations = array(
		'ken-burns'     => 24,
		'slow-zoom'     => 20,
		'gentle-pan'    => 18,
		'subtle-drift'  => 26,
		'breathing'     => 16,
	);
	$base_duration  = $base_durations[ $background_animation ] ?? 22;
	$style_bits[]   = '--nextora-ac-bg-anim-base-duration:' . (string) $base_duration . 's';
	$style_bits[]   = '--nextora-ac-bg-anim-speed:' . (string) $background_animation_speed;
}
if ( $enable_scroll ) {
	$classes[] = 'nextora-advanced-container--scroll-reveal';
}

if ( $enable_scroll || ( $enable_parallax && ( $use_image || $use_video ) ) || $use_hover_reveal ) {
	nextora_ac_enqueue_view_script();
}

$wrapper_args = array(
	'class' => implode( ' ', $classes ),
	'style' => implode( ';', $style_bits ),
);
if ( $enable_scroll ) {
	$wrapper_args['data-nextora-scroll-reveal'] = '1';
}
if ( $enable_parallax && ( $use_image || $use_video ) && ! $enable_background_animation ) {
	$wrapper_args['data-nextora-ac-parallax']       = '1';
	$wrapper_args['data-nextora-ac-parallax-speed'] = (string) $parallax_speed;
}
if ( $use_hover_reveal ) {
	$wrapper_args['data-nextora-ac-hover-reveal'] = '1';
}

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_args );

$content_inner  = '';
$content_string = trim( (string) $content );

if ( $block instanceof WP_Block && is_countable( $block->inner_blocks ) && count( $block->inner_blocks ) > 0 ) {
	foreach ( $block->inner_blocks as $inner_block ) {
		if ( $inner_block instanceof WP_Block ) {
			$content_inner .= $inner_block->render();
		} elseif ( is_array( $inner_block ) ) {
			$content_inner .= (string) render_block( $inner_block );
		}
	}
} elseif ( '' !== $content_string ) {
	$content_inner = $content_string;
}

// Default inner wrapper when no inner blocks exist.
if ( '' === $content_inner ) {
	$content_inner = '<!-- wp:group --><div class="wp-block-group"></div><!-- /wp:group -->';
}

$hover_reveal_bg_style = '';
if ( $use_hover_reveal ) {
	$reveal_attributes = array_merge(
		$attributes,
		array(
			'backgroundImageFocalPoint' => $attributes['hoverRevealImageFocalPoint'] ?? ( $attributes['backgroundImageFocalPoint'] ?? null ),
			'backgroundImageSize'     => isset( $attributes['hoverRevealImageSize'] )
				? (string) $attributes['hoverRevealImageSize']
				: ( isset( $attributes['backgroundImageSize'] ) ? (string) $attributes['backgroundImageSize'] : 'cover' ),
		),
	);
	$hover_reveal_bg_style = nextora_ac_build_background_image_style( $reveal_attributes, $hover_reveal_image_url );
}
?>
<section <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<?php if ( $use_hover_reveal ) : ?>
		<div
			class="nextora-advanced-container__bg-reveal"
			aria-hidden="true"
			style="<?php echo esc_attr( $hover_reveal_bg_style ); ?>"
		></div>
		<canvas class="nextora-advanced-container__hover-mask" aria-hidden="true"></canvas>
	<?php endif; ?>
	<?php if ( $use_image ) : ?>
		<div
			class="nextora-advanced-container__bg"
			aria-hidden="true"
			style="<?php echo esc_attr( nextora_ac_build_background_image_style( $attributes, $background_image_url ) ); ?>"
		></div>
	<?php elseif ( $use_video ) : ?>
		<div class="nextora-advanced-container__bg nextora-advanced-container__bg--video" aria-hidden="true">
			<video class="nextora-advanced-container__video" autoplay muted loop playsinline>
				<source src="<?php echo esc_url( $background_video_url ); ?>" />
			</video>
		</div>
	<?php endif; ?>

	<?php if ( $use_overlay ) : ?>
		<div
			class="<?php echo esc_attr( 'nextora-advanced-container__overlay nextora-advanced-container__overlay--' . $overlay_style ); ?>"
			aria-hidden="true"
		></div>
	<?php endif; ?>

	<div class="nextora-advanced-container__inner">
		<?php echo $content_inner; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
	</div>
</section>
