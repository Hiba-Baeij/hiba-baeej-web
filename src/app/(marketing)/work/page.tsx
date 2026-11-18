import { ArrowUpRight } from "lucide-react";
import { projects, selectedProducts } from "@/constants/portfolio";
import { ProjectVisual } from "@/components/portfolio/visuals";
import { ProjectsGrid } from "@/components/portfolio/projects-grid";
import Reveal from "@/components/portfolio/reveal";
import { BrandMark } from "@/components/portfolio/brand-mark";
import { generateMetadata } from "@/utils";

export const metadata = generateMetadata({
  title: "Work — Hiba Baeij",
  path: "/work",
  description:
    "Case studies by Hiba Baeij: ASAPI ERP, Safeer Digital, SmartDocs AI, e-Dukan and JetOrder. ERP, SaaS and AI projects built with React, Vue 3, NestJS and Laravel.",
});

const WorkPage = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-28 pt-32 md:px-6 md:pt-40">
      <Reveal>
        <p className="eyebrow">Work</p>
        <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-white md:text-6xl">All projects</h1>
        <p className="section-desc">
          ERP, operations, AI and SaaS projects. Pick a category to narrow the list. Each page covers the problem, the architecture and the outcome.
        </p>
      </Reveal>

      <ProjectsGrid projects={projects} />

      <Reveal className="mt-24">
        <p className="eyebrow">Freelance</p>
        <h2 className="section-title">Selected Products</h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {selectedProducts.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05} className="surface flex flex-col gap-3 p-2">
            <ProjectVisual kind={p.visual.kind} />
            <div className="flex flex-col gap-2 p-3">
              <div className="flex items-center gap-3">
                <BrandMark logo={p.logo} title={p.title} size="sm" />
                <h3 className="font-heading text-lg font-bold text-white">{p.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-fg-muted">{p.description}</p>
              <p className="pt-1 font-mono text-xs text-fg-subtle">{p.tech.join(" · ")}</p>
              {p.liveUrl && (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-brand hover:text-white"
                >
                  Visit live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default WorkPage;
