'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouch) return

    const dot = dotRef.current
    const glow = glowRef.current

    if (!dot || !glow) return

    const onMouseMove = (e: MouseEvent) => {
      // Suavidade extrema no ponto central
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      })

      // Brilho segue com um leve atraso (lag suave)
      gsap.to(glow, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out'
      })
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive = target.closest('button') || target.closest('a') || target.classList.contains('cursor-pointer')

      if (isInteractive) {
        gsap.to(dot, { scale: 3, opacity: 0.5, duration: 0.3 })
        gsap.to(glow, { scale: 2, opacity: 0.2, duration: 0.3 })
      } else {
        gsap.to(dot, { scale: 1, opacity: 1, duration: 0.3 })
        gsap.to(glow, { scale: 1, opacity: 0.1, duration: 0.3 })
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', onMouseOver)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Glow Sutil (Aura) */}
      <div 
        ref={glowRef}
        className="absolute top-0 left-0 w-20 h-20 -mt-10 -ml-10 bg-champagne/10 rounded-full blur-xl mix-blend-screen will-change-transform"
      />
      
      {/* Ponto Central — Tamanho aumentado */}
      <div 
        ref={dotRef}
        className="absolute top-0 left-0 w-2.5 h-2.5 -mt-[5px] -ml-[5px] bg-champagne rounded-full shadow-[0_0_14px_rgba(214,180,124,0.7)] will-change-transform"
      />
    </div>
  )
}
