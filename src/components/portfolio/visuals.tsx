import { cn } from "@/utils";
import type { ProjectVisual as PV } from "@/constants/portfolio";

const palette = {
  line: "stroke-white/15",
  node: "fill-white/10",
  accent: "fill-[#3b82f6]/30",
  text: "fill-white/40",
};

export const ProjectVisual = ({ kind, className }: { kind: PV["kind"]; className?: string }) => {
  return (
    <div className={cn("relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]", className)}>
      <svg viewBox="0 0 400 250" className="h-full w-full" aria-hidden="true">
        {kind === "erp" && (
          <>
            <line x1="40" y1="125" x2="360" y2="125" className={palette.line} />
            <line x1="200" y1="30" x2="200" y2="125" className={palette.line} />
            <line x1="200" y1="125" x2="80" y2="220" className={palette.line} />
            <line x1="200" y1="125" x2="320" y2="220" className={palette.line} />
            <circle cx="200" cy="30" r="14" className={palette.accent} />
            <circle cx="40" cy="125" r="10" className={palette.node} />
            <circle cx="360" cy="125" r="10" className={palette.node} />
            <circle cx="80" cy="220" r="10" className={palette.node} />
            <circle cx="320" cy="220" r="10" className={palette.node} />
            <text x="200" y="18" textAnchor="middle" className={palette.text} fontSize="10">ERP</text>
          </>
        )}
        {kind === "embassy" && (
          <>
            <rect x="30" y="40" width="340" height="170" rx="12" className="fill-none stroke-white/15" />
            <rect x="50" y="60" width="300" height="130" rx="8" className={palette.node} />
            <path d="M50 110 h100 M50 150 h60 M180 110 h120 M180 150 h170" className={palette.line} />
            <circle cx="200" cy="60" r="10" className={palette.accent} />
            <text x="200" y="32" textAnchor="middle" className={palette.text} fontSize="10">EMBASSY SERVICES</text>
          </>
        )}
        {kind === "store" && (
          <>
            <line x1="60" y1="200" x2="60" y2="50" className={palette.line} />
            <line x1="60" y1="200" x2="340" y2="200" className={palette.line} />
            <path d="M60 200 L120 130 L180 160 L240 90 L300 120 L340 80" className="stroke-[#3b82f6]/50" fill="none" />
            <circle cx="120" cy="130" r="8" className={palette.accent} />
            <circle cx="180" cy="160" r="8" className={palette.node} />
            <circle cx="240" cy="90" r="8" className={palette.node} />
            <circle cx="300" cy="120" r="8" className={palette.node} />
            <text x="60" y="220" className={palette.text} fontSize="10">STORES</text>
            <text x="310" y="68" className={palette.text} fontSize="10">SALES</text>
          </>
        )}
        {kind === "saas" && (
          <>
            <rect x="40" y="50" width="150" height="150" rx="10" className={palette.node} />
            <rect x="210" y="50" width="150" height="150" rx="10" className="fill-none stroke-white/15" />
            <path d="M190 125 H210" className="stroke-[#3b82f6]/50" />
            <circle cx="285" cy="100" r="6" className={palette.node} />
            <circle cx="285" cy="140" r="6" className={palette.node} />
            <circle cx="285" cy="180" r="6" className={palette.node} />
            <text x="40" y="40" className={palette.text} fontSize="10">SAAS APP</text>
          </>
        )}
        {kind === "dashboard" && (
          <>
            <rect x="30" y="30" width="340" height="190" rx="10" className={palette.node} />
            <rect x="50" y="50" width="140" height="60" rx="6" className="fill-none stroke-white/15" />
            <rect x="50" y="130" width="140" height="70" rx="6" className="fill-none stroke-white/15" />
            <rect x="210" y="50" width="140" height="150" rx="6" className="fill-none stroke-white/15" />
            <path d="M60 190 h30 M110 190 h20 M60 180 h45" className="stroke-[#3b82f6]/50" />
            <circle cx="300" cy="90" r="30" className="fill-none stroke-white/15" />
            <path d="M300 120 A30 30 0 0 1 270 95" className="stroke-[#3b82f6]/60" fill="none" />
          </>
        )}
        {kind === "website" && (
          <>
            <rect x="40" y="40" width="320" height="180" rx="8" className={palette.node} />
            <rect x="40" y="40" width="320" height="24" rx="8" className="fill-white/5" />
            <circle cx="52" cy="52" r="4" className={palette.node} />
            <rect x="70" y="80" width="120" height="12" rx="3" className="fill-white/15" />
            <rect x="70" y="104" width="200" height="8" rx="3" className="fill-white/8" />
            <rect x="70" y="120" width="160" height="8" rx="3" className="fill-white/8" />
          </>
        )}
      </svg>
    </div>
  );
};