import { useEffect, useRef } from '@wordpress/element';
import type { MarkerItem } from './types';

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
	};
}

function getGoogleMaps(): GoogleMapsGlobal | undefined {
	return (window as Window & { google?: GoogleMapsGlobal }).google;
}

interface ApiMapPreviewProps {
	apiKey: string;
	lat: number;
	lng: number;
	zoom: number;
	showControls: boolean;
	markers: MarkerItem[];
	mapStyleJson: string;
	title: string;
}

function parseStyles(raw: string): unknown[] {
	if (raw.trim() === '') {
		return [];
	}
	try {
		const parsed = JSON.parse(raw) as unknown;
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}

function loadGoogleMapsScript(apiKey: string): Promise<void> {
	return new Promise((resolve, reject) => {
		if (getGoogleMaps()?.maps) {
			resolve();
			return;
		}

		const handle = `nextora-google-maps-editor-${apiKey.slice(0, 8)}`;
		const existing = document.getElementById(handle) as HTMLScriptElement | null;
		if (existing) {
			existing.addEventListener('load', () => resolve(), { once: true });
			existing.addEventListener('error', () => reject(), { once: true });
			return;
		}

		const script = document.createElement('script');
		script.id = handle;
		script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}&loading=async`;
		script.async = true;
		script.onload = () => resolve();
		script.onerror = () => reject();
		document.head.appendChild(script);
	});
}

export default function ApiMapPreview({
	apiKey,
	lat,
	lng,
	zoom,
	showControls,
	markers,
	mapStyleJson,
	title,
}: ApiMapPreviewProps) {
	const canvasRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const trimmedKey = apiKey.trim();
		if (!canvas || trimmedKey === '') {
			return undefined;
		}

		let cancelled = false;

		loadGoogleMapsScript(trimmedKey)
			.then(() => {
				if (cancelled || !canvasRef.current) {
					return;
				}

				const googleMaps = getGoogleMaps()?.maps;
				if (!googleMaps) {
					return;
				}
				const styles = parseStyles(mapStyleJson);

				const map = new googleMaps.Map(canvasRef.current, {
					center: { lat, lng },
					zoom,
					disableDefaultUI: !showControls,
					zoomControl: showControls,
					streetViewControl: showControls,
					styles,
				});

				markers.forEach((markerData) => {
					const marker = new googleMaps.Marker({
						position: { lat: markerData.lat, lng: markerData.lng },
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
			})
			.catch(() => {
				// Preview fails silently; inspector notice covers missing/invalid keys.
			});

		return () => {
			cancelled = true;
		};
	}, [apiKey, lat, lng, zoom, showControls, markers, mapStyleJson]);

	return (
		<div
			ref={canvasRef}
			className="nextora-google-maps__canvas nextora-google-maps__canvas--editor"
			role="img"
			aria-label={title}
		/>
	);
}
