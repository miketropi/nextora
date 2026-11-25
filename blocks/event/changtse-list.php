<?php

/**
 * Shared Changtse List renderer for manual and calendar events.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Render Template 6 with theme-aware colors and typography.
 *
 * @param array<int, array<string, mixed>> $events     Normalized events.
 * @param array<string, mixed>             $attributes Block settings.
 * @param callable                         $get_color  Gutenberg color resolver.
 */
function nextora_event_render_changtse_list( array $events, array $attributes, callable $get_color ): string {
	$value = static function ( string $key, string $fallback = '' ) use ( $attributes ): string {
		$raw = isset( $attributes[ $key ] ) ? trim( (string) $attributes[ $key ] ) : '';
		return '' !== $raw ? $raw : $fallback;
	};
	$show = static function ( string $key ) use ( $attributes ): bool {
		return ! isset( $attributes[ $key ] ) || (bool) $attributes[ $key ];
	};
	$props = static function ( string $name, string $color = '', string $size = '', string $extra = '' ) use ( $get_color ): string {
		$resolved = $get_color( $color, in_array( $name, array( 'item', 'action-bg' ), true ) ? 'background' : 'color' );
		$classes = array( 'nextora-event-changtse__' . $name, (string) $resolved['class'], $extra );
		$style = (string) $resolved['style'];
		if ( '' !== $size ) {
			if ( preg_match( '/^(?:[\d.]+(?:px|rem|em|vw|%)?|clamp\(.+\))$/', $size ) ) {
				$style .= ';font-size:' . ( is_numeric( $size ) ? $size . 'px' : $size );
			} else {
				$aliases = array( 'sm' => 'small', 'md' => 'medium', 'lg' => 'large', 'xl' => 'x-large', '2xl' => 'xx-large', 'normal' => 'base' );
				$classes[] = 'has-' . sanitize_html_class( $aliases[ $size ] ?? $size ) . '-font-size';
			}
		}
		return 'class="' . esc_attr( implode( ' ', array_filter( $classes ) ) ) . '"' . ( '' !== $style ? ' style="' . esc_attr( $style ) . '"' : '' );
	};
	$gap = isset( $attributes['changtseItemGap'] ) ? max( 0, min( 100, (int) $attributes['changtseItemGap'] ) ) : 30;
	$wrapper = array(
		'class' => 'nextora-event-changtse nextora-event--template6',
		'style' => '--nextora-event-changtse-gap:' . $gap . 'px',
	);
	if ( $show( 'enableScrollAnimation' ) && ! is_admin() && ! ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) {
		$wrapper['data-nextora-scroll-reveal'] = '1';
	}
	ob_start();
	?>
	<div <?php echo get_block_wrapper_attributes( $wrapper ); ?>>
		<?php foreach ( $events as $event ) :
			$title = (string) ( $event['title'] ?? '' );
			$url = esc_url( (string) ( $event['linkUrl'] ?? '' ) );
			$target = '_blank' === ( $event['linkTarget'] ?? '' ) ? ' target="_blank" rel="noopener noreferrer"' : '';
			$image_id = (int) ( $event['imageId'] ?? 0 );
			$image_url = (string) ( $event['imageUrl'] ?? '' );
			$image_alt = (string) ( $event['imageAlt'] ?? '' );
			$date = trim( implode( ' ', array_filter( array( (string) ( $event['day'] ?? '' ), (string) ( $event['month'] ?? '' ), (string) ( $event['year'] ?? '' ) ) ) ) );
			$location = (string) ( $event['location'] ?? '' );
			$category = (string) ( $event['category'] ?? '' );
			?>
			<article <?php echo $props( 'item', $value( 'cardBackgroundColor', 'base' ) ); ?>>
				<?php if ( $show( 'showImage' ) ) : ?>
					<div class="nextora-event-changtse__media">
						<?php if ( '' !== $url ) : ?><a class="nextora-event-changtse__image-link" href="<?php echo $url; ?>"<?php echo $target; ?>><?php endif; ?>
						<?php
						$image = $image_id > 0 ? wp_get_attachment_image( $image_id, 'medium', false, array( 'alt' => '' !== $image_alt ? $image_alt : $title ) ) : '';
						if ( '' !== $image ) {
							echo $image;
						} else {
							if ( '' === $image_url ) {
								$image_url = function_exists( 'nextora_event_image_placeholder_url' ) ? nextora_event_image_placeholder_url() : get_theme_file_uri( 'assets/images/placeholder/general-img-landscape.png' );
							}
							?>
							<img src="<?php echo esc_url( $image_url ); ?>" alt="<?php echo esc_attr( '' !== $image_alt ? $image_alt : $title ); ?>" loading="lazy" decoding="async" />
							<?php
						}
						?>
						<?php if ( '' !== $url ) : ?></a><?php endif; ?>
					</div>
				<?php endif; ?>
				<div class="nextora-event-changtse__content">
					<?php if ( $show( 'changtseShowCategory' ) && '' !== $category ) : ?>
						<div <?php echo $props( 'category', $value( 'changtseCategoryColor', 'primary' ), $value( 'changtseCategoryFontSize' ) ); ?>>
							<?php
							$categories = isset( $event['categories'] ) && is_array( $event['categories'] ) ? $event['categories'] : array();
							if ( array() === $categories ) {
								echo esc_html( $category );
							} else {
								$links = array();
								foreach ( $categories as $term ) {
									if ( is_array( $term ) ) {
										$links[] = '<a href="' . esc_url( (string) $term['url'] ) . '">' . esc_html( (string) $term['name'] ) . '</a>';
									}
								}
								echo implode( ', ', $links );
							}
							?>
						</div>
					<?php endif; ?>
					<h4 <?php echo $props( 'title', $value( 'titleColor' ), $value( 'titleFontSize' ) ); ?>><?php if ( '' !== $url ) : ?><a href="<?php echo $url; ?>"<?php echo $target; ?>><?php echo esc_html( $title ); ?></a><?php else : ?><?php echo esc_html( $title ); ?><?php endif; ?></h4>
					<div class="nextora-event-changtse__details">
						<?php foreach ( array( array( $show( 'showLocation' ) ? $location : '', __( 'Event In:', 'nextora' ) ), array( $show( 'showDate' ) ? $date : '', __( 'Date:', 'nextora' ) ) ) as $detail ) : ?>
							<?php if ( '' !== $detail[0] ) : ?>
								<div class="nextora-event-changtse__detail">
									<span <?php echo $props( 'label', $value( 'changtseLabelColor', 'paragraph' ) ); ?>><?php echo esc_html( $detail[1] ); ?></span>
									<span <?php echo $props( 'value', $value( 'metaColor', 'secondary' ), $value( 'metaFontSize' ) ); ?>><?php echo esc_html( $detail[0] ); ?></span>
								</div>
							<?php endif; ?>
						<?php endforeach; ?>
					</div>
				</div>
			</article>
		<?php endforeach; ?>
	</div>
	<?php
	return (string) ob_get_clean();
}
