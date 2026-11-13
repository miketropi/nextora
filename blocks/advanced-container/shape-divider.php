<?php
/** Shape divider markup for the dynamic container. */
declare( strict_types=1 );

if ( ! function_exists( 'nextora_container_render_divider' ) ) {
	/**
	 * Render a decorative divider without affecting saved inner markup.
	 *
	 * @param mixed $settings Stored settings.
	 */
	function nextora_container_render_divider( $settings, string $position ): void {
		if ( ! is_array( $settings ) || ! in_array( $settings['type'] ?? '', array( 'curve', 'wave' ), true ) ) {
			return;
		}
		$color = isset( $settings['color'] ) && is_string( $settings['color'] ) ? $settings['color'] : 'base';
		if ( preg_match( '/^[a-z][a-z0-9-]*$/', $color ) && 'transparent' !== $color ) {
			$color = 'var(--wp--preset--color--' . $color . ')';
		}
		$height = max( 0, min( 300, (int) ( $settings['height'] ?? 70 ) ) );
		$tablet = max( 0, min( 300, (int) ( $settings['heightTablet'] ?? $height ) ) );
		$mobile = max( 0, min( 200, (int) ( $settings['heightMobile'] ?? 40 ) ) );
		$style = safecss_filter_attr( 'color:' . $color . ';--nextora-divider-height:' . $height . 'px;--nextora-divider-height-tablet:' . $tablet . 'px;--nextora-divider-height-mobile:' . $mobile . 'px;' );
		$class = 'nextora-advanced-container__divider nextora-advanced-container__divider--' . $position . ( ! empty( $settings['flip'] ) ? ' nextora-advanced-container__divider--flip' : '' );
		?>
		<div class="<?php echo esc_attr( $class ); ?>" style="<?php echo esc_attr( $style ); ?>" aria-hidden="true"><svg viewBox="0 0 1440 70" preserveAspectRatio="none" focusable="false">
		<?php if ( 'wave' === $settings['type'] ) : ?>
			<path d="M0 70V30C240 4 480 4 720 30S1200 56 1440 30V70Z" fill="currentColor" fill-opacity=".25"/><path d="M0 70V36C240 10 480 10 720 36S1200 62 1440 36V70Z" fill="currentColor" fill-opacity=".5"/><path d="M0 70V42C240 16 480 16 720 42S1200 68 1440 42V70Z" fill="currentColor"/>
		<?php else : ?>
			<path d="M0 70V40C200 -5 420 -10 700 25s560 40 740 -10V70Z" fill="currentColor"/>
		<?php endif; ?>
		</svg></div>
		<?php
	}
}
