'use client'

import { Video, Clock, Repeat } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useCountUp } from '@/hooks/useCountUp'

const stats: { value: number; prefix?: string; suffix?: string; label: string; icon: LucideIcon }[] = [
  { value: 30, suffix: '+', label: 'Videos per batch', icon: Video },
  { value: 30, prefix: '<', suffix: ' min', label: 'From zero to scheduled', icon: Clock },
  { value: 0, label: 'Recursive improvement', icon: Repeat },
]

export function StatsBar() {
  const { ref, isVisible } = useScrollReveal(0.3)
  const count0 = useCountUp(stats[0].value, 1200, isVisible)
  const count1 = useCountUp(stats[1].value, 1400, isVisible)

  return (
    <section className="py-12">
      <div ref={ref} className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x sm:divide-white/10">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            const displayValue = i === 0
              ? `${count0}${stat.suffix || ''}`
              : i === 1
              ? `${stat.prefix || ''}${count1}${stat.suffix || ''}`
              : '∞'

            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center gap-2 px-4 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <Icon className="h-5 w-5 text-accent/60 mb-1" strokeWidth={1.5} />
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-accent tabular-nums">
                  {displayValue}
                </span>
                <span className="text-xs text-[var(--muted2)] uppercase tracking-widest font-medium">
                  {stat.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
