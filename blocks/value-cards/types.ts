export interface ValueCard {
	id: string;
	title: string;
	description: string;
	mediaType: 'image' | 'video';
	mediaId: number;
	mediaUrl: string;
	videoPosterId: number;
	videoPosterUrl: string;
	rotation: number;
}

export interface ValueCardsAttributes {
	cards: ValueCard[];
	maxTilt: number;
	hoverScale: number;
	cardMinWidth: number;
	cardMaxWidth: number;
	cardBorderRadius: number;
	perspective: number;
	gap: number;
	cardBackgroundColor: string;
	cardTitleColor: string;
	cardDescriptionColor: string;
	cardBorderColor: string;
}
