import { Bot, Code2, Database, Layers3, Wrench } from "lucide-react";
import { expertiseGroups } from "@/constants/portfolio";
import { cn } from "@/utils";
import SectionHeading from "./section-heading";
import { SpotlightCard, Stagger, StaggerItem } from "./motion";

const icons = [Code2, Database, Wrench, Bot, Layers3];

export const Expertise = () => {
  return (
    <section id="expertise" className="mx-auto w-full max-w-6xl px-5 pt-28 md:px-6">
      <SectionHeading
        eyebrow="Engineering Expertise"
        title="Technical depth without the list dump"
        description="The tools I use every day, grouped by where they sit in the product."
      />
      <Stagger className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6" stagger={0.1}>
        {expertiseGroups.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <SpotlightCard
              key={group.title}
              className={cn("surface transition-colors hover:border-white/15", i < 2 ? "lg:col-span-3" : "lg:col-span-2")}
            >
              <div className="flex flex-col gap-5 p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-brand">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-lg font-bold text-white">{group.title}</h3>
              </div>
              <Stagger className="flex flex-wrap gap-2" stagger={0.035}>
                {group.skills.map((s) => (
                  <StaggerItem
                    key={s}
                    as="span"
                    pop
                    className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-[13px] text-[#C2C8D3] transition-colors hover:border-brand/40 hover:text-white"
                  >
                    {s}
                  </StaggerItem>
                ))}
              </Stagger>
              </div>
            </SpotlightCard>
          );
        })}
      </Stagger>
    </section>
  );
};

export default Expertise;
