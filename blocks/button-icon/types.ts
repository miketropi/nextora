export type ButtonAlign = 'left' | 'center' | 'right';

export interface ButtonIconAttributes extends Record< string, unknown > {
	buttonAlign: ButtonAlign;
	enableScrollAnimation: boolean;
}
