import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/constants/portfolio";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="relative mx-auto w-full max-w-7xl px-4 py-24 md:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-white md:text-5xl">
          Let&apos;s build something meaningful.
        </h2>
        <p className="mt-5 text-white/60">{siteConfig.contactText}</p>
        <p className="mt-3 text-sm text-white/40">
          Available for remote opportunities and engineering collaborations.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg">Start a Conversation</Button>
          </Link>
          <Link href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline">
              View GitHub
            </Button>
          </Link>
        </div>
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-white/50">
          <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={siteConfig.email} className="flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;