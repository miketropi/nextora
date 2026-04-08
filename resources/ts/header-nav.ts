/**
 * Primary header navigation — mobile menu opens in a body portal with a cloned nav
 * (avoids stacking-context / overflow clipping in the header). See `header-hooks.php`.
 */

const DESKTOP_MQ = "(min-width: 768px)";
/** Keep in sync with `--nextora-nav-portal-dur` in `nav-menus.css` (300ms + small buffer). */
const PORTAL_CLOSE_MS = 320;
const FOCUS_AFTER_OPEN_MS = 80;
/** Ignore backdrop clicks right after open (avoids mobile “ghost” click closing the menu). */
const OPEN_BACKDROP_GUARD_MS = 500;

function prefersReducedMotion(): boolean {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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
		'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

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

function cloneNavIntoMount(sourcePanel: HTMLElement, mount: HTMLElement): void {
	const sourceNode =
		sourcePanel.querySelector<HTMLElement>("nav") ??
		(sourcePanel.firstElementChild instanceof HTMLElement ? sourcePanel.firstElementChild : null);

	if (!sourceNode) {
		mount.replaceChildren();
		return;
	}

	const clone = sourceNode.cloneNode(true) as HTMLElement;
	dedupeCloneIds(clone);
	mount.replaceChildren(clone);
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
	const mq = window.matchMedia(DESKTOP_MQ);

	document.querySelectorAll<HTMLButtonElement>("[data-nextora-nav-toggle]").forEach((btn) => {
		const sourceSel = btn.dataset.nextoraNavCloneSource?.trim();
		if (!sourceSel) {
			return;
		}

		const sourcePanel = document.querySelector<HTMLElement>(sourceSel);
		if (!sourcePanel?.hasAttribute("data-nextora-nav-source-panel")) {
			return;
		}

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
				p.root.classList.remove("nextora-primary-nav-portal--open");
				p.root.hidden = true;
				p.mount.replaceChildren();
				btn.setAttribute("aria-expanded", "false");
				setExpandedLabel(false);
				document.documentElement.classList.remove("nextora-primary-nav-drawer-open");
				btn.focus();
				return;
			}

			p.root.classList.remove("nextora-primary-nav-portal--open");
			btn.setAttribute("aria-expanded", "false");
			setExpandedLabel(false);
			document.documentElement.classList.remove("nextora-primary-nav-drawer-open");

			clearCloseTimer();
			const closeMs = prefersReducedMotion() ? 0 : PORTAL_CLOSE_MS;
			closeFinishTimer = window.setTimeout(() => {
				closeFinishTimer = null;
				p.root.hidden = true;
				p.mount.replaceChildren();
				btn.focus();
			}, closeMs);
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
			void p.root.getBoundingClientRect();

			requestAnimationFrame(() => {
				p.root.classList.add("nextora-primary-nav-portal--open");
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
				p.root.classList.remove("nextora-primary-nav-portal--open");
				p.root.hidden = true;
				p.mount.replaceChildren();
			}
			detachEscape();
			btn.setAttribute("aria-expanded", "false");
			setExpandedLabel(false);
			document.documentElement.classList.remove("nextora-primary-nav-drawer-open");
			if (mq.matches) {
				sourcePanel.classList.remove("hidden");
			} else {
				sourcePanel.classList.add("hidden");
			}
		};

		mq.addEventListener("change", resetForViewport);

		resetForViewport();
	});
}
