export interface StackingCardItem {
  id: string;
  heading: string;
  description: string;
  linkText: string;
  linkUrl: string;
  imageId: number;
  imageUrl: string;
  imageAlt: string;
  backgroundColor: string;
  headingColor: string;
  descriptionColor: string;
  linkColor: string;
}

export interface StackingCardsAttributes extends Record<string, unknown> {
  cards: StackingCardItem[];
  cardHeight: number;
  cardGap: number;
  stackOffset: number;
  stickyTopOffset: number;
  cardRadius: number;
  contentPadding: number;
  imageWidth: number;
  contentMaxWidth: string;
  mobileCardHeight: number;
  mobileContentPadding: number;
  mobileImageHeight: number;
  mobileStackOffset: number;
  headingSize: string;
  descriptionSize: string;
  linkSize: string;
  headingWeight: string;
  showLink: boolean;
  openLinksInNewTab: boolean;
  imageObjectFit: string;
  enableSticky: boolean;
  enableScrollAnimation: boolean;
  cardBackgroundColor: string;
  headingColor: string;
  descriptionColor: string;
  linkColor: string;
}
