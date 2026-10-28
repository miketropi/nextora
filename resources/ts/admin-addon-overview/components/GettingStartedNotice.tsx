import { __ } from '@wordpress/i18n';
import { Play } from 'lucide';
import type { IconNode } from 'lucide';
import { LucideIcon } from './icons';

interface GettingStartedNoticeProps {
	/** Deep link to the Getting started tab, used when the link opens in a new tab. */
	href: string;
	/** Switch to the Getting started tab in place. */
	onOpen: () => void;
}

/**
 * Pointer to the Getting-started video playlist, shown on the landing tab.
 */
export default function GettingStartedNotice({ href, onOpen }: GettingStartedNoticeProps): JSX.Element {
	return (
		<div className="nextora-overview-notice">
			<span className="nextora-overview-notice__icon" aria-hidden="true">
				<LucideIcon icon={Play as IconNode} size={16} />
			</span>
			<p className="nextora-overview-notice__text">
				<strong>{__('New to Nextora?', 'nextora')}</strong>{' '}
				{__(
					'Follow the setup guides to tour the parent theme, activate your license, and import the Home demo.',
					'nextora',
				)}{' '}
				<a
					className="nextora-overview-notice__cta"
					href={href}
					onClick={(event) => {
						// A plain click switches tabs without a reload; modified clicks fall
						// through to the real href so the playlist can still be opened
						// in a new tab or window.
						if (
							event.metaKey ||
							event.ctrlKey ||
							event.shiftKey ||
							event.altKey ||
							event.button !== 0
						) {
							return;
						}

						event.preventDefault();
						onOpen();
					}}
				>
					{__('Watch the videos', 'nextora')}
				</a>
			</p>
		</div>
	);
}
