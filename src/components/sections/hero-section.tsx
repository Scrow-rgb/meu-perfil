import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { ShaderBackground } from "@/components/ui/shader-background";
import { heroImage } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
      aria-labelledby="hero-title"
    >
      <ShaderBackground className="opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]" />

      <div className="relative z-10 mx-auto grid max-w-container-max-width grid-cols-1 items-center gap-12 px-gutter lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="font-label-sm text-label-sm uppercase tracking-widest">
              Disponível para freelas
            </span>
          </div>

          <h1
            id="hero-title"
            className="mb-6 font-display-lg text-display-lg-mobile leading-tight md:text-display-lg"
          >
            Olá, eu sou <span className="italic text-primary">Caio</span>
          </h1>

          <p className="mb-10 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
            Estudante de Engenharia de Computação, técnico de redes e
            freelancer em programação, criando sites, automações e soluções web
            sob demanda.
          </p>

          <div className="flex flex-wrap gap-4">
            <ButtonLink href="#projects">
              Ver Projetos <ArrowRight aria-hidden size={20} />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Entrar em Contato
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal className="relative lg:col-span-5" delay={0.2}>
          <div className="hero-profile-card group relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 430px, 100vw"
              className="object-cover grayscale"
            />
            <Image
              src={heroImage.src}
              alt=""
              fill
              aria-hidden
              sizes="(min-width: 1024px) 430px, 100vw"
              className="hero-profile-color object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-primary/20 blur-[80px]" />
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-secondary/20 blur-[80px]" />
        </Reveal>
      </div>
    </section>
  );
}
