<?php
/**
 * Table of Contents — dynamic block render.
 *
 * Outputs a container with data attributes consumed by view.ts.
 * The front-end script scans headings, builds the list, and
 * manages scroll-spy / smooth-scroll behaviour.
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Inner blocks HTML (empty).
 * @var WP_Block             $block      Block instance.
 */

$title       = ! empty( $attributes['title'] ) ? wp_kses( $attributes['title'], array( 'strong' => array(), 'em' => array() ) ) : '';
$selector    = ! empty( $attributes['selector'] ) ? (string) $attributes['selector'] : '.wp-block-post-content';
$collapsible = ! empty( $attributes['collapsible'] );
$list_style  = in_array( $attributes['listStyle'] ?? '', array( 'ol', 'ul' ), true ) ? $attributes['listStyle'] : 'ul';
$sticky_top  = ! empty( $attributes['stickyTop'] ) ? (string) $attributes['stickyTop'] : '2rem';

// Build a JSON-safe map of visible heading levels.
$levels = array();
for ( $i = 1; $i <= 6; $i++ ) {
	$key = 'showH' . $i;
	if ( isset( $attributes[ $key ] ) && false === $attributes[ $key ] ) {
		continue;
	}
	$levels[] = $i;
}
$levels_json = wp_json_encode( $levels ) ?: '[]';

$classes = array( 'nextora-toc' );
if ( $collapsible ) {
	$classes[] = 'nextora-toc--collapsible';
}
if ( $title ) {
	$classes[] = 'nextora-toc--has-title';
}

$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class'                         => implode( ' ', $classes ),
		'style'                         => '--nextora-toc-sticky-top:' . esc_attr( $sticky_top ),
		'data-nextora-toc-selector'     => esc_attr( $selector ),
		'data-nextora-toc-list-style'   => esc_attr( $list_style ),
		'data-nextora-toc-levels'      => esc_attr( $levels_json ),
		'data-nextora-toc-collapsible'  => $collapsible ? '1' : '0',
	),
);

// Ensure the view script is enqueued (dynamic blocks don't always auto-enqueue viewScript).
if ( ! is_admin() && ! wp_script_is( 'nextora-table-of-contents-view-script', 'registered' ) ) {
	$view_path = __DIR__ . '/view.js';
	$view_uri  = (string) get_template_directory_uri() . '/blocks/table-of-contents/view.js';
	if ( is_readable( $view_path ) ) {
		wp_register_script(
			'nextora-table-of-contents-view-script',
			$view_uri,
			array(),
			(string) filemtime( $view_path ),
			true,
		);
		wp_enqueue_script( 'nextora-table-of-contents-view-script' );
	}
}
?>

<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<?php if ( $title ) : ?>
		<h2 class="nextora-toc__title">
			<?php if ( $collapsible ) : ?>
				<button type="button" class="nextora-toc__toggle" aria-expanded="true" aria-controls="nextora-toc-nav">
					<span class="nextora-toc__toggle-icon" aria-hidden="true">▾</span>
				</button>
			<?php endif; ?>
			<?php echo $title; ?>
		</h2>
	<?php endif; ?>

	<nav class="nextora-toc__nav" id="nextora-toc-nav" aria-label="<?php echo esc_attr__( 'Table of Contents', 'nextora' ); ?>">
		<?php echo sprintf( '<%1$s class="nextora-toc__list"></%1$s>', tag_escape( $list_style ) ); ?>
	</nav>
</div>
