<?php
/**
 * Comments list markup, comment form defaults, and navigation classes.
 *
 * @package Nextora
 */

declare(strict_types=1);

/**
 * Allow minimal block HTML from Tiptap in comments (default KSES strips `p` / `br` / some link attrs).
 *
 * @param array<string, array<string, bool>> $tags    Allowed tags.
 * @param string                             $context KSES context (hook name for comments).
 * @return array<string, array<string, bool>>
 */
function nextora_kses_allowed_html_comment_tiptap( array $tags, string $context ): array {
	if ( 'pre_comment_content' !== $context ) {
		return $tags;
	}

	$tags['p']  = array();
	$tags['br'] = array();

	if ( isset( $tags['a'] ) && is_array( $tags['a'] ) ) {
		$tags['a']['rel']    = true;
		$tags['a']['class'] = true;
	}

	return $tags;
}

add_filter( 'wp_kses_allowed_html', 'nextora_kses_allowed_html_comment_tiptap', 10, 2 );

/**
 * Arguments for {@see comment_form()} (Tailwind-friendly markup).
 *
 * @return array<string, mixed>
 */
function nextora_get_comment_form_args(): array {
	$input_class = 'mt-1 block w-full max-w-2xl rounded-md box-border border border-secondary/40 bg-base px-3 py-2 text-sm text-contrast shadow-sm placeholder:text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';
	$tiptap_shell = 'nextora-tiptap-shell mb-4 max-w-2xl rounded-md border border-secondary/40 bg-base shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20';
	$ta_sync      = 'nextora-comment-textarea-sync sr-only';

	$permalink = get_permalink();
	if ( ! is_string( $permalink ) ) {
		$permalink = '';
	}

	$has_existing = (int) get_comments_number() > 0;
	$reply_title_classes = $has_existing
		? 'mt-[clamp(1.75rem,4.5vw,2.5rem)] border-t border-secondary/25 pt-[clamp(1.25rem,3.5vw,2rem)] text-lg font-semibold tracking-tight text-contrast'
		: 'mt-0 text-lg font-semibold tracking-tight text-contrast';

	return array(
		'title_reply'          => __( 'Leave a reply', 'nextora' ),
		'title_reply_to'       => __( 'Leave a reply to %s', 'nextora' ),
		'title_reply_before'   => '<h3 id="reply-title" class="!mt-2 !mb-1 ' . esc_attr( $reply_title_classes ) . '">',
		'title_reply_after'    => '</h3>',
		'cancel_reply_before'  => ' <span class="ms-2 text-sm font-normal text-secondary">',
		'cancel_reply_after'   => '</span>',
		'cancel_reply_link'    => __( 'Cancel reply', 'nextora' ),
		'label_submit'         => __( 'Post comment', 'nextora' ),
		'submit_button'        => '<input name="%1$s" type="submit" id="%2$s" class="%3$s" value="%4$s" />',
		'class_submit'         => 'inline-flex cursor-pointer rounded-md border-none bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50',
		'comment_field'        => sprintf(
			'<p class="comment-form-comment !mb-4"><label id="nextora-comment-field-label" class="block cursor-text text-sm font-medium text-contrast">%1$s <span class="text-primary" aria-hidden="true">*</span></label><div class="%3$s"><div class="nextora-tiptap-toolbar min-h-0"></div><div id="nextora-tiptap-host" data-placeholder="%2$s"></div></div><textarea id="comment" name="comment" cols="45" rows="4" maxlength="65525" class="%4$s" tabindex="-1" aria-hidden="true"></textarea></p>',
			esc_html__( 'Comment', 'nextora' ),
			esc_attr__( 'Write your comment here…', 'nextora' ),
			esc_attr( $tiptap_shell ),
			esc_attr( $ta_sync )
		),
		'comment_notes_before' => '<p class="comment-notes !mb-4 text-sm text-secondary">' . esc_html__( 'Your email address will not be published. Required fields are marked with *', 'nextora' ) . '</p>',
		'comment_notes_after'  => '',
		'class_form'           => 'nextora-comment-form comment-form space-y-1',
		'class_container'      => 'comment-respond mt-0',
		'must_log_in'          => '<p class="must-log-in !mb-4 rounded-md border border-secondary/30 bg-surface px-4 py-3 text-sm text-contrast">' . sprintf(
			/* translators: %s: login URL */
			wp_kses_post( __( 'You must be <a class="font-medium text-primary underline hover:no-underline" href="%s">logged in</a> to post a comment.', 'nextora' ) ),
			esc_url( wp_login_url( $permalink ) )
		) . '</p>',
		'logged_in_as'         => '<p class="logged-in-as !mb-4 text-sm text-secondary">' . sprintf(
			/* translators: 1: edit user link, 2: user name, 3: logout URL */
			wp_kses_post( __( 'Logged in as <a class="font-medium text-primary underline hover:no-underline" href="%1$s">%2$s</a>. <a class="font-medium text-primary underline hover:no-underline" href="%3$s">Log out?</a>', 'nextora' ) ),
			esc_url( get_edit_user_link() ),
			esc_html( wp_get_current_user()->display_name ),
			esc_url( wp_logout_url( $permalink ) )
		) . '</p>',
	);
}

add_filter(
	'comment_form_default_fields',
	static function ( array $fields ): array {
		$commenter = wp_get_current_commenter();
		$req       = (bool) get_option( 'require_name_email' );
		$req_mark  = $req ? ' <span class="text-primary" aria-hidden="true">*</span>' : '';
		$aria_req  = $req ? ' aria-required="true"' : '';

		$input_class = 'mt-1 block w-full max-w-2xl rounded-md box-border border border-secondary/40 bg-base px-3 py-2 text-sm text-contrast shadow-sm placeholder:text-secondary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

		$fields['author'] = sprintf(
			'<p class="comment-form-author !mb-4"><label class="block text-sm font-medium text-contrast" for="author">%1$s%2$s</label><input id="author" name="author" type="text" value="%3$s" size="30" maxlength="245" autocomplete="name"%4$s class="%5$s" /></p>',
			esc_html__( 'Name', 'nextora' ),
			$req_mark,
			esc_attr( $commenter['comment_author'] ),
			$aria_req,
			esc_attr( $input_class )
		);

		$fields['email'] = sprintf(
			'<p class="comment-form-email !mb-4"><label class="block text-sm font-medium text-contrast" for="email">%1$s%2$s</label><input id="email" name="email" type="email" value="%3$s" size="30" maxlength="100" autocomplete="email"%4$s class="%5$s" /></p>',
			esc_html__( 'Email', 'nextora' ),
			$req_mark,
			esc_attr( $commenter['comment_author_email'] ),
			$aria_req,
			esc_attr( $input_class )
		);

		$fields['url'] = sprintf(
			'<p class="comment-form-url !mb-4"><label class="block text-sm font-medium text-contrast" for="url">%1$s</label><input id="url" name="url" type="url" value="%2$s" size="30" maxlength="200" autocomplete="url" class="%3$s" /></p>',
			esc_html__( 'Website', 'nextora' ),
			esc_attr( $commenter['comment_author_url'] ),
			esc_attr( $input_class )
		);

		if ( isset( $fields['cookies'] ) && is_string( $fields['cookies'] ) ) {
			$fields['cookies'] = str_replace(
				'<p class="comment-form-cookies-consent">',
				'<p class="comment-form-cookies-consent !mb-4 text-sm text-secondary">',
				$fields['cookies']
			);
		}

		return $fields;
	},
	20
);

/**
 * Output one comment (HTML5 list item).
 *
 * @param WP_Comment $comment Comment object.
 * @param array<string, mixed> $args    Arguments from {@see wp_list_comments()}.
 * @param int                  $depth   Thread depth.
 */
function nextora_render_comment( $comment, array $args, int $depth ): void {
	$tag = ( 'div' === $args['style'] ) ? 'div' : 'li';

	$comment_id = (int) $comment->comment_ID;
	$link       = get_comment_link( $comment, $args );
	$link       = is_string( $link ) ? $link : '';

	$time_c = get_comment_time( DATE_W3C, false, true, $comment );
	$time_c = is_string( $time_c ) ? $time_c : '';

	$time_h = get_comment_date( '', $comment );
	$time_h = is_string( $time_h ) ? $time_h : '';

	$item_class = 'nextora-comment-item';
	if ( $depth > 1 ) {
		$item_class .= ' nextora-comment--reply';
	}
	$avatar_class = $depth > 1 ? 'size-10 rounded-full' : 'size-12 rounded-full';
	?>
	<?php if ( 'div' === $tag ) : ?>
	<div id="comment-<?php echo esc_attr( (string) $comment_id ); ?>" <?php comment_class( $item_class, $comment ); ?>>
	<?php else : ?>
	<li id="comment-<?php echo esc_attr( (string) $comment_id ); ?>" <?php comment_class( $item_class, $comment ); ?>>
	<?php endif; ?>
		<article id="div-comment-<?php echo esc_attr( (string) $comment_id ); ?>" class="nextora-comment-body comment-body flex gap-4">
			<div class="comment-author-avatar shrink-0">
				<?php
				echo get_avatar(
					$comment,
					(int) $args['avatar_size'],
					'',
					'',
					array(
						'class' => $avatar_class,
					)
				);
				?>
			</div>
			<div class="comment-meta min-w-0 flex-1">
				<footer class="comment-meta-header flex flex-wrap items-baseline gap-x-2 gap-y-1">
					<span class="fn font-semibold text-contrast"><?php echo get_comment_author_link( $comment ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
					<a href="<?php echo esc_url( $link ); ?>" class="comment-permalink hover:text-primary">
						<time datetime="<?php echo esc_attr( $time_c ); ?>"><?php echo esc_html( $time_h ); ?></time>
					</a>
					<?php
					edit_comment_link(
						__( 'Edit', 'nextora' ),
						'<span class="comment-edit-link">',
						'</span>'
					);
					?>
				</footer>
				<?php if ( '0' === (string) $comment->comment_approved ) : ?>
					<p class="comment-awaiting-moderation mb-2 rounded-md bg-surface px-3 py-2 text-sm text-secondary"><?php esc_html_e( 'Your comment is awaiting moderation.', 'nextora' ); ?></p>
				<?php endif; ?>
				<div class="comment-content text-md leading-relaxed text-contrast [&_a]:text-primary [&_a]:underline">
					<?php comment_text(); ?>
				</div>
				<?php
				comment_reply_link(
					array_merge(
						$args,
						array(
							'add_below' => 'div-comment',
							'depth'     => $depth,
							'max_depth' => $args['max_depth'],
							'before'    => '<p class="comment-reply mt-3 text-sm [&_a]:font-medium [&_a]:text-primary [&_a]:no-underline [&_a:hover]:underline">',
							'after'     => '</p>',
						)
					)
				);
				?>
			</div>
		</article>
	<?php if ( 'div' === $tag ) : ?>
	</div>
	<?php else : ?>
	</li>
	<?php endif; ?>
	<?php
}

add_filter(
	'comments_navigation_args',
	static function ( array $args ): array {
		$args['prev_text'] = __( 'Older comments', 'nextora' );
		$args['next_text'] = __( 'Newer comments', 'nextora' );
		$args['class']     = 'comment-navigation navigation flex flex-wrap justify-between gap-4 text-sm font-medium text-primary';
		return $args;
	}
);
