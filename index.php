<?php
/**
 * Main fallback template (WordPress Template Hierarchy).
 *
 * `index.php` is required and is the last fallback. WordPress uses it when no
 * more specific template exists, for example:
 *
 * - Blog posts index (Settings → Reading → “Your latest posts”)
 * - Any archive type if you have not added `home.php`, `archive.php`, etc.
 * - Search results use `search.php` when present
 *
 * Dev tips:
 * - Add `home.php` if you want the blog index markup to differ from this file.
 * - Add `archive.php` / `category.php` / `tag.php` for archive-specific markup.
 * - `front-page.php` takes over the site front when assigned in Reading settings.
 *
 * @package Nextora
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */

declare(strict_types=1);

get_header();
?>
<main id="primary" class="wp-site-blocks nextora-main" role="main">
	<?php
	if ( have_posts() ) {
		?>
		<div class="nextora-content-shell nextora-content-shell--wide">
			<div
				class="nextora-posts-grid grid grid-cols-1 items-stretch gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-8 md:gap-x-6 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-10"
			>
				<?php
				$nextora_index_post = 0;
				while ( have_posts() ) {
					the_post();
					get_template_part(
						'template-parts/content',
						'article',
						array(
							'show_meta'     => true,
							'use_excerpt'   => true,
							'link_title'    => true,
							'layout'        => 'card',
							'title_heading' => 'h2',
							'card_lead'     => ( 0 === $nextora_index_post && ! is_paged() ),
						)
					);
					++$nextora_index_post;
				}
				?>
			</div>

			<div class="nextora-pagination-wrap nextora-pagination-wrap--archive mx-0 mt-[clamp(2rem,5vw,3rem)] max-w-none border-t border-contrast/10 px-0 pt-[clamp(1.5rem,4vw,2.25rem)]">
				<?php
				the_posts_pagination(
					array(
						'mid_size'  => 2,
						'prev_text' => __( 'Previous', 'nextora' ),
						'next_text' => __( 'Next', 'nextora' ),
					)
				);
				?>
			</div>
		</div>
		<?php
	} else {
		?>
		<div class="nextora-content-shell">
			<?php get_template_part( 'template-parts/content', 'none' ); ?>
		</div>
		<?php
	}
	?>
</main>
<?php
get_footer();
