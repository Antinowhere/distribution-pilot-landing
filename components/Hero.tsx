import Image from 'next/image'
import { AnimatedHeadline } from './AnimatedHeadline'

export function Hero() {
  return (
    <section aria-label="Hero" className="flex flex-col items-center pt-32 pb-14 sm:pt-40 sm:pb-24">
      {/* Main headline - centered */}
      <div className="w-full text-center px-5 sm:px-6 lg:px-8">
        <AnimatedHeadline />
        <p className="mx-auto mt-6 max-w-3xl text-xl text-[var(--muted)] sm:text-2xl leading-relaxed">
          Not a tool. <span className="text-white font-medium">A teammate.</span> It joins your Slack or Discord, 
          runs organic social across TikTok &amp; Instagram, and reports back like a real employee.
        </p>
        
        <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--muted2)]">
          Direct reports via iMessage, WhatsApp, or Telegram. Team updates in your workspace. 
          <span className="text-[var(--muted)] italic"> Yes, this is apparently where we're headed.</span>
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#booking"
            className="focus-ring inline-flex h-14 items-center justify-center rounded-xl bg-accent px-8 text-base font-semibold text-black shadow-lg transition hover:bg-accent-hover"
          >
            Book a hiring call
          </a>
          <a
            href="#how-it-works"
            className="focus-ring inline-flex h-14 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--panel)] px-8 text-base font-semibold text-foreground transition hover:bg-[var(--panel-strong)]"
          >
            See how it works
          </a>
        </div>

        {/* Social proof hint */}
        <p className="mt-8 text-sm text-[var(--muted2)]">
          Monthly retainer. Cancel anytime. Like a contractor, but better.
        </p>
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
            Your AI Growth Team Member
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
