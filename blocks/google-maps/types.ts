export type MapMode = 'iframe' | 'api';

export interface MarkerItem {
	id: string;
	lat: number;
	lng: number;
	title: string;
	infoHtml: string;
	iconUrl: string;
}

export interface GoogleMapsAttributes {
	mapMode: MapMode;
	address: string;
	lat: number;
	lng: number;
	zoom: number;
	mapHeight: number;
	borderRadius: number;
	showControls: boolean;
	markers: MarkerItem[];
	mapStyleJson: string;
	showDirections: boolean;
	apiKey: string;
	enableScrollAnimation: boolean;
}
