import { useRef, useState } from '@wordpress/element';
import { __, _n, sprintf } from '@wordpress/i18n';
import { Search, X } from 'lucide';
import type { IconNode } from 'lucide';
import { formatDuration, searchIndex, totalDuration } from '../lib/videos';
import type { PlayableVideo } from '../lib/videos';
import { LucideIcon } from './icons';

interface PlaylistProps {
	videos: PlayableVideo[];
	durations: Record<string, number>;
	currentId: string | null;
	onSelect: (id: string) => void;
}

export default function Playlist({
	videos,
	durations,
	currentId,
	onSelect,
}: PlaylistProps): JSX.Element {
	const [query, setQuery] = useState('');
	const inputRef = useRef<HTMLInputElement | null>(null);

	const needle = query.trim().toLowerCase();
	const visible = needle ? videos.filter((video) => searchIndex(video).includes(needle)) : videos;
	const total = totalDuration(durations, videos);
	const totalLabel = total === null ? '' : formatDuration(total);

	const lessonCount = sprintf(
		/* translators: %d: number of lessons. */
		_n('%d lesson', '%d lessons', videos.length, 'nextora'),
		videos.length,
	);

	return (
		<div className="nextora-overview-playlist-col">
			<div className="nextora-overview-playlist-head">
				<span className="nextora-overview-playlist-head__heading">
					{__('Course outline', 'nextora')}
				</span>
				<span className="nextora-overview-playlist-head__label">{lessonCount}</span>
				<span className="nextora-overview-playlist-head__total">
					{totalLabel
						? sprintf(
								/* translators: %s: total runtime, for example 12:30. */
								__('%s total', 'nextora'),
								totalLabel,
							)
						: ''}
				</span>
			</div>

			<div className="nextora-overview-playlist-search" role="search">
				<LucideIcon
					icon={Search as IconNode}
					size={14}
					className="nextora-overview-playlist-search__icon"
				/>
				<label
					className="nextora-overview-sr-only"
					htmlFor="nextora-overview-lesson-search"
				>
					{__('Search lessons', 'nextora')}
				</label>
				<input
					id="nextora-overview-lesson-search"
					ref={inputRef}
					className="nextora-overview-playlist-search__input"
					type="search"
					autoComplete="off"
					placeholder={__('Search lessons', 'nextora')}
					value={query}
					onChange={(event) => setQuery(event.target.value)}
				/>
				{query && (
					<button
						type="button"
						className="nextora-overview-playlist-search__clear"
						aria-label={__('Clear lesson search', 'nextora')}
						onClick={() => {
							setQuery('');
							inputRef.current?.focus();
						}}
					>
						<LucideIcon icon={X as IconNode} size={14} />
					</button>
				)}
			</div>

			<ol className="nextora-overview-playlist">
				{visible.map((video) => {
					const duration = formatDuration(durations[video.url]);
					const selected = video.id === currentId;

					return (
						<li key={video.id}>
							<button
								type="button"
								className="nextora-overview-lesson"
								aria-current={selected ? 'true' : undefined}
								onClick={() => onSelect(video.id)}
							>
								<span className="nextora-overview-lesson__index">
									{videos.indexOf(video) + 1}
								</span>
								<span className="nextora-overview-lesson__body">
									<span className="nextora-overview-lesson__head">
										<span className="nextora-overview-lesson__title">
											{video.title}
										</span>
										{duration && (
											<span className="nextora-overview-lesson__time">
												{duration}
											</span>
										)}
									</span>
									{video.description && (
										<span className="nextora-overview-lesson__desc">
											{video.description}
										</span>
									)}
									{video.sourceLabel && (
										<span className="nextora-overview-lesson__source">
											{video.sourceLabel}
										</span>
									)}
								</span>
							</button>
						</li>
					);
				})}
			</ol>

			{visible.length === 0 && videos.length > 0 && (
				<p className="nextora-overview-playlist__no-results" role="status">
					{__('No lessons match your search.', 'nextora')}
				</p>
			)}
		</div>
	);
}
