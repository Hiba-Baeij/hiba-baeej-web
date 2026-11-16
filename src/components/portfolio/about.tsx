import Image from "next/image";
import { aboutFacts, aboutText, siteConfig } from "@/constants/portfolio";
import SectionHeading from "./section-heading";
import Reveal from "./reveal";
import { Stagger, StaggerItem } from "./motion";

export const About = () => {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-5 pt-28 md:px-6">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <SectionHeading eyebrow="About" title="Mostly ERPs, dashboards and the systems behind them." />
          <Reveal className="mt-6 space-y-4 text-base leading-relaxed text-fg-muted md:text-[17px]">
            {aboutText.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Reveal>
        </div>
        <Reveal delay={0.1} className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-2xl border border-line">
            <Image
              src="/images/about/hiba-baeij.jpg"
              alt={`Portrait of ${siteConfig.name}`}
              width={1195}
              height={896}
              unoptimized
              className="h-auto w-full object-cover"
            />
          </div>
          <Stagger as="dl" stagger={0.1} className="overflow-hidden rounded-2xl border border-line">
            {aboutFacts.map((f) => (
              <StaggerItem
                key={f.label}
                className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-6 py-5 transition-colors last:border-b-0 hover:bg-white/[0.02]"
              >
                <dt className="text-sm text-fg-subtle">{f.label}</dt>
                <dd className="text-[15px] font-medium text-white">{f.value}</dd>
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
