"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { navItems } from "@/data/portfolio";
import { useBodyScrollLock } from "@/hooks/use-body-scroll-lock";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useBodyScrollLock(isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-surface/10 backdrop-blur-xl">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-container-max-width items-center justify-between px-gutter py-4"
      >
        <Link
          href="#home"
          className="font-headline-lg text-headline-lg font-bold text-primary"
          onClick={closeMenu}
        >
          DEV.SOLO
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body-md text-body-md text-on-surface-variant transition-colors hover:text-on-surface"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="gradient-btn rounded-full px-6 py-2 font-bold text-on-primary-container transition-all"
          >
            Connect
          </Link>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="inline-flex text-primary md:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "md:hidden",
          isMenuOpen ? "pointer-events-auto block" : "pointer-events-none hidden",
        )}
      >
        <div className="mx-gutter mb-4 rounded-2xl border border-white/10 bg-surface-container/95 p-4 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 font-body-md text-body-md text-on-surface-variant transition-colors hover:bg-white/5 hover:text-on-surface"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="gradient-btn mt-2 rounded-xl px-4 py-3 text-center font-bold text-on-primary-container"
              onClick={closeMenu}
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
