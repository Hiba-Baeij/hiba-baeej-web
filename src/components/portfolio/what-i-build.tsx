import { Building2, Layers, Rocket, Sparkles } from "lucide-react";
import { whatIBuild } from "@/constants/portfolio";
import { cn } from "@/utils";
import SectionHeading from "./section-heading";
import { SpotlightCard, Stagger } from "./motion";

const icons = [Building2, Rocket, Sparkles, Layers];

export const WhatIBuild = () => {
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-5 pt-28 md:px-6">
      <SectionHeading
        eyebrow="What I Build"
        title="The kinds of projects I take on"
        description="Most of my work falls into one of these four."
      />
      <Stagger className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3" stagger={0.1}>
        {whatIBuild.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <SpotlightCard
              key={item.title}
              as="article"
              className={cn("surface transition-colors hover:border-white/15", item.emphasis && "md:col-span-2")}
            >
              <div className="flex h-full flex-col gap-4 p-7">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/12 text-brand transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-fg-subtle">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white md:text-2xl">{item.title}</h3>
                <p className="max-w-xl text-[15px] leading-relaxed text-fg-muted">{item.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {item.keywords.map((k) => (
                    <span key={k} className="chip">
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </Stagger>
    </section>
  );
};

export default WhatIBuild;
