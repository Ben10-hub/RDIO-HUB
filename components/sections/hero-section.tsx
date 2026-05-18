'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 lg:pt-40 pb-20 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              Building AI-Powered Products &{' '}
              <span className="text-gold">Enterprise Solutions</span> for the Future.
            </h1>

            <p className="text-text-gray text-lg lg:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              We help businesses scale with AI, SaaS platforms, automation systems, product engineering, and enterprise-grade technology solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
              <Button
                asChild
                size="lg"
                className="bg-navy hover:bg-navy/90 text-white font-semibold px-8 h-12 text-base"
              >
                <Link href="#solutions">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-navy font-semibold px-8 h-12 text-base"
              >
                <Link href="/collaboration">Collaborate With Us</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start pt-8 border-t border-border">
              {[
                'AI Product Engineering',
                'Enterprise SaaS Solutions',
                'Automation & Innovation',
                'Scalable Digital Systems',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm font-medium text-text-gray"
                >
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Premium Photo Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            <div className="relative w-full h-full">
              {/* Main Large Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
                transition={{ duration: 0.4 }}
                className="absolute top-10 right-0 w-[75%] h-[60%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(2,27,78,0.2)] border-8 border-white z-20 cursor-pointer"
              >
                <Image
                  src="/images/workshop.png"
                  alt="AI Workshop Session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-navy/10 hover:bg-transparent transition-colors duration-300" />
              </motion.div>

              {/* Top Left Image */}
              <motion.div
                initial={{ opacity: 0, y: -20, rotate: 4 }}
                animate={{ opacity: 1, y: 0, rotate: 4 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
                transition={{ duration: 0.4 }}
                className="absolute top-0 left-0 w-[50%] h-[40%] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(2,27,78,0.15)] border-8 border-white z-10 cursor-pointer"
              >
                <Image
                  src="/images/classroom.png"
                  alt="Students Learning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority
                />
                <div className="absolute inset-0 bg-navy/10 hover:bg-transparent transition-colors duration-300" />
              </motion.div>

              {/* Bottom Left Image */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: -4 }}
                animate={{ opacity: 1, y: 0, rotate: -4 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-16 left-8 w-[55%] h-[45%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(212,169,55,0.15)] border-8 border-white z-30 cursor-pointer"
              >
                <Image
                  src="/images/training.png"
                  alt="Training Event"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                  priority
                />
                <div className="absolute inset-0 bg-navy/10 hover:bg-transparent transition-colors duration-300" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[35%] -right-6 bg-white border border-gold/30 text-navy px-6 py-4 rounded-xl font-bold shadow-[0_10px_30px_rgba(2,27,78,0.1)] z-40 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold">✦</span>
                </div>
                150+ Clients
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-8 right-10 bg-navy border border-navy/80 text-white px-6 py-4 rounded-xl font-bold shadow-[0_10px_30px_rgba(212,169,55,0.2)] z-40 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-gold">🚀</span>
                </div>
                AI & SaaS
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


