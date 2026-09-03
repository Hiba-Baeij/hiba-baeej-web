import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { expertiseGroups } from "@/constants/portfolio";

export const Expertise = () => {
  return (
    <section id="expertise" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">Engineering Expertise</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Technical depth without the list dump</h2>
      <BentoGrid className="mt-10 mx-auto">
        {expertiseGroups.map((group) => (
          <BentoGridItem
            key={group.title}
            title={group.title}
            description=""
            header={
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60">
                    {s}
                  </span>
                ))}
              </div>
            }
            className="border-white/10"
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Expertise;