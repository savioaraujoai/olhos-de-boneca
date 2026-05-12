'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import MagneticButton from './MagneticButton'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-champagne/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60, filter: "blur(20px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="space-y-10"
        >
          {/* Decorative line */}
          <div className="flex justify-center mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
          </div>

          <h2 className="font-editorial text-5xl md:text-7xl lg:text-8xl font-light text-ice-white leading-tight">
            Seu olhar merece
            <span className="block font-medium italic text-champagne mt-4">exclusividade.</span>
          </h2>

          <p className="text-nude-rose/80 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Agende seu horário e descubra por que somos a escolha premium de Curitiba.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-8"
          >
            <MagneticButton>
              <a
                href="#contact"
                className="premium-button text-lg px-12 py-5 inline-block"
              >
                Agendar Horário
              </a>
            </MagneticButton>
          </motion.div>

          {/* Decorative line */}
          <div className="flex justify-center mt-16">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
