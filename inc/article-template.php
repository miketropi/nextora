<?php
/**
 * Resolved variables for {@see get_template_part()} article templates.
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Normalize `$args` from `content-article.php` into one array for layout partials.
 *
 * @param array<string, mixed> $args Template arguments.
 * @return array<string, mixed>
 */
function nextora_content_article_vars( array $args ): array {
	$resolved = wp_parse_args(
		$args,
		array(
			'show_meta'     => false,
			'use_excerpt'   => false,
			'link_title'    => false,
			'layout'        => 'default',
			'title_heading' => '',
			'card_lead'     => false,
		)
	);

	$show_meta    = (bool) $resolved['show_meta'];
	$use_excerpt  = (bool) $resolved['use_excerpt'];
	$link_title   = (bool) $resolved['link_title'];
	$layout       = is_string( $resolved['layout'] ) ? $resolved['layout'] : 'default';
	$is_card      = 'card' === $layout;
	$is_card_lead = $is_card && ! empty( $resolved['card_lead'] );

	$title_heading = $resolved['title_heading'];
	if ( ! is_string( $title_heading ) || '' === $title_heading ) {
		$title_heading = $link_title ? 'h2' : 'h1';
	}
	if ( 'h1' !== $title_heading && 'h2' !== $title_heading ) {
		$title_heading = 'h1';
	}

	$title_raw = get_the_title();
	$title     = is_string( $title_raw ) ? $title_raw : '';

	$permalink = get_permalink();
	$permalink = is_string( $permalink ) ? $permalink : '';

	if ( $is_card ) {
		$title_classes = $is_card_lead
			? 'text-lg font-semibold tracking-tight text-contrast !mt-0 sm:text-xl lg:text-2xl lg:leading-tight leading-snug'
			: 'text-base font-semibold tracking-tight text-contrast !mt-0 sm:text-[1.0625rem] leading-snug';
	} else {
		$title_classes = 'text-xl font-semibold tracking-tight text-contrast !mt-2 sm:text-2xl leading-snug';
	}

	$title_link_classes = 'text-inherit no-underline transition-colors duration-150 hover:text-primary hover:underline hover:underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm';

	$post_classes = array( 'nextora-article' );
	if ( $is_card ) {
		$card_layout = array(
			'flex',
			'flex-col',
			'h-full',
			'mb-0',
			'rounded-xl',
			'border',
			'border-secondary/20',
			'bg-base',
			'shadow-sm',
			'overflow-hidden',
			'transition-[box-shadow,border-color]',
			'duration-200',
			'ease-out',
			'hover:border-secondary/35',
			'hover:shadow-md',
		);
		if ( $is_card_lead ) {
			$card_layout = array_merge(
				$card_layout,
				array(
					'col-span-full',
					'md:flex-row',
					'md:items-stretch',
					'ring-1',
					'ring-primary/10',
					'border-primary/25',
					'shadow-md',
					'hover:border-primary/35',
					'hover:shadow-lg',
				)
			);
		}
		$post_classes = array_merge( $post_classes, $card_layout );
	} else {
		$post_classes[] = 'mb-[clamp(2rem,6vw,3.5rem)]';
	}

	$inner_classes = 'flex flex-col flex-1 min-w-0';
	if ( $is_card ) {
		$inner_classes .= ' min-h-0 gap-3 px-4 py-4 sm:gap-4 sm:px-5 sm:py-5';
		if ( $is_card_lead ) {
			$inner_classes .= ' md:flex-1 md:justify-center md:gap-4 md:py-7 md:px-6 lg:gap-5 lg:px-8 lg:py-8';
		}
	}

	$header_classes = 'w-full box-border py-[clamp(0.5rem,2vw,1rem)] mb-[clamp(0.75rem,2.25vw,1.25rem)] border-b border-secondary/25';
	if ( $is_card ) {
		$header_classes = 'w-full max-w-none mx-0 border-0 py-0 mb-0 pb-0';
	}

	$entry_classes = 'entry-content nextora-entry wp-block-post-content is-layout-constrained max-w-none leading-relaxed text-contrast [&_a]:text-primary [&_a]:underline';
	if ( $is_card ) {
		$entry_classes .= ' flex-1 min-h-0 px-0 leading-relaxed text-contrast/90 [&_p]:m-0';
		$entry_classes .= $is_card_lead
			? ' text-[0.9375rem] sm:text-base [&_p]:line-clamp-6 lg:[&_p]:line-clamp-7'
			: ' text-sm [&_p]:line-clamp-4 sm:[&_p]:line-clamp-5';
	}

	if ( $is_card ) {
		$meta_row_classes = $is_card_lead
			? 'mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-[0.8125rem] leading-snug text-secondary sm:mt-4 sm:gap-x-4 [&_a]:text-primary [&_a]:no-underline [&_a:hover]:underline [&_a:hover]:underline-offset-2'
			: 'mt-2 flex flex-col gap-1.5 text-[0.75rem] leading-snug text-secondary sm:flex-row sm:flex-wrap sm:gap-x-2.5 sm:gap-y-1 sm:text-[0.8125rem] [&_a]:text-primary [&_a]:no-underline [&_a:hover]:underline [&_a:hover]:underline-offset-2';
	} else {
		$meta_row_classes = 'mt-2.5 flex flex-wrap gap-x-3 gap-y-1 text-[0.8125rem] leading-snug text-secondary [&_a]:text-primary [&_a]:no-underline [&_a:hover]:underline [&_a:hover]:underline-offset-2';
	}

	$meta_sep = esc_html__( ', ', 'nextora' );

	$placeholder_url = nextora_get_post_placeholder_image_url();
	$img_zoom_class  = 'size-full object-cover transition-transform duration-200 ease-out group-hover:scale-[1.03] group-focus-visible:scale-[1.03]';

	$card_thumb_size = $is_card_lead ? 'large' : 'medium_large';
	$thumb_img_class = $img_zoom_class . ( $is_card_lead ? ' md:absolute md:inset-0 md:h-full md:w-full' : '' );

	$card_media_class  = 'group overflow-hidden bg-surface outline-none ring-inset focus-visible:ring-2 focus-visible:ring-primary ';
	$card_media_class .= $is_card_lead
		? 'relative block aspect-video w-full md:aspect-auto md:max-h-none md:w-full md:max-w-[42%] md:shrink-0 md:min-h-[16rem] lg:min-h-[18rem] lg:max-w-[38%]'
		: 'block aspect-video';

	$thumb_attrs = array(
		'class'    => $thumb_img_class,
		'alt'      => wp_strip_all_tags( $title ),
		'decoding' => 'async',
	);
	if ( $is_card_lead && has_post_thumbnail() ) {
		$thumb_attrs['loading']       = 'eager';
		$thumb_attrs['fetchpriority'] = 'high';
	} else {
		$thumb_attrs['loading'] = 'lazy';
	}

	$read_more_wrap = $is_card
		? ( $is_card_lead
			? 'm-0 mt-auto border-t border-secondary/20 pt-4 sm:pt-5 md:pt-5'
			: 'm-0 mt-auto border-t border-secondary/15 pt-3 sm:pt-4' )
		: 'm-0 mt-1';
	$read_more_link = ( $is_card && $is_card_lead )
		? 'inline-flex items-center gap-1 text-base font-semibold text-primary no-underline transition-colors hover:underline'
		: 'inline-flex items-center gap-1 text-sm font-semibold text-primary no-underline transition-colors hover:underline';

	return array(
		'show_meta'          => $show_meta,
		'use_excerpt'        => $use_excerpt,
		'link_title'         => $link_title,
		'layout'             => $layout,
		'is_card'            => $is_card,
		'is_card_lead'       => $is_card_lead,
		'title_heading'      => $title_heading,
		'title'              => $title,
		'permalink'          => $permalink,
		'title_classes'      => $title_classes,
		'title_link_classes' => $title_link_classes,
		'post_classes'       => $post_classes,
		'inner_classes'      => $inner_classes,
		'header_classes'     => $header_classes,
		'entry_classes'      => $entry_classes,
		'meta_row_classes'   => $meta_row_classes,
		'meta_sep'           => $meta_sep,
		'placeholder_url'    => $placeholder_url,
		'card_thumb_size'    => $card_thumb_size,
		'thumb_img_class'    => $thumb_img_class,
		'card_media_class'   => $card_media_class,
		'thumb_attrs'        => $thumb_attrs,
		'read_more_wrap'     => $read_more_wrap,
		'read_more_link'     => $read_more_link,
	);
}
