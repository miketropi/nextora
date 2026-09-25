/**
 * Primary header navigation — mobile menu opens in a body portal with a cloned nav
 * (avoids stacking-context / overflow clipping in the header). See `blocks/header/render.php` + `header-nav.ts`.
 * Open/close uses GSAP on viewports that allow motion; see `nav-menus.css` for visuals.
 */

import gsap from "gsap";
import { bindHeaderFollowUsIn, clearFollowUsBindingState } from "./header-follow-us";

function getDesktopMediaQuery(btn?: HTMLButtonElement | null): string {
	const toggle = btn ?? document.querySelector<HTMLButtonElement>("[data-nextora-nav-toggle]");
	if (toggle?.dataset.nextoraMobileBreakpoint) {
		const bp = parseInt(toggle.dataset.nextoraMobileBreakpoint, 10);
		if (bp >= 320) {
			return `(min-width: ${bp}px)`;
		}
	}
	return "(min-width: 768px)";
}

/** Must match `--nextora-offcanvas-dur` in `resources/css/app.css` (seconds). */
const OFFCANVAS_DUR_S = 0.4;
/** Fallback if GSAP path fails; slightly longer than `OFFCANVAS_DUR_S` for paint/rounding. */
const PORTAL_CLOSE_MS = Math.round(OFFCANVAS_DUR_S * 1000) + 80;
const FOCUS_AFTER_OPEN_MS = 80;
/** Ignore backdrop clicks right after open (avoids mobile “ghost” click closing the menu). */
const OPEN_BACKDROP_GUARD_MS = 500;

function prefersReducedMotion(): boolean {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function portalPanelOffscreenXPercent(): 100 | -100 {
	const d = document.documentElement.getAttribute("dir") || document.body.getAttribute("dir") || "";
	return d.toLowerCase() === "rtl" ? -100 : 100;
}

function killPortalGsap(p: PortalElements): void {
	gsap.killTweensOf([p.backdrop, p.panel]);
}

function runPortalOpenGsap(p: PortalElements): void {
	killPortalGsap(p);
	const offX = portalPanelOffscreenXPercent();
	p.root.classList.add("nextora-primary-nav-portal--gsap");
	p.root.classList.add("nextora-primary-nav-portal--open");

	gsap.set(p.backdrop, { opacity: 0 });
	gsap.set(p.panel, { xPercent: offX, force3D: true });

	gsap.timeline({ defaults: { ease: "power2.out" } })
		.to(p.backdrop, { opacity: 1, duration: OFFCANVAS_DUR_S }, 0)
		.to(p.panel, { xPercent: 0, duration: OFFCANVAS_DUR_S }, 0);
}

function runPortalCloseGsap(p: PortalElements, onDone: () => void): void {
	killPortalGsap(p);
	const offX = portalPanelOffscreenXPercent();
	gsap.to(p.backdrop, { opacity: 0, duration: OFFCANVAS_DUR_S, ease: "power2.in" });
	gsap.to(p.panel, {
		xPercent: offX,
		duration: OFFCANVAS_DUR_S,
		ease: "power2.in",
		onComplete: () => {
			p.root.classList.remove("nextora-primary-nav-portal--open");
			p.root.classList.remove("nextora-primary-nav-portal--gsap");
			gsap.set([p.backdrop, p.panel], { clearProps: "opacity,transform" });
			onDone();
		},
	});
}

const CLONE_ID_SUFFIX = "-nextora-portal";

function readToggleLabels(btn: HTMLButtonElement): { open: string; close: string } {
	const open = btn.dataset.nextoraNavOpenLabel?.trim() || "Open menu";
	const close = btn.dataset.nextoraNavCloseLabel?.trim() || "Close menu";
	return { open, close };
}

function dedupeCloneIds(root: HTMLElement): void {
	root.querySelectorAll<HTMLElement>("[id]").forEach((el) => {
		const id = el.id?.trim();
		if (id && !id.endsWith(CLONE_ID_SUFFIX)) {
			el.id = `${id}${CLONE_ID_SUFFIX}`;
		}
	});
}

interface PortalElements {
	root: HTMLElement;
	backdrop: HTMLElement;
	panel: HTMLElement;
	mount: HTMLElement;
	closeBtn: HTMLButtonElement | null;
}

function ensurePortalCloseButton(panel: HTMLElement, closeLabel: string): HTMLButtonElement {
	let btn = panel.querySelector<HTMLButtonElement>("[data-nextora-nav-portal-close]");
	if (btn) {
		btn.setAttribute("aria-label", closeLabel);
		return btn;
	}

	btn = document.createElement("button");
	btn.type = "button";
	btn.className = "nextora-primary-nav-portal__close";
	btn.setAttribute("data-nextora-nav-portal-close", "");
	btn.setAttribute("aria-label", closeLabel);

	const icon = document.createElement("span");
	icon.className = "nextora-primary-nav-portal__close-icon";
	icon.setAttribute("aria-hidden", "true");
	icon.innerHTML =
		'<svg class="lucide lucide-x" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';

	btn.append(icon);

	const mount = panel.querySelector("[data-nextora-nav-portal-mount]");
	if (mount) {
		panel.insertBefore(btn, mount);
	} else {
		panel.append(btn);
	}

	return btn;
}

function getOrCreatePortal(btn: HTMLButtonElement): PortalElements | null {
	const rootId = btn.dataset.nextoraNavPortalRoot?.trim();
	const panelId = btn.dataset.nextoraNavPortalPanel?.trim();
	const titleId = btn.dataset.nextoraNavPortalTitle?.trim();
	const dialogLabel = btn.dataset.nextoraNavPortalDialogLabel?.trim() || "Menu";
	const closeLabel = btn.dataset.nextoraNavCloseLabel?.trim() || "Close menu";

	if (!rootId || !panelId || !titleId) {
		return null;
	}

	let root = document.getElementById(rootId);
	if (root && !root.matches("[data-nextora-nav-portal-root]")) {
		return null;
	}

	if (!root) {
		root = document.createElement("div");
		root.id = rootId;
		root.className = "nextora-primary-nav-portal";
		root.setAttribute("data-nextora-nav-portal-root", "");
		root.hidden = true;

		const backdrop = document.createElement("div");
		backdrop.className = "nextora-primary-nav-portal__backdrop";
		backdrop.setAttribute("data-nextora-nav-backdrop", "");
		backdrop.tabIndex = -1;

		const panel = document.createElement("div");
		panel.id = panelId;
		panel.className = "nextora-primary-nav-portal__panel";
		panel.setAttribute("role", "dialog");
		panel.setAttribute("aria-modal", "true");
		panel.setAttribute("aria-labelledby", titleId);

		const title = document.createElement("h2");
		title.id = titleId;
		title.className = "sr-only";
		title.textContent = dialogLabel;

		const mount = document.createElement("div");
		mount.className = "nextora-primary-nav-portal__mount";
		mount.setAttribute("data-nextora-nav-portal-mount", "");

		panel.append(title, mount);
		root.append(backdrop, panel);
		document.body.appendChild(root);
	}

	const backdrop = root.querySelector<HTMLElement>("[data-nextora-nav-backdrop]");
	const panel = document.getElementById(panelId);
	const mount = root.querySelector<HTMLElement>("[data-nextora-nav-portal-mount]");

	if (!backdrop || !panel || !mount) {
		return null;
	}

	const closeBtn = ensurePortalCloseButton(panel, closeLabel);

	return { root, backdrop, panel, mount, closeBtn };
}

const PORTAL_INIT_ATTRS = [
	"data-nextora-testimonials-swiper-inited",
	"data-nextora-testimonials-swiper-pending",
	"data-nextora-testimonial-swiper-inited",
	"data-nextora-testimonial-swiper-pending",
	"data-nextora-box-image-swiper-inited",
	"data-nextora-box-image-swiper-pending",
	"data-nextora-box-icon-swiper-inited",
	"data-nextora-box-icon-swiper-pending",
	"data-nextora-blc-swiper-inited",
	"data-nextora-blc-swiper-pending",
	"data-nextora-team-swiper-inited",
	"data-nextora-team-swiper-pending",
	"data-nextora-instagram-swiper-inited",
	"data-nextora-instagram-swiper-pending",
	"data-nextora-instagram-lightbox-inited",
	"data-nextora-event-swiper-inited",
	"data-nextora-event-swiper-pending",
	"data-nextora-arc-carousel-inited",
	"data-nextora-contact-form-inited",
	"data-nextora-google-maps-inited",
	"data-swiper-inited",
	"data-swiper-init-pending",
	"data-nextora-scroll-animation-init",
	"data-scroll-reveal-gen",
	"data-nextora-advanced-button-scroll-init",
	"data-scroll-deferred",
	"data-scroll-replay",
];

function clearBlockInitAttrs(root: HTMLElement): void {
	PORTAL_INIT_ATTRS.forEach((attr) => {
		root.querySelectorAll(`[${attr}]`).forEach((el) => {
			el.removeAttribute(attr);
		});
	});

	root.querySelectorAll<HTMLElement>("[class*='animation-fade-in'], [class*='animation-zoom-'], .nextora-scroll-animation--pending, .nextora-scroll-animation--ready").forEach((el) => {
		el.style.removeProperty("opacity");
		el.style.removeProperty("transform");
		el.style.removeProperty("translate");
	});
}

function cloneNavIntoMount(sourcePanel: HTMLElement, mount: HTMLElement): void {
	const clones: HTMLElement[] = [];

	sourcePanel.childNodes.forEach((node) => {
		if (node instanceof HTMLElement) {
			const clone = node.cloneNode(true) as HTMLElement;
			dedupeCloneIds(clone);
			clearFollowUsBindingState(clone);
			clearBlockInitAttrs(clone);
			clones.push(clone);
		}
	});

	mount.replaceChildren(...clones);
	bindHeaderFollowUsIn(mount);
	setupPortalMegaGuards();
}

/**
 * Two observers prevent beplus JS from interfering with mega panels
 * inside the portal:
 * 1. Child-list watcher — moves panels back from body (off-canvas 768-1023px).
 * 2. Class watcher — strips `is-open` from mega panels so the beplus
 *    hover / focusout / closeAll handlers never find them.
 */
let portalMegaBodyObserver: MutationObserver | null = null;
let portalMegaClassObserver: MutationObserver | null = null;

function setupPortalMegaGuards(): void {
	if (portalMegaBodyObserver) {
		portalMegaBodyObserver.disconnect();
		portalMegaBodyObserver = null;
	}
	if (portalMegaClassObserver) {
		portalMegaClassObserver.disconnect();
		portalMegaClassObserver = null;
	}

	const mount = document.querySelector<HTMLElement>(".nextora-primary-nav-portal__mount");
	if (!mount) return;

	// 1. Move panels back that beplus portaled to body (off-canvas 768-1023px).
	portalMegaBodyObserver = new MutationObserver((mutations) => {
		for (const m of mutations) {
			for (const node of m.addedNodes) {
				if (!(node instanceof HTMLElement)) continue;
				if (!node.classList.contains("beplus-vmn-mega-panel")) continue;
				const origParent = (node as unknown as { _snapOriginalParent?: HTMLElement })._snapOriginalParent;
				if (!origParent) continue;
				if (!origParent.closest(".nextora-primary-nav-portal__mount")) continue;
				const origNext = (node as unknown as { _snapOriginalNext?: ChildNode })._snapOriginalNext;
				if (origNext && origNext.parentElement === origParent) {
					origParent.insertBefore(node, origNext);
				} else {
					origParent.appendChild(node);
				}
				// Clear beplus internal refs so restoreFromBody is a no-op later.
				(node as unknown as Record<string, unknown>)._snapOriginalParent = null;
				(node as unknown as Record<string, unknown>)._snapOriginalNext = null;
				// Hide overlay & unlock scroll that beplus may have set.
				const overlay = document.querySelector<HTMLElement>(".beplus-vmn-overlay");
				if (overlay) {
					overlay.classList.remove("is-visible");
					overlay.setAttribute("aria-hidden", "true");
				}
				document.body.style.removeProperty("overflow");
			}
		}
	});
	portalMegaBodyObserver.observe(document.body, { childList: true });

	// 2. Strip `is-open` from mega panels inside the portal so that
	//    beplus `closeAll` / `closeAllExcept` / `focusout` handlers
	//    (which key off that class) never close portal panels.
	//    Also sync: when a mega opens, close normal submenu accordions.
	portalMegaClassObserver = new MutationObserver((mutations) => {
		for (const m of mutations) {
			if (m.type !== "attributes" || m.attributeName !== "class") continue;
			const panel = m.target as HTMLElement;
			if (!panel.classList.contains("beplus-vmn-mega-panel")) continue;
			if (!panel.classList.contains("is-open")) continue;
			if (!panel.closest(".nextora-primary-nav-portal__mount")) continue;
			panel.classList.remove("is-open");
			// Close normal submenu accordions for sync
			const li = panel.closest<HTMLElement>("li.has-mega-menu");
			if (li) {
				const parentUl = li.parentElement;
				if (parentUl) {
					parentUl.querySelectorAll<HTMLElement>(":scope > li.menu-item-has-children.nextora-submenu--open").forEach((sib) => {
						sib.classList.remove("nextora-submenu--open");
						const subToggle = sib.querySelector<HTMLButtonElement>(":scope > button.nextora-submenu-toggle");
						if (subToggle) subToggle.setAttribute("aria-expanded", "false");
					});
				}
			}
		}
	});
	portalMegaClassObserver.observe(mount, {
		attributes: true,
		attributeFilter: ["class"],
		subtree: true,
	});
}

function dispatchPortalBlockReinit(): void {
	window.dispatchEvent(new CustomEvent("nextora-testimonials-reinit"));
	window.dispatchEvent(new CustomEvent("nextora-testimonial-carousel-reinit"));
	window.dispatchEvent(new CustomEvent("nextora-box-image-reinit"));
	window.dispatchEvent(new CustomEvent("nextora-box-icon-reinit"));
	window.dispatchEvent(new CustomEvent("nextora-blog-list-carousel-reinit"));
	window.dispatchEvent(new CustomEvent("nextora-team-section-reinit"));
	window.dispatchEvent(new CustomEvent("nextora-instagram-feed-reinit"));
	window.dispatchEvent(new CustomEvent("nextora-image-gallery-reinit"));
	window.dispatchEvent(new CustomEvent("nextora-advanced-list-reinit"));
	window.dispatchEvent(new CustomEvent("nextora-advanced-button-reinit"));

	revealPortalElements();

	window.setTimeout(() => {
		window.nextoraForceScrollAnimations?.();
		revealPortalElements();
	}, 150);

	window.setTimeout(() => {
		window.nextoraForceScrollAnimations?.();
		revealPortalElements();
	}, 400);
}

function revealPortalElements(): void {
	const ANIM_SELECTORS = [
		"[class*='animation-fade-in']",
		"[class*='animation-zoom-']",
		"[class*='animation-text-reveal']",
		"[class*='animation-inner-fade']",
		".animation-text-typewriter",
		".animation-fade-list-grid",
		".animation-image-clip-reveal",
		".animation-image-border-reveal",
		".animation-svg-draw",
		".nextora-scroll-animation--pending",
		".nextora-scroll-animation--ready",
	];

	const selector = ANIM_SELECTORS.map((s) => `.nextora-primary-nav-portal__mount ${s}`).join(", ");

	document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
		el.style.removeProperty("opacity");
		el.style.removeProperty("transform");
		el.style.removeProperty("translate");
		el.style.removeProperty("rotate");
		el.style.removeProperty("scale");
		el.style.removeProperty("clip-path");

		el.classList.remove(
			"nextora-scroll-animation--pending",
			"nextora-scroll-animation--ready",
			"nextora-advanced-button--reveal-pending",
			"nextora-advanced-button--reveal-ready",
		);

		if (!el.hasAttribute("data-nextora-scroll-animation-init")) {
			el.setAttribute("data-nextora-scroll-animation-init", "1");
		}

		Array.from(el.children).forEach((child) => {
			if (child instanceof HTMLElement) {
				child.style.removeProperty("opacity");
				child.style.removeProperty("transform");
				child.style.removeProperty("translate");
				child.style.removeProperty("rotate");
				child.style.removeProperty("scale");
				child.style.removeProperty("clip-path");
				child.classList.remove(
					"nextora-scroll-animation--pending",
					"nextora-scroll-animation--ready",
				);
			}
		});
	});

	document.querySelectorAll<HTMLElement>(
		".nextora-primary-nav-portal__mount .nextora-advanced-button"
	).forEach((root) => {
		root.classList.remove(
			"nextora-advanced-button--reveal-pending",
			"nextora-advanced-button--reveal-ready",
			"nextora-scroll-animation--pending",
			"nextora-scroll-animation--ready",
		);
		root.style.removeProperty("opacity");
		root.style.removeProperty("transform");
		root.style.removeProperty("translate");
		if (!root.hasAttribute("data-nextora-advanced-button-scroll-init")) {
			root.setAttribute("data-nextora-advanced-button-scroll-init", "1");
		}
		if (!root.hasAttribute("data-nextora-scroll-animation-init")) {
			root.setAttribute("data-nextora-scroll-animation-init", "1");
		}
	});

	document.querySelectorAll<HTMLElement>(
		".nextora-primary-nav-portal__mount .wp-block-nextora-advanced-list"
	).forEach((el) => {
		el.classList.add("is-visible");
	});
}

function focusFirstNavLink(panel: HTMLElement): void {
	panel.querySelector<HTMLElement>("a[href]")?.focus();
}

function bindPortalDismissOnce(
	root: HTMLElement,
	backdrop: HTMLElement,
	closeBtn: HTMLButtonElement | null,
	close: () => void,
	shouldIgnoreBackdropClick: () => boolean,
): void {
	if (root.dataset.nextoraNavPortalDismissBound === "1") {
		return;
	}
	const hadLegacyBackdropOnly = root.dataset.nextoraNavBackdropBound === "1";
	root.dataset.nextoraNavPortalDismissBound = "1";

	const onBackdropClick = (e: Event): void => {
		if (shouldIgnoreBackdropClick()) {
			e.preventDefault();
			e.stopPropagation();
			return;
		}
		close();
	};
	if (!hadLegacyBackdropOnly) {
		backdrop.addEventListener("click", onBackdropClick);
	}

	closeBtn?.addEventListener("click", (e) => {
		e.preventDefault();
		e.stopPropagation();
		close();
	});
}

export function initHeaderNavigation(): void {
	document.querySelectorAll<HTMLButtonElement>("[data-nextora-nav-toggle]").forEach((btn) => {
		const sourceSel = btn.dataset.nextoraNavCloneSource?.trim();
		if (!sourceSel) {
			return;
		}

		const sourcePanel = document.querySelector<HTMLElement>(sourceSel);
		if (!sourcePanel?.hasAttribute("data-nextora-nav-source-panel")) {
			return;
		}

		const mq = window.matchMedia(getDesktopMediaQuery(btn));

		const labels = readToggleLabels(btn);

		let onEscape: ((e: KeyboardEvent) => void) | null = null;
		let closeFinishTimer: ReturnType<typeof setTimeout> | null = null;
		let portalOpenedAt = 0;

		const portal = (): PortalElements | null => getOrCreatePortal(btn);

		const clearCloseTimer = (): void => {
			if (closeFinishTimer !== null) {
				window.clearTimeout(closeFinishTimer);
				closeFinishTimer = null;
			}
		};

		const setExpandedLabel = (expanded: boolean): void => {
			btn.setAttribute("aria-label", expanded ? labels.close : labels.open);
		};

		const detachEscape = (): void => {
			if (onEscape) {
				document.removeEventListener("keydown", onEscape);
				onEscape = null;
			}
		};

		const close = (): void => {
			const p = portal();
			detachEscape();

			if (!p) {
				clearCloseTimer();
				btn.setAttribute("aria-expanded", "false");
				setExpandedLabel(false);
				document.documentElement.classList.remove("nextora-primary-nav-drawer-open");
				btn.focus();
				return;
			}

			if (mq.matches) {
				clearCloseTimer();
				killPortalGsap(p);
				p.root.classList.remove("nextora-primary-nav-portal--open");
				p.root.classList.remove("nextora-primary-nav-portal--gsap");
				p.root.hidden = true;
				p.mount.replaceChildren();
				btn.setAttribute("aria-expanded", "false");
				setExpandedLabel(false);
				document.documentElement.classList.remove("nextora-primary-nav-drawer-open");
				btn.focus();
				return;
			}

			btn.setAttribute("aria-expanded", "false");
			setExpandedLabel(false);
			document.documentElement.classList.remove("nextora-primary-nav-drawer-open");

			killPortalGsap(p);

			if (prefersReducedMotion()) {
				clearCloseTimer();
				p.root.classList.remove("nextora-primary-nav-portal--open");
				p.root.classList.remove("nextora-primary-nav-portal--gsap");
				p.root.hidden = true;
				p.mount.replaceChildren();
				btn.focus();
				return;
			}

			clearCloseTimer();
			runPortalCloseGsap(p, () => {
				p.root.hidden = true;
				p.mount.replaceChildren();
				btn.focus();
			});
		};

		const open = (): void => {
			if (mq.matches) {
				return;
			}
			const p = portal();
			if (!p) {
				return;
			}

			clearCloseTimer();
			portalOpenedAt = Date.now();
			bindPortalDismissOnce(
				p.root,
				p.backdrop,
				p.closeBtn,
				close,
				() => Date.now() - portalOpenedAt < OPEN_BACKDROP_GUARD_MS,
			);
			cloneNavIntoMount(sourcePanel, p.mount);

			p.root.hidden = false;
			p.root.classList.remove("nextora-primary-nav-portal--open");
			p.root.classList.remove("nextora-primary-nav-portal--gsap");
			void p.root.getBoundingClientRect();

			requestAnimationFrame(() => {
				killPortalGsap(p);
				if (prefersReducedMotion()) {
					p.root.classList.add("nextora-primary-nav-portal--open");
				} else {
					runPortalOpenGsap(p);
				}
				dispatchPortalBlockReinit();
				btn.setAttribute("aria-expanded", "true");
				setExpandedLabel(true);
				document.documentElement.classList.add("nextora-primary-nav-drawer-open");
				window.setTimeout(
					() => focusFirstNavLink(p.panel),
					prefersReducedMotion() ? 0 : FOCUS_AFTER_OPEN_MS,
				);
			});

			onEscape = (e: KeyboardEvent) => {
				if (e.key === "Escape") {
					close();
				}
			};
			document.addEventListener("keydown", onEscape);
		};

		btn.addEventListener("click", () => {
			if (btn.getAttribute("aria-expanded") === "true") {
				close();
			} else {
				open();
			}
		});

		const resetForViewport = (): void => {
			clearCloseTimer();
			const p = portal();
			if (p) {
				killPortalGsap(p);
				p.root.classList.remove("nextora-primary-nav-portal--open");
				p.root.classList.remove("nextora-primary-nav-portal--gsap");
				p.root.hidden = true;
				p.mount.replaceChildren();
			}
			detachEscape();
			btn.setAttribute("aria-expanded", "false");
			setExpandedLabel(false);
			document.documentElement.classList.remove("nextora-primary-nav-drawer-open");
		};

		mq.addEventListener("change", resetForViewport);

		resetForViewport();
	});

	bindPortalSubmenuAccordions();
}

/**
 * Accordion toggles for submenu `<button.nextora-submenu-toggle>` inside the mobile portal clone only.
 */
let portalSubmenuAccordionsBound = false;

function bindPortalSubmenuAccordions(): void {
	if (portalSubmenuAccordionsBound) {
		return;
	}
	portalSubmenuAccordionsBound = true;

	document.addEventListener("click", (e: MouseEvent): void => {
		const raw = e.target;
		const el = raw instanceof Element ? raw.closest(".nextora-submenu-toggle") : null;
		if (!el || !(el instanceof HTMLButtonElement)) {
			return;
		}
		if (!el.closest("[data-nextora-nav-portal-mount]")) {
			return;
		}

		e.preventDefault();
		e.stopPropagation();

		const li = el.closest("li.menu-item-has-children");
		if (!li) {
			return;
		}

		const expanded = el.getAttribute("aria-expanded") === "true";
		const next = !expanded;

		const parentUl = li.parentElement;
		if (parentUl instanceof HTMLUListElement) {
			parentUl.querySelectorAll(":scope > li.menu-item-has-children.nextora-submenu--open").forEach((sib) => {
				if (sib !== li) {
					sib.classList.remove("nextora-submenu--open");
					const oth = sib.querySelector(":scope > button.nextora-submenu-toggle");
					if (oth instanceof HTMLButtonElement) {
						oth.setAttribute("aria-expanded", "false");
					}
				}
			});
			// Also close beplus mega accordions for sync
			parentUl.querySelectorAll(":scope > li.has-mega-menu.beplus-vmn--open").forEach((sib) => {
				sib.classList.remove("beplus-vmn--open");
				const megaToggle = sib.querySelector(":scope > .beplus-vmn-toggle");
				if (megaToggle instanceof HTMLButtonElement) {
					megaToggle.setAttribute("aria-expanded", "false");
				}
			});
		}

		el.setAttribute("aria-expanded", next ? "true" : "false");
		li.classList.toggle("nextora-submenu--open", next);
	});
}

/**
 * Auto-fit desktop navigation on 1 single line.
 * Prioritizes keeping font size as large as possible:
 * 1. Reduces gap first when space begins to tighten.
 * 2. Only scales down font size when gap has reached minimum threshold.
 */
export function initHeaderNavAutoFit(): void {
	const headers = document.querySelectorAll<HTMLElement>(".nextora-header-block");
	if (!headers.length) {
		return;
	}

	const MIN_FONT_SCALE = 0.70;
	const MIN_GAP_PX = 6;
	const MAX_RESPONSIVE_WIDTH = 1400;

	function measureAndScale(header: HTMLElement): void {
		const navSource = header.querySelector<HTMLElement>(".nextora-header-block__nav-source");
		const menuUl = header.querySelector<HTMLUListElement>(".nextora-header-menu");
		const toggle = header.querySelector<HTMLButtonElement>("[data-nextora-nav-toggle]");
		const mobileBp = toggle?.dataset.nextoraMobileBreakpoint ? parseInt(toggle.dataset.nextoraMobileBreakpoint, 10) : 768;

		if (!navSource || !menuUl || navSource.offsetWidth === 0) {
			header.style.removeProperty("--nextora-header-nav-scale");
			header.style.removeProperty("--nextora-header-nav-gap-scale");
			return;
		}

		// When screen is wider than 1400px (Desktop Full) or smaller than mobileBreakpoint (drawer active):
		const windowW = window.innerWidth;
		if (windowW > MAX_RESPONSIVE_WIDTH || windowW < mobileBp) {
			header.style.removeProperty("--nextora-header-nav-scale");
			header.style.removeProperty("--nextora-header-nav-gap-scale");
			return;
		}

		const items = Array.from(menuUl.children).filter((el): el is HTMLElement => el instanceof HTMLElement);
		if (!items.length) {
			header.style.removeProperty("--nextora-header-nav-scale");
			header.style.removeProperty("--nextora-header-nav-gap-scale");
			return;
		}

		const availableWidth = navSource.clientWidth;
		if (availableWidth <= 0) {
			return;
		}

		const currentFontScale = parseFloat(header.style.getPropertyValue("--nextora-header-nav-scale")) || 1;
		const currentGapScale = parseFloat(header.style.getPropertyValue("--nextora-header-nav-gap-scale")) || 1;

		// 1. Obtain stable natural unscaled width (cached to prevent subpixel calculation oscillation)
		let naturalItemsWidth = parseFloat(header.dataset.nextoraNavNaturalWidth || "0");
		let baseGap = parseFloat(header.dataset.nextoraNavBaseGap || "0");

		if (currentFontScale === 1 || naturalItemsWidth <= 0) {
			let sum = 0;
			for (const item of items) {
				sum += item.getBoundingClientRect().width;
			}
			const computedGap = parseFloat(window.getComputedStyle(menuUl).gap) || 20;
			baseGap = currentGapScale > 0 ? computedGap / currentGapScale : computedGap;

			if (sum > 0) {
				naturalItemsWidth = currentFontScale > 0 ? sum / currentFontScale : sum;
				header.dataset.nextoraNavNaturalWidth = String(Math.round(naturalItemsWidth * 10) / 10);
				header.dataset.nextoraNavBaseGap = String(Math.round(baseGap * 10) / 10);
			}
		}

		if (naturalItemsWidth <= 0) {
			return;
		}

		const numGaps = Math.max(0, items.length - 1);
		const fullNaturalWidth = naturalItemsWidth + numGaps * baseGap;

		// 2. When ample space, keep 100% full size for both text and gap
		if (fullNaturalWidth <= availableWidth) {
			if (currentFontScale !== 1 || currentGapScale !== 1) {
				header.style.removeProperty("--nextora-header-nav-scale");
				header.style.removeProperty("--nextora-header-nav-gap-scale");
			}
			return;
		}

		// 3. Space is tightening: prioritize keeping font size big (1.0), reduce gap first!
		const remainingForGaps = availableWidth - 8 - naturalItemsWidth;
		if (numGaps > 0) {
			const neededGap = remainingForGaps / numGaps;
			if (neededGap >= MIN_GAP_PX) {
				// Text stays 100% full size! Only gap is reduced.
				const gapScale = Math.round(Math.max(0.25, neededGap / baseGap) * 100) / 100;
				if (currentFontScale !== 1) {
					header.style.setProperty("--nextora-header-nav-scale", "1");
				}
				if (Math.abs(gapScale - currentGapScale) >= 0.01) {
					header.style.setProperty("--nextora-header-nav-gap-scale", String(gapScale));
				}
				return;
			}
		}

		// 4. Gap has reached minimum threshold (6px), now scale down font size smoothly
		const totalGapsAtMin = numGaps * MIN_GAP_PX;
		const targetFontScale = Math.min(1, Math.max(MIN_FONT_SCALE, (availableWidth - 8 - totalGapsAtMin) / naturalItemsWidth));
		const roundedFontScale = Math.round(targetFontScale * 100) / 100;
		const minGapScale = Math.round(Math.max(0.2, MIN_GAP_PX / baseGap) * 100) / 100;

		if (Math.abs(roundedFontScale - currentFontScale) >= 0.01) {
			header.style.setProperty("--nextora-header-nav-scale", String(roundedFontScale));
		}
		if (Math.abs(minGapScale - currentGapScale) >= 0.01) {
			header.style.setProperty("--nextora-header-nav-gap-scale", String(minGapScale));
		}
	}

	function updateAll(): void {
		headers.forEach((h) => measureAndScale(h));
	}

	let rafId: number | null = null;
	function scheduleUpdate(): void {
		if (rafId !== null) return;
		rafId = requestAnimationFrame(() => {
			rafId = null;
			updateAll();
		});
	}

	if (typeof ResizeObserver !== "undefined") {
		const ro = new ResizeObserver(() => {
			scheduleUpdate();
		});
		headers.forEach((h) => {
			ro.observe(h);
		});
	}

	window.addEventListener("resize", scheduleUpdate, { passive: true });

	if ("fonts" in document) {
		document.fonts.ready.then(() => {
			// Clear cache to re-measure with final loaded font metrics
			headers.forEach((h) => {
				delete h.dataset.nextoraNavNaturalWidth;
				delete h.dataset.nextoraNavBaseGap;
			});
			updateAll();
		});
	}

	updateAll();
}

