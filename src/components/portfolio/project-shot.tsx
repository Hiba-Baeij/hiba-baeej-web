import Image from "next/image";
import type { ProjectImage, ProjectVisual as PV } from "@/constants/portfolio";
import { cn } from "@/utils";
import { ProjectVisual } from "./visuals";

/** Real screenshot inside a browser frame; falls back to the illustrated visual. */
export const ProjectShot = ({
  image,
  kind,
  title,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 560px, 100vw",
}: {
  image?: ProjectImage;
  kind: PV["kind"];
  title: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) => {
  if (!image) return <ProjectVisual kind={kind} className={className} />;
  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/8 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(110,155,255,0.18),transparent_60%),#0A0C11] p-3 sm:p-4",
        className,
      )}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
        <div className="flex shrink-0 items-center gap-1.5 border-b border-black/5 bg-[#F3F4F6] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]" />
          <span className="mx-auto truncate rounded bg-white px-3 py-0.5 font-mono text-[9px] text-black/40">{title}</span>
        </div>
        <div className="relative flex-1">
          <Image
            src={image.src}
            alt={`${title} — ${image.caption}`}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectShot;
