'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Fio a Fio',
    description: 'Aplicação individual para um visual natural e sofisticado.',
    image: '/fio_a_fio.png',
    price: 'A partir de R$ 250'
  },
  {
    title: 'Volume Russo',
    description: 'Técnica avançada para um olhar impactante e volumoso.',
    image: '/volume_russo.png',
    price: 'A partir de R$ 350'
  },
  {
    title: 'Fox Eyes',
    description: 'Efeito de alongamento para um olhar felino e moderno.',
    image: '/fox_eyes.png',
    price: 'A partir de R$ 400'
  },
  {
    title: 'Lash Lifting',
    description: 'Realce seus cílios naturais com curvatura perfeita.',
    image: '/lash_lifting.png',
    price: 'A partir de R$ 180'
  }
]

export default function Services() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.services-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-title',
            start: 'top 90%',
          }
        }
      )

      gsap.fromTo('.service-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 90%',
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="servicos" className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 services-title">
          <span className="text-champagne/50 text-xs uppercase tracking-[0.4em] font-body block mb-4">
            A Arte do Olhar
          </span>
          <h2 className="font-editorial text-4xl md:text-6xl font-light text-ice-white">
            Técnicas <span className="italic text-champagne">Exclusivas</span>
          </h2>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card group relative overflow-hidden glass rounded-xl transition-all duration-700 hover:border-champagne/30"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-night/80 via-deep-night/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 space-y-3">
                <h3 className="font-editorial text-2xl text-ice-white group-hover:text-champagne transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-ice-white/50 text-sm font-light leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                  <span className="text-champagne font-body text-xs tracking-widest">{service.price}</span>
                  <button className="text-ice-white/30 hover:text-champagne text-[10px] uppercase tracking-[0.3em] transition-all duration-500">
                    Ver mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
