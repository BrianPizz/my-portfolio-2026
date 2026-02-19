"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import SplitText from "./SplitText";

const Hero = () => {
  return (
    <div className="relative z-10 min-h-[100dvh] flex flex-col">
        <div className="flex-1 flex flex-col justify-center items-center text-center pt-24 pb-12">
            <SplitText
              text="Brian Pizzimenti"
              tag="h1"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white tracking-tight max-w-[90vw] mx-auto overflow-hidden font-[family-name:var(--font-display)]"
              splitType="chars"
              delay={40}
              duration={1}
              ease="power3.out"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
            />
            <p className="text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto text-readable mt-6 font-[family-name:var(--font-heading)]">
              Full Stack Developer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-4 text-white/80 text-base sm:text-lg text-readable font-[family-name:var(--font-heading)] max-w-[min(100%,90vw)]">
              <span className="inline-flex items-center gap-2 shrink-0">
                <Phone className="w-4 h-4 shrink-0" aria-hidden />
                (440) 503-5647
              </span>
              <a href="mailto:bpizzimentijr@outlook.com" className="inline-flex items-center gap-2 text-white/90 hover:text-white underline underline-offset-2 transition-colors break-all min-w-0">
                <Mail className="w-4 h-4 shrink-0" aria-hidden />
                <span className="break-all">bpizzimentijr@outlook.com</span>
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" aria-hidden />
                Orlando, FL
              </span>
            </div>
        </div>
        <a
          href="#projects"
          className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors text-readable pb-8"
          aria-label="Scroll to projects"
        >
          <span className="text-sm uppercase tracking-widest">Projects</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
    </div>
  )
}

export default Hero