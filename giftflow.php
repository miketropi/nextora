<?php
/**
 * GiftFlow main template file
 *
 * @package Nextora
 */

get_header(); ?>

	<main id="primary" class="wp-site-blocks nextora-main nextora-singular nextora-singular--campaign nextora-content-shell nextora-content-shell--wide-size !mt-20">
		<?php giftflow_content(); ?>  
  </main>

<?php
get_footer(); 
