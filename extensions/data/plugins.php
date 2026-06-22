<?php

/**
 * Supported plugins data for the Nextora Addon admin page.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Get the list of plugins supported by Nextora.
 *
 * isActive is computed live in the REST endpoint via is_plugin_active().
 *
 * @return array<int, array{slug: string, name: string, description: string, image: string, url: string, isPremium: bool, isComingSoon: bool}>
 */
function nextora_get_supported_plugins(): array {
	$plugins = array(
		array(
			'slug'         => 'woocommerce',
			'name'         => 'WooCommerce',
			'description'  => 'The most popular eCommerce platform for WordPress. Sell anything, beautifully.',
			'image'        => 'https://pub-0645c3b9d3674132af6b362484df0f3c.r2.dev/Nextora/pms-integration-woocommerce-banner.png',
			'url'          => 'https://woocommerce.com',
			'isPremium'    => false,
			'isComingSoon' => false,
		),
		array(
			'slug'         => 'elementor',
			'name'         => 'Elementor',
			'description'  => 'Live drag-and-drop page builder with 100+ widgets, full theme design, and popup builder.',
			'image'        => 'https://pub-0645c3b9d3674132af6b362484df0f3c.r2.dev/Nextora/desktop_-inner_720_440_-1024x626.avif',
			'url'          => 'https://elementor.com/',
			'isPremium'    => false,
			'isComingSoon' => false,
		),
		array(
			'slug'         => 'giftflow',
			'name'         => 'GiftFlow – Donation & Fundraising',
			'description'  => 'Campaign-based donation and fundraising platform built natively for WordPress.',
			'image'        => 'https://ps.w.org/giftflow/assets/banner-1544x500.png?rev=3577616',
			'url'          => 'https://giftflow.beplus-agency.cloud/',
			'isPremium'    => true,
			'isComingSoon' => false,
		),
		
	);

	return apply_filters( 'nextora_addon_plugins', $plugins );
}
