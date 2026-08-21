export type ButtonAlign = 'left' | 'center' | 'right';

export interface AdvancedButtonAttributes extends Record< string, unknown > {
	buttonAlign: ButtonAlign;
	enableScrollAnimation: boolean;
}
