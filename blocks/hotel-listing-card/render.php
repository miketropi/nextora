<?php
/**
 * Hotel listing card — dynamic block render.
 *
 * @package Nextora
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Inner blocks (unused).
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'nextora_hlc_icon_location_pin' ) ) {
	/**
	 * Crosshair location pin SVG (decorative).
	 */
	function nextora_hlc_icon_location_pin(): string {
		return '<svg class="nextora-hlc__icon nextora-hlc__icon--pin" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
			. '<circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>'
			. '<circle cx="8" cy="8" r="2" fill="currentColor"/>'
			. '<path d="M8 2v12M2 8h12" stroke="currentColor" stroke-width="1.5"/>'
			. '</svg>';
	}
}

if ( ! function_exists( 'nextora_hlc_icon_star' ) ) {
	/**
	 * Filled star SVG (decorative).
	 */
	function nextora_hlc_icon_star(): string {
		return '<svg class="nextora-hlc__icon nextora-hlc__icon--star" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
			. '<path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.93L8 10.67l-3.52 1.85.67-3.93-2.85-2.78 3.94-.57L8 1.5z" fill="var(--nextora-hlc-star, #F6C23E)"/>'
			. '</svg>';
	}
}

if ( ! function_exists( 'nextora_hlc_enqueue_view_script' ) ) {
	/**
	 * Ensure view script is queued for dynamic block render.
	 */
	function nextora_hlc_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$registry = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/hotel-listing-card' );
		if ( $registry && ! empty( $registry->view_script_handles ) && is_array( $registry->view_script_handles ) ) {
			foreach ( $registry->view_script_handles as $handle ) {
				if ( is_string( $handle ) && $handle !== '' ) {
					wp_enqueue_script( $handle );
				}
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/hotel-listing-card/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/hotel-listing-card/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-hlc-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-hlc-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-hlc-view-fallback' );
		}
	}
}

if ( ! function_exists( 'nextora_hlc_plain_text' ) ) {
	/**
	 * Strip tags for RichText fields stored as plain strings on the front end.
	 */
	function nextora_hlc_plain_text( string $raw ): string {
		return trim( wp_strip_all_tags( $raw ) );
	}
}

$image_id   = isset( $attributes['imageId'] ) ? absint( $attributes['imageId'] ) : 0;
$image_alt  = isset( $attributes['imageAlt'] ) ? (string) $attributes['imageAlt'] : '';
$name_raw   = isset( $attributes['propertyName'] ) ? (string) $attributes['propertyName'] : '';
$price      = nextora_hlc_plain_text( isset( $attributes['price'] ) ? (string) $attributes['price'] : '' );
$price_lbl  = nextora_hlc_plain_text( isset( $attributes['priceLabel'] ) ? (string) $attributes['priceLabel'] : '' );
$location   = nextora_hlc_plain_text( isset( $attributes['location'] ) ? (string) $attributes['location'] : '' );
$rating     = nextora_hlc_plain_text( isset( $attributes['rating'] ) ? (string) $attributes['rating'] : '' );
$reviews    = nextora_hlc_plain_text( isset( $attributes['reviewCount'] ) ? (string) $attributes['reviewCount'] : '' );

$show_rating   = ! isset( $attributes['showRating'] ) || (bool) $attributes['showRating'];
$show_location = ! isset( $attributes['showLocation'] ) || (bool) $attributes['showLocation'];
$scroll_reveal = ! isset( $attributes['enableScrollAnimation'] ) || (bool) $attributes['enableScrollAnimation'];

$card_radius  = isset( $attributes['cardBorderRadius'] ) ? max( 0, min( 40, (int) $attributes['cardBorderRadius'] ) ) : 16;
$image_radius = isset( $attributes['imageBorderRadius'] ) ? max( 0, min( 30, (int) $attributes['imageBorderRadius'] ) ) : 12;

$name = wp_kses( $name_raw, array( 'strong' => array(), 'em' => array() ) );

$has_image = $image_id > 0 && wp_attachment_is_image( $image_id );
$has_body  = $name !== '' || $price !== '' || $price_lbl !== '' || $location !== '' || $rating !== '';

if ( ! $has_image && ! $has_body ) {
	return;
}

if ( $image_alt === '' && $has_image ) {
	$meta_alt = get_post_meta( $image_id, '_wp_attachment_image_alt', true );
	if ( is_string( $meta_alt ) && $meta_alt !== '' ) {
		$image_alt = $meta_alt;
	}
}

$style_bits = array(
	'--nextora-hlc-card-radius:' . $card_radius . 'px',
	'--nextora-hlc-image-radius:' . $image_radius . 'px',
);

$wrapper_extra = array(
	'class' => 'nextora-hlc',
	'style' => implode( ';', $style_bits ),
);

if ( $scroll_reveal ) {
	$wrapper_extra['data-nextora-scroll-reveal'] = '1';
	nextora_hlc_enqueue_view_script();
}

$wrapper = get_block_wrapper_attributes( $wrapper_extra );

$show_meta = ( $show_location && $location !== '' ) || ( $show_rating && $rating !== '' );

$rating_sr = '';
if ( $show_rating && $rating !== '' ) {
	$rating_sr = sprintf(
		/* translators: 1: rating score, 2: review count */
		__( 'Rating: %1$s out of 5 based on %2$s reviews', 'nextora' ),
		$rating,
		$reviews !== '' ? $reviews : '0',
	);
}

$kses_svg = array(
	'svg'    => array(
		'class'       => true,
		'width'       => true,
		'height'      => true,
		'viewbox'     => true,
		'fill'        => true,
		'xmlns'       => true,
		'aria-hidden' => true,
	),
	'circle' => array(
		'cx'            => true,
		'cy'            => true,
		'r'             => true,
		'stroke'        => true,
		'stroke-width'  => true,
		'fill'          => true,
	),
	'path'   => array(
		'd'            => true,
		'fill'         => true,
		'stroke'       => true,
		'stroke-width' => true,
	),
);
?>
<div <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- get_block_wrapper_attributes().?>>
	<article class="nextora-hlc__card">
		<div class="nextora-hlc__media">
			<?php if ( $has_image ) : ?>
				<?php
				echo wp_get_attachment_image(
					$image_id,
					'large',
					false,
					array(
						'class'   => 'nextora-hlc__image',
						'loading' => 'lazy',
						'decoding' => 'async',
						'alt'     => $image_alt !== '' ? $image_alt : nextora_hlc_plain_text( $name_raw ),
					),
				);
				?>
			<?php else : ?>
				<div class="nextora-hlc__media-placeholder" aria-hidden="true"></div>
			<?php endif; ?>
		</div>

		<?php if ( $has_body ) : ?>
		<div class="nextora-hlc__body">
			<?php if ( $name !== '' || $price !== '' || $price_lbl !== '' ) : ?>
			<div class="nextora-hlc__row nextora-hlc__row--primary">
				<?php if ( $name !== '' ) : ?>
					<h3 class="nextora-hlc__name"><?php echo $name; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- wp_kses above.?></h3>
				<?php endif; ?>
				<?php if ( $price !== '' || $price_lbl !== '' ) : ?>
				<div class="nextora-hlc__price">
					<span class="screen-reader-text"><?php esc_html_e( 'Price per night:', 'nextora' ); ?></span>
					<?php if ( $price !== '' ) : ?>
						<span class="nextora-hlc__price-value"><?php echo esc_html( $price ); ?></span>
					<?php endif; ?>
					<?php if ( $price_lbl !== '' ) : ?>
						<span class="nextora-hlc__price-label"><?php echo esc_html( $price_lbl ); ?></span>
					<?php endif; ?>
				</div>
				<?php endif; ?>
			</div>
			<?php endif; ?>

			<?php if ( $show_meta ) : ?>
			<div class="nextora-hlc__row nextora-hlc__row--meta">
				<?php if ( $show_location && $location !== '' ) : ?>
					<span class="nextora-hlc__location">
						<?php echo wp_kses( nextora_hlc_icon_location_pin(), $kses_svg ); ?>
						<span class="nextora-hlc__location-text"><?php echo esc_html( $location ); ?></span>
					</span>
				<?php else : ?>
					<span></span>
				<?php endif; ?>

				<?php if ( $show_rating && $rating !== '' ) : ?>
					<span class="nextora-hlc__rating">
						<span class="screen-reader-text"><?php echo esc_html( $rating_sr ); ?></span>
						<?php echo wp_kses( nextora_hlc_icon_star(), $kses_svg ); ?>
						<span class="nextora-hlc__rating-score" aria-hidden="true"><?php echo esc_html( $rating ); ?></span>
						<span class="nextora-hlc__rating-reviews" aria-hidden="true">
							<?php
							if ( $reviews !== '' ) {
								echo esc_html(
									sprintf(
										/* translators: %s: review count */
										__( '(%s Reviews)', 'nextora' ),
										$reviews,
									),
								);
							}
							?>
						</span>
					</span>
				<?php endif; ?>
			</div>
			<?php endif; ?>
		</div>
		<?php endif; ?>
	</article>
</div>
