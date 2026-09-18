const ROOT_SELECTOR = '.wp-block-nextora-vertical-showcase';
const INITED_ATTRIBUTE = 'data-nextora-vs-inited';
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)');

function initScrollReveal(root: HTMLElement): void {
	if (root.getAttribute('data-nextora-scroll-reveal') !== '1' || root.classList.contains('is-visible')) return;
	if (REDUCED_MOTION.matches || !('IntersectionObserver' in window)) {
		root.classList.add('is-visible');
		return;
	}
	const observer = new IntersectionObserver((entries) => {
		if (entries.some((entry) => entry.isIntersecting)) {
			root.classList.add('is-visible');
			observer.disconnect();
		}
	}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
	observer.observe(root);
}

function initRoot(root: HTMLElement): void {
	if (root.hasAttribute(INITED_ATTRIBUTE)) return;
	root.setAttribute(INITED_ATTRIBUTE, '1');
	root.classList.add('nextora-vertical-showcase--loading');
	initScrollReveal(root);

	const items = Array.from(root.querySelectorAll<HTMLElement>('[data-nextora-vs-index]'));
	const images = Array.from(root.querySelectorAll<HTMLElement>('[data-nextora-vs-image]'));
	const details = Array.from(root.querySelectorAll<HTMLElement>('[data-nextora-vs-detail]'));
	const prev = root.querySelector<HTMLButtonElement>('.nextora-vertical-showcase__arrow--prev');
	const next = root.querySelector<HTMLButtonElement>('.nextora-vertical-showcase__arrow--next');
	const gallery = root.querySelector<HTMLElement>('.nextora-vertical-showcase__gallery');
	if (items.length === 0) { root.classList.replace('nextora-vertical-showcase--loading', 'nextora-vertical-showcase--ready'); return; }

	let activeIndex = 0;
	let timer: number | null = null;
	let paused = false;
	const duration = Number(root.getAttribute('data-nextora-vs-autoplay') || 0);

	const stop = () => { if (timer !== null) { window.clearInterval(timer); timer = null; } };
	const start = () => {
		stop();
		if (duration > 0 && !REDUCED_MOTION.matches && !paused && items.length > 1) timer = window.setInterval(() => setActive(activeIndex + 1, 1), duration);
	};
	function setActive(index: number, direction: 1 | -1): void {
		activeIndex = (index + items.length) % items.length;
		items.forEach((item, itemIndex) => {
			const active = itemIndex === activeIndex;
			item.classList.remove('nextora-vertical-showcase__item--active');
			item.setAttribute('aria-selected', active ? 'true' : 'false');
			item.style.setProperty('--nextora-vs-direction', String(direction));
		});
		images.forEach((image, imageIndex) => {
			const active = imageIndex === activeIndex;
			image.classList.remove('nextora-vertical-showcase__image-layer--active');
			image.classList.toggle('nextora-vertical-showcase__image-layer--active', active);
			image.setAttribute('aria-hidden', active ? 'false' : 'true');
			image.style.setProperty('--nextora-vs-direction', String(direction));
		});
		details.forEach((detail) => {
			const active = Number(detail.dataset.nextoraVsDetail || -1) === activeIndex;
			detail.classList.toggle('nextora-vertical-showcase__detail-panel--active', active);
			detail.setAttribute('aria-hidden', active ? 'false' : 'true');
		});
		// Force a fresh progress animation whenever the active row changes, including the first paint.
		const activeItem = items[activeIndex];
		if (activeItem) void activeItem.offsetWidth;
		if (activeItem) activeItem.classList.add('nextora-vertical-showcase__item--active');
		start();
	}
	const pause = () => { paused = true; stop(); root.classList.add('nextora-vertical-showcase--paused'); };
	const resume = () => { paused = false; root.classList.remove('nextora-vertical-showcase--paused'); start(); };

	items.forEach((item) => item.addEventListener('click', () => setActive(Number(item.dataset.nextoraVsIndex || 0), Number(item.dataset.nextoraVsIndex || 0) >= activeIndex ? 1 : -1)));
	prev?.addEventListener('click', () => setActive(activeIndex - 1, -1));
	next?.addEventListener('click', () => setActive(activeIndex + 1, 1));
	gallery?.addEventListener('mouseenter', pause);
	gallery?.addEventListener('mouseleave', resume);
	gallery?.addEventListener('focusin', pause);
	gallery?.addEventListener('focusout', (event) => { if (!gallery.contains(event.relatedTarget as Node | null)) resume(); });
	setActive(0, 1);
	root.classList.replace('nextora-vertical-showcase--loading', 'nextora-vertical-showcase--ready');
}

function initAll(): void { document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach(initRoot); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAll, { once: true }); else initAll();
window.addEventListener('nextora-vertical-showcase-reinit', initAll);
