<?php
/**
 * Image gallery (slider) — server render + Swiper markup (view.js).
 *
 * @var array    $attributes Block attributes.
 * @var string   $content    Unused.
 * @var WP_Block $block      Block instance.
 */

/**
 * Allow hex or var(--…) for slide matting color.
 *
 * @param string $raw User input.
 * @return string Safe value or empty string.
 */
if ( ! function_exists( 'nextora_ig_sanitize_slide_bg' ) ) {
	function nextora_ig_sanitize_slide_bg( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}
		$hex = sanitize_hex_color( $raw );
		if ( $hex ) {
			return $hex;
		}
		// Theme/preset: var(--wp--preset--color--slug) or var(--x).
		if ( strlen( $raw ) < 220 && preg_match( '/^var\(([^)]+)\)$/', $raw, $m ) && ! preg_match( '/[<>\'\"\\\\;]/', $m[1] ) ) {
			return $raw;
		}
		return '';
	}
}

$raw_ids = isset( $attributes['imageIds'] ) && is_array( $attributes['imageIds'] ) ? array_map( 'absint', $attributes['imageIds'] ) : array();
$raw_ids = array_values( array_filter( $raw_ids ) );

$ids = array();
foreach ( $raw_ids as $id ) {
	if ( $id && wp_attachment_is_image( $id ) ) {
		$ids[] = $id;
	}
}

if ( ! $ids ) {
	return;
}

$show_nav      = ! isset( $attributes['showNav'] ) || (bool) $attributes['showNav'];
$show_pag      = ! isset( $attributes['showPagination'] ) || (bool) $attributes['showPagination'];
$show_captions = ! isset( $attributes['showCaptions'] ) || (bool) $attributes['showCaptions'];
$loop      = ! isset( $attributes['loop'] ) || (bool) $attributes['loop'];
$autoplay  = isset( $attributes['autoplay'] ) && (bool) $attributes['autoplay'];
$autoplay_d = isset( $attributes['autoplayDelay'] ) ? max( 1000, (int) $attributes['autoplayDelay'] ) : 4500;
$space     = isset( $attributes['spaceBetween'] ) ? max( 0, (int) $attributes['spaceBetween'] ) : 12;
// Rounded SPV avoids float noise in JSON (e.g. 1.0800000000000001) that can confuse clients.
$spv       = round( isset( $attributes['slidesPerView'] ) ? (float) $attributes['slidesPerView'] : 1.0, 3 );
$spv_t     = round( isset( $attributes['slidesPerViewTablet'] ) ? (float) $attributes['slidesPerViewTablet'] : 1.08, 3 );
$spv_d     = round( isset( $attributes['slidesPerViewDesktop'] ) ? (float) $attributes['slidesPerViewDesktop'] : 1.25, 3 );
$use_loop  = $loop && count( $ids ) > 1;

$swiper_opts = array(
	'loop'                => $use_loop,
	'autoplay'            => $autoplay,
	'autoplayDelay'       => $autoplay_d,
	'showNav'             => $show_nav,
	'showPagination'      => $show_pag,
	'spaceBetween'        => $space,
	'slidesPerView'       => $spv,
	'slidesPerViewTablet' => $spv_t,
	'slidesPerViewDesktop' => $spv_d,
	'breakpoints'         => array(
		'480'  => array(
			'slidesPerView' => $spv_t,
			'spaceBetween'  => 12,
		),
		'900'  => array(
			'slidesPerView' => $spv_d,
			'spaceBetween'  => $space,
		),
	),
);

$opts_json   = wp_json_encode( $swiper_opts );
$opts_string = is_string( $opts_json ) ? $opts_json : '{}';

$slide_fit  = isset( $attributes['slideImageFit'] ) && 'contain' === $attributes['slideImageFit'] ? 'contain' : 'cover';
$safe_slide_bg = nextora_ig_sanitize_slide_bg( isset( $attributes['slideAreaBackground'] ) ? (string) $attributes['slideAreaBackground'] : '' );

$ig_classes   = array( 'nextora-ig' );
$ig_style_arr = array();
if ( 'contain' === $slide_fit ) {
	$ig_classes[] = 'nextora-ig--fit-contain';
}
if ( $safe_slide_bg ) {
	$ig_style_arr[] = '--nextora-ig-slide-bg: ' . $safe_slide_bg;
}
$ig_class_attr = esc_attr( implode( ' ', $ig_classes ) );
$ig_style_attr = $ig_style_arr ? ' style="' . esc_attr( implode( ';', $ig_style_arr ) ) . '"' : '';

$wrapper = get_block_wrapper_attributes();
?>
<div class="inline-grid overflow-hidden"> 
	<div <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
		<div class="<?php echo $ig_class_attr; ?>" data-swiper-opts="<?php echo esc_attr( $opts_string ); ?>"<?php echo $ig_style_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- esc_attr in variable. ?>>
			<div class="swiper nextora-ig__swiper">
				<div class="swiper-wrapper">
					<?php foreach ( $ids as $attachment_id ) : ?>
						<?php
						$image = wp_get_attachment_image(
							$attachment_id,
							'large',
							false,
							array(
								'class'    => 'nextora-ig__img',
								'loading'  => 'lazy',
								'decoding' => 'async',
							)
						);
						if ( ! $image ) {
							continue;
						}
						$caption = '';
						$post    = get_post( $attachment_id );
						if ( $post && ! empty( $post->post_excerpt ) ) {
							$caption = $post->post_excerpt;
						}
						?>
						<div class="swiper-slide">
							<div class="nextora-ig__media">
								<?php echo $image; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- attachment image. ?>
							</div>
							<?php if ( $show_captions && $caption ) : ?>
								<p class="nextora-ig__caption"><?php echo esc_html( $caption ); ?></p>
							<?php endif; ?>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
			<?php if ( $show_nav && count( $ids ) > 1 ) : ?>
				<div class="nextora-ig__arrows">
					<button type="button" class="nextora-ig__arrow-btn nextora-ig__arrow--prev" aria-label="<?php echo esc_attr__( 'Previous slide', 'nextora' ); ?>">
						<svg class="nextora-ig__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path d="M15 18l-6-6 6-6" />
						</svg>
					</button>
					<button type="button" class="nextora-ig__arrow-btn nextora-ig__arrow--next" aria-label="<?php echo esc_attr__( 'Next slide', 'nextora' ); ?>">
						<svg class="nextora-ig__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
							<path d="M9 6l6 6-6 6" />
						</svg>
					</button>
				</div>
			<?php endif; ?>
			<?php if ( $show_pag && count( $ids ) > 1 ) : ?>
				<div class="nextora-ig__pagination" aria-hidden="true"></div>
			<?php endif; ?>
		</div>
	</div>
</div>
