"use client";

import { useEffect } from "react";

export function useBodyScrollLock(is_locked: boolean): void {
  useEffect(() => {
    document.body.style.overflow = is_locked ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [is_locked]);
}
