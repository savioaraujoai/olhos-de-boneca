import { motion } from 'framer-motion'

export default function LocationMap() {
  return (
    <section className="w-full relative bg-deep-black border-t border-white/5">
      <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] min-h-[400px] relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        <iframe 
          src="https://maps.google.com/maps?q=Av.%20Rep%C3%BAblica%20Argentina%201505%2C%20Curitiba%2C%20Brazil&t=&z=15&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </section>
  )
}
