"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type SkyState = {
  moving: boolean;
  zoom: number;
  toggleMotion: () => void;
  changeZoom: (step: number) => void;
};

const SkyContext = createContext<SkyState | null>(null);

export const SkyProvider = ({ children }: { children: React.ReactNode }) => {
  const [moving, setMoving] = useState(true);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const query = matchMedia("(prefers-reduced-motion: reduce)");
    setMoving(!query.matches);
    const onChange = (e: MediaQueryListEvent) => setMoving(!e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const toggleMotion = useCallback(() => setMoving((m) => !m), []);
  const changeZoom = useCallback((step: number) => {
    setZoom((z) => Math.min(2, Math.max(1, Math.round((z + step) * 10) / 10)));
  }, []);

  const value = useMemo(
    () => ({ moving, zoom, toggleMotion, changeZoom }),
    [moving, zoom, toggleMotion, changeZoom],
  );

  return <SkyContext.Provider value={value}>{children}</SkyContext.Provider>;
};

export const useSky = () => {
  const ctx = useContext(SkyContext);
  if (!ctx) throw new Error("useSky must be used inside <SkyProvider>");
  return ctx;
};
