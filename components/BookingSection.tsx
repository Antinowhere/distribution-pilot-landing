'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect, useState } from 'react'

export function BookingSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'distribution-automation-strategy-call' })
      cal('ui', { 
        hideEventTypeDetails: false, 
        layout: 'month_view',
        theme: 'dark',
        styles: {
          branding: { brandColor: '#f97316' }  // Orange accent
        }
      })
      setIsLoaded(true)
    })()
  }, [])

  return (
    <section id="booking" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
            Ready to Hire?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Book your onboarding call.
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            We'll learn about your product, map out the content strategy, and 
            get your AI growth marketer set up in your team workspace.
          </p>
        </div>

        {/* Pricing hint */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-4 py-2">
            <span className="text-accent text-sm font-medium">Monthly retainer</span>
            <span className="text-[var(--muted2)] text-sm">·</span>
            <span className="text-[var(--muted)] text-sm">Pay like a salary, not a subscription</span>
          </div>
        </div>

        {/* Cal.com Embed */}
        <div className="rounded-2xl bg-black/30 border border-white/10 overflow-hidden relative">
          {/* Loading state */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-[var(--muted)]">Loading calendar...</p>
              </div>
            </div>
          )}
          <div className="h-[720px]">
            <Cal
              namespace="distribution-automation-strategy-call"
              calLink="liam-mason01/distribution-automation-strategy-call"
              style={{ width: '100%', height: '100%', overflow: 'scroll' }}
              config={{ layout: 'month_view', theme: 'dark' }}
            />
          </div>
        </div>

        {/* Fallback link */}
        <div className="text-center mt-6">
          <p className="text-sm text-[var(--muted2)]">
            Calendar not loading?{' '}
            <a 
              href="https://cal.com/liam-mason01/distribution-automation-strategy-call" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Book directly on Cal.com →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
