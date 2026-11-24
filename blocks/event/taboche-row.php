<?php
/**
 * Taboche Editorial Row template renderer for Event block and Event TEC block.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'nextora_event_render_taboche_list' ) ) {
	/**
	 * Render the Taboche editorial row template.
	 *
	 * @param array<int, array<string, mixed>> $events          Normalized event records.
	 * @param array<string, mixed>             $attributes      Block attributes.
	 * @param callable                         $get_color_props Block color helper.
	 * @param callable                         $resolve_color   Block CSS color resolver.
	 */
	function nextora_event_render_taboche_list( array $events, array $attributes, callable $get_color_props, callable $resolve_color ): string {
		$show_date      = ! isset( $attributes['showDate'] ) || (bool) $attributes['showDate'];
		$show_time      = ! isset( $attributes['showTime'] ) || (bool) $attributes['showTime'];
		$show_organizer = ! isset( $attributes['showOrganizer'] ) || (bool) $attributes['showOrganizer'];
		$show_location  = ! isset( $attributes['showLocation'] ) || (bool) $attributes['showLocation'];
		$show_register  = ! isset( $attributes['showRegisterButton'] ) || (bool) $attributes['showRegisterButton'];
		$enable_anim    = ! empty( $attributes['enableAnimation'] );
		$anim_style     = sanitize_key( (string) ( $attributes['animationStyle'] ?? 'sequential' ) );
		if ( ! in_array( $anim_style, array( 'default', 'sequential' ), true ) ) {
			$anim_style = 'sequential';
		}

		$item_gap = isset( $attributes['itemGap'] ) ? (int) $attributes['itemGap'] : 20;

		$value = static function ( string $key, string $fallback = '' ) use ( $attributes ): string {
			$raw = isset( $attributes[ $key ] ) ? trim( (string) $attributes[ $key ] ) : '';
			return '' !== $raw ? $raw : $fallback;
		};

		$wrapper_styles = array(
			'--nextora-event-item-gap:' . $item_gap . 'px;',
		);

		$color_map = array(
			'dateBackgroundColor'          => '--nextora-event-date-bg',
			'dateDayColor'                 => '--nextora-event-date-day-color',
			'dateAccentColor'              => '--nextora-event-date-month-color',
			'cardBackgroundColor'          => '--nextora-event-card-bg',
			'cardBorderColor'              => '--nextora-event-card-border-color',
			'titleColor'                   => '--nextora-event-title-color',
			'metaColor'                    => '--nextora-event-meta-color',
			'metaIconColor'                => '--nextora-event-meta-icon-color',
			'registerBackgroundColor'      => '--nextora-event-register-bg',
			'registerTextColor'            => '--nextora-event-register-text-color',
			'registerBorderColor'          => '--nextora-event-register-border-color',
			'registerHoverBackgroundColor' => '--nextora-event-register-hover-bg',
			'registerHoverTextColor'       => '--nextora-event-register-hover-text-color',
			'registerHoverBorderColor'     => '--nextora-event-register-hover-border-color',
		);

		foreach ( $color_map as $attr_key => $var_name ) {
			$val = $value( $attr_key );
			if ( '' !== $val ) {
				$wrapper_styles[] = $var_name . ':' . $resolve_color( $val ) . ';';
			}
		}

		$classes = array( 'nextora-event', 'nextora-event--template7' );
		if ( $enable_anim ) {
			$classes[] = 'nextora-event--animation-' . $anim_style;
		}

		$wrapper_args = array(
			'class' => implode( ' ', $classes ),
			'style' => implode( '', $wrapper_styles ),
		);
		if ( $enable_anim ) {
			$wrapper_args['data-nextora-scroll-reveal']       = '1';
			$wrapper_args['data-nextora-scroll-reveal-style'] = $anim_style;
		}

		$wrapper = get_block_wrapper_attributes( $wrapper_args );
		$default_register_text = $value( 'registerButtonText', __( 'View event', 'nextora' ) );

		ob_start();
		?>
		<div <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>><div class="nextora-event-taboche__list" style="<?php echo esc_attr( '--nextora-event-item-gap:' . $item_gap . 'px;gap:' . $item_gap . 'px;' ); ?>">
		<?php if ( empty( $events ) ) : ?>
			<p class="nextora-event-taboche__empty"><?php esc_html_e( 'No upcoming events found.', 'nextora' ); ?></p>
		<?php endif; ?>
		<?php
		foreach ( $events as $event ) :
			$title     = trim( (string) ( $event['title'] ?? '' ) );
			$url       = esc_url( (string) ( $event['linkUrl'] ?? '' ) );
			$day       = trim( (string) ( $event['day'] ?? '' ) );
			$month     = trim( (string) ( $event['month'] ?? '' ) );
			$time      = trim( (string) ( $event['time'] ?? '' ) );
			$organizer = trim( (string) ( $event['organizer'] ?? '' ) );
			$location  = trim( (string) ( $event['location'] ?? '' ) );
			$target    = '_blank' === ( $event['linkTarget'] ?? '' ) ? ' target="_blank" rel="noopener noreferrer"' : '';
			$btn_text  = ! empty( $event['registerLabel'] ) ? (string) $event['registerLabel'] : $default_register_text;
			?>
			<article class="nextora-event-taboche__item">
				<?php if ( $show_date && ( '' !== $day || '' !== $month ) ) : ?>
					<div class="nextora-event-taboche__date">
						<?php if ( '' !== $day ) : ?><b><?php echo esc_html( $day ); ?></b><?php endif; ?>
						<?php if ( '' !== $month ) : ?><small><?php echo esc_html( $month ); ?></small><?php endif; ?>
					</div>
				<?php endif; ?>
				<div class="nextora-event-taboche__body">
					<div class="nextora-event-taboche__content">
						<?php if ( ( $show_time && '' !== $time ) || ( $show_organizer && '' !== $organizer ) ) : ?>
							<div class="nextora-event-taboche__meta-top">
								<?php if ( $show_time && '' !== $time ) : ?>
									<span class="nextora-event-taboche__meta-item">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
										<span><?php echo esc_html( $time ); ?></span>
									</span>
								<?php endif; ?>
								<?php if ( $show_organizer && '' !== $organizer ) : ?>
									<span class="nextora-event-taboche__meta-item">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
										<span><?php echo esc_html( $organizer ); ?></span>
									</span>
								<?php endif; ?>
							</div>
						<?php endif; ?>

						<h3 class="nextora-event-taboche__title">
							<?php if ( '' !== $url ) : ?>
								<a href="<?php echo $url; ?>"<?php echo $target; ?>><?php echo esc_html( $title ); ?></a>
							<?php else : ?>
								<?php echo esc_html( $title ); ?>
							<?php endif; ?>
						</h3>

						<?php if ( $show_location && '' !== $location ) : ?>
							<div class="nextora-event-taboche__meta-bottom">
								<span class="nextora-event-taboche__meta-item">
									<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
									<span><?php echo esc_html( $location ); ?></span>
								</span>
							</div>
						<?php endif; ?>
					</div>

					<?php if ( $show_register && '' !== $url ) : ?>
						<div class="nextora-event-taboche__action">
							<a class="nextora-event-taboche__btn wp-element-button" href="<?php echo $url; ?>"<?php echo $target; ?>>
								<span><?php echo esc_html( $btn_text ); ?></span>
							</a>
						</div>
					<?php endif; ?>
				</div>
			</article>
		<?php endforeach; ?>
		</div></div>
		<?php
		return (string) ob_get_clean();
	}
}
