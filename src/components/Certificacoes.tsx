'use client'

import { motion } from 'framer-motion'
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
  return (
    <section className="py-24 md:py-32 bg-deep-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="text-champagne/60 text-sm uppercase tracking-widest font-body block mb-4">
          Nossa Trajetória
        </span>
        <h2 className="font-editorial text-4xl md:text-6xl font-light text-ice-white">
          Momentos & <span className="italic text-champagne">Certificações</span>
        </h2>
      </div>

      <div className="relative w-full flex overflow-hidden group py-10">
        {/* Gradientes nas bordas para suavizar a entrada e saída */}
        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-deep-black to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-deep-black to-transparent z-10 pointer-events-none" />

        <div className="flex">
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            className="flex gap-6 pr-6"
          >
            {certificationImages.map((src, index) => (
              <div
                key={`a-${index}`}
                className="relative w-[280px] md:w-[450px] aspect-[4/3] flex-shrink-0 rounded-2xl overflow-hidden glass p-1 transition-transform duration-500 hover:scale-105 hover:z-20"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/40">
                  <Image
                    src={src}
                    alt={`Momento ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 450px"
                  />
                  {/* Overlay suave que desaparece no hover */}
                  <div className="absolute inset-0 bg-deep-black/30 opacity-100 hover:opacity-0 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            className="flex gap-6 pr-6"
          >
            {certificationImages.map((src, index) => (
              <div
                key={`b-${index}`}
                className="relative w-[280px] md:w-[450px] aspect-[4/3] flex-shrink-0 rounded-2xl overflow-hidden glass p-1 transition-transform duration-500 hover:scale-105 hover:z-20"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/40">
                  <Image
                    src={src}
                    alt={`Momento duplicado ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 280px, 450px"
                  />
                  <div className="absolute inset-0 bg-deep-black/30 opacity-100 hover:opacity-0 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
