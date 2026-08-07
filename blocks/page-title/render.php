<?php
/**
 * Page Title — dynamic render.
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

if ( ! function_exists( 'nextora_pt_enqueue_view_script' ) ) {
	/**
	 * Ensure the front-end view script is available for scroll reveal and parallax.
	 */
	function nextora_pt_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$registry = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/page-title' );
		if ( $registry && ! empty( $registry->view_script_handles ) && is_array( $registry->view_script_handles ) ) {
			foreach ( $registry->view_script_handles as $handle ) {
				if ( is_string( $handle ) && '' !== $handle ) {
					wp_enqueue_script( $handle );
				}
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/page-title/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/page-title/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-pt-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-pt-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-pt-view-fallback' );
		}
	}
}

if ( ! function_exists( 'nextora_pt_resolve_color' ) ) {
	/**
	 * Map preset slug, hex, or var() to a safe CSS color value.
	 */
	function nextora_pt_resolve_color( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}

		if ( preg_match( '/^#[0-9a-fA-F]{8}$/', $raw ) ) {
			return $raw;
		}

		$hex = sanitize_hex_color( $raw );
		if ( $hex ) {
			return $hex;
		}

		if ( strlen( $raw ) < 220 && preg_match( '/^var\(--wp--preset--color--[a-z0-9-]+\)$/', $raw ) ) {
			return $raw;
		}

		if ( preg_match( '/^rgba?\(/', $raw ) || preg_match( '/^hsla?\(/', $raw ) ) {
			return $raw;
		}

		if ( preg_match( '/^[a-z0-9-]+$/', $raw ) ) {
			return 'var(--wp--preset--color--' . sanitize_title( $raw ) . ')';
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_pt_sanitize_css_size' ) ) {
	/**
	 * Sanitize a CSS length / size value.
	 */
	function nextora_pt_sanitize_css_size( string $raw, string $fallback ): string {
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

$background_type = isset( $attributes['backgroundType'] ) ? (string) $attributes['backgroundType'] : 'color';
$background_type = in_array( $background_type, array( 'color', 'image', 'video' ), true ) ? $background_type : 'color';
$background_color = nextora_pt_resolve_color( isset( $attributes['backgroundColor'] ) ? (string) $attributes['backgroundColor'] : '' );
$background_image_id = isset( $attributes['backgroundImageId'] ) ? (int) $attributes['backgroundImageId'] : 0;
$background_image_url = isset( $attributes['backgroundImageUrl'] ) ? esc_url_raw( trim( (string) $attributes['backgroundImageUrl'] ) ) : '';
$background_video_url = isset( $attributes['backgroundVideoUrl'] ) ? esc_url_raw( trim( (string) $attributes['backgroundVideoUrl'] ) ) : '';
$overlay_color = nextora_pt_resolve_color( isset( $attributes['overlayColor'] ) ? (string) $attributes['overlayColor'] : '' );
$overlay_opacity = isset( $attributes['overlayOpacity'] ) ? max( 0, min( 1, (float) $attributes['overlayOpacity'] ) ) : 0.3;
$enable_parallax = ! empty( $attributes['enableParallax'] );
$parallax_speed = isset( $attributes['parallaxSpeed'] ) ? max( 0, min( 1, (float) $attributes['parallaxSpeed'] ) ) : 0.4;
$enable_scroll = ! array_key_exists( 'enableScrollAnimation', $attributes ) || ! empty( $attributes['enableScrollAnimation'] );

if ( $background_image_id > 0 && '' === $background_image_url ) {
	$resolved_image = wp_get_attachment_image_url( $background_image_id, 'full' );
	if ( is_string( $resolved_image ) && '' !== $resolved_image ) {
		$background_image_url = esc_url_raw( $resolved_image );
	}
}

$use_image = 'image' === $background_type && '' !== $background_image_url;
$use_video = 'video' === $background_type && '' !== $background_video_url;
$use_overlay = ( $use_image || $use_video ) && $overlay_opacity > 0;

$classes    = array( 'wp-block-nextora-page-title', 'nextora-page-title' );
$style_bits = array();

$min_height = nextora_pt_sanitize_css_size( isset( $attributes['minHeight'] ) ? (string) $attributes['minHeight'] : '', '' );
if ( '' !== $min_height ) {
	$style_bits[] = '--nextora-page-title-min-height:' . $min_height;
}

if ( 'color' === $background_type && '' !== $background_color ) {
	$style_bits[] = 'background-color:' . $background_color;
}
if ( $enable_parallax && ( $use_image || $use_video ) ) {
	$classes[] = 'nextora-page-title--parallax';
}
$classes[] = 'nextora-page-title--bg-' . $background_type;
if ( $enable_scroll ) {
	$classes[] = 'nextora-page-title--scroll-reveal';
}

if ( $enable_scroll || ( $enable_parallax && ( $use_image || $use_video ) ) ) {
	nextora_pt_enqueue_view_script();
}

$wrapper_args = array(
	'class' => implode( ' ', $classes ),
	'style' => implode( ';', $style_bits ),
);
if ( $enable_scroll ) {
	$wrapper_args['data-nextora-scroll-reveal'] = '1';
}
if ( $enable_parallax && ( $use_image || $use_video ) ) {
	$wrapper_args['data-nextora-page-title-parallax']       = '1';
	$wrapper_args['data-nextora-page-title-parallax-speed'] = (string) $parallax_speed;
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
?>
<section <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<?php if ( $use_image ) : ?>
		<div class="nextora-page-title__bg" aria-hidden="true" style="background-image:url('<?php echo esc_url( $background_image_url ); ?>')"></div>
	<?php elseif ( $use_video ) : ?>
		<div class="nextora-page-title__bg nextora-page-title__bg--video" aria-hidden="true">
			<video class="nextora-page-title__video" autoplay muted loop playsinline>
				<source src="<?php echo esc_url( $background_video_url ); ?>" />
			</video>
		</div>
	<?php endif; ?>

	<?php if ( $use_overlay ) : ?>
		<div
			class="nextora-page-title__overlay"
			aria-hidden="true"
			style="<?php echo esc_attr( 'background-color:' . ( $overlay_color ? $overlay_color : 'var(--wp--preset--color--contrast, #0f172a)' ) . ';' ); ?>opacity:<?php echo esc_attr( (string) $overlay_opacity ); ?>"
		></div>
	<?php endif; ?>

	<div class="nextora-page-title__inner">
		<?php echo $content_inner; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
	</div>
</section>
