<?php
/**
 * Static page template.
 *
 * @package Nextora
 */

declare(strict_types=1);

get_header();
?>
<main id="primary" class="wp-site-blocks nextora-main nextora-singular nextora-singular--page" role="main">
	<div class="nextora-content-shell nextora-content-shell--wide-size">
		<?php
		while ( have_posts() ) :
			the_post();
			get_template_part(
				'template-parts/content',
				'article',
				array(
					'content_type' => 'page',
					'show_meta'    => false,
					'use_excerpt'  => false,
					'link_title'   => false,
				)
			);
		endwhile;
		?>
	</div>
</main>
<?php
get_footer();
