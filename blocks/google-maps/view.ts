/**
 * Google Maps — API mode init + scroll reveal for `nextora/google-maps`.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

declare global {
	interface Window {
		nextoraInitGoogleMaps?: () => void;
		google?: GoogleMapsGlobal;
	}
}

interface GoogleMarker {
	addListener?: (event: string, handler: () => void) => void;
}

interface GoogleMap {
	// Opaque map instance.
}

interface GoogleMapsGlobal {
	maps: {
		Map: new (element: HTMLElement, options: Record<string, unknown>) => GoogleMap;
		Marker: new (options: Record<string, unknown>) => GoogleMarker;
		InfoWindow: new (options: { content: string }) => {
			open: (options: { anchor: GoogleMarker; map: GoogleMap }) => void;
		};
		DirectionsService: new () => {
			route: (
				request: Record<string, unknown>,
				callback: (result: unknown, status: string) => void,
			) => void;
		};
		DirectionsRenderer: new () => {
			setMap: (map: GoogleMap) => void;
			setDirections: (result: unknown) => void;
		};
		TravelMode: {
			DRIVING: string;
		};
	};
}

const ROOT_SELECTOR = '[data-nextora-google-maps="1"]:not([data-nextora-google-maps-inited="1"])';
const SCROLL_INIT = 'data-nextora-google-maps-scroll-init';

interface MarkerData {
	id?: string;
	lat: number;
	lng: number;
	title?: string;
	infoHtml?: string;
	iconUrl?: string;
}

function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' &&
		window.matchMedia?.('(prefers-reduced-motion: reduce)').matches === true
	);
}

function parseMarkers(raw: string | undefined): MarkerData[] {
	if (!raw) {
		return [];
	}
	try {
		const parsed = JSON.parse(raw) as unknown;
		return Array.isArray(parsed) ? (parsed as MarkerData[]) : [];
	} catch {
		return [];
	}
}

function parseStyles(raw: string | undefined): unknown[] {
	if (!raw || raw.trim() === '') {
		return [];
	}
	try {
		const parsed = JSON.parse(raw) as unknown;
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}

function showFallback(root: HTMLElement, message: string): void {
	root.classList.remove('nextora-google-maps--loading');
	root.classList.add('nextora-google-maps--error', 'nextora-google-maps--ready');

	let fallback = root.querySelector<HTMLElement>('.nextora-google-maps__fallback');
	if (!fallback) {
		fallback = document.createElement('p');
		fallback.className = 'nextora-google-maps__fallback';
		root.appendChild(fallback);
	}
	fallback.textContent = message;
}

function initScrollReveal(root: HTMLElement): void {
	if (root.getAttribute(SCROLL_INIT) === '1') {
		return;
	}
	if (root.getAttribute('data-nextora-scroll-reveal') !== '1') {
		return;
	}
	if (prefersReducedMotion()) {
		return;
	}

	root.setAttribute(SCROLL_INIT, '1');
	gsap.fromTo(
		root,
		{ opacity: 0, y: 28 },
		{
			opacity: 1,
			y: 0,
			duration: 0.95,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: root,
				start: 'top 88%',
				once: true,
			},
		},
	);
}

function initApiMap(root: HTMLElement): void {
	const canvas = root.querySelector<HTMLElement>('.nextora-google-maps__canvas');
	if (!canvas) {
		return;
	}

	const googleMaps = window.google?.maps;
	if (!googleMaps) {
		const errorMessage =
			root.getAttribute('data-nextora-google-maps-error') ||
			'Unable to load the map.';
		showFallback(root, errorMessage);
		root.setAttribute('data-nextora-google-maps-inited', '1');
		return;
	}

	const lat = parseFloat(root.getAttribute('data-nextora-google-maps-lat') || '0');
	const lng = parseFloat(root.getAttribute('data-nextora-google-maps-lng') || '0');
	const zoom = parseInt(root.getAttribute('data-nextora-google-maps-zoom') || '15', 10);
	const showControls = root.getAttribute('data-nextora-google-maps-show-controls') !== 'false';
	const markers = parseMarkers(root.getAttribute('data-nextora-google-maps-markers') || '[]');
	const styles = parseStyles(root.getAttribute('data-nextora-google-maps-style') || '');
	const showDirections = root.getAttribute('data-nextora-google-maps-show-directions') === 'true';

	const map = new googleMaps.Map(canvas, {
		center: { lat, lng },
		zoom,
		disableDefaultUI: !showControls,
		zoomControl: showControls,
		streetViewControl: showControls,
		styles,
	});

	markers.forEach((markerData) => {
		const markerLat = typeof markerData.lat === 'number' ? markerData.lat : parseFloat(String(markerData.lat));
		const markerLng = typeof markerData.lng === 'number' ? markerData.lng : parseFloat(String(markerData.lng));
		if (Number.isNaN(markerLat) || Number.isNaN(markerLng)) {
			return;
		}

		const marker = new googleMaps.Marker({
			position: { lat: markerLat, lng: markerLng },
			map,
			title: markerData.title || '',
			icon: markerData.iconUrl ? markerData.iconUrl : undefined,
		});

		if (markerData.infoHtml) {
			const infoWindow = new googleMaps.InfoWindow({
				content: markerData.infoHtml,
			});
			marker.addListener?.('click', () => {
				infoWindow.open({ anchor: marker, map });
			});
		}
	});

	if (showDirections && markers.length >= 2) {
		const origin = markers[0];
		const destination = markers[markers.length - 1];
		const directionsService = new googleMaps.DirectionsService();
		const directionsRenderer = new googleMaps.DirectionsRenderer();
		directionsRenderer.setMap(map);
		directionsService.route(
			{
				origin: { lat: origin.lat, lng: origin.lng },
				destination: { lat: destination.lat, lng: destination.lng },
				travelMode: googleMaps.TravelMode.DRIVING,
			},
			(result, status) => {
				if (status === 'OK') {
					directionsRenderer.setDirections(result);
				}
			},
		);
	}

	root.classList.remove('nextora-google-maps--loading');
	root.classList.add('nextora-google-maps--ready');
	root.setAttribute('data-nextora-google-maps-inited', '1');
}

function initGoogleMapsRoot(root: HTMLElement): void {
	initScrollReveal(root);

	const mode = root.getAttribute('data-nextora-google-maps-mode') || 'iframe';
	if (mode !== 'api') {
		root.classList.remove('nextora-google-maps--loading');
		root.classList.add('nextora-google-maps--ready');
		return;
	}

	if (root.getAttribute('data-nextora-google-maps-inited') === '1') {
		return;
	}

	initApiMap(root);
}

function initPendingRoots(): void {
	document.querySelectorAll<HTMLElement>(ROOT_SELECTOR).forEach((root) => {
		const mode = root.getAttribute('data-nextora-google-maps-mode') || 'iframe';
		if (mode === 'api') {
			initGoogleMapsRoot(root);
		} else {
			initScrollReveal(root);
			root.classList.remove('nextora-google-maps--loading');
			root.classList.add('nextora-google-maps--ready');
		}
	});
}

function boot(): void {
	initPendingRoots();
	ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load' });
	ScrollTrigger.refresh();
}

window.nextoraInitGoogleMaps = () => {
	initPendingRoots();
	ScrollTrigger.refresh();
};

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
	boot();
}

window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });

export {};
