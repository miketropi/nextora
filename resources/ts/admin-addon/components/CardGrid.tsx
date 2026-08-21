interface CardGridProps {
	children: React.ReactNode;
}

export default function CardGrid({ children }: CardGridProps): JSX.Element {
	return <div className="nextora-addon-grid">{children}</div>;
}
