import { metrics } from "@/constants/portfolio";
import { CountUp, SpotlightCard, Stagger } from "./motion";

export const Metrics = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pt-20 md:px-6" aria-label="Key numbers">
      <Stagger className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4" stagger={0.1}>
        {metrics.map((m) => (
          <SpotlightCard key={m.label} className="surface">
            <div className="flex flex-col gap-2 p-5 md:p-7">
              <CountUp value={m.value} className="font-heading text-3xl font-bold tracking-tight text-white md:text-[44px]" />
              <span className="text-xs leading-snug text-fg-muted md:text-sm">{m.label}</span>
            </div>
          </SpotlightCard>
        ))}
      </Stagger>
    </section>
  );
};

export default Metrics;
