'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Users, Lightbulb } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CareersHeroSection() {
  const highlights = [
    {
      icon: Briefcase,
      label: 'Growth Opportunity',
      description: 'Accelerate your career with challenging projects',
    },
    {
      icon: Users,
      label: 'Diverse Teams',
      description: 'Work with talented professionals globally',
    },
    {
      icon: Lightbulb,
      label: 'Innovation Focus',
      description: 'Drive cutting-edge AI and tech solutions',
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-24 lg:pt-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-6 text-sm font-medium text-navy"
          >
            <Briefcase className="w-4 h-4 text-gold" />
            We&apos;re Hiring
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight mb-6"
          >
            Build the Future with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold/70">
              RDIO AI
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg lg:text-xl text-text-gray leading-relaxed mb-8 max-w-2xl"
          >
            Join our team of innovators, engineers, and researchers working on enterprise AI solutions that transform businesses worldwide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-navy hover:bg-navy/90 text-white font-semibold px-8 h-12 text-base shadow-premium-lg"
            >
              <Link href="#opportunities">
                Explore Opportunities
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-gold text-navy hover:bg-gold/10 font-semibold px-8 h-12 text-base"
            >
              <Link href="/contact">Apply Now</Link>
            </Button>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="bg-card rounded-xl p-6 border border-border hover:border-gold/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">{item.label}</h3>
                  <p className="text-sm text-text-gray">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
