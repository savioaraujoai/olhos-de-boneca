'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import MagneticButton from './MagneticButton'

gsap.registerPlugin(ScrollTrigger)

export default function AboutBrand() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal da Imagem (Editorial Zoom & Fade)
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -50,
        scale: 1.1,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      })

      // Reveal do Texto
      gsap.from(textRef.current, {
        opacity: 0,
        x: 50,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section 
      id="sobre" 
      ref={containerRef}
      className="py-16 md:py-24 bg-transparent overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Image Side */}
          <div ref={imageRef} className="relative group">
            <div className="aspect-[3/4] relative overflow-hidden grayscale-[0.2] hover:grayscale-0 transition-all duration-1000">
              <Image
                src="/angelica_!.png"
                alt="Angelica - Fundadora Olhos de Boneca"
                fill
                className="object-cover"
                sizes="(lg: 50vw) 100vw"
              />
              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-night/60 via-transparent to-transparent" />
            </div>

            {/* Frame Decorativo Premium */}
            <div className="absolute -inset-3 border border-champagne/40 pointer-events-none transition-all duration-700 group-hover:border-champagne/70" />
            <div className="absolute -inset-6 border border-champagne/20 pointer-events-none" />
          </div>

          {/* Text Side */}
          <div ref={textRef} className="space-y-12">
            <div className="space-y-6">
              <span className="text-champagne/40 text-xs uppercase tracking-[0.5em] font-body block">
                A Alma do Studio
              </span>
              <h2 className="font-editorial text-5xl md:text-7xl font-light text-ice-white leading-tight">
                Excelência em <br />
                <span className="italic text-champagne">Cada Detalhe</span>
              </h2>
            </div>

            <div className="space-y-8 text-ice-white/50 font-light leading-relaxed text-lg tracking-wide max-w-xl">
              <p>
                No Olhos de Boneca Curitiba, não apenas aplicamos cílios — criamos experiências
                de transformação que elevam sua autoestima e realçam sua beleza única.
              </p>
              <p>
                Combinamos técnicas exclusivas, produtos premium e um olhar apurado para design
                para entregar resultados que são verdadeiras obras de arte em seus olhos.
              </p>
            </div>

            {/* Statistics (Minimalist) */}
            <div className="pt-12 border-t border-white/[0.05]">
              <div className="grid grid-cols-3 gap-12">
                <div className="space-y-2">
                  <div className="font-editorial text-4xl text-champagne">5+</div>
                  <div className="text-[10px] text-ice-white/30 uppercase tracking-[0.2em]">Anos</div>
                </div>
                <div className="space-y-2">
                  <div className="font-editorial text-4xl text-champagne">3k+</div>
                  <div className="text-[10px] text-ice-white/30 uppercase tracking-[0.2em]">Vidas</div>
                </div>
                <div className="space-y-2">
                  <div className="font-editorial text-4xl text-champagne">100%</div>
                  <div className="text-[10px] text-ice-white/30 uppercase tracking-[0.2em]">Luxo</div>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <MagneticButton>
                <a href="#contact" className="premium-button">
                  Agendar Consultoria
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
