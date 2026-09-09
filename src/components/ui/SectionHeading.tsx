type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  /** id for the <h2>, used with aria-labelledby on the parent Section. */
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  id,
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignment} ${className}`.trim()}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="font-serif-display text-4xl leading-tight tracking-tight text-green-dark md:text-5xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-gray-600 md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
