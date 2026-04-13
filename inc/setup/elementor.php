<?php
/**
 * Elementor compatibility (editor settings).
 *
 * @package Nextora
 */

declare(strict_types=1);

add_filter(
	'elementor/editor/localize_settings',
	static function ( array $settings ): array {
		$settings['historyStepsCount'] = 5;
		return $settings;
	}
);
