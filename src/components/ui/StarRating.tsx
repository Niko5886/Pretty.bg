import { Star } from "lucide-react";

type StarRatingProps = {
  /** Rating value 0–5. */
  value: number;
  /** Icon size in px. */
  size?: number;
  className?: string;
};

export function StarRating({ value, size = 16, className = "" }: StarRatingProps) {
  const rounded = Math.round(value);

  return (
    <div
      className={`flex items-center gap-0.5 ${className}`.trim()}
      role="img"
      aria-label={`Rated ${value} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={i < rounded ? "text-orange" : "text-gray-300"}
          fill="currentColor"
          style={{ width: size, height: size }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
