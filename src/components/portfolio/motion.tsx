"use client";

import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/utils";

const ease = [0.22, 1, 0.36, 1] as const;

/* ---------- Stagger: parent + items reveal one after another ---------- */
const containerV: Variants = {
  hidden: {},
  show: (stagger: number = 0.08) => ({ transition: { staggerChildren: stagger, delayChildren: 0.05 } }),
};

const itemV: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease } },
};

const itemScaleV: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease } },
};

export const Stagger = ({
  children,
  className,
  stagger = 0.08,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  as?: "div" | "ul" | "ol" | "dl";
}) => {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      className={className}
      variants={containerV}
      custom={stagger}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </Comp>
  );
};

export const StaggerItem = ({
  children,
  className,
  as = "div",
  pop = false,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "span";
  pop?: boolean;
}) => {
  const Comp = motion[as];
  return (
    <Comp className={className} variants={pop ? itemScaleV : itemV}>
      {children}
    </Comp>
  );
};

/* ---------- Word-by-word headline ---------- */
export const SplitWords = ({
  text,
  highlight,
  className,
  highlightClassName,
  delay = 0,
}: {
  text: string;
  highlight?: string;
  className?: string;
  highlightClassName?: string;
  delay?: number;
}) => {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <motion.h1
      className={className}
      initial={reduce ? false : "hidden"}
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: delay } } }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom" aria-hidden="true">
          <motion.span
            className={cn("inline-block", w === highlight && highlightClassName)}
            variants={{
              hidden: { y: "105%", opacity: 0 },
              show: { y: "0%", opacity: 1, transition: { duration: 0.7, ease } },
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
};

/* ---------- Fade-up on mount (hero) ---------- */
export const FadeIn = ({
  children,
  delay = 0,
  className,
  y = 16,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
};

/* ---------- Floating element (gentle idle bob) ---------- */
export const Float = ({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 20 }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, y: [0, -8, 0] }}
      transition={
        reduce
          ? undefined
          : {
              opacity: { duration: 0.6, delay },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
            }
      }
    >
      {children}
    </motion.div>
  );
};

/* ---------- Count-up numbers: "100K+", "30%", "5+" ---------- */
export const CountUp = ({ value, className }: { value: string; className?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const match = value.match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[2]) : 0;
  const [display, setDisplay] = useState(match && !reduce ? `${match[1]}0${match[3]}` : value);

  useEffect(() => {
    if (!match || !inView || reduce) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(`${match[1]}${Math.round(v)}${match[3]}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)} aria-label={value}>
      {display}
    </span>
  );
};

/* ---------- Spotlight card: soft glow follows the cursor ---------- */
export const SpotlightCard = ({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) => {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const bg = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgba(110,155,255,0.12), transparent 70%)`;
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };
  const Comp = motion[as];
  return (
    <Comp
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(-400);
        y.set(-400);
      }}
      variants={itemV}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn("group relative overflow-hidden", className)}
    >
      <motion.div className="pointer-events-none absolute inset-0 z-0" style={{ background: bg }} aria-hidden="true" />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </Comp>
  );
};

/* ---------- Parallax: content drifts slightly while scrolling ---------- */
export const Parallax = ({ children, className, offset = 40 }: { children: ReactNode; className?: string; offset?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [offset, -offset]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

/* ---------- Timeline rail that draws as you scroll ---------- */
export const ScrollRail = ({ children, className }: { children: ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <div ref={ref} className={cn("relative", className)}>
      <div className="absolute bottom-0 left-[5px] top-0 w-px bg-line md:left-[7px]" aria-hidden="true" />
      <motion.div
        className="absolute bottom-0 left-[5px] top-0 w-px origin-top bg-gradient-to-b from-brand via-brand to-mint md:left-[7px]"
        style={{ scaleY }}
        aria-hidden="true"
      />
      {children}
    </div>
  );
};

/* ---------- Thin reading-progress bar under the header ---------- */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-brand to-mint"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};

/* ---------- Typed code lines (hero card) ---------- */
export const TypedLines = ({ lines, className, delay = 0.5 }: { lines: ReactNode[]; className?: string; delay?: number }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.16, delayChildren: delay } } }}
    >
      {lines.map((l, i) => (
        <motion.div
          key={i}
          className="whitespace-pre"
          variants={{
            hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
            show: { opacity: 1, clipPath: "inset(0 0% 0 0)", transition: { duration: 0.45, ease: "easeOut" } },
          }}
        >
          {l}
          {i === lines.length - 1 && (
            <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-[3px] animate-[caret_1s_steps(1)_infinite] bg-brand/80" />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};
