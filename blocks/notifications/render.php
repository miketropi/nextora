<?php
/**
 * Notifications — dynamic block server-side render.
 *
 * Renders a dismissible notification banner with icon, message,
 * optional CTA link, and optional close button.
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Inner blocks HTML (unused).
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$message    = ! empty( $attributes['message'] ) ? wp_kses_post( $attributes['message'] ) : '';
$type       = in_array( $attributes['type'] ?? '', array( 'info', 'success', 'warning', 'error' ), true ) ? $attributes['type'] : 'info';
$show_icon  = ! isset( $attributes['showIcon'] ) || (bool) $attributes['showIcon'];
$dismissible = ! empty( $attributes['dismissible'] );
$link_url   = ! empty( $attributes['linkUrl'] ) ? esc_url( $attributes['linkUrl'] ) : '';
$link_text  = ! empty( $attributes['linkText'] ) ? wp_kses( $attributes['linkText'], array() ) : '';

if ( '' === $message && '' === $link_text ) {
	return;
}

// Generate a unique ID for localStorage dismissal tracking.
$notif_id = 'nextora-notif-' . wp_unique_id();

// SVG icons per type.
$icons = array(
	'info'    => '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
	'success' => '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
	'warning' => '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
	'error'   => '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
);

$icon_svg = $icons[ $type ];

// Accent hex values per type (used as CSS custom property).
$accent_colors = array(
	'info'    => '#2563eb',
	'success' => '#16a34a',
	'warning' => '#d97706',
	'error'   => '#dc2626',
);
$accent = $accent_colors[ $type ];

$wrapper_attributes = get_block_wrapper_attributes(
	array(
		'class' => 'nextora-notif nextora-notif--' . $type,
		'style' => '--nextora-notif-accent:' . $accent,
		'id'    => $notif_id,
	),
);

// Enqueue view script.
if ( ! is_admin() && ! wp_script_is( 'nextora-notifications-view-script', 'registered' ) ) {
	$view_path = __DIR__ . '/view.js';
	$view_uri  = (string) get_template_directory_uri() . '/blocks/notifications/view.js';
	if ( is_readable( $view_path ) ) {
		wp_register_script(
			'nextora-notifications-view-script',
			$view_uri,
			array(),
			(string) filemtime( $view_path ),
			true,
		);
		wp_enqueue_script( 'nextora-notifications-view-script' );
	}
}
?>

<div <?php echo $wrapper_attributes; ?>>

	<?php if ( $show_icon ) : ?>
		<span class="nextora-notif__icon" aria-hidden="true">
			<?php echo $icon_svg; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped — Hardcoded SVGs above.?>
		</span>
	<?php endif; ?>

	<div class="nextora-notif__body">
		<?php if ( '' !== $message ) : ?>
			<p class="nextora-notif__message"><?php echo $message; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped — wp_kses_post above.?></p>
		<?php endif; ?>

		<?php if ( '' !== $link_url && '' !== $link_text ) : ?>
			<a
				href="<?php echo $link_url; ?>"
				class="nextora-notif__link"
				<?php if ( ! str_starts_with( $link_url, home_url() ) ) : ?>
					target="_blank"
					rel="noopener noreferrer"
				<?php endif; ?>
			>
				<?php echo $link_text; ?>
			</a>
		<?php endif; ?>
	</div>

	<?php if ( $dismissible ) : ?>
		<button
			type="button"
			class="nextora-notif__close"
			aria-label="<?php echo esc_attr__( 'Dismiss', 'nextora' ); ?>"
			data-nextora-notif-dismiss="<?php echo esc_attr( $notif_id ); ?>"
		>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
				<line x1="18" y1="6" x2="6" y2="18"/>
				<line x1="6" y1="6" x2="18" y2="18"/>
			</svg>
		</button>
	<?php endif; ?>

</div>
