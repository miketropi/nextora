export interface RopeGalleryItem {
	id: string;
	title: string;
	subtitle: string;
	link: string;
	imageId: number;
	imageUrl: string;
	imageAlt: string;
}

export interface RopeGalleryAttributes {
	items: RopeGalleryItem[];
	cardCount: number;
	ropeColor: string;
	ropeAccentColor: string;
	accentColor: string;
	animationEnabled: boolean;
	enableScrollAnimation: boolean;
}
