<?php
/**
 * Article header: title (optional link) and rich meta row.
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

<header class="<?php echo esc_attr( $na['header_classes'] ); ?>">
	<?php if ( ! empty( $na['show_entry_title'] ) && $na['link_title'] && '' !== $na['permalink'] ) : ?>
		<?php if ( 'h2' === $na['title_heading'] ) : ?>
			<h2 class="<?php echo esc_attr( $na['title_classes'] ); ?>">
				<a href="<?php echo esc_url( $na['permalink'] ); ?>" class="<?php echo esc_attr( $na['title_link_classes'] ); ?>">
					<?php echo esc_html( $na['title'] ); ?>
				</a>
			</h2>
		<?php else : ?>
			<h1 class="<?php echo esc_attr( $na['title_classes'] ); ?>">
				<a href="<?php echo esc_url( $na['permalink'] ); ?>" class="<?php echo esc_attr( $na['title_link_classes'] ); ?>">
					<?php echo esc_html( $na['title'] ); ?>
				</a>
			</h1>
		<?php endif; ?>
	<?php elseif ( ! empty( $na['show_entry_title'] ) && 'h2' === $na['title_heading'] ) : ?>
		<h2 class="<?php echo esc_attr( $na['title_classes'] ); ?>"><?php echo esc_html( $na['title'] ); ?></h2>
	<?php elseif ( ! empty( $na['show_entry_title'] ) ) : ?>
		<h1 class="<?php echo esc_attr( $na['title_classes'] ); ?>"><?php echo esc_html( $na['title'] ); ?></h1>
	<?php endif; ?>

	<?php if ( $na['show_meta'] ) : ?>
		<div class="<?php echo esc_attr( $na['meta_row_classes'] ); ?>">
			<?php if ( post_type_supports( get_post_type(), 'author' ) ) : ?>
				<span class="inline-flex flex-wrap items-baseline gap-x-1">
					<span class="me-1 font-medium text-contrast/80"><?php esc_html_e( 'By', 'nextora' ); ?></span>
					<?php echo wp_kses_post( get_the_author_posts_link() ); ?>
				</span>
			<?php endif; ?>

			<?php
			$published_w3c = get_the_date( DATE_W3C );
			$published     = get_the_date();
			$published_w3c = is_string( $published_w3c ) ? $published_w3c : '';
			$published     = is_string( $published ) ? $published : '';
			?>
			<span class="inline-flex items-baseline">
				<time datetime="<?php echo esc_attr( $published_w3c ); ?>"><?php echo esc_html( $published ); ?></time>
			</span>

			<?php if ( 'post' === get_post_type() ) : ?>
				<?php
				$cats = get_the_category();
				if ( ! empty( $cats ) ) :
					?>
					<span class="inline-flex flex-wrap items-baseline gap-x-1 [&_a]:font-normal">
						<span class="me-1 font-medium text-contrast/80"><?php esc_html_e( 'In', 'nextora' ); ?></span>
						<?php echo wp_kses_post( get_the_category_list( $na['meta_sep'] ) ); ?>
					</span>
				<?php endif; ?>

				<?php
				$tags = get_the_tags();
				if ( ! empty( $tags ) ) :
					?>
					<span class="inline-flex flex-wrap items-baseline gap-x-1 [&_a]:font-normal">
						<span class="me-1.5 font-medium text-contrast/80"><?php esc_html_e( 'Tags', 'nextora' ); ?></span>
						<?php echo wp_kses_post( get_the_tag_list( '', $na['meta_sep'], '' ) ); ?>
					</span>
				<?php endif; ?>
			<?php endif; ?>
		</div>
	<?php endif; ?>
</header>
