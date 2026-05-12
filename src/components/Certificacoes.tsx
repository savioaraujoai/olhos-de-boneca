'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const certificationImages = [
  '/foto_curso_1.png',
  '/foto_curso_2.png',
  '/foto_curso_3.png',
  '/foto_curso_4.png',
  '/foto_curso_5.png',
  '/foto.png',
]

export default function Certificacoes() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    const totalWidth = marquee.scrollWidth / 2
    
    const animation = gsap.to(marquee, {
      x: -totalWidth,
      duration: 60, // Movimento extremamente lento e elegante
      ease: 'none',
      repeat: -1,
    })

    return () => {
      animation.kill()
    }
  }, [])

  return (
    <section className="py-16 md:py-24 bg-transparent overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-champagne/50 text-xs uppercase tracking-[0.4em] font-body block mb-4">
          Autoridade & Reconhecimento
        </span>
        <h2 className="font-editorial text-4xl md:text-6xl font-light text-ice-white">
          Momentos & <span className="italic text-champagne">Certificações</span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden py-10">
        {/* Soft Edge Blurs */}
        <div className="absolute top-0 left-0 w-32 md:w-96 h-full bg-gradient-to-r from-deep-night to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 md:w-96 h-full bg-gradient-to-l from-deep-night to-transparent z-10 pointer-events-none" />

        <div className="flex">
          <div ref={marqueeRef} className="flex gap-12 pr-12 whitespace-nowrap">
            {[...certificationImages, ...certificationImages].map((src, index) => (
              <div
                key={index}
                className="relative w-[300px] md:w-[600px] aspect-[16/10] flex-shrink-0 group overflow-hidden bg-black/40"
              >
                <Image
                  src={src}
                  alt={`Certificação ${index}`}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-[1500ms] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 300px, 600px"
                />
                {/* Thin Frame Overlay */}
                <div className="absolute inset-4 border border-white/[0.05] pointer-events-none transition-all duration-700 group-hover:border-champagne/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-night/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
