import { OVERVIEW_TABS } from '../components/Tabs';
import type { OverviewTabId } from '../components/Tabs';

/**
 * Query variable that carries the requested Overview tab in the admin URL,
 * e.g. `admin.php?page=nextora-addon-overview&tab=videos`.
 */
export const OVERVIEW_TAB_QUERY_VAR = 'tab';

const DEFAULT_TAB_ID: OverviewTabId = OVERVIEW_TABS[0].id;

/**
 * Tab requested by the current admin URL, or the first tab.
 *
 * Matching is trimmed and case-insensitive so hand-typed links still resolve;
 * an unknown id falls back to the default tab instead of failing.
 */
export function readTabFromLocation(search: string = window.location.search): OverviewTabId {
	const candidate = (new URLSearchParams(search).get(OVERVIEW_TAB_QUERY_VAR) ?? '')
		.trim()
		.toLowerCase();
	const match = OVERVIEW_TABS.find((tab) => tab.id === candidate);

	return match ? match.id : DEFAULT_TAB_ID;
}

/**
 * Current admin URL with `?tab=` set to `id`, for links that must survive a reload
 * or open in a new tab.
 */
export function tabHref(id: OverviewTabId, href: string = window.location.href): string {
	const url = new URL(href);
	url.searchParams.set(OVERVIEW_TAB_QUERY_VAR, id);

	return `${url.pathname}${url.search}${url.hash}`;
}

/**
 * Mirror the active tab into `?tab=` so the URL stays shareable and reload-stable.
 *
 * Uses `replaceState`: switching tabs must not fill the browser history with
 * entries that change what the Back button does.
 */
export function syncTabToLocation(id: OverviewTabId, href: string = window.location.href): void {
	window.history.replaceState(window.history.state, '', tabHref(id, href));
}
