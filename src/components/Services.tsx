'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="servicos" className="py-16 md:py-32 bg-gradient-to-b from-deep-black to-deep-black/95 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-champagne/60 text-sm uppercase tracking-widest font-body block mb-4">
            Serviços Premium
          </span>
          <h2 className="font-editorial text-5xl md:text-6xl font-light text-ice-white">
            Técnicas <span className="italic text-champagne">Exclusivas</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative overflow-hidden glass rounded-2xl hover:border-champagne/30 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent" />
        
        {/* Glass overlay on hover */}
        <div className="absolute inset-0 bg-champagne/0 group-hover:bg-champagne/10 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4">
        <h3 className="font-editorial text-2xl text-ice-white group-hover:text-champagne transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-nude-rose/80 text-sm font-light leading-relaxed">
          {service.description}
        </p>
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-champagne font-body text-sm">{service.price}</span>
          <button className="text-champagne/60 hover:text-champagne text-sm uppercase tracking-wider transition-colors">
            Saiba mais →
          </button>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-champagne/0 via-champagne/20 to-champagne/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  )
}
