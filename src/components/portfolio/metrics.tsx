import { metrics } from "@/constants/portfolio";

export const Metrics = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 md:px-8" aria-label="Metrics">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col items-center gap-1 bg-[#010104] px-4 py-10 text-center">
            <span className="text-4xl font-semibold text-white md:text-5xl">{m.value}</span>
            <span className="text-sm text-white/50">{m.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Metrics;