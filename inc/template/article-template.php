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
			'show_meta'           => false,
			'use_excerpt'         => false,
			'link_title'          => false,
			'layout'              => 'default',
			'title_heading'       => '',
			'card_lead'           => false,
			// Singular context: post (editorial) or page (document). Empty = legacy neutral.
			'content_type'        => '',
			'show_placeholder'    => null,
			// When false, title (H1/H2) is omitted — e.g. {@see template-parts/page-heading.php} supplies H1.
			'show_entry_title'    => true,
			// When false, featured / placeholder figure is omitted (hero image in page heading).
			'show_featured_media' => true,
		)
	);

	$content_type = is_string( $resolved['content_type'] ) ? $resolved['content_type'] : '';
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
		$title_classes = '!text-[1.5rem] font-semibold tracking-tight text-contrast !mt-0 !mb-1 !sm:text-lg leading-snug';
	} elseif ( 'page' === $content_type ) {
		/* Static page: document-style title, calmer than editorial posts. */
		$title_classes = 'text-2xl font-semibold tracking-tight text-contrast !mt-0 sm:text-3xl sm:leading-tight leading-snug';
	} else {
		/* Post (or neutral default): editorial headline scale. */
		$title_classes = 'text-xl font-semibold tracking-tight text-contrast !mt-2 sm:text-2xl leading-snug';
	}

	$title_link_classes = 'text-inherit no-underline transition-colors duration-200 hover:text-primary hover:underline hover:underline-offset-[0.2em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm';

	$post_classes = array( 'nextora-article' );
	if ( ! $is_card && 'page' === $content_type ) {
		$post_classes[] = 'nextora-article--page';
	}
	if ( ! $is_card && 'post' === $content_type ) {
		$post_classes[] = 'nextora-article--post';
	}
	if ( $is_card ) {
		$card_layout = array(
			'group',
			'flex',
			'flex-col',
			'h-full',
			'mb-0',
			'rounded-2xl',
			'border',
			'border-contrast/10',
			'bg-base',
			'shadow-sm',
			'shadow-contrast/5',
			'overflow-hidden',
			'transition-all',
			'duration-300',
			'ease-out',
			'hover:-translate-y-1',
			'hover:border-primary/25',
			'hover:shadow-lg',
			'hover:shadow-contrast/10',
			'focus-within:border-primary/20',
			'focus-within:shadow-md',
			'focus-within:ring-2',
			'focus-within:ring-primary/15',
			'focus-within:ring-offset-2',
			'focus-within:ring-offset-base',
		);
		if ( $is_card_lead ) {
			// Subtle accent only — same layout and scale as other grid cards.
			$card_layout[] = 'ring-1';
			$card_layout[] = 'ring-primary/10';
		}
		$post_classes = array_merge( $post_classes, $card_layout );
	} else {
		$post_classes[] = 'page' === $content_type
			? 'mb-[clamp(1.75rem,5vw,3rem)]'
			: 'mb-[clamp(2rem,6vw,3.5rem)]';
	}

	$inner_classes = 'flex flex-col flex-1 min-w-0';
	if ( $is_card ) {
		$inner_classes .= ' min-h-0 gap-4 px-5 pb-5 pt-4 sm:gap-5 sm:px-6 sm:pb-6 sm:pt-5';
	}

	if ( $is_card ) {
		$header_classes = 'w-full max-w-none mx-0 border-0 py-0 mb-0 pb-0';
	} elseif ( 'page' === $content_type ) {
		/* Page: no masthead rule — reads as one continuous document. */
		$header_classes = 'w-full box-border pt-0 pb-[clamp(0.35rem,1.5vw,0.65rem)] mb-[clamp(1rem,2.75vw,1.75rem)]';
	} else {
		$header_classes = 'w-full box-border mb-[clamp(1.75rem,2.25vw,2.25rem)] border-b border-secondary/25';
	}

	$entry_classes = 'entry-content nextora-entry wp-block-post-content is-layout-constrained max-w-none leading-relaxed text-contrast [&_a]:text-primary [&_a]:underline';
	if ( $is_card ) {
		$entry_classes .= ' flex-1 min-h-0 px-0 leading-relaxed text-contrast/90 [&_p]:m-0';
		$entry_classes .= ' text-[.95rem] [&_p]:line-clamp-4 sm:[&_p]:line-clamp-5';
	}

	if ( $is_card ) {
		$meta_row_classes = 'mt-3 flex flex-col gap-2 text-[0.8125rem] leading-relaxed text-secondary sm:mt-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-1.5 [&_a]:text-primary [&_a]:no-underline [&_a:hover]:underline [&_a:hover]:underline-offset-2';
	} else {
		$meta_row_classes = 'mt-2.5 flex flex-wrap gap-x-3 gap-y-1 text-[0.8125rem] leading-snug text-secondary [&_a]:text-primary [&_a]:no-underline [&_a:hover]:underline [&_a:hover]:underline-offset-2';
	}

	$meta_sep = esc_html__( ', ', 'nextora' );

	$placeholder_url = nextora_get_post_placeholder_image_url();
	$show_placeholder = $resolved['show_placeholder'];
	if ( null === $show_placeholder ) {
		$show_placeholder = 'page' !== $content_type;
	}
	$show_placeholder = (bool) $show_placeholder;
	$img_zoom_class  = 'size-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02] group-focus-within:scale-[1.02]';

	$card_thumb_size = 'medium_large';
	$thumb_img_class = $img_zoom_class;

	$card_media_class  = 'group overflow-hidden bg-surface outline-none ring-inset focus-visible:ring-2 focus-visible:ring-primary ';
	$card_media_class .= 'block aspect-[3/2] sm:aspect-video';

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
		? 'm-0 mt-auto border-t border-contrast/8 pt-4 sm:pt-5'
		: 'm-0 mt-1';
	$read_more_link = $is_card
		? 'inline-flex items-center justify-center gap-1.5 self-start rounded-full bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary no-underline transition-all duration-200 hover:bg-primary hover:text-base hover:shadow-sm active:scale-[0.98] sm:px-5 sm:py-3'
		: 'inline-flex items-center gap-1 text-sm font-semibold text-primary no-underline transition-colors hover:underline';

	$show_entry_title    = ! empty( $resolved['show_entry_title'] );
	$show_featured_media = ! empty( $resolved['show_featured_media'] );

	return array(
		'content_type'         => $content_type,
		'show_entry_title'     => $show_entry_title,
		'show_featured_media'  => $show_featured_media,
		'show_placeholder'   => $show_placeholder,
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
