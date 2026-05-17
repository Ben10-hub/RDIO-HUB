'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stats = [
  { label: '150+', description: 'Enterprise Clients' },
  { label: '50+', description: 'AI Solutions' },
  { label: '100%', description: 'Success Rate' },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 lg:pt-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6 text-sm font-medium text-navy"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              Premium AI Solutions
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight mb-6"
            >
              Building Intelligent Digital Solutions{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold/70">
                for the Future
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg lg:text-xl text-text-gray leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Enterprise AI, SaaS solutions, and product engineering. We transform complex challenges into scalable, intelligent systems. From AI agents to IoT solutions, we deliver enterprise-grade technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12"
            >
              <Button
                asChild
                size="lg"
                className="bg-navy hover:bg-navy/90 text-white font-semibold px-8 h-12 text-base shadow-premium-lg hover:shadow-premium-xl transition-shadow"
              >
                <Link href="#services">
                  Explore Services
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-gold text-navy hover:bg-gold/10 font-semibold px-8 h-12 text-base"
              >
                <Link href="/contact">Get Consultation</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 lg:gap-8 pt-8 border-t border-border"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-navy mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-text-gray">
                    {stat.description}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full h-[500px]">
              {/* Premium Glass Card */}
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 rounded-3xl glass shadow-premium-xl border border-white/20 overflow-hidden"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy/20 via-transparent to-gold/20" />
                
                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="mb-6"
                    >
                      <div className="w-20 h-20 mx-auto rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
                        <Sparkles className="w-10 h-10 text-gold" />
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-navy mb-2">
                      AI-Powered Solutions
                    </h3>
                    <p className="text-sm text-text-gray">
                      Enterprise-grade technology for modern challenges
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-4 shadow-premium-lg border border-border"
              >
                <div className="text-sm font-semibold text-navy">
                  15+ Years
                </div>
                <div className="text-xs text-text-gray">
                  Industry Experience
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-4 -left-4 bg-card rounded-2xl p-4 shadow-premium-lg border border-border"
              >
                <div className="text-sm font-semibold text-navy">
                  20+ Products
                </div>
                <div className="text-xs text-text-gray">
                  Successfully Launched
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


