<?php
/**
 * Contact form — dynamic block render.
 *
 * @var array<string, mixed> $attributes Block attributes.
 * @var string               $content    Unused.
 * @var WP_Block             $block      Block instance.
 */

declare( strict_types=1 );

if ( ! function_exists( 'nextora_contact_form_resolve_color' ) ) {
	/**
	 * Preset slug or hex → CSS color value.
	 */
	function nextora_contact_form_resolve_color( string $raw ): string {
		$raw = trim( $raw );
		if ( '' === $raw ) {
			return '';
		}
		$hex = sanitize_hex_color( $raw );
		if ( $hex ) {
			return $hex;
		}
		if ( preg_match( '/^[a-z0-9-]+$/', $raw ) ) {
			return 'var(--wp--preset--color--' . sanitize_html_class( $raw ) . ')';
		}

		return '';
	}
}

if ( ! function_exists( 'nextora_contact_form_enqueue_view_script' ) ) {
	/**
	 * Ensure view script is queued (dynamic PHP render blocks may skip auto-enqueue).
	 */
	function nextora_contact_form_enqueue_view_script(): void {
		if ( is_admin() ) {
			return;
		}

		$block_type = WP_Block_Type_Registry::get_instance()->get_registered( 'nextora/contact-form' );
		if ( $block_type && ! empty( $block_type->view_script_handles ) && is_array( $block_type->view_script_handles ) ) {
			foreach ( $block_type->view_script_handles as $handle ) {
				if ( ! is_string( $handle ) || '' === $handle ) {
					continue;
				}
				wp_enqueue_script( $handle );
				$wp_scripts = wp_scripts();
				if (
					isset( $wp_scripts->registered[ $handle ] )
					&& is_array( $wp_scripts->registered[ $handle ]->deps )
					&& ! in_array( 'nextora-main', $wp_scripts->registered[ $handle ]->deps, true )
				) {
					$wp_scripts->registered[ $handle ]->deps[] = 'nextora-main';
				}
			}
			return;
		}

		$path = (string) get_template_directory() . '/blocks/contact-form/view.js';
		$uri  = (string) get_template_directory_uri() . '/blocks/contact-form/view.js';
		if ( is_readable( $path ) ) {
			if ( ! wp_script_is( 'nextora-contact-form-view-fallback', 'registered' ) ) {
				wp_register_script(
					'nextora-contact-form-view-fallback',
					$uri,
					array( 'nextora-main' ),
					(string) filemtime( $path ),
					true,
				);
			}
			wp_enqueue_script( 'nextora-contact-form-view-fallback' );
		}
	}
}

if ( ! function_exists( 'nextora_contact_form_attr_string' ) ) {
	/**
	 * @param array<string, mixed> $attributes Block attributes.
	 */
	function nextora_contact_form_attr_string( array $attributes, string $key, string $default ): string {
		if ( ! isset( $attributes[ $key ] ) || ! is_string( $attributes[ $key ] ) ) {
			return $default;
		}
		$value = trim( $attributes[ $key ] );

		return '' !== $value ? $value : $default;
	}
}

if ( defined( 'NEXTORA_DIR' ) ) {
	$instances_file = NEXTORA_DIR . '/inc/features/contact-form/instances.php';
	if ( is_readable( $instances_file ) ) {
		require_once $instances_file;
	}
	$recaptcha_file = NEXTORA_DIR . '/inc/features/contact-form/recaptcha.php';
	if ( is_readable( $recaptcha_file ) ) {
		require_once $recaptcha_file;
	}
}

$heading             = nextora_contact_form_attr_string( $attributes, 'heading', __( 'Get In Touch', 'nextora' ) );
$subheading          = nextora_contact_form_attr_string( $attributes, 'subheading', __( "We'd love to hear from you! If you have any questions", 'nextora' ) );
$button_label        = nextora_contact_form_attr_string( $attributes, 'buttonLabel', __( 'Send Message', 'nextora' ) );
$success_message     = nextora_contact_form_attr_string( $attributes, 'successMessage', __( 'Thank you! Your message has been sent.', 'nextora' ) );
$full_name_label     = nextora_contact_form_attr_string( $attributes, 'fullNameLabel', __( 'Full Name', 'nextora' ) );
$full_name_ph        = nextora_contact_form_attr_string( $attributes, 'fullNamePlaceholder', __( 'Enter your full name', 'nextora' ) );
$phone_label         = nextora_contact_form_attr_string( $attributes, 'phoneLabel', __( 'Phone Number', 'nextora' ) );
$phone_ph            = nextora_contact_form_attr_string( $attributes, 'phonePlaceholder', __( 'Enter your phone number', 'nextora' ) );
$email_label         = nextora_contact_form_attr_string( $attributes, 'emailLabel', __( 'Email', 'nextora' ) );
$email_ph            = nextora_contact_form_attr_string( $attributes, 'emailPlaceholder', __( 'Enter your email address', 'nextora' ) );
$message_label       = nextora_contact_form_attr_string( $attributes, 'messageLabel', __( 'Message', 'nextora' ) );
$message_placeholder = nextora_contact_form_attr_string( $attributes, 'messagePlaceholder', __( 'Your message', 'nextora' ) );
$heading_level       = isset( $attributes['headingLevel'] ) ? (int) $attributes['headingLevel'] : 4;
$heading_level       = max( 2, min( 4, $heading_level ) );
$show_phone          = function_exists( 'nextora_contact_form_uses_phone_field' )
	? nextora_contact_form_uses_phone_field( $attributes )
	: true;
$rich_text_message   = function_exists( 'nextora_contact_form_uses_rich_text_message' )
	? nextora_contact_form_uses_rich_text_message( $attributes )
	: true;
$scroll_reveal       = ! isset( $attributes['enableScrollAnimation'] ) || (bool) $attributes['enableScrollAnimation'];

$instance_index = function_exists( 'nextora_contact_form_take_render_index' )
	? nextora_contact_form_take_render_index()
	: 0;

$label_id     = 'nextora-contact-form-message-label-' . $instance_index;
$host_id      = 'nextora-contact-form-message-host-' . $instance_index;
$textarea_id  = 'nextora-contact-form-message-sync-' . $instance_index;
$shell_id     = 'nextora-contact-form-message-shell-' . $instance_index;
$full_name_id = 'nextora-contact-form-full-name-' . $instance_index;
$phone_id     = 'nextora-contact-form-phone-' . $instance_index;
$email_id     = 'nextora-contact-form-email-' . $instance_index;

$style_vars = array();
$section_bg = nextora_contact_form_resolve_color( (string) ( $attributes['sectionBackgroundColor'] ?? '' ) );
$btn_bg     = nextora_contact_form_resolve_color( (string) ( $attributes['buttonBackgroundColor'] ?? '' ) );
$btn_text   = nextora_contact_form_resolve_color( (string) ( $attributes['buttonTextColor'] ?? '' ) );
if ( '' !== $section_bg ) {
	$style_vars[] = '--nextora-contact-form-bg:' . $section_bg;
}
if ( '' !== $btn_bg ) {
	$style_vars[] = '--nextora-contact-form-btn-bg:' . $btn_bg;
}
if ( '' !== $btn_text ) {
	$style_vars[] = '--nextora-contact-form-btn-text:' . $btn_text;
}

$wrapper_args = array(
	'class' => 'nextora-contact-form',
);
if ( $scroll_reveal ) {
	$wrapper_args['data-nextora-scroll-reveal'] = '1';
}
if ( $style_vars !== array() ) {
	$wrapper_args['style'] = implode( ';', $style_vars );
}

$wrapper_args = apply_filters( 'nextora_contact_form_wrapper_attributes', $wrapper_args, $attributes, $block );

$wrapper_attributes = get_block_wrapper_attributes( $wrapper_args );

$source_post_id = 0;
if ( is_singular() ) {
	$source_post_id = (int) get_queried_object_id();
}
if ( $source_post_id <= 0 && isset( $block->context['postId'] ) ) {
	$source_post_id = (int) $block->context['postId'];
}

$configured_admin_email = function_exists( 'nextora_contact_form_admin_email_from_attrs' )
	? nextora_contact_form_admin_email_from_attrs( $attributes )
	: '';
$admin_email_token      = '';
if (
	'' !== $configured_admin_email
	&& $source_post_id > 0
	&& function_exists( 'nextora_contact_form_admin_email_token' )
) {
	$admin_email_token = nextora_contact_form_admin_email_token(
		$source_post_id,
		$instance_index,
		$configured_admin_email,
	);
}

$rest_url       = esc_url( rest_url( 'nextora/v1/contact' ) );
$nonce          = wp_create_nonce( 'nextora_contact_form' );
$sending_label  = esc_attr__( 'Sending…', 'nextora' );
$required_error      = esc_attr__( 'Please fill in all required fields.', 'nextora' );
$invalid_email_error = esc_attr__( 'Please enter a valid email address.', 'nextora' );
$error_message       = esc_attr__( 'Something went wrong. Please try again.', 'nextora' );
$form_aria           = esc_attr__( 'Contact form', 'nextora' );

$uses_recaptcha     = function_exists( 'nextora_contact_form_uses_recaptcha' )
	&& nextora_contact_form_uses_recaptcha( $attributes );
$recaptcha_site_key = function_exists( 'nextora_contact_form_recaptcha_site_key_from_attrs' )
	? nextora_contact_form_recaptcha_site_key_from_attrs( $attributes )
	: '';
$recaptcha_config_token = '';
if ( $uses_recaptcha && '' !== $recaptcha_site_key && $source_post_id > 0 && function_exists( 'nextora_contact_form_recaptcha_config_token' ) ) {
	$recaptcha_config_token = nextora_contact_form_recaptcha_config_token(
		$source_post_id,
		$instance_index,
		$recaptcha_site_key,
	);
	if ( ! is_admin() ) {
		wp_enqueue_script(
			'google-recaptcha-v3',
			'https://www.google.com/recaptcha/api.js?render=' . rawurlencode( $recaptcha_site_key ),
			array(),
			null,
			array(
				'strategy'  => 'defer',
				'in_footer' => true,
			),
		);
	}
}

$tiptap_shell_class = 'nextora-tiptap-shell nextora-contact-form__tiptap-shell mb-0 max-w-none rounded-md border border-secondary/40 bg-base shadow-sm focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20';

nextora_contact_form_enqueue_view_script();

if ( $rich_text_message && ! is_admin() ) {
	wp_enqueue_script( 'nextora-main' );
}
?>

<div <?php echo $wrapper_attributes; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>>
	<?php
	printf(
		'<%1$s class="nextora-contact-form__heading">%2$s</%1$s>',
		'h' . (string) $heading_level,
		esc_html( $heading ),
	);
	?>
	<p class="nextora-contact-form__subheading"><?php echo esc_html( $subheading ); ?></p>

	<div
		class="nextora-contact-form__notice nextora-contact-form__notice--hidden"
		role="status"
		aria-live="polite"
	></div>

	<form
		class="nextora-form nextora-contact-form__form"
		data-nextora-contact-form="1"
		data-instance-index="<?php echo esc_attr( (string) $instance_index ); ?>"
		data-post-id="<?php echo esc_attr( (string) $source_post_id ); ?>"
		<?php if ( '' !== $configured_admin_email ) : ?>
		data-admin-email="<?php echo esc_attr( $configured_admin_email ); ?>"
		data-admin-email-token="<?php echo esc_attr( $admin_email_token ); ?>"
		<?php endif; ?>
		data-rest-url="<?php echo esc_attr( $rest_url ); ?>"
		data-nonce="<?php echo esc_attr( $nonce ); ?>"
		data-success-message="<?php echo esc_attr( $success_message ); ?>"
		data-sending-label="<?php echo esc_attr( $sending_label ); ?>"
		data-required-error="<?php echo esc_attr( $required_error ); ?>"
		data-invalid-email-error="<?php echo esc_attr( $invalid_email_error ); ?>"
		data-error-message="<?php echo esc_attr( $error_message ); ?>"
		<?php if ( $uses_recaptcha && '' !== $recaptcha_site_key ) : ?>
		data-recaptcha="1"
		data-recaptcha-site-key="<?php echo esc_attr( $recaptcha_site_key ); ?>"
		data-recaptcha-config-token="<?php echo esc_attr( $recaptcha_config_token ); ?>"
		<?php endif; ?>
		aria-label="<?php echo esc_attr( $form_aria ); ?>"
		method="post"
		novalidate
	>
		<input type="hidden" name="_wpnonce" value="<?php echo esc_attr( $nonce ); ?>" />

		<div class="nextora-contact-form__honeypot" aria-hidden="true">
			<label for="<?php echo esc_attr( 'nextora-contact-form-hp-' . (string) $instance_index ); ?>">
				<?php esc_html_e( 'Leave this field empty', 'nextora' ); ?>
			</label>
			<input
				type="text"
				name="company_website"
				id="<?php echo esc_attr( 'nextora-contact-form-hp-' . (string) $instance_index ); ?>"
				tabindex="-1"
				autocomplete="off"
			/>
		</div>

		<div class="<?php echo esc_attr( $show_phone ? 'nextora-contact-form__row nextora-contact-form__row--two-col' : 'nextora-contact-form__row' ); ?>">
			<div class="nextora-contact-form__field" data-nextora-field="full_name">
				<label class="nextora-contact-form__label" for="<?php echo esc_attr( $full_name_id ); ?>">
					<?php echo esc_html( $full_name_label ); ?>
					<span class="nextora-contact-form__required" aria-hidden="true">*</span>
				</label>
				<input
					type="text"
					id="<?php echo esc_attr( $full_name_id ); ?>"
					name="full_name"
					class="nextora-contact-form__input"
					placeholder="<?php echo esc_attr( $full_name_ph ); ?>"
					required
					aria-required="true"
					autocomplete="name"
				/>
			</div>
			<?php if ( $show_phone ) : ?>
			<div class="nextora-contact-form__field">
				<label class="nextora-contact-form__label" for="<?php echo esc_attr( $phone_id ); ?>">
					<?php echo esc_html( $phone_label ); ?>
				</label>
				<input
					type="tel"
					id="<?php echo esc_attr( $phone_id ); ?>"
					name="phone"
					class="nextora-contact-form__input"
					placeholder="<?php echo esc_attr( $phone_ph ); ?>"
					autocomplete="tel"
				/>
			</div>
			<?php endif; ?>
		</div>

		<div class="nextora-contact-form__field" data-nextora-field="email">
			<label class="nextora-contact-form__label" for="<?php echo esc_attr( $email_id ); ?>">
				<?php echo esc_html( $email_label ); ?>
				<span class="nextora-contact-form__required" aria-hidden="true">*</span>
			</label>
			<input
				type="email"
				id="<?php echo esc_attr( $email_id ); ?>"
				name="email"
				class="nextora-contact-form__input"
				placeholder="<?php echo esc_attr( $email_ph ); ?>"
				required
				aria-required="true"
				autocomplete="email"
			/>
		</div>

		<div class="nextora-contact-form__field nextora-contact-form__field--message" data-nextora-field="message">
			<?php if ( $rich_text_message ) : ?>
				<label id="<?php echo esc_attr( $label_id ); ?>" class="nextora-contact-form__label">
					<?php echo esc_html( $message_label ); ?>
					<span class="nextora-contact-form__required" aria-hidden="true">*</span>
				</label>
				<div id="<?php echo esc_attr( $shell_id ); ?>" class="<?php echo esc_attr( $tiptap_shell_class ); ?>">
					<div class="nextora-tiptap-toolbar"></div>
					<div
						id="<?php echo esc_attr( $host_id ); ?>"
						class="nextora-tiptap-host"
						data-placeholder="<?php echo esc_attr( $message_placeholder ); ?>"
					></div>
				</div>
				<textarea
					id="<?php echo esc_attr( $textarea_id ); ?>"
					name="message"
					maxlength="65525"
					class="nextora-contact-form__message-sync sr-only"
					tabindex="-1"
					aria-hidden="true"
				></textarea>
			<?php else : ?>
				<label class="nextora-contact-form__label" for="<?php echo esc_attr( $textarea_id ); ?>">
					<?php echo esc_html( $message_label ); ?>
					<span class="nextora-contact-form__required" aria-hidden="true">*</span>
				</label>
				<textarea
					id="<?php echo esc_attr( $textarea_id ); ?>"
					name="message"
					class="nextora-contact-form__textarea"
					rows="6"
					maxlength="65525"
					placeholder="<?php echo esc_attr( $message_placeholder ); ?>"
					required
					aria-required="true"
				></textarea>
			<?php endif; ?>
		</div>

		<button type="submit" class="nextora-contact-form__submit">
			<?php echo esc_html( $button_label ); ?>
		</button>
	</form>
</div>
