import { Bot, FileSearch, Workflow } from "lucide-react";
import { aiCapabilities, aiHighlights, aiWorkflowSteps } from "@/constants/portfolio";
import SectionHeading from "./section-heading";
import { SpotlightCard, Stagger, StaggerItem } from "./motion";

const highlightIcons = [FileSearch, Bot, Workflow];

export const AiSection = () => {
  return (
    <section id="ai" className="mx-auto w-full max-w-6xl px-5 pt-28 md:px-6">
      <div className="relative overflow-hidden rounded-[28px] border border-brand/25 bg-[#0B0E17] p-6 md:p-12">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/15 blur-[100px]" aria-hidden="true" />
        <SectionHeading
          eyebrow="AI & Agentic Engineering"
          title="Building with AI, not just using AI."
          description="I ship AI features customers can trust — RAG with cited answers, MCP servers for agent access — and use agentic workflows to deliver faster without losing control of architecture, security or quality."
        />

        <div className="relative mt-10">
          <div className="absolute left-[10%] right-[10%] top-[34px] hidden h-px overflow-hidden bg-brand/20 lg:block" aria-hidden="true">
            <div className="animate-beam h-full w-1/4 bg-gradient-to-r from-transparent via-brand to-transparent" />
          </div>
          <Stagger as="ol" className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5" stagger={0.12}>
            {aiWorkflowSteps.map((s, i) => (
              <StaggerItem key={s.title} as="li" className="flex h-full flex-col gap-1.5 rounded-2xl border border-line bg-[#111522] p-5 transition-colors hover:border-brand/40">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-brand/40 bg-[#0B0E17] font-mono text-[11px] text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 font-semibold text-white">{s.title}</span>
                <span className="text-[13px] leading-relaxed text-fg-muted">{s.description}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Stagger className="relative mt-4 grid grid-cols-1 gap-4 md:grid-cols-3" stagger={0.1}>
          {aiHighlights.map((h, i) => {
            const Icon = highlightIcons[i % highlightIcons.length];
            return (
              <SpotlightCard key={h.title} className="surface">
                <div className="p-6">
                  <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                  <h3 className="mt-4 font-heading text-lg font-bold text-white">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{h.description}</p>
                </div>
              </SpotlightCard>
            );
          })}
        </Stagger>

        <Stagger className="relative mt-8 flex flex-wrap gap-2" stagger={0.04}>
          {aiCapabilities.map((c) => (
            <StaggerItem key={c} as="span" pop className="chip">
              {c}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default AiSection;
