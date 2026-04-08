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
	<?php do_action( 'nextora_footer_before' ); ?>
	<?php block_template_part( 'footer' ); ?>
	<?php do_action( 'nextora_footer_after' ); ?>
</footer>
<?php wp_footer(); ?>
</body>
</html>
