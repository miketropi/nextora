<?php
/**
 * Article shell router: resolves args and loads a layout partial.
 *
 * Load with {@see get_template_part()} and `$args`:
 * - `layout` `default` — single / page (optional featured image, bordered title strip).
 * - `layout` `card` — blog grid tile (thumbnail, excerpt, read more).
 * - `card_lead` — first post on index page 1: full-width row, larger type, split layout on `md+`.
 *
 * Partials: `content-article-default.php`, `content-article-card.php`,
 * `content-article-title-meta.php`, `content-article-entry.php`.
 * Logic: {@see nextora_content_article_vars()} in `inc/article-template.php`.
 *
 * @package Nextora
 */

declare(strict_types=1);

$nextora_article = nextora_content_article_vars( isset( $args ) && is_array( $args ) ? $args : array() );

if ( $nextora_article['is_card'] ) {
	get_template_part( 'template-parts/content-article', 'card', $nextora_article );
} else {
	get_template_part( 'template-parts/content-article', 'default', $nextora_article );
}
