/**
 * Spotlight-style live search inside the header modal (WordPress REST `wp/v2/search`).
 */

declare global {
	interface Window {
		nextoraSpotlight?: NextoraSpotlightConfig;
	}
}

export interface NextoraSpotlightConfig {
	restUrl: string;
	debounceMs: number;
	minQueryLength: number;
	perPage: number;
	loading: string;
	noResults: string;
	error: string;
	typePost: string;
	typePage: string;
	typeOther: string;
	keyboardHint: string;
}

interface WpSearchItem {
	id: number | string;
	title: string | { rendered?: string; raw?: string };
	url: string;
	type: string;
	subtype: string;
}

function cfg(): NextoraSpotlightConfig | null {
	const c = window.nextoraSpotlight;
	if (!c?.restUrl) {
		return null;
	}
	return c;
}

function formatTitle(raw: WpSearchItem["title"]): string {
	if (typeof raw === "string") {
		return raw;
	}
	if (raw && typeof raw === "object") {
		const r = raw.rendered ?? raw.raw;
		if (typeof r === "string") {
			const d = document.createElement("div");
			d.innerHTML = r;
			return (d.textContent || "").trim();
		}
	}
	return "";
}

function subtypeLabel(sub: string, c: NextoraSpotlightConfig): string {
	if (sub === "post") {
		return c.typePost;
	}
	if (sub === "page") {
		return c.typePage;
	}
	return c.typeOther;
}

/** Human-readable path for the result row (no protocol / host). */
function formatDisplayPath(rawUrl: string): string {
	try {
		const u = new URL(rawUrl, window.location.origin);
		let p = decodeURIComponent(u.pathname || "/");
		if (p.length > 1 && p.endsWith("/")) {
			p = p.slice(0, -1);
		}
		p = p.replace(/^\/+/, "");
		return p === "" ? "/" : p;
	} catch {
		return "";
	}
}

function truncateMiddle(str: string, max: number): string {
	if (str.length <= max) {
		return str;
	}
	const keep = max - 1;
	const head = Math.ceil(keep / 2);
	const tail = Math.floor(keep / 2);
	return `${str.slice(0, head)}…${str.slice(-tail)}`;
}

/** Decorative icons (static SVG only). */
function spotlightIconSvg(subtype: string): string {
	const stroke =
		'xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
	if (subtype === "page") {
		return `<svg ${stroke}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18M9 21V9"/></svg>`;
	}
	if (subtype === "post") {
		return `<svg ${stroke}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h6"/></svg>`;
	}
	return `<svg ${stroke}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`;
}

function debounce<T extends unknown[]>(fn: (...a: T) => void, ms: number): (...a: T) => void {
	let t: ReturnType<typeof setTimeout> | undefined;
	return (...args: T) => {
		if (t) {
			clearTimeout(t);
		}
		t = setTimeout(() => {
			t = undefined;
			fn(...args);
		}, ms);
	};
}

export function initSpotlightSearch(): void {
	const config = cfg();
	if (!config) {
		return;
	}

	const roots = document.querySelectorAll<HTMLElement>("[data-nextora-spotlight]");
	roots.forEach((form) => bindSpotlightForm(form, config));
}

function bindSpotlightForm(form: HTMLElement, config: NextoraSpotlightConfig): void {
	if (!(form instanceof HTMLFormElement)) {
		return;
	}

	const input = form.querySelector<HTMLInputElement>('input[name="s"]');
	const resultsEl = form.querySelector<HTMLElement>("[data-spotlight-results]");
	const statusEl = form.querySelector<HTMLElement>("[data-spotlight-status]");
	const spinnerEl = form.querySelector<HTMLElement>("[data-spotlight-spinner]");
	const hintEl = form.querySelector<HTMLElement>("[data-spotlight-hint]");
	const emptyEl = form.querySelector<HTMLElement>("[data-spotlight-empty]");

	if (!input || !resultsEl) {
		return;
	}

	let abort: AbortController | null = null;
	let items: { el: HTMLAnchorElement; url: string }[] = [];
	let activeIndex = -1;

	const setLoading = (on: boolean): void => {
		spinnerEl?.toggleAttribute("hidden", !on);
		form.classList.toggle("nextora-spotlight--loading", on);
	};

	const setStatus = (text: string, hide = false): void => {
		if (!statusEl) {
			return;
		}
		if (hide || text === "") {
			statusEl.textContent = "";
			statusEl.setAttribute("hidden", "");
			return;
		}
		statusEl.textContent = text;
		statusEl.removeAttribute("hidden");
	};

	const clearResults = (): void => {
		resultsEl.innerHTML = "";
		resultsEl.setAttribute("hidden", "");
		input.setAttribute("aria-expanded", "false");
		input.removeAttribute("aria-activedescendant");
		items = [];
		activeIndex = -1;
		emptyEl?.setAttribute("hidden", "");
		if (emptyEl) {
			emptyEl.textContent = "";
		}
	};

	const renderResults = (list: WpSearchItem[]): void => {
		clearResults();
		if (list.length === 0) {
			if (emptyEl) {
				emptyEl.textContent = config.noResults;
				emptyEl.removeAttribute("hidden");
			}
			setStatus("", true);
			return;
		}

		resultsEl.removeAttribute("hidden");
		input.setAttribute("aria-expanded", "true");
		const ul = document.createElement("ul");
		ul.className = "nextora-spotlight__list";
		ul.setAttribute("role", "presentation");

		list.forEach((hit, i) => {
			const title = formatTitle(hit.title);
			const url = hit.url;
			const sub = hit.subtype || hit.type || "";
			const pathRaw = formatDisplayPath(url);
			const pathShown = truncateMiddle(pathRaw, 52);

			const li = document.createElement("li");
			li.className = "nextora-spotlight__item";
			li.style.setProperty("--nextora-spotlight-i", String(i));

			const a = document.createElement("a");
			a.className = "nextora-spotlight__link";
			a.href = url;
			a.setAttribute("role", "option");
			a.setAttribute("aria-selected", "false");
			a.id = `${input.id}-opt-${i}`;

			const thumb = document.createElement("span");
			thumb.className = "nextora-spotlight__thumb";
			thumb.innerHTML = spotlightIconSvg(sub);

			const stack = document.createElement("span");
			stack.className = "nextora-spotlight__stack";

			const titleEl = document.createElement("span");
			titleEl.className = "nextora-spotlight__title";
			titleEl.textContent = title;

			const meta = document.createElement("span");
			meta.className = "nextora-spotlight__meta";

			const typeEl = document.createElement("span");
			typeEl.className = "nextora-spotlight__type";
			typeEl.textContent = subtypeLabel(sub, config);

			if (pathShown !== "") {
				const sep = document.createElement("span");
				sep.className = "nextora-spotlight__sep";
				sep.textContent = "·";
				const pathEl = document.createElement("span");
				pathEl.className = "nextora-spotlight__path";
				pathEl.textContent = pathShown;
				meta.append(typeEl, sep, pathEl);
			} else {
				meta.append(typeEl);
			}

			stack.append(titleEl, meta);
			a.append(thumb, stack);
			li.append(a);
			ul.append(li);
			items.push({ el: a, url });
			a.addEventListener("mouseenter", () => {
				applyActive(i);
			});
		});

		resultsEl.append(ul);
		setStatus("", true);
	};

	const applyActive = (next: number): void => {
		if (items.length === 0) {
			return;
		}
		const clamped = Math.max(0, Math.min(next, items.length - 1));
		activeIndex = clamped;
		items.forEach(({ el }, i) => {
			const on = i === clamped;
			el.setAttribute("aria-selected", on ? "true" : "false");
			el.classList.toggle("nextora-spotlight__link--active", on);
		});
		if (clamped >= 0 && items[clamped]) {
			input.setAttribute("aria-activedescendant", items[clamped]!.el.id);
		} else {
			input.removeAttribute("aria-activedescendant");
		}
	};

	const runFetch = async (q: string): Promise<void> => {
		const query = q.trim();
		if (query.length < config.minQueryLength) {
			clearResults();
			setStatus("", true);
			setLoading(false);
			hintEl?.removeAttribute("hidden");
			return;
		}

		hintEl?.setAttribute("hidden", "");

		if (abort) {
			abort.abort();
		}
		abort = new AbortController();
		const { signal } = abort;

		setLoading(true);
		setStatus(config.loading, false);

		const params = new URLSearchParams({
			search: query,
			per_page: String(config.perPage),
		});

		try {
			const res = await fetch(`${config.restUrl}?${params.toString()}`, {
				signal,
				credentials: "same-origin",
				headers: { Accept: "application/json" },
			});

			if (!res.ok) {
				throw new Error(String(res.status));
			}

			const data = (await res.json()) as WpSearchItem[];
			if (signal.aborted) {
				return;
			}

			renderResults(Array.isArray(data) ? data : []);
		} catch (e) {
			if ((e as Error).name === "AbortError") {
				return;
			}
			clearResults();
			if (emptyEl) {
				emptyEl.textContent = config.error;
				emptyEl.removeAttribute("hidden");
			}
			setStatus("", true);
		} finally {
			if (!signal.aborted) {
				setLoading(false);
			}
		}
	};

	const debouncedFetch = debounce((q: string) => {
		void runFetch(q);
	}, Math.max(80, config.debounceMs));

	input.addEventListener("input", () => {
		debouncedFetch(input.value);
	});

	input.addEventListener("keydown", (e) => {
		if (!resultsEl.hasAttribute("hidden") && items.length > 0) {
			if (e.key === "ArrowDown") {
				e.preventDefault();
				applyActive(activeIndex < 0 ? 0 : activeIndex + 1);
				return;
			}
			if (e.key === "ArrowUp") {
				e.preventDefault();
				applyActive(activeIndex <= 0 ? items.length - 1 : activeIndex - 1);
				return;
			}
			if (e.key === "Enter" && activeIndex >= 0) {
				e.preventDefault();
				window.location.href = items[activeIndex]!.url;
				return;
			}
		}
	});

	form.addEventListener("submit", (e) => {
		if (activeIndex >= 0 && items[activeIndex]) {
			e.preventDefault();
			window.location.href = items[activeIndex]!.url;
		}
	});

	const resetUi = (): void => {
		if (abort) {
			abort.abort();
			abort = null;
		}
		input.value = "";
		clearResults();
		setStatus("", true);
		setLoading(false);
		hintEl?.removeAttribute("hidden");
	};

	const modalRoot = form.closest<HTMLElement>("[data-nextora-modal]");
	if (modalRoot) {
		modalRoot.addEventListener(
			"nextora:modalopen",
			() => {
				requestAnimationFrame(() => {
					input.focus();
					input.select();
				});
			},
			{ passive: true }
		);
		modalRoot.addEventListener("nextora:modalclose", resetUi, { passive: true });
	}

	if (hintEl && config.keyboardHint && !hintEl.querySelector(".nextora-spotlight__kbd-hint")) {
		const kbd = document.createElement("span");
		kbd.className = "nextora-spotlight__kbd-hint";
		kbd.textContent = ` ${config.keyboardHint}`;
		hintEl.appendChild(kbd);
	}
}
