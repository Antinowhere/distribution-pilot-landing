import Image from 'next/image'
import { AnimatedHeadline } from './AnimatedHeadline'

export function Hero() {
  return (
    <section aria-label="Hero" className="flex flex-col items-center pt-32 pb-14 sm:pt-40 sm:pb-24">
      {/* Main headline - centered */}
      <div className="w-full text-center px-5 sm:px-6 lg:px-8">
        <AnimatedHeadline />
        <p className="mx-auto mt-6 max-w-3xl text-xl text-[var(--muted)] sm:text-2xl">
          AI-generated video at scale—for software and ecommerce brands that need more customers, cheaper, automatically.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#booking"
            className="focus-ring inline-flex h-12 items-center justify-center rounded-xl bg-accent px-6 text-sm font-semibold text-black shadow-lg transition hover:bg-accent-hover"
          >
            Book a strategy call
          </a>
          <a
            href="#features"
            className="focus-ring inline-flex h-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 text-sm font-semibold text-foreground transition hover:bg-[var(--panel-strong)]"
          >
            See the features
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
            Data-Powered Content Automation
          </p>
        </div>
      </div>
    </section>
  )
}
