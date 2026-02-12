'use client'

import { useEffect, useState } from 'react'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How' },
  { id: 'booking', label: 'Book' },
]

export function ScrollIndicator() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id)
        if (el && scrollY >= el.offsetTop) {
          setActive(sections[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-4">
      {sections.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group flex items-center gap-3"
        >
          <span
            className={`text-[10px] uppercase tracking-widest font-medium transition-all duration-300 ${
              active === s.id
                ? 'text-accent opacity-100 translate-x-0'
                : 'text-white/0 opacity-0 translate-x-2 group-hover:text-[var(--muted2)] group-hover:opacity-100 group-hover:translate-x-0'
            }`}
          >
            {s.label}
          </span>
          <div className="relative flex items-center justify-center">
            <div
              className={`rounded-full transition-all duration-300 ${
                active === s.id
                  ? 'h-3 w-3 bg-accent shadow-[0_0_8px_rgba(255,106,0,0.4)]'
                  : 'h-2 w-2 bg-white/20 group-hover:bg-white/40'
              }`}
            />
          </div>
        </a>
      ))}
    </nav>
  )
}
