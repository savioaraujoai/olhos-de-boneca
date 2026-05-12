'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MagneticButton from './MagneticButton'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? 'py-3 backdrop-blur-2xl bg-black/30 shadow-[0_1px_0_0_rgba(214,180,124,0.06)]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 z-50">
            <ul className="flex gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[11px] uppercase tracking-[0.25em] text-ice-white/60 hover:text-champagne transition-colors duration-300"
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
                className="px-6 py-2.5 rounded-full border border-champagne/50 text-champagne text-[11px] uppercase tracking-[0.25em] hover:bg-champagne hover:text-deep-black transition-all duration-500"
              >
                Agendar
              </a>
            </MagneticButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden z-50 flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <div className={`w-6 h-px bg-champagne transition-all duration-500 ${mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <div className={`w-6 h-px bg-champagne transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <div className={`w-6 h-px bg-champagne transition-all duration-500 ${mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 backdrop-blur-2xl bg-deep-night/90 flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="font-editorial text-4xl text-ice-white hover:text-champagne transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/5541999999999"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.5 }}
                className="mt-4 premium-button"
              >
                Agendar Horário
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
