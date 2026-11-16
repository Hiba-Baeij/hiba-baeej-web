import { GraduationCap, Languages } from "lucide-react";
import { education, experienceRoles, languages } from "@/constants/portfolio";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";
import { ScrollRail, Stagger, StaggerItem } from "./motion";

export const Experience = () => {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-5 pt-28 md:px-6">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />
      <ScrollRail className="mt-12">
        <ol className="flex flex-col">
          {experienceRoles.map((r) => (
            <li key={r.company + r.period} className="relative pl-8 md:pl-12">
              <span
                className={
                  r.current
                    ? "absolute left-0 top-[38px] flex h-[11px] w-[11px] items-center justify-center rounded-full bg-mint ring-4 ring-mint/15 md:h-[15px] md:w-[15px]"
                    : "absolute left-0 top-[38px] h-[11px] w-[11px] rounded-full border-2 border-brand bg-ink md:h-[15px] md:w-[15px]"
                }
                aria-hidden="true"
              />
              <Reveal className="grid gap-4 border-b border-line py-8 md:grid-cols-[240px_1fr] md:gap-10">
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[13px] text-fg-subtle">
                    {r.period}
                    {r.current && (
                      <span className="ml-2 rounded-full bg-mint/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[#8FF0D6]">Now</span>
                    )}
                  </span>
                  <span className="font-heading text-2xl font-bold text-white">{r.company}</span>
                  <span className="text-sm text-fg-muted">
                    {r.title} · {r.location}
                  </span>
                </div>
                <div>
                  <Stagger as="ul" className="space-y-2.5" stagger={0.08}>
                    {r.highlights.map((h) => (
                      <StaggerItem key={h} as="li" className="relative pl-5 text-[15px] leading-relaxed text-[#C2C8D3]">
                        <span className="absolute left-0 top-[11px] h-1 w-2.5 rounded-full bg-brand/60" aria-hidden="true" />
                        {h}
                      </StaggerItem>
                    ))}
                  </Stagger>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {r.tech.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </ScrollRail>
      <Stagger className="grid gap-4 pt-8 md:grid-cols-2" stagger={0.12}>
        <StaggerItem className="surface flex items-start gap-4 p-6">
          <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle">Education</p>
            <p className="mt-2 font-semibold text-white">{education.degree}</p>
            <p className="mt-1 text-sm text-fg-muted">
              {education.school} · {education.period}
            </p>
          </div>
        </StaggerItem>
        <StaggerItem className="surface flex items-start gap-4 p-6">
          <Languages className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle">Languages</p>
            {languages.map((l) => (
              <p key={l.name} className="mt-2 text-white">
                {l.name} <span className="text-fg-muted">— {l.level}</span>
              </p>
            ))}
          </div>
        </StaggerItem>
      </Stagger>
    </section>
  );
};

export default Experience;
