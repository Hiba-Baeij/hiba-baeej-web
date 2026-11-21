"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Download, Menu, X } from "lucide-react";
import { siteConfig } from "@/constants/portfolio";
import { cn } from "@/utils";
import { ScrollProgress } from "./motion";
import MotionToggle from "./motion-toggle";

const links = [
  { label: "Work", href: "/#featured" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-line bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      {scrolled && <ScrollProgress />}
      <nav aria-label="Main" className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 md:h-[72px] md:px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Image src="/logo/logo-mark.svg" alt="" width={36} height={36} unoptimized priority className="h-9 w-9" />
          <span className="font-heading text-base font-bold text-white">{siteConfig.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm text-fg-muted transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2.5 md:flex">
          <MotionToggle className="min-h-9 px-3.5" />
          <a
            href={siteConfig.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm text-white transition-colors hover:border-white/30"
          >
            <Download className="h-4 w-4" aria-hidden="true" /> CV
          </a>
          <Link
            href="/#contact"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Hire me
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <MotionToggle showLabel={false} className="h-11 w-11" />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/12 text-white"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="h-[calc(100dvh-64px)] border-t border-line bg-ink px-5 pb-10 pt-6 md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-4 font-heading text-2xl font-semibold text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-brand py-3.5 text-center font-semibold text-ink"
              >
                Hire me
              </Link>
              <a
                href={siteConfig.cvUrl}
                download
                className="flex items-center justify-center gap-2 rounded-xl border border-white/14 py-3.5 text-white"
              >
                <Download className="h-4 w-4" aria-hidden="true" /> Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default SiteHeader;
