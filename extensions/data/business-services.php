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
			'image'       => 'https://i.pinimg.com/736x/bf/94/9b/bf949b1c234dc28d117c26bd0d1be728.jpg',
			'url'         => 'https://beplusthemes.com/',
		),
		array(
			'id'          => 'seo-optimisation',
			'title'       => 'SEO & Speed Optimisation',
			'description' => 'Technical SEO audits, Core Web Vitals tuning, and performance optimisation to boost your rankings.',
			'image'       => 'https://i.pinimg.com/736x/f7/8c/20/f78c20b8185e07336e59272be895813e.jpg',
			'url'         => 'https://beplusthemes.com/',
		),
		array(
			'id'          => 'maintenance',
			'title'       => 'Maintenance & Support',
			'description' => 'Ongoing updates, security monitoring, backups, and 24/7 emergency support for peace of mind.',
			'image'       => 'https://i.pinimg.com/736x/82/75/db/8275db2dffbe38401eacbddf628b6878.jpg',
			'url'         => 'https://beplusthemes.com/',
		),
		array(
			'id'          => 'migration',
			'title'       => 'Site Migration',
			'description' => 'Zero-downtime migration between hosts, domains, or platforms — handled end to end.',
			'image'       => 'https://i.pinimg.com/736x/90/90/ea/9090ea0f92b1bc16d3dafd583c9ca3b7.jpg',
			'url'         => 'https://beplusthemes.com/',
		),
		array(
			'id'          => 'accessibility',
			'title'       => 'Accessibility Audits',
			'description' => 'WCAG 2.1 AA compliance audits with actionable remediation plans for inclusive experiences.',
			'image'       => 'https://cdn.dribbble.com/userupload/45863226/file/3d3cc4676b102ca7afcac861328b4c79.jpg?resize=1024x768&vertical=center',
			'url'         => 'https://beplusthemes.com/',
		),
		array(
			'id'          => 'consulting',
			'title'       => 'WordPress Consulting',
			'description' => 'Architecture reviews, stack recommendations, and hands-on guidance for complex WordPress projects.',
			'image'       => 'https://cdn.dribbble.com/userupload/10221490/file/original-36b4febf76e309cc5dd521140302c8b9.jpg?resize=1024x768&vertical=center',
			'url'         => 'https://beplusthemes.com/',
		),
	);

	return apply_filters( 'nextora_addon_business_services', $services );
}
