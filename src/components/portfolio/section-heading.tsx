import { cn } from "@/utils";
import type { ReactNode } from "react";
import Reveal from "./reveal";

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  action,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}) => (
  <Reveal className={cn("flex flex-wrap items-end justify-between gap-6", className)}>
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
    {action}
  </Reveal>
);

export default SectionHeading;
