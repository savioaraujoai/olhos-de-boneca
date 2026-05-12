'use client'

import { motion } from 'framer-motion'

export default function Marquee() {
  const content = (
    <div className="flex items-center space-x-12 pr-12">
      <span className="font-editorial text-2xl text-deep-black italic uppercase tracking-wider">Elegância</span>
      <span className="text-deep-black text-xl">✦</span>
      <span className="font-editorial text-2xl text-deep-black italic uppercase tracking-wider">Técnica Premium</span>
      <span className="text-deep-black text-xl">✦</span>
      <span className="font-editorial text-2xl text-deep-black italic uppercase tracking-wider">Sofisticação</span>
      <span className="text-deep-black text-xl">✦</span>
      <span className="font-editorial text-2xl text-deep-black italic uppercase tracking-wider">Olhos de Boneca</span>
      <span className="text-deep-black text-xl">✦</span>
    </div>
  )

  return (
    <div className="relative w-full z-20 -mt-8 sm:-mt-12 md:-mt-16">
      <div className="w-full bg-champagne py-4 md:py-5 overflow-hidden flex whitespace-nowrap border-y border-white/20 shadow-2xl" style={{ transform: 'rotate(-2deg) scale(1.05)' }}>
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex"
        >
          <div className="flex">{[...Array(4)].map((_, i) => <div key={`a-${i}`}>{content}</div>)}</div>
          <div className="flex">{[...Array(4)].map((_, i) => <div key={`b-${i}`}>{content}</div>)}</div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute -bottom-24 md:-bottom-32 left-1/2 -translate-x-1/2"
      >
        <div className="scroll-indicator flex flex-col items-center gap-2">
          <span className="text-champagne/60 text-[10px] md:text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 md:h-16 bg-gradient-to-b from-champagne/60 to-transparent" />
        </div>
      </motion.div>
    </div>
  )
}
