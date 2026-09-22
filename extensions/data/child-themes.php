<?php

/**
 * Child themes data for the Nextora Addon admin page.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Get the registered child themes for Nextora.
 *
 * @return array<int, array{slug: string, name: string, description: string, thumbnail: string, url: string, author: string, isPremium: bool, isComingSoon: bool}>
 */
function nextora_get_child_themes(): array {
	$themes = array(
		array(
			'slug'        => 'alonepro',
			'name'        => 'Alone Pro',
			'description' => 'A purpose-built child theme for nonprofits and charities. Includes donation features, event pages, and all the essentials for fundraising organizations.',
			'thumbnail'   => 'https://pub-0645c3b9d3674132af6b362484df0f3c.r2.dev/alonepro/7c6e849c-1f25-4827-ae6e-b89c68d4e683.webp',
			'url'         => 'https://example.com/nextora-shop',
			'author'      => 'Bearstheme',
			'isPremium'   => true,
			'isComingSoon' => false,
		),
		array(
			'slug'        => 'nextora-agency',
			'name'        => 'Nextora Agency',
			'description' => 'A portfolio-focused child theme for agencies and freelancers. Showcase your work beautifully.',
			'thumbnail'   => '',
			'url'         => 'https://example.com/nextora-agency',
			'author'      => 'Bearstheme',
			'isPremium'   => false,
			'isComingSoon' => true,
		),
	);

	return apply_filters( 'nextora_addon_child_themes', $themes );
}
