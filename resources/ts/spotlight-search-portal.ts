/**
 * Spotlight search modal — reparent under `document.body` (same layer as the header
 * mini cart and primary nav portal) so header `overflow`/stacking cannot clip the dialog.
 * The trigger stays in the header; only the `[data-nextora-modal]` root moves.
 */

export function mountSpotlightSearchPortalToBody(): void {
	document
		.querySelectorAll<HTMLElement>("[data-nextora-spotlight-search-portal]")
		.forEach((el) => {
			if (el.parentElement !== document.body) {
				document.body.appendChild(el);
			}
		});
}
