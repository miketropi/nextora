<?php
/**
 * Blog posts index (Reading → “Your latest posts” or the designated Posts page).
 *
 * @package Nextora
 */

declare(strict_types=1);

get_header();
?>
<main id="primary" class="wp-site-blocks nextora-main nextora-home" role="main">
	<?php nextora_render_page_heading(); ?>
	<?php
	if ( have_posts() ) {
		get_template_part( 'template-parts/main-archive', 'loop' );
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
