<?php
/**
 * Vertical Showcase dynamic block render template.
 *
 * @var array<string, mixed> $attributes Block attributes.
 */

declare( strict_types=1 );

$items = $attributes['items'] ?? array();
if ( ! is_array( $items ) || empty( $items ) ) {
	return;
}

$valid_sizes = array( 'small', 'base', 'medium', 'medium-plus', 'large', 'x-large', 'xx-large' );
	$title_size  = sanitize_text_field( (string) ( $attributes['titleSize'] ?? 'medium-plus' ) );
$description_size = sanitize_text_field( (string) ( $attributes['descriptionSize'] ?? 'small' ) );
	$title_size = in_array( $title_size, $valid_sizes, true ) ? $title_size : 'medium-plus';
$description_size = in_array( $description_size, $valid_sizes, true ) ? $description_size : 'small';
$autoplay = ! empty( $attributes['autoplay'] );
$show_view_more = ! isset( $attributes['showViewMore'] ) || ! empty( $attributes['showViewMore'] );
$show_arrows = ! isset( $attributes['showArrows'] ) || ! empty( $attributes['showArrows'] );
$duration = max( 2000, min( 15000, absint( $attributes['autoplayDuration'] ?? 5000 ) ) );
$scroll_animation = ! isset( $attributes['enableScrollAnimation'] ) || ! empty( $attributes['enableScrollAnimation'] );

if ( ! function_exists( 'nextora_vertical_showcase_resolve_color' ) ) {
	function nextora_vertical_showcase_resolve_color( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}
		if ( preg_match( '/^var:preset\|color\|([a-z0-9_-]+)$/i', $raw, $matches ) ) {
			return 'var(--wp--preset--color--' . sanitize_html_class( strtolower( $matches[1] ) ) . ')';
		}
		if ( preg_match( '/^#[0-9a-fA-F]{8}$/', $raw ) ) {
			return $raw;
		}
		$hex = sanitize_hex_color( $raw );
		if ( $hex ) {
			return $hex;
		}
		if ( preg_match( '/^[a-z0-9_-]+$/i', $raw ) ) {
			return 'var(--wp--preset--color--' . sanitize_html_class( strtolower( $raw ) ) . ')';
		}
		return '';
	}
}

$css_vars = array(
	'--nextora-vs-title-size: var(--wp--preset--font-size--' . esc_attr( $title_size ) . ')',
	'--nextora-vs-description-size: var(--wp--preset--font-size--' . esc_attr( $description_size ) . ')',
	'--nextora-vs-autoplay-duration: ' . $duration . 'ms',
);
$colors = array(
	'titleColor' => '--nextora-vs-title-color',
	'inactiveTitleColor' => '--nextora-vs-inactive-title-color',
	'descriptionColor' => '--nextora-vs-description-color',
	'numberColor' => '--nextora-vs-number-color',
	'activeIndicatorColor' => '--nextora-vs-active-indicator',
	'buttonColor' => '--nextora-vs-button-color',
);
foreach ( $colors as $attribute => $variable ) {
	$value = nextora_vertical_showcase_resolve_color( (string) ( $attributes[ $attribute ] ?? '' ) );
	if ( '' !== $value ) {
		$css_vars[] = $variable . ': ' . $value;
	}
}

$classes = array( 'wp-block-nextora-vertical-showcase', 'nextora-vertical-showcase--loading' );
if ( $scroll_animation ) {
	$classes[] = 'has-scroll-animation';
}
$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => implode( ' ', $classes ),
		'style' => implode( '; ', $css_vars ),
		'data-nextora-scroll-reveal' => $scroll_animation ? '1' : '0',
		'data-nextora-vs-autoplay' => $autoplay ? (string) $duration : '0',
	),
);
?>
<div <?php echo $wrapper_attributes; ?>>
	<div class="nextora-vertical-showcase__grid">
		<div class="nextora-vertical-showcase__list" role="tablist" aria-label="<?php esc_attr_e( 'Showcase items', 'nextora' ); ?>">
			<?php foreach ( $items as $index => $item ) : ?>
				<?php if ( ! is_array( $item ) ) { continue; } ?>
				<?php
	$title = sanitize_text_field( (string) ( $item['title'] ?? '' ) );
				$description = sanitize_textarea_field( (string) ( $item['description'] ?? '' ) );
				?>
				<button type="button" class="nextora-vertical-showcase__item<?php echo 0 === $index ? ' nextora-vertical-showcase__item--active' : ''; ?>" role="tab" aria-selected="<?php echo 0 === $index ? 'true' : 'false'; ?>" data-nextora-vs-index="<?php echo esc_attr( (string) $index ); ?>">
					<span class="nextora-vertical-showcase__item-rail" aria-hidden="true"></span>
					<span class="nextora-vertical-showcase__item-number" aria-hidden="true">/<?php echo esc_html( str_pad( (string) ( (int) $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
					<span class="nextora-vertical-showcase__item-body">
						<h4 class="nextora-vertical-showcase__item-title"><?php echo esc_html( $title ); ?></h4>
						<?php
						$link = esc_url( (string) ( $item['link'] ?? '#' ) );
						$item_show_view_more = ! isset( $item['showViewMore'] ) || ! empty( $item['showViewMore'] );
						$view_more_text = sanitize_text_field( (string) ( $item['viewMoreText'] ?? __( 'View More', 'nextora' ) ) );
						$has_view_more = $show_view_more && $item_show_view_more;
						$has_details = '' !== $description || $has_view_more;
						$detail_classes = array( 'nextora-vertical-showcase__item-details' );
						if ( '' !== $description ) {
							$detail_classes[] = 'nextora-vertical-showcase__item-details--has-description';
						}
						if ( $has_view_more ) {
							$detail_classes[] = 'nextora-vertical-showcase__item-details--has-link';
						}
						?>
						<?php if ( $has_details ) : ?><span class="<?php echo esc_attr( implode( ' ', $detail_classes ) ); ?>" data-nextora-vs-detail="<?php echo esc_attr( (string) $index ); ?>" aria-hidden="<?php echo 0 === $index ? 'false' : 'true'; ?>">
							<?php if ( '' !== $description ) : ?><span class="nextora-vertical-showcase__item-description"><?php echo esc_html( $description ); ?></span><?php endif; ?>
							<?php if ( $has_view_more ) :
								?>
								<a class="nextora-vertical-showcase__view-more" href="<?php echo '' !== $link ? $link : '#'; ?>"><?php echo esc_html( $view_more_text ?: __( 'View More', 'nextora' ) ); ?><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 17 17 7M7 7h10v10" /></svg></a>
							<?php endif; ?>
						</span><?php endif; ?>
					</span>
				</button>
			<?php endforeach; ?>
		</div>
		<div class="nextora-vertical-showcase__gallery" tabindex="-1">
			<div class="nextora-vertical-showcase__frame">
				<?php foreach ( $items as $index => $item ) : ?>
					<?php if ( ! is_array( $item ) ) { continue; } ?>
					<?php
					$image_id = absint( $item['imageId'] ?? 0 );
					$image_url = esc_url( (string) ( $item['imageUrl'] ?? '' ) );
					$image_alt = sanitize_text_field( (string) ( $item['imageAlt'] ?? $item['title'] ?? '' ) );
					$image_html = $image_id > 0 ? wp_get_attachment_image( $image_id, 'large', false, array( 'class' => 'nextora-vertical-showcase__image', 'alt' => $image_alt, 'loading' => 0 === $index ? 'eager' : 'lazy' ) ) : '';
					if ( ! is_string( $image_html ) || '' === $image_html ) {
						$image_html = '' !== $image_url ? sprintf( '<img class="nextora-vertical-showcase__image" src="%s" alt="%s" loading="%s" />', $image_url, esc_attr( $image_alt ), 0 === $index ? 'eager' : 'lazy' ) : '';
					}
					if ( '' === $image_html ) { continue; }
					?>
					<div class="nextora-vertical-showcase__image-layer<?php echo 0 === $index ? ' nextora-vertical-showcase__image-layer--active' : ''; ?>" data-nextora-vs-image="<?php echo esc_attr( (string) $index ); ?>" aria-hidden="<?php echo 0 === $index ? 'false' : 'true'; ?>"><?php echo $image_html; ?></div>
				<?php endforeach; ?>
				<div class="nextora-vertical-showcase__image-gradient" aria-hidden="true"></div>
				<?php if ( $show_arrows ) : ?><div class="nextora-vertical-showcase__controls">
					<button type="button" class="nextora-vertical-showcase__arrow nextora-vertical-showcase__arrow--prev" aria-label="<?php esc_attr_e( 'Previous showcase item', 'nextora' ); ?>"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" /></svg></button>
					<button type="button" class="nextora-vertical-showcase__arrow nextora-vertical-showcase__arrow--next" aria-label="<?php esc_attr_e( 'Next showcase item', 'nextora' ); ?>"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6" /></svg></button>
				</div><?php endif; ?>
			</div>
		</div>
	</div>
</div>
