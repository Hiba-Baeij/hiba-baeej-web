import Image from "next/image";
import { cn } from "@/utils";

const initials = (title: string) =>
  title
    .replace(/\(.*?\)/g, "")
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

/** Project brand icon: the client's logo mark on a tile, or initials when no logo exists yet. */
export const BrandMark = ({
  logo,
  title,
  size = "md",
  className,
}: {
  logo?: string;
  title: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}) => (
  <span
    className={cn(
      "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-surface-2",
      size === "sm" && "h-9 w-9 rounded-lg p-1.5",
      size === "md" && "h-11 w-11 p-2",
      size === "lg" && "h-14 w-14 p-2.5",
      className,
    )}
  >
    {logo ? (
      <Image src={logo} alt={`${title} logo`} width={56} height={56} unoptimized className="h-full w-full object-contain" />
    ) : (
      <span aria-hidden="true" className="font-heading text-sm font-bold text-fg-muted">
        {initials(title)}
      </span>
    )}
  </span>
);

export default BrandMark;
