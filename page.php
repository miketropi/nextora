<?php
/**
 * Page template.
 *
 * @package Nextora
 */

declare(strict_types=1);

get_header();
?>
<main id="primary" class="wp-site-blocks nextora-main py-10">
	<?php
	while ( have_posts() ) :
		the_post();
		?>
		<article <?php post_class(); ?>>
			<header class="nextora-container mb-4 px-4">
				<?php the_title( '<h1 class="text-3xl font-semibold text-contrast">', '</h1>' ); ?>
			</header>
			<div class="entry-content wp-block-post-content is-layout-constrained max-w-none leading-relaxed text-contrast [&_a]:text-primary [&_a]:underline">
				<?php the_content(); ?>
			</div>
		</article>
		<?php
	endwhile;
	?>
</main>
<?php
get_footer();
