import type { OverviewVideo } from '../types';

/**
 * A lesson that is safe to render and play.
 */
export interface PlayableVideo {
	id: string;
	title: string;
	description: string;
	url: string;
	thumbnail: string;
	sourceLabel: string;
}

const SAFE_PROTOCOLS = ['http:', 'https:'];

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
