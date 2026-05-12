'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Bloqueia scroll enquanto o preloader está ativo
    document.body.style.overflow = 'hidden'

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false)
          document.body.style.overflow = ''
        }
      })

      // Entrada rápida e elegante
      tl.fromTo(textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }
      )
      .fromTo(lineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.6, ease: 'power2.inOut' },
        '-=0.3'
      )
      // Pausa breve antes de sumir
      .to({}, { duration: 0.4 })
      // Saída rápida e completa
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut'
      })
    })

    return () => {
      ctx.revert()
      document.body.style.overflow = ''
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] bg-deep-night flex flex-col items-center justify-center"
    >
      <div className="overflow-hidden mb-5">
        <h1
          ref={textRef}
          className="font-editorial text-4xl md:text-6xl text-ice-white tracking-widest uppercase font-light"
        >
          Olhos de <span className="italic text-champagne lowercase">Boneca</span>
        </h1>
      </div>

      <div
        ref={lineRef}
        className="w-24 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent origin-center"
      />
    </div>
  )
}

