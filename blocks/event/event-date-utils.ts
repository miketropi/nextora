const MONTH_ABBREVS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const MONTH_LOOKUP: Record<string, number> = {
	jan: 0,
	feb: 1,
	mar: 2,
	apr: 3,
	may: 4,
	jun: 5,
	jul: 6,
	aug: 7,
	sep: 8,
	oct: 9,
	nov: 10,
	dec: 11,
};

export function parseMonthAbbrev(month: string): number {
	const key = month.trim().slice(0, 3).toLowerCase();
	return MONTH_LOOKUP[key] ?? -1;
}

export function formatMonthAbbrev(monthIndex: number): string {
	return MONTH_ABBREVS[monthIndex] ?? '';
}

/**
 * Build YYYY-MM-DD for native date input from day + month (current year).
 */
export function eventDateInputValue(day: string, month: string): string {
	const dayNum = parseInt(day, 10);
	const monthIndex = parseMonthAbbrev(month);
	if (!Number.isFinite(dayNum) || dayNum < 1 || dayNum > 31 || monthIndex < 0) {
		return '';
	}

	const year = new Date().getFullYear();
	const date = new Date(year, monthIndex, dayNum);
	if (
		date.getFullYear() !== year ||
		date.getMonth() !== monthIndex ||
		date.getDate() !== dayNum
	) {
		return '';
	}

	return `${year}-${String(monthIndex + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
}

export function dayMonthFromDateInput(value: string): { day: string; month: string } | null {
	if (!value) {
		return null;
	}

	const parts = value.split('-');
	if (parts.length !== 3) {
		return null;
	}

	const year = parseInt(parts[0], 10);
	const monthIndex = parseInt(parts[1], 10) - 1;
	const dayNum = parseInt(parts[2], 10);

	if (
		!Number.isFinite(year) ||
		!Number.isFinite(monthIndex) ||
		!Number.isFinite(dayNum) ||
		monthIndex < 0 ||
		monthIndex > 11
	) {
		return null;
	}

	const date = new Date(year, monthIndex, dayNum);
	if (date.getMonth() !== monthIndex || date.getDate() !== dayNum) {
		return null;
	}

	return {
		day: String(dayNum).padStart(2, '0'),
		month: formatMonthAbbrev(monthIndex),
	};
}

/**
 * Parse display time (e.g. "7:00 AM") to HH:mm for input[type=time].
 */
export function eventTimeInputValue(time: string): string {
	const trimmed = time.trim();
	if (!trimmed) {
		return '';
	}

	const match = trimmed.match(/^(\d{1,2}):(\d{2})(?:\s*(AM|PM))?$/i);
	if (!match) {
		return '';
	}

	let hours = parseInt(match[1], 10);
	const minutes = parseInt(match[2], 10);
	const meridiem = match[3]?.toUpperCase();

	if (!Number.isFinite(hours) || !Number.isFinite(minutes) || minutes < 0 || minutes > 59) {
		return '';
	}

	if (meridiem === 'PM' && hours < 12) {
		hours += 12;
	}
	if (meridiem === 'AM' && hours === 12) {
		hours = 0;
	}

	if (hours < 0 || hours > 23) {
		return '';
	}

	return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

/**
 * Format HH:mm from time input to display string (7:00 AM).
 */
export function displayTimeFromInput(value: string): string {
	if (!value) {
		return '';
	}

	const [hoursRaw, minutesRaw] = value.split(':');
	const hours24 = parseInt(hoursRaw, 10);
	const minutes = parseInt(minutesRaw, 10);

	if (!Number.isFinite(hours24) || !Number.isFinite(minutes)) {
		return '';
	}

	const meridiem = hours24 >= 12 ? 'PM' : 'AM';
	const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;

	return `${hours12}:${String(minutes).padStart(2, '0')} ${meridiem}`;
}

export function defaultEventDateParts(): { day: string; month: string } {
	const now = new Date();
	return {
		day: String(now.getDate()).padStart(2, '0'),
		month: formatMonthAbbrev(now.getMonth()),
	};
}

export function defaultEventTimeLabel(): string {
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const meridiem = hours >= 12 ? 'PM' : 'AM';
	const hours12 = hours % 12 === 0 ? 12 : hours % 12;
	return `${hours12}:${String(minutes).padStart(2, '0')} ${meridiem}`;
}
