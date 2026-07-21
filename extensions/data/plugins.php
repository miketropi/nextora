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
			'slug'         => 'beplus-visual-mega-nav',
			'name'         => 'Beplus Visual Mega Navigation',
			'description'  => 'A Gutenberg-powered mega menu builder for WordPress. Build rich mega menus visually using the block editor.',
			'image'        => 'https://i.pinimg.com/1200x/c2/7c/eb/c27ceb9be031dea4b4563c9bd88d1bfe.jpg',
			'url'          => 'https://wordpress.org/plugins/beplus-visual-mega-nav/',
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
