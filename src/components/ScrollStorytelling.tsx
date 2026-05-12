'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const sections = [
  {
    id: 1,
    textStart: 'Cada olhar conta uma ',
    highlight: 'história.',
    textEnd: '',
    subtext: 'Descubra a arte de realçar sua expressão única.'
  },
  {
    id: 2,
    textStart: 'Transformamos ',
    highlight: 'detalhes',
    textEnd: ' em arte.',
    subtext: 'Técnica de precisão e produtos de luxo.'
  },
  {
    id: 3,
    textStart: '',
    highlight: 'Elegância',
    textEnd: ' começa no olhar.',
    subtext: 'Sinta-se confiante com cílios perfeitamente desenhados.'
  }
]

export default function ScrollStorytelling() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {sections.map((section, index) => (
          <ScrollSection key={section.id} section={section} index={index} />
        ))}
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-champagne/5 pointer-events-none" />
    </section>
  )
}

function ScrollSection({ section, index }: { section: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Cria um movimento Parallax horizontal sutil conforme a tela rola
  const xMove = useTransform(scrollYProgress, [0, 1], index % 2 === 0 ? ["5%", "-5%"] : ["-5%", "5%"])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`mb-12 md:mb-20 last:mb-0 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
    >
      <div className={`max-w-3xl ${index % 2 !== 0 ? 'ml-auto' : ''}`}>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-16 bg-champagne/40" />
          <span className="text-champagne/60 text-sm uppercase tracking-widest font-body">
            {String(section.id).padStart(2, '0')}
          </span>
        </div>
        
        <motion.h2 
          style={{ x: xMove }}
          className="font-editorial text-4xl md:text-6xl font-light text-ice-white leading-tight mb-6"
        >
          {section.textStart}
          <span className="italic text-champagne">{section.highlight}</span>
          {section.textEnd}
        </motion.h2>
        
        <p className="text-nude-rose text-lg font-light leading-relaxed">
          {section.subtext}
        </p>
      </div>
    </motion.div>
  )
}
