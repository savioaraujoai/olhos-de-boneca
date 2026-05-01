'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  // O video vai descer 40% mais devagar que o scroll da página (Parallax)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Video Background com Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[130%] -top-[15%]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover cinematic-zoom"
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src="/Video_Hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/70 via-deep-black/50 to-deep-black/80" />
        <div className="absolute inset-0 bg-deep-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="space-y-6">
          <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-ice-white leading-tight">
            <span className="block overflow-hidden pb-2">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: isLoaded ? 0 : "100%", opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
                className="block"
              >
                Seu olhar é sua
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-4">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: isLoaded ? 0 : "100%", opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.4 }}
                className="block font-medium italic text-champagne"
              >
                assinatura.
              </motion.span>
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="font-body text-lg md:text-xl text-nude-rose max-w-2xl mx-auto font-light tracking-wide"
          >
            Extensão de cílios premium com sofisticação, técnica e identidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <MagneticButton>
              <a href="#contact" className="premium-button">
                Agendar Horário
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="#academy" className="outline-button">
                Conhecer Academy
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="scroll-indicator flex flex-col items-center gap-2">
            <span className="text-champagne/60 text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-champagne/60 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
    </section>
  )
}
