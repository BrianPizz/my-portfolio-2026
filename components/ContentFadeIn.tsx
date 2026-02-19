"use client";

import { useState, useEffect } from "react";

export default function ContentFadeIn({
  children,
  delayMs = 200,
}: {
  children: React.ReactNode;
  delayMs?: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delayMs);
    return () => clearTimeout(t);
  }, [delayMs]);

  return (
    <div
      className={`transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
