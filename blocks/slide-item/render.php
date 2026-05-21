<?php
/**
 * Slide item — dynamic render for one carousel slide.
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

if ( ! function_exists( 'nextora_si_resolve_color' ) ) {
	/**
	 * Map preset slug, hex, or var() to a safe CSS color value.
	 *
	 * @param string $raw User input.
	 *
	 * @return string Safe value or empty string.
	 */
	function nextora_si_resolve_color( string $raw ): string {
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

if ( ! function_exists( 'nextora_si_sanitize_css_size' ) ) {
	/**
	 * Sanitize a CSS length for max-width.
	 *
	 * @param string $raw      User input.
	 * @param string $fallback Fallback when invalid.
	 *
	 * @return string Safe CSS size.
	 */
	function nextora_si_sanitize_css_size( string $raw, string $fallback ): string {
		$raw = trim( wp_strip_all_tags( $raw ) );
		if ( '' === $raw ) {
			return $fallback;
		}

		if ( preg_match( '/^(auto|inherit|\d+(?:\.\d+)?(?:px|rem|em|vh|vw|%))$/i', $raw ) ) {
			return $raw;
		}

		return $fallback;
	}
}

if ( ! function_exists( 'nextora_si_sanitize_background_position' ) ) {
	/**
	 * Sanitize background-position value.
	 *
	 * @param string $raw User input.
	 *
	 * @return string Safe CSS background-position.
	 */
	function nextora_si_sanitize_background_position( string $raw ): string {
		$raw = trim( wp_strip_all_tags( $raw ) );
		if ( '' === $raw ) {
			return 'center center';
		}

		if ( preg_match( '/^(\d{1,3}(?:\.\d+)?%|\d+(?:\.\d+)?(?:px|rem|em)|center|top|bottom|left|right)(\s+(\d{1,3}(?:\.\d+)?%|\d+(?:\.\d+)?(?:px|rem|em)|center|top|bottom|left|right))?$/i', $raw ) ) {
			return $raw;
		}

		return 'center center';
	}
}

if ( ! function_exists( 'nextora_si_sanitize_gradient' ) ) {
	/**
	 * Allow simple CSS gradients for overlay.
	 *
	 * @param string $raw User input.
	 *
	 * @return string Safe gradient or empty.
	 */
	function nextora_si_sanitize_gradient( string $raw ): string {
		$raw = trim( wp_strip_all_tags( $raw ) );
		if ( '' === $raw || strlen( $raw ) > 500 ) {
			return '';
		}

		if ( preg_match( '/^((?:repeating-)?(?:linear|radial|conic)-gradient\([^;]+\))$/i', $raw ) ) {
			return $raw;
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_si_strip_outer_wrapper' ) ) {
	/**
	 * Remove the outermost wrapper div from saved inner HTML.
	 *
	 * @param string $html HTML starting with a single root <div>…</div>.
	 *
	 * @return string Inner HTML.
	 */
	function nextora_si_strip_outer_wrapper( string $html ): string {
		$html = trim( $html );
		if ( 0 !== strpos( $html, '<div' ) ) {
			return $html;
		}

		$len = strlen( $html );
		$i   = 0;

		while ( $i < $len && preg_match( '/\s/', $html[ $i ] ) ) {
			++$i;
		}
		if ( 0 !== stripos( substr( $html, $i ), '<div' ) ) {
			return $html;
		}

		$gt = strpos( $html, '>', $i );
		if ( false === $gt ) {
			return $html;
		}

		$depth         = 1;
		$content_start = $gt + 1;
		$i              = $content_start;

		while ( $i < $len ) {
			$next_div_open  = stripos( $html, '<div', $i );
			$next_div_close = stripos( $html, '</div>', $i );

			if ( false === $next_div_close ) {
				break;
			}

			if ( false !== $next_div_open && $next_div_open < $next_div_close ) {
				++$depth;
				$i = $next_div_open + 4;
				continue;
			}

			--$depth;
			if ( 0 === $depth ) {
				return substr( $html, $content_start, $next_div_close - $content_start );
			}
			$i = $next_div_close + 6;
		}

		return $html;
	}
}

$bg_type      = isset( $attributes['backgroundType'] ) ? sanitize_key( (string) $attributes['backgroundType'] ) : 'image';
$allowed_bg   = array( 'image', 'video', 'color' );
if ( ! in_array( $bg_type, $allowed_bg, true ) ) {
	$bg_type = 'image';
}

$image_id    = isset( $attributes['backgroundImageId'] ) ? absint( $attributes['backgroundImageId'] ) : 0;
$image_alt   = isset( $attributes['backgroundImageAlt'] ) ? (string) $attributes['backgroundImageAlt'] : '';
$video_id    = isset( $attributes['backgroundVideoId'] ) ? absint( $attributes['backgroundVideoId'] ) : 0;
$bg_position = nextora_si_sanitize_background_position( isset( $attributes['backgroundPosition'] ) ? (string) $attributes['backgroundPosition'] : 'center center' );
$bg_size     = isset( $attributes['backgroundSize'] ) && in_array( $attributes['backgroundSize'], array( 'cover', 'contain', 'auto' ), true )
	? (string) $attributes['backgroundSize']
	: 'cover';

$bg_color_raw = isset( $attributes['backgroundColor'] ) ? (string) $attributes['backgroundColor'] : '';
$bg_color     = nextora_si_resolve_color( $bg_color_raw );

$overlay_color_raw = isset( $attributes['overlayColor'] ) ? (string) $attributes['overlayColor'] : '';
$overlay_color     = nextora_si_resolve_color( $overlay_color_raw );
$overlay_opacity   = isset( $attributes['overlayOpacity'] ) ? min( 1, max( 0, (float) $attributes['overlayOpacity'] ) ) : 0.4;
$overlay_gradient  = nextora_si_sanitize_gradient( isset( $attributes['overlayGradient'] ) ? (string) $attributes['overlayGradient'] : '' );

$content_max_width = nextora_si_sanitize_css_size( isset( $attributes['contentMaxWidth'] ) ? (string) $attributes['contentMaxWidth'] : '', '600px' );
$content_align     = isset( $attributes['contentAlign'] ) ? sanitize_key( (string) $attributes['contentAlign'] ) : 'left';
if ( ! in_array( $content_align, array( 'left', 'center', 'right' ), true ) ) {
	$content_align = 'left';
}

$v_align = isset( $attributes['contentVerticalAlign'] ) ? sanitize_key( (string) $attributes['contentVerticalAlign'] ) : 'center';
$v_class = 'nextora-si--valign-center';
if ( 'top' === $v_align ) {
	$v_class = 'nextora-si--valign-top';
} elseif ( 'bottom' === $v_align ) {
	$v_class = 'nextora-si--valign-bottom';
}

$pad_top    = isset( $attributes['contentPaddingTop'] ) ? max( 0, min( 200, (int) $attributes['contentPaddingTop'] ) ) : 60;
$pad_bottom = isset( $attributes['contentPaddingBottom'] ) ? max( 0, min( 200, (int) $attributes['contentPaddingBottom'] ) ) : 60;
$pad_left   = isset( $attributes['contentPaddingLeft'] ) ? max( 0, min( 200, (int) $attributes['contentPaddingLeft'] ) ) : 80;
$pad_right  = isset( $attributes['contentPaddingRight'] ) ? max( 0, min( 200, (int) $attributes['contentPaddingRight'] ) ) : 80;

$inner_html = '';
if ( $block instanceof WP_Block && $block->inner_blocks->count() > 0 ) {
	foreach ( $block->inner_blocks as $inner_block ) {
		if ( $inner_block instanceof WP_Block ) {
			$inner_html .= $inner_block->render();
		}
	}
} elseif ( is_string( $content ) && '' !== trim( $content ) ) {
	$inner_html = nextora_si_strip_outer_wrapper( $content );
}

$slide_style = sprintf(
	'padding:%1$dpx %2$dpx %3$dpx %4$dpx',
	$pad_top,
	$pad_right,
	$pad_bottom,
	$pad_left,
);

$content_style = sprintf(
	'max-width:%1$s;text-align:%2$s',
	esc_attr( $content_max_width ),
	esc_attr( $content_align ),
);

if ( 'center' === $content_align ) {
	$content_style .= ';margin-inline:auto';
} elseif ( 'right' === $content_align ) {
	$content_style .= ';margin-inline:0 0 0 auto';
}

$overlay_style = '';
if ( $overlay_gradient ) {
	$overlay_style = 'background:' . $overlay_gradient;
} else {
	$base_overlay = $overlay_color ? $overlay_color : 'var(--wp--preset--color--contrast, #000)';
	$overlay_style = sprintf( 'background-color:%1$s;opacity:%2$s', $base_overlay, (string) $overlay_opacity );
}

$classes = array(
	'swiper-slide',
	'nextora-si',
	$v_class,
);
?>
<div class="<?php echo esc_attr( implode( ' ', $classes ) ); ?>" style="<?php echo esc_attr( $slide_style ); ?>">
	<?php if ( 'image' === $bg_type && $image_id && wp_attachment_is_image( $image_id ) ) : ?>
		<?php
		$image_url = wp_get_attachment_image_url( $image_id, 'full' );
		if ( $image_url ) {
			$bg_style = sprintf(
				'background-image:url(%1$s);background-position:%2$s;background-size:%3$s',
				esc_url( $image_url ),
				esc_attr( $bg_position ),
				esc_attr( $bg_size ),
			);
			$label    = $image_alt !== '' ? $image_alt : (string) get_post_meta( $image_id, '_wp_attachment_image_alt', true );
			?>
			<div
				class="nextora-si__background"
				style="<?php echo esc_attr( $bg_style ); ?>"
				<?php if ( $label !== '' ) : ?>
					role="img"
					aria-label="<?php echo esc_attr( $label ); ?>"
				<?php endif; ?>
			></div>
		<?php } ?>
	<?php elseif ( 'video' === $bg_type && $video_id ) : ?>
		<?php
		$video_url = wp_get_attachment_url( $video_id );
		if ( $video_url ) :
			?>
			<div class="nextora-si__background nextora-si__background--video">
				<video autoplay muted loop playsinline aria-hidden="true">
					<source src="<?php echo esc_url( $video_url ); ?>" type="video/mp4" />
				</video>
			</div>
		<?php endif; ?>
	<?php elseif ( 'color' === $bg_type && $bg_color ) : ?>
		<div class="nextora-si__background nextora-si__background--color" style="<?php echo esc_attr( 'background-color:' . $bg_color ); ?>"></div>
	<?php endif; ?>

	<div class="nextora-si__overlay" style="<?php echo esc_attr( $overlay_style ); ?>" aria-hidden="true"></div>

	<div class="nextora-si__content" style="<?php echo esc_attr( $content_style ); ?>">
		<?php echo $inner_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- rendered inner blocks.?>
	</div>
</div>
