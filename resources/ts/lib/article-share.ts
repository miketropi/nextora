/**
 * Copy post URL for [data-nextora-article-share] regions.
 */

declare global {
	interface Window {
		nextoraArticleShare?: {
			copied?: string;
			copyFailed?: string;
		};
	}
}

function setStatus(el: HTMLElement | null, message: string): void {
	if (!el) {
		return;
	}
	el.textContent = message;
	if (message) {
		window.setTimeout(() => {
			el.textContent = "";
		}, 2500);
	}
}

function setVisibleFeedback(el: HTMLElement | null, message: string): void {
	if (!el) {
		return;
	}
	el.textContent = message;
	if (message) {
		window.setTimeout(() => {
			el.textContent = "";
		}, 2200);
	}
}

/**
 * Copy without Clipboard API (needed on http://*.local and other non-secure origins).
 */
function copyViaExecCommand(text: string): boolean {
	const ta = document.createElement("textarea");
	ta.value = text;
	ta.setAttribute("readonly", "");
	ta.style.position = "fixed";
	ta.style.left = "-9999px";
	ta.style.top = "0";
	ta.style.opacity = "0";
	document.body.appendChild(ta);
	ta.focus();
	ta.select();
	ta.setSelectionRange(0, text.length);
	let ok = false;
	try {
		ok = document.execCommand("copy");
	} catch {
		ok = false;
	}
	document.body.removeChild(ta);
	return ok;
}

async function copyTextToClipboard(text: string): Promise<boolean> {
	if (typeof navigator.clipboard?.writeText === "function" && window.isSecureContext) {
		try {
			await navigator.clipboard.writeText(text);
			return true;
		} catch {
			/* fall through */
		}
	}
	return copyViaExecCommand(text);
}

export function initArticleShare(): void {
	const roots = document.querySelectorAll<HTMLElement>("[data-nextora-article-share]");
	if (roots.length === 0) {
		return;
	}

	const i18n = window.nextoraArticleShare ?? {};

	for (const root of roots) {
		const btn = root.querySelector<HTMLButtonElement>("[data-nextora-copy-url]");
		const status = root.querySelector<HTMLElement>("[data-nextora-copy-status]");
		const feedback = root.querySelector<HTMLElement>("[data-nextora-copy-feedback]");
		if (!btn) {
			continue;
		}

		const url = btn.dataset.url?.trim() ?? "";
		if (!url) {
			continue;
		}

		btn.addEventListener("click", async () => {
			const okMsg = i18n.copied ?? "Link copied";
			const errMsg = i18n.copyFailed ?? "Could not copy";
			const copied = await copyTextToClipboard(url);
			if (copied) {
				setStatus(status, okMsg);
				setVisibleFeedback(feedback, okMsg);
			} else {
				setStatus(status, errMsg);
				setVisibleFeedback(feedback, errMsg);
			}
		});
	}
}
