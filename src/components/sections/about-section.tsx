import { Lightbulb } from "lucide-react";
import Image from "next/image";

import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { aboutImage } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section
      id="about"
      className="overflow-hidden py-section-gap-mobile md:py-section-gap-desktop"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid max-w-container-max-width grid-cols-1 items-center gap-20 px-gutter lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <h2 id="about-title" className="mb-6 font-headline-xl text-headline-xl">
            Além do <span className="text-primary">Código</span>
          </h2>
          <p className="mb-6 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            Minha jornada no desenvolvimento começou pela curiosidade de
            entender como as coisas funcionam sob o capô. Hoje, vejo o
            desenvolvimento como uma forma de arte funcional, onde a precisão
            técnica encontra a experiência do usuário.
          </p>
          <p className="mb-8 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            Acredito em arquiteturas limpas, código bem documentado e automação
            como pilares para o sucesso de qualquer produto digital moderno.
            Quando não estou codando, estou explorando novas tecnologias ou
            contribuindo para o ecossistema open source.
          </p>

          <GlassCard className="flex items-start gap-4 rounded-2xl p-6">
            <Lightbulb aria-hidden className="h-8 w-8 shrink-0 text-primary" />
            <div>
              <h3 className="mb-1 font-bold text-on-surface">
                Filosofia de Trabalho
              </h3>
              <p className="text-sm text-on-surface-variant">
                &quot;Se pode ser feito manualmente, pode ser automatizado. Se
                pode ser automatizado, deve ser escalável.&quot;
              </p>
            </div>
          </GlassCard>
        </Reveal>

        <Reveal className="relative order-1 lg:order-2">
          <div className="relative z-10 aspect-square overflow-hidden rounded-[3rem] border border-white/5">
            <Image
              src={aboutImage.src}
              alt={aboutImage.alt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -inset-4 -z-10 translate-x-4 translate-y-4 rounded-[3.5rem] border-2 border-primary/20" />
        </Reveal>
      </div>
    </section>
  );
}
