<?php
/**
 * Full-width page heading (archives, search, singular hero) — Tailwind utilities.
 *
 * Loaded via {@see nextora_render_page_heading()} with `$args` = context array.
 *
 * @package Nextora
 */

declare(strict_types=1);

if ( ! isset( $args ) || ! is_array( $args ) ) {
	return;
}

$h = $args;

$kind        = isset( $h['kind'] ) && is_string( $h['kind'] ) ? $h['kind'] : '';
$eyebrow     = isset( $h['eyebrow'] ) && is_string( $h['eyebrow'] ) ? $h['eyebrow'] : '';
$title       = isset( $h['title'] ) && is_string( $h['title'] ) ? $h['title'] : '';
$description = isset( $h['description'] ) && is_string( $h['description'] ) ? $h['description'] : '';
$meta        = isset( $h['meta'] ) && is_array( $h['meta'] ) ? $h['meta'] : array();
$image_url   = isset( $h['image_url'] ) && is_string( $h['image_url'] ) ? trim( $h['image_url'] ) : '';
$show_search = ! empty( $h['show_search'] );

$section_classes = array(
	'nextora-page-heading',
	'relative',
	'!mb-20',
	'overflow-hidden',
	'bg-contrast',
	'text-base',
);
if ( '' !== $image_url ) {
	$section_classes[] = 'nextora-page-heading--has-image';
	// $section_classes[] = 'min-h-[clamp(13rem,28vh,18rem)]';
}
$section_classes[] = 'nextora-page-heading--' . sanitize_html_class( $kind ? $kind : 'default' );

$section_classes = apply_filters( 'nextora_page_heading_section_classes', $section_classes, $h );
$section_classes = is_array( $section_classes ) ? $section_classes : array( 'nextora-page-heading' );

$inner_shell = nextora_get_page_heading_inner_shell_class( $h );
$inner_shell = (string) apply_filters( 'nextora_page_heading_inner_shell_class', $inner_shell, $h );
?>
<section class="<?php echo esc_attr( implode( ' ', $section_classes ) ); ?>" data-nextora-page-heading="<?php echo esc_attr( sanitize_html_class( $kind ) ); ?>">
	<?php if ( '' !== $image_url ) : ?>
		<div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
			<img
				class="size-full object-cover object-center"
				src="<?php echo esc_url( $image_url ); ?>"
				alt=""
				decoding="async"
				fetchpriority="high"
				loading="eager"
			/>
		</div>
		<div class="pointer-events-none absolute inset-0 z-[1] bg-contrast/70" aria-hidden="true"></div>
	<?php endif; ?>

	<div class="relative z-[2] py-[clamp(1.75rem,5vw,3rem)] <?php echo esc_attr( $inner_shell ); ?>">
		<div class="max-w-3xl">
			<?php if ( '' !== $eyebrow ) : ?>
				<p class="mb-1.5 text-xs font-semibold uppercase tracking-wider text-base/70 !mb-4"><?php echo esc_html( $eyebrow ); ?></p>
			<?php endif; ?>

			<?php if ( '' !== $title ) : ?>
				<h1 class="!m-0 text-balance text-[clamp(1.65rem,4.5vw,2.35rem)] font-bold leading-[1.15] tracking-tight !text-white"><?php echo esc_html( $title ); ?></h1>
			<?php endif; ?>

			<?php if ( '' !== $description ) : ?>
				<p class="!mt-3 text-[clamp(0.9375rem,2vw,1.0625rem)] leading-relaxed text-base/90"><?php echo esc_html( $description ); ?></p>
			<?php endif; ?>

			<?php if ( array() !== $meta ) : ?>
				<ul class="mt-4 flex list-none flex-wrap gap-x-4 gap-y-2 p-0 text-sm font-medium text-base/80" role="list">
					<?php foreach ( $meta as $row ) : ?>
						<?php
						if ( ! is_array( $row ) ) {
							continue;
						}
						$text = isset( $row['text'] ) && is_string( $row['text'] ) ? $row['text'] : '';
						if ( '' === $text ) {
							continue;
						}
						?>
						<li class="m-0"><?php echo esc_html( $text ); ?></li>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>

			<?php if ( $show_search ) : ?>
				<div
					class="nextora-page-heading__search mt-[clamp(1.25rem,3vw,1.75rem)] max-w-md [&_form]:flex [&_form]:flex-wrap [&_form]:items-center [&_form]:gap-2 [&_input[type=search]]:min-w-0 [&_input[type=search]]:flex-[1_1_12rem] [&_input[type=search]]:rounded-md [&_input[type=search]]:border [&_input[type=search]]:border-base/30 [&_input[type=search]]:bg-contrast/35 [&_input[type=search]]:px-3 [&_input[type=search]]:py-2 [&_input[type=search]]:text-base [&_input[type=search]]:placeholder:text-base/45 [&_input[type=submit]]:cursor-pointer [&_input[type=submit]]:rounded-md [&_input[type=submit]]:border-0 [&_input[type=submit]]:bg-base [&_input[type=submit]]:px-4 [&_input[type=submit]]:py-2 [&_input[type=submit]]:text-sm [&_input[type=submit]]:font-semibold [&_input[type=submit]]:text-contrast [&_button[type=submit]]:cursor-pointer [&_button[type=submit]]:rounded-md [&_button[type=submit]]:border-0 [&_button[type=submit]]:bg-base [&_button[type=submit]]:px-4 [&_button[type=submit]]:py-2 [&_button[type=submit]]:text-sm [&_button[type=submit]]:font-semibold [&_button[type=submit]]:text-contrast"
				>
					<?php get_search_form( array( 'aria_label' => __( 'Refine search', 'nextora' ) ) ); ?>
				</div>
			<?php endif; ?>
		</div>
	</div>
</section>
