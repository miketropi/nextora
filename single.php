<?php
/**
 * Single post template.
 *
 * @package Nextora
 */

declare(strict_types=1);

get_header();

$nextora_show_sidebar = (bool) apply_filters( 'nextora_show_single_post_sidebar', true );

$nextora_main_class = 'wp-site-blocks nextora-main nextora-singular nextora-singular--post';
if ( $nextora_show_sidebar ) {
	$nextora_main_class .= ' nextora-singular--post-has-sidebar';
}

$nextora_content_shell_class = 'nextora-content-shell';
if ( $nextora_show_sidebar ) {
	$nextora_content_shell_class .= ' nextora-content-shell--wide-size';
}
?>
<main id="primary" class="<?php echo esc_attr( $nextora_main_class ); ?>" role="main">
	<?php nextora_render_page_heading(); ?>
	<?php
	$nextora_heading_ctx = nextora_get_page_heading_context();
	$nextora_heading_img = is_array( $nextora_heading_ctx ) && ! empty( $nextora_heading_ctx['image_url'] );
	?>
	<div class="<?php echo esc_attr( $nextora_content_shell_class ); ?>"> 
		<?php if ( $nextora_show_sidebar ) : ?>
		<div class="nextora-singular-post-with-sidebar flex flex-col justify-between !gap-[4rem] lg:flex-row lg:items-start lg:gap-6 xl:gap-7">
			<div class="nextora-singular-post-with-sidebar__main min-w-0 w-full max-w-[min(100%,var(--wp--style--global--content-size,720px))]">
		<?php endif; ?>
		<?php
		while ( have_posts() ) :
			the_post();
			get_template_part(
				'template-parts/content',
				'article',
				array(
					'content_type'        => 'post',
					'show_meta'           => ! $nextora_show_sidebar,
					'use_excerpt'         => false,
					'link_title'          => false,
					'show_entry_title'    => false,
					'show_featured_media' => ! $nextora_heading_img,
				)
			);
		endwhile;

		if ( comments_open() || get_comments_number() ) {
				comments_template();
		}
		?>
		<?php if ( $nextora_show_sidebar ) : ?>
			</div>
			<div class="hidden lg:block line-separator w-px bg-gray-200 self-stretch min-h-full"></div>
			<?php get_template_part( 'template-parts/content-article-sidebar', 'post' ); ?>
		</div>
		<?php endif; ?>
	</div>
</main>
<?php
get_footer();
