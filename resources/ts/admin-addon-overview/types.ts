export interface ThemeInfo {
	name: string;
	version: string;
	requiresWordPress: string;
	testedUpTo: string;
	requiresPhp: string;
	author: string;
	authorUri: string;
	themeUri: string;
}

export interface Feature {
	title: string;
	description: string;
	icon: string;
}

export interface CompatibilityInfo {
	wordpress: string;
	php: string;
}

export interface ChangelogEntry {
	version: string;
	date: string;
	changes: string[];
}

export interface GalleryItem {
	id: string;
	type: 'image' | 'video';
	url: string;
	thumbnail: string;
	title: string;
	description: string;
}

export interface QuickLink {
	title: string;
	url: string;
	description: string;
}

export interface OverviewData {
	theme: ThemeInfo;
	features: Feature[];
	compatibility: CompatibilityInfo;
	changelog: ChangelogEntry[];
	quickLinks: QuickLink[];
	gallery: GalleryItem[];
	extensionsGallery: GalleryItem[];
}
