<?php
/**
 * WooCommerce main template file
 *
 * @package Go
 */

get_header(); ?>

	<main id="primary" class="wp-site-blocks nextora-main nextora-singular nextora-singular--product nextora-content-shell nextora-content-shell--wide-size !mt-20">
		<?php woocommerce_content(); ?>  
</main>

<?php
get_footer(); 
