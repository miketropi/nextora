import type { TestimonialIconType } from './types';

interface IconProps {
	size?: number;
	className?: string;
}

const strokeProps = {
	fill: 'none' as const,
	stroke: 'currentColor',
	strokeWidth: 1.5,
	strokeLinecap: 'round' as const,
	strokeLinejoin: 'round' as const,
};

export function TopIconSvg({
	type,
	size = 20,
	className,
}: IconProps & { type: TestimonialIconType }) {
	const dim = { width: size, height: size, className, viewBox: '0 0 24 24', 'aria-hidden': true };

	switch (type) {
		case 'quote':
			return (
				<svg {...dim}>
					<path
						{...strokeProps}
						d="M7.5 8.5c0-2.2 1.8-4 4-4h.5M7.5 15.5V10M5 10h5M14.5 8.5c0-2.2 1.8-4 4-4h.5M14.5 15.5V10M12 10h5"
					/>
				</svg>
			);
		case 'star':
			return (
				<svg {...dim}>
					<path
						{...strokeProps}
						d="M12 3.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.8 7.2 18.4l.9-5.4-3.9-3.8 5.4-.8L12 3.5z"
					/>
				</svg>
			);
		case 'heart':
			return (
				<svg {...dim}>
					<path
						{...strokeProps}
						d="M12 20.5s-6.5-4.2-8.5-8.2C1.8 8.8 4.2 5.5 7.6 5.5c1.8 0 3.2 1 4.4 2.4C13.2 6.5 14.6 5.5 16.4 5.5 19.8 5.5 22.2 8.8 20.5 12.3 18.5 16.3 12 20.5 12 20.5z"
					/>
				</svg>
			);
		case 'custom-svg':
			return null;
		case 'sparkle':
		default:
			return (
				<svg {...dim}>
					<path {...strokeProps} d="M12 3v3M12 18v3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M3 12h3M18 12h3M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
					<path {...strokeProps} d="M12 8.5l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5z" />
				</svg>
			);
	}
}

export function StarRating({ rating, size = 18 }: { rating: number; size?: number }) {
	if (rating < 1) {
		return null;
	}

	const count = Math.max(1, Math.min(5, Math.round(rating)));

	return (
		<div
			className="nextora-testimonial-carousel__slide-rating"
			aria-label={`${count} out of 5 stars`}
		>
			{Array.from({ length: count }).map((_, i) => (
				<svg
					key={`star-${i}`}
					width={size}
					height={size}
					viewBox="0 0 24 24"
					aria-hidden
				>
					<path
						fill="currentColor"
						d="M12 2.5l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 18.8 5.8 21.6l1.2-6.9-5-4.9 6.9-1L12 2.5z"
					/>
				</svg>
			))}
		</div>
	);
}

export function ChevronLeftIcon({ size = 16 }: { size?: number }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
			<path d="M15 18l-6-6 6-6" />
		</svg>
	);
}

export function ChevronRightIcon({ size = 16 }: { size?: number }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
			<path d="M9 6l6 6-6 6" />
		</svg>
	);
}
