/**
 * WooCommerce Mini-Cart drawer — reparent the screen overlay under `document.body`
 * (same top-level layer as `nextora-primary-nav-portal` in `header-nav.ts`) so sticky
 * header `transform` / stacking cannot clip the drawer sheet.
 */

export function mountHeaderMiniCartPortalToBody(): void {
	document
		.querySelectorAll<HTMLElement>(
			".nextora-header-block__cart--woo .wc-block-components-drawer__screen-overlay",
		)
		.forEach((el) => {
			if (el.parentElement !== document.body) {
				document.body.appendChild(el);
			}
		});
}

/**
 * WooCommerce Mini-Cart block opens its own drawer; no custom modal binding required.
 */
export function bindHeaderMiniCartAfterAjaxAdd(): void {
	/* noop — kept for stable main.ts boot order */
}
