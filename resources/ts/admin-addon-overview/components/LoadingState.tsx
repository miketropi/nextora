import { __ } from '@wordpress/i18n';

/**
 * Skeleton shown while the overview payload loads.
 *
 * Mirrors the loaded layout so the page does not shift when data arrives.
 */
export default function LoadingState(): JSX.Element {
	return (
		<div className="nextora-overview-page">
			<div className="nextora-overview-header">
				<div className="nextora-overview-skeleton nextora-overview-skeleton--title" aria-hidden="true" />
				<div className="nextora-overview-skeleton nextora-overview-skeleton--desc" aria-hidden="true" />
			</div>

			<div className="nextora-overview-skeleton nextora-overview-skeleton--nav" aria-hidden="true" />

			<div className="nextora-overview-content">
				<div className="nextora-overview-skeleton nextora-overview-skeleton--section-title" aria-hidden="true" />
				<div className="nextora-overview-features">
					{Array.from({ length: 8 }, (_, i) => (
						<div key={i} className="nextora-overview-feature">
							<div className="nextora-overview-skeleton nextora-overview-skeleton--card-icon" aria-hidden="true" />
							<div className="nextora-overview-feature__body">
								<div className="nextora-overview-skeleton nextora-overview-skeleton--card-title" aria-hidden="true" />
								<div className="nextora-overview-skeleton nextora-overview-skeleton--card-text" aria-hidden="true" />
							</div>
						</div>
					))}
				</div>

				<div className="nextora-overview-skeleton nextora-overview-skeleton--section-title nextora-overview-skeleton--spaced" aria-hidden="true" />
				<div className="nextora-overview-gallery">
					{Array.from({ length: 6 }, (_, i) => (
						<div key={i} className="nextora-overview-card">
							<div className="nextora-overview-skeleton nextora-overview-skeleton--card-frame" aria-hidden="true" />
							<div className="nextora-overview-card__info">
								<div className="nextora-overview-skeleton nextora-overview-skeleton--card-title" aria-hidden="true" />
								<div className="nextora-overview-skeleton nextora-overview-skeleton--card-text" aria-hidden="true" />
							</div>
						</div>
					))}
				</div>
			</div>

			<span className="nextora-overview-sr-only">{__('Loading…', 'nextora')}</span>
		</div>
	);
}
