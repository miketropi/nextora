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
			'image'        => '',
			'url'          => 'https://woocommerce.com',
			'isPremium'    => false,
			'isComingSoon' => false,
		),
		array(
			'slug'         => 'elementor',
			'name'         => 'Elementor',
			'description'  => 'Live drag-and-drop page builder with 100+ widgets, full theme design, and popup builder.',
			'image'        => '',
			'url'          => 'https://elementor.com',
			'isPremium'    => false,
			'isComingSoon' => false,
		),
		array(
			'slug'         => 'giftflow',
			'name'         => 'GiftFlow',
			'description'  => 'Campaign-based donation and fundraising platform built natively for WordPress.',
			'image'        => '',
			'url'          => 'https://example.com/giftflow',
			'isPremium'    => true,
			'isComingSoon' => false,
		),
		array(
			'slug'         => 'wordpress-seo',
			'name'         => 'Yoast SEO',
			'description'  => 'Improve your search rankings with XML sitemaps, content analysis, and schema markup.',
			'image'        => '',
			'url'          => 'https://yoast.com',
			'isPremium'    => false,
			'isComingSoon' => false,
		),
		array(
			'slug'         => 'advanced-custom-fields',
			'name'         => 'Advanced Custom Fields',
			'description'  => 'Add flexible content fields, option pages, and custom post meta to any part of your site.',
			'image'        => '',
			'url'          => 'https://www.advancedcustomfields.com',
			'isPremium'    => false,
			'isComingSoon' => false,
		),
		array(
			'slug'         => 'contact-form-7',
			'name'         => 'Contact Form 7',
			'description'  => 'Simple, flexible contact forms with CAPTCHA, Akismet spam filtering, and file uploads.',
			'image'        => '',
			'url'          => 'https://contactform7.com',
			'isPremium'    => false,
			'isComingSoon' => false,
		),
		array(
			'slug'         => 'wp-rocket',
			'name'         => 'WP Rocket',
			'description'  => 'Premium caching and performance plugin. Page cache, file optimisation, and lazy loading.',
			'image'        => '',
			'url'          => 'https://wp-rocket.me',
			'isPremium'    => true,
			'isComingSoon' => false,
		),
		array(
			'slug'         => 'wordfence',
			'name'         => 'Wordfence',
			'description'  => 'Endpoint firewall, malware scanner, and login security for WordPress sites.',
			'image'        => '',
			'url'          => 'https://www.wordfence.com',
			'isPremium'    => false,
			'isComingSoon' => false,
		),
	);

	return apply_filters( 'nextora_addon_plugins', $plugins );
}
