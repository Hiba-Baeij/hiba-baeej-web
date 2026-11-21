"use client";

import { cn } from "@/utils";
import { useSky } from "./sky-context";

const BARS = [5, 12, 9, 6];

/** Pause / resume the site-wide sky animation. */
const MotionToggle = ({ className, showLabel = true }: { className?: string; showLabel?: boolean }) => {
  const { moving, toggleMotion } = useSky();
  return (
    <button
      type="button"
      onClick={toggleMotion}
      aria-label={moving ? "Pause animation" : "Resume animation"}
      aria-pressed={!moving}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-[#0d111e]/65 text-[13px] text-white transition-colors hover:border-white/40 hover:bg-[#272c3e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c3d6ff]",
        className,
      )}
    >
      <span aria-hidden="true" className="flex h-3 items-center gap-0.5">
        {BARS.map((h, i) => (
          <i key={i} className="w-0.5 rounded-[1px] bg-[#c6c9d6] transition-[height]" style={{ height: moving ? h : 2 }} />
        ))}
      </span>
      {showLabel && (moving ? "Motion on" : "Motion off")}
    </button>
  );
};

export default MotionToggle;
