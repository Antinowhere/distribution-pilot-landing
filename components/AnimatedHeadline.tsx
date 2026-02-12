'use client'

import { useState } from 'react'

function CalendarIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
    </svg>
  )
}

function TrendLine({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  )
}

function BoltIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13.01 3h1l-1 7h3.51c.4 0 .62.19.4.66C12.97 17.55 11 21 11 21z"/>
    </svg>
  )
}

function TimerIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61 1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
    </svg>
  )
}

function BarChartIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z"/>
    </svg>
  )
}

function CheckIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

// "30 days" icons — above + some beneath "30", staggered
const daysIcons = [
  // Above
  { Icon: TrendLine, w: '0.35em', h: '0.35em', top: '-48%', left: '2%', color: 'text-accent', delay: 0 },
  { Icon: CalendarIcon, w: '0.2em', h: '0.2em', top: '-38%', left: '-6%', color: 'text-white/25', delay: 40 },
  { Icon: BarChartIcon, w: '0.18em', h: '0.18em', top: '-42%', right: '-4%', color: 'text-white/20', delay: 80 },
  { Icon: TrendLine, w: '0.22em', h: '0.22em', top: '-35%', right: '20%', color: 'text-accent/50', delay: 120 },
  { Icon: CalendarIcon, w: '0.16em', h: '0.16em', top: '-50%', left: '35%', color: 'text-white/15', delay: 160 },
  // Beneath "30" (left portion of the span)
  { Icon: BarChartIcon, w: '0.16em', h: '0.16em', bottom: '-35%', left: '0%', color: 'text-white/20', delay: 100 },
  { Icon: CalendarIcon, w: '0.14em', h: '0.14em', bottom: '-28%', left: '18%', color: 'text-accent/40', delay: 140 },
  { Icon: TrendLine, w: '0.18em', h: '0.18em', bottom: '-40%', left: '8%', color: 'text-accent/30', delay: 180 },
]

// "30 minutes" icons — below, sides + left of "30", staggered
const minutesIcons = [
  // Below
  { Icon: BoltIcon, w: '0.26em', h: '0.26em', bottom: '-38%', left: '25%', color: 'text-accent', delay: 0 },
  { Icon: BoltIcon, w: '0.18em', h: '0.18em', bottom: '-32%', right: '18%', color: 'text-accent/50', delay: 80 },
  { Icon: TimerIcon, w: '0.15em', h: '0.15em', bottom: '-40%', left: '55%', color: 'text-white/18', delay: 120 },
  { Icon: CheckIcon, w: '0.18em', h: '0.18em', bottom: '-35%', right: '45%', color: 'text-accent/40', delay: 200 },
  // Right side
  { Icon: TimerIcon, w: '0.2em', h: '0.2em', top: '25%', right: '-8%', color: 'text-white/25', delay: 40 },
  // Left of "30" (left side of span)
  { Icon: BoltIcon, w: '0.2em', h: '0.2em', top: '15%', left: '-8%', color: 'text-white/20', delay: 60 },
  { Icon: TimerIcon, w: '0.16em', h: '0.16em', top: '50%', left: '-10%', color: 'text-accent/40', delay: 140 },
  { Icon: CheckIcon, w: '0.14em', h: '0.14em', top: '-5%', left: '-6%', color: 'text-white/15', delay: 180 },
]

export function AnimatedHeadline() {
  const [daysHover, setDaysHover] = useState(false)
  const [contentHover, setContentHover] = useState(false)
  const [minutesHover, setMinutesHover] = useState(false)

  return (
    <h1 className="text-[clamp(2rem,7.5vw,6.5rem)] font-bold leading-[1.0] tracking-tight">
      {/* 30 DAYS — icons above, staggered */}
      <span
        className="relative inline-block cursor-default"
        onMouseEnter={() => setDaysHover(true)}
        onMouseLeave={() => setDaysHover(false)}
      >
        <span className="text-accent">30 days</span>

        {daysIcons.map((item, i) => {
          const Icon = item.Icon
          return (
            <Icon
              key={i}
              className={`absolute ${item.color} transition-all duration-300 ${
                daysHover ? 'opacity-100 scale-100 -translate-y-1' : 'opacity-0 scale-50 translate-y-1'
              }`}
              style={{
                width: item.w,
                height: item.h,
                top: item.top,
                bottom: item.bottom,
                left: item.left,
                right: item.right,
                transitionDelay: `${item.delay}ms`,
              }}
            />
          )
        })}
      </span>

      {' '}

      {/* OF CONTENT IN — underline draw effect */}
      <span
        className="relative inline-block cursor-default"
        onMouseEnter={() => setContentHover(true)}
        onMouseLeave={() => setContentHover(false)}
      >
        <span className="text-[var(--muted)]">of content in</span>

        {/* Animated underline that draws across */}
        <span
          className="absolute left-0 bottom-[0.05em] h-[0.04em] bg-gradient-to-r from-accent/60 via-accent to-accent/60 rounded-full transition-all duration-500 ease-out"
          style={{
            width: contentHover ? '100%' : '0%',
            opacity: contentHover ? 1 : 0,
          }}
        />

        {/* Subtle shimmer on the text */}
        <span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none transition-opacity duration-500"
          style={{
            opacity: contentHover ? 1 : 0,
            backgroundSize: '200% 100%',
            animation: contentHover ? 'shimmer 1.5s ease-in-out' : 'none',
          }}
        />
      </span>

      {' '}
      <br className="sm:hidden" />

      {/* 30 MINUTES — icons below and sides, staggered */}
      <span
        className="relative inline-block cursor-default"
        onMouseEnter={() => setMinutesHover(true)}
        onMouseLeave={() => setMinutesHover(false)}
      >
        <span className="text-accent">30 minutes</span>

        {minutesIcons.map((item, i) => {
          const Icon = item.Icon
          return (
            <Icon
              key={i}
              className={`absolute ${item.color} transition-all duration-300 ${
                minutesHover
                  ? 'opacity-100 scale-100' + (item.bottom ? ' translate-y-1' : item.top ? ' translate-x-1' : '')
                  : 'opacity-0 scale-50'
              }`}
              style={{
                width: item.w,
                height: item.h,
                top: item.top,
                bottom: item.bottom,
                left: item.left,
                right: item.right,
                transitionDelay: `${item.delay}ms`,
              }}
            />
          )
        })}
      </span>
    </h1>
  )
}
