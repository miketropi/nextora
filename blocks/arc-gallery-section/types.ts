export interface ArcGalleryImage {
	id: number;
	url: string;
	alt: string;
	isPlaceholder?: boolean;
}

export interface ArcGallerySectionAttributes {
	images: ArcGalleryImage[];
	imageWidth: number;
	imageHeight: number;
	imageBorderRadius: number;
	imageBorderWidth: number;
	imageBorderColor: string;
	arcRadius: number;
	arcSpread: number;
	arcDirection: string;
	eyebrowText: string;
	headingText: string;
	descriptionText: string;
	headingLevel: number;
	textAlign: string;
	contentMaxWidth: string;
	contentOffsetY: number;
	showPrimaryButton: boolean;
	primaryButtonText: string;
	primaryButtonUrl: string;
	primaryButtonTarget: boolean;
	primaryButtonStyle: string;
	showSecondaryButton: boolean;
	secondaryButtonText: string;
	secondaryButtonUrl: string;
	secondaryButtonTarget: boolean;
	backgroundColor: string;
	textColor: string;
	eyebrowColor: string;
	descriptionColor: string;
	primaryButtonBg: string;
	primaryButtonColor: string;
	secondaryButtonColor: string;
	enableScrollAnimation: boolean;
	enableGalleryScrollAnimation: boolean;
}
