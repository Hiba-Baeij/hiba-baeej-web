import { ArrowUpRight, Github } from "lucide-react";
import { repos, siteConfig } from "@/constants/portfolio";
import SectionHeading from "./section-heading";
import { Stagger, StaggerItem } from "./motion";

export const GithubSection = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pt-28 md:px-6" aria-label="Engineering activity">
      <SectionHeading
        eyebrow="GitHub / Engineering Activity"
        title="Actively building in public"
        action={
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm text-white hover:border-white/30"
          >
            <Github className="h-4 w-4" aria-hidden="true" /> github.com/hiba-baeij
          </a>
        }
      />
      <Stagger className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3" stagger={0.1}>
        {repos.map((r) => (
          <StaggerItem key={r.name}>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="surface group flex h-full flex-col gap-3 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-lg font-bold text-white">{r.name}</span>
                <ArrowUpRight className="h-4 w-4 text-fg-subtle transition-colors transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </div>
              <p className="text-sm leading-relaxed text-fg-muted">{r.description}</p>
              <span className="mt-auto flex items-center gap-2 pt-2 text-xs text-fg-subtle">
                <span className="h-2.5 w-2.5 rounded-full bg-[#3178C6]" aria-hidden="true" />
                {r.language}
              </span>
            </a>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
};

export default GithubSection;
