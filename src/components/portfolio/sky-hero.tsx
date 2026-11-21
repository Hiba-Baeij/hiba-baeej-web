"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Minus, MousePointer2, Plus } from "lucide-react";

const STAR_COLORS = ["215,225,255", "255,241,216", "175,204,255"];

const makeSeed = (seed: number) => () => {
  seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
  return seed / 4294967296;
};

const makeGlow = (color: string) => {
  const tile = document.createElement("canvas");
  tile.width = tile.height = 64;
  const brush = tile.getContext("2d")!;
  const glow = brush.createRadialGradient(32, 32, 0, 32, 32, 31);
  for (const [point, alpha] of [[0, 1], [0.08, 1], [0.15, 0.65], [0.26, 0.23], [0.48, 0.07], [1, 0]]) {
    glow.addColorStop(point, `rgba(${color},${alpha})`);
  }
  brush.fillStyle = glow;
  brush.fillRect(0, 0, 64, 64);
  return tile;
};

type Star = {
  x: number;
  y: number;
  depth: number;
  offsetX: number;
  offsetY: number;
  radius: number;
  alpha: number;
  flare: boolean;
  color: number;
  phase: number;
};

const ZOOM_STEP = 0.2;

const SkyHero = ({ children, id }: { children: React.ReactNode; id?: string }) => {
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);

  const [moving, setMoving] = useState(true);
  const [immersive, setImmersive] = useState(false);
  const [zoom, setZoom] = useState(1);

  // Mutable engine state shared between React controls and the canvas loop.
  const engine = useRef({ moving: true, targetZoom: 1, wake: () => {}, release: () => {} });

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) setMoving(false);
  }, []);

  useEffect(() => {
    engine.current.moving = moving;
    if (!moving) engine.current.release();
    engine.current.wake();
  }, [moving]);

  useEffect(() => {
    engine.current.targetZoom = zoom;
    engine.current.wake();
  }, [zoom]);

  useEffect(() => {
    const hero = heroRef.current!;
    const canvas = canvasRef.current!;
    const nebula = nebulaRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const tiles = STAR_COLORS.map(makeGlow);
    const pointer = { active: false, x: 0, y: 0 };
    let width = 0, height = 0, stars: Star[] = [];
    let time = 0, lastTime = 0, frame = 0, currentZoom = 1;

    const requestFrame = () => {
      if (!frame && !document.hidden) frame = requestAnimationFrame(draw);
    };

    const resize = () => {
      width = hero.clientWidth;
      height = hero.clientHeight;
      const ratio = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const random = makeSeed(73465);
      const count = Math.min(10000, Math.round((width * height) / 280));
      const coverWidth = Math.max(width * 1.08, (height * 1.08 * 18) / 11);
      const coverHeight = (coverWidth * 11) / 18;
      stars = Array.from({ length: count }, (_, i) => {
        let x = random() * (width + 90) - 45;
        let y = random() * (height + 90) - 45;
        const depth = random();
        const bright = random() ** 11;
        if (i % 2 === 0) {
          // Half of the stars form the diagonal Milky Way band.
          const u = (x - width / 2) / coverWidth + 0.5;
          const gaussian = Math.sqrt(-2 * Math.log(Math.max(0.001, random()))) * Math.cos(random() * Math.PI * 2);
          y = height / 2 + coverHeight * (0.47 - 0.87 * u + 0.045 * Math.sin(7 * u) + gaussian * 0.095);
        }
        return {
          x, y, depth, offsetX: 0, offsetY: 0,
          radius: 0.25 + random() * 0.42 + bright * 0.7,
          alpha: 0.13 + random() * 0.35 + bright * 0.45,
          flare: bright > 0.9,
          color: Math.floor(random() * tiles.length),
          phase: random() * 6.283,
        };
      });
      requestFrame();
    };

    function draw(stamp: number) {
      frame = 0;
      const { moving: isMoving, targetZoom } = engine.current;
      const dt = lastTime ? Math.min(0.05, (stamp - lastTime) / 1000) : 0;
      lastTime = stamp;
      if (isMoving) time += dt;
      const ease = isMoving ? 1 - Math.exp(-dt * 4.5) : 1;
      const pullRadius = Math.min(180, Math.max(100, width * 0.15));
      const captureEase = 1 - Math.exp(-dt * 10);
      const releaseEase = 1 - Math.exp(-dt * 5);
      currentZoom += (targetZoom - currentZoom) * ease;
      const driftX = Math.sin(time * 0.024) * 10;
      const driftY = Math.sin(time * 0.017) * 6;
      nebula.style.transform = `translate(${driftX * 0.1}px,${driftY * 0.1}px) scale(${1 + (currentZoom - 1) * 0.78})`;
      ctx!.clearRect(0, 0, width, height);
      for (const s of stars) {
        const scale = 1 + (currentZoom - 1) * (0.7 + s.depth * 0.3);
        const baseX = width / 2 + (s.x - width / 2) * scale + driftX * s.depth;
        const baseY = height / 2 + (s.y - height / 2) * scale + driftY * s.depth;
        if (isMoving) {
          let goalX = 0, goalY = 0, response = releaseEase;
          if (pointer.active) {
            const dx = baseX - pointer.x;
            const dy = baseY - pointer.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < pullRadius * pullRadius) {
              const proximity = 1 - Math.sqrt(d2) / pullRadius;
              const strength = proximity * proximity * (3 - 2 * proximity);
              const orbitScale = 1 - 0.85 * strength;
              const angle = strength * (1 + 0.4 * s.depth);
              const cos = Math.cos(angle), sin = Math.sin(angle);
              goalX = (dx * cos - dy * sin) * orbitScale - dx;
              goalY = (dx * sin + dy * cos) * orbitScale - dy;
              response = captureEase;
            }
          }
          s.offsetX += (goalX - s.offsetX) * response;
          s.offsetY += (goalY - s.offsetY) * response;
        }
        const x = baseX + s.offsetX;
        const y = baseY + s.offsetY;
        if (x < -12 || x > width + 12 || y < -12 || y > height + 12) continue;
        const r = s.radius * Math.sqrt(scale);
        ctx!.globalAlpha = s.alpha * (0.88 + 0.12 * Math.sin(time * (0.35 + s.depth) + s.phase));
        if (s.flare) {
          const size = r * 15;
          ctx!.drawImage(tiles[s.color], x - size / 2, y - size / 2, size, size);
        } else {
          ctx!.fillStyle = `rgb(${STAR_COLORS[s.color]})`;
          ctx!.beginPath();
          ctx!.arc(x, y, r, 0, Math.PI * 2);
          ctx!.fill();
        }
      }
      ctx!.globalAlpha = 1;
      if (isMoving) requestFrame();
    }

    const release = () => { pointer.active = false; };
    const track = (e: PointerEvent) => {
      if (!engine.current.moving || !e.isPrimary) return;
      const b = canvas.getBoundingClientRect();
      pointer.x = e.clientX - b.left;
      pointer.y = e.clientY - b.top;
      pointer.active = true;
    };
    const onUp = (e: PointerEvent) => { if (e.pointerType !== "mouse") release(); };
    const onVisibility = () => {
      if (document.hidden) { cancelAnimationFrame(frame); frame = 0; }
      else { lastTime = 0; requestFrame(); }
    };

    engine.current.release = release;
    engine.current.wake = () => { lastTime = 0; requestFrame(); };

    hero.addEventListener("pointermove", track);
    hero.addEventListener("pointerdown", track);
    hero.addEventListener("pointerleave", release);
    hero.addEventListener("pointercancel", release);
    hero.addEventListener("pointerup", onUp);
    window.addEventListener("blur", release);
    document.addEventListener("visibilitychange", onVisibility);
    const observer = new ResizeObserver(resize);
    observer.observe(hero);
    resize();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      hero.removeEventListener("pointermove", track);
      hero.removeEventListener("pointerdown", track);
      hero.removeEventListener("pointerleave", release);
      hero.removeEventListener("pointercancel", release);
      hero.removeEventListener("pointerup", onUp);
      window.removeEventListener("blur", release);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    if (!immersive) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setImmersive(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [immersive]);

  const changeZoom = useCallback((step: number) => {
    setZoom((z) => Math.min(2, Math.max(1, Math.round((z + step) * 10) / 10)));
  }, []);

  const pill =
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-[#0d111e]/65 text-[13px] text-white transition-colors hover:border-white/40 hover:bg-[#272c3e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c3d6ff]";

  return (
    <section
      id={id}
      ref={heroRef}
      className="relative isolate grid min-h-svh touch-pan-y place-items-center overflow-hidden bg-[#050710]"
    >
      {/* Nebula backdrop behind the star canvas */}
      <div
        ref={nebulaRef}
        aria-hidden="true"
        className="pointer-events-none absolute -inset-[4%] -z-10 bg-[#060813] bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: "url(/images/sky.webp)" }}
      />
      <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 h-full w-full" />

      <div inert={immersive} className={immersive ? "invisible" : "contents"}>
        {children}
      </div>

      {immersive && (
        <button
          type="button"
          autoFocus
          onClick={() => setImmersive(false)}
          className={`${pill} absolute bottom-6 left-1/2 z-10 -translate-x-1/2 px-5 py-3`}
        >
          Exit immersive view
        </button>
      )}

      <div className="absolute inset-x-0 bottom-5 mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-5 md:px-6">
        <span className="flex items-center gap-2 text-[13px] text-[#aeb2c4]">
          <MousePointer2 className="h-[18px] w-[18px]" strokeWidth={1.3} aria-hidden="true" />
          <span className="hidden sm:inline">Move to explore</span>
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMoving((m) => !m)}
            aria-label={moving ? "Pause animation" : "Resume animation"}
            className={`${pill} min-h-9 px-3.5`}
          >
            <span aria-hidden="true" className="flex h-3 items-center gap-0.5">
              {[5, 12, 9, 6].map((h, i) => (
                <i key={i} className="w-0.5 rounded-[1px] bg-[#c6c9d6]" style={{ height: moving ? h : 2 }} />
              ))}
            </span>
            {moving ? "Motion on" : "Motion off"}
          </button>
          {!immersive && (
            <button type="button" onClick={() => setImmersive(true)} className={`${pill} min-h-9 px-3.5`}>
              Immersive view
            </button>
          )}
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
