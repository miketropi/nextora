import { useState, useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useAddonData } from '../hooks/useAddonData';
import { sprintf } from '../lib/format';
import type { Plugin } from '../types';
import CardGrid from './CardGrid';
import ExtensionCard from './ExtensionCard';
import LoadingSkeleton from './LoadingSkeleton';
import EmptyState from './EmptyState';
import ErrorNotice from './ErrorNotice';
import SearchBar from './SearchBar';

export default function PluginsTab(): JSX.Element {
	const { data, isLoading, error } = useAddonData<Plugin>('plugins');
	const [query, setQuery] = useState('');

	const filtered = useMemo(() => {
		const q = query.toLowerCase().trim();
		if (!q) return data;
		return data.filter(
			(p) =>
				p.name.toLowerCase().includes(q) ||
				p.description.toLowerCase().includes(q),
		);
	}, [data, query]);

	if (isLoading) {
		return <LoadingSkeleton />;
	}

	if (error) {
		return <ErrorNotice message={error} />;
	}

	if (data.length === 0) {
		return (
			<EmptyState
				title={__('No plugins listed', 'nextora')}
				label={__('Supported plugins will appear here when registered.', 'nextora')}
			/>
		);
	}

	const active = data.filter((p) => p.isActive).length;

	return (
		<>
			<div className="nextora-addon-section-intro">
				<h2 className="nextora-addon-section-intro__title">
					{__('Extensions & Compatible', 'nextora')}
				</h2>
				<span className="nextora-addon-section-intro__count">
					{query
						? sprintf(__('%d of %d', 'nextora'), filtered.length, data.length)
						: sprintf(
								__('%d extension%s \u00B7 %d active', 'nextora'),
								data.length,
								data.length === 1 ? '' : 's',
								active,
						  )}
				</span>
				<SearchBar value={query} onChange={setQuery} />
			</div>

			{filtered.length === 0 ? (
				<p className="nextora-addon-no-results">
					{__('No extensions match your filter.', 'nextora')}
				</p>
			) : (
				<CardGrid>
					{filtered.map((plugin) => (
						<ExtensionCard
							key={plugin.slug}
							image={plugin.image || undefined}
							title={plugin.name}
							description={plugin.description}
							url={plugin.url}
							isActive={plugin.isActive}
							isPremium={plugin.isPremium}
							isComingSoon={plugin.isComingSoon}
						/>
					))}
				</CardGrid>
			)}
		</>
	);
}

