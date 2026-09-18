import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import type { GalleryItem } from '../types';
import { Play } from 'lucide';
import type { IconNode } from 'lucide';
import { LucideIcon } from './icons';
import { Lightbox } from './Lightbox';

interface GalleryGridProps {
	items: GalleryItem[];
	title?: string;
}

function getPreviewUrl(item: GalleryItem): string | null {
	if (item.thumbnail) return item.thumbnail;
	if (item.type === 'image' && item.url) return item.url;
	return null;
}

function Thumbnail({ item }: { item: GalleryItem }): JSX.Element {
	const src = getPreviewUrl(item);

	if (src) {
		return (
			<img
				src={src}
				alt={item.title}
				className="nextora-overview-gallery__img"
				loading="lazy"
			/>
		);
	}

	return (
		<div className="nextora-overview-gallery__placeholder">
			{item.type === 'video' ? (
				<LucideIcon icon={Play as IconNode} size={28} />
			) : (
				<span className="nextora-overview-gallery__placeholder-text">{item.title.charAt(0)}</span>
			)}
		</div>
	);
}

export default function GalleryGrid({ items, title }: GalleryGridProps): JSX.Element {
	const [activeId, setActiveId] = useState<string | null>(null);
	const activeItem = items.find((i) => i.id === activeId) || null;

	return (
		<>
			<div className="nextora-overview-section">
				<h2 className="nextora-overview-section__title">{title || __('Showcase', 'nextora')}</h2>
				<div className="nextora-overview-gallery">
					{items.map((item) => (
						<button
							key={item.id}
							type="button"
							className="nextora-overview-gallery__item"
							onClick={() => setActiveId(item.id)}
						>
							<div className="nextora-overview-gallery__thumb">
								<Thumbnail item={item} />
								{item.type === 'video' && (
									<span className="nextora-overview-gallery__play-badge">
										<LucideIcon icon={Play as IconNode} size={14} />
									</span>
								)}
							</div>
							<div className="nextora-overview-gallery__info">
								<h3 className="nextora-overview-gallery__title">{item.title}</h3>
								<p className="nextora-overview-gallery__desc">{item.description}</p>
							</div>
						</button>
					))}
				</div>
			</div>

			<Lightbox item={activeItem} onClose={() => setActiveId(null)} />
		</>
	);
}
