import { TracingBeam } from "@/components/ui/tracing-beam";
import { howIWorkSteps } from "@/constants/portfolio";

export const HowIWork = () => {
  return (
    <section id="how-i-work" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">How I Work</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">A repeatable engineering process</h2>
      <TracingBeam className="mt-10">
        <div className="flex flex-col gap-10">
          {howIWorkSteps.map((step, i) => (
            <div key={step.title} className="relative pl-8">
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#3b82f6]/40 bg-[#3b82f6]/10 text-xs text-white">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-white/60">{step.description}</p>
            </div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
};

export default HowIWork;