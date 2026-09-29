import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "coral";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-teal text-white hover:bg-teal-hover shadow-[0_8px_24px_rgba(15,118,110,0.22)]",
  secondary:
    "bg-transparent text-ink border-[1.5px] border-ink hover:bg-ink hover:text-white",
  ghost: "bg-mist text-ink hover:bg-line/60",
  coral:
    "bg-coral text-white hover:bg-[#cf5203] shadow-[0_8px_24px_rgba(232,93,4,0.22)]",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[15px]",
  lg: "px-8 py-3.5 text-base",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-150 disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
