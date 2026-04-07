<?php
/**
 * Static page template.
 *
 * @package Nextora
 */

declare(strict_types=1);

get_header();
?>
<main id="primary" class="wp-site-blocks nextora-main" role="main">
	<div class="nextora-content-shell">
		<?php
		while ( have_posts() ) :
			the_post();
			get_template_part(
				'template-parts/content',
				'article',
				array(
					'show_meta'   => false,
					'use_excerpt' => false,
					'link_title'  => false,
				)
			);
		endwhile;
		?>
	</div>
</main>
<?php
get_footer();
