import type { OverviewVideo } from '../types';

/**
 * A lesson that is safe to render and play.
 */
export interface PlayableVideo {
	id: string;
	title: string;
	description: string;
	url: string;
	/** Player URL for hosted videos (YouTube); empty for direct media files. */
	embedUrl: string;
	thumbnail: string;
	sourceLabel: string;
}

const SAFE_PROTOCOLS = ['http:', 'https:'];

const YOUTUBE_ID_PATTERN = /^[A-Za-z0-9_-]{11}$/;
const YOUTUBE_PATH_PREFIXES = ['/embed/', '/shorts/', '/live/'];

/**
 * Resolve a media URL, rejecting anything that is not http(s).
 *
 * Keeps extension-supplied values from reaching `src` attributes or links
 * with schemes such as `javascript:`.
 *
 * @param value Raw value from the REST payload.
 * @return Absolute http(s) URL, or an empty string when unusable.
 */
export function toSafeMediaUrl(value: unknown): string {
	if (typeof value !== 'string') {
		return '';
	}

	const raw = value.trim();
	if (!raw) {
		return '';
	}

	try {
		const resolved = new URL(raw, window.location.href);
		return SAFE_PROTOCOLS.includes(resolved.protocol) ? resolved.href : '';
	} catch {
		return '';
	}
}

function readString(value: unknown): string {
	return typeof value === 'string' ? value.trim() : '';
}

/**
 * Resolve a lesson URL to a privacy-friendly YouTube embed URL.
 *
 * Only the 11-character video id survives, so a lesson URL can never place
 * arbitrary markup in the player `src`. Hosted lessons are embedded because
 * YouTube serves no media file the `<video>` element could play.
 *
 * @param value Raw lesson URL from the REST payload.
 * @return youtube-nocookie embed URL, or an empty string for non-YouTube URLs.
 */
export function toYouTubeEmbedUrl(value: unknown): string {
	const url = toSafeMediaUrl(value);

	if (!url) {
		return '';
	}

	const parsed = new URL(url);
	const host = parsed.hostname.toLowerCase();

	if (host !== 'youtube.com' && host !== 'youtu.be' && !host.endsWith('.youtube.com')) {
		return '';
	}

	let id = '';

	if (host === 'youtu.be') {
		id = parsed.pathname.slice(1).split('/')[0];
	} else if (parsed.pathname === '/watch') {
		id = parsed.searchParams.get('v') ?? '';
	} else {
		const prefix = YOUTUBE_PATH_PREFIXES.find((candidate) => parsed.pathname.startsWith(candidate));
		id = prefix ? parsed.pathname.slice(prefix.length).split('/')[0] : '';
	}

	return YOUTUBE_ID_PATTERN.test(id) ? `https://www.youtube-nocookie.com/embed/${id}` : '';
}

/**
 * Normalize extension-supplied lesson records into playable lessons.
 *
 * Entries without an id, a title, or a safe media URL are dropped so the
 * playlist never renders a row that cannot play. Order is preserved.
 *
 * @param videos Raw records from the REST payload.
 * @return Playable lessons in display order.
 */
export function normalizeVideos(videos: OverviewVideo[] | undefined): PlayableVideo[] {
	if (!Array.isArray(videos)) {
		return [];
	}

	const lessons: PlayableVideo[] = [];

	videos.forEach((video) => {
		if (!video || typeof video !== 'object') {
			return;
		}

		const id = readString(video.id);
		const title = readString(video.title);
		const url = toSafeMediaUrl(video.url);

		if (!id || !title || !url) {
			return;
		}

		lessons.push({
			id,
			title,
			description: readString(video.description),
			url,
			embedUrl: toYouTubeEmbedUrl(url),
			thumbnail: toSafeMediaUrl(video.thumbnail),
			sourceLabel: readString(video.sourceLabel),
		});
	});

	return lessons;
}

/**
 * Format a duration as `m:ss`, or `h:mm:ss` past an hour.
 *
 * @param seconds Duration in seconds.
 * @return Formatted duration, or an empty string when unknown.
 */
export function formatDuration(seconds: number | undefined): string {
	if (typeof seconds !== 'number' || !Number.isFinite(seconds) || seconds <= 0) {
		return '';
	}

	const total = Math.round(seconds);
	const hours = Math.floor(total / 3600);
	const minutes = Math.floor((total % 3600) / 60);
	const remainder = total % 60;
	const pad = (value: number): string => (value < 10 ? `0${value}` : String(value));

	if (hours > 0) {
		return `${hours}:${pad(minutes)}:${pad(remainder)}`;
	}

	return `${minutes}:${pad(remainder)}`;
}

/**
 * Total length of every lesson, or `null` while any length is unknown.
 *
 * @param durations Duration cache keyed by media URL.
 * @param videos    Lessons to total.
 * @return Total seconds, or null when incomplete.
 */
export function totalDuration(
	durations: Record<string, number>,
	videos: PlayableVideo[],
): number | null {
	if (videos.length === 0) {
		return null;
	}

	let total = 0;

	for (const video of videos) {
		const seconds = durations[video.url];
		if (typeof seconds !== 'number' || !Number.isFinite(seconds) || seconds <= 0) {
			return null;
		}
		total += seconds;
	}

	return total;
}

/**
 * Build the search index for a lesson.
 *
 * @param video Lesson record.
 * @return Lowercase haystack.
 */
export function searchIndex(video: PlayableVideo): string {
	return [video.title, video.description, video.sourceLabel].filter(Boolean).join(' ').toLowerCase();
}
