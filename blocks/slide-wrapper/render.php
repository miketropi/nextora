<?php
/**
 * Slide wrapper — dynamic render + Swiper shell.
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

if ( ! function_exists( 'nextora_sw_enqueue_view_script' ) ) {
	/**
	 * Ensure view script is queued for dynamic block render.
	 */
	function nextora_sw_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$registry = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/slide-wrapper' );
		if ( $registry && ! empty( $registry->view_script_handles ) && is_array( $registry->view_script_handles ) ) {
			foreach ( $registry->view_script_handles as $handle ) {
				if ( is_string( $handle ) && $handle !== '' ) {
					wp_enqueue_script( $handle );
				}
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/slide-wrapper/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/slide-wrapper/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-slider-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-slider-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-slider-view-fallback' );
		}
	}
}

if ( ! function_exists( 'nextora_sw_resolve_color' ) ) {
	/**
	 * Map preset slug, hex, or var() to a safe CSS color value.
	 *
	 * @param string $raw User input.
	 *
	 * @return string Safe value or empty string.
	 */
	function nextora_sw_resolve_color( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}

		$hex = sanitize_hex_color( $raw );
		if ( $hex ) {
			return $hex;
		}

		if ( strlen( $raw ) < 220 && preg_match( '/^var\(--wp--preset--color--[a-z0-9-]+\)$/', $raw ) ) {
			return $raw;
		}

		if ( preg_match( '/^[a-z0-9-]+$/', $raw ) ) {
			return 'var(--wp--preset--color--' . sanitize_title( $raw ) . ')';
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_sw_sanitize_css_size' ) ) {
	/**
	 * Sanitize a single CSS length / height value.
	 *
	 * @param string $raw      User input.
	 * @param string $fallback Fallback when invalid.
	 *
	 * @return string Safe CSS size.
	 */
	function nextora_sw_sanitize_css_size( string $raw, string $fallback ): string {
		$raw = trim( wp_strip_all_tags( $raw ) );
		if ( '' === $raw ) {
			return $fallback;
		}

		if ( preg_match( '/^(auto|inherit|\d+(?:\.\d+)?(?:px|rem|em|vh|vw|dvh|svh|%))$/i', $raw ) ) {
			return $raw;
		}

		return $fallback;
	}
}

nextora_sw_enqueue_view_script();

$slides_per_view  = isset( $attributes['slidesPerView'] ) ? max( 1, min( 5, (int) $attributes['slidesPerView'] ) ) : 1;
$slides_per_group = isset( $attributes['slidesPerGroup'] ) ? max( 1, min( 5, (int) $attributes['slidesPerGroup'] ) ) : 1;
$space_between    = isset( $attributes['spaceBetween'] ) ? max( 0, (int) $attributes['spaceBetween'] ) : 0;
$speed            = isset( $attributes['speed'] ) ? max( 100, min( 2000, (int) $attributes['speed'] ) ) : 500;
$loop             = ! isset( $attributes['loop'] ) || (bool) $attributes['loop'];
$effect           = isset( $attributes['effect'] ) && 'fade' === $attributes['effect'] ? 'fade' : 'slide';
$autoplay         = ! isset( $attributes['autoplay'] ) || (bool) $attributes['autoplay'];
$autoplay_delay   = isset( $attributes['autoplayDelay'] ) ? max( 1000, min( 15000, (int) $attributes['autoplayDelay'] ) ) : 5000;
$pause_on_hover   = ! isset( $attributes['pauseOnHover'] ) || (bool) $attributes['pauseOnHover'];
$show_arrows      = ! isset( $attributes['showArrows'] ) || (bool) $attributes['showArrows'];
$show_dots        = ! isset( $attributes['showDots'] ) || (bool) $attributes['showDots'];
$arrow_style      = isset( $attributes['arrowStyle'] ) ? sanitize_key( (string) $attributes['arrowStyle'] ) : 'minimal';
$allowed_styles   = array( 'minimal', 'circle', 'square' );
if ( ! in_array( $arrow_style, $allowed_styles, true ) ) {
	$arrow_style = 'minimal';
}
$arrow_size = isset( $attributes['arrowSize'] ) ? max( 16, min( 48, (int) $attributes['arrowSize'] ) ) : 24;

$slider_height     = nextora_sw_sanitize_css_size( isset( $attributes['sliderHeight'] ) ? (string) $attributes['sliderHeight'] : '', '80vh' );
$slider_min_height = nextora_sw_sanitize_css_size( isset( $attributes['sliderMinHeight'] ) ? (string) $attributes['sliderMinHeight'] : '', '500px' );

$arrow_color  = nextora_sw_resolve_color( isset( $attributes['arrowColor'] ) ? (string) $attributes['arrowColor'] : '' );
$dot_color    = nextora_sw_resolve_color( isset( $attributes['dotColor'] ) ? (string) $attributes['dotColor'] : '' );
$dot_active   = nextora_sw_resolve_color( isset( $attributes['dotActiveColor'] ) ? (string) $attributes['dotActiveColor'] : '' );

$content_max_width = nextora_sw_sanitize_css_size( isset( $attributes['contentMaxWidth'] ) ? (string) $attributes['contentMaxWidth'] : '', '600px' );
$content_h_align   = isset( $attributes['contentHorizontalAlign'] ) ? sanitize_key( (string) $attributes['contentHorizontalAlign'] ) : 'left';
$content_v_align   = isset( $attributes['contentVerticalAlign'] ) ? sanitize_key( (string) $attributes['contentVerticalAlign'] ) : 'center';
if ( ! in_array( $content_h_align, array( 'left', 'center', 'right' ), true ) ) {
	$content_h_align = 'left';
}
if ( ! in_array( $content_v_align, array( 'top', 'center', 'bottom' ), true ) ) {
	$content_v_align = 'center';
}
$v_align_css = 'center' === $content_v_align ? 'center' : ( 'top' === $content_v_align ? 'flex-start' : 'flex-end' );
$h_align_css = 'center' === $content_h_align ? 'center' : ( 'right' === $content_h_align ? 'right' : 'left' );
$h_margin_left  = 'center' === $content_h_align ? 'auto' : ( 'right' === $content_h_align ? 'auto' : '0' );
$h_margin_right = 'center' === $content_h_align ? 'auto' : '0';

$pad_top    = isset( $attributes['contentPaddingTop'] ) ? max( 0, min( 200, (int) $attributes['contentPaddingTop'] ) ) : 60;
$pad_bottom = isset( $attributes['contentPaddingBottom'] ) ? max( 0, min( 200, (int) $attributes['contentPaddingBottom'] ) ) : 60;
$pad_left   = isset( $attributes['contentPaddingLeft'] ) ? max( 0, min( 200, (int) $attributes['contentPaddingLeft'] ) ) : 80;
$pad_right  = isset( $attributes['contentPaddingRight'] ) ? max( 0, min( 200, (int) $attributes['contentPaddingRight'] ) ) : 80;

$slides_html = '';
$slide_count = 0;

if ( $block instanceof WP_Block && $block->inner_blocks->count() > 0 ) {
	foreach ( $block->inner_blocks as $inner_block ) {
		if ( ! $inner_block instanceof WP_Block || 'nextora/slide-item' !== $inner_block->name ) {
			continue;
		}
		$slides_html .= $inner_block->render();
		++$slide_count;
	}
}

if ( 0 === $slide_count && is_string( $content ) && '' !== trim( $content ) ) {
	$slides_html = $content;
	$slide_count = substr_count( $slides_html, 'nextora-slide' );
}

if ( 0 === $slide_count ) {
	return;
}

$use_loop = ! isset( $attributes['loop'] ) || (bool) $attributes['loop'];

$swiper_opts = array(
	'loop'           => $use_loop,
	'autoplay'       => $autoplay,
	'autoplayDelay'  => $autoplay_delay,
	'pauseOnHover'   => $pause_on_hover,
	'showNav'        => $show_arrows,
	'showPagination' => $show_dots,
	'spaceBetween'   => $space_between,
	'speed'          => $speed,
	'slidesPerView'  => $slides_per_view,
	'slidesPerGroup' => $slides_per_group,
	'effect'         => $effect,
);

$opts_json   = wp_json_encode( $swiper_opts );
$opts_string = is_string( $opts_json ) ? $opts_json : '{}';

$style_rules = array(
	'--nextora-slider-height:' . $slider_height,
	'--nextora-slider-min-height:' . $slider_min_height,
	'--nextora-slider-arrow-size:' . $arrow_size . 'px',
);

if ( $arrow_color ) {
	$style_rules[] = '--nextora-slider-arrow-color:' . $arrow_color;
}
if ( $dot_color ) {
	$style_rules[] = '--nextora-slider-dot-color:' . $dot_color;
}
if ( $dot_active ) {
	$style_rules[] = '--nextora-slider-dot-active:' . $dot_active;
}
$style_rules[] = '--nextora-slider-content-max-width:' . $content_max_width;
$style_rules[] = '--nextora-slider-content-v-align:' . $v_align_css;
$style_rules[] = '--nextora-slider-content-h-align:' . $h_align_css;
$style_rules[] = '--nextora-slider-content-h-margin-left:' . $h_margin_left;
$style_rules[] = '--nextora-slider-content-h-margin-right:' . $h_margin_right;
$style_rules[] = '--nextora-slider-content-padding-top:' . $pad_top . 'px';
$style_rules[] = '--nextora-slider-content-padding-bottom:' . $pad_bottom . 'px';
$style_rules[] = '--nextora-slider-content-padding-left:' . $pad_left . 'px';
$style_rules[] = '--nextora-slider-content-padding-right:' . $pad_right . 'px';

$sw_classes = array(
	'nextora-slider',
	'nextora-slider--loading',
	'nextora-slider--arrow-' . $arrow_style,
);

$wrapper = get_block_wrapper_attributes();

$sw_class_attr = esc_attr( implode( ' ', $sw_classes ) );
$sw_style_attr = esc_attr( implode( ';', $style_rules ) );
?>
<div <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<div
		class="<?php echo $sw_class_attr; ?>"
		data-swiper-opts="<?php echo esc_attr( $opts_string ); ?>"
		style="<?php echo $sw_style_attr; ?>"
	>
		<div class="swiper nextora-slider__swiper">
			<div class="swiper-wrapper">
				<?php echo $slides_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- rendered slide blocks.?>
			</div>
		</div>
		<?php if ( $show_arrows && $slide_count > 1 ) : ?>
			<button type="button" class="nextora-slider__arrow nextora-slider__arrow--prev" aria-label="<?php echo esc_attr__( 'Previous slide', 'nextora' ); ?>">
				<svg class="nextora-slider__arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path d="M15 18l-6-6 6-6" />
				</svg>
			</button>
			<button type="button" class="nextora-slider__arrow nextora-slider__arrow--next" aria-label="<?php echo esc_attr__( 'Next slide', 'nextora' ); ?>">
				<svg class="nextora-slider__arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<path d="M9 6l6 6-6 6" />
				</svg>
			</button>
		<?php endif; ?>
		<?php if ( $show_dots && $slide_count > 1 ) : ?>
			<div class="nextora-slider__pagination"></div>
		<?php endif; ?>
	</div>
</div>
