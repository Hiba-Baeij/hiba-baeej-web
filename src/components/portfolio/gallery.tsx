"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import type { ProjectImage } from "@/constants/portfolio";
import { cn } from "@/utils";
import { Stagger, StaggerItem } from "./motion";

export const Gallery = ({ images, title }: { images: ProjectImage[]; title: string }) => {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const go = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, go]);

  const current = index === null ? null : images[index];

  return (
    <>
      <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2" stagger={0.08}>
        {images.map((img, i) => (
          <StaggerItem key={img.src} className={cn(i === 0 && images.length > 2 && "sm:col-span-2")}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group block w-full overflow-hidden rounded-2xl border border-line bg-surface text-left transition-colors hover:border-white/20"
              aria-label={`Open screenshot: ${img.caption}`}
            >
              <div className={cn("relative w-full overflow-hidden bg-white", i === 0 && images.length > 2 ? "aspect-[16/8]" : "aspect-[16/10]")}>
                <Image
                  src={img.src}
                  alt={`${title} — ${img.caption}`}
                  fill
                  sizes={i === 0 ? "(min-width: 1024px) 1100px, 100vw" : "(min-width: 1024px) 540px, 100vw"}
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
              <p className="flex items-center gap-3 px-4 py-3 text-sm text-fg-muted">
                <span className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</span>
                {img.caption}
              </p>
            </button>
          </StaggerItem>
        ))}
      </Stagger>

      <AnimatePresence>
        {current && index !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={current.caption}
            className="fixed inset-0 z-[100] flex flex-col bg-ink/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4 text-sm text-fg-muted">
              <span>
                <span className="font-mono text-brand">
                  {index + 1}/{images.length}
                </span>{" "}
                · {current.caption}
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                autoFocus
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative flex flex-1 items-center justify-center px-4 pb-8 md:px-20" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.src}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="relative max-h-full w-full max-w-6xl overflow-auto rounded-xl"
                >
                  <Image
                    src={current.src}
                    alt={`${title} — ${current.caption}`}
                    width={current.width}
                    height={current.height}
                    sizes="100vw"
                    className="h-auto w-full rounded-xl"
                  />
                </motion.div>
              </AnimatePresence>
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous screenshot"
                    className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/70 text-white hover:bg-white/10 md:left-5"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next screenshot"
                    className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/70 text-white hover:bg-white/10 md:right-5"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
