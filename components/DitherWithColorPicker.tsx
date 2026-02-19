"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Dither from "./Dither";

const STORAGE_KEY = "dither-wave-color";

function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [0.5, 0.5, 0.5];
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
  ];
}

const PRESETS: { name: string; hex: string }[] = [
  { name: "Slate", hex: "#64748b" },
  { name: "Navy", hex: "#1e3a5f" },
  { name: "Warm", hex: "#57534e" },
  { name: "Forest", hex: "#365314" },
  { name: "Plum", hex: "#581c87" },
  { name: "Neutral", hex: "#525252" },
];

const DEFAULT_HEX = "#1e3a5f";

export default function DitherWithColorPicker() {
  const [hex, setHex] = useState(DEFAULT_HEX);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const loadStored = useCallback(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && /^#[0-9a-fA-F]{6}$/.test(stored)) setHex(stored);
  }, []);

  useEffect(() => {
    loadStored();
  }, [loadStored]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, hex);
  }, [hex]);

  const waveColor = hexToRgb(hex);

  const pickerUI = (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end gap-2"
      style={{ pointerEvents: "auto" }}
    >
      {isOpen && (
        <div className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md p-4 shadow-xl">
          <p className="text-white/90 text-sm font-medium mb-3 text-readable">
            Background color
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {PRESETS.map(({ name, hex: presetHex }) => (
              <button
                key={presetHex}
                type="button"
                onClick={() => setHex(presetHex)}
                className="rounded-lg px-3 py-1.5 text-xs font-medium text-white/90 border border-white/20 hover:bg-white/10 transition-colors text-readable"
              >
                {name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={hex}
              onChange={(e) => setHex(e.target.value)}
              className="h-10 w-14 cursor-pointer rounded border border-white/20 bg-white/5"
              aria-label="Pick a color"
            />
            <span className="text-white/60 text-xs font-mono text-readable">
              {hex}
            </span>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setIsOpen((o) => !o)}
        className="rounded-full p-3 min-w-[44px] min-h-[44px] border border-white/20 bg-black/50 backdrop-blur-md text-white/90 hover:bg-white/10 transition-colors flex items-center justify-center"
        aria-label={isOpen ? "Close color picker" : "Change background color"}
        title="Change background color"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343L12.657 5.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      </button>
    </div>
  );

  return (
    <>
      <Dither waveColor={waveColor} />
      {mounted &&
        typeof document !== "undefined" &&
        createPortal(pickerUI, document.body)}
    </>
  );
}
