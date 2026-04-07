<?php
/**
 * Markup for {@see get_search_form()}.
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$nextora_unique_id = wp_unique_id( 'search-form-' );
?>
<form role="search" method="get" class="search-form nextora-search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label class="screen-reader-text" for="<?php echo esc_attr( $nextora_unique_id ); ?>">
		<?php esc_html_e( 'Search for:', 'nextora' ); ?>
	</label>
	<input
		type="search"
		id="<?php echo esc_attr( $nextora_unique_id ); ?>"
		class="search-field"
		value="<?php echo esc_attr( get_search_query() ); ?>"
		name="s"
		autocomplete="off"
		placeholder="<?php esc_attr_e( 'Search…', 'nextora' ); ?>"
	/>
	<input type="submit" class="search-submit" value="<?php esc_attr_e( 'Search', 'nextora' ); ?>" />
</form>
