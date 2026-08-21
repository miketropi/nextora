export interface CloudThemeItem {
	id: string;
	slug: string;
	name: string;
	description?: string;
	type: 'PARENT' | 'CHILD';
	parentId?: string | null;
	currentVersion: string;
	metadataJson?: {
		author?: string;
		license?: string;
	};
}

export interface CompatibilityInfo {
	compatible: boolean;
	message: string;
}

export interface CloudTemplateItem {
	id: string;
	slug: string;
	title: string;
	category: string;
	type: 'PAGE' | 'SECTION' | 'HEADER' | 'FOOTER';
	thumbnailUrl: string;
	version: string;
	theme: {
		slug: string;
	};
	requires?: {
		theme?: string;
		childTheme?: string;
		plugins?: Record<string, string>;
	};
	compatibility?: CompatibilityInfo;
}

export interface CatalogMeta {
	page: number;
	perPage: number;
	total: number;
	totalPages: number;
}

export interface ThemeInfo {
	activeSlug: string;
	parentSlug: string;
	queriedSlug: string;
	isChildTheme: boolean;
}

export interface CatalogApiResponse {
	data: CloudTemplateItem[];
	meta: CatalogMeta;
	themeInfo: ThemeInfo;
}

export interface ImportApiResponse {
	success: boolean;
	post_id: number;
	edit_url: string;
	post_type: string;
	title: string;
	message?: string;
	compatibility?: CompatibilityInfo;
}

export interface TemplateContentApiResponse {
	content: string;
	template: {
		id: string;
		slug: string;
		type: string;
		title?: string;
	};
	version: string;
}

export interface CloudScriptData {
	restUrl: string;
	cloudApiUrl?: string;
	nonce: string;
	activeTheme: string;
	parentTheme: string;
	themeVersion: string;
	isChildTheme: boolean;
}
