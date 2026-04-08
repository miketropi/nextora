<?php
/**
 * Article share block: default targets, filters, and render helper.
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Allowed tags for share toolbar SVG icons (passed through wp_kses).
 *
 * @return array<string, array<string, bool>>
 */
function nextora_article_share_icon_allowed_html(): array {
	$allowed = array(
		'svg'    => array(
			'xmlns'       => true,
			'width'       => true,
			'height'      => true,
			'viewbox'     => true,
			'viewBox'     => true,
			'fill'        => true,
			'class'       => true,
			'stroke'      => true,
			'stroke-width' => true,
			'stroke-linecap' => true,
			'stroke-linejoin' => true,
			'aria-hidden' => true,
			'focusable'   => true,
		),
		'path'   => array(
			'd'    => true,
			'fill' => true,
			'stroke' => true,
			'stroke-width' => true,
			'stroke-linecap' => true,
			'stroke-linejoin' => true,
		),
		'rect'   => array(
			'width' => true,
			'height' => true,
			'x' => true,
			'y' => true,
			'rx' => true,
			'ry' => true,
		),
		'circle' => array(
			'cx' => true,
			'cy' => true,
			'r'  => true,
		),
	);

	/**
	 * Extend or replace allowed tags/attributes for share icon SVG markup.
	 *
	 * @param array<string, array<string, bool>> $allowed Tags for {@see wp_kses()}.
	 */
	return apply_filters( 'nextora_article_share_icon_allowed_html', $allowed );
}

/**
 * Build default share actions (X, Facebook, LinkedIn, email, copy URL).
 *
 * Third parties: use {@see 'nextora_article_share_items'} to reorder, remove, or append items.
 * Each item:
 * - `id` (string) — stable slug for `nextora_article_share_button_classes`.
 * - `type` — `link` | `copy`.
 * - `url` (string) — for `link` (already encoded query where needed).
 * - `target` (string) — e.g. `_blank`; empty = none.
 * - `rel` (string) — for `link`; empty = none.
 * - `label` (string) — screen reader + visible where applicable.
 * - `icon_html` (string) — inline SVG.
 *
 * @param int    $post_id   Post ID.
 * @param string $permalink Canonical URL.
 * @param string $title     Post title.
 * @param array<string, mixed> $article_args {@see nextora_content_article_vars()}.
 * @return list<array<string, mixed>>
 */
function nextora_get_article_share_items( int $post_id, string $permalink, string $title, array $article_args ): array {
	$share_title_enc = rawurlencode( $title );
	$share_url_enc   = rawurlencode( $permalink );
	$email_body      = $permalink . "\n\n" . $title;

	$items = array(
		array(
			'id'        => 'x',
			'type'      => 'link',
			'url'       => 'https://twitter.com/intent/tweet?url=' . $share_url_enc . '&text=' . $share_title_enc,
			'target'    => '_blank',
			'rel'       => 'nofollow noopener noreferrer',
			'label'     => __( 'Share on X', 'nextora' ),
			'icon_html' => '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" class="block shrink-0" aria-hidden="true" focusable="false"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
		),
		array(
			'id'        => 'facebook',
			'type'      => 'link',
			'url'       => 'https://www.facebook.com/sharer/sharer.php?u=' . $share_url_enc,
			'target'    => '_blank',
			'rel'       => 'nofollow noopener noreferrer',
			'label'     => __( 'Share on Facebook', 'nextora' ),
			'icon_html' => '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="block shrink-0" aria-hidden="true" focusable="false"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
		),
		array(
			'id'        => 'linkedin',
			'type'      => 'link',
			'url'       => 'https://www.linkedin.com/sharing/share-offsite/?url=' . $share_url_enc,
			'target'    => '_blank',
			'rel'       => 'nofollow noopener noreferrer',
			'label'     => __( 'Share on LinkedIn', 'nextora' ),
			'icon_html' => '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="block shrink-0" aria-hidden="true" focusable="false"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>',
		),
		array(
			'id'        => 'email',
			'type'      => 'link',
			'url'       => 'mailto:?subject=' . rawurlencode( $title ) . '&body=' . rawurlencode( $email_body ),
			'target'    => '',
			'rel'       => '',
			'label'     => __( 'Share by email', 'nextora' ),
			'icon_html' => '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="block shrink-0" aria-hidden="true" focusable="false"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
		),
		array(
			'id'        => 'copy',
			'type'      => 'copy',
			'url'       => '',
			'target'    => '',
			'rel'       => '',
			'label'     => __( 'Copy link', 'nextora' ),
			'icon_html' => '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="block shrink-0" aria-hidden="true" focusable="false"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
		),
	);

	/**
	 * Filter share toolbar items before render.
	 *
	 * @param list<array<string, mixed>> $items         Item definitions.
	 * @param int                        $post_id       Post ID.
	 * @param array<string, mixed>       $article_args  Vars from {@see nextora_content_article_vars()}.
	 * @param string                     $permalink     Post URL.
	 * @param string                     $title         Post title.
	 */
	return apply_filters( 'nextora_article_share_items', $items, $post_id, $article_args, $permalink, $title );
}

/**
 * Echo the share region (or filtered full markup).
 *
 * @param array<string, mixed> $article_args {@see nextora_content_article_vars()}.
 * @param string               $permalink    Post URL.
 * @param string               $title        Post title.
 */
function nextora_render_article_share_block( array $article_args, string $permalink, string $title ): void {
	$post_id = (int) get_the_ID();

	/**
	 * Replace the entire share block HTML. Return a non-empty string to skip default output.
	 * HTML must be safe for the front end; escape output in your callback.
	 *
	 * @param string|null          $markup       Default null (use built-in list).
	 * @param int                  $post_id      Post ID.
	 * @param array<string, mixed> $article_args Article template args.
	 * @param string               $permalink    Post URL.
	 * @param string               $title        Post title.
	 */
	$custom = apply_filters( 'nextora_article_share_markup', null, $post_id, $article_args, $permalink, $title );
	if ( is_string( $custom ) && '' !== trim( $custom ) ) {
		echo $custom; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- full replacement; integrators must escape.
		return;
	}

	$default_btn = 'nextora-article-share__btn inline-flex size-7 shrink-0 items-center justify-center rounded-md border border-secondary/35 bg-base text-contrast transition hover:border-primary/40 hover:bg-surface hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

	/**
	 * Classes on the outer share wrapper (the element with `data-nextora-article-share`).
	 *
	 * @param string               $classes      Space-separated Tailwind / utility classes.
	 * @param int                  $post_id      Post ID.
	 * @param array<string, mixed> $article_args Article args.
	 */
	$wrap_classes = apply_filters(
		'nextora_article_share_wrapper_classes',
		'nextora-article-share flex flex-col justify-end gap-2 p-2 bg-[#f1f5f9] rounded-md sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3',
		$post_id,
		$article_args
	);

	/**
	 * Heading text above the share buttons (plain text; escaped on output).
	 *
	 * @param string               $text         Default translated “Share”.
	 * @param int                  $post_id      Post ID.
	 * @param array<string, mixed> $article_args Article args.
	 */
	$heading = apply_filters( 'nextora_article_share_heading_text', __( 'Share', 'nextora' ), $post_id, $article_args );
	$heading = is_string( $heading ) ? $heading : __( 'Share', 'nextora' );

	/**
	 * Accessible label for the button group.
	 *
	 * @param string               $label        Default translated string.
	 * @param int                  $post_id      Post ID.
	 * @param array<string, mixed> $article_args Article args.
	 */
	$group_label = apply_filters( 'nextora_article_share_group_aria_label', __( 'Share this post', 'nextora' ), $post_id, $article_args );
	$group_label = is_string( $group_label ) ? $group_label : __( 'Share this post', 'nextora' );

	/**
	 * Classes on the flex row that wraps share controls.
	 *
	 * @param string               $classes      Space-separated classes.
	 * @param int                  $post_id      Post ID.
	 * @param array<string, mixed> $article_args Article args.
	 */
	$buttons_wrap_classes = apply_filters(
		'nextora_article_share_buttons_wrap_classes',
		'flex flex-wrap items-center gap-x-1.5 gap-y-1',
		$post_id,
		$article_args
	);

	$items   = nextora_get_article_share_items( $post_id, $permalink, $title, $article_args );
	$icon_ok = nextora_article_share_icon_allowed_html();

	/** @var list<array<string, mixed>> $items */
	?>
	<div class="<?php echo esc_attr( $wrap_classes ); ?>" data-nextora-article-share>
		<?php
		/**
		 * Fires before the share heading and controls.
		 *
		 * @param int                  $post_id      Post ID.
		 * @param array<string, mixed> $article_args Article args.
		 * @param string               $permalink    Post URL.
		 */
		do_action( 'nextora_article_share_before', $post_id, $article_args, $permalink );
		?>
		<p class="m-0 text-[0.6875rem] font-semibold uppercase tracking-wider text-secondary"><?php echo esc_html( $heading ); ?></p>
		<div class="<?php echo esc_attr( $buttons_wrap_classes ); ?>" role="group" aria-label="<?php echo esc_attr( $group_label ); ?>">
			<?php
			foreach ( $items as $item ) {
				if ( ! is_array( $item ) ) {
					continue;
				}
				$id = isset( $item['id'] ) && is_string( $item['id'] ) ? $item['id'] : '';

				/**
				 * Adjust or remove a single share item before render (return empty array to skip).
				 *
				 * @param array<string, mixed> $item         Item data.
				 * @param string               $id           Item id (may be empty if malformed).
				 * @param int                  $post_id      Post ID.
				 * @param array<string, mixed> $article_args Article args.
				 */
				$item = apply_filters( 'nextora_article_share_item', $item, $id, $post_id, $article_args );
				if ( ! is_array( $item ) || empty( $item ) ) {
					continue;
				}

				$type = isset( $item['type'] ) && is_string( $item['type'] ) ? $item['type'] : 'link';
				$id   = isset( $item['id'] ) && is_string( $item['id'] ) ? $item['id'] : $type;

				/**
				 * Classes for one share control (link or button).
				 *
				 * @param string               $classes      Button/link classes.
				 * @param string               $id           Item id (x, facebook, copy, …).
				 * @param array<string, mixed> $item         Item data.
				 * @param int                  $post_id      Post ID.
				 * @param array<string, mixed> $article_args Article args.
				 */
				$btn_class = apply_filters( 'nextora_article_share_button_classes', $default_btn, $id, $item, $post_id, $article_args );
				$btn_class = is_string( $btn_class ) ? $btn_class : $default_btn;

				if ( ! empty( $item['class'] ) && is_string( $item['class'] ) ) {
					$btn_class .= ' ' . $item['class'];
				}

				$label     = isset( $item['label'] ) && is_string( $item['label'] ) ? $item['label'] : '';
				$icon_html = isset( $item['icon_html'] ) && is_string( $item['icon_html'] ) ? $item['icon_html'] : '';

				if ( 'copy' === $type ) {
					?>
					<button
						type="button"
						class="<?php echo esc_attr( $btn_class ); ?>"
						data-nextora-copy-url
						data-url="<?php echo esc_attr( $permalink ); ?>"
						aria-label="<?php echo esc_attr( $label ); ?>"
					>
						<span class="sr-only"><?php echo esc_html( $label ); ?></span>
						<?php echo wp_kses( $icon_html, $icon_ok ); ?>
					</button>
					<?php
					continue;
				}

				$url = isset( $item['url'] ) && is_string( $item['url'] ) ? $item['url'] : '';
				if ( '' === $url ) {
					continue;
				}

				$target = isset( $item['target'] ) && is_string( $item['target'] ) ? $item['target'] : '';
				$rel    = isset( $item['rel'] ) && is_string( $item['rel'] ) ? $item['rel'] : '';
				?>
				<a
					class="<?php echo esc_attr( $btn_class ); ?>"
					href="<?php echo esc_url( $url ); ?>"
					<?php echo '' !== $target ? ' target="' . esc_attr( $target ) . '"' : ''; ?>
					<?php echo '' !== $rel ? ' rel="' . esc_attr( $rel ) . '"' : ''; ?>
				>
					<span class="sr-only"><?php echo esc_html( $label ); ?></span>
					<?php echo wp_kses( $icon_html, $icon_ok ); ?>
				</a>
				<?php
			}
			?>
			<p class="m-0 basis-full text-xs font-medium text-primary empty:hidden sm:basis-auto sm:self-center sm:ps-1" data-nextora-copy-feedback></p>
		</div>
		<span class="sr-only" role="status" aria-live="polite" data-nextora-copy-status></span>
		<?php
		/**
		 * Fires after the share controls and status region.
		 *
		 * @param int                  $post_id      Post ID.
		 * @param array<string, mixed> $article_args Article args.
		 * @param string               $permalink    Post URL.
		 */
		do_action( 'nextora_article_share_after', $post_id, $article_args, $permalink );
		?>
	</div>
	<?php
}
