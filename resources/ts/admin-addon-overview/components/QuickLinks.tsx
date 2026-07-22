import { ExternalLinkIcon } from './icons';
import type { QuickLink } from '../types';

interface QuickLinksProps {
	links: QuickLink[];
}

export default function QuickLinks({ links }: QuickLinksProps): JSX.Element {
	return (
		<div className="nextora-overview-section">
			<h2 className="nextora-overview-section__title">Quick Links</h2>
			<div className="nextora-overview-links">
				{links.map((link) => (
					<a
						key={link.title}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className="nextora-overview-links__item"
					>
						<div className="nextora-overview-links__body">
							<span className="nextora-overview-links__title">{link.title}</span>
							<span className="nextora-overview-links__desc">{link.description}</span>
						</div>
						<ExternalLinkIcon size={16} className="nextora-overview-links__arrow" />
					</a>
				))}
			</div>
		</div>
	);
}
