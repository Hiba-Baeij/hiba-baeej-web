import { siteConfig } from "@/constants/portfolio";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 px-4 text-center md:px-8">
        <p className="font-medium text-white">{siteConfig.name}</p>
        <p className="text-sm text-white/40">{siteConfig.role}</p>
        <p className="text-xs text-white/30">
          © 2026 {siteConfig.name} · Built with Next.js, TypeScript, and modern web technologies.
        </p>
      </div>
    </footer>
  );
};

export default Footer;