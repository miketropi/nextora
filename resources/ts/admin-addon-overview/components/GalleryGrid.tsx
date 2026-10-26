import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { Play } from 'lucide';
import type { IconNode } from 'lucide';
import type { GalleryItem } from '../types';
import { toSafeMediaUrl } from '../lib/videos';
import { LucideIcon } from './icons';
import { Lightbox } from './Lightbox';

interface GalleryGridProps {
	items: GalleryItem[];
	title?: string;
}

interface GalleryCardProps {
	item: GalleryItem;
	onOpen: () => void;
}

function GalleryCard({ item, onOpen }: GalleryCardProps): JSX.Element {
	const [failed, setFailed] = useState(false);
	const source = toSafeMediaUrl(item.thumbnail) || (item.type === 'image' ? toSafeMediaUrl(item.url) : '');

	return (
		<button
			type="button"
			className="nextora-overview-card"
			onClick={onOpen}
			aria-label={`${item.title} — ${__('Open preview', 'nextora')}`}
		>
			<span className="nextora-overview-card__frame">
				{source && !failed ? (
					<img
						src={source}
						alt=""
						className="nextora-overview-card__img"
						loading="lazy"
						decoding="async"
						onError={() => setFailed(true)}
					/>
				) : (
					<span className="nextora-overview-card__failed">
						<span className="nextora-overview-card__failed-title">{item.title}</span>
						<span className="nextora-overview-card__failed-text">
							{__('Preview unavailable', 'nextora')}
						</span>
					</span>
				)}
				{item.type === 'video' && (
					<span className="nextora-overview-card__badge" aria-hidden="true">
						<LucideIcon icon={Play as IconNode} size={14} />
					</span>
				)}
			</span>
			<span className="nextora-overview-card__info">
				<span className="nextora-overview-card__title">{item.title}</span>
				{item.description && (
					<span className="nextora-overview-card__desc">{item.description}</span>
				)}
			</span>
		</button>
	);
}

export default function GalleryGrid({ items, title }: GalleryGridProps): JSX.Element | null {
	const [activeId, setActiveId] = useState<string | null>(null);
	const activeItem = items.find((item) => item.id === activeId) ?? null;

	if (items.length === 0) {
		return null;
	}

	return (
		<>
			<h2 className="nextora-overview-section-title nextora-overview-section-title--spaced">
				{title || __('Showcase', 'nextora')}
			</h2>
			<div className="nextora-overview-gallery">
				{items.map((item) => (
					<GalleryCard key={item.id} item={item} onOpen={() => setActiveId(item.id)} />
				))}
			</div>

			<Lightbox item={activeItem} onClose={() => setActiveId(null)} />
		</>
	);
}
