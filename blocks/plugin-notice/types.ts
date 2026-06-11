export type PluginItem = {
	id: string;
	name: string;
	url: string;
};

export type PluginPreset = {
	id: string;
	name: string;
	url: string;
};

export const PLUGIN_PRESETS: PluginPreset[] = [
	{
		id: 'mailchimp-for-wp',
		name: 'Mailchimp for WordPress',
		url: 'https://wordpress.org/plugins/mailchimp-for-wp/',
	},
	{
		id: 'newsletter',
		name: 'Newsletter',
		url: 'https://wordpress.org/plugins/newsletter/',
	},
];

export const DEFAULT_MESSAGE =
	'A compatible plugin is required to use this feature. Choose a recommended plugin below or connect another supported option.';

export const DEFAULT_PLUGINS_LABEL = 'Recommended plugins:';

export const DEFAULT_PLUGINS: PluginItem[] = PLUGIN_PRESETS.map((preset) => ({
	id: preset.id,
	name: preset.name,
	url: preset.url,
}));

export type Attributes = {
	message: string;
	pluginsLabel: string;
	plugins: PluginItem[];
	enableScrollAnimation: boolean;
};

export function getPluginDisplayName(plugin: PluginItem): string {
	return plugin.name.trim() || plugin.url.trim();
}

export function newPluginId(): string {
	return `plugin-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

export function createEmptyPlugin(): PluginItem {
	return { id: newPluginId(), name: '', url: '' };
}

export function createPluginFromPreset(preset: PluginPreset): PluginItem {
	return { id: preset.id, name: preset.name, url: preset.url };
}

export function resolvePlugins(attributes: Attributes): PluginItem[] {
	if (Array.isArray(attributes.plugins) && attributes.plugins.length > 0) {
		return attributes.plugins;
	}
	return DEFAULT_PLUGINS;
}
