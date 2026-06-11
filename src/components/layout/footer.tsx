import Link from "next/link";

import { footerLinks } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="mt-20 w-full border-t border-white/5 bg-surface py-12">
      <div className="mx-auto flex max-w-container-max-width flex-col items-center justify-between gap-8 px-gutter md:flex-row">
        <Link
          href="#home"
          className="font-headline-lg text-headline-lg font-extrabold text-on-surface"
        >
          CAIO.LAB
        </Link>
        <p className="font-label-sm text-label-sm text-on-surface-variant">
          © 2024 CAIO.LAB — PROGRAMAÇÃO, REDES E FREELAS
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-bold text-on-surface-variant transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
