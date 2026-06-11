"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { AriaAttributes, ReactNode } from "react";

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
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = as === "section" ? motion.section : motion.div;

  return (
    <MotionTag
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -50px 0px" }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
