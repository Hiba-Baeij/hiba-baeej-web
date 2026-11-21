"use client";

import { Minus, MousePointer2, Plus } from "lucide-react";
import { useSky } from "./sky-context";

const ZOOM_STEP = 0.2;

/**
 * Hero shell. The sky itself lives in <SiteSky/> (fixed behind the whole page);
 * this only lays out the hero content and its explore controls.
 */
const SkyHero = ({ children, id }: { children: React.ReactNode; id?: string }) => {
  const { zoom, changeZoom } = useSky();

  return (
    <section id={id} className="relative grid min-h-svh touch-pan-y place-items-center">
      {children}

      <div className="absolute inset-x-0 bottom-5 mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-5 md:px-6">
        <span className="flex items-center gap-2 text-[13px] text-[#aeb2c4]">
          <MousePointer2 className="h-[18px] w-[18px]" strokeWidth={1.3} aria-hidden="true" />
          <span className="hidden sm:inline">Move to explore</span>
        </span>
        <div className="flex items-center gap-2">
          <div className="flex h-9 items-center rounded-full border border-white/15 bg-[#0a0e1a]/45" aria-label="Sky magnification">
            <button
              type="button"
              onClick={() => changeZoom(-ZOOM_STEP)}
              disabled={zoom === 1}
              aria-label="Zoom out"
              className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 disabled:opacity-35"
            >
              <Minus className="h-4 w-4" />
            </button>
            <output aria-live="polite" className="min-w-9 text-center font-mono text-xs text-[#c8cbd7]">
              {zoom.toFixed(1)}×
            </output>
            <button
              type="button"
              onClick={() => changeZoom(ZOOM_STEP)}
              disabled={zoom === 2}
              aria-label="Zoom in"
              className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 disabled:opacity-35"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkyHero;
