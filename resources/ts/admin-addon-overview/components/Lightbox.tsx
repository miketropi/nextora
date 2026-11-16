import { useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { X } from 'lucide';
import type { IconNode } from 'lucide';
import type { GalleryItem } from '../types';
import { toSafeMediaUrl } from '../lib/videos';
import { LucideIcon } from './icons';

interface LightboxProps {
	item: GalleryItem | null;
	onClose: () => void;
}

/**
 * Native modal dialog for gallery media.
 *
 * Focus moves into the dialog on open and returns to the element that opened
 * it on close, including dismissal with Escape.
 */
export function Lightbox({ item, onClose }: LightboxProps): JSX.Element {
	const dialogRef = useRef<HTMLDialogElement | null>(null);
	const triggerRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const dialog = dialogRef.current;

		if (!dialog) {
			return;
		}

		if (item) {
			triggerRef.current =
				document.activeElement instanceof HTMLElement ? document.activeElement : null;

			if (!dialog.open) {
				dialog.showModal();
			}

			return;
		}

		if (dialog.open) {
			dialog.close();
		}
	}, [item]);

	const handleClose = (): void => {
		const trigger = triggerRef.current;
		triggerRef.current = null;
		onClose();

		if (trigger && document.contains(trigger)) {
			trigger.focus();
		}
	};

	const mediaUrl = item ? toSafeMediaUrl(item.url) : '';
	const previewUrl = mediaUrl || (item ? toSafeMediaUrl(item.thumbnail) : '');

	return (
		<dialog
			ref={dialogRef}
			className="nextora-overview-lightbox"
			aria-labelledby="nextora-overview-lightbox-title"
			onClose={handleClose}
			onClick={(event) => {
				if (event.target === dialogRef.current) {
					handleClose();
				}
			}}
		>
			{item && (
				<div className="nextora-overview-lightbox__inner">
					<button
						type="button"
						className="nextora-overview-lightbox__close"
						onClick={handleClose}
					>
						<LucideIcon icon={X as IconNode} size={14} />
						{__('Close', 'nextora')}
					</button>

					<div className="nextora-overview-lightbox__media">
						{previewUrl ? (
							item.type === 'video' && mediaUrl ? (
								<video src={mediaUrl} controls playsInline />
							) : (
								<img src={previewUrl} alt={item.title} />
							)
						) : (
							<span className="nextora-overview-card__failed-text">
								{__('Preview unavailable', 'nextora')}
							</span>
						)}
					</div>

					<div className="nextora-overview-lightbox__body">
						<h2
							id="nextora-overview-lightbox-title"
							className="nextora-overview-lightbox__title"
						>
							{item.title}
						</h2>
						{item.description && (
							<p className="nextora-overview-lightbox__desc">{item.description}</p>
						)}
					</div>
				</div>
			)}
		</dialog>
	);
}
