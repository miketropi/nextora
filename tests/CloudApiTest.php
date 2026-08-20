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
		$this->assertSame( 'http://localhost:3000/api/v1', $url );
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
