<?php
/**
 * Comments template (used on single posts via {@see comments_template()}).
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( post_password_required() ) {
	return;
}
?>
<section
	id="comments"
	class="nextora-comments w-full border-t border-secondary/25 pb-[clamp(2rem,6vw,3.5rem)] pt-[clamp(1.5rem,4vw,2.25rem)] mt-[clamp(2rem,6vw,3.5rem)]"
	aria-label="<?php esc_attr_e( 'Comments', 'nextora' ); ?>"
>
	<?php if ( have_comments() ) : ?>
		<h2 class="!m-0 text-xl font-semibold tracking-tight text-contrast">
			<?php
			$count = (int) get_comments_number();
			if ( 1 === $count ) {
				esc_html_e( 'One response', 'nextora' );
			} else {
				printf(
					/* translators: %s: number of comments */
					esc_html( _n( '%s response', '%s responses', $count, 'nextora' ) ),
					esc_html( number_format_i18n( $count ) )
				);
			}
			?>
		</h2>
		
		<?php the_comments_navigation(); ?>
		
		<ol class="comment-list">
		<?php
		wp_list_comments(
			array(
				'style'       => 'ol',
				'short_ping'  => true,
				'avatar_size' => 48,
				'callback'    => 'nextora_render_comment',

			)
		);
		?>
		</ol>

		<?php the_comments_navigation(); ?>
	<?php endif; ?>

	<?php
	if (
		! comments_open()
		&& get_comments_number()
		&& post_type_supports( get_post_type(), 'comments' )
	) :
		?>
		<p class="mt-8 border-t border-secondary/25 pt-8 text-md text-secondary">
			<?php esc_html_e( 'Comments are closed.', 'nextora' ); ?>
		</p>
	<?php endif; ?>

	<?php comment_form( nextora_get_comment_form_args() ); ?>
</section>
