<?php
/**
 * Article shell router: resolves args and loads a layout partial.
 *
 * Load with {@see get_template_part()} and `$args`:
 * - `layout` `default` — single / page (optional featured image; pass `content_type` `post`|`page` for layout).
 * - `layout` `card` — blog grid tile (thumbnail, excerpt, read more).
 * - `card_lead` — optional accent for one tile (e.g. first post): same layout as other cards, subtle ring + LCP-friendly image loading.
 *
 * Partials: `content-article-default.php`, `content-article-card.php`,
 * `content-article-title-meta.php`, `content-article-entry.php`, `content-article-related-posts.php`.
 * Logic: {@see nextora_content_article_vars()} in `inc/template/article-template.php`.
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
