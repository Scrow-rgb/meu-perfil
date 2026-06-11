import { MessageCircle } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { contactLinks } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-section-gap-mobile md:py-section-gap-desktop"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-container-max-width px-gutter">
        <Reveal className="relative overflow-hidden rounded-[3rem] p-12 text-center glass-card md:p-24">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[150px]" />

          <h2
            id="contact-title"
            className="relative z-10 mb-8 font-display-lg text-display-lg-mobile md:text-headline-xl"
          >
            Vamos construir algo <br className="hidden md:block" />
            <span className="italic text-primary">incrível juntos.</span>
          </h2>

          <div className="relative z-10 mb-12 flex flex-wrap justify-center gap-6">
            {contactLinks.map((link) => {
              const Icon = link.icon;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold transition-all hover:bg-white/10"
                >
                  <Icon aria-hidden className="h-5 w-5 text-primary" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          <Link
            href="https://wa.me/5531999898679"
            className="gradient-btn relative z-10 inline-flex items-center justify-center gap-3 rounded-2xl px-12 py-5 text-lg font-extrabold uppercase tracking-wider text-on-primary-container"
            aria-label="Iniciar conversa no WhatsApp"
          >
            <MessageCircle aria-hidden size={22} />
            Iniciar Conversa no WhatsApp
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
