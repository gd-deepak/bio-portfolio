import { useEffect, useRef } from 'react'
import styles from './AnimatedBg.module.css'

export default function AnimatedBg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const COLORS = [
      [232, 93, 4],
      [217, 119, 6],
      [251, 191, 36],
      [194, 65, 12],
    ]

    const particles = Array.from({ length: 60 }, () => {
      const c = COLORS[Math.floor(Math.random() * COLORS.length)]
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2.2 + 0.6,
        dx: (Math.random() - 0.5) * 0.25,
        dy: -(Math.random() * 0.35 + 0.08),
        alpha: Math.random() * 0.28 + 0.06,
        color: c,
        phase: Math.random() * Math.PI * 2,
        speed: 0.015 + Math.random() * 0.015,
      }
    })

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.phase += p.speed
        const glow = 0.7 + 0.3 * Math.sin(p.phase)
        const a = p.alpha * glow
        const [r, g, b] = p.color

        // outer glow
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5)
        grad.addColorStop(0, `rgba(${r},${g},${b},${a * 0.6})`)
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()

        // core dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(a * 2.5, 0.9)})`
        ctx.fill()

        p.x += p.dx
        p.y += p.dy

        if (p.x < -20) p.x = canvas.width + 20
        if (p.x > canvas.width + 20) p.x = -20
        if (p.y < -20) {
          p.y = canvas.height + 20
          p.x = Math.random() * canvas.width
        }
      }

      // draw connecting lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.06
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(232,93,4,${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} />
}
