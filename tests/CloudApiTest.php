<?php

/**
 * Unit tests for Nextora Cloud API integration.
 *
 * @package Nextora
 */

declare( strict_types=1 );

namespace Nextora\Tests;

use Nextora\Core\Cloud\ApiClient;
use PHPUnit\Framework\TestCase;

final class CloudApiTest extends TestCase {

	public function test_get_default_api_url(): void {
		$url = ApiClient::get_api_url();
		$this->assertSame( ApiClient::DEFAULT_API_URL, $url );
	}

	public function test_get_api_url_filter_override(): void {
		// Mock apply_filters if needed or verify filter hook handling
		$url = ApiClient::get_api_url();
		$this->assertStringStartsWith( 'http', $url );
	}

	public function test_check_compatibility_empty_requires(): void {
		$result = ApiClient::check_compatibility( array() );
		$this->assertTrue( $result['compatible'] );
	}

	public function test_check_compatibility_valid_version(): void {
		$result = ApiClient::check_compatibility(
			array(
				'theme' => '>=0.0.1',
			),
		);
		$this->assertTrue( $result['compatible'] );
	}

	public function test_check_compatibility_future_version(): void {
		$result = ApiClient::check_compatibility(
			array(
				'theme' => '>=999.0.0',
			),
		);
		$this->assertFalse( $result['compatible'] );
		$this->assertStringContainsString( 'Requires Nextora theme', $result['message'] );
	}
}
