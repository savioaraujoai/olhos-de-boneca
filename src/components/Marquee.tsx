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
    </div>
  )
}
