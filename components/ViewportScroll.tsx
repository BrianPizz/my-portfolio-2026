"use client";

import { useRef, useEffect, type ReactNode } from "react";

/**
 * Locks the scroll container width to window.innerWidth (visual viewport).
 * Fixes iOS Safari horizontal cropping by preventing any content from making the layout wider.
 */
export default function ViewportScroll({ children }: { children: ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const setWidth = () => {
      const w = window.innerWidth;
      el.style.width = `${w}px`;
      el.style.maxWidth = `${w}px`;
    };

    const onOrientationChange = () => {
      setTimeout(setWidth, 100);
    };

    setWidth();
    window.addEventListener("resize", setWidth);
    window.addEventListener("orientationchange", onOrientationChange);
    return () => {
      window.removeEventListener("resize", setWidth);
      window.removeEventListener("orientationchange", onOrientationChange);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className="viewport-scroll-height fixed left-0 right-0 top-0 z-10 overflow-x-hidden overflow-y-auto overscroll-y-auto scroll-smooth box-border touch-pan-y"
      style={{
        WebkitOverflowScrolling: "touch",
        left: 0,
        right: 0,
        top: 0,
        width: "100%",
        maxWidth: "100%",
      }}
    >
      {children}
    </div>
  );
}
