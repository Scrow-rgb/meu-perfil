import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { metrics } from "@/data/portfolio";

export function MetricsSection() {
  return (
    <Reveal
      as="section"
      id="metrics"
      className="py-section-gap-mobile md:py-section-gap-desktop"
      aria-labelledby="metrics-title"
    >
      <div className="mx-auto max-w-container-max-width px-gutter">
        <h2 id="metrics-title" className="sr-only">
          Resumo do perfil
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {metrics.map((metric) => (
            <GlassCard
              key={metric.label}
              className="rounded-2xl p-10 text-center"
            >
              <div className="mb-2 font-display-lg text-headline-xl text-primary">
                {metric.value}
              </div>
              <div className="font-label-sm text-label-sm uppercase text-on-surface-variant">
                {metric.label}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
