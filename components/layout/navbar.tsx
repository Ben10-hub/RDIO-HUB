'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CONTACT_INFO, NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-lg border-b border-border/50'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      {/* Top Utility Bar */}
      <div className={cn(
        "hidden lg:block bg-navy text-white text-xs py-2 transition-all duration-300",
        scrolled ? "h-0 py-0 overflow-hidden" : "h-auto"
      )}>
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-gold transition-colors flex items-center gap-2">
              <span className="w-4 h-4 text-gold">✉</span> {CONTACT_INFO.email}
            </a>
            <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-gold transition-colors flex items-center gap-2">
              <span className="w-4 h-4 text-gold">☎</span> {CONTACT_INFO.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href={CONTACT_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Instagram</a>
            <a href={CONTACT_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">LinkedIn</a>
            <a href={CONTACT_INFO.social.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">WhatsApp Community</a>
          </div>
        </div>
      </div>

      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="RDIO AI"
              width={48}
              height={48}
              className="w-10 h-10 lg:w-12 lg:h-12"
              priority
            />
            <div className="hidden sm:block">
              <span className="font-bold text-xl text-navy">RDIO</span>
              <span className="font-bold text-xl text-gold"> AI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap',
                  pathname === link.href
                    ? 'text-gold bg-gold/10'
                    : 'text-navy hover:text-gold hover:bg-gold/5'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-gold hover:bg-gold/90 text-navy font-semibold px-6"
            >
              <Link href="/contact">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-navy hover:text-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-t border-border/50"
            >
              <div className="py-4 space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                      pathname === link.href
                        ? 'text-gold bg-gold/10'
                        : 'text-navy hover:text-gold hover:bg-gold/5'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 px-4">
                  <Button
                    asChild
                    className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold"
                  >
                    <Link href="/contact">Apply Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
