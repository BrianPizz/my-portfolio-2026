import React from 'react'

const Hero = () => {
  return (
    <div className='pb-20 pt-36 relative z-10'>
        <div className='text-center'>
            <h1 className='text-6xl md:text-8xl font-bold text-white mb-6'>
                Brian Pizzimenti
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto'>
                Full Stack Developer
            </p>
        </div>
        <a
          href="#projects"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Scroll to projects"
        >
          <span className="text-xs uppercase tracking-widest">Projects</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
    </div>
  )
}

export default Hero