"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  /** Split by "chars" or "words" */
  splitType?: "chars" | "words";
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 50,
  duration = 1,
  ease = "power3.out",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  tag = "h1",
  splitType = "chars",
}) => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const spans = ref.current.querySelectorAll(".split-char, .split-word");
      if (!spans.length) return;
      gsap.fromTo(
        spans,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          overwrite: true,
        }
      );
    },
    { scope: ref, dependencies: [text] }
  );

  const chunks =
    splitType === "chars"
      ? text.split("").map((char) => (char === " " ? "\u00A0" : char))
      : text.split(/(\s+)/);

  const content =
    splitType === "chars"
      ? chunks.map((char, i) => (
          <span
            key={i}
            className="split-char inline-block"
            style={{ willChange: "transform, opacity" }}
          >
            {char}
          </span>
        ))
      : chunks.map((word, i) => (
          <span
            key={i}
            className="split-word inline-block"
            style={{ willChange: "transform, opacity", whiteSpace: "pre" }}
          >
            {word}
          </span>
        ));

  return React.createElement(
    tag,
    { ref, className },
    content
  );
};

export default SplitText;
