export function LocationPinIcon() {
  return (
    <svg
      className="nextora-hlc__icon nextora-hlc__icon--pin"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="8" r="2" fill="currentColor" />
      <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg
      className="nextora-hlc__icon nextora-hlc__icon--star"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.93L8 10.67l-3.52 1.85.67-3.93-2.85-2.78 3.94-.57L8 1.5z"
        fill="var(--nextora-hlc-star, #F6C23E)"
      />
    </svg>
  );
}
