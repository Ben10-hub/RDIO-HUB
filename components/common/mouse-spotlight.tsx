'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion'

export function MouseSpotlight() {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the mouse movement for a premium "heavy" light feel
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 2 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 2})

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    // Set initial position to center of screen so it doesn't start at 0,0
    mouseX.set(window.innerWidth / 2)
    mouseY.set(window.innerHeight / 2)
    
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(228, 175, 41, 0.08), transparent 40%)`

  if (!mounted) return null

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300"
      style={{ background }}
    />
  )
}
