<?php
/**
 * Empty loop / no results (404 search, empty archive, etc.).
 *
 * Optional `$args` from {@see get_template_part()}:
 * - `title` (string) — heading above the message
 * - `message` (string) — body text (optional if `title` alone is enough)
 * - `show_search` (bool) — output {@see get_search_form()} below the message
 *
 * @package Nextora
 */

declare(strict_types=1);

$nextora_none = isset( $args ) && is_array( $args ) ? $args : array();
$nextora_title       = isset( $nextora_none['title'] ) && is_string( $nextora_none['title'] ) ? $nextora_none['title'] : '';
$nextora_message     = isset( $nextora_none['message'] ) && is_string( $nextora_none['message'] ) ? $nextora_none['message'] : '';
$nextora_show_search = ! empty( $nextora_none['show_search'] );

$nextora_has_custom = ( '' !== $nextora_title || '' !== $nextora_message || $nextora_show_search );
?>
<div class="border-b border-secondary/25 py-[clamp(1.25rem,3.5vw,2rem)]">
	<?php if ( ! $nextora_has_custom ) : ?>
		<p class="m-0 text-contrast"><?php esc_html_e( 'Nothing found.', 'nextora' ); ?></p>
	<?php else : ?>
		<?php if ( '' !== $nextora_title ) : ?>
			<h1 class="m-0 text-2xl font-semibold tracking-tight text-contrast sm:text-3xl">
				<?php echo esc_html( $nextora_title ); ?>
			</h1>
		<?php endif; ?>
		<?php if ( '' !== $nextora_message ) : ?>
			<p class="<?php echo '' !== $nextora_title ? 'mt-3' : 'm-0'; ?> mb-0 text-base leading-relaxed text-secondary">
				<?php echo esc_html( $nextora_message ); ?>
			</p>
		<?php endif; ?>
		<?php if ( $nextora_show_search ) : ?>
			<div class="nextora-none-search mt-8 max-w-md">
				<?php get_search_form( array( 'aria_label' => __( 'Search again', 'nextora' ) ) ); ?>
			</div>
		<?php endif; ?>
	<?php endif; ?>
</div>
