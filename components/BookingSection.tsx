'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function BookingSection() {
  const { ref, isVisible } = useScrollReveal(0.1)

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'distribution-automation-strategy-call' })
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [])

  return (
    <section id="booking" className="py-20 sm:py-28">
      {/* Top gradient divider */}
      <div className="mx-auto max-w-4xl mb-20 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <div ref={ref} className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Accent glow behind header */}
        <div className="relative">
          <div
            className={`absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: 'radial-gradient(ellipse, rgba(255, 106, 0, 0.08) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
          />

          {/* Section Header */}
          <div
            className={`relative text-center mb-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
              Ready?
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Book a strategy call.
            </h2>
            <p className="text-[var(--muted)] max-w-xl mx-auto">
              We&apos;ll plan your first 30-day content batch, talk through your niche, and show you exactly
              how Distribution Pilot replaces your video production workflow.
            </p>
          </div>
        </div>

        {/* Cal.com Embed */}
        <div
          className={`rounded-2xl bg-black/30 border border-white/10 overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="h-[720px]">
            <Cal
              namespace="distribution-automation-strategy-call"
              calLink="liam-mason01/distribution-automation-strategy-call"
              style={{ width: '100%', height: '100%', overflow: 'scroll' }}
              config={{ layout: 'month_view' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
