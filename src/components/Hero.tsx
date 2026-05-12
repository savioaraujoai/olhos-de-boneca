'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const titleLinesRef = useRef<(HTMLSpanElement | null)[]>([])
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Revelação inicial (Voltando para a cadência original)
      gsap.to(containerRef.current, {
        opacity: 1,
        duration: 1.5,
        ease: 'power2.inOut'
      })

      // 2. Zoom de câmera lento
      gsap.to(videoRef.current, {
        scale: 1.08,
        duration: 30,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // 3. Revelação do Título
      titleLinesRef.current.forEach((line, index) => {
        if (!line) return
        gsap.fromTo(line, 
          { y: '120%', skewY: 7, opacity: 0 },
          { 
            y: 0, 
            skewY: 0, 
            opacity: 1, 
            duration: 1.5, 
            delay: 0.5 + (index * 0.2), 
            ease: 'expo.out' 
          }
        )
      })

      // 4. Revelação do conteúdo
      gsap.fromTo(contentRef.current, 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, delay: 1.2, ease: 'power2.out' }
      )

      // 5. Flutuação do ícone de scroll
      gsap.to('.scroll-indicator', {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2.5
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full overflow-hidden opacity-0"
    >
      {/* Video Background (The Frame) */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src="/video_olhosdeboneca2.mp4" type="video/mp4" />
        </video>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-night/60 via-transparent to-deep-night/80" />
        <div className="absolute inset-0 bg-deep-night/20" />
        
        {/* Soft Breathing Glow */}
        <div className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] bg-wine-cinema/10 blur-[150px] animate-pulse" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Headline Narrativa */}
          <h1 className="font-editorial text-5xl md:text-8xl lg:text-9xl font-light tracking-tight text-ice-white leading-[0.9]">
            <span className="block overflow-hidden py-4">
              <span 
                ref={el => { titleLinesRef.current[0] = el }}
                className="block"
              >
                Seu olhar é sua
              </span>
            </span>
            <span className="block overflow-hidden py-4">
              <span 
                ref={el => { titleLinesRef.current[1] = el }}
                className="block font-medium italic text-champagne"
              >
                assinatura.
              </span>
            </span>
          </h1>
          
          <div ref={contentRef} className="mt-12 space-y-10">
            <p className="font-body text-base md:text-lg text-ice-white/70 max-w-xl mx-auto font-light tracking-[0.2em] uppercase">
              Extensão de cílios premium com identidade única.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <MagneticButton>
                <a href="#contact" className="premium-button">
                  Agendar Experiência
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="#academy" className="outline-button">
                  Olhos de Boneca Academy
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Scroll Indicator Flutuante */}
        <div className="scroll-indicator absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-ice-white/30 text-[9px] uppercase tracking-[0.4em] font-light">Scroll</span>
          <div className="relative flex flex-col items-center">
            <div className="w-px h-10 bg-gradient-to-b from-champagne/40 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-champagne/50 mt-1 shadow-[0_0_8px_rgba(214,180,124,0.5)]" />
          </div>
        </div>
      </div>

      {/* Frame Borders (Subtle Luxury) */}
      <div className="absolute top-0 left-0 w-full h-[10vh] bg-gradient-to-b from-deep-night to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-[15vh] bg-gradient-to-t from-deep-night to-transparent opacity-80" />
    </section>
  )
}
