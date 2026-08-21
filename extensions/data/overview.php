<?php

/**
 * Overview data provider for the Nextora Addon > Overview admin page.
 *
 * @package Nextora
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Build the overview data array for the Overview REST endpoint.
 *
 * @return array<string, mixed>
 */
function nextora_get_overview_data(): array {
	$theme = wp_get_theme();

	$data = array(
		'theme'         => array(
			'name'              => $theme->get( 'Name' ),
			'version'           => $theme->get( 'Version' ),
			'requiresWordPress' => $theme->get( 'Requires at least' ) ?: '6.4',
			'testedUpTo'        => $theme->get( 'Tested up to' ) ?: '',
			'requiresPhp'       => $theme->get( 'Requires PHP' ) ?: '8.1',
			'author'            => $theme->get( 'Author' ),
			'authorUri'         => $theme->get( 'AuthorURI' ),
			'themeUri'          => $theme->get( 'ThemeURI' ),
		),
		'features'      => array(
			array(
				'title'       => __( 'Full Site Editing', 'nextora' ),
				'description' => __( 'Built on WordPress block themes — edit every part of your site with the block editor, from headers and footers to templates and global styles.', 'nextora' ),
				'icon'        => 'layout',
			),
			array(
				'title'       => __( 'Tailwind CSS v4', 'nextora' ),
				'description' => __( 'Utility-first CSS framework with design tokens synchronized between theme.json and Tailwind, keeping the front end and block editor visually aligned.', 'nextora' ),
				'icon'        => 'brush',
			),
			array(
				'title'       => __( 'GSAP Scroll Animations', 'nextora' ),
				'description' => __( 'Class-driven scroll reveals powered by GSAP and ScrollTrigger — add animation attributes to any block without writing JavaScript.', 'nextora' ),
				'icon'        => 'play',
			),
			array(
				'title'       => __( 'Spotlight Search', 'nextora' ),
				'description' => __( 'Global ⌘K search modal that indexes posts, pages, and products — navigable entirely from the keyboard with instant results.', 'nextora' ),
				'icon'        => 'search',
			),
			array(
				'title'       => __( 'Rich Comments with Tiptap', 'nextora' ),
				'description' => __( 'Rich-text comment editor built on Tiptap with KSES sanitization — supports bold, italic, links, and blockquotes.', 'nextora' ),
				'icon'        => 'message-square',
			),
			array(
				'title'       => __( 'WooCommerce Ready', 'nextora' ),
				'description' => __( 'Full WooCommerce support with mini cart, account integration in the header block, and styled product templates.', 'nextora' ),
				'icon'        => 'shopping-cart',
			),
			/* array( */
			/* 	'title'       => __( 'GiftFlow Donations', 'nextora' ), */
			/* 	'description' => __( 'Campaign-based donation and fundraising platform integration — theme declares native support for the GiftFlow plugin.', 'nextora' ), */
			/* 	'icon'        => 'heart', */
			/* ), */
			array(
				'title'       => __( 'Custom Theme Blocks', 'nextora' ),
				'description' => __( 'Purpose-built Gutenberg blocks — Hero Section, Post Grid, Image Galleries, Testimonial Carousel, Call to Action, and more.', 'nextora' ),
				'icon'        => 'boxes',
			),
			array(
				'title'       => __( 'Accessibility First', 'nextora' ),
				'description' => __( 'WCAG 2.1 AA compliant patterns — semantic HTML, keyboard navigation, screen-reader text, and skip links throughout.', 'nextora' ),
				'icon'        => 'accessibility',
			),
		),
		'compatibility' => array(
			'wordpress' => $theme->get( 'Requires at least' ) ?: '6.4',
			'php'       => $theme->get( 'Requires PHP' ) ?: '8.1',
		),
		'changelog'     => array(
			array(
				'version' => '0.0.10',
				'date'    => '',
				'changes' => array(
					__( 'Updated block editor styles for core/table and core/code blocks.', 'nextora' ),
					__( 'Improved header navigation accessibility and keyboard support.', 'nextora' ),
					__( 'Fixed modal focus trap edge cases on mobile devices.', 'nextora' ),
				),
			),
			array(
				'version' => '0.0.9',
				'date'    => '',
				'changes' => array(
					__( 'Added Spotlight Search block with REST API integration.', 'nextora' ),
					__( 'Introduced GSAP scroll-animation library — class-driven reveal animations.', 'nextora' ),
					__( 'Updated Tailwind to v4 with new CSS-first configuration.', 'nextora' ),
				),
			),
			array(
				'version' => '0.0.8',
				'date'    => '',
				'changes' => array(
					__( 'Added Tiptap-based rich-text comment editor.', 'nextora' ),
					__( 'New theme blocks: Image Gallery Grid, Image Gallery Slide, Scrolling Promotion.', 'nextora' ),
					__( 'Expanded theme.json presets — fluid typography and spacing scales.', 'nextora' ),
				),
			),
			array(
				'version' => '0.0.7',
				'date'    => '',
				'changes' => array(
					__( 'Declared WooCommerce and GiftFlow theme support.', 'nextora' ),
					__( 'New theme blocks: Call to Action, Testimonial Carousel, Page Title.', 'nextora' ),
					__( 'Added header mini cart and account portal.', 'nextora' ),
				),
			),
		),
		'quickLinks'    => array(
			array(
				'title'       => __( 'Theme Documentation', 'nextora' ),
				'url'         => 'https://beplusthemes.com/docs/nextora/',
				'description' => __( 'Setup guides, block reference, and developer docs.', 'nextora' ),
			),
			array(
				'title'       => __( 'Support Center', 'nextora' ),
				'url'         => 'https://beplusthemes.com/support/',
				'description' => __( 'Open a ticket or browse the knowledge base.', 'nextora' ),
			),
			array(
				'title'       => __( 'Child Themes & Extensions', 'nextora' ),
				'url'         => 'https://beplusthemes.com/nextora-shop/',
				'description' => __( 'Browse premium child themes and compatible plugins.', 'nextora' ),
			),
			array(
				'title'       => __( 'Beplus Themes', 'nextora' ),
				'url'         => 'https://beplusthemes.com/',
				'description' => __( 'Visit the theme author website.', 'nextora' ),
			),
		),
		'gallery'       => array(
			array(
				'id'          => 'hero-demo',
				'type'        => 'image',
				'url'         => 'https://pub-0645c3b9d3674132af6b362484df0f3c.r2.dev/Nextora/Gif/ezgif-7d8f50784db02272.gif',
				'thumbnail'   => 'https://pub-0645c3b9d3674132af6b362484df0f3c.r2.dev/Nextora/Gif/ezgif-7d8f50784db02272.gif',
				'title'       => __( 'Hero Section', 'nextora' ),
				'description' => __( 'Full-width hero block with customizable heading, CTA buttons, and background media.', 'nextora' ),
			),
			array(
				'id'          => 'post-grid',
				'type'        => 'image',
				'url'         => 'https://pub-0645c3b9d3674132af6b362484df0f3c.r2.dev/Nextora/Gif/blog-posts-ezgif.com-video-to-gif-converter.gif',
				'thumbnail'   => 'https://pub-0645c3b9d3674132af6b362484df0f3c.r2.dev/Nextora/Gif/blog-posts-ezgif.com-video-to-gif-converter.gif',
				'title'       => __( 'Post Grid', 'nextora' ),
				'description' => __( 'Flexible post grid block with filtering, pagination, and multiple layout options.', 'nextora' ),
			),
			array(
				'id'          => 'image-gallery',
				'type'        => 'image',
				'url'         => 'https://pub-0645c3b9d3674132af6b362484df0f3c.r2.dev/Nextora/Gif/nextora-image-gallery-ezgif.com-video-to-gif-converter.gif',
				'thumbnail'   => 'https://pub-0645c3b9d3674132af6b362484df0f3c.r2.dev/Nextora/Gif/nextora-image-gallery-ezgif.com-video-to-gif-converter.gif',
				'title'       => __( 'Image Gallery', 'nextora' ),
				'description' => __( 'Responsive image gallery with grid and slider layout modes, lightbox support, and lazy loading.', 'nextora' ),
			),
			array(
				'id'          => 'rich-text-comments',
				'type'        => 'image',
				'url'         => 'https://pub-0645c3b9d3674132af6b362484df0f3c.r2.dev/Nextora/Gif/rich-text-comment-ezgif.com-video-to-gif-converter.gif',
				'thumbnail'   => 'https://pub-0645c3b9d3674132af6b362484df0f3c.r2.dev/Nextora/Gif/rich-text-comment-ezgif.com-video-to-gif-converter.gif',
        'title'       => __( 'Rich-Text Comments', 'nextora' ),
        'description' => __( 'Enables rich text formatting in comments, including bold, italic, and more.', 'nextora' ),
			),
			/* array( */
			/* 	'id'          => 'call-to-action', */
			/* 	'type'        => 'image', */
			/* 	'url'         => '', */
			/* 	'thumbnail'   => '', */
			/* 	'title'       => __( 'Call to Action', 'nextora' ), */
			/* 	'description' => __( 'Conversion-focused CTA block with gradient backgrounds, button styles, and layout options.', 'nextora' ), */
			/* ), */
			array(
				'id'          => 'spotlight-search',
				'type'        => 'image',
				'url'         => 'https://pub-0645c3b9d3674132af6b362484df0f3c.r2.dev/Nextora/Gif/the-nextora-search-ezgif.com-video-to-gif-converter.gif',
				'thumbnail'   => 'https://pub-0645c3b9d3674132af6b362484df0f3c.r2.dev/Nextora/Gif/the-nextora-search-ezgif.com-video-to-gif-converter.gif',
				'title'       => __( 'Spotlight Search', 'nextora' ),
				'description' => __( 'Command-K search modal with instant results across posts, pages, and products.', 'nextora' ),
      ),
      array(
        'id'          => 'Support-multiple-color-presets',
        'type'        => 'image',
        'url'         => 'https://pub-0645c3b9d3674132af6b362484df0f3c.r2.dev/Nextora/Gif/REC-20260710161312-ezgif.com-video-to-gif-converter.gif',
        'thumbnail'   => 'https://pub-0645c3b9d3674132af6b362484df0f3c.r2.dev/Nextora/Gif/REC-20260710161312-ezgif.com-video-to-gif-converter.gif',
        'title'       => __( 'Supports Over 5 Color Presets', 'nextora' ),
        'description' => __( 'Notification bar that scrolls across the top of the page with customizable text and links.', 'nextora' ),
      ),
    ),
	);

	return apply_filters( 'nextora_addon_overview_data', $data );
}
