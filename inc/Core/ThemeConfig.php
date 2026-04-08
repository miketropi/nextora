<?php
/**
 * Theme metadata (unit-testable without WordPress).
 *
 * @package Nextora
 */

declare(strict_types=1);

namespace Nextora\Core;

final class ThemeConfig {

	public const SLUG = 'nextora';

	public static function version(): string {
		return defined( 'NEXTORA_VERSION' ) ? (string) NEXTORA_VERSION : '1.0.0';
	}

	/**
	 * PHP function / hook prefix with trailing underscore.
	 */
	public static function prefix(): string {
		return self::SLUG . '_';
	}
}
