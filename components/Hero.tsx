import Image from 'next/image'
import { AnimatedHeadline } from './AnimatedHeadline'

export function Hero() {
  return (
    <section id="hero" aria-label="Hero" className="flex flex-col items-center pt-32 pb-14 sm:pt-40 sm:pb-24">
      {/* Main headline - centered */}
      <div className="w-full text-center px-5 sm:px-6 lg:px-8">
        <AnimatedHeadline />
        <p className="mx-auto mt-6 max-w-3xl text-xl text-[var(--muted)] sm:text-2xl">
          AI video generation from every leading model — templated, batched, and scheduled. One platform, a full content calendar, zero production bottleneck.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#booking"
            className="focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-accent px-6 text-sm font-semibold text-black shadow-lg transition hover:bg-accent-hover"
          >
            Book a strategy call
          </a>
          <a
            href="#how-it-works"
            className="focus-ring inline-flex h-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 text-sm font-semibold text-foreground transition hover:bg-[var(--panel-strong)]"
          >
            See how it works
          </a>
        </div>
      </div>

      {/* Logo + brand at bottom */}
      <div className="mt-16 flex items-center justify-center gap-3">
        <Image
          src="/distribution-pilot-icon.png"
          alt="Distribution Pilot"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <div>
          <p className="text-sm font-semibold tracking-wide">Distribution Pilot</p>
          <p className="text-xs text-[var(--muted2)]">
            Bulk Content Automation
          </p>
        </div>
      </div>

      {/* Scroll indicator arrow */}
      <div className="mt-10 animate-bounce">
        <svg 
          className="w-6 h-6 text-[var(--muted2)]" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  )
}
