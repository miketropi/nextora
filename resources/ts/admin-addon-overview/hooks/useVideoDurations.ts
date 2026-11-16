import { useEffect, useState } from '@wordpress/element';

/**
 * Read the real duration of each media URL from its metadata.
 *
 * Durations come from the media itself — the theme never hard-codes lesson
 * lengths. A URL whose metadata cannot be read maps to `0`, so callers can
 * tell "unknown" apart from "known". Probing is deduplicated per URL and
 * aborted when the URL list changes or the component unmounts.
 *
 * @param urls Media URLs to probe.
 * @return Duration in seconds keyed by URL.
 */
export function useVideoDurations(urls: string[]): Record<string, number> {
	const [durations, setDurations] = useState<Record<string, number>>({});
	const key = urls.join('|');

	useEffect(() => {
		const unique = Array.from(new Set(key ? key.split('|').filter(Boolean) : []));
		const probes = new Map<string, HTMLVideoElement>();
		let cancelled = false;

		const finish = (url: string, seconds: number): void => {
			if (cancelled) {
				return;
			}

			setDurations((previous) => (previous[url] === seconds ? previous : { ...previous, [url]: seconds }));
		};

		unique.forEach((url) => {
			const probe = document.createElement('video');
			probe.preload = 'metadata';
			probe.muted = true;

			probe.addEventListener('loadedmetadata', () => {
				const { duration } = probe;
				finish(url, Number.isFinite(duration) && duration > 0 ? duration : 0);
			});
			probe.addEventListener('error', () => finish(url, 0));

			probe.src = url;
			probe.load();
			probes.set(url, probe);
		});

		return () => {
			cancelled = true;
			probes.forEach((probe) => {
				probe.removeAttribute('src');
				probe.load();
			});
			probes.clear();
		};
	}, [key]);

	return durations;
}
