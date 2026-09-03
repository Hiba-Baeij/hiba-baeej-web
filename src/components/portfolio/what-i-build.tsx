import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Building2, Rocket, Sparkles, Layers } from "lucide-react";
import { whatIBuild } from "@/constants/portfolio";

const icons = [Building2, Rocket, Sparkles, Layers];

export const WhatIBuild = () => {
  return (
    <section id="work" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">What I Build</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Capabilities, not just screens</h2>
      <BentoGrid className="mt-10 mx-auto">
        {whatIBuild.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <BentoGridItem
              key={item.title}
              title={item.title}
              description={item.description}
              header={
                <div className="flex h-full min-h-[8rem] items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                  <Icon className="h-10 w-10 text-[#3b82f6]/70" />
                </div>
              }
              className={item.emphasis ? "md:col-span-2 lg:col-span-2 border-[#3b82f6]/40" : "border-white/10"}
            />
          );
        })}
      </BentoGrid>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {whatIBuild.flatMap((c) => c.keywords).map((k) => (
          <span key={k} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
            {k}
          </span>
        ))}
      </div>
    </section>
  );
};

export default WhatIBuild;