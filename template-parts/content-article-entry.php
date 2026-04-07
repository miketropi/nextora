<?php
/**
 * Article body: excerpt or content, optional “Read more” link.
 *
 * Expects `$args` from {@see get_template_part()} — same array as {@see nextora_content_article_vars()}.
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! isset( $args ) || ! is_array( $args ) ) {
	return;
}

$na = $args;
?>

<div class="<?php echo esc_attr( $na['entry_classes'] ); ?>">
	<?php
	if ( $na['use_excerpt'] ) {
		the_excerpt();
	} else {
		the_content();
	}
	?>
</div>

<?php if ( $na['use_excerpt'] && $na['link_title'] && '' !== $na['permalink'] ) : ?>
	<p class="<?php echo esc_attr( $na['read_more_wrap'] ); ?>">
		<a
			href="<?php echo esc_url( $na['permalink'] ); ?>"
			class="<?php echo esc_attr( $na['read_more_link'] ); ?>"
		>
			<?php esc_html_e( 'Read more', 'nextora' ); ?>
			<span class="sr-only"><?php echo esc_html( sprintf( ' — %s', $na['title'] ) ); ?></span>
		</a>
	</p>
<?php endif; ?>
