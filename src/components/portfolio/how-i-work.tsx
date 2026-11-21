import { howIWorkSteps } from "@/constants/portfolio";
import SectionHeading from "./section-heading";
import { Stagger, StaggerItem } from "./motion";

export const HowIWork = () => {
  return (
    <section id="how-i-work" className="mx-auto w-full max-w-6xl px-5 pt-28 md:px-6">
      <SectionHeading
        eyebrow="How I Work"
        title="How a project usually goes"
        description="Roughly the same steps every time, adjusted to the team and the deadline."
      />
      <div className="mt-12">
        <Stagger as="ol" stagger={0.1} className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {howIWorkSteps.map((step, i) => (
            <StaggerItem key={step.title} as="li" className="group relative flex flex-col gap-3 bg-ink/55 p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-surface">
              <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand to-mint transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
              <span className="font-mono text-[13px] text-brand transition-transform duration-300 group-hover:translate-x-1">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-heading text-lg font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-fg-muted">{step.description}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default HowIWork;
