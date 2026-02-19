"use client";

import React from "react";
import SplitText from "./SplitText";

const Hero = () => {
  return (
    <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col justify-center items-center text-center pt-24 pb-12">
            <SplitText
              text="Brian Pizzimenti"
              tag="h1"
              className="text-7xl md:text-9xl font-bold text-white tracking-tight overflow-hidden"
              splitType="chars"
              delay={40}
              duration={1}
              ease="power3.out"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
            />
            <p className="text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto text-readable mt-6">
              Full Stack Developer
            </p>
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