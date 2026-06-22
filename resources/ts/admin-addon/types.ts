export interface ChildTheme {
	slug: string;
	name: string;
	description: string;
	thumbnail: string;
	url: string;
	author: string;
	isPremium: boolean;
	isComingSoon: boolean;
}

export interface Plugin {
	slug: string;
	name: string;
	description: string;
	image: string;
	url: string;
	isActive: boolean;
	isPremium: boolean;
	isComingSoon: boolean;
}

export interface BusinessService {
	id: string;
	title: string;
	description: string;
	image: string;
	url: string;
	isPremium: boolean;
}
