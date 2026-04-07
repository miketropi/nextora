<?php
/**
 * Single post template.
 *
 * @package Nextora
 */

declare(strict_types=1);

get_header();
?>
<main id="primary" class="wp-site-blocks nextora-main nextora-singular nextora-singular--post" role="main">
	<div class="nextora-content-shell">
		<?php
		while ( have_posts() ) :
			the_post();
			get_template_part(
				'template-parts/content',
				'article',
				array(
					'content_type' => 'post',
					'show_meta'    => true,
					'use_excerpt'  => false,
					'link_title'   => false,
				)
			);
		endwhile;

		if (
			( comments_open() || get_comments_number() )
			&& post_type_supports( get_post_type(), 'comments' )
		) {
			comments_template();
		}
		?>
	</div>
</main>
<?php
get_footer();
