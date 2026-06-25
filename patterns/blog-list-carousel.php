<?php
/**
 * Title: Blog List Carousel
 * Slug: nextora/blog-list-carousel
 * Categories: featured
 * Keywords: blog, list, carousel, posts
 * Description: A section displaying a list of blog posts with images and titles in a carousel.
 *
 * @package Nextora
 * @subpackage Patterns
 */

?>

<!-- wp:group {"style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"0","right":"0"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><!-- wp:group {"align":"wide","style":{"spacing":{"margin":{"bottom":"var:preset|spacing|30"},"blockGap":"1rem"}},"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between","verticalAlignment":"center"}} -->
<div class="wp-block-group alignwide" style="margin-bottom:var(--wp--preset--spacing--30)"><!-- wp:group {"layout":{"type":"constrained","contentSize":"600px"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"align":"wide","className":"animation-text-typewriter","style":{"typography":{"textAlign":"left"}}} -->
<p class="has-text-align-left alignwide animation-text-typewriter">Our Blogs</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"align":"wide","className":"animation-text-reveal-chars-rise","style":{"typography":{"textAlign":"left"},"spacing":{"margin":{"bottom":"0","top":"0.5rem"}}}} -->
<h2 class="wp-block-heading has-text-align-left alignwide animation-text-reveal-chars-rise" style="margin-top:0.5rem;margin-bottom:0">Latest Stories</h2>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:nextora/advanced-button {"buttonAlign":"right","style":{"layout":{"selfStretch":"fixed","flexSize":"100px"}}} -->
<div class="wp-block-nextora-advanced-button nextora-advanced-button__inner"><!-- wp:nextora/advanced-button-button {"buttonStyle":"outline","hoverEffect":"color-swap","hoverBackgroundColor":"contrast","hoverTextColor":"base"} /--></div>
<!-- /wp:nextora/advanced-button --></div>
<!-- /wp:group -->

<!-- wp:nextora/blog-list-carousel {"align":"full","style":{"spacing":{"padding":{"top":"0","bottom":"var:preset|spacing|50","left":"var:preset|spacing|30","right":"var:preset|spacing|30"}}}} /--></div>
<!-- /wp:group -->
