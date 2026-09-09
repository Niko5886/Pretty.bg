import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Target number to count up to. */
  end: number;
  /** Animation length in ms. */
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

/** easeOutExpo — fast start, smooth settle (modern count-up feel). */
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Counts from 0 to `end` the first time it scrolls into view, using
 * requestAnimationFrame. Respects prefers-reduced-motion (shows the final
 * value immediately).
 */
export function CountUp({
  end,
  duration = 6000,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }

    let raf = 0;
    let start = 0;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const step = (ts: number) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          setValue(Math.round(easeOutExpo(progress) * end));
          if (progress < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
