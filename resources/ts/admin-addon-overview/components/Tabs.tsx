import { useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { LayoutDashboard, Play } from 'lucide';
import type { IconNode } from 'lucide';
import { LucideIcon } from './icons';

export type OverviewTabId = 'features' | 'videos';

interface TabDefinition {
	id: OverviewTabId;
	tabId: string;
	panelId: string;
	label: string;
	icon: IconNode;
}

/**
 * Tab definitions shared by the tab list and the panels it controls.
 */
export const OVERVIEW_TABS: TabDefinition[] = [
	{
		id: 'features',
		tabId: 'nextora-overview-tab-features',
		panelId: 'nextora-overview-panel-features',
		label: __('Theme features', 'nextora'),
		icon: LayoutDashboard as IconNode,
	},
	{
		id: 'videos',
		tabId: 'nextora-overview-tab-videos',
		panelId: 'nextora-overview-panel-videos',
		label: __('Getting started', 'nextora'),
		icon: Play as IconNode,
	},
];

interface TabsProps {
	active: OverviewTabId;
	onChange: (id: OverviewTabId) => void;
}

export default function Tabs({ active, onChange }: TabsProps): JSX.Element {
	const listRef = useRef<HTMLDivElement | null>(null);

	const handleKeyDown = (event: KeyboardEvent, index: number): void => {
		const last = OVERVIEW_TABS.length - 1;
		let nextIndex = index;

		if (event.key === 'ArrowRight') {
			nextIndex = index === last ? 0 : index + 1;
		} else if (event.key === 'ArrowLeft') {
			nextIndex = index === 0 ? last : index - 1;
		} else if (event.key === 'Home') {
			nextIndex = 0;
		} else if (event.key === 'End') {
			nextIndex = last;
		} else {
			return;
		}

		event.preventDefault();

		const buttons = listRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
		buttons?.[nextIndex]?.focus();
		onChange(OVERVIEW_TABS[nextIndex].id);
	};

	return (
		<div
			className="nextora-overview-nav"
			role="tablist"
			aria-label={__('Overview sections', 'nextora')}
			ref={listRef}
		>
			{OVERVIEW_TABS.map((tab, index) => {
				const selected = tab.id === active;

				return (
					<button
						key={tab.id}
						type="button"
						id={tab.tabId}
						role="tab"
						aria-selected={selected}
						aria-controls={tab.panelId}
						tabIndex={selected ? 0 : -1}
						className={`nextora-overview-nav__item${selected ? ' is-active' : ''}`}
						onClick={() => onChange(tab.id)}
						onKeyDown={(event) => handleKeyDown(event.nativeEvent, index)}
					>
						<LucideIcon icon={tab.icon} size={14} className="nextora-overview-nav__icon" />
						{tab.label}
					</button>
				);
			})}
		</div>
	);
}
