'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/common'
import { Zap, BookOpen, Briefcase, Workflow } from 'lucide-react'

const checkpoints = [
  {
    title: 'Innovation First',
    description: 'We lead with cutting-edge AI, SaaS, IoT, and emerging technologies to solve real-world business challenges.',
    icon: Zap,
    position: 'top',
  },
  {
    title: 'Research Driven',
    description: 'Every solution is backed by experimentation, research, data insights, and continuous learning.',
    icon: BookOpen,
    position: 'right',
  },
  {
    title: 'Industry Ready',
    description: 'We build practical, scalable systems trusted by organizations and future-ready professionals.',
    icon: Briefcase,
    position: 'bottom',
  },
  {
    title: 'End-to-End Solutions',
    description: 'From concept to deployment, we deliver architecture, engineering, implementation, and long-term support.',
    icon: Workflow,
    position: 'left',
  },
]

export function WhyRdioSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 lg:px-8 relative z-10"
      >
        <SectionHeader
          label="Why Choose RDIO AI"
          title="Why Organizations Choose RDIO AI"
          description="Building intelligent systems, research-driven solutions, and future-ready technology through innovation and execution."
        />

        {/* Desktop: Circular Ecosystem Layout */}
        <div className="hidden lg:flex justify-center items-center mt-20 h-[700px] relative">
          {/* SVG Connector Lines */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 1200 700"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#D4A937', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#021B4E', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            
            {/* Lines from center to checkpoints */}
            <motion.line
              x1="600" y1="350" x2="600" y2="100"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.line
              x1="600" y1="350" x2="900" y2="350"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.line
              x1="600" y1="350" x2="600" y2="600"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.line
              x1="600" y1="350" x2="300" y2="350"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </svg>

          {/* Center Node - RDIO AI */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-navy to-navy/90 border-4 border-gold/30 flex items-center justify-center shadow-premium-lg hover:shadow-premium-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="text-gold font-bold text-sm tracking-widest mb-1">RDIO AI</div>
                <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/50 mx-auto" />
              </div>
            </div>
          </motion.div>

          {/* Checkpoint Nodes */}
          {/* Top - Innovation First */}
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 50 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
            className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
          >
            <div className="group cursor-pointer">
              <div className="w-28 h-28 rounded-full bg-white border-2 border-gold/40 hover:border-gold/80 flex flex-col items-center justify-center shadow-premium-md hover:shadow-premium-lg transition-all duration-300 relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-full bg-gold/5"
                />
                <Zap className="w-8 h-8 text-navy mb-1" />
                <div className="text-xs font-bold text-navy text-center px-2">Innovation First</div>
              </div>
              {/* Tooltip on hover */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileHover={{ opacity: 1, y: -50 }}
                transition={{ duration: 0.2 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-48 bg-navy text-white p-4 rounded-lg shadow-premium-lg text-xs leading-relaxed whitespace-normal pointer-events-none"
              >
                {checkpoints[0].description}
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Research Driven */}
          <motion.div
            initial={{ scale: 0, opacity: 0, x: -50 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.1 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          >
            <div className="group cursor-pointer">
              <div className="w-28 h-28 rounded-full bg-white border-2 border-gold/40 hover:border-gold/80 flex flex-col items-center justify-center shadow-premium-md hover:shadow-premium-lg transition-all duration-300 relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-full bg-gold/5"
                />
                <BookOpen className="w-8 h-8 text-navy mb-1" />
                <div className="text-xs font-bold text-navy text-center px-2">Research Driven</div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileHover={{ opacity: 1, x: 50 }}
                transition={{ duration: 0.2 }}
                className="absolute top-1/2 -translate-y-1/2 right-0 w-48 bg-navy text-white p-4 rounded-lg shadow-premium-lg text-xs leading-relaxed whitespace-normal pointer-events-none"
              >
                {checkpoints[1].description}
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom - Industry Ready */}
          <motion.div
            initial={{ scale: 0, opacity: 0, y: -50 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.1 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
          >
            <div className="group cursor-pointer">
              <div className="w-28 h-28 rounded-full bg-white border-2 border-gold/40 hover:border-gold/80 flex flex-col items-center justify-center shadow-premium-md hover:shadow-premium-lg transition-all duration-300 relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-full bg-gold/5"
                />
                <Briefcase className="w-8 h-8 text-navy mb-1" />
                <div className="text-xs font-bold text-navy text-center px-2">Industry Ready</div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 50 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 bg-navy text-white p-4 rounded-lg shadow-premium-lg text-xs leading-relaxed whitespace-normal pointer-events-none"
              >
                {checkpoints[2].description}
              </motion.div>
            </div>
          </motion.div>

          {/* Left - End-to-End Solutions */}
          <motion.div
            initial={{ scale: 0, opacity: 0, x: 50 }}
            whileInView={{ scale: 1, opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          >
            <div className="group cursor-pointer">
              <div className="w-28 h-28 rounded-full bg-white border-2 border-gold/40 hover:border-gold/80 flex flex-col items-center justify-center shadow-premium-md hover:shadow-premium-lg transition-all duration-300 relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 rounded-full bg-gold/5"
                />
                <Workflow className="w-8 h-8 text-navy mb-1" />
                <div className="text-xs font-bold text-navy text-center px-2">End-to-End</div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: -50 }}
                transition={{ duration: 0.2 }}
                className="absolute top-1/2 -translate-y-1/2 left-0 w-48 bg-navy text-white p-4 rounded-lg shadow-premium-lg text-xs leading-relaxed whitespace-normal pointer-events-none"
              >
                {checkpoints[3].description}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tablet: Stacked with Timeline */}
        <div className="hidden md:block lg:hidden mt-16">
          <div className="space-y-8">
            {checkpoints.map((checkpoint, index) => {
              const Icon = checkpoint.icon
              return (
                <motion.div
                  key={checkpoint.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex gap-8 items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-white border-2 border-gold/40 flex items-center justify-center shadow-premium-md">
                      <Icon className="w-10 h-10 text-navy" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-navy mb-2">{checkpoint.title}</h3>
                    <p className="text-text-gray leading-relaxed">{checkpoint.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="md:hidden mt-12">
          <div className="space-y-6">
            {checkpoints.map((checkpoint, index) => {
              const Icon = checkpoint.icon
              return (
                <motion.div
                  key={checkpoint.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl border border-gold/20 bg-soft-bg hover:bg-white hover:shadow-premium-md transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 text-navy">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-navy mb-2">{checkpoint.title}</h3>
                      <p className="text-sm text-text-gray leading-relaxed">{checkpoint.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
