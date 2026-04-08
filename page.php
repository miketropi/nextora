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
	<?php nextora_render_page_heading(); ?>
	<?php
	$nextora_heading_ctx = nextora_get_page_heading_context();
	$nextora_heading_img = is_array( $nextora_heading_ctx ) && ! empty( $nextora_heading_ctx['image_url'] );
	?>
	<div class="nextora-content-shell nextora-content-shell--wide-size">
		<?php
		while ( have_posts() ) :
			the_post();
			get_template_part(
				'template-parts/content',
				'article',
				array(
					'content_type'        => 'page',
					'show_meta'           => false,
					'use_excerpt'         => false,
					'link_title'          => false,
					'show_entry_title'    => false,
					'show_featured_media' => ! $nextora_heading_img,
				)
			);
		endwhile;
		?>
	</div>
</main>
<?php
get_footer();
