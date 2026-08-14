let initialLayoutReady: Promise<void> | null = null;

function waitForLoad(): Promise<void> {
	if (document.readyState === "complete") {
		return Promise.resolve();
	}

	return new Promise((resolve) => {
		window.addEventListener("load", () => resolve(), { once: true });
	});
}

export function isInInitialRevealViewport(el: HTMLElement): boolean {
	const rect = el.getBoundingClientRect();
	return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
}

export function afterInitialLayout(callback: () => void): void {
	if (!initialLayoutReady) {
		initialLayoutReady = waitForLoad().then(async () => {
			if (document.fonts?.ready) {
				await document.fonts.ready;
			}

		await new Promise<void>((resolve) => {
				requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
			});
		});
	}

	void initialLayoutReady.then(callback);
}
