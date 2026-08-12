export interface ExpandingCardItem {
  id: string;
  imageId: number;
  imageUrl: string;
  imageAlt: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface ExpandingCardsAttributes extends Record<string, unknown> {
  cards: ExpandingCardItem[];
  cardHeight: number;
  cardGap: number;
  cardBorderRadius: number;
  inactiveOverlayOpacity: number;
  contentPaddingY: number;
  contentPaddingX: number;
  headingSize: string;
  descriptionSize: string;
  buttonSize: string;
  headingColor: string;
  descriptionColor: string;
  overlayBackgroundColor: string;
  buttonTextColor: string;
  buttonBackgroundColor: string;
  buttonBorderColor: string;
  enableScrollAnimation: boolean;
  activeCardIndex: number;
}
