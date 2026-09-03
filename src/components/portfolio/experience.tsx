import { Timeline } from "@/components/ui/timeline";
import { experienceRoles, education, softSkills, languages } from "@/constants/portfolio";

const educationEntry = {
  title: "Education",
  content: (
    <div>
      <p className="text-base font-semibold text-white">{education.degree}</p>
      <p className="text-sm text-white/60">
        {education.school} · {education.location}
      </p>
      <p className="mt-1 text-sm text-white/40">{education.period}</p>
      <div className="mt-4">
        <p className="text-xs uppercase tracking-widest text-white/40">Soft Skills</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {softSkills.map((s) => (
            <span key={s} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-xs uppercase tracking-widest text-white/40">Languages</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {languages.map((l) => (
            <span key={l.name} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
              {l.name} — {l.level}
            </span>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const Experience = () => {
  const data = [
    ...experienceRoles.map((r) => ({
      title: `${r.period}`,
      content: (
        <div>
          <p className="text-base font-semibold text-white">{r.title}</p>
          <p className="text-sm text-white/60">
            {r.company} · {r.location}
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/50">
            {r.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      ),
    })),
    educationEntry,
  ];

  return (
    <section id="experience" className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">Experience</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
        Five years across enterprise teams
      </h2>
      <Timeline data={data} />
    </section>
  );
};

export default Experience;