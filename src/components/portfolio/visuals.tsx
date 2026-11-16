import { cn } from "@/utils";
import type { ProjectVisual as PV } from "@/constants/portfolio";

const Bar = ({ w, className }: { w: string; className?: string }) => (
  <div className={cn("h-2 rounded-full bg-white/10", className)} style={{ width: w }} />
);

const Window = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="flex h-full flex-col">
    <div className="flex items-center gap-1.5 border-b border-white/6 px-3 py-2.5">
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="ml-2 font-mono text-[10px] text-white/40">{title}</span>
    </div>
    <div className="flex-1 p-3.5">{children}</div>
  </div>
);

const Chart = () => (
  <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
    <defs>
      <linearGradient id="vg" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#6E9BFF" stopOpacity="0.35" />
        <stop offset="1" stopColor="#6E9BFF" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path d="M0 48 L25 40 L50 44 L75 28 L100 32 L125 18 L150 22 L175 10 L200 14 L200 60 L0 60Z" fill="url(#vg)" />
    <path d="M0 48 L25 40 L50 44 L75 28 L100 32 L125 18 L150 22 L175 10 L200 14" fill="none" stroke="#6E9BFF" strokeWidth="1.5" />
  </svg>
);

export const ProjectVisual = ({ kind, className }: { kind: PV["kind"]; className?: string }) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/8 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(110,155,255,0.14),transparent_60%),#0A0C11] p-3 sm:p-4",
        className,
      )}
    >
      <div className="h-full overflow-hidden rounded-lg border border-white/8 bg-[#0F1218]">
        {kind === "erp" && (
          <Window title="asapi · client dashboard">
            <div className="grid h-full grid-cols-[22%_1fr] gap-3">
              <div className="space-y-2.5 border-r border-white/6 pr-3">
                {["70%", "85%", "60%", "75%", "55%"].map((w, i) => (
                  <Bar key={i} w={w} className={i === 1 ? "bg-[#6E9BFF]/60" : undefined} />
                ))}
              </div>
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-3 gap-2">
                  {["Revenue", "Invoices", "Stock"].map((l) => (
                    <div key={l} className="rounded-md border border-white/6 bg-white/[0.03] p-2">
                      <p className="text-[8px] text-white/40">{l}</p>
                      <div className="mt-1.5 h-2.5 w-3/4 rounded bg-white/20" />
                    </div>
                  ))}
                </div>
                <div className="h-14 rounded-md border border-white/6 p-1.5"><Chart /></div>
                <div className="space-y-1.5">
                  {[0, 1, 2].map((r) => (
                    <div key={r} className="flex items-center gap-2">
                      <Bar w="18%" />
                      <Bar w="30%" />
                      <span className="ml-auto rounded bg-[#3DD6B0]/20 px-1.5 text-[7px] text-[#8FF0D6]">ZATCA ✓</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Window>
        )}
        {kind === "embassy" && (
          <Window title="safeer · appointments">
            <div className="grid h-full grid-cols-[1fr_38%] gap-3">
              <div className="grid grid-cols-5 content-start gap-1.5">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-6 rounded border border-white/6",
                      [3, 7, 8, 12, 16].includes(i) && "border-[#6E9BFF]/50 bg-[#6E9BFF]/25",
                      [5, 14].includes(i) && "bg-white/[0.06]",
                    )}
                  />
                ))}
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-white/6 bg-white/[0.02] p-2">
                <div className="grid h-14 w-14 grid-cols-4 gap-0.5 rounded bg-white p-1">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className={cn("rounded-[1px]", [0, 2, 3, 5, 6, 9, 11, 12, 15].includes(i) ? "bg-[#0F1218]" : "bg-white")} />
                  ))}
                </div>
                <span className="rounded bg-[#3DD6B0]/20 px-1.5 py-0.5 text-[8px] text-[#8FF0D6]">Verified</span>
              </div>
            </div>
          </Window>
        )}
        {kind === "ai" && (
          <Window title="smartdocs · ask">
            <div className="flex h-full flex-col gap-2.5">
              <div className="ml-auto max-w-[70%] rounded-lg rounded-br-sm bg-[#6E9BFF]/25 px-2.5 py-2">
                <Bar w="100%" className="bg-white/30" />
                <Bar w="60%" className="mt-1.5 bg-white/30" />
              </div>
              <div className="max-w-[80%] rounded-lg rounded-bl-sm border border-white/8 bg-white/[0.03] px-2.5 py-2">
                <Bar w="100%" />
                <Bar w="90%" className="mt-1.5" />
                <Bar w="70%" className="mt-1.5" />
                <div className="mt-2 flex gap-1.5">
                  {["policy.pdf · p4", "hr.xlsx"].map((c) => (
                    <span key={c} className="rounded border border-[#6E9BFF]/40 px-1.5 py-0.5 font-mono text-[7px] text-[#9DBBFF]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex items-center gap-2 rounded-md border border-white/8 px-2.5 py-2">
                <Bar w="50%" />
                <span className="ml-auto h-4 w-4 rounded bg-[#6E9BFF]" />
              </div>
            </div>
          </Window>
        )}
        {kind === "commerce" && (
          <Window title="mystore.e-dukan.app">
            <div className="grid h-full grid-cols-3 gap-2">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex flex-col gap-1.5 rounded-md border border-white/6 bg-white/[0.02] p-1.5">
                  <div className={cn("aspect-[4/3] rounded", i === 1 ? "bg-[#6E9BFF]/25" : "bg-white/[0.06]")} />
                  <Bar w="80%" />
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[7px] text-white/50">SAR</span>
                    <span className="h-2.5 w-5 rounded-sm bg-[#3DD6B0]/40" />
                  </div>
                </div>
              ))}
            </div>
          </Window>
        )}
        {kind === "store" && (
          <Window title="jetorder · vue 3 + ts">
            <div className="flex h-full flex-col gap-3">
              <div className="flex items-center gap-2 font-mono text-[9px]">
                <span className="rounded bg-white/10 px-1.5 py-0.5 text-white/50 line-through">nuxt 2</span>
                <span className="text-white/40">→</span>
                <span className="rounded bg-[#3DD6B0]/20 px-1.5 py-0.5 text-[#8FF0D6]">vue 3</span>
                <span className="rounded bg-[#6E9BFF]/25 px-1.5 py-0.5 text-[#9DBBFF]">typescript</span>
              </div>
              <div className="flex flex-1 items-end gap-2">
                {[90, 82, 75, 68, 62].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-[#6E9BFF]/50 to-[#6E9BFF]/10" style={{ height: `${h}%` }} />
                ))}
              </div>
              <p className="font-mono text-[9px] text-white/40">complexity −30%</p>
            </div>
          </Window>
        )}
        {(kind === "saas" || kind === "dashboard" || kind === "website") && (
          <Window title={kind === "website" ? "paradise-road" : kind === "saas" ? "voucher-buyer" : "dashboard"}>
            <div className="flex h-full flex-col gap-2.5">
              <div className="grid grid-cols-2 gap-2">
                <div className="h-10 rounded-md border border-white/6 bg-white/[0.03]" />
                <div className="h-10 rounded-md border border-[#6E9BFF]/30 bg-[#6E9BFF]/10" />
              </div>
              <div className="flex-1 rounded-md border border-white/6 p-1.5"><Chart /></div>
            </div>
          </Window>
        )}
      </div>
    </div>
  );
};
