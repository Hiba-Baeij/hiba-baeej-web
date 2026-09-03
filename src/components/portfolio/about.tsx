import { siteConfig } from "@/constants/portfolio";
import { aboutText } from "@/constants/portfolio";

export const About = () => {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">About</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
            Engineering products, not just interfaces.
          </h2>
          <div className="mt-6 space-y-4 text-white/60">
            {aboutText.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-xs uppercase tracking-widest text-white/40">Core Focus</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Node.js", "AI-Assisted Engineering"].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-white/70">
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-white/10 bg-[#010104] p-6">
            <p className="text-sm leading-relaxed text-white/60">“{siteConfig.headline}”</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;