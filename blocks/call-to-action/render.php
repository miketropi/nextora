<?php
/**
 * Call to action — dynamic render.
 *
 * Layout mirrors the hero (two `core/group` columns). Legacy heading/content attributes
 * still render a single column when no inner blocks exist in the post.
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Saved inner HTML (or empty when only innerBlocks used).
 * @var WP_Block $block      Block instance.
 */

if ( ! function_exists( 'nextora_cta_enqueue_view_script' ) ) {
	/**
	 * Ensure the block view script is in the queue. Dynamic blocks with a PHP
	 * `render` callback do not always get `viewScript` auto-enqueued; parallax
	 * would then never run on the front end.
	 */
	function nextora_cta_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}
		$bt = \WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/call-to-action' );
		if ( $bt && ! empty( $bt->view_script_handles ) && is_array( $bt->view_script_handles ) ) {
			foreach ( $bt->view_script_handles as $handle ) {
				if ( is_string( $handle ) && $handle !== '' ) {
					wp_enqueue_script( $handle );
				}
			}
			return;
		}
		$path = (string) get_template_directory() . '/blocks/call-to-action/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/call-to-action/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-cta-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-cta-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true
				);
			}
			wp_enqueue_script( 'nextora-cta-view-fallback' );
		}
	}
}

if ( ! function_exists( 'nextora_cta_strip_outer_wrapper' ) ) {
	/**
	 * Remove the outermost wrapper div from saved `save()` markup.
	 *
	 * @param string $html HTML starting with a single root <div>…</div>.
	 * @return string Inner HTML.
	 */
	function nextora_cta_strip_outer_wrapper( string $html ): string {
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

		while ( $i < $len && $depth > 0 ) {
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

$split    = $attributes['columnSplit'] ?? '50-50';
$creative = $attributes['creativePosition'] ?? 'right';
$stack    = $attributes['stackOrder'] ?? 'content-first';
$v_align  = $attributes['verticalAlign'] ?? 'center';
$sticky   = isset( $attributes['stickyColumn'] ) ? (string) $attributes['stickyColumn'] : 'none';

$legacy_heading = isset( $attributes['heading'] ) ? (string) $attributes['heading'] : '';
$legacy_content = isset( $attributes['content'] ) ? (string) $attributes['content'] : '';

$mode = isset( $attributes['backgroundMode'] ) ? (string) $attributes['backgroundMode'] : 'solid';
$allowed_modes = array( 'solid', 'image', 'video', 'colorMix' );
if ( ! in_array( $mode, $allowed_modes, true ) ) {
	$mode = 'solid';
}

$image_id  = isset( $attributes['backgroundImageId'] ) ? absint( $attributes['backgroundImageId'] ) : 0;
$video_id  = isset( $attributes['backgroundVideoId'] ) ? absint( $attributes['backgroundVideoId'] ) : 0;
$mix_ratio = isset( $attributes['colorMixRatio'] ) ? max( 0, min( 100, (int) $attributes['colorMixRatio'] ) ) : 50;
$overlay   = isset( $attributes['overlayOpacity'] ) ? max( 0, min( 100, (int) $attributes['overlayOpacity'] ) ) : 0;
$parallax  = ! empty( $attributes['parallaxEnabled'] );
$strength  = isset( $attributes['parallaxStrength'] ) ? max( 0, min( 100, (int) $attributes['parallaxStrength'] ) ) : 30;

$raw_a = isset( $attributes['colorMixA'] ) ? (string) $attributes['colorMixA'] : '';
$raw_b = isset( $attributes['colorMixB'] ) ? (string) $attributes['colorMixB'] : '';
$mix_a = $raw_a && sanitize_hex_color( $raw_a ) ? sanitize_hex_color( $raw_a ) : '#1d4ed8';
$mix_b = $raw_b && sanitize_hex_color( $raw_b ) ? sanitize_hex_color( $raw_b ) : '#0f172a';

$use_image     = ( 'image' === $mode && $image_id && wp_attachment_is_image( $image_id ) );
$use_video     = false;
$use_color_mix = ( 'colorMix' === $mode );
if ( 'video' === $mode && $video_id ) {
	$mime      = get_post_mime_type( $video_id );
	$use_video = is_string( $mime ) && 0 === strpos( $mime, 'video/' );
}

$has_custom_bg = $use_image || $use_video || $use_color_mix;

$has_from_inner     = is_object( $block ) && ! empty( $block->inner_blocks );
$has_content_string = is_string( $content ) && '' !== trim( (string) $content );
$has_legacy         = ( '' !== $legacy_heading || '' !== $legacy_content );
$is_legacy          = ( ! $has_from_inner && ! $has_content_string && $has_legacy );

if ( ! $has_from_inner && ! $has_content_string && ! $has_legacy && ! $has_custom_bg ) {
	return;
}

$mode_class = 'solid';
if ( $use_image ) {
	$mode_class = 'image';
} elseif ( $use_video ) {
	$mode_class = 'video';
} elseif ( $use_color_mix ) {
	$mode_class = 'color-mix';
}

$split_to_cols = array(
	'50-50' => 'minmax(0, 1fr) minmax(0, 1fr)',
	'40-60' => 'minmax(0, 2fr) minmax(0, 3fr)',
	'60-40' => 'minmax(0, 3fr) minmax(0, 2fr)',
	'33-66' => 'minmax(0, 1fr) minmax(0, 2fr)',
	'66-33' => 'minmax(0, 2fr) minmax(0, 1fr)',
);
$align_map  = array(
	'top'    => 'start',
	'center' => 'center',
	'bottom' => 'end',
);
$css_cols   = $split_to_cols[ $split ] ?? $split_to_cols['50-50'];
$align_self = $align_map[ $v_align ] ?? 'center';

$classes = array(
	'nextora-cta',
	'nextora-cta--mode-' . $mode_class,
	'nextora-cta--split',
	'nextora-cta--split-' . sanitize_title( $split ),
	'nextora-cta--align-v-' . sanitize_title( $v_align ),
	'left' === $creative ? 'nextora-cta--creative-left' : 'nextora-cta--creative-right',
	'nextora-cta--stack-' . ( 'creative-first' === $stack ? 'creative-first' : 'content-first' ),
);
$allowed_sticky = array( 'none', 'content', 'creative' );
if ( in_array( $sticky, $allowed_sticky, true ) && 'none' !== $sticky ) {
	$classes[] = 'nextora-cta--sticky-' . $sticky;
}
if ( ! $has_custom_bg ) {
	$classes[] = 'nextora-cta--no-media-layer';
} elseif ( $use_image || $use_video ) {
	$classes[] = 'nextora-cta--has-media';
}
if ( $parallax && ( $use_image || $use_video ) ) {
	$classes[] = 'nextora-cta--parallax';
}
if ( $is_legacy ) {
	$classes[] = 'nextora-cta--legacy';
}

$style_bits   = array(
	'--nextora-cta-scrim:' . (string) (int) $overlay,
	'--nextora-cta--cols:' . $css_cols,
	'--nextora-cta--align:' . $align_self,
);
if ( $use_color_mix ) {
	$cm = sprintf( 'color-mix(in srgb, %s %d%%, %s)', $mix_a, $mix_ratio, $mix_b );
	$style_bits[] = '--nextora-cta-color-mix:' . $cm;
}

$radius_allowed = array( 'none', 'sm', 'md', 'lg', 'xl', '2xl', 'full' );
$radius_key     = isset( $attributes['borderRadius'] ) ? (string) $attributes['borderRadius'] : 'none';
if ( ! in_array( $radius_key, $radius_allowed, true ) ) {
	$radius_key = 'none';
}
$radius_map = array(
	'none' => '',
	'sm'   => '0.375rem',
	'md'   => '0.5rem',
	'lg'   => '0.75rem',
	'xl'   => '1rem',
	'2xl'  => '1.5rem',
	'full' => '9999px',
);
if ( isset( $radius_map[ $radius_key ] ) && $radius_map[ $radius_key ] !== '' ) {
	$style_bits[] = 'border-radius:' . $radius_map[ $radius_key ];
}

$wrapper_args = array(
	'class'                 => implode( ' ', $classes ),
	'style'                 => implode( ';', $style_bits ),
	'data-nextora-cta-root' => '1',
);
if ( $parallax && ( $use_image || $use_video ) ) {
	$wrapper_args['data-nextora-cta-parallax']  = '1';
	$wrapper_args['data-nextora-cta-strength'] = (string) (int) $strength;
}
$wrapper = get_block_wrapper_attributes(
	$wrapper_args,
	( is_object( $block ) && $block instanceof \WP_Block ) ? $block : null
);

if ( $parallax && ( $use_image || $use_video ) ) {
	nextora_cta_enqueue_view_script();
}

$body_inner = '';
if ( $is_legacy ) {
	$title = $legacy_heading ? wp_kses( $legacy_heading, array( 'strong' => array(), 'em' => array() ) ) : '';
	$lede  = $legacy_content ? wp_kses_post( $legacy_content ) : '';
	$body_inner  = '<div class="nextora-cta__grid nextora-cta__grid--legacy"><div class="nextora-cta__legacy">';
	if ( $title ) {
		$body_inner .= '<h2 class="nextora-cta__heading">' . $title . '</h2>';
	}
	if ( $lede ) {
		$body_inner .= '<div class="nextora-cta__content entry-content">' . $lede . '</div>';
	}
	$body_inner .= '</div></div>';
} elseif ( $has_from_inner ) {
	$ib_html = '';
	foreach ( $block->inner_blocks as $inner ) {
		$ib_html .= $inner->render();
	}
	$body_inner = '<div class="nextora-cta__grid">' . $ib_html . '</div>';
} else {
	$strip = nextora_cta_strip_outer_wrapper( (string) $content );
	$body_inner  = '<div class="nextora-cta__grid">' . $strip . '</div>';
}
?>
<div <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php if ( $use_image ) : ?>
		<div class="nextora-cta__bg" aria-hidden="true">
			<?php
			echo wp_get_attachment_image(
				$image_id,
				'full',
				false,
				array(
					'class'    => 'nextora-cta__img',
					'loading'  => 'lazy',
					'decoding' => 'async',
				)
			);
			?>
		</div>
	<?php elseif ( $use_video ) : ?>
		<?php
		$video_url = (string) wp_get_attachment_url( $video_id );
		$v_mime    = get_post_mime_type( $video_id );
		$v_type    = ( is_string( $v_mime ) && 0 === strpos( $v_mime, 'video/' ) ) ? $v_mime : 'video/mp4';
		?>
		<div class="nextora-cta__bg nextora-cta__bg--video" aria-hidden="true">
			<video class="nextora-cta__video" playsinline muted autoplay loop>
				<source src="<?php echo esc_url( $video_url ); ?>" type="<?php echo esc_attr( $v_type ); ?>" />
			</video>
		</div>
	<?php elseif ( $use_color_mix ) : ?>
		<div class="nextora-cta__bg nextora-cta__bg--color-mix" style="background: var(--nextora-cta-color-mix, transparent);"></div>
	<?php endif; ?>
	<?php if ( $has_custom_bg && $overlay > 0 ) : ?>
		<div class="nextora-cta__scrim" aria-hidden="true"></div>
	<?php endif; ?>
	<div class="nextora-cta__body">
		<?php echo $body_inner; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped — HTML from block render. ?>
	</div>
</div>
