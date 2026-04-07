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
	<?php block_template_part( 'footer' ); ?>
</footer>
<?php wp_footer(); ?>
</body>
</html>
