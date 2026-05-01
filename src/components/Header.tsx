'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import MagneticButton from './MagneticButton'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'A Marca', href: '#sobre' },
    { name: 'Academy', href: '#academy' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ]

  return (
    <>
      <header
        className={`absolute top-0 left-0 w-full z-50 transition-all duration-500 bg-transparent py-6`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="z-50 flex items-center justify-center -ml-12 md:-ml-24">
            <div className="relative w-[380px] md:w-[550px] h-[100px] md:h-[160px]">
              <Image
                src="/logo.png"
                alt="Olhos de Boneca Logo"
                fill
                className="object-contain brightness-[1.8] saturate-150 drop-shadow-[0_0_10px_rgba(238,203,169,0.3)]"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 -mr-8 md:-mr-24 z-50">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-widest text-ice-white/70 hover:text-champagne transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <MagneticButton>
              <a
                href="https://wa.me/5541999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full border border-champagne text-champagne text-xs uppercase tracking-widest hover:bg-champagne hover:text-deep-black transition-all duration-300"
              >
                Agendar
              </a>
            </MagneticButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-50 flex flex-col gap-1.5 p-2"
          >
            <div className={`w-6 h-px bg-champagne transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-px bg-champagne transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-px bg-champagne transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-deep-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-editorial text-4xl text-ice-white hover:text-champagne transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/5541999999999"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 px-8 py-3 rounded-full bg-champagne text-deep-black font-semibold uppercase tracking-widest text-sm"
              >
                Agendar Horário
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
