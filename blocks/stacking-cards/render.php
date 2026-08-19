<?php
/** @var array<string, mixed> $attributes */

declare( strict_types=1 );

$cards = $attributes['cards'] ?? array();
if ( ! is_array( $cards ) || empty( $cards ) ) {
	return;
}

function nextora_sc_color( mixed $value ): string {
	$raw = trim( (string) $value );
	if ( '' === $raw ) {
		return '';
	}
	if ( preg_match( '/^var:preset\|color\|([a-z0-9_-]+)$/i', $raw, $match ) ) {
		return 'var(--wp--preset--color--' . sanitize_html_class( $match[1] ) . ')';
	}
	if ( preg_match( '/^#[0-9a-fA-F]{8}$/', $raw ) ) {
		return $raw;
	}
	$hex = sanitize_hex_color( $raw );
	if ( is_string( $hex ) && '' !== $hex ) {
		return $hex;
	}
	if ( preg_match( '/^[a-z0-9_-]+$/i', $raw ) ) {
		return 'var(--wp--preset--color--' . sanitize_html_class( $raw ) . ')';
	}
	return '';
}

$num = static function ( string $key, int $default, int $min, int $max ) use ( $attributes ): int {
	$value = isset( $attributes[ $key ] ) ? absint( $attributes[ $key ] ) : $default;
	return max( $min, min( $max, $value ) );
};
$card_height = $num( 'cardHeight', 520, 280, 760 );
$card_gap = $num( 'cardGap', 32, 0, 120 );
$stack_offset = $num( 'stackOffset', 24, 0, 80 );
$sticky_top_offset = $num( 'stickyTopOffset', 24, 0, 160 );
$card_radius = $num( 'cardRadius', 20, 0, 40 );
$content_padding = $num( 'contentPadding', 48, 16, 96 );
$image_width = $num( 'imageWidth', 50, 30, 70 );
$mobile_height = $num( 'mobileCardHeight', 460, 240, 700 );
$mobile_padding = $num( 'mobileContentPadding', 24, 12, 56 );
$mobile_image_height = $num( 'mobileImageHeight', 240, 140, 420 );
$mobile_offset = $num( 'mobileStackOffset', 16, 0, 48 );
$valid_sizes = array( 'small', 'base', 'medium', 'medium-plus', 'large', 'x-large', 'xx-large' );
$heading_size = in_array( $attributes['headingSize'] ?? '', $valid_sizes, true ) ? $attributes['headingSize'] : 'medium-plus';
$description_size = in_array( $attributes['descriptionSize'] ?? '', $valid_sizes, true ) ? $attributes['descriptionSize'] : 'base';
$link_size = in_array( $attributes['linkSize'] ?? '', $valid_sizes, true ) ? $attributes['linkSize'] : 'small';
$weight = in_array( $attributes['headingWeight'] ?? '', array( '400', '500', '600', '700', '800' ), true ) ? $attributes['headingWeight'] : '600';
$fit = 'contain' === ( $attributes['imageObjectFit'] ?? 'cover' ) ? 'contain' : 'cover';
$css = array(
	'--nextora-sc-card-height:' . $card_height . 'px', '--nextora-sc-card-gap:' . $card_gap . 'px', '--nextora-sc-stack-offset:' . $stack_offset . 'px',
	'--nextora-sc-card-radius:' . $card_radius . 'px', '--nextora-sc-content-padding:' . $content_padding . 'px', '--nextora-sc-image-width:' . $image_width . '%', '--nextora-sc-sticky-top-offset:' . $sticky_top_offset . 'px',
	'--nextora-sc-mobile-height:' . $mobile_height . 'px', '--nextora-sc-mobile-padding:' . $mobile_padding . 'px', '--nextora-sc-mobile-image-height:' . $mobile_image_height . 'px', '--nextora-sc-mobile-offset:' . $mobile_offset . 'px',
	'--nextora-sc-content-max-width:' . esc_attr( sanitize_text_field( $attributes['contentMaxWidth'] ?? '1200px' ) ), '--nextora-sc-heading-size:var(--wp--preset--font-size--' . $heading_size . ')', '--nextora-sc-description-size:var(--wp--preset--font-size--' . $description_size . ')', '--nextora-sc-link-size:var(--wp--preset--font-size--' . $link_size . ')', '--nextora-sc-heading-weight:' . $weight, '--nextora-sc-image-fit:' . $fit,
);
$colors = array( 'cardBackgroundColor' => '--nextora-sc-card-bg', 'headingColor' => '--nextora-sc-heading-color', 'descriptionColor' => '--nextora-sc-description-color', 'linkColor' => '--nextora-sc-link-color' );
foreach ( $colors as $attribute => $property ) {
	$resolved = nextora_sc_color( $attributes[ $attribute ] ?? '' );
	if ( '' !== $resolved ) {
		$css[] = $property . ':' . $resolved;
	}
}
$classes = array( 'wp-block-nextora-stacking-cards' );
if ( false !== ( $attributes['enableSticky'] ?? true ) ) {
	$classes[] = 'nextora-stacking-cards--sticky';
}
if ( true === ( $attributes['enableScrollAnimation'] ?? true ) ) {
	$classes[] = 'has-scroll-animation';
	$classes[] = 'is-visible';
}
$wrapper = get_block_wrapper_attributes( array( 'class' => implode( ' ', $classes ), 'style' => implode( ';', $css ), 'data-nextora-scroll-reveal' => ( true === ( $attributes['enableScrollAnimation'] ?? true ) ) ? '1' : '0' ) );
$show_link = false !== ( $attributes['showLink'] ?? true );
$new_tab = true === ( $attributes['openLinksInNewTab'] ?? false );
?>
<div <?php echo $wrapper; ?>>
	<div class="nextora-stacking-cards__list">
		<?php foreach ( $cards as $index => $card ) : if ( ! is_array( $card ) ) { continue; } ?>
			<?php
			$heading = sanitize_text_field( $card['heading'] ?? '' );
			$description = sanitize_textarea_field( $card['description'] ?? '' );
			$link_text = sanitize_text_field( $card['linkText'] ?? 'Read more' );
			$link_url = esc_url( $card['linkUrl'] ?? '' );
			$image_id = absint( $card['imageId'] ?? 0 );
			$image_url = esc_url( $card['imageUrl'] ?? '' );
			$image_alt = sanitize_text_field( $card['imageAlt'] ?? '' );
			$image = '';
			$item_colors = array(
				'backgroundColor' => '--nextora-sc-card-bg',
				'headingColor' => '--nextora-sc-heading-color',
				'descriptionColor' => '--nextora-sc-description-color',
				'linkColor' => '--nextora-sc-link-color',
			);
			$item_style = array();
			foreach ( $item_colors as $item_attribute => $item_property ) {
				$item_color = nextora_sc_color( $card[ $item_attribute ] ?? '' );
				if ( '' !== $item_color ) {
					$item_style[] = $item_property . ':' . $item_color;
				}
			}
			if ( $image_id > 0 ) {
				$image = wp_get_attachment_image( $image_id, 'large', false, array( 'class' => 'nextora-stacking-cards__image', 'alt' => $image_alt, 'loading' => 0 === $index ? 'eager' : 'lazy' ) );
			}
			if ( ! is_string( $image ) || '' === $image ) {
				$image = '' !== $image_url ? sprintf( '<img class="nextora-stacking-cards__image" src="%s" alt="%s" loading="%s" />', $image_url, esc_attr( $image_alt ), 0 === $index ? 'eager' : 'lazy' ) : '';
			}
			?>
			<article class="nextora-stacking-cards__card" style="--nextora-sc-index:<?php echo esc_attr( (string) $index ); ?>;<?php echo esc_attr( implode( ';', $item_style ) ); ?>">
				<div class="nextora-stacking-cards__content"><h2 class="nextora-stacking-cards__heading"><?php echo esc_html( $heading ); ?></h2><?php if ( '' !== $description ) : ?><p class="nextora-stacking-cards__description"><?php echo esc_html( $description ); ?></p><?php endif; ?><?php if ( $show_link && '' !== $link_url && '' !== $link_text ) : ?><a class="nextora-stacking-cards__link" href="<?php echo $link_url; ?>"<?php echo $new_tab ? ' target="_blank" rel="noopener noreferrer"' : ''; ?>><?php echo esc_html( $link_text ); ?><span aria-hidden="true">&#8599;</span></a><?php endif; ?></div>
				<div class="nextora-stacking-cards__media"><?php echo $image; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?></div>
			</article>
		<?php endforeach; ?>
	</div>
</div>
