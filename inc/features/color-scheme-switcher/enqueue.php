<?php

/**
 * Color scheme switcher — enqueue JS + inline data + popover skeleton.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'wp_enqueue_scripts',
	static function (): void {
		$payload = nextora_get_switcher_payload();

		if ( empty( $payload['colorPresets'] ) && empty( $payload['fontPresets'] ) ) {
			return;
		}

		wp_enqueue_script(
			'nextora-scheme-switcher',
			NEXTORA_URI . '/assets/js/scheme-switcher.js',
			array(),
			NEXTORA_VERSION,
			array( 'strategy' => 'defer', 'in_footer' => true ),
		);

		wp_add_inline_script(
			'nextora-scheme-switcher',
			'window.NEXTORA_THEME_OPTIONS = ' . wp_json_encode( $payload ) . ';',
			'before',
		);
	},
);

add_action(
	'wp_footer',
	static function (): void {
		$payload = nextora_get_switcher_payload();

		if ( empty( $payload['colorPresets'] ) && empty( $payload['fontPresets'] ) ) {
			return;
		}
		?>
		<div class="scheme-switcher" data-nextora-scheme-switcher>
			<button
				class="scheme-switcher__trigger"
				type="button"
				aria-expanded="false"
				aria-haspopup="dialog"
				aria-controls="nextora-scheme-popover"
				aria-label="<?php echo esc_attr_x( 'Open appearance options', 'scheme switcher button', 'nextora' ); ?>"
			>
				<span class="scheme-switcher__trigger-label"><?php echo esc_html_x( 'Appearance', 'scheme switcher trigger label', 'nextora' ); ?></span>
				<svg class="scheme-switcher__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" width="18" height="18">
					<path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/>
					<path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"/>
					<path d="M 7 17h.01"/>
					<path d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"/>
				</svg>
			</button>

			<div
				class="scheme-switcher__popover"
				id="nextora-scheme-popover"
				role="dialog"
				aria-modal="false"
				aria-label="<?php echo esc_attr_x( 'Appearance options', 'scheme popover label', 'nextora' ); ?>"
				aria-hidden="true"
			>
				<header class="scheme-switcher__header">
					<span class="scheme-switcher__title">
						<?php echo esc_html_x( 'Appearance', 'scheme popover title', 'nextora' ); ?>
					</span>
					<button class="scheme-switcher__close" type="button" aria-label="<?php echo esc_attr_x( 'Close appearance options', 'scheme close button', 'nextora' ); ?>">
						<svg viewBox="0 0 20 20" aria-hidden="true" width="16" height="16">
							<path d="M5 5l10 10M15 5L5 15" />
						</svg>
					</button>
				</header>

				<div class="scheme-switcher__body">
					<section class="scheme-switcher__section" data-scheme-section="themes">
						<h3 class="scheme-switcher__section-title">
							<?php echo esc_html_x( 'Themes', 'scheme themes section', 'nextora' ); ?>
						</h3>
						<div class="scheme-switcher__options" data-scheme-theme-list></div>
					</section>

					<section class="scheme-switcher__section" data-scheme-section="colors">
						<h3 class="scheme-switcher__section-title">
							<?php echo esc_html_x( 'Colors', 'scheme color section', 'nextora' ); ?>
						</h3>
						<div class="scheme-switcher__options" data-scheme-color-list></div>
					</section>

					<section class="scheme-switcher__section" data-scheme-section="fonts">
						<h3 class="scheme-switcher__section-title">
							<?php echo esc_html_x( 'Fonts', 'scheme font section', 'nextora' ); ?>
						</h3>
						<div class="scheme-switcher__options" data-scheme-font-list></div>
					</section>
				</div>

				<footer class="scheme-switcher__footer">
					<button class="scheme-switcher__copy" type="button" data-scheme-copy-link data-copied-label="<?php echo esc_attr_x( 'Copied!', 'scheme copy feedback', 'nextora' ); ?>">
						<?php echo esc_html_x( 'Copy link', 'scheme copy link', 'nextora' ); ?>
					</button>
					<button class="scheme-switcher__reset" type="button" data-scheme-reset>
						<?php echo esc_html_x( 'Reset', 'scheme reset all', 'nextora' ); ?>
					</button>
				</footer>
			</div>
		</div>
		<?php
	},
);
