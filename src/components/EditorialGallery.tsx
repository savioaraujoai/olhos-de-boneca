'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?w=800&q=80', alt: 'Lash Extension 1', span: 'col-span-1 row-span-1' },
  { id: 2, src: 'https://images.unsplash.com/photo-1583001927282-2c395b8b4caf?w=800&q=80', alt: 'Lash Extension 2', span: 'col-span-1 row-span-2' },
  { id: 3, src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80', alt: 'Lash Extension 3', span: 'col-span-1 row-span-1' },
  { id: 4, src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80', alt: 'Lash Extension 4', span: 'col-span-1 row-span-1' },
  { id: 5, src: 'https://images.unsplash.com/photo-1609587312208-c932a3b8fec5?w=800&q=80', alt: 'Lash Extension 5', span: 'col-span-1 row-span-1' },
  { id: 6, src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80', alt: 'Lash Extension 6', span: 'col-span-1 row-span-2' },
]

export default function EditorialGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-32 bg-deep-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="text-champagne/60 text-sm uppercase tracking-widest font-body block mb-4">
            Galeria Editorial
          </span>
          <h2 className="font-editorial text-5xl md:text-6xl font-light text-ice-white">
            Arte em <span className="italic text-champagne">Cada Detalhe</span>
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${image.span}`}
              onClick={() => setSelectedImage(image.id)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${image.src})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 border border-white/0 group-hover:border-champagne/30 transition-colors duration-500 rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-deep-black/95 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={galleryImages.find(img => img.id === selectedImage)?.src}
              alt="Gallery"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-ice-white hover:bg-champagne/20 transition-colors"
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </section>
  )
}
