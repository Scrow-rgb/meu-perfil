import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface GlassCardProps<TElement extends ElementType> {
  as?: TElement;
  children: ReactNode;
  className?: string;
}

export function GlassCard<TElement extends ElementType = "div">({
  as,
  children,
  className,
  ...props
}: GlassCardProps<TElement> &
  Omit<ComponentPropsWithoutRef<TElement>, keyof GlassCardProps<TElement>>) {
  const Component = as ?? "div";

  return (
    <Component className={cn("glass-card purple-glow", className)} {...props}>
      {children}
    </Component>
  );
}
