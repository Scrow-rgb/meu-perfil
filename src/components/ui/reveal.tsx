"use client";

import { useEffect, useRef, useState } from "react";
import type { AriaAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface RevealProps
  extends Pick<AriaAttributes, "aria-label" | "aria-labelledby"> {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
  id?: string;
  role?: string;
}

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  ...props
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const Component = as;

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const shouldReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (shouldReduceMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.18, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={cn("reveal", isVisible && "reveal-visible", className)}
      style={{ transitionDelay: `${delay}s` }}
      {...props}
    >
      {children}
    </Component>
  );
}
