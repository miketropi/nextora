import { useEffect, useCallback } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import type { GalleryItem } from '../types';
import { X } from 'lucide';
import type { IconNode } from 'lucide';
import { LucideIcon } from './icons';

interface LightboxProps {
	item: GalleryItem | null;
	onClose: () => void;
}

export function Lightbox({ item, onClose }: LightboxProps): JSX.Element | null {
	const handleKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		},
		[onClose],
	);

	useEffect(() => {
		if (!item) return;

		document.addEventListener('keydown', handleKeyDown);
		document.body.style.overflow = 'hidden';

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = '';
		};
	}, [item, handleKeyDown]);

	if (!item) return null;

	return (
		<div
			className="nextora-overview-lightbox is-open"
			onClick={(e) => {
				if (e.target === e.currentTarget) onClose();
			}}
			role="dialog"
			aria-modal="true"
			aria-label={item.title}
		>
			<div className="nextora-overview-lightbox__inner">
				<button
					type="button"
					className="nextora-overview-lightbox__close"
					onClick={onClose}
					aria-label={__('Close', 'nextora')}
				>
					<LucideIcon icon={X as IconNode} size={20} />
				</button>

				<div className="nextora-overview-lightbox__media">
					{item.url ? (
						item.type === 'video' ? (
							<video
								src={item.url}
								controls
								className="nextora-overview-lightbox__video"
							/>
						) : (
							<img
								src={item.url}
								alt={item.title}
								className="nextora-overview-lightbox__image"
							/>
						)
					) : (
						<div className="nextora-overview-lightbox__placeholder">
							<span>{__('No media available', 'nextora')}</span>
						</div>
					)}
				</div>

				<div className="nextora-overview-lightbox__body">
					<h2 className="nextora-overview-lightbox__title">{item.title}</h2>
					{item.description && (
						<p className="nextora-overview-lightbox__desc">{item.description}</p>
					)}
				</div>
			</div>
		</div>
	);
}
