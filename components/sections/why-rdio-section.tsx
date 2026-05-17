'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/common'
import { Zap, BookOpen, Briefcase, Rocket } from 'lucide-react'

const checkpoints = [
  {
    id: 'innovation',
    title: 'Innovation First',
    description: 'Building AI, SaaS, IoT, and emerging technologies to solve real business problems.',
    icon: Zap,
    position: 'top',
  },
  {
    id: 'research',
    title: 'Research Driven',
    description: 'Research-backed engineering, experimentation, and innovation.',
    icon: BookOpen,
    position: 'right',
  },
  {
    id: 'industry',
    title: 'Industry Ready',
    description: 'Practical systems, real-world implementation, and workforce readiness.',
    icon: Briefcase,
    position: 'bottom',
  },
  {
    id: 'endtoend',
    title: 'End-to-End Solutions',
    description: 'From concept to deployment, architecture, development, and long-term support.',
    icon: Rocket,
    position: 'left',
  },
]

export function WhyRdioSection() {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 lg:px-8 relative z-10"
      >
        <SectionHeader
          label="Why Choose RDIO AI"
          title="Why Organizations Choose RDIO AI"
          description="A premium ecosystem of interconnected strengths delivering innovation, research, industry readiness, and complete solutions."
        />

        {/* Desktop: Compact Circular Ecosystem */}
        <div className="hidden lg:block mt-16">
          <div className="relative mx-auto" style={{ maxWidth: '700px', aspectRatio: '1 / 1.1' }}>
            {/* SVG Connector Lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 600 660"
              preserveAspectRatio="xMidYMid meet"
              style={{ pointerEvents: 'none' }}
            >
              <defs>
                <linearGradient id="connectorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(212, 169, 55)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="rgb(2, 27, 78)" stopOpacity="0.15" />
                </linearGradient>
                <filter id="glowFilter">
                  <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Center to Top */}
              <motion.line
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeInOut' }}
                x1="300"
                y1="330"
                x2="300"
                y2="100"
                stroke="url(#connectorGrad)"
                strokeWidth="1.5"
                filter="url(#glowFilter)"
              />

              {/* Center to Right */}
              <motion.line
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
                x1="300"
                y1="330"
                x2="480"
                y2="310"
                stroke="url(#connectorGrad)"
                strokeWidth="1.5"
                filter="url(#glowFilter)"
              />

              {/* Center to Bottom */}
              <motion.line
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut' }}
                x1="300"
                y1="330"
                x2="300"
                y2="560"
                stroke="url(#connectorGrad)"
                strokeWidth="1.5"
                filter="url(#glowFilter)"
              />

              {/* Center to Left */}
              <motion.line
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
                x1="300"
                y1="330"
                x2="120"
                y2="310"
                stroke="url(#connectorGrad)"
                strokeWidth="1.5"
                filter="url(#glowFilter)"
              />
            </svg>

            {/* Center Hub */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <motion.div
                animate={{ boxShadow: ['0 0 30px rgba(212, 169, 55, 0.25)', '0 0 45px rgba(212, 169, 55, 0.4)', '0 0 30px rgba(212, 169, 55, 0.25)'] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-28 h-28 rounded-full bg-gradient-to-br from-gold/25 to-navy/5 border-2 border-gold/60 flex items-center justify-center backdrop-blur-sm shadow-premium-md"
              >
                <div className="text-center">
                  <p className="text-xs font-bold text-gold mb-1 tracking-wide">RDIO AI</p>
                  <div className="w-5 h-5 rounded-full bg-gold/30 border border-gold/60 mx-auto" />
                </div>
              </motion.div>
            </motion.div>

            {/* Checkpoints with Attached Cards */}
            {/* Top - Innovation */}
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 30 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
            >
              {/* Checkpoint Node */}
              <div className="w-4 h-4 rounded-full bg-gold border border-gold/80 mx-auto mb-3" />

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(2, 27, 78, 0.12)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="w-56 bg-white rounded-xl border border-gold/30 p-5 shadow-premium-sm hover:shadow-premium-md transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-bold text-navy text-sm mb-1">
                  {checkpoints[0].title}
                </h4>
                <p className="text-xs text-text-gray leading-relaxed">
                  {checkpoints[0].description}
                </p>
              </motion.div>
            </motion.div>

            {/* Right - Research */}
            <motion.div
              initial={{ scale: 0, opacity: 0, x: -30 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
            >
              {/* Checkpoint Node */}
              <div className="absolute left-0 top-1/2 -translate-x-2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold border border-gold/80" />

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(2, 27, 78, 0.12)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="w-56 bg-white rounded-xl border border-gold/30 p-5 shadow-premium-sm hover:shadow-premium-md transition-all ml-8"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center mb-3">
                  <BookOpen className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-bold text-navy text-sm mb-1">
                  {checkpoints[1].title}
                </h4>
                <p className="text-xs text-text-gray leading-relaxed">
                  {checkpoints[1].description}
                </p>
              </motion.div>
            </motion.div>

            {/* Bottom - Industry */}
            <motion.div
              initial={{ scale: 0, opacity: 0, y: -30 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
            >
              {/* Checkpoint Node */}
              <div className="w-4 h-4 rounded-full bg-gold border border-gold/80 mx-auto mt-3" />

              {/* Content Card */}
              <motion.div
                whileHover={{ y: 6, boxShadow: '0 16px 32px rgba(2, 27, 78, 0.12)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="w-56 bg-white rounded-xl border border-gold/30 p-5 shadow-premium-sm hover:shadow-premium-md transition-all -mt-5"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center mb-3">
                  <Briefcase className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-bold text-navy text-sm mb-1">
                  {checkpoints[2].title}
                </h4>
                <p className="text-xs text-text-gray leading-relaxed">
                  {checkpoints[2].description}
                </p>
              </motion.div>
            </motion.div>

            {/* Left - End-to-End */}
            <motion.div
              initial={{ scale: 0, opacity: 0, x: 30 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            >
              {/* Checkpoint Node */}
              <div className="absolute right-0 top-1/2 translate-x-2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold border border-gold/80" />

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -6, boxShadow: '0 16px 32px rgba(2, 27, 78, 0.12)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="w-56 bg-white rounded-xl border border-gold/30 p-5 shadow-premium-sm hover:shadow-premium-md transition-all mr-8"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center mb-3">
                  <Rocket className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-bold text-navy text-sm mb-1">
                  {checkpoints[3].title}
                </h4>
                <p className="text-xs text-text-gray leading-relaxed">
                  {checkpoints[3].description}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Tablet: Vertical Stack */}
        <div className="hidden md:block lg:hidden mt-12">
          <div className="space-y-6">
            {checkpoints.map((checkpoint, index) => {
              const Icon = checkpoint.icon
              return (
                <motion.div
                  key={checkpoint.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-gold/30 bg-white hover:shadow-premium-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-sm mb-1">
                        {checkpoint.title}
                      </h4>
                      <p className="text-xs text-text-gray leading-relaxed">
                        {checkpoint.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile: Compact Stack */}
        <div className="md:hidden mt-10">
          <div className="space-y-4">
            {checkpoints.map((checkpoint, index) => {
              const Icon = checkpoint.icon
              return (
                <motion.div
                  key={checkpoint.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-4 rounded-lg border border-gold/30 bg-white"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-xs mb-0.5">
                        {checkpoint.title}
                      </h4>
                      <p className="text-xs text-text-gray leading-relaxed">
                        {checkpoint.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-text-gray text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
            This interconnected ecosystem explains why enterprises choose RDIO AI for intelligent systems, research-backed solutions, practical implementation, and complete support.
          </p>
          <button className="px-8 py-3 rounded-lg bg-navy hover:bg-navy/90 text-white font-semibold transition-all shadow-premium-md hover:shadow-premium-lg">
            Schedule a Consultation
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
