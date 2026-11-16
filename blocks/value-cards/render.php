<?php
/**
 * Value Cards — dynamic render (tilted card deck with 3D hover).
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_value_cards_enqueue_view_script' ) ) {
	function nextora_value_cards_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$block_type = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/value-cards' );
		if ( $block_type && ! empty( $block_type->view_script_handles ) && is_array( $block_type->view_script_handles ) ) {
			foreach ( $block_type->view_script_handles as $handle ) {
				if ( is_string( $handle ) && '' !== $handle ) {
					wp_enqueue_script( $handle );
				}
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/value-cards/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/value-cards/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-value-cards-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-value-cards-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-value-cards-view-fallback' );
		}
	}
}

if ( ! function_exists( 'nextora_value_cards_resolve_color' ) ) {
	/**
	 * Resolves a stored color string (hex or slug) to a CSS value.
	 */
	function nextora_value_cards_resolve_color( string $raw ): string {
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

if ( ! function_exists( 'nextora_value_cards_normalize_card' ) ) {
	/**
	 * Normalize a raw card item from attributes.
	 *
	 * @param array<string, mixed> $raw Raw card data.
	 *
	 * @return array<string, mixed>
	 */
	function nextora_value_cards_normalize_card( array $raw ): array {
		return array(
			'id'              => isset( $raw['id'] ) ? (string) $raw['id'] : '',
			'title'           => isset( $raw['title'] ) ? trim( (string) $raw['title'] ) : '',
			'description'     => isset( $raw['description'] ) ? trim( (string) $raw['description'] ) : '',
			'mediaType'       => isset( $raw['mediaType'] ) && 'video' === (string) $raw['mediaType'] ? 'video' : 'image',
			'mediaId'         => isset( $raw['mediaId'] ) ? (int) $raw['mediaId'] : 0,
			'mediaUrl'        => isset( $raw['mediaUrl'] ) ? trim( (string) $raw['mediaUrl'] ) : '',
			'videoPosterId'   => isset( $raw['videoPosterId'] ) ? (int) $raw['videoPosterId'] : 0,
			'videoPosterUrl'  => isset( $raw['videoPosterUrl'] ) ? trim( (string) $raw['videoPosterUrl'] ) : '',
			'rotation'        => isset( $raw['rotation'] ) ? max( -10, min( 10, (float) $raw['rotation'] ) ) : 0.0,
		);
	}
}

/** @var list<array<string, mixed>> $cards */
$cards = array();
if ( isset( $attributes['cards'] ) && is_array( $attributes['cards'] ) ) {
	foreach ( $attributes['cards'] as $raw ) {
		if ( ! is_array( $raw ) ) {
			continue;
		}
		$normalized = nextora_value_cards_normalize_card( $raw );
		// Allow cards with media but no title, and vice versa
		if ( '' !== $normalized['title'] || '' !== $normalized['mediaUrl'] || $normalized['mediaId'] > 0 ) {
			$cards[] = $normalized;
		}
	}
}

if ( array() === $cards ) {
	return;
}

$max_tilt          = isset( $attributes['maxTilt'] ) ? max( 2, min( 30, (float) $attributes['maxTilt'] ) ) : 12.0;
$hover_scale       = isset( $attributes['hoverScale'] ) ? max( 1.0, min( 1.2, (float) $attributes['hoverScale'] ) ) : 1.06;
$card_min_width    = isset( $attributes['cardMinWidth'] ) ? max( 120, min( 400, (int) $attributes['cardMinWidth'] ) ) : 180;
$card_max_width    = isset( $attributes['cardMaxWidth'] ) ? max( 160, min( 600, (int) $attributes['cardMaxWidth'] ) ) : 240;
$card_border_radius = isset( $attributes['cardBorderRadius'] ) ? max( 0, min( 40, (int) $attributes['cardBorderRadius'] ) ) : 20;
$perspective       = isset( $attributes['perspective'] ) ? max( 400, min( 2000, (int) $attributes['perspective'] ) ) : 1000;
$gap               = isset( $attributes['gap'] ) ? max( 0, min( 60, (int) $attributes['gap'] ) ) : 20;

// Color attributes
$color_keys = array(
	'cardBackgroundColor'  => '--nextora-value-card-bg',
	'cardTitleColor'       => '--nextora-value-card-title-color',
	'cardDescriptionColor' => '--nextora-value-card-desc-color',
	'cardBorderColor'      => '--nextora-value-card-border-color',
);

$css_vars = array(
	'--nextora-value-cards-perspective' => $perspective . 'px',
	'--nextora-value-cards-gap'         => $gap . 'px',
	'--nextora-value-cards-min-width'   => $card_min_width . 'px',
	'--nextora-value-cards-max-width'   => $card_max_width . 'px',
	'--nextora-value-cards-radius'      => $card_border_radius . 'px',
	'--nextora-value-cards-max-tilt'    => (string) $max_tilt,
	'--nextora-value-cards-hover-scale' => (string) $hover_scale,
);

foreach ( $color_keys as $attr_key => $var_name ) {
	$raw = isset( $attributes[ $attr_key ] ) ? (string) $attributes[ $attr_key ] : '';
	if ( 'currentColor' === $raw || '' === $raw ) {
		continue;
	}
	$resolved = nextora_value_cards_resolve_color( $raw );
	if ( '' !== $resolved && 'currentColor' !== $resolved ) {
		$css_vars[ $var_name ] = $resolved;
	}
}

$style_parts = array();
foreach ( $css_vars as $key => $value ) {
	$style_parts[] = $key . ':' . $value;
}
$inline_style = implode( ';', $style_parts );

$wrapper_classes = array( 'nextora-value-cards' );
$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => implode( ' ', $wrapper_classes ),
		'style' => $inline_style,
	),
);

nextora_value_cards_enqueue_view_script();

?>
<div <?php echo $wrapper_attributes; ?>>
	<div class="nextora-value-cards__inner">
		<div class="nextora-value-cards__deck">
			<?php foreach ( $cards as $card ) : ?>
				<article
					class="nextora-value-cards__card"
					data-rotation="<?php echo esc_attr( (string) $card['rotation'] ); ?>"
					data-vc-title="<?php echo esc_attr( $card['title'] ); ?>"
					data-vc-description="<?php echo esc_attr( $card['description'] ); ?>"
					data-vc-media-type="<?php echo esc_attr( $card['mediaType'] ); ?>"
					data-vc-media-url="<?php echo esc_url( $card['mediaUrl'] ); ?>"
					<?php if ( '' !== $card['videoPosterUrl'] ) : ?>
					data-vc-video-poster-url="<?php echo esc_url( $card['videoPosterUrl'] ); ?>"
					<?php endif; ?>
					style="--ncvc-rotation: <?php echo esc_attr( (string) $card['rotation'] ); ?>deg;"
				>
					<div class="nextora-value-cards__media">
						<?php if ( '' !== $card['mediaUrl'] ) : ?>
							<?php if ( 'video' === $card['mediaType'] ) : ?>
								<video
									src="<?php echo esc_url( $card['mediaUrl'] ); ?>"
									autoplay
									loop
									muted
									playsinline
									<?php if ( '' !== $card['videoPosterUrl'] ) : ?>
									poster="<?php echo esc_url( $card['videoPosterUrl'] ); ?>"
									<?php endif; ?>
								></video>
							<?php else : ?>
								<img
									src="<?php echo esc_url( $card['mediaUrl'] ); ?>"
									alt=""
									loading="lazy"
									decoding="async"
								/>
							<?php endif; ?>
						<?php elseif ( $card['mediaId'] > 0 ) : ?>
							<?php echo wp_get_attachment_image(
								$card['mediaId'],
								'medium_large',
								false,
								array(
									'class'    => '',
									'loading'  => 'lazy',
									'decoding' => 'async',
									'alt'      => '',
								),
							); ?>
						<?php endif; ?>
					</div>
					<div class="nextora-value-cards__content">
						<h3 class="nextora-value-cards__title"><?php echo esc_html( $card['title'] ); ?></h3>
						<?php if ( '' !== trim( (string) $card['description'] ) ) : ?>
							<p class="nextora-value-cards__description"><?php echo esc_html( $card['description'] ); ?></p>
						<?php endif; ?>
					</div>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</div>
