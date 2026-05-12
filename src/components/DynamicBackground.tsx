'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function DynamicBackground() {
  const bgRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!bgRef.current) return

    // Transições de cor de fundo - Mais perceptíveis
    // Início (Deep Black) -> Meio (Editorial Wine) -> Fim (Deep Black)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    })

    tl.to(bgRef.current, {
      backgroundColor: '#2D0A0A', // Wine mais saturado
      duration: 1,
    })
    .to(bgRef.current, {
      backgroundColor: '#0A0A0A', // Retorno ao Preto
      duration: 1,
    })

    // Movimento do Glow
    gsap.to(glowRef.current, {
      x: '30vw',
      y: '20vh',
      opacity: 0.3,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none overflow-hidden">
      {/* Base Background */}
      <div 
        ref={bgRef} 
        className="absolute inset-0 bg-deep-night transition-colors duration-[2000ms]" 
      />
      
      {/* Atmospheric Glows - Mais intensos */}
      <div 
        ref={glowRef}
        className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-wine-cinema/30 blur-[150px] mix-blend-screen"
      />
      
      <div className="absolute top-[30%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-champagne/10 blur-[120px] mix-blend-screen" />
      
      {/* Grain/Texture Overlay sutil extra */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </div>
  )
}
