import { useState, useMemo } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useAddonData } from '../hooks/useAddonData';
import type { ChildTheme } from '../types';
import CardGrid from './CardGrid';
import ExtensionCard from './ExtensionCard';
import LoadingSkeleton from './LoadingSkeleton';
import EmptyState from './EmptyState';
import ErrorNotice from './ErrorNotice';
import SearchBar from './SearchBar';

export default function ChildThemesTab(): JSX.Element {
	const { data, isLoading, error } = useAddonData<ChildTheme>('child-themes');
	const [query, setQuery] = useState('');

	const filtered = useMemo(() => {
		const q = query.toLowerCase().trim();
		if (!q) return data;
		return data.filter(
			(t) =>
				t.name.toLowerCase().includes(q) ||
				t.description.toLowerCase().includes(q) ||
				t.author.toLowerCase().includes(q),
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
				title={__('No themes yet', 'nextora')}
				label={__('Child themes will appear here when registered.', 'nextora')}
			/>
		);
	}

	return (
		<>
			<div className="nextora-addon-section-intro">
				<h2 className="nextora-addon-section-intro__title">
					{__('Child Themes', 'nextora')}
				</h2>
				<span className="nextora-addon-section-intro__count">
					{query
						? sprintf(__('%d of %d', 'nextora'), filtered.length, data.length)
						: sprintf(__('%d theme%s', 'nextora'), data.length, data.length === 1 ? '' : 's')}
				</span>
				<SearchBar value={query} onChange={setQuery} />
			</div>

			{filtered.length === 0 ? (
				<p className="nextora-addon-no-results">
					{__('No themes match your filter.', 'nextora')}
				</p>
			) : (
				<CardGrid>
					{filtered.map((theme) => (
						<ExtensionCard
							key={theme.slug}
							image={theme.thumbnail || undefined}
							title={theme.name}
							description={theme.description}
							url={theme.url}
							author={theme.author}
							isPremium={theme.isPremium}
							isComingSoon={theme.isComingSoon}
						/>
					))}
				</CardGrid>
			)}
		</>
	);
}

function sprintf(format: string, ...args: (string | number)[]): string {
	return format.replace(/%[sd]/g, (match) => {
		const val = args.shift();
		return val !== undefined ? String(val) : match;
	});
}
