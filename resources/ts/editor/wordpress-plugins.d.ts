declare module '@wordpress/edit-post' {
	import { ComponentType, ReactNode } from 'react';

	export interface PluginMoreMenuItemProps {
		icon?: ReactNode;
		onClick?: () => void;
		children?: ReactNode;
	}

	export const PluginMoreMenuItem: ComponentType<PluginMoreMenuItemProps>;
	export const PluginSidebar: ComponentType<{ name: string; title: string; icon?: ReactNode; children?: ReactNode }>;
}

declare module '@wordpress/plugins' {
	import { ComponentType } from 'react';

	export interface PluginSettings {
		render: ComponentType;
		icon?: unknown;
	}

	export function registerPlugin(name: string, settings: PluginSettings): void;
	export function unregisterPlugin(name: string): void;
}
