import { ImageResponse } from "next/og";
import { projects, getProjectBySlug } from "@/constants/portfolio";
import { OgCard, ogSize } from "@/components/og/og-card";

export const alt = "Case study by Hiba Baeij";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return new ImageResponse(
    <OgCard
      eyebrow={project ? `Case study · ${project.category}` : "Case study"}
      title={project?.title ?? "Hiba Baeij"}
      subtitle={project?.highlight ?? project?.description ?? ""}
    />,
    size,
  );
}
