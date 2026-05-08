'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const rafRef = useRef<number | null>(null)
  const positionRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Detecta se é dispositivo touch — se for, não renderiza o cursor customizado
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouchDevice(isTouch)
    if (isTouch) return

    const updateMousePosition = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY }
      
      // Usa requestAnimationFrame para limitar updates e melhorar performance
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(() => {
          setMousePosition({ ...positionRef.current })
          rafRef.current = null
        })
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Verifica se está passando por cima de um botão, link ou elemento clicável
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.classList.contains('hover-target')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updateMousePosition, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  // Desativa o cursor padrão apenas em desktop
  useEffect(() => {
    if (isTouchDevice) return
    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = 'auto'
    }
  }, [isTouchDevice])

  // Não renderiza nada em dispositivos touch
  if (isTouchDevice) return null

  return (
    <>
      {/* Ponto central pequeno */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-champagne rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ willChange: 'transform' }}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      
      {/* Círculo externo que segue mais suavemente */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-champagne rounded-full pointer-events-none z-[9998] hidden md:flex items-center justify-center"
        style={{ willChange: 'transform' }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(238, 203, 169, 0.2)' : 'rgba(238, 203, 169, 0)',
        }}
        transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
      />
    </>
  )
}
