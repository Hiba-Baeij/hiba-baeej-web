import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/constants/portfolio";
import { ProjectVisual } from "./visuals";

export const FeaturedProjects = () => {
  return (
    <section id="featured" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">Featured Work</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Case studies, not screenshots</h2>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-1 transition-colors hover:border-white/25"
          >
            <ProjectVisual kind={p.visual.kind} />
            <div className="p-6">
              <p className="text-xs uppercase tracking-widest text-white/40">{p.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-sm text-white/60">{p.highlight}</p>
              <p className="mt-4 flex flex-wrap gap-2 text-xs text-white/40">
                {p.tech.join(" · ")}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#3b82f6]">
                View case study <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;