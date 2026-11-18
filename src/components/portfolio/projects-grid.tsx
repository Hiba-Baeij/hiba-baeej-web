"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projectGroups, type Project, type ProjectGroup } from "@/constants/portfolio";
import { ProjectShot } from "./project-shot";
import { BrandMark } from "./brand-mark";
import Reveal from "./reveal";
import { cn } from "@/utils";

type Filter = "all" | ProjectGroup;

export const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  const [filter, setFilter] = useState<Filter>("all");

  const filters = useMemo(() => {
    const groups = projectGroups
      .map((g) => ({ ...g, count: projects.filter((p) => p.group === g.id).length }))
      .filter((g) => g.count > 0);
    return [{ id: "all" as Filter, label: "All", count: projects.length }, ...groups];
  }, [projects]);

  const visible = filter === "all" ? projects : projects.filter((p) => p.group === filter);

  return (
    <>
      <div role="tablist" aria-label="Filter projects" className="mt-10 flex flex-wrap gap-2">
        {filters.map((f) => {
          const active = f.id === filter;
          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f.id)}
              className={cn(
                "inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors",
                active
                  ? "border-brand/50 bg-brand/15 text-white"
                  : "border-line bg-surface-2 text-fg-muted hover:border-white/15 hover:text-white",
              )}
            >
              {f.label}
              <span className={cn("font-mono text-xs", active ? "text-brand" : "text-fg-subtle")}>{f.count}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {visible.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.06}>
            <Link
              href={`/work/${p.slug}`}
              className="surface group flex h-full flex-col overflow-hidden p-2 transition-colors hover:border-white/15"
            >
              <ProjectShot image={p.cover} kind={p.visual.kind} title={p.title} priority={i < 2} sizes="(min-width: 768px) 560px, 100vw" />
              <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <BrandMark logo={p.logo} title={p.title} />
                  <div className="min-w-0">
                    <p className="font-mono text-xs uppercase tracking-[0.1em] text-fg-subtle">{p.category}</p>
                    <h2 className="font-heading text-2xl font-bold text-white">{p.title}</h2>
                  </div>
                </div>
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
    </>
  );
};

export default ProjectsGrid;
