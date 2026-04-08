<?php
/**
 * Search results template.
 *
 * @package Nextora
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 */

declare(strict_types=1);

get_header();

$nextora_search_query = get_search_query();
?>
<main id="primary" class="wp-site-blocks nextora-main nextora-search" role="main">
	<?php nextora_render_page_heading(); ?>
	<?php
	if ( have_posts() ) {
		?>
		<div class="nextora-content-shell nextora-content-shell--wide">
			<div
				class="nextora-posts-grid nextora-search-results grid grid-cols-1 items-stretch gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-8 md:gap-x-6 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-10"
			>
				<?php
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
							'card_lead'     => false,
						)
					);
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
			<?php
			get_template_part(
				'template-parts/content',
				'none',
				array(
					'title'       => '' !== $nextora_search_query
						? sprintf(
							/* translators: %s: search query */
							__( 'No results for "%s"', 'nextora' ),
							$nextora_search_query
						)
						: __( 'No results', 'nextora' ),
					'message'     => __( 'Try different keywords or check the spelling.', 'nextora' ),
					'show_search' => true,
				)
			);
			?>
		</div>
		<?php
	}
	?>
</main>
<?php
get_footer();
