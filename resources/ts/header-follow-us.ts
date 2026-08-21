/**
 * Follow Us dropdown in nextora/header utilities column.
 */

const ROOT_SELECTOR = "[data-nextora-header-follow-us]";
const TOGGLE_SELECTOR = "[data-nextora-header-follow-us-toggle]";
const PANEL_SELECTOR = "[data-nextora-header-follow-us-panel]";
const SCRIM_SELECTOR = "[data-nextora-header-follow-us-scrim]";
const VIEWPORT_GUTTER = 16;

function prefersReducedMotion(): boolean {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function clearPanelPosition(panel: HTMLElement): void {
	panel.style.removeProperty("top");
	panel.style.removeProperty("left");
	panel.style.removeProperty("right");
	panel.style.removeProperty("width");
	panel.style.removeProperty("max-height");
	panel.style.removeProperty("visibility");
	panel.style.removeProperty("pointer-events");
}

function positionStackedPanel(toggle: HTMLButtonElement, panel: HTMLElement): void {
	const rect = toggle.getBoundingClientRect();
	const top = Math.round(rect.bottom + 8);
	const maxHeight = Math.max(180, window.innerHeight - top - VIEWPORT_GUTTER);

	panel.style.top = `${top}px`;
	panel.style.left = `${VIEWPORT_GUTTER}px`;
	panel.style.right = `${VIEWPORT_GUTTER}px`;
	panel.style.width = "auto";
	panel.style.maxHeight = `${maxHeight}px`;
}

function panelOverflowsViewport(root: HTMLElement, panel: HTMLElement): boolean {
	root.classList.remove("nextora-header-block__follow-us--stacked");
	clearPanelPosition(panel);

	const wasHidden = panel.hidden;
	panel.hidden = false;
	panel.style.visibility = "hidden";
	panel.style.pointerEvents = "none";

	const panelRect = panel.getBoundingClientRect();
	const overflows =
		panelRect.left < VIEWPORT_GUTTER ||
		panelRect.right > window.innerWidth - VIEWPORT_GUTTER;

	panel.style.visibility = "";
	panel.style.pointerEvents = "";
	panel.hidden = wasHidden;

	return overflows;
}

function applyPanelLayout(
	root: HTMLElement,
	toggle: HTMLButtonElement,
	panel: HTMLElement,
	scrim: HTMLElement | null,
): void {
	const stacked = panelOverflowsViewport(root, panel);

	root.classList.toggle("nextora-header-block__follow-us--stacked", stacked);
	clearPanelPosition(panel);

	if (stacked) {
		positionStackedPanel(toggle, panel);
		document.documentElement.classList.add("nextora-header-follow-us-open");
		if (scrim) {
			scrim.hidden = false;
		}
		return;
	}

	document.documentElement.classList.remove("nextora-header-follow-us-open");
	if (scrim) {
		scrim.hidden = true;
	}
}

function isDrawerFollowUs(root: HTMLElement): boolean {
	return root.hasAttribute("data-nextora-header-follow-us-drawer");
}

function isFollowUsPortalClone(root: HTMLElement): boolean {
	return root.closest("[data-nextora-nav-portal-mount]") !== null;
}

function shouldBindFollowUsRoot(root: HTMLElement): boolean {
	if (!isDrawerFollowUs(root)) {
		return true;
	}

	// Drawer markup in the hidden nav source is cloned into the portal on open.
	return isFollowUsPortalClone(root);
}

export function clearFollowUsBindingState(root: ParentNode): void {
	if (root instanceof HTMLElement && root.matches(ROOT_SELECTOR)) {
		delete root.dataset.nextoraHeaderFollowUsBound;
	}

	root.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach((el) => {
		delete el.dataset.nextoraHeaderFollowUsBound;
	});
}

function syncDrawerFollowUsOverlay(root: HTMLElement, open: boolean): void {
	if (!isDrawerFollowUs(root)) {
		return;
	}

	const mount = root.closest("[data-nextora-nav-portal-mount]");
	const portalPanel = root.closest(".nextora-primary-nav-portal__panel");

	mount?.classList.toggle("nextora-primary-nav-portal__mount--follow-us-open", open);
	portalPanel?.classList.toggle("nextora-primary-nav-portal__panel--follow-us-open", open);
}

function closePanel(
	root: HTMLElement,
	toggle: HTMLButtonElement,
	panel: HTMLElement,
	scrim: HTMLElement | null,
): void {
	root.classList.remove("nextora-header-block__follow-us--open", "nextora-header-block__follow-us--stacked");
	document.documentElement.classList.remove("nextora-header-follow-us-open");
	toggle.setAttribute("aria-expanded", "false");
	panel.hidden = true;

	if (!isDrawerFollowUs(root)) {
		clearPanelPosition(panel);
	}

	if (scrim) {
		scrim.hidden = true;
	}

	syncDrawerFollowUsOverlay(root, false);
}

function openPanel(
	root: HTMLElement,
	toggle: HTMLButtonElement,
	panel: HTMLElement,
	scrim: HTMLElement | null,
): void {
	document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach((other) => {
		if (other === root) {
			return;
		}
		const otherToggle = other.querySelector<HTMLButtonElement>(TOGGLE_SELECTOR);
		const otherPanel = other.querySelector<HTMLElement>(PANEL_SELECTOR);
		const otherScrim = other.querySelector<HTMLElement>(SCRIM_SELECTOR);
		if (otherToggle && otherPanel) {
			closePanel(other, otherToggle, otherPanel, otherScrim);
		}
	});

	panel.hidden = false;

	if (isDrawerFollowUs(root)) {
		root.classList.add("nextora-header-block__follow-us--open");
		toggle.setAttribute("aria-expanded", "true");
		syncDrawerFollowUsOverlay(root, true);
		return;
	}

	applyPanelLayout(root, toggle, panel, scrim);
	root.classList.add("nextora-header-block__follow-us--open");
	toggle.setAttribute("aria-expanded", "true");
}

function bindFollowUsRoot(root: HTMLElement): void {
	if (!shouldBindFollowUsRoot(root) || root.dataset.nextoraHeaderFollowUsBound === "1") {
		return;
	}

	const toggle = root.querySelector<HTMLButtonElement>(TOGGLE_SELECTOR);
	const panel = root.querySelector<HTMLElement>(PANEL_SELECTOR);
	const scrim = root.querySelector<HTMLElement>(SCRIM_SELECTOR);
	if (!toggle || !panel) {
		return;
	}

	root.dataset.nextoraHeaderFollowUsBound = "1";

	const handleReposition = (): void => {
		if (!root.classList.contains("nextora-header-block__follow-us--open") || isDrawerFollowUs(root)) {
			return;
		}
		applyPanelLayout(root, toggle, panel, scrim);
	};

	toggle.addEventListener("click", (event) => {
		event.preventDefault();
		event.stopPropagation();
		const isOpen = root.classList.contains("nextora-header-block__follow-us--open");
		if (isOpen) {
			closePanel(root, toggle, panel, scrim);
			return;
		}
		openPanel(root, toggle, panel, scrim);
	});

	panel.addEventListener("click", (event) => {
		event.stopPropagation();
	});

	scrim?.addEventListener("click", (event) => {
		event.preventDefault();
		closePanel(root, toggle, panel, scrim);
	});

	toggle.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			closePanel(root, toggle, panel, scrim);
		}
	});

	window.addEventListener("resize", handleReposition);
	if (!prefersReducedMotion() && !isDrawerFollowUs(root)) {
		window.addEventListener("scroll", handleReposition, { passive: true });
	}
}

export function bindHeaderFollowUsIn(root: ParentNode = document): void {
	root.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach(bindFollowUsRoot);
}

export function initHeaderFollowUs(): void {
	bindHeaderFollowUsIn(document);

	if (document.documentElement.dataset.nextoraHeaderFollowUsDocBound === "1") {
		return;
	}
	document.documentElement.dataset.nextoraHeaderFollowUsDocBound = "1";

	document.addEventListener("click", (event) => {
		const target = event.target;
		if (!(target instanceof Node)) {
			return;
		}
		document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach((root) => {
			if (!shouldBindFollowUsRoot(root) || root.contains(target)) {
				return;
			}
			const toggle = root.querySelector<HTMLButtonElement>(TOGGLE_SELECTOR);
			const panel = root.querySelector<HTMLElement>(PANEL_SELECTOR);
			const scrim = root.querySelector<HTMLElement>(SCRIM_SELECTOR);
			if (toggle && panel && root.classList.contains("nextora-header-block__follow-us--open")) {
				closePanel(root, toggle, panel, scrim);
			}
		});
	});

	document.addEventListener("keydown", (event) => {
		if (event.key !== "Escape") {
			return;
		}
		document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach((root) => {
			const toggle = root.querySelector<HTMLButtonElement>(TOGGLE_SELECTOR);
			const panel = root.querySelector<HTMLElement>(PANEL_SELECTOR);
			const scrim = root.querySelector<HTMLElement>(SCRIM_SELECTOR);
			if (toggle && panel && root.classList.contains("nextora-header-block__follow-us--open")) {
				closePanel(root, toggle, panel, scrim);
			}
		});
	});
}
