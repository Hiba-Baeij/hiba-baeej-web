import { HoverEffect } from "@/components/ui/card-hover-effect";
import { repos, siteConfig } from "@/constants/portfolio";

export const GithubSection = () => {
  const items = repos.map((r) => ({
    title: r.name,
    description: r.description,
    link: siteConfig.githubUrl,
  }));

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-20 md:px-8" aria-label="Engineering activity">
      <p className="text-xs font-medium uppercase tracking-widest text-[#3b82f6]">GitHub / Engineering Activity</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Actively building in public</h2>
      <p className="mt-3 text-sm text-white/40">
        Live repository data will be wired once the GitHub integration is configured.
      </p>
      <HoverEffect items={items} className="mt-8 grid-cols-1 md:grid-cols-3" />
    </section>
  );
};

export default GithubSection;