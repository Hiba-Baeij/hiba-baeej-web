import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects, selectedProducts } from "@/constants/portfolio";
import { ProjectVisual } from "@/components/portfolio/visuals";
import { ProjectShot } from "@/components/portfolio/project-shot";
import Reveal from "@/components/portfolio/reveal";
import { generateMetadata } from "@/utils";

export const metadata = generateMetadata({
  title: "Work — Hiba Baeij",
  description:
    "Case studies by Hiba Baeij: ASAPI ERP, Safeer Digital, SmartDocs AI, e-Dukan and JetOrder — SaaS, ERP and AI platforms built with React, Vue 3, NestJS and Laravel.",
});

const WorkPage = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-28 pt-32 md:px-6 md:pt-40">
      <Reveal>
        <p className="eyebrow">Work</p>
        <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-white md:text-6xl">Selected case studies</h1>
        <p className="section-desc">
          Enterprise ERP, operations platforms, AI and SaaS products — each with the problem, the architecture and the outcome.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.06}>
            <Link
              href={`/work/${p.slug}`}
              className="surface group flex h-full flex-col overflow-hidden p-2 transition-colors hover:border-white/15"
            >
              <ProjectShot image={p.cover} kind={p.visual.kind} title={p.title} priority={i < 2} sizes="(min-width: 768px) 560px, 100vw" />
              <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-fg-subtle">{p.category}</p>
                <h2 className="font-heading text-2xl font-bold text-white">{p.title}</h2>
                <p className="text-[15px] leading-relaxed text-fg-muted">{p.highlight}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-semibold text-brand">
                  Read case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-24">
        <p className="eyebrow">Freelance</p>
        <h2 className="section-title">Selected Products</h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {selectedProducts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05} className="surface flex flex-col gap-3 p-2">
            <ProjectVisual kind={p.visual.kind} />
            <div className="flex flex-col gap-2 p-3">
              <h3 className="font-heading text-lg font-bold text-white">{p.title}</h3>
              <p className="text-sm leading-relaxed text-fg-muted">{p.description}</p>
              <p className="pt-1 font-mono text-xs text-fg-subtle">{p.tech.join(" · ")}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
