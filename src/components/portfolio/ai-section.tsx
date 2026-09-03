import { CardSpotlight } from "@/components/ui/card-spotlight";
import { aiCapabilities, aiWorkflowSteps } from "@/constants/portfolio";
import { ArrowDown } from "lucide-react";

export const AiSection = () => {
  return (
    <section id="ai" className="relative mx-auto w-full max-w-7xl px-4 py-20 md:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%)]" />
      <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">AI &amp; Agentic Engineering</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Building with AI, not just using AI.</h2>
      <p className="mt-4 max-w-2xl text-white/60">
        I use AI as an engineering multiplier to automate repetitive work, accelerate implementation, and
        improve development velocity while keeping architecture, business logic, security, and quality under
        engineering control.
      </p>

      <CardSpotlight className="mt-10">
        <div className="flex flex-col items-center gap-2">
          {aiWorkflowSteps.map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <div className="rounded-lg border border-[#3b82f6]/40 bg-[#3b82f6]/10 px-4 py-2 text-sm text-white">
                {step}
              </div>
              {i < aiWorkflowSteps.length - 1 && <ArrowDown className="h-4 w-4 text-white/40" />}
            </div>
          ))}
        </div>
      </CardSpotlight>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {aiCapabilities.map((c) => (
          <span key={c} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-white/70">
            {c}
          </span>
        ))}
      </div>
    </section>
  );
};

export default AiSection;