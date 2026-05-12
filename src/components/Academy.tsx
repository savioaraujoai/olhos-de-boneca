'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const modules = [
  { title: 'Fundamentos', description: 'Anatomia do olho e escolha de curvaturas' },
  { title: 'Técnicas Avançadas', description: 'Volume russo e designs personalizados' },
  { title: 'Marketing', description: 'Como construir sua carreira de sucesso' },
  { title: 'Atendimento VIP', description: 'Experiência premium para clientes' },
]

export default function Academy() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="academy" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Academy Reference Image */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/academy-ref.png)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-champagne/60 text-sm uppercase tracking-widest font-body block mb-4">
            Olhos de Boneca Academy
          </span>
          <h2 className="font-editorial text-5xl md:text-6xl font-light text-ice-white mb-6">
            Transforme <span className="italic text-champagne">Talento em Profissão</span>
          </h2>
          <p className="text-nude-rose/80 max-w-2xl mx-auto font-light leading-relaxed">
            Nossa metodologia exclusiva combina técnica impecável com visão de negócio 
            para formar profissionais de excelência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Academy Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/3] relative overflow-hidden rounded-2xl glass">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(/academy-ref.png)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full">
                <span className="text-champagne text-sm font-body">Certificação Premium</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Modules */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="glass p-6 rounded-xl hover:border-champagne/30 transition-all duration-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center flex-shrink-0 group-hover:bg-champagne/20 transition-colors">
                    <span className="text-champagne font-editorial text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-editorial text-xl text-ice-white mb-2 group-hover:text-champagne transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-nude-rose/70 text-sm font-light">
                      {module.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="pt-16 flex justify-end"
            >
              <a href="#academy-contact" className="premium-button text-base px-12 py-5 tracking-[0.2em] w-full sm:w-auto">
                Quero me Inscrever
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
