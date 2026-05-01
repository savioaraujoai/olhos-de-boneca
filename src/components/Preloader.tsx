'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simula o tempo de carregamento dos recursos iniciais (imagens e vídeos)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[100] bg-deep-black flex flex-col items-center justify-center"
        >
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
              className="font-editorial text-5xl md:text-7xl text-ice-white"
            >
              Olhos de <span className="italic text-champagne">Boneca</span>
            </motion.h1>
          </div>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-48 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent origin-center"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
