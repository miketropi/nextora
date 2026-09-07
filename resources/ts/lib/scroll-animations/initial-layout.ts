let initialLayoutReady: Promise<void> | null = null;

export function isInInitialRevealViewport(el: HTMLElement): boolean {
	const rect = el.getBoundingClientRect();
	const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 800;
	return rect.top < viewportHeight * 0.9 && rect.bottom > 0;
}

export function afterInitialLayout(callback: () => void): void {
	if (!initialLayoutReady) {
		initialLayoutReady = (async () => {
			// 1. Wait for document fonts to be ready so split text calculations & rendering never jump (FOUT).
			// Cap with a safe 250ms timeout so a slow font connection never blocks initial render.
			if (typeof document !== "undefined" && document.fonts?.ready) {
				try {
					await Promise.race([
						document.fonts.ready,
						new Promise<void>((resolve) => setTimeout(resolve, 250)),
					]);
				} catch {
					// Proceed safely on font error
				}
			}

			// 2. Safe layout buffer (60ms) gives browser enough time to calculate layout
			// while working reliably even in background/unfocused tabs where requestAnimationFrame is throttled.
			await new Promise<void>((resolve) => {
				setTimeout(resolve, 60);
			});
		})();
	}

	void initialLayoutReady.then(callback);
}
