import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { techStackItems } from "@/data/portfolio";

export function TechStackSection() {
  return (
    <section className="relative overflow-hidden bg-surface-container-lowest/50 py-section-gap-mobile md:py-section-gap-desktop">
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-container-max-width px-gutter">
        <div className="mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <h2 className="mb-4 font-headline-xl text-headline-xl">
              Tech <span className="text-primary">Stack</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Ferramentas que venho usando nos estudos e nos freelas para tirar
              ideias do papel com código limpo e interfaces responsivas.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {techStackItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.label} delay={index * 0.06}>
                <GlassCard className="flex flex-col items-center gap-4 rounded-xl p-6 text-center transition-all">
                  <Icon aria-hidden className="h-10 w-10 text-primary" />
                  <span className="font-label-sm text-label-sm font-bold">
                    {item.label}
                  </span>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
