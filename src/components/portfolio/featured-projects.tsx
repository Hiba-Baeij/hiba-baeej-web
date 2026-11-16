import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/constants/portfolio";
import { ProjectShot } from "./project-shot";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";
import { Parallax, Stagger, StaggerItem } from "./motion";

export const FeaturedProjects = () => {
  return (
    <section id="featured" className="mx-auto w-full max-w-6xl px-5 pt-28 md:px-6">
      <SectionHeading
        eyebrow="Featured Work"
        title="Selected projects"
        description="Each one covers the problem, how I built it and what came out of it."
        action={
          <Link href="/work" className="group inline-flex items-center gap-2 text-sm font-medium text-fg-muted hover:text-white">
            All projects <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        }
      />
      <div className="mt-12 flex flex-col gap-5">
        {projects.slice(0, 4).map((p, i) => (
          <Reveal key={p.slug}>
            <Link
              href={`/work/${p.slug}`}
              className="surface group grid gap-8 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/15 md:p-8 lg:grid-cols-2 lg:items-center"
            >
              <Parallax offset={24} className={i % 2 === 1 ? "lg:order-2" : undefined}>
                <ProjectShot
                  image={p.cover}
                  kind={p.visual.kind}
                  title={p.title}
                  priority={i === 0}
                  className="transition-all duration-700 group-hover:scale-[1.02] group-hover:border-brand/30 group-hover:shadow-[0_30px_80px_-30px_rgba(110,155,255,0.45)]"
                />
              </Parallax>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-fg-subtle">{p.category}</p>
                  <ArrowUpRight className="h-5 w-5 text-fg-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-fg-muted md:text-base">{p.description}</p>
                <Stagger className="grid grid-cols-3 gap-2.5" stagger={0.12}>
                  {p.impact.map((s) => (
                    <StaggerItem key={s.label} pop className="rounded-xl border border-line bg-surface-2 p-3 md:p-4">
                      <p className="font-heading text-lg font-bold text-white md:text-xl">{s.value}</p>
                      <p className="mt-1 text-[11px] leading-snug text-fg-muted md:text-xs">{s.label}</p>
                    </StaggerItem>
                  ))}
                </Stagger>
                <div className="flex flex-wrap gap-2">
                  {p.tech.slice(0, 5).map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Read case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
