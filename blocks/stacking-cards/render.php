<?php
/** @var array<string, mixed> $attributes */

declare( strict_types=1 );

$cards = $attributes['cards'] ?? array();
if ( ! is_array( $cards ) || empty( $cards ) ) {
	return;
}

if ( ! function_exists( 'nextora_stacking_cards_normalize_font_size' ) ) {
	/**
	 * Normalizes font size name to standard theme font size slug.
	 */
	function nextora_stacking_cards_normalize_font_size( string $size ): string {
		$size = trim( strtolower( $size ) );
		if ( '' === $size ) {
			return '';
		}
		$map = array(
			'sm'          => 'small',
			'small'       => 'small',
			'base'        => 'base',
			'normal'      => 'base',
			'md'          => 'medium',
			'medium'      => 'medium',
			'medium-plus' => 'medium-plus',
			'lg'          => 'large',
			'large'       => 'large',
			'xl'          => 'x-large',
			'x-large'     => 'x-large',
			'2xl'         => 'xx-large',
			'xx-large'    => 'xx-large',
		);
		return isset( $map[ $size ] ) ? $map[ $size ] : sanitize_html_class( $size );
	}
}

if ( ! function_exists( 'nextora_stacking_cards_get_color_props' ) ) {
	/**
	 * Resolves a stored color attribute into standard Gutenberg classes and inline style.
	 *
	 * @param string $color Attribute value (slug, preset string, or hex/rgb).
	 * @param string $type  'color' (for text), 'background', or 'border'.
	 *
	 * @return array{class: string, style: string, slug: string, value: string}
	 */
	function nextora_stacking_cards_get_color_props( string $color, string $type = 'color' ): array {
		$color = trim( $color );
		if ( '' === $color || 'inherit' === $color || 'currentColor' === $color ) {
			return array(
				'class' => '',
				'style' => '',
				'slug'  => '',
				'value' => '',
			);
		}

		if (
			'transparent' === $color ||
			'rgba(0, 0, 0, 0)' === $color ||
			'rgba(0,0,0,0)' === $color ||
			preg_match( '/^#[0-9a-f]{6}00$/i', $color ) ||
			preg_match( '/^#[0-9a-f]{3}0$/i', $color )
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

		if ( 'border' === $type ) {
			$val = '' !== $slug ? 'var(--wp--preset--color--' . $slug . ')' : $color;
			return array(
				'class' => '',
				'style' => 'border-color:' . esc_attr( $val ) . ';',
				'slug'  => $slug,
				'value' => $val,
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
		return array(
			'class' => 'has-text-color',
			'style' => 'color:' . esc_attr( $color ) . ';',
			'slug'  => '',
			'value' => $color,
		);
	}
}

$num = static function ( string $key, int $default, int $min, int $max ) use ( $attributes ): int {
	$value = isset( $attributes[ $key ] ) ? absint( $attributes[ $key ] ) : $default;
	return max( $min, min( $max, $value ) );
};

$card_height         = $num( 'cardHeight', 520, 280, 760 );
$card_gap            = $num( 'cardGap', 32, 0, 120 );
$stack_offset        = $num( 'stackOffset', 24, 0, 80 );
$sticky_top_offset   = $num( 'stickyTopOffset', 24, 0, 160 );
$card_radius         = $num( 'cardRadius', 20, 0, 40 );
$content_padding     = $num( 'contentPadding', 48, 16, 96 );
$image_width         = $num( 'imageWidth', 50, 30, 70 );
$mobile_height       = $num( 'mobileCardHeight', 460, 240, 700 );
$mobile_padding      = $num( 'mobileContentPadding', 24, 12, 56 );
$mobile_image_height = $num( 'mobileImageHeight', 240, 140, 420 );
$mobile_offset       = $num( 'mobileStackOffset', 16, 0, 48 );

$heading_size     = nextora_stacking_cards_normalize_font_size( (string) ( $attributes['headingSize'] ?? '' ) );
$description_size = nextora_stacking_cards_normalize_font_size( (string) ( $attributes['descriptionSize'] ?? '' ) );
$link_size        = nextora_stacking_cards_normalize_font_size( (string) ( $attributes['linkSize'] ?? '' ) );
$weight           = in_array( (string) ( $attributes['headingWeight'] ?? '' ), array( '400', '500', '600', '700', '800' ), true ) ? (string) $attributes['headingWeight'] : '';
$fit              = 'contain' === ( $attributes['imageObjectFit'] ?? 'cover' ) ? 'contain' : 'cover';

$block_card_bg_props = nextora_stacking_cards_get_color_props( (string) ( $attributes['cardBackgroundColor'] ?? '' ), 'background' );
$block_heading_props = nextora_stacking_cards_get_color_props( (string) ( $attributes['headingColor'] ?? '' ), 'color' );
$block_desc_props    = nextora_stacking_cards_get_color_props( (string) ( $attributes['descriptionColor'] ?? '' ), 'color' );
$block_link_props    = nextora_stacking_cards_get_color_props( (string) ( $attributes['linkColor'] ?? '' ), 'color' );

$css = array(
	'--nextora-sc-card-height:' . $card_height . 'px',
	'--nextora-sc-card-gap:' . $card_gap . 'px',
	'--nextora-sc-stack-offset:' . $stack_offset . 'px',
	'--nextora-sc-card-radius:' . $card_radius . 'px',
	'--nextora-sc-content-padding:' . $content_padding . 'px',
	'--nextora-sc-image-width:' . $image_width . '%',
	'--nextora-sc-sticky-top-offset:' . $sticky_top_offset . 'px',
	'--nextora-sc-mobile-height:' . $mobile_height . 'px',
	'--nextora-sc-mobile-padding:' . $mobile_padding . 'px',
	'--nextora-sc-mobile-image-height:' . $mobile_image_height . 'px',
	'--nextora-sc-mobile-offset:' . $mobile_offset . 'px',
	'--nextora-sc-content-max-width:' . esc_attr( sanitize_text_field( $attributes['contentMaxWidth'] ?? '1200px' ) ),
	'--nextora-sc-image-fit:' . $fit,
);

if ( '' !== $block_card_bg_props['value'] ) {
	$css[] = '--nextora-sc-card-bg:' . $block_card_bg_props['value'];
}
if ( '' !== $block_heading_props['value'] ) {
	$css[] = '--nextora-sc-heading-color:' . $block_heading_props['value'];
}
if ( '' !== $block_desc_props['value'] ) {
	$css[] = '--nextora-sc-description-color:' . $block_desc_props['value'];
}
if ( '' !== $block_link_props['value'] ) {
	$css[] = '--nextora-sc-link-color:' . $block_link_props['value'];
}

$classes = array( 'wp-block-nextora-stacking-cards' );
if ( false !== ( $attributes['enableSticky'] ?? true ) ) {
	$classes[] = 'nextora-stacking-cards--sticky';
}
if ( true === ( $attributes['enableScrollAnimation'] ?? true ) ) {
	$classes[] = 'has-scroll-animation';
	$classes[] = 'is-visible';
}

$wrapper = get_block_wrapper_attributes(
	array(
		'class'                      => implode( ' ', $classes ),
		'style'                      => implode( ';', $css ),
		'data-nextora-scroll-reveal' => ( true === ( $attributes['enableScrollAnimation'] ?? true ) ) ? '1' : '0',
	),
);

$show_link = false !== ( $attributes['showLink'] ?? true );
$new_tab   = true === ( $attributes['openLinksInNewTab'] ?? false );
?>
<div <?php echo $wrapper; ?>>
	<div class="nextora-stacking-cards__list">
		<?php
		foreach ( $cards as $index => $card ) :
			if ( ! is_array( $card ) ) {
				continue;
			}
			$heading     = sanitize_text_field( $card['heading'] ?? '' );
			$description = sanitize_textarea_field( $card['description'] ?? '' );
			$link_text   = sanitize_text_field( $card['linkText'] ?? 'Read more' );
			$link_url    = esc_url( $card['linkUrl'] ?? '' );
			$image_id    = absint( $card['imageId'] ?? 0 );
			$image_url   = esc_url( $card['imageUrl'] ?? '' );
			$image_alt   = sanitize_text_field( $card['imageAlt'] ?? '' );
			$image       = '';

			$raw_card_bg    = ! empty( $card['backgroundColor'] ) ? (string) $card['backgroundColor'] : (string) ( $attributes['cardBackgroundColor'] ?? '' );
			$raw_head_color = ! empty( $card['headingColor'] ) ? (string) $card['headingColor'] : (string) ( $attributes['headingColor'] ?? '' );
			$raw_desc_color = ! empty( $card['descriptionColor'] ) ? (string) $card['descriptionColor'] : (string) ( $attributes['descriptionColor'] ?? '' );
			$raw_link_color = ! empty( $card['linkColor'] ) ? (string) $card['linkColor'] : (string) ( $attributes['linkColor'] ?? '' );

			$card_bg_props   = nextora_stacking_cards_get_color_props( $raw_card_bg, 'background' );
			$card_head_props = nextora_stacking_cards_get_color_props( $raw_head_color, 'color' );
			$card_desc_props = nextora_stacking_cards_get_color_props( $raw_desc_color, 'color' );
			$card_link_props = nextora_stacking_cards_get_color_props( $raw_link_color, 'color' );

			// Card classes and styles
			$card_classes = array( 'nextora-stacking-cards__card' );
			if ( '' !== $card_bg_props['class'] ) {
				$card_classes[] = $card_bg_props['class'];
			}
			$card_styles = array(
				'--nextora-sc-index:' . $index,
			);
			if ( '' !== $card_bg_props['style'] ) {
				$card_styles[] = $card_bg_props['style'];
			}

			// Heading classes and styles
			$head_classes = array( 'nextora-stacking-cards__heading' );
			if ( '' !== $heading_size ) {
				$head_classes[] = 'has-' . sanitize_html_class( $heading_size ) . '-font-size';
			}
			if ( '' !== $card_head_props['class'] ) {
				$head_classes[] = $card_head_props['class'];
			}
			$head_styles = array();
			if ( '' !== $card_head_props['style'] ) {
				$head_styles[] = $card_head_props['style'];
			}
			if ( '' !== $weight ) {
				$head_styles[] = 'font-weight:' . $weight . ';';
			}

			// Description classes and styles
			$desc_classes = array( 'nextora-stacking-cards__description' );
			if ( '' !== $description_size ) {
				$desc_classes[] = 'has-' . sanitize_html_class( $description_size ) . '-font-size';
			}
			if ( '' !== $card_desc_props['class'] ) {
				$desc_classes[] = $card_desc_props['class'];
			}
			$desc_styles = array();
			if ( '' !== $card_desc_props['style'] ) {
				$desc_styles[] = $card_desc_props['style'];
			}

			// Link classes and styles
			$link_classes = array( 'nextora-stacking-cards__link' );
			if ( '' !== $link_size ) {
				$link_classes[] = 'has-' . sanitize_html_class( $link_size ) . '-font-size';
			}
			if ( '' !== $card_link_props['class'] ) {
				$link_classes[] = $card_link_props['class'];
			}
			$link_styles = array();
			if ( '' !== $card_link_props['style'] ) {
				$link_styles[] = $card_link_props['style'];
			}

			if ( $image_id > 0 ) {
				$image = wp_get_attachment_image(
					$image_id,
					'large',
					false,
					array(
						'class'   => 'nextora-stacking-cards__image',
						'alt'     => $image_alt,
						'loading' => 0 === $index ? 'eager' : 'lazy',
					),
				);
			}
			if ( ! is_string( $image ) || '' === $image ) {
				$image = '' !== $image_url ? sprintf(
					'<img class="nextora-stacking-cards__image" src="%s" alt="%s" loading="%s" />',
					$image_url,
					esc_attr( $image_alt ),
					0 === $index ? 'eager' : 'lazy',
				) : '';
			}
			?>
			<article class="<?php echo esc_attr( implode( ' ', $card_classes ) ); ?>" style="<?php echo esc_attr( implode( ';', $card_styles ) ); ?>">
				<div class="nextora-stacking-cards__content">
					<h2 class="<?php echo esc_attr( implode( ' ', $head_classes ) ); ?>"<?php echo ! empty( $head_styles ) ? ' style="' . esc_attr( implode( ';', $head_styles ) ) . '"' : ''; ?>><?php echo esc_html( $heading ); ?></h2>
					<?php if ( '' !== $description ) : ?>
						<p class="<?php echo esc_attr( implode( ' ', $desc_classes ) ); ?>"<?php echo ! empty( $desc_styles ) ? ' style="' . esc_attr( implode( ';', $desc_styles ) ) . '"' : ''; ?>><?php echo esc_html( $description ); ?></p>
					<?php endif; ?>
					<?php if ( $show_link && '' !== $link_url && '' !== $link_text ) : ?>
						<a class="<?php echo esc_attr( implode( ' ', $link_classes ) ); ?>" href="<?php echo $link_url; ?>"<?php echo ! empty( $link_styles ) ? ' style="' . esc_attr( implode( ';', $link_styles ) ) . '"' : ''; ?><?php echo $new_tab ? ' target="_blank" rel="noopener noreferrer"' : ''; ?>>
							<?php echo esc_html( $link_text ); ?><span aria-hidden="true">&#8599;</span>
						</a>
					<?php endif; ?>
				</div>
				<div class="nextora-stacking-cards__media">
					<?php echo $image; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
				</div>
			</article>
		<?php endforeach; ?>
	</div>
</div>
