import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { timelineItems } from "@/data/portfolio";

export function TimelineSection() {
  return (
    <section
      id="timeline"
      className="relative bg-surface-container-lowest py-section-gap-mobile md:py-section-gap-desktop"
      aria-labelledby="timeline-title"
    >
      <div className="mx-auto max-w-container-max-width px-gutter">
        <Reveal className="mb-20 text-center">
          <h2 id="timeline-title" className="mb-4 font-headline-xl text-headline-xl">
            Trajetória <span className="text-primary">Profissional</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            A evolução técnica através dos anos.
          </p>
        </Reveal>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-0 left-0 top-0 w-px -translate-x-1/2 bg-white/10 md:left-1/2" />

          {timelineItems.map((item, index) => (
            <Reveal
              key={item.role}
              className={cn(
                "relative flex flex-col items-start pl-8 md:flex-row md:items-center md:pl-0",
                index !== timelineItems.length - 1 && "mb-16 md:mb-24",
              )}
              delay={index * 0.12}
            >
              <div
                className={cn(
                  "mb-4 md:mb-0 md:w-1/2",
                  item.align === "left"
                    ? "md:pr-12 md:text-right"
                    : "md:pr-12",
                  item.align === "right" && "hidden md:block",
                )}
              >
                {item.align === "left" && <TimelineContent item={item} />}
              </div>

              <div
                className={cn(
                  "absolute left-0 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_15px_rgba(221,183,255,0.6)] md:left-1/2",
                  index === 1 && "border-2 border-primary bg-primary/40",
                  index === 2 && "border-2 border-primary/40 bg-primary/20",
                )}
              />

              <div
                className={cn(
                  "md:w-1/2 md:pl-12",
                  item.align === "left" && "hidden md:block",
                )}
              >
                {item.align === "right" && <TimelineContent item={item} />}
              </div>

              <div className="md:hidden">
                {item.align === "right" && <TimelineContent item={item} />}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineContent({
  item,
}: {
  item: (typeof timelineItems)[number];
}) {
  return (
    <>
      <h3 className="font-headline-lg text-headline-lg text-primary">
        {item.role}
      </h3>
      <p className="mb-2 font-label-sm text-label-sm text-on-surface-variant">
        {item.meta}
      </p>
      <p className="text-on-surface-variant">{item.description}</p>
    </>
  );
}
