/**
 * Build iframe embed URL (mirrors PHP `nextora_google_maps_build_iframe_src`).
 */
export function buildIframeSrc(
	address: string,
	lat: number,
	lng: number,
	zoom: number,
	apiKey: string,
	showControls: boolean,
): string {
	const query = address.trim() !== '' ? address.trim() : `${lat},${lng}`;

	if (apiKey.trim() !== '') {
		const params = new URLSearchParams({
			key: apiKey.trim(),
			q: query,
			zoom: String(zoom),
		});
		if (!showControls) {
			params.set('zoomControl', 'false');
			params.set('streetViewControl', 'false');
			params.set('maptypeControl', 'false');
			params.set('fullscreenControl', 'false');
		}
		return `https://www.google.com/maps/embed/v1/place?${params.toString()}`;
	}

	const params = new URLSearchParams({
		q: query,
		output: 'embed',
		z: String(zoom),
	});

	return `https://maps.google.com/maps?${params.toString()}`;
}
