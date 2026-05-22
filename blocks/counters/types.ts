export interface CounterItem {
	id: string;
	number: number;
	prefix: string;
	suffix: string;
	label: string;
}

export interface CountersAttributes {
	items: CounterItem[];
	columns: number;
	columnGap: string;
	divider: boolean;
	dividerColor: string;
	textAlign: string;
	enableCountUp: boolean;
	countUpDuration: number;
	countUpEasing: string;
	numberColor: string;
	labelColor: string;
	numberFontSize: string;
	labelFontSize: string;
}
