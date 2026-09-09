import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-orange text-white hover:bg-orange-hover",
  outline: "border border-green-dark text-green-dark hover:bg-white",
  ghost: "text-green-dark hover:bg-black/5",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonProps =
  | (CommonProps & { href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
  | (CommonProps & { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>);

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (props.href !== undefined) {
    const {
      variant: _variant,
      size: _size,
      className: _className,
      children: _children,
      ...rest
    } = props;
    return (
      <a className={cls} {...rest}>
        {children}
      </a>
    );
  }

  const {
    variant: _variant,
    size: _size,
    className: _className,
    children: _children,
    href: _href,
    ...rest
  } = props;
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
