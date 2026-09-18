<?php
/**
 * Expanding Cards — dynamic block render template.
 *
 * @var array<string, mixed> $attributes Block attributes defined in block.json.
 * @var string               $content    Inner blocks HTML (empty for this block).
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_expcards_enqueue_view_script' ) ) {
	/**
	 * Ensure view script is queued for scroll reveal.
	 */
	function nextora_expcards_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$block_type = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/expanding-cards' );
		if ( $block_type && ! empty( $block_type->view_script_handles ) && is_array( $block_type->view_script_handles ) ) {
			foreach ( $block_type->view_script_handles as $handle ) {
				if ( is_string( $handle ) && '' !== $handle ) {
					wp_enqueue_script( $handle );
				}
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/expanding-cards/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/expanding-cards/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-expanding-cards-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-expanding-cards-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-expanding-cards-view-fallback' );
		}
	}
}

nextora_expcards_enqueue_view_script();

$cards = $attributes['cards'] ?? array();
if ( ! is_array( $cards ) || empty( $cards ) ) {
	return;
}

$card_height       = absint( $attributes['cardHeight'] ?? 400 );
$card_gap          = absint( $attributes['cardGap'] ?? 10 );
$card_radius       = absint( $attributes['cardBorderRadius'] ?? 12 );
$inactive_opacity  = (float) ( $attributes['inactiveOverlayOpacity'] ?? 0.7 );
$content_padding_y = absint( $attributes['contentPaddingY'] ?? 24 );
$content_padding_x = absint( $attributes['contentPaddingX'] ?? 24 );
$raw_heading_size  = sanitize_text_field( (string) ( $attributes['headingSize'] ?? '' ) );
$raw_desc_size     = sanitize_text_field( (string) ( $attributes['descriptionSize'] ?? '' ) );
$raw_btn_size      = sanitize_text_field( (string) ( $attributes['buttonSize'] ?? '' ) );
$enable_scroll     = $attributes['enableScrollAnimation'] ?? true;
$active_card_index = (int) ( $attributes['activeCardIndex'] ?? 0 );

$card_gap          = max( 0, min( 30, $card_gap ) );
$card_radius       = max( 0, min( 24, $card_radius ) );
$inactive_opacity  = max( 0, min( 1, $inactive_opacity ) );
$content_padding_y = max( 8, min( 80, $content_padding_y ) );
$content_padding_x = max( 8, min( 80, $content_padding_x ) );

if ( ! function_exists( 'nextora_expcards_normalize_font_size' ) ) {
	/**
	 * Normalizes font size name to standard theme font size slug.
	 */
	function nextora_expcards_normalize_font_size( string $size ): string {
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

$heading_size     = nextora_expcards_normalize_font_size( $raw_heading_size );
$description_size = nextora_expcards_normalize_font_size( $raw_desc_size );
$button_size      = nextora_expcards_normalize_font_size( $raw_btn_size );

if ( ! function_exists( 'nextora_expcards_get_color_props' ) ) {
	/**
	 * Resolves stored color attribute into standard Gutenberg classes and inline style.
	 *
	 * @param string $color Attribute value (slug, preset string, or hex/rgb).
	 * @param string $type  'color' (for text), 'background', or 'border'.
	 *
	 * @return array{class: string, style: string, slug: string, value: string}
	 */
	function nextora_expcards_get_color_props( string $color, string $type = 'color' ): array {
		$color = trim( $color );
		if ( '' === $color ) {
			return array( 'class' => '', 'style' => '', 'slug' => '', 'value' => '' );
		}

		// Direct transparent keyword or 0-alpha rgba/hex
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

		// Extract preset slug if present
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

if ( ! function_exists( 'nextora_expcards_paw_print_svg' ) ) {
	function nextora_expcards_paw_print_svg( string $class = '' ): string {
		$class_attr = '' !== $class ? ' class="' . esc_attr( $class ) . '"' : '';

		return sprintf(
			'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"'
			. ' fill="none" stroke="currentColor" stroke-width="2"'
			. ' stroke-linecap="round" stroke-linejoin="round"'
			. '%1$s aria-hidden="true">'
			. '<circle cx="11" cy="4" r="2"/>'
			. '<circle cx="18" cy="8" r="2"/>'
			. '<circle cx="20" cy="16" r="2"/>'
			. '<path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/>'
			. '</svg>',
			$class_attr,
		);
	}
}

if ( ! function_exists( 'nextora_expcards_get_image_url' ) ) {
	/**
	 * @param array<string, mixed> $item
	 */
	function nextora_expcards_get_image_url( array $item, string $placeholder_url ): string {
		$image_id  = isset( $item['imageId'] ) ? (int) $item['imageId'] : 0;
		$image_url = isset( $item['imageUrl'] ) ? trim( (string) $item['imageUrl'] ) : '';

		if ( $image_id > 0 ) {
			$url = wp_get_attachment_url( $image_id );
			if ( is_string( $url ) && '' !== $url ) {
				return $url;
			}
		}

		if ( '' !== $image_url ) {
			return $image_url;
		}

		return $placeholder_url;
	}
}

$heading_color_props  = nextora_expcards_get_color_props( (string) ( $attributes['headingColor'] ?? '' ), 'color' );
$desc_color_props     = nextora_expcards_get_color_props( (string) ( $attributes['descriptionColor'] ?? '' ), 'color' );
$overlay_color_props  = nextora_expcards_get_color_props( (string) ( $attributes['overlayBackgroundColor'] ?? '' ), 'background' );
$btn_text_color_props = nextora_expcards_get_color_props( (string) ( $attributes['buttonTextColor'] ?? '' ), 'color' );
$btn_bg_color_props   = nextora_expcards_get_color_props( (string) ( $attributes['buttonBackgroundColor'] ?? '' ), 'background' );
$btn_border_props     = nextora_expcards_get_color_props( (string) ( $attributes['buttonBorderColor'] ?? '' ), 'border' );

$placeholder_url = (string) get_theme_file_uri( 'assets/images/placeholder/general-img-square.png' );

$css_vars = array();

$css_vars[] = '--nextora-ec-height: ' . $card_height . 'px';
$css_vars[] = '--nextora-ec-gap: ' . $card_gap . 'px';
$css_vars[] = '--nextora-ec-radius: ' . $card_radius . 'px';
$css_vars[] = '--nextora-ec-overlay-opacity: ' . $inactive_opacity;
$css_vars[] = '--nextora-ec-content-padding-y: ' . $content_padding_y . 'px';
$css_vars[] = '--nextora-ec-content-padding-x: ' . $content_padding_x . 'px';

if ( '' !== $overlay_color_props['value'] ) {
	$css_vars[] = '--nextora-ec-overlay-bg: ' . $overlay_color_props['value'];
}
if ( '' !== $heading_color_props['value'] ) {
	$css_vars[] = '--nextora-ec-heading-color: ' . $heading_color_props['value'];
}
if ( '' !== $desc_color_props['value'] ) {
	$css_vars[] = '--nextora-ec-description-color: ' . $desc_color_props['value'];
}
if ( '' !== $btn_text_color_props['value'] ) {
	$css_vars[] = '--nextora-ec-button-text-color: ' . $btn_text_color_props['value'];
}
if ( '' !== $btn_bg_color_props['value'] ) {
	$css_vars[] = '--nextora-ec-button-bg-color: ' . $btn_bg_color_props['value'];
}
if ( '' !== $btn_border_props['value'] ) {
	$css_vars[] = '--nextora-ec-button-border-color: ' . $btn_border_props['value'];
}

$css_vars_string = implode( '; ', $css_vars );

$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'data-nextora-scroll-reveal' => $enable_scroll ? '1' : '0',
		'style'                      => $css_vars_string,
	),
);

// Pre-compute card element classes and styles
$heading_classes = array( 'nextora-expanding-cards__card-heading' );
if ( '' !== $heading_size ) {
	$heading_classes[] = 'has-' . sanitize_html_class( $heading_size ) . '-font-size';
}
if ( '' !== $heading_color_props['class'] ) {
	$heading_classes[] = $heading_color_props['class'];
}
$heading_class_attr = implode( ' ', $heading_classes );
$heading_style_attr = '' !== $heading_color_props['style'] ? ' style="' . esc_attr( $heading_color_props['style'] ) . '"' : '';

$desc_classes = array( 'nextora-expanding-cards__card-description' );
if ( '' !== $description_size ) {
	$desc_classes[] = 'has-' . sanitize_html_class( $description_size ) . '-font-size';
}
if ( '' !== $desc_color_props['class'] ) {
	$desc_classes[] = $desc_color_props['class'];
}
$desc_class_attr = implode( ' ', $desc_classes );
$desc_style_attr = '' !== $desc_color_props['style'] ? ' style="' . esc_attr( $desc_color_props['style'] ) . '"' : '';

$btn_classes = array( 'nextora-expanding-cards__card-button', 'wp-element-button' );
if ( '' !== $button_size ) {
	$btn_classes[] = 'has-' . sanitize_html_class( $button_size ) . '-font-size';
}
if ( '' !== $btn_text_color_props['class'] ) {
	$btn_classes[] = $btn_text_color_props['class'];
}
if ( '' !== $btn_bg_color_props['class'] ) {
	$btn_classes[] = $btn_bg_color_props['class'];
}
$btn_class_attr = implode( ' ', $btn_classes );

$btn_inline_styles = array();
if ( '' !== $btn_text_color_props['style'] ) {
	$btn_inline_styles[] = $btn_text_color_props['style'];
}
if ( '' !== $btn_bg_color_props['style'] ) {
	$btn_inline_styles[] = $btn_bg_color_props['style'];
}
if ( '' !== $btn_border_props['style'] ) {
	$btn_inline_styles[] = $btn_border_props['style'];
}
$btn_style_attr = ! empty( $btn_inline_styles ) ? ' style="' . esc_attr( implode( ' ', $btn_inline_styles ) ) . '"' : '';
?>

<div <?php echo $wrapper_attributes; ?>>
	<div class="nextora-expanding-cards__row">
		<?php foreach ( $cards as $index => $card ) : ?>
			<?php
			$heading      = wp_kses_post( $card['heading'] ?? '' );
			$description  = wp_kses_post( $card['description'] ?? '' );
			$button_text  = esc_html( $card['buttonText'] ?? __( 'Start adoption', 'nextora' ) );
			$button_url   = esc_url( $card['buttonUrl'] ?? '#' );
			$image_url    = nextora_expcards_get_image_url( $card, $placeholder_url );
			$safe_img_url = esc_url( $image_url );
			$is_active    = ( $index === $active_card_index );
			$card_class   = 'nextora-expanding-cards__card';
			if ( $is_active ) {
				$card_class .= ' nextora-expanding-cards__card--active';
			}
			?>
			<div class="<?php echo esc_attr( $card_class ); ?>">
				<span
					class="nextora-expanding-cards__card-bg"
					aria-hidden="true"
					style="background-image: url(<?php echo $safe_img_url; ?>);"
				></span>
				<span class="nextora-expanding-cards__card-overlay" aria-hidden="true"></span>
				<span class="nextora-expanding-cards__card-content">
					<?php if ( '' !== $heading ) : ?>
						<h4 class="<?php echo esc_attr( $heading_class_attr ); ?>"<?php echo $heading_style_attr; ?>><?php echo $heading; ?></h4>
					<?php endif; ?>
					<?php if ( '' !== $description ) : ?>
						<p class="<?php echo esc_attr( $desc_class_attr ); ?>"<?php echo $desc_style_attr; ?>><?php echo $description; ?></p>
					<?php endif; ?>
					<?php if ( '' !== $button_text ) : ?>
						<a
							class="<?php echo esc_attr( $btn_class_attr ); ?>"
							href="<?php echo $button_url; ?>"
							<?php echo $btn_style_attr; ?>
						>
							<?php echo nextora_expcards_paw_print_svg( 'nextora-expanding-cards__card-button-icon' ); ?>
							<?php echo $button_text; ?>
						</a>
					<?php endif; ?>
				</span>
			</div>
		<?php endforeach; ?>
	</div>
</div>
