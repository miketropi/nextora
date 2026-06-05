/**
 * Header mini cart drawer — reparent under `document.body` (same top-level layer as
 * `nextora-primary-nav-portal` in `header-nav.ts`) so `overflow`/stacking in the header
 * shell cannot clip the sheet. Markup is still rendered by {@see nextora/header} `render.php`;
 * we only move the live node WooCommerce fragments target one instance.
 */

import { openModalById } from "./lib/modal";

export function mountHeaderMiniCartPortalToBody(): void {
	document.querySelectorAll<HTMLElement>("[data-nextora-header-mini-cart-portal]").forEach((el) => {
		if (el.parentElement !== document.body) {
			document.body.appendChild(el);
		}
	});
}

function getMiniCartModalId(): string | null {
	const el = document.querySelector<HTMLElement>("[data-nextora-header-mini-cart-portal][id]");
	const id = el?.id?.trim();
	return id || null;
}

function openHeaderMiniCartSoon(ms = 0): void {
	const id = getMiniCartModalId();
	if (!id) {
		return;
	}
	window.setTimeout(() => {
		openModalById(id);
	}, ms);
}

function triggerWcFragmentRefresh(): void {
	const $ = (window as unknown as { jQuery?: (sel: unknown) => { trigger?: (e: string) => void } })
		.jQuery;
	if (typeof $ !== "function") {
		return;
	}
	try {
		$(document.body).trigger?.("wc_fragment_refresh");
	} catch {
		/* ignore */
	}
}

/**
 * Classic Woo: `wc-add-to-cart.js` fires jQuery `added_to_cart` on `document.body`.
 * Blocks / interactivity: `cart.js` dispatches native `wc-blocks_added_to_cart` on `document.body`
 * (bubbles). We support both and retry jQuery binding in case `window.jQuery` is not ready yet.
 */
export function bindHeaderMiniCartAfterAjaxAdd(): void {
	if (!document.body) {
		return;
	}

	document.body.addEventListener(
		"wc-blocks_added_to_cart",
		() => {
			triggerWcFragmentRefresh();
			openHeaderMiniCartSoon(120);
		},
		false,
	);

	let jqBound = false;
	const tryBindJqAddedToCart = (): void => {
		if (jqBound) {
			return;
		}
		const jQueryFactory = (window as unknown as { jQuery?: unknown }).jQuery;
		if (typeof jQueryFactory !== "function") {
			return;
		}

		// `jQuery(function ($) { ... })` — DOM ready + correct `$` when noConflict is in use.
		(
			jQueryFactory as (
				cb: ($: (sel: unknown) => { on: (ev: string, fn: () => void) => unknown }) => void,
			) => void
		)(($) => {
			$(document.body).on("added_to_cart", () => {
				openHeaderMiniCartSoon(0);
			});
		});
		jqBound = true;
	};

	tryBindJqAddedToCart();
	if (!jqBound) {
		let attempts = 0;
		const maxAttempts = 80;
		const id = window.setInterval(() => {
			tryBindJqAddedToCart();
			if (jqBound || ++attempts >= maxAttempts) {
				window.clearInterval(id);
			}
		}, 50);
	}
}
