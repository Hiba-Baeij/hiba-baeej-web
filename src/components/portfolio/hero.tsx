import Link from "next/link";
import { ArrowRight, Download, Github, Mail } from "lucide-react";
import { siteConfig } from "@/constants/portfolio";
import { FadeIn, Float, SplitWords, TypedLines } from "./motion";

const S = ({ c, children }: { c: string; children: React.ReactNode }) => <span className={c}>{children}</span>;
const str = "text-[#C3E88D]";

const codeLines = [
  <>
    <S c="text-[#C792EA]">export const</S> <S c="text-[#82AAFF]">engineer</S> = {"{"}
  </>,
  <>
    {"  "}name: <S c={str}>&quot;{siteConfig.name}&quot;</S>,
  </>,
  <>
    {"  "}role: <S c={str}>&quot;{siteConfig.role}&quot;</S>,
  </>,
  <>
    {"  "}experience: <S c="text-[#F78C6C]">5</S>, <S c="text-[#6B7280]">{"// years"}</S>
  </>,
  <>
    {"  "}builds: [<S c={str}>&quot;SaaS&quot;</S>, <S c={str}>&quot;ERP&quot;</S>, <S c={str}>&quot;AI apps&quot;</S>],
  </>,
  <>
    {"  "}stack: [<S c={str}>&quot;React&quot;</S>, <S c={str}>&quot;Vue 3&quot;</S>, <S c={str}>&quot;NestJS&quot;</S>, <S c={str}>&quot;Laravel&quot;</S>],
  </>,
  <>
    {"  "}remote: <S c="text-[#F78C6C]">true</S>,
  </>,
  <>{"};"}</>,
];

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="animate-aurora pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] rounded-full bg-brand/10 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-5 pb-20 pt-32 md:px-6 md:pt-40 lg:grid-cols-[1.15fr_1fr] lg:pb-28 [&>*]:min-w-0">
        <div className="flex flex-col gap-6">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/[0.08] px-3 py-1.5 text-[13px] text-[#8FF0D6]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
              </span>
              {siteConfig.availability}
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="eyebrow leading-relaxed">{siteConfig.roleLong}</p>
          </FadeIn>
          <SplitWords
            text={siteConfig.headline}
            highlight="scales"
            highlightClassName="text-brand"
            delay={0.2}
            className="font-heading text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[64px]"
          />
          <FadeIn delay={0.75}>
            <p className="max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">{siteConfig.supporting}</p>
          </FadeIn>
          <FadeIn delay={0.9} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/#featured"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand px-6 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              <span className="animate-beam pointer-events-none absolute inset-y-0 left-0 w-1/4 skew-x-[-20deg] bg-white/30" aria-hidden="true" />
              <span className="relative">View my work</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <a
              href={siteConfig.cvUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 px-6 py-3.5 font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.03]"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download CV
            </a>
          </FadeIn>
          <FadeIn delay={1.05} className="flex flex-wrap gap-2 pt-1">
            {siteConfig.techLine.map((t) => (
              <span key={t} className="chip transition-colors hover:border-brand/40 hover:text-white">
                {t}
              </span>
            ))}
          </FadeIn>
        </div>

        <FadeIn delay={0.35} y={32} className="relative mx-auto w-full max-w-lg">
          <div className="overflow-hidden rounded-[20px] border border-white/8 bg-surface shadow-[0_40px_120px_-20px_rgba(110,155,255,0.25)]">
            <div className="flex items-center gap-2 border-b border-line px-4 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/80" />
              <span className="ml-2 font-mono text-xs text-fg-subtle">hiba.config.ts</span>
            </div>
            <div className="overflow-x-auto px-5 pb-12 pt-6">
              <TypedLines lines={codeLines} delay={0.8} className="font-mono text-[13px] leading-[1.9] text-[#C9CFDA] sm:text-sm" />
            </div>
          </div>
          <Float delay={2.2} className="absolute -bottom-8 -left-3 sm:-left-8">
            <div className="flex flex-col rounded-2xl border border-white/10 bg-[#111420]/95 px-5 py-4 shadow-xl backdrop-blur">
              <span className="font-heading text-2xl font-bold text-white">100K+</span>
              <span className="text-xs text-fg-muted">requests / year · Safeer Digital</span>
            </div>
          </Float>
          <Float delay={2.6} className="absolute -right-2 -top-6 hidden sm:block">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111420]/95 px-4 py-3 shadow-xl backdrop-blur">
              <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-fg-muted hover:text-white">
                <Github className="h-5 w-5" />
              </a>
              <a href={siteConfig.email} aria-label="Email" className="text-fg-muted hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </Float>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
