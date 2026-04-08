/**
 * Accessible modal layer: declarative (data attributes) + programmatic API.
 *
 * Declarative — trigger:
 *   <button type="button" data-nextora-modal-open="my-modal">Open</button>
 *
 * Declarative — root (place anywhere in the document, often end of body via block):
 *   <div id="my-modal" class="nextora-modal" hidden data-nextora-modal aria-hidden="true">
 *     <div class="nextora-modal__scrim" data-nextora-modal-dismiss tabindex="-1"></div>
 *     <div class="nextora-modal__surface" data-nextora-modal-surface role="dialog" aria-modal="true" aria-labelledby="my-modal-title" tabindex="-1">
 *       <header class="nextora-modal__header">…</header>
 *       <div class="nextora-modal__body">…</div>
 *     </div>
 *   </div>
 *
 * The dialog panel **must** have `role="dialog"` and either `data-nextora-modal-surface` or class
 * `nextora-modal__surface` (attribute preferred so filters can keep hooks if they rename BEM classes).
 * Spotlight search uses a variant: `.nextora-modal__body` + chrome row inside the same surface
 * ({@see inc/hooks/header-hooks.php}).
 */

const FOCUSABLE_SELECTOR =
	'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const OPEN_CLASS = "nextora-modal--open";
const OPEN_ATTR = "data-nextora-modal-open";
const ROOT_ATTR = "data-nextora-modal";
const SURFACE_ATTR = "data-nextora-modal-surface";
const DISMISS_ATTR = "data-nextora-modal-dismiss";

type ModalStackEntry = {
	root: HTMLElement;
	previousFocus: Element | null;
	onKeyDown: (e: KeyboardEvent) => void;
};

const stack: ModalStackEntry[] = [];
let scrollLocked = false;

function getCloseLabel(): string {
	return window.nextoraModal?.closeLabel?.trim() || "Close dialog";
}

function getFocusable(container: HTMLElement): HTMLElement[] {
	return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
		(el) => el.offsetParent !== null || el === document.activeElement
	);
}

function lockScroll(lock: boolean): void {
	const doc = document.documentElement;
	if (lock) {
		if (!scrollLocked) {
			const y = window.scrollY;
			doc.dataset.nextoraModalScrollY = String(y);
			doc.style.setProperty("--nextora-modal-scroll-y", `-${y}px`);
			doc.classList.add("nextora-modal-scroll-lock");
			scrollLocked = true;
		}
	} else if (scrollLocked && stack.length === 0) {
		const y = Number(doc.dataset.nextoraModalScrollY || 0);
		doc.classList.remove("nextora-modal-scroll-lock");
		doc.style.removeProperty("--nextora-modal-scroll-y");
		delete doc.dataset.nextoraModalScrollY;
		window.scrollTo(0, y);
		scrollLocked = false;
	}
}

function isModalRoot(el: Element | null): el is HTMLElement {
	return el instanceof HTMLElement && el.hasAttribute(ROOT_ATTR);
}

function findModalRoot(el: Element | null): HTMLElement | null {
	let n: Element | null = el;
	while (n) {
		if (isModalRoot(n)) {
			return n;
		}
		n = n.parentElement;
	}
	return null;
}

function setStackZIndex(): void {
	stack.forEach((entry, i) => {
		entry.root.style.zIndex = String(1050 + i);
	});
}

function trapFocus(e: KeyboardEvent, surface: HTMLElement): void {
	if (e.key !== "Tab") {
		return;
	}
	const nodes = getFocusable(surface);
	if (nodes.length === 0) {
		return;
	}
	const first = nodes[0];
	const last = nodes[nodes.length - 1];
	const active = document.activeElement;
	if (e.shiftKey) {
		if (active === first || !surface.contains(active)) {
			e.preventDefault();
			last.focus();
		}
	} else if (active === last) {
		e.preventDefault();
		first.focus();
	}
}

/**
 * Open a modal root element (must have `data-nextora-modal`).
 */
export function openModal(root: HTMLElement): void {
	if (!root.hasAttribute(ROOT_ATTR) || root.classList.contains(OPEN_CLASS)) {
		return;
	}

	const surface =
		root.querySelector<HTMLElement>(`[${SURFACE_ATTR}]`) ??
		root.querySelector<HTMLElement>(".nextora-modal__surface");
	if (!surface || surface.getAttribute("role") !== "dialog") {
		return;
	}

	const previousFocus = document.activeElement;
	root.removeAttribute("hidden");
	root.removeAttribute("aria-hidden");

	const onKeyDown = (e: KeyboardEvent): void => {
		if (e.key === "Escape" && stack[stack.length - 1]?.root === root) {
			e.preventDefault();
			closeModal(root);
			return;
		}
		trapFocus(e, surface);
	};

	stack.push({ root, previousFocus, onKeyDown });
	document.addEventListener("keydown", onKeyDown, true);
	lockScroll(true);
	setStackZIndex();

	requestAnimationFrame(() => {
		root.classList.add(OPEN_CLASS);
		const focusables = getFocusable(surface);
		const toFocus = focusables[0] ?? surface;
		toFocus.focus();
		root.dispatchEvent(
			new CustomEvent("nextora:modalopen", {
				bubbles: true,
				detail: { root },
			})
		);
	});
}

/**
 * Close a modal; omit `root` to close the topmost modal.
 * `afterClose` runs once the layer is hidden (after transition or timeout).
 * If `root` is set and it is not the topmost open modal, this is a no-op (stack safety).
 */
export function closeModal(root?: HTMLElement, afterClose?: () => void): void {
	const top = stack[stack.length - 1];
	const target = root ?? top?.root;
	if (!target || !target.classList.contains(OPEN_CLASS)) {
		return;
	}
	if (root !== undefined && top && root !== top.root) {
		return;
	}

	const idx = stack.findIndex((e) => e.root === target);
	if (idx === -1) {
		return;
	}
	const entry = stack[idx]!;

	let finished = false;
	const finish = (): void => {
		if (finished) {
			return;
		}
		finished = true;
		target.dispatchEvent(
			new CustomEvent("nextora:modalclose", {
				bubbles: true,
				detail: { root: target },
			})
		);
		target.removeEventListener("transitionend", onTransitionEnd);
		document.removeEventListener("keydown", entry.onKeyDown, true);
		stack.splice(idx, 1);
		setStackZIndex();
		target.classList.remove(OPEN_CLASS);
		target.setAttribute("hidden", "");
		target.setAttribute("aria-hidden", "true");
		lockScroll(false);
		if (entry.previousFocus instanceof HTMLElement && document.contains(entry.previousFocus)) {
			entry.previousFocus.focus();
		}
		afterClose?.();
	};

	const onTransitionEnd = (ev: TransitionEvent): void => {
		if (ev.target === target && ev.propertyName === "opacity") {
			finish();
		}
	};

	target.addEventListener("transitionend", onTransitionEnd);
	window.setTimeout(finish, 380);
	target.classList.remove(OPEN_CLASS);
}

/**
 * Open modal by element id (`#` optional).
 */
export function openModalById(id: string): boolean {
	const clean = id.replace(/^#/, "");
	const el = document.getElementById(clean);
	if (el instanceof HTMLElement && el.hasAttribute(ROOT_ATTR)) {
		openModal(el);
		return true;
	}
	return false;
}

export interface NextoraModalDialogOptions {
	title: string;
	body: string | HTMLElement;
	footer?: string | HTMLElement;
	wrapClass?: string;
	/** If false, only the close button dismisses (and Escape). Default true. */
	closeOnBackdrop?: boolean;
}

/**
 * Build a modal in memory, append to `document.body`, open it, return `close()`.
 */
export function openModalDialog(options: NextoraModalDialogOptions): { close: () => void } {
	const closeOnBackdrop = options.closeOnBackdrop !== false;
	const id = `nextora-modal-${Math.random().toString(36).slice(2, 11)}`;
	const titleId = `${id}-title`;

	const root = document.createElement("div");
	root.className = `nextora-modal${options.wrapClass ? ` ${options.wrapClass}` : ""}`;
	root.setAttribute(ROOT_ATTR, "");
	root.setAttribute("aria-hidden", "true");
	root.setAttribute("hidden", "");

	const scrim = document.createElement("div");
	scrim.className = "nextora-modal__scrim";
	scrim.tabIndex = -1;
	if (closeOnBackdrop) {
		scrim.setAttribute(DISMISS_ATTR, "");
	}

	const surface = document.createElement("div");
	surface.className = "nextora-modal__surface nextora-modal__surface--sm";
	surface.setAttribute(SURFACE_ATTR, "");
	surface.setAttribute("role", "dialog");
	surface.setAttribute("aria-modal", "true");
	surface.setAttribute("aria-labelledby", titleId);
	surface.tabIndex = -1;

	const header = document.createElement("header");
	header.className = "nextora-modal__header";

	const h2 = document.createElement("h2");
	h2.className = "nextora-modal__title";
	h2.id = titleId;
	h2.textContent = options.title;

	const closeBtn = document.createElement("button");
	closeBtn.type = "button";
	closeBtn.className = "nextora-modal__close";
	closeBtn.setAttribute(DISMISS_ATTR, "");
	closeBtn.setAttribute("aria-label", getCloseLabel());
	closeBtn.innerHTML =
		'<span class="nextora-modal__close-icon" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg></span>';

	header.append(h2, closeBtn);

	const bodyEl = document.createElement("div");
	bodyEl.className = "nextora-modal__body";
	if (typeof options.body === "string") {
		bodyEl.innerHTML = options.body;
	} else {
		bodyEl.append(options.body);
	}

	surface.append(header, bodyEl);

	if (options.footer !== undefined) {
		const foot = document.createElement("footer");
		foot.className = "nextora-modal__footer";
		if (typeof options.footer === "string") {
			foot.innerHTML = options.footer;
		} else {
			foot.append(options.footer);
		}
		surface.append(foot);
	}

	root.append(scrim, surface);
	document.body.append(root);

	openModal(root);

	return {
		close: (): void => {
			closeModal(root, () => {
				root.remove();
			});
		},
	};
}

function onDocumentClick(e: MouseEvent): void {
	const t = e.target;
	if (!(t instanceof Element)) {
		return;
	}
	const openBtn = t.closest(`[${OPEN_ATTR}]`);
	if (openBtn instanceof HTMLElement) {
		const id = openBtn.getAttribute(OPEN_ATTR);
		if (id) {
			e.preventDefault();
			openModalById(id);
		}
		return;
	}
	const dismiss = t.closest(`[${DISMISS_ATTR}]`);
	if (dismiss instanceof HTMLElement) {
		const modal = findModalRoot(dismiss);
		if (modal && modal.classList.contains(OPEN_CLASS)) {
			e.preventDefault();
			closeModal(modal);
		}
	}
}

/**
 * Wire document-level triggers and dismiss controls. Safe to call once on DOMContentLoaded.
 */
export function initModals(): void {
	document.addEventListener("click", onDocumentClick);
}

declare global {
	interface Window {
		nextoraModal?: { closeLabel?: string };
		nextoraOpenModal?: typeof openModalById;
		nextoraOpenModalDialog?: typeof openModalDialog;
		nextoraCloseModal?: typeof closeModal;
	}
}

/**
 * Expose for inline scripts / classic templates: `window.nextoraOpenModal('id')`.
 */
export function attachModalGlobals(): void {
	window.nextoraOpenModal = openModalById;
	window.nextoraOpenModalDialog = openModalDialog;
	window.nextoraCloseModal = closeModal;
}
