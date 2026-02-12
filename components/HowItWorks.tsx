'use client'

import { LayoutGrid, Paintbrush, PlayCircle, BarChart3 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const steps: { number: string; title: string; description: string; icon: LucideIcon }[] = [
  {
    number: '01',
    title: 'Pick Your Formats',
    description: 'Browse trending templates across niches. Each one is a guided flow — choose a style, not write a prompt.',
    icon: LayoutGrid,
  },
  {
    number: '02',
    title: 'Add Your Brand',
    description: 'Drop in your product, brand voice, and visual style. The platform adapts every template to look and sound like you.',
    icon: Paintbrush,
  },
  {
    number: '03',
    title: 'Generate in Bulk',
    description: 'Batch create a week or month of content across multiple AI video models. Review, tweak, or let it run.',
    icon: PlayCircle,
  },
  {
    number: '04',
    title: 'Schedule & Learn',
    description: 'Push to your content calendar. Track performance. Feed winners back into the next batch automatically.',
    icon: BarChart3,
  },
]

export function HowItWorks() {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <section id="how-it-works" className="py-20 sm:py-28">
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
            The Flow
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            From zero to a full content calendar.
          </h2>
        </div>

        {/* Steps with flow line */}
        <div className="relative">
          {/* Animated vertical flow line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-px">
            <div
              className="w-px h-full bg-gradient-to-b from-accent/40 via-accent/20 to-transparent transition-all duration-1000"
              style={{
                transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
                transformOrigin: 'top',
              }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className={`group relative rounded-2xl bg-black/30 border border-white/10 p-8 overflow-hidden transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${200 + i * 150}ms` }}
                >
                  {/* Top accent border on hover */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex items-start gap-5">
                    <div className="flex flex-col items-center gap-2">
                      <span
                        className={`text-4xl font-bold text-accent/30 font-mono transition-all duration-700 ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                        }`}
                        style={{ transitionDelay: `${300 + i * 150}ms` }}
                      >
                        {step.number}
                      </span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 transition-all duration-300 group-hover:bg-accent/20 group-hover:scale-110">
                        <Icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-[var(--muted)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Connecting dots */}
        <div
          className={`my-10 flex items-center justify-center gap-2 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '900ms' }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="h-2.5 w-2.5 rounded-full bg-accent/40 transition-all duration-500"
                style={{
                  transitionDelay: `${1000 + i * 100}ms`,
                  transform: isVisible ? 'scale(1)' : 'scale(0)',
                }}
              />
              {i < 3 && <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-accent/40 to-accent/10" />}
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '1100ms' }}
        >
          <div className="inline-block rounded-2xl bg-accent/10 border border-accent/20 px-6 py-4">
            <p className="text-sm text-[var(--muted)]">
              <span className="text-accent font-semibold">The loop:</span> See what&apos;s trending →
              Make it yours → Post it → Learn what hit → Repeat, automatically. Every batch gets smarter.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
