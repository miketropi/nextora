import { __ } from '@wordpress/i18n';
import type { ThemeInfo } from '../types';
import { LucideIcon } from './icons';
import { Boxes, Clock, ShieldCheck } from 'lucide';
import type { IconNode } from 'lucide';

interface HeaderProps {
	theme: ThemeInfo;
	featureCount: number;
	changelogCount: number;
}

export default function OverviewHeader({ theme, featureCount, changelogCount }: HeaderProps): JSX.Element {
	return (
		<>
			<div className="nextora-overview-hero">
				<span className="nextora-overview-hero__badge">v{theme.version}</span>
				<h1 className="nextora-overview-hero__title">{theme.name}</h1>
				<p className="nextora-overview-hero__desc">
					{__('Modern WordPress Block Theme — purpose-built for performance, accessibility, and the full site editor.', 'nextora')}
				</p>
				<div className="nextora-overview-hero__meta">
					<a href={theme.authorUri || '#'} target="_blank" rel="noopener noreferrer">
						{theme.author}
					</a>
					<span className="nextora-overview-hero__meta-dot" />
					<span>WordPress {theme.requiresWordPress}+</span>
					<span className="nextora-overview-hero__meta-dot" />
					<span>PHP {theme.requiresPhp}+</span>
				</div>
			</div>
		</>
	);
}
