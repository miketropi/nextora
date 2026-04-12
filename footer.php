<?php
/**
 * Theme footer (classic template).
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<footer class="site-footer">
	<?php
	$nextora_elementor_footer = function_exists( 'elementor_theme_do_location' ) && elementor_theme_do_location( 'footer' );
	if ( ! $nextora_elementor_footer ) :
		do_action( 'nextora_footer_before' );
		block_template_part( 'footer' );
		do_action( 'nextora_footer_after' );
	endif;
	?>
</footer>
<?php wp_footer(); ?>
</body>
</html>
