import { ArrowUpRight, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  if (project.isFeatured) {
    return (
      <Reveal className="lg:col-span-2" delay={index * 0.12}>
        <article className="featured-project-card group relative flex flex-col overflow-hidden rounded-3xl glass-card md:flex-row">
          <div className="featured-project-image relative aspect-video overflow-hidden md:w-1/2 md:aspect-auto">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-primary/20" />
          </div>

          <div className="relative flex flex-col justify-center p-8 md:w-1/2 md:p-12">
            <span className="featured-project-kicker mb-5 w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-label-sm text-[10px] uppercase tracking-[0.24em] text-primary">
              Projeto em destaque
            </span>
            <ProjectTags tags={project.tags} />
            <h3 className="mb-4 font-headline-xl text-headline-xl">
              {project.title}
            </h3>
            <p className="mb-8 font-body-lg text-body-lg text-on-surface-variant">
              {project.description}
            </p>
            <Link
              href={project.href}
              className="featured-project-link flex w-fit items-center gap-3 rounded-xl border border-primary/30 px-8 py-4 font-bold text-primary transition-all hover:bg-primary/10"
            >
              Ver Repositório <Terminal aria-hidden size={20} />
            </Link>
          </div>
        </article>
      </Reveal>
    );
  }

  return (
    <Reveal delay={index * 0.12}>
      <article className="project-card group relative overflow-hidden rounded-3xl glass-card">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1024px) 584px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
        </div>

        <div className="p-8">
          <ProjectTags tags={project.tags} />
          <h3 className="mb-3 font-headline-lg text-headline-lg">
            {project.title}
          </h3>
          <p className="mb-6 font-body-md text-on-surface-variant">
            {project.description}
          </p>
          <Link
            href={project.href}
            className="inline-flex items-center gap-2 font-bold text-primary transition-all hover:gap-4"
          >
            Visualizar Case <ArrowUpRight aria-hidden size={20} />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-secondary/10 px-3 py-1 font-label-sm text-[10px] uppercase text-secondary"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-section-gap-mobile md:py-section-gap-desktop"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-container-max-width px-gutter">
        <Reveal className="mb-16">
          <h2 id="projects-title" className="mb-4 font-headline-xl text-headline-xl">
            Projetos <span className="text-primary">Destaque</span>
          </h2>
          <div className="h-1 w-24 bg-primary" />
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(project.isFeatured && "lg:col-span-2")}
            >
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
