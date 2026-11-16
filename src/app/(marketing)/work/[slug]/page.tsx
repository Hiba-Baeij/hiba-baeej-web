import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { projects, getProjectBySlug } from "@/constants/portfolio";
import { ProjectShot } from "@/components/portfolio/project-shot";
import Gallery from "@/components/portfolio/gallery";
import Reveal from "@/components/portfolio/reveal";
import { generateMetadata as baseMetadata } from "@/utils";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return baseMetadata({
    title: `${project.title} — Case study by Hiba Baeij`,
    description: project.description,
  });
}

const Block = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Reveal>
    <section className="border-t border-line pt-8">
      <h2 className="font-heading text-xl font-bold text-white md:text-2xl">{title}</h2>
      <div className="mt-4 text-[16px] leading-relaxed text-fg-muted">{children}</div>
    </section>
  </Reveal>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((c) => (
      <li key={c} className="flex gap-3">
        <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
        <span>{c}</span>
      </li>
    ))}
  </ul>
);

const ProjectPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const tour = (project.gallery ?? []).filter((g) => g.src !== project.cover?.src);

  return (
    <article className="mx-auto w-full max-w-6xl px-5 pb-28 pt-28 md:px-6 md:pt-36">
      <Link href="/work" className="inline-flex items-center gap-2 text-sm text-fg-muted hover:text-white">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to work
      </Link>

      <Reveal className="mt-8 max-w-3xl">
        <p className="eyebrow">{project.category}</p>
        <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-white md:text-6xl">{project.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-fg-muted">{project.description}</p>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/14 px-5 py-3 font-medium text-white transition-colors hover:border-white/30 hover:bg-white/[0.03]"
          >
            Visit live site <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </Reveal>

      <Reveal delay={0.1} className="mt-10 grid grid-cols-3 gap-3">
        {project.impact.map((s) => (
          <div key={s.label} className="surface p-4 md:p-6">
            <p className="font-heading text-2xl font-bold text-white md:text-4xl">{s.value}</p>
            <p className="mt-1 text-xs text-fg-muted md:text-sm">{s.label}</p>
          </div>
        ))}
      </Reveal>

      <Reveal delay={0.15} className="mt-6">
        <ProjectShot
          image={project.cover}
          kind={project.visual.kind}
          title={project.title}
          priority
          sizes="(min-width: 1024px) 1100px, 100vw"
          className="aspect-[16/9]"
        />
      </Reveal>

      {tour.length > 0 && (
        <section className="mt-16" aria-label="Product screenshots">
          <Reveal className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Product tour</p>
              <h2 className="mt-3 font-heading text-2xl font-bold text-white md:text-3xl">Inside {project.title}</h2>
            </div>
            <p className="text-sm text-fg-subtle">{tour.length} {tour.length === 1 ? "screen" : "screens"} · click to enlarge</p>
          </Reveal>
          <Gallery images={tour} title={project.title} />
        </section>
      )}

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[260px_1fr]">
        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle">Role</p>
            <p className="mt-2 text-white">{project.role}</p>
            <p className="text-sm text-fg-muted">{project.period}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-fg-subtle">Technologies</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <blockquote className="surface p-5 text-[15px] leading-relaxed text-white">“{project.highlight}”</blockquote>
        </aside>

        <div className="space-y-10">
          <Block title="Overview">
            <p>{project.caseStudy.overview}</p>
          </Block>
          <Block title="Business Problem">
            <p>{project.caseStudy.businessProblem}</p>
          </Block>
          <Block title="My Role">
            <p>{project.caseStudy.myRole}</p>
          </Block>
          <Block title="Technical Challenges">
            <List items={project.caseStudy.technicalChallenges} />
          </Block>
          <Block title="Key Engineering Decisions">
            <List items={project.caseStudy.keyDecisions} />
          </Block>
          <Block title="Contribution">
            <List items={project.contribution} />
          </Block>
          <Block title="Result / Impact">
            <p className="text-white">{project.caseStudy.result}</p>
          </Block>
        </div>
      </div>

      <div className="mt-20 grid gap-4 md:grid-cols-2">
        <Link href="/#contact" className="surface group flex flex-col gap-2 border-brand/30 bg-[#0E1220] p-7">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-brand">Have a similar problem?</span>
          <span className="flex items-center gap-2 font-heading text-2xl font-bold text-white">
            Let&apos;s talk <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
        <Link href={`/work/${next.slug}`} className="surface group flex flex-col gap-2 p-7 transition-colors hover:border-white/15">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">Next case study</span>
          <span className="flex items-center gap-2 font-heading text-2xl font-bold text-white">
            {next.title} <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </div>
    </article>
  );
};

export default ProjectPage;
