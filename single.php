<?php
/**
 * Single post template.
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
				<p class="mt-2 text-sm text-secondary">
					<?php
					$published_w3c = get_the_date( DATE_W3C );
					$published     = get_the_date();
					?>
					<time datetime="<?php echo esc_attr( is_string( $published_w3c ) ? $published_w3c : '' ); ?>"><?php echo esc_html( is_string( $published ) ? $published : '' ); ?></time>
				</p>
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
