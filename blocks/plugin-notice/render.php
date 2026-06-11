<?php
/**
 * Plugin Notice — dynamic render.
 *
 * @package Nextora
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'nextora_plugin_notice_enqueue_view_script' ) ) {
	/**
	 * Ensure view script is queued when scroll reveal is enabled.
	 */
	function nextora_plugin_notice_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$registry = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/plugin-notice' );
		if ( $registry && ! empty( $registry->view_script_handles ) && is_array( $registry->view_script_handles ) ) {
			foreach ( $registry->view_script_handles as $handle ) {
				if ( is_string( $handle ) && '' !== $handle ) {
					wp_enqueue_script( $handle );
				}
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/plugin-notice/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/plugin-notice/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-plugin-notice-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-plugin-notice-view-fallback',
					$uri,
					array(),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-plugin-notice-view-fallback' );
		}
	}
}

$default_message = __( 'A compatible plugin is required to use this feature. Choose a recommended plugin below or connect another supported option.', 'nextora' );
$default_label   = __( 'Recommended plugins:', 'nextora' );
$message         = isset( $attributes['message'] ) ? wp_kses_post( (string) $attributes['message'] ) : '';
$plugins_label   = isset( $attributes['pluginsLabel'] ) ? sanitize_text_field( (string) $attributes['pluginsLabel'] ) : '';
$scroll          = ! array_key_exists( 'enableScrollAnimation', $attributes ) || ! empty( $attributes['enableScrollAnimation'] );

if ( '' === trim( $message ) ) {
	$message = $default_message;
}

if ( '' === trim( $plugins_label ) ) {
	$plugins_label = $default_label;
}

$plugins = array();
$raw     = $attributes['plugins'] ?? null;

if ( is_array( $raw ) ) {
	foreach ( $raw as $entry ) {
		if ( ! is_array( $entry ) ) {
			continue;
		}

		$name = isset( $entry['name'] ) ? sanitize_text_field( (string) $entry['name'] ) : '';
		$url  = isset( $entry['url'] ) ? esc_url_raw( trim( (string) $entry['url'] ) ) : '';

		if ( '' === $name && '' === $url ) {
			continue;
		}

		$plugins[] = array(
			'name' => $name,
			'url'  => $url,
		);
	}
}

if ( '' === trim( $message ) && array() === $plugins ) {
	return;
}

if ( $scroll ) {
	nextora_plugin_notice_enqueue_view_script();
}

$wrapper_args = array(
	'class'      => 'nextora-plugin-notice',
	'role'       => 'region',
	'aria-label' => esc_attr__( 'Plugin notice', 'nextora' ),
);
if ( $scroll ) {
	$wrapper_args['data-nextora-scroll-reveal'] = '1';
}

$wrapper = get_block_wrapper_attributes( $wrapper_args );
?>
<div <?php echo $wrapper; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<div class="nextora-plugin-notice__inner">
		<?php if ( '' !== trim( $message ) ) : ?>
			<p class="nextora-plugin-notice__message"><?php echo $message; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?></p>
		<?php endif; ?>

		<?php if ( array() !== $plugins ) : ?>
			<p class="nextora-plugin-notice__plugins">
				<span class="nextora-plugin-notice__plugins-label"><?php echo esc_html( $plugins_label ); ?></span>
				<?php
				$plugin_parts = array();
				foreach ( $plugins as $plugin ) {
					$name = '' !== $plugin['name'] ? $plugin['name'] : $plugin['url'];
					if ( '' !== $plugin['url'] ) {
						$aria = sprintf(
							/* translators: %s: plugin name */
							esc_attr__( '%s (opens in a new tab)', 'nextora' ),
							$name,
						);
						$plugin_parts[] = sprintf(
							'<a class="nextora-plugin-notice__plugin-name" href="%1$s" target="_blank" rel="noopener noreferrer" aria-label="%2$s">%3$s</a>',
							esc_url( $plugin['url'] ),
							esc_attr( $aria ),
							esc_html( $name ),
						);
					} else {
						$plugin_parts[] = sprintf(
							'<span class="nextora-plugin-notice__plugin-name">%s</span>',
							esc_html( $name ),
						);
					}
				}
				echo ' ' . implode( ', ', $plugin_parts ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped — escaped per part above.
				?>
			</p>
		<?php endif; ?>
	</div>
</div>
