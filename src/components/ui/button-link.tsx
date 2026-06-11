import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

const variantClasses: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "gradient-btn text-on-primary-container font-bold shadow-none hover:shadow-[0_0_20px_rgb(183_109_255_/_40%)]",
  secondary:
    "border border-white/10 font-bold transition-all hover:bg-white/5 hover:border-white/20",
  ghost: "font-bold text-primary transition-all hover:text-primary/80",
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-body-md",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
