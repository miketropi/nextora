/**
 * Count-up animation for `nextora/counters` (front end).
 */
const ROOT_SELECTOR =
	'.wp-block-nextora-counters[data-nextora-counters-count-up="1"]:not([data-nextora-counters-count-init="1"])';

type EasingName = 'linear' | 'easeOutCubic' | 'easeOutExpo';

const EASINGS: Record<EasingName, (t: number) => number> = {
	linear: (t) => t,
	easeOutCubic: (t) => 1 - (1 - t) ** 3,
	easeOutExpo: (t) => (t === 1 ? 1 : 1 - 2 ** (-10 * t)),
};

function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
	);
}

function formatValue(value: number, target: number): string {
	return Number.isInteger(target) ? String(Math.round(value)) : value.toFixed(1);
}

function animateCounter(
	el: HTMLElement,
	duration: number,
	easing: EasingName,
): void {
	const target = parseFloat(el.dataset.nextoraCountersValue ?? '') || 0;
	const suffix = el.dataset.nextoraCountersSuffix ?? '';
	const prefix = el.dataset.nextoraCountersPrefix ?? '';
	const easeFn = EASINGS[easing] ?? EASINGS.easeOutCubic;
	const start = performance.now();

	const tick = (now: number): void => {
		const progress = Math.min((now - start) / duration, 1);
		const current = easeFn(progress) * target;
		el.textContent = prefix + formatValue(current, target) + suffix;
		if (progress < 1) {
			requestAnimationFrame(tick);
		}
	};

	requestAnimationFrame(tick);
}

function runCountUp(wrapper: HTMLElement): void {
	if (prefersReducedMotion()) {
		wrapper.setAttribute('data-nextora-counters-count-init', '1');
		wrapper.classList.add('nextora-counters--ready');
		return;
	}

	const duration = parseInt(wrapper.dataset.nextoraCountersDuration ?? '2000', 10) || 2000;
	const easingRaw = wrapper.dataset.nextoraCountersEasing ?? 'easeOutCubic';
	const easing: EasingName =
		easingRaw in EASINGS ? (easingRaw as EasingName) : 'easeOutCubic';

	wrapper.querySelectorAll<HTMLElement>('.nextora-counters__number[data-nextora-counters-value]').forEach(
		(el) => {
			animateCounter(el, duration, easing);
		},
	);

	wrapper.setAttribute('data-nextora-counters-count-init', '1');
	wrapper.classList.add('nextora-counters--ready');
}

function initRoot(wrapper: HTMLElement): void {
	if (wrapper.getAttribute('data-nextora-counters-count-init') === '1') {
		return;
	}

	if (prefersReducedMotion()) {
		wrapper.setAttribute('data-nextora-counters-count-init', '1');
		wrapper.classList.add('nextora-counters--ready');
		return;
	}

	const observer = new IntersectionObserver(
		(entries, obs) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				}
				runCountUp(wrapper);
				obs.unobserve(entry.target);
			});
		},
		{ threshold: 0.3 },
	);

	observer.observe(wrapper);
}

function initAll(): void {
	document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach(initRoot);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initAll);
} else {
	initAll();
}
