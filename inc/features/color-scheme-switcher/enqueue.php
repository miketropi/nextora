<?php

/**
 * Color scheme switcher — enqueue JS + inline data + footer skeleton.
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
		$schemes = nextora_get_color_schemes();

		if ( empty( $schemes ) ) {
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
			'window.NEXTORA_SCHEMES = ' . wp_json_encode( $schemes ) . ';',
			'before',
		);
	},
);

add_action(
	'wp_footer',
	static function (): void {
		if ( empty( nextora_get_color_schemes() ) ) {
			return;
		}
		?>
		<div class="scheme-switcher" data-nextora-scheme-switcher role="region" aria-label="<?php echo esc_attr_x( 'Color scheme switcher', 'accessibility label', 'nextora' ); ?>">
			<button class="scheme-switcher__trigger" type="button" aria-expanded="false" aria-label="<?php echo esc_attr_x( 'Open color scheme options', 'scheme switcher button', 'nextora' ); ?>">
				<svg class="scheme-switcher__icon" viewBox="0 0 20 20" aria-hidden="true" width="20" height="20">
					<circle cx="10" cy="10" r="8" />
				</svg>
			</button>
			<div class="scheme-switcher__panel" role="group" aria-label="<?php echo esc_attr_x( 'Color scheme options', 'scheme panel', 'nextora' ); ?>">
			</div>
		</div>
		<?php
	},
);
