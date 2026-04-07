<?php
/**
 * @package Nextora
 */

declare(strict_types=1);

namespace Nextora\Tests;

use Nextora\ThemeConfig;
use PHPUnit\Framework\TestCase;

final class ThemeConfigTest extends TestCase {

	public function test_slug(): void {
		$this->assertSame( 'nextora', ThemeConfig::SLUG );
	}

	public function test_prefix(): void {
		$this->assertSame( 'nextora_', ThemeConfig::prefix() );
	}

	public function test_version_reads_constant(): void {
		$this->assertSame( '1.0.0', ThemeConfig::version() );
	}
}
