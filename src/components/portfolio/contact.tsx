import { Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/constants/portfolio";
import Reveal from "./reveal";

export const Contact = () => {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-5 py-28 md:px-6">
      <Reveal className="relative overflow-hidden rounded-[32px] border border-brand/25 bg-[#0E1220] px-6 py-14 text-center md:px-12 md:py-20">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="animate-glow-pulse pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[640px] rounded-full bg-brand/20 blur-[120px]" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/[0.08] px-3 py-1.5 text-[13px] text-[#8FF0D6]">
            <span className="h-2 w-2 rounded-full bg-mint" /> {siteConfig.availability}
          </span>
          <h2 className="font-heading text-4xl font-bold tracking-[-0.03em] text-white text-balance md:text-6xl">
            Let&apos;s build something meaningful.
          </h2>
          <p className="text-base leading-relaxed text-fg-muted md:text-lg">{siteConfig.contactText}</p>
          <div className="mt-3 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <a
              href={siteConfig.email}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand px-6 py-3.5 font-semibold text-ink shadow-[0_10px_40px_-10px_rgba(110,155,255,0.7)] transition-transform hover:-translate-y-0.5"
            >
              <span className="animate-beam pointer-events-none absolute inset-y-0 left-0 w-1/4 skew-x-[-20deg] bg-white/30" aria-hidden="true" />
              <Mail className="relative h-4 w-4" aria-hidden="true" /> <span className="relative">{siteConfig.emailAddress}</span>
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 px-6 py-3.5 text-white hover:border-white/30"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
            </a>
            <a
              href={siteConfig.cvUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 px-6 py-3.5 text-white hover:border-white/30"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download CV
            </a>
          </div>
          <div className="mt-4 flex items-center gap-6 text-sm text-fg-muted">
            <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
              <Github className="h-4 w-4" aria-hidden="true" /> GitHub
            </a>
            <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
              <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
            </a>
          </div>
          <p className="text-[13px] text-fg-subtle">{siteConfig.location}</p>
        </div>
      </Reveal>
    </section>
  );
};

export default Contact;
