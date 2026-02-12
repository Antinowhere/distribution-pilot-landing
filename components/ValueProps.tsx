'use client'

import { Layers, Zap, TrendingUp, Lock, CalendarDays, Brain } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const features: { title: string; description: string; icon: LucideIcon; hue: string }[] = [
  {
    title: 'Every Model, One Interface',
    description: 'Veo, Runway, Kling, Remotion — access the best AI video generators through guided templates. No prompt engineering required.',
    icon: Layers,
    hue: 'from-orange-500/15 to-amber-500/5',
  },
  {
    title: 'Batch Generation',
    description: 'Don\'t make one video. Make thirty. Generate an entire month of content in a single session with format variety baked in.',
    icon: Zap,
    hue: 'from-amber-500/15 to-yellow-500/5',
  },
  {
    title: 'Trend-Informed Templates',
    description: 'Guided formats based on what\'s actually performing right now on TikTok and Instagram. Updated continuously.',
    icon: TrendingUp,
    hue: 'from-orange-600/15 to-red-500/5',
  },
  {
    title: 'Brand Lock',
    description: 'Set your voice, colors, and style once. Every video stays on-brand whether you generate 5 or 500.',
    icon: Lock,
    hue: 'from-red-500/15 to-orange-500/5',
  },
  {
    title: 'Schedule & Publish Everywhere',
    description: 'Visual content calendar with drag-and-drop scheduling. Push to TikTok, Instagram Reels, YouTube Shorts, and more from one dashboard.',
    icon: CalendarDays,
    hue: 'from-amber-400/15 to-orange-500/5',
  },
  {
    title: 'Gets Smarter Every Batch',
    description: 'Track what performs. The next batch learns from the last. Your content gets sharper every cycle.',
    icon: Brain,
    hue: 'from-orange-500/15 to-rose-500/5',
  },
]

export function ValueProps() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="features" className="py-20 sm:py-28">
      {/* Top gradient divider */}
      <div className="mx-auto max-w-4xl mb-20 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div ref={ref} className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
            Why Distribution Pilot
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            The gap between one video and a content engine.
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`group relative rounded-2xl bg-black/30 border border-white/10 p-6 overflow-hidden transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${150 + i * 100}ms` }}
              >
                {/* Top accent border */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Subtle gradient bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.hue} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 border border-accent/20 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
