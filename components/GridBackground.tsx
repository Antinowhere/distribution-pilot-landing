'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  baseX: number
  baseY: number
  radius: number
  pulsePhase: number
}

const NODE_COUNT = 50
const CONNECTION_DIST = 180
const DRIFT_SPEED = 0.15
const DRIFT_RANGE = 40

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const scrollRef = useRef(0)
  const frameRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let w = 0
    let h = 0

    function resize() {
      w = window.innerWidth
      h = window.innerHeight * 3 // cover full scroll height
      canvas!.width = w * window.devicePixelRatio
      canvas!.height = window.innerHeight * window.devicePixelRatio
      canvas!.style.width = `${w}px`
      canvas!.style.height = `${window.innerHeight}px`
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    function initNodes() {
      nodesRef.current = []
      for (let i = 0; i < NODE_COUNT; i++) {
        const x = Math.random() * w
        const y = Math.random() * h
        nodesRef.current.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * DRIFT_SPEED,
          vy: (Math.random() - 0.5) * DRIFT_SPEED,
          radius: Math.random() * 1.5 + 0.5,
          pulsePhase: Math.random() * Math.PI * 2,
        })
      }
    }

    function onScroll() {
      scrollRef.current = window.scrollY
    }

    resize()
    initNodes()

    window.addEventListener('resize', () => {
      resize()
      initNodes()
    })
    window.addEventListener('scroll', onScroll, { passive: true })

    let running = true
    const accent = { r: 255, g: 106, b: 0 }

    function draw(time: number) {
      if (!running || !ctx) return

      ctx.clearRect(0, 0, w, window.innerHeight)

      const scroll = scrollRef.current
      const viewTop = scroll
      const viewBottom = scroll + window.innerHeight
      const t = time * 0.001

      const nodes = nodesRef.current

      // Update positions — gentle drift around base
      for (const node of nodes) {
        node.x = node.baseX + Math.sin(t * 0.3 + node.pulsePhase) * DRIFT_RANGE
        node.y = node.baseY + Math.cos(t * 0.2 + node.pulsePhase * 1.3) * DRIFT_RANGE * 0.7
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i]
        const ay = a.y - scroll // screen-space y

        // Skip if way off screen
        if (ay < -CONNECTION_DIST || ay > window.innerHeight + CONNECTION_DIST) continue

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j]
          const by = b.y - scroll

          const dx = a.x - b.x
          const dy = ay - by
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.12

            // Pulse traveling along connections
            const pulsePos = (Math.sin(t * 1.5 + i * 0.5 + j * 0.3) + 1) * 0.5
            const pulseAlpha = pulsePos * 0.08

            // Mix white and accent
            const r = Math.round(255 * (1 - pulsePos) + accent.r * pulsePos)
            const g = Math.round(255 * (1 - pulsePos) + accent.g * pulsePos)
            const b2 = Math.round(255 * (1 - pulsePos) + accent.b * pulsePos)

            ctx.beginPath()
            ctx.moveTo(a.x, ay)
            ctx.lineTo(b.x, by)
            ctx.strokeStyle = `rgba(${r}, ${g}, ${b2}, ${alpha + pulseAlpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const ny = node.y - scroll
        if (ny < -20 || ny > window.innerHeight + 20) continue

        const pulse = (Math.sin(t * 2 + node.pulsePhase) + 1) * 0.5
        const isAccent = pulse > 0.7

        const nodeAlpha = 0.15 + pulse * 0.15
        const r = isAccent ? accent.r : 255
        const g = isAccent ? accent.g : 255
        const b2 = isAccent ? accent.b : 255

        ctx.beginPath()
        ctx.arc(node.x, ny, node.radius + pulse * 0.8, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b2}, ${nodeAlpha})`
        ctx.fill()

        // Glow on accent nodes
        if (isAccent) {
          ctx.beginPath()
          ctx.arc(node.x, ny, node.radius + 4, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${accent.r}, ${accent.g}, ${accent.b}, 0.04)`
          ctx.fill()
        }
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    frameRef.current = requestAnimationFrame(draw)

    return () => {
      running = false
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
