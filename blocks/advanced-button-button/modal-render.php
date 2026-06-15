<?php

/**
 * Front-end modal shell for nextora/advanced-button-button popup content.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'nextora_advanced_button_modal_sanitize_id' ) ) {
	/**
	 * Sanitize a string for use as an HTML id attribute.
	 */
	function nextora_advanced_button_modal_sanitize_id( string $id ): string {
		$id = preg_replace( '/[^a-zA-Z0-9_-]/', '-', $id );
		$id = is_string( $id ) ? trim( $id, '-' ) : '';

		return '' !== $id ? $id : 'nextora-advanced-button-modal';
	}
}

if ( ! function_exists( 'nextora_advanced_button_modal_strip_save_wrapper' ) ) {
	/**
	 * Remove the saved InnerBlocks wrapper from modal body HTML.
	 */
	function nextora_advanced_button_modal_strip_save_wrapper( string $html ): string {
		$html = trim( $html );
		if ( '' === $html ) {
			return $html;
		}

		if ( preg_match(
			'/^<div[^>]*class="[^"]*nextora-advanced-button-modal__save[^"]*"[^>]*>(.*)<\/div>\s*$/s',
			$html,
			$matches,
		) ) {
			return (string) $matches[1];
		}

		return $html;
	}
}

if ( ! function_exists( 'nextora_advanced_button_modal_close_button' ) ) {
	/**
	 * Shared close control for advanced-button popup modals.
	 */
	function nextora_advanced_button_modal_close_button(): string {
		ob_start();
		?>
		<button
			type="button"
			class="nextora-modal__close nextora-advanced-button-modal__close"
			data-nextora-modal-dismiss
			aria-label="<?php echo esc_attr__( 'Close', 'nextora' ); ?>"
		>
			<span class="nextora-modal__close-icon" aria-hidden="true">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false">
					<path d="M18 6 6 18M6 6l12 12" />
				</svg>
			</span>
		</button>
		<?php
		return (string) ob_get_clean();
	}
}

if ( ! function_exists( 'nextora_advanced_button_modal_width_px' ) ) {
	/**
	 * Normalize modal width to pixels (supports legacy preset strings).
	 */
	function nextora_advanced_button_modal_width_px( mixed $width ): int {
		if ( is_numeric( $width ) ) {
			return max( 320, min( 1200, (int) $width ) );
		}

		$presets = array(
			'sm'   => 384,
			'md'   => 512,
			'lg'   => 672,
			'xl'   => 896,
			'full' => 1200,
		);

		$key = is_string( $width ) ? $width : 'xl';

		return $presets[ $key ] ?? 896;
	}
}

if ( ! function_exists( 'nextora_advanced_button_modal_render' ) ) {
	/**
	 * Render theme modal markup with inner block content.
	 */
	function nextora_advanced_button_modal_render(
		string $modal_id,
		string $modal_title,
		string $body_html,
		int|string $modal_width = 896,
	): string {
		$modal_id    = nextora_advanced_button_modal_sanitize_id( $modal_id );
		$title_id    = $modal_id . '-title';
		$title       = trim( $modal_title );
		$has_title   = '' !== $title;
		$width_px    = nextora_advanced_button_modal_width_px( $modal_width );
		$surface_style = sprintf( 'width: min(100%%, %dpx);', $width_px );

		ob_start();
		?>
		<div
			id="<?php echo esc_attr( $modal_id ); ?>"
			class="nextora-modal nextora-advanced-button-modal"
			hidden
			data-nextora-modal
			data-nextora-advanced-button-modal-portal
			aria-hidden="true"
		>
			<div class="nextora-modal__scrim" data-nextora-modal-dismiss tabindex="-1"></div>
			<div
				class="nextora-modal__surface nextora-advanced-button-modal__surface"
				style="<?php echo esc_attr( $surface_style ); ?>"
				data-nextora-modal-surface
				role="dialog"
				aria-modal="true"
				<?php if ( $has_title ) : ?>
					aria-labelledby="<?php echo esc_attr( $title_id ); ?>"
				<?php else : ?>
					aria-label="<?php echo esc_attr__( 'Dialog', 'nextora' ); ?>"
				<?php endif; ?>
				tabindex="-1"
			>
				<?php if ( $has_title ) : ?>
					<header class="nextora-modal__header nextora-advanced-button-modal__header">
						<h2 id="<?php echo esc_attr( $title_id ); ?>" class="nextora-modal__title">
							<?php echo esc_html( $title ); ?>
						</h2>
						<?php echo nextora_advanced_button_modal_close_button(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
					</header>
				<?php else : ?>
					<div class="nextora-advanced-button-modal__close-wrap">
						<?php echo nextora_advanced_button_modal_close_button(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>
					</div>
				<?php endif; ?>
				<div class="nextora-modal__body nextora-advanced-button-modal__body entry-content">
					<?php echo $body_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped — rendered blocks.?>
				</div>
			</div>
		</div>
		<?php
		return (string) ob_get_clean();
	}
}
