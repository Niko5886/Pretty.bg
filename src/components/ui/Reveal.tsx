import type { ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  /** Animation utility class applied once visible (from index.css). */
  animation?: string;
  /** Optional stagger delay class, e.g. "delay-200". */
  delay?: string;
  className?: string;
};

/**
 * Wraps content and applies a reveal animation the first time it scrolls into
 * view. Before it is shown the content is hidden (opacity-0) to avoid a flash.
 */
export function Reveal({
  children,
  animation = "animate-fade-up",
  delay = "",
  className = "",
}: RevealProps) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${className} ${
        shown ? `${animation} ${delay}` : "opacity-0"
      }`.trim()}
    >
      {children}
    </div>
  );
}
