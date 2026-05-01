'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import MagneticButton from './MagneticButton'

export default function AboutBrand() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sobre" className="py-32 bg-gradient-to-b from-deep-black/95 to-deep-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60, filter: "blur(20px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] relative overflow-hidden rounded-2xl">
              <Image
                src="/angelica_!.webp"
                alt="Angelica - Fundadora Olhos de Boneca"
                fill
                className="object-cover"
                sizes="(lg: 50vw) 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/40 via-transparent to-transparent" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-champagne/20 rounded-2xl pointer-events-none" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-champagne/10 rounded-full pointer-events-none" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <span className="text-champagne/60 text-sm uppercase tracking-widest font-body block mb-4">
                Sobre a Marca
              </span>
              <h2 className="font-editorial text-4xl md:text-5xl font-light text-ice-white mb-6">
                Excelência em <span className="italic text-champagne">Cada Olhar</span>
              </h2>
            </div>

            <div className="space-y-6 text-nude-rose/90 font-light leading-relaxed">
              <p>
                No Olhos de Boneca Curitiba, não apenas aplicamos cílios — criamos experiências 
                de transformação que elevam sua autoestima e realçam sua beleza única.
              </p>
              <p>
                Combinamos técnicas exclusivas, produtos premium e um olhar apurado para design 
                para entregar resultados que são verdadeiras obras de arte em seus olhos.
              </p>
              <p>
                Somos referência em Curitiba pela nossa precisão técnica, atendimento personalizado 
                e compromisso inabalável com a excelência.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="font-editorial text-3xl text-champagne mb-2">5+</div>
                  <div className="text-xs text-nude-rose/60 uppercase tracking-wider">Anos de Mercado</div>
                </div>
                <div>
                  <div className="font-editorial text-3xl text-champagne mb-2">3000+</div>
                  <div className="text-xs text-nude-rose/60 uppercase tracking-wider">Clientes Atendidas</div>
                </div>
                <div>
                  <div className="font-editorial text-3xl text-champagne mb-2">100%</div>
                  <div className="text-xs text-nude-rose/60 uppercase tracking-wider">Satisfação</div>
                </div>
              </div>
            </div>

            <MagneticButton>
              <a href="#contact" className="premium-button inline-block mt-8">
                Agendar Consultoria
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
