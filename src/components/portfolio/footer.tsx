import Link from "next/link";
import { siteConfig } from "@/constants/portfolio";

export const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand font-heading text-xs font-extrabold text-ink">HB</span>
          <div>
            <p className="font-heading font-bold text-white">{siteConfig.name}</p>
            <p className="text-xs text-fg-subtle">{siteConfig.roleLong}</p>
          </div>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-muted">
          <Link href="/work" className="hover:text-white">Work</Link>
          <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
          <a href={siteConfig.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
          <a href={siteConfig.email} className="hover:text-white">Email</a>
          <a href={siteConfig.cvUrl} download className="hover:text-white">CV</a>
        </nav>
        <p className="text-xs text-fg-subtle">© {new Date().getFullYear()} {siteConfig.name}</p>
      </div>
    </footer>
  );
};

export default Footer;
