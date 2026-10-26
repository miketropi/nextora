import { useEffect, useMemo, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { AlertTriangle, Mail } from 'lucide';
import type { IconNode } from 'lucide';
import { useVideoDurations } from '../hooks/useVideoDurations';
import { formatDuration, toSafeMediaUrl } from '../lib/videos';
import type { PlayableVideo } from '../lib/videos';
import Playlist from './Playlist';
import { ClockIcon, LucideIcon } from './icons';

const PLAYLIST_VISIBILITY_KEY = 'nextora-overview-playlist-visible';

interface VideoWorkspaceProps {
	videos: PlayableVideo[];
	isActive: boolean;
}

function readStoredVisibility(): boolean {
	try {
		return window.localStorage.getItem(PLAYLIST_VISIBILITY_KEY) !== 'false';
	} catch {
		return true;
	}
}

function SupportNotice(): JSX.Element {
	return (
		<p className="nextora-overview-guide-support">
			<LucideIcon icon={Mail as IconNode} size={16} />
			<span>
				{__('If you have any questions, please contact us via email at', 'nextora')}{' '}
				<a href="mailto:admin@beplusthemes.com">admin@beplusthemes.com</a>.
			</span>
		</p>
	);
}

export default function VideoWorkspace({ videos, isActive }: VideoWorkspaceProps): JSX.Element {
	const [currentId, setCurrentId] = useState<string | null>(null);
	const [playlistVisible, setPlaylistVisible] = useState<boolean>(readStoredVisibility);
	const [mediaFailed, setMediaFailed] = useState(false);
	const videoRef = useRef<HTMLVideoElement | null>(null);

	const durations = useVideoDurations(
		videos.filter((video) => !video.embedUrl).map((video) => video.url),
	);

	const current = videos.find((video) => video.id === currentId) ?? videos[0] ?? null;
	// A lesson plays either as a hosted embed or as a media file, never both.
	const activeSource = isActive && current && !current.embedUrl ? current.url : '';
	const activeEmbedUrl = isActive && current ? current.embedUrl : '';
	const currentDuration = current ? formatDuration(durations[current.url]) : '';

	// Keep the selection on a lesson that still exists after filtering changes.
	useEffect(() => {
		if (videos.length === 0) {
			setCurrentId(null);
			return;
		}

		if (!videos.some((video) => video.id === currentId)) {
			setCurrentId(videos[0].id);
		}
	}, [videos, currentId]);

	// Load only while the panel is visible, and restart at the beginning.
	useEffect(() => {
		const element = videoRef.current;

		if (!activeSource) {
			// Hosted embeds and hidden panels have no media element to load.
			setMediaFailed(false);

			if (element?.getAttribute('src')) {
				element.pause();
				element.removeAttribute('src');
				element.load();
			}

			return;
		}

		if (!element) {
			return;
		}

		element.pause();

		if (element.getAttribute('src') !== activeSource) {
			element.setAttribute('src', activeSource);
			element.load();
		}

		try {
			element.currentTime = 0;
		} catch {
			// Metadata is not ready yet; playback still starts at the beginning.
		}

		setMediaFailed(false);
	}, [activeSource]);

	const togglePlaylist = (): void => {
		setPlaylistVisible((visible) => {
			const next = !visible;

			try {
				window.localStorage.setItem(PLAYLIST_VISIBILITY_KEY, next ? 'true' : 'false');
			} catch {
				// Storage is unavailable; the toggle still works for this view.
			}

			return next;
		});
	};

	const errorLink = current ? toSafeMediaUrl(current.url) : '';

	const heading = (
		<>
			<h2 className="nextora-overview-section-title">
				{__('Build your first site', 'nextora')}
			</h2>
			<p className="nextora-overview-section-hint">
				{__('Follow the lessons in order, or choose the topic you need.', 'nextora')}
			</p>
		</>
	);

	if (videos.length === 0) {
		return (
			<>
				{heading}
				<p className="nextora-overview-empty">
					{__('No getting-started videos are available yet.', 'nextora')}
				</p>
				<SupportNotice />
			</>
		);
	}

	return (
		<>
			{heading}

			<div
				className={`nextora-overview-videos${playlistVisible ? '' : ' is-playlist-hidden'}`}
			>
				<div className="nextora-overview-player">
					<div className="nextora-overview-player__toolbar">
						<button
							type="button"
							className="nextora-overview-playlist-toggle"
							aria-controls="nextora-overview-playlist"
							aria-expanded={playlistVisible}
							onClick={togglePlaylist}
						>
							{playlistVisible
								? __('Hide lessons', 'nextora')
								: __('Show lessons', 'nextora')}
						</button>
					</div>

					<div className="nextora-overview-player__frame">
						{current?.embedUrl ? (
							<iframe
								key={current.id}
								src={activeEmbedUrl || undefined}
								title={current.title}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
								referrerPolicy="strict-origin-when-cross-origin"
							/>
						) : (
							<video
								ref={videoRef}
								controls
								playsInline
								preload="metadata"
								onError={() => setMediaFailed(true)}
								onLoadedMetadata={() => setMediaFailed(false)}
							/>
						)}
					</div>

					{current && (
						<div className="nextora-overview-player__details">
							<span className="nextora-overview-player__eyebrow">
								{__('Now watching', 'nextora')}
							</span>
							<h3 className="nextora-overview-player__title">{current.title}</h3>
							{current.description && (
								<p className="nextora-overview-player__desc">
									{current.description}
								</p>
							)}
							{currentDuration && (
								<p className="nextora-overview-player__meta">
									<ClockIcon size={14} />
									<span>{currentDuration}</span>
								</p>
							)}
						</div>
					)}

					{mediaFailed && !current?.embedUrl && (
						<p className="nextora-overview-media-error" role="alert">
							<LucideIcon icon={AlertTriangle as IconNode} size={14} />
							<span>{__('This video could not be loaded.', 'nextora')}</span>
							{errorLink && (
								<a href={errorLink} target="_blank" rel="noopener noreferrer">
									{__('Open video', 'nextora')}
								</a>
							)}
						</p>
					)}
				</div>

				<div
					className="nextora-overview-playlist-wrap"
					id="nextora-overview-playlist"
				>
					<Playlist
						videos={videos}
						durations={durations}
						currentId={current ? current.id : null}
						onSelect={setCurrentId}
					/>
				</div>
			</div>

			<SupportNotice />
		</>
	);
}
