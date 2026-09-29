export {};

/**
 * Count-up animation for `nextora/counters` (front end).
 */
const ROOT_SELECTOR =
	'.wp-block-nextora-counters[data-nextora-counters-count-up="1"]';

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
	const rounded = Number.isInteger(target) ? Math.round(value) : value;
	return rounded.toLocaleString('en-US', {
		maximumFractionDigits: Number.isInteger(target) ? 0 : 1,
	});
}

function setFinalValue(el: HTMLElement): void {
	const target = Math.abs(parseFloat(el.dataset.nextoraCountersValue ?? '') || 0);
	const suffix = el.dataset.nextoraCountersSuffix ?? '';
	const prefix = el.dataset.nextoraCountersPrefix ?? '';
	el.textContent = prefix + formatValue(target, target) + suffix;
}

function isElementVisible(el: HTMLElement): boolean {
	if (!el.isConnected) {
		return false;
	}
	if (el.offsetWidth === 0 && el.offsetHeight === 0) {
		return false;
	}
	const rect = el.getBoundingClientRect();
	const windowHeight = window.innerHeight || document.documentElement.clientHeight;
	const windowWidth = window.innerWidth || document.documentElement.clientWidth;
	return (
		rect.bottom > 0 &&
		rect.right > 0 &&
		rect.top < windowHeight &&
		rect.left < windowWidth
	);
}

function animateCounter(
	el: HTMLElement,
	duration: number,
	easing: EasingName,
): void {
	const target = Math.abs(parseFloat(el.dataset.nextoraCountersValue ?? '') || 0);
	const suffix = el.dataset.nextoraCountersSuffix ?? '';
	const prefix = el.dataset.nextoraCountersPrefix ?? '';
	const easeFn = EASINGS[easing] ?? EASINGS.easeOutCubic;
	const start = performance.now();
	el.textContent = prefix + formatValue(0, target) + suffix;

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
		wrapper.querySelectorAll<HTMLElement>('.nextora-counters__number[data-nextora-counters-value]').forEach(setFinalValue);
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

function initRoot(wrapper: HTMLElement, force = false): void {
	if (!force && wrapper.getAttribute('data-nextora-counters-count-init') === '1') {
		return;
	}

	if (prefersReducedMotion()) {
		wrapper.querySelectorAll<HTMLElement>('.nextora-counters__number[data-nextora-counters-value]').forEach(setFinalValue);
		wrapper.setAttribute('data-nextora-counters-count-init', '1');
		wrapper.classList.add('nextora-counters--ready');
		return;
	}

	if (isElementVisible(wrapper)) {
		runCountUp(wrapper);
		return;
	}

	const observer = new IntersectionObserver(
		(entries, obs) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting || entry.intersectionRatio > 0) {
					runCountUp(wrapper);
					obs.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.05 },
	);

	observer.observe(wrapper);
}

function reinitAll(scope: ParentNode = document): void {
	scope.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach((wrapper) => {
		if (wrapper.closest('.nextora-primary-nav-portal')) {
			if (isElementVisible(wrapper)) {
				runCountUp(wrapper);
			} else {
				wrapper.removeAttribute('data-nextora-counters-count-init');
				initRoot(wrapper);
			}
		} else {
			if (wrapper.getAttribute('data-nextora-counters-count-init') !== '1') {
				initRoot(wrapper);
			}
		}
	});
}

function initAll(): void {
	document.querySelectorAll<HTMLElement>(
		'.wp-block-nextora-counters[data-nextora-counters-count-up="1"]:not([data-nextora-counters-count-init="1"])'
	).forEach((el) => initRoot(el));
}

// Global hooks
interface NextoraCountersGlobal {
	nextoraReinitCounters?: () => void;
	nextoraRunCounter?: (el: HTMLElement) => void;
}
(window as unknown as NextoraCountersGlobal).nextoraReinitCounters = () => reinitAll();
(window as unknown as NextoraCountersGlobal).nextoraRunCounter = runCountUp;

window.addEventListener('nextora-counters-reinit', () => {
	reinitAll();
});

// Staggered check on user interaction (opening accordions, switching tabs, clicking menu toggles)
document.addEventListener(
	'click',
	(e) => {
		const target = e.target instanceof Element ? e.target : null;
		if (!target) return;
		if (
			target.closest(
				'.beplus-vmn-toggle, .nextora-submenu-toggle, .beplus-vmn-tab-container__tab, [data-nextora-nav-toggle], [data-nextora-accordion-toggle]'
			)
		) {
			[50, 150, 300, 500].forEach((delay) => {
				window.setTimeout(() => {
					reinitAll();
				}, delay);
			});
		}
	},
	{ passive: true },
);

// Check on scroll (e.g. inside scrollable mobile drawer panel)
let scrollThrottle: number | null = null;
const onScrollCheck = () => {
	if (scrollThrottle !== null) return;
	scrollThrottle = window.setTimeout(() => {
		scrollThrottle = null;
		document.querySelectorAll<HTMLElement>(
			'.wp-block-nextora-counters[data-nextora-counters-count-up="1"]:not([data-nextora-counters-count-init="1"])'
		).forEach((el) => {
			if (isElementVisible(el)) {
				runCountUp(el);
			}
		});
	}, 120);
};
window.addEventListener('scroll', onScrollCheck, { passive: true });

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', initAll);
} else {
	initAll();
}

