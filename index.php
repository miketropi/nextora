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
