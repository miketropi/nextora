/**
 * Fill marquee halves so each side is at least as wide as the track (no gaps when few items).
 */

const PRIMARY_HALF_SELECTOR = '[data-nextora-marquee-half="primary"]';
const DUPLICATE_HALF_SELECTOR = '[data-nextora-marquee-half="duplicate"]';
const TRACK_SELECTOR = '.nextora-scrolling-promotion__track';
const LOOP_WIDTH_PROPERTY = '--nextora-marquee-loop-width';

export function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
	);
}

function whenImagesReady(root: HTMLElement): Promise<void> {
	const imgs = [...root.querySelectorAll<HTMLImageElement>('img')];
	if (imgs.length === 0) {
		return Promise.resolve();
	}

	imgs.forEach((img) => {
		if (img.loading === 'lazy') {
			img.loading = 'eager';
		}
	});

	const imagePromises = imgs.map(
		(img) =>
			new Promise<void>((resolve) => {
				if (img.complete && img.naturalWidth > 0) {
					resolve();
					return;
				}
				if (typeof img.decode === 'function') {
					img.decode()
						.then(() => resolve())
						.catch(() => resolve());
					return;
				}
				const done = (): void => {
					img.removeEventListener('load', done);
					img.removeEventListener('error', done);
					resolve();
				};
				img.addEventListener('load', done, { once: true });
				img.addEventListener('error', done, { once: true });
			}),
	);

	const timeoutPromise = new Promise<void>((resolve) => {
		setTimeout(resolve, 600);
	});

	return Promise.race([Promise.all(imagePromises).then(() => undefined), timeoutPromise]);
}

function fillHalf(half: HTMLElement, minWidth: number): void {
	let template = half.dataset.nextoraMarqueeTemplate ?? '';
	if ('' === template) {
		template = half.innerHTML.trim();
		if ('' === template) {
			return;
		}
		half.dataset.nextoraMarqueeTemplate = template;
	} else {
		half.innerHTML = template;
	}

	let safety = 0;
	while (half.scrollWidth < minWidth && safety < 64) {
		half.insertAdjacentHTML('beforeend', template);
		safety += 1;
	}
}

function syncDuplicateHalf(primary: HTMLElement, duplicate: HTMLElement): void {
	duplicate.innerHTML = primary.innerHTML;
	duplicate.setAttribute('aria-hidden', 'true');
}

function syncLoopWidth(inner: HTMLElement, primary: HTMLElement): void {
	const loopWidth = primary.offsetWidth || primary.getBoundingClientRect().width;

	if (loopWidth > 0) {
		inner.style.setProperty(LOOP_WIDTH_PROPERTY, `${loopWidth}px`);
	}
}

/**
 * Expand marquee halves to fill the track, then sync the duplicate half for seamless CSS loop.
 */
export function fillScrollingPromotionMarquee(root: HTMLElement): void {
	const track = root.querySelector<HTMLElement>(TRACK_SELECTOR);
	const primary = root.querySelector<HTMLElement>(PRIMARY_HALF_SELECTOR);
	const duplicate = root.querySelector<HTMLElement>(DUPLICATE_HALF_SELECTOR);
	const inner = track?.querySelector<HTMLElement>('.nextora-scrolling-promotion__inner');

	if (!track || !primary || !duplicate || !inner) {
		return;
	}

	if (prefersReducedMotion()) {
		return;
	}

	const minWidth = Math.max(track.clientWidth, 1);
	fillHalf(primary, minWidth);
	syncDuplicateHalf(primary, duplicate);
	syncLoopWidth(inner, primary);
}

/**
 * Idempotent init for one marquee root (front end or editor animation preview).
 */
export async function initScrollingPromotionMarquee(root: HTMLElement): Promise<void> {
	if (root.dataset.nextoraMarqueeReady === '1') {
		return;
	}

	await whenImagesReady(root);
	if (typeof document !== 'undefined' && document.fonts?.ready) {
		await document.fonts.ready;
	}
	fillScrollingPromotionMarquee(root);
	root.dataset.nextoraMarqueeReady = '1';
	root.classList.add('nextora-scrolling-promotion--ready');
}
