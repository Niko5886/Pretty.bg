import type { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  /** Extra classes for the inner max-width container. */
  containerClassName?: string;
};

/**
 * Standard page section: vertical rhythm + centered max-width container with
 * the project's horizontal padding scale.
 */
export function Section({
  className = "",
  containerClassName = "",
  children,
  ...rest
}: SectionProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`.trim()} {...rest}>
      <div
        className={`mx-auto max-w-7xl px-4 md:px-8 lg:px-12 ${containerClassName}`.trim()}
      >
        {children}
      </div>
    </section>
  );
}
