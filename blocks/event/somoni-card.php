<?php
/**
 * Shared Somoni card markup for manual and Calendar events.
 *
 * @package Nextora
 */

declare( strict_types=1 );

/**
 * Render a Somoni slide using the owning block's color and image helpers.
 *
 * @param array<string, mixed> $event      Event data.
 * @param array<string, mixed> $attributes Block attributes.
 */
function nextora_event_render_somoni_card( array $event, array $attributes, string $prefix, string $placeholder ): string {
	$title = trim( (string) ( $event['title'] ?? '' ) );
	if ( '' === $title ) {
		return '';
	}
	$color = $prefix . '_get_color_props';
	$font  = $prefix . '_get_font_size_props';
	$image = $prefix . '_render_image_html';
	if ( ! is_callable( $color ) || ! is_callable( $font ) || ! is_callable( $image ) ) {
		return '';
	}
	$props = static function ( string $class, string $key, string $type = 'color', string $size = '' ) use ( $attributes, $color, $font ): string {
		$p = $color( (string) ( $attributes[ $key ] ?? '' ), $type );
		$default_size = 'titleFontSize' === $size ? 'medium' : 'small';
		$f = '' !== $size ? $font( (string) ( $attributes[ $size ] ?? $default_size ) ?: $default_size ) : array( 'class' => '', 'style' => '' );
		return 'class="' . esc_attr( trim( $class . ' ' . $p['class'] . ' ' . $f['class'] ) ) . '" style="' . esc_attr( $p['style'] . $f['style'] ) . '"';
	};
	$url    = trim( (string) ( $event['linkUrl'] ?? '' ) );
	$target = '_blank' === ( $event['linkTarget'] ?? '' ) ? ' target="_blank" rel="noopener noreferrer"' : '';
	$time   = trim( (string) ( $event['time'] ?? '' ) );
	$period = '';
	if ( preg_match( '/\s*(AM|PM)$/i', $time, $match ) ) {
		$period = $match[1];
		$time   = trim( substr( $time, 0, -strlen( $match[0] ) ) );
	}
	$label = trim( (string) ( $event['registerLabel'] ?? '' ) );
	$label = '' !== $label ? $label : (string) ( $attributes['registerButtonText'] ?? '' );
	$label = '' !== $label ? $label : __( 'Join with us', 'nextora' );
	$show = static fn ( string $key ): bool => ! isset( $attributes[ $key ] ) || (bool) $attributes[ $key ];
	ob_start();
	?>
	<div class="swiper-slide">
		<article <?php echo $props( 'nextora-event-somoni', 'cardBackgroundColor', 'background' ); ?>>
			<?php if ( $show( 'showImage' ) ) : ?>
				<div class="nextora-event-somoni__image"><?php echo $image( (int) ( $event['imageId'] ?? 0 ), (string) ( $event['imageUrl'] ?? '' ), (string) ( $event['imageAlt'] ?? '' ), $title, $placeholder ); ?></div>
			<?php endif; ?>
			<div class="nextora-event-somoni__content">
				<?php if ( $show( 'showDate' ) || ( $show( 'showTime' ) && '' !== $time ) ) : ?>
					<div class="nextora-event-somoni__badge">
						<?php if ( $show( 'showDate' ) ) : ?>
							<div <?php echo $props( 'nextora-event-somoni__date', 'dateBackgroundColor', 'background' ); ?>>
								<b <?php echo $props( '', 'dateDayColor' ); ?>><?php echo esc_html( (string) ( $event['day'] ?? '' ) ); ?></b>
								<span <?php echo $props( '', 'dateAccentColor' ); ?>><?php echo esc_html( (string) ( $event['month'] ?? '' ) ); ?></span>
							</div>
						<?php endif; ?>
						<?php if ( $show( 'showTime' ) && '' !== $time ) : ?>
							<div class="nextora-event-somoni__time"><b><?php echo esc_html( $time ); ?></b><?php if ( '' !== $period ) : ?><span><?php echo esc_html( $period ); ?></span><?php endif; ?></div>
						<?php endif; ?>
					</div>
				<?php endif; ?>
				<h4 <?php echo $props( 'nextora-event-somoni__title', 'titleColor', 'color', 'titleFontSize' ); ?>><?php if ( '' !== $url ) : ?><a href="<?php echo esc_url( $url ); ?>"<?php echo $target; ?>><?php echo esc_html( $title ); ?></a><?php else : ?><?php echo esc_html( $title ); ?><?php endif; ?></h4>
				<?php if ( $show( 'showDescription' ) && ! empty( $event['description'] ) ) : ?>
					<p <?php echo $props( 'nextora-event-somoni__description', 'compactDescriptionColor', 'color', 'descriptionFontSize' ); ?>><?php echo esc_html( (string) $event['description'] ); ?></p>
				<?php endif; ?>
				<?php if ( $show( 'showRegisterButton' ) ) : ?>
					<?php $tag = '' !== $url ? 'a' : 'span'; ?>
					<<?php echo $tag; ?> <?php echo $props( 'nextora-event-somoni__link', 'registerTextColor' ); ?><?php if ( '' !== $url ) : ?> href="<?php echo esc_url( $url ); ?>"<?php echo $target; ?><?php endif; ?>><?php echo esc_html( $label ); ?><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg></<?php echo $tag; ?>>
				<?php endif; ?>
			</div>
		</article>
	</div>
	<?php
	return (string) ob_get_clean();
}
