'use client'

import { useState } from 'react'

function PersonIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  )
}

function ChatIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
    </svg>
  )
}

function ChartIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
    </svg>
  )
}

export function AnimatedHeadline() {
  const [hireHover, setHireHover] = useState(false)
  const [aiHover, setAiHover] = useState(false)
  const [marketerHover, setMarketerHover] = useState(false)

  return (
    <h1 className="text-[clamp(2rem,7vw,5.5rem)] font-bold leading-[1.1] tracking-tight">
      {/* HIRE */}
      <span
        className="relative inline-block cursor-default"
        onMouseEnter={() => setHireHover(true)}
        onMouseLeave={() => setHireHover(false)}
      >
        <span className="text-accent">Hire</span>
        
        <PersonIcon
          className={`absolute -top-2 -right-4 w-8 h-8 text-accent/60 transition-all duration-300 ${
            hireHover 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-50'
          }`}
        />
        <PersonIcon
          className={`absolute -bottom-2 -left-3 w-6 h-6 text-accent/40 transition-all duration-300 delay-100 ${
            hireHover 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-50'
          }`}
        />
      </span>

      {' an '}

      {/* AI */}
      <span
        className="relative inline-block cursor-default"
        onMouseEnter={() => setAiHover(true)}
        onMouseLeave={() => setAiHover(false)}
      >
        <span className="text-accent">AI</span>
        {/* Pulsing glow */}
        <span 
          className={`absolute inset-0 rounded-lg bg-accent/20 blur-xl transition-opacity duration-500 ${
            aiHover ? 'opacity-100 animate-pulse' : 'opacity-0'
          }`}
        />
      </span>

      <br className="sm:hidden" />

      {' '}

      {/* GROWTH MARKETER */}
      <span
        className="relative inline-block cursor-default"
        onMouseEnter={() => setMarketerHover(true)}
        onMouseLeave={() => setMarketerHover(false)}
      >
        Growth Marketer
        
        {/* Chat bubbles and chart icons */}
        <ChatIcon
          className={`absolute -top-4 left-1/4 w-6 h-6 text-white/60 transition-all duration-300 ${
            marketerHover 
              ? 'opacity-100 scale-100 -translate-y-1' 
              : 'opacity-0 scale-50'
          }`}
        />
        <ChartIcon
          className={`absolute -top-3 right-1/4 w-7 h-7 text-accent/60 transition-all duration-300 delay-75 ${
            marketerHover 
              ? 'opacity-100 scale-100 -translate-y-1' 
              : 'opacity-0 scale-50'
          }`}
        />
        <ChatIcon
          className={`absolute -bottom-3 left-1/3 w-5 h-5 text-white/40 transition-all duration-300 delay-150 ${
            marketerHover 
              ? 'opacity-100 scale-100 translate-y-1' 
              : 'opacity-0 scale-50'
          }`}
        />
      </span>
    </h1>
  )
}
