import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/constants/portfolio";
import { ProjectVisual } from "@/components/portfolio/visuals";
import { generateMetadata as baseMetadata } from "@/utils";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return baseMetadata({
    title: `${project.title} — Hiba Baeij`,
    description: project.description,
  });
}

const ProjectPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-24 pt-24 md:px-8">
      <Link href="/work" className="text-sm text-white/40 hover:text-white">
        ← Back to work
      </Link>

      <div className="mt-6">
        <p className="text-xs uppercase tracking-widest text-white/40">{project.category}</p>
        <h1 className="mt-2 text-4xl font-semibold text-white md:text-5xl">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-white/60">{project.description}</p>
      </div>

      <div className="mt-10">
        <ProjectVisual kind={project.visual.kind} />
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr]">
        <aside className="space-y-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">Role</p>
            <p className="mt-1 text-sm text-white/80">{project.role}</p>
            <p className="text-xs text-white/40">{project.period}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-white/40">Technologies</p>
            <p className="mt-2 flex flex-wrap gap-2 text-xs text-white/70">
              {project.tech.map((t) => (
                <span key={t} className="rounded-full border border-white/10 px-3 py-1">
                  {t}
                </span>
              ))}
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="text-sm italic text-white/60">“{project.highlight}”</p>
          </div>
        </aside>

        <div className="space-y-10">
          <section>
            <h2 className="text-lg font-semibold text-white">Overview</h2>
            <p className="mt-2 text-white/60">{project.caseStudy.overview}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">Business Problem</h2>
            <p className="mt-2 text-white/60">{project.caseStudy.businessProblem}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">My Role</h2>
            <p className="mt-2 text-white/60">{project.caseStudy.myRole}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">Technical Challenges</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-white/60">
              {project.caseStudy.technicalChallenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">Key Engineering Decisions</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-white/60">
              {project.caseStudy.keyDecisions.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">Result / Impact</h2>
            <p className="mt-2 text-white/60">{project.caseStudy.result}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">Contribution</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-white/60">
              {project.contribution.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <Link href="/#contact">
          <Button size="lg">Let&apos;s talk about a similar problem</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectPage;