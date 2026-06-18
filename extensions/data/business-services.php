<?php

/**
 * Business services data for the Nextora Addon admin page.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Get the available business services.
 *
 * @return array<int, array{id: string, title: string, description: string, image: string, url: string}>
 */
function nextora_get_business_services(): array {
	$services = array(
		array(
			'id'          => 'custom-dev',
			'title'       => 'Custom WordPress Development',
			'description' => 'Bespoke themes, plugins, Gutenberg blocks, and API integrations built to your exact requirements.',
			'image'       => '',
			'url'         => 'https://example.com/services/custom-dev',
		),
		array(
			'id'          => 'seo-optimisation',
			'title'       => 'SEO & Speed Optimisation',
			'description' => 'Technical SEO audits, Core Web Vitals tuning, and performance optimisation to boost your rankings.',
			'image'       => '',
			'url'         => 'https://example.com/services/seo',
		),
		array(
			'id'          => 'maintenance',
			'title'       => 'Maintenance & Support',
			'description' => 'Ongoing updates, security monitoring, backups, and 24/7 emergency support for peace of mind.',
			'image'       => '',
			'url'         => 'https://example.com/services/maintenance',
		),
		array(
			'id'          => 'migration',
			'title'       => 'Site Migration',
			'description' => 'Zero-downtime migration between hosts, domains, or platforms — handled end to end.',
			'image'       => '',
			'url'         => 'https://example.com/services/migration',
		),
		array(
			'id'          => 'accessibility',
			'title'       => 'Accessibility Audits',
			'description' => 'WCAG 2.1 AA compliance audits with actionable remediation plans for inclusive experiences.',
			'image'       => '',
			'url'         => 'https://example.com/services/accessibility',
		),
		array(
			'id'          => 'consulting',
			'title'       => 'WordPress Consulting',
			'description' => 'Architecture reviews, stack recommendations, and hands-on guidance for complex WordPress projects.',
			'image'       => '',
			'url'         => 'https://example.com/services/consulting',
		),
	);

	return apply_filters( 'nextora_addon_business_services', $services );
}
