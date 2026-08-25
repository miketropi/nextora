<?php
/**
 * Expanding Cards — dynamic block render template.
 *
 * @var array<string, mixed> $attributes Block attributes defined in block.json.
 * @var string               $content    Inner blocks HTML (empty for this block).
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

$cards = $attributes['cards'] ?? array();
if ( ! is_array( $cards ) || empty( $cards ) ) {
	return;
}

$card_height                = absint( $attributes['cardHeight'] ?? 400 );
$card_gap                   = absint( $attributes['cardGap'] ?? 10 );
$card_radius                = absint( $attributes['cardBorderRadius'] ?? 12 );
$inactive_opacity           = (float) ( $attributes['inactiveOverlayOpacity'] ?? 0.7 );
$content_padding_y          = absint( $attributes['contentPaddingY'] ?? 24 );
$content_padding_x          = absint( $attributes['contentPaddingX'] ?? 24 );
$heading_size               = sanitize_text_field( $attributes['headingSize'] ?? 'medium' );
$description_size           = sanitize_text_field( $attributes['descriptionSize'] ?? 'small' );
$button_size                = sanitize_text_field( $attributes['buttonSize'] ?? 'small' );
$enable_scroll              = $attributes['enableScrollAnimation'] ?? true;
$active_card_index          = (int) ( $attributes['activeCardIndex'] ?? 0 );
$card_gap     = max( 0, min( 30, $card_gap ) );
$card_radius  = max( 0, min( 24, $card_radius ) );
$inactive_opacity = max( 0, min( 1, $inactive_opacity ) );
$content_padding_y = max( 8, min( 80, $content_padding_y ) );
$content_padding_x = max( 8, min( 80, $content_padding_x ) );

$valid_font_sizes = array( 'small', 'base', 'medium', 'medium-plus', 'large', 'x-large', 'xx-large' );
if ( ! in_array( $heading_size, $valid_font_sizes, true ) ) {
	$heading_size = 'medium';
}
if ( ! in_array( $description_size, $valid_font_sizes, true ) ) {
	$description_size = 'small';
}
if ( ! in_array( $button_size, $valid_font_sizes, true ) ) {
	$button_size = 'small';
}

if ( ! function_exists( 'nextora_expcards_resolve_color' ) ) {
	function nextora_expcards_resolve_color( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}
		if ( 'transparent' === $raw ) {
			return 'transparent';
		}
		if ( preg_match( '/^#[0-9a-fA-F]{8}$/', $raw ) ) {
			return $raw;
		}
		$hex = sanitize_hex_color( $raw );
		if ( is_string( $hex ) && '' !== $hex ) {
			return $hex;
		}
		if ( str_starts_with( $raw, 'var:preset|color|' ) ) {
			$slug = str_replace( 'var:preset|color|', '', $raw );
			return 'var(--wp--preset--color--' . sanitize_html_class( $slug ) . ')';
		}
		return 'var(--wp--preset--color--' . sanitize_html_class( $raw ) . ')';
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

$heading_c      = nextora_expcards_resolve_color( $attributes['headingColor'] ?? '' );
$description_c  = nextora_expcards_resolve_color( $attributes['descriptionColor'] ?? '' );
$overlay_c      = nextora_expcards_resolve_color( $attributes['overlayBackgroundColor'] ?? '' );
$btn_text_c     = nextora_expcards_resolve_color( $attributes['buttonTextColor'] ?? '' );
$btn_bg_c       = nextora_expcards_resolve_color( $attributes['buttonBackgroundColor'] ?? '' );
$btn_border_c   = nextora_expcards_resolve_color( $attributes['buttonBorderColor'] ?? '' );

$placeholder_url = (string) get_theme_file_uri( 'assets/images/placeholder/general-img-square.png' );

$css_vars = array();

if ( '' !== $heading_c ) {
	$css_vars[] = '--nextora-ec-heading-color: ' . $heading_c;
}
if ( '' !== $description_c ) {
	$css_vars[] = '--nextora-ec-description-color: ' . $description_c;
}
if ( '' !== $overlay_c ) {
	$css_vars[] = '--nextora-ec-overlay-bg: ' . $overlay_c;
}
if ( '' !== $btn_text_c ) {
	$css_vars[] = '--nextora-ec-button-text-color: ' . $btn_text_c;
}
if ( '' !== $btn_bg_c ) {
	$css_vars[] = '--nextora-ec-button-bg-color: ' . $btn_bg_c;
}
if ( '' !== $btn_border_c ) {
	$css_vars[] = '--nextora-ec-button-border-color: ' . $btn_border_c;
}

$css_vars[] = '--nextora-ec-height: ' . $card_height . 'px';
$css_vars[] = '--nextora-ec-gap: ' . $card_gap . 'px';
$css_vars[] = '--nextora-ec-radius: ' . $card_radius . 'px';
$css_vars[] = '--nextora-ec-overlay-opacity: ' . $inactive_opacity;
$css_vars[] = '--nextora-ec-content-padding-y: ' . $content_padding_y . 'px';
$css_vars[] = '--nextora-ec-content-padding-x: ' . $content_padding_x . 'px';
$css_vars[] = '--nextora-ec-heading-size: var(--wp--preset--font-size--' . esc_attr( $heading_size ) . ')';
$css_vars[] = '--nextora-ec-description-size: var(--wp--preset--font-size--' . esc_attr( $description_size ) . ')';
$css_vars[] = '--nextora-ec-button-size: var(--wp--preset--font-size--' . esc_attr( $button_size ) . ')';

$css_vars_string = implode( '; ', $css_vars );

$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'data-nextora-scroll-reveal' => $enable_scroll ? '1' : '0',
		'style'                      => $css_vars_string,
	),
);

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
?>

<div <?php echo $wrapper_attributes; ?>>
	<div class="nextora-expanding-cards__row">
		<?php foreach ( $cards as $index => $card ) : ?>
			<?php
			$card_id      = sanitize_html_class( $card['id'] ?? '' );
			$heading      = wp_kses_post( $card['heading'] ?? '' );
			$description  = wp_kses_post( $card['description'] ?? '' );
			$button_text  = esc_html( $card['buttonText'] ?? __( 'Start adoption', 'nextora' ) );
			$button_url   = esc_url( $card['buttonUrl'] ?? '#' );
			$image_url    = nextora_expcards_get_image_url( $card, $placeholder_url );
			$image_alt    = esc_attr( $card['imageAlt'] ?? '' );
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
						<span class="nextora-expanding-cards__card-heading"><?php echo $heading; ?></span>
					<?php endif; ?>
					<?php if ( '' !== $description ) : ?>
						<span class="nextora-expanding-cards__card-description"><?php echo $description; ?></span>
					<?php endif; ?>
					<?php if ( '' !== $button_text ) : ?>
						<a
							class="nextora-expanding-cards__card-button"
							href="<?php echo $button_url; ?>"
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
