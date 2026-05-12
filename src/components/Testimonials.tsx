'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    name: 'Juliana Mendes',
    role: 'Arquiteta',
    text: 'A experiência no Olhos de Boneca é incomparável. Meus cílios nunca estiveram tão perfeitos e naturais.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80'
  },
  {
    name: 'Camila Santos',
    role: 'Advogada',
    text: 'A Academy mudou minha vida. Hoje tenho minha própria clínica e atendo as melhores clientes de Curitiba.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80'
  },
  {
    name: 'Fernanda Lima',
    role: 'Influenciadora',
    text: 'O olhar assinatura que elas criaram para mim é simplesmente icônico. Recomendo para todas as minhas seguidoras.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80'
  },
  {
    name: 'Patricia Oliveira',
    role: 'Empresária',
    text: 'Sofisticação e técnica impecável. O ambiente transmite tranquilidade e o resultado supera todas as expectativas.',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&q=80'
  }
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="depoimentos" className="pt-32 pb-16 bg-gradient-to-b from-deep-black to-deep-black/95 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-champagne/60 text-sm uppercase tracking-widest font-body block mb-4">
            Depoimentos
          </span>
          <h2 className="font-editorial text-5xl md:text-6xl font-light text-ice-white">
            Quem Vive a <span className="italic text-champagne">Experiência</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="glass p-8 rounded-2xl hover:border-champagne/20 transition-all duration-500 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-champagne" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-nude-rose/90 font-light leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-ice-white font-body text-sm group-hover:text-champagne transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-nude-rose/60 text-xs uppercase tracking-wider">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
