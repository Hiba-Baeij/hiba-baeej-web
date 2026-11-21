"use client";

import { useEffect, useRef } from "react";
import { useSky } from "./sky-context";

const STAR_COLORS = ["215,225,255", "255,241,216", "175,204,255"];
const MOBILE_STAR_CAP = 2200;

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

/**
 * One fixed star field behind the whole site: stars drift, twinkle, orbit the
 * cursor, parallax with scroll, and the nebula dims as you leave the hero.
 */
const SiteSky = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nebulaRef = useRef<HTMLDivElement>(null);
  const { moving, zoom } = useSky();

  // Mutable engine state shared between React controls and the canvas loop.
  const engine = useRef({ moving: true, targetZoom: 1, wake: () => {}, release: () => {} });

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
    const canvas = canvasRef.current!;
    const nebula = nebulaRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const tiles = STAR_COLORS.map(makeGlow);
    const pointer = { active: false, x: 0, y: 0 };
    let width = 0, height = 0, stars: Star[] = [];
    let time = 0, lastTime = 0, frame = 0, currentZoom = 1, scroll = 0;

    const requestFrame = () => {
      if (!frame && !document.hidden) frame = requestAnimationFrame(draw);
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      const coarse = matchMedia("(pointer: coarse)").matches;
      const ratio = Math.min(devicePixelRatio || 1, coarse ? 1.5 : 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const random = makeSeed(73465);
      const cap = width < 768 ? MOBILE_STAR_CAP : 10000;
      const count = Math.min(cap, Math.round((width * height) / 280));
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
      // Scroll parallax: only follows the page while motion is on.
      if (isMoving) scroll += (window.scrollY - scroll) * (1 - Math.exp(-dt * 6));
      const driftX = Math.sin(time * 0.024) * 10;
      const driftY = Math.sin(time * 0.017) * 6;

      // Nebula follows scroll slightly and dims after the hero so content stays readable.
      const away = Math.min(1, scroll / (height * 0.9));
      const shift = -Math.min(scroll * 0.04, height * 0.08);
      nebula.style.opacity = String(1 - 0.5 * away);
      nebula.style.transform = `translate(${driftX * 0.1}px,${driftY * 0.1 + shift}px) scale(${1 + (currentZoom - 1) * 0.78})`;

      const span = height + 90;
      ctx!.clearRect(0, 0, width, height);
      for (const s of stars) {
        // Deeper stars move further with scroll; wrap so the field never runs out.
        const scrolledY = ((((s.y + 45 - scroll * (0.04 + 0.16 * s.depth)) % span) + span) % span) - 45;
        const scale = 1 + (currentZoom - 1) * (0.7 + s.depth * 0.3);
        const baseX = width / 2 + (s.x - width / 2) * scale + driftX * s.depth;
        const baseY = height / 2 + (scrolledY - height / 2) * scale + driftY * s.depth;
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
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };
    const onUp = (e: PointerEvent) => { if (e.pointerType !== "mouse") release(); };
    const onVisibility = () => {
      if (document.hidden) { cancelAnimationFrame(frame); frame = 0; }
      else { lastTime = 0; requestFrame(); }
    };
    const root = document.documentElement;
    engine.current.release = release;
    engine.current.wake = () => { lastTime = 0; requestFrame(); };

    scroll = window.scrollY;
    window.addEventListener("pointermove", track, { passive: true });
    window.addEventListener("pointerdown", track, { passive: true });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", release);
    window.addEventListener("blur", release);
    root.addEventListener("pointerleave", release);
    document.addEventListener("visibilitychange", onVisibility);
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    resize();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("pointermove", track);
      window.removeEventListener("pointerdown", track);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", release);
      window.removeEventListener("blur", release);
      root.removeEventListener("pointerleave", release);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-lvh overflow-hidden bg-[#060813]">
      <div
        ref={nebulaRef}
        className="absolute -inset-[10%] bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: "url(/images/sky.webp)" }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
};

export default SiteSky;
