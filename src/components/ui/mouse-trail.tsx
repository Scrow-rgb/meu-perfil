"use client";

import { useEffect } from "react";

export function MouseTrail() {
  useEffect(() => {
    let lastCreatedAt = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const now = performance.now();

      if (now - lastCreatedAt < 36) return;

      lastCreatedAt = now;

      const glow = document.createElement("span");
      glow.className =
        "fixed pointer-events-none z-50 h-1 w-1 rounded-full bg-primary/20 blur-md";
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
      document.body.appendChild(glow);

      window.setTimeout(() => glow.remove(), 1000);
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
