'use client'

import { useEffect, useState } from 'react'

export function useCountUp(end: number, duration = 1500, trigger = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!trigger) return

    let start = 0
    const startTime = performance.now()

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(start + (end - start) * eased))

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [end, duration, trigger])

  return value
}
