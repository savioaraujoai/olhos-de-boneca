'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState, useRef, useCallback } from 'react'
import MagneticButton from './MagneticButton'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const ref = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  // Parallax reduzido no mobile para melhor performance
  const y = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "15%" : "40%"])

  // Detecta mobile e otimiza vídeo
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Otimização: pausa o vídeo quando não está visível (Intersection Observer)
  const handleVideoVisibility = useCallback(() => {
    if (!videoRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play()
        } else {
          videoRef.current?.pause()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const cleanup = handleVideoVisibility()
    return cleanup
  }, [handleVideoVisibility])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section ref={ref} className="relative h-[80vh] md:h-[85vh] lg:h-[90vh] w-full overflow-hidden">
      {/* Video Background com Parallax */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-0 h-[105%] sm:h-[110%] md:h-[130%] -top-[2.5%] sm:-top-[5%] md:-top-[15%]"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover cinematic-zoom"
          style={{ willChange: 'transform' }}
          onLoadedData={() => setIsLoaded(true)}
        >
          <source src="/video_olhosdeboneca2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/70 via-deep-black/50 to-deep-black/80" />
        <div className="absolute inset-0 bg-deep-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 md:px-6 text-center w-full">
        <div className="space-y-4 md:space-y-6 w-full max-w-4xl mx-auto">
          <h1 className="font-editorial text-4xl md:text-7xl lg:text-8xl font-light tracking-wide text-ice-white leading-tight">
            <span className="block overflow-hidden pb-1 md:pb-2">
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: isLoaded ? 0 : "100%", opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
                className="block"
              >
                Seu olhar é sua
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2 md:pb-4">
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
            className="font-body text-base md:text-xl text-nude-rose max-w-2xl mx-auto font-light tracking-wide px-2"
          >
            Extensão de cílios premium com sofisticação, técnica e identidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full justify-center items-center pt-6 md:pt-8"
          >
            <MagneticButton className="w-full sm:w-auto flex justify-center">
              <a href="#contact" className="premium-button text-xs md:text-sm px-6 md:px-8 py-3 md:py-4 w-[85%] sm:w-auto text-center">
                Agendar Horário
              </a>
            </MagneticButton>
            <MagneticButton className="w-full sm:w-auto flex justify-center">
              <a href="#academy" className="outline-button text-xs md:text-sm px-6 md:px-8 py-3 md:py-4 w-[85%] sm:w-auto text-center">
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
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="scroll-indicator flex flex-col items-center gap-2">
            <span className="text-champagne/60 text-[10px] md:text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-10 md:h-16 bg-gradient-to-b from-champagne/60 to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />
    </section>
  )
}
