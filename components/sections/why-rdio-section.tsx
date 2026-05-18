'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/common'
import { Zap, BookOpen, Briefcase, Rocket } from 'lucide-react'

const checkpoints = [
  {
    id: 'innovation',
    title: 'Innovation First',
    description: 'Building AI, SaaS, and IoT tech to solve real business problems.',
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
    description: 'Practical systems, real-world execution, and workforce readiness.',
    icon: Briefcase,
    position: 'bottom',
  },
  {
    id: 'endtoend',
    title: 'End-to-End Solutions',
    description: 'From concept to deployment, architecture, and long-term support.',
    icon: Rocket,
    position: 'left',
  },
]

export function WhyRdioSection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 lg:px-8 relative z-10"
      >
        <div className="mb-24">
          <SectionHeader
            label="Why Choose RDIO AI"
            title="Why Organizations Choose RDIO AI"
            description="A connected ecosystem of innovation, research, execution, and industry-ready solutions."
          />
        </div>

        {/* Desktop: Compact Circular Ecosystem */}
        <div className="hidden lg:block mt-12 mb-28">
          <div className="relative mx-auto w-full max-w-[600px] aspect-square">
            {/* SVG Connector Lines & Orbits */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 600 600"
              preserveAspectRatio="xMidYMid meet"
              style={{ pointerEvents: 'none' }}
            >
              <defs>
                <linearGradient id="connectorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgb(212, 169, 55)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="rgb(2, 27, 78)" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background Orbits */}
              <circle cx="300" cy="300" r="130" fill="none" stroke="rgba(212, 169, 55, 0.15)" strokeWidth="1" strokeDasharray="4 6" />
              <circle cx="300" cy="300" r="180" fill="none" stroke="rgba(212, 169, 55, 0.08)" strokeWidth="1" />
              
              {/* Center to Top */}
              <motion.path
                id="pathTop"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                d="M 300 300 Q 380 210 300 120"
                fill="none"
                stroke="url(#connectorGrad)"
                strokeWidth="2"
                filter="url(#glowFilter)"
              />
              {/* Center to Right */}
              <motion.path
                id="pathRight"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.4, ease: 'easeOut' }}
                d="M 300 300 Q 390 380 480 300"
                fill="none"
                stroke="url(#connectorGrad)"
                strokeWidth="2"
                filter="url(#glowFilter)"
              />
              {/* Center to Bottom */}
              <motion.path
                id="pathBottom"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                d="M 300 300 Q 220 390 300 480"
                fill="none"
                stroke="url(#connectorGrad)"
                strokeWidth="2"
                filter="url(#glowFilter)"
              />
              {/* Center to Left */}
              <motion.path
                id="pathLeft"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.6, ease: 'easeOut' }}
                d="M 300 300 Q 210 220 120 300"
                fill="none"
                stroke="url(#connectorGrad)"
                strokeWidth="2"
                filter="url(#glowFilter)"
              />

              {/* Animated Pulses */}
              <circle r="4" fill="#D4A937" filter="url(#glowFilter)">
                <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#pathTop" />
                </animateMotion>
              </circle>
              <circle r="4" fill="#D4A937" filter="url(#glowFilter)">
                <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" begin="1s">
                  <mpath href="#pathRight" />
                </animateMotion>
              </circle>
              <circle r="4" fill="#D4A937" filter="url(#glowFilter)">
                <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" begin="2s">
                  <mpath href="#pathBottom" />
                </animateMotion>
              </circle>
              <circle r="4" fill="#D4A937" filter="url(#glowFilter)">
                <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" begin="3s">
                  <mpath href="#pathLeft" />
                </animateMotion>
              </circle>
            </svg>

            {/* Center Hub */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <motion.div
                animate={{ boxShadow: ['0 0 50px rgba(212,169,55,0.15)', '0 0 80px rgba(212,169,55,0.3)', '0 0 50px rgba(212,169,55,0.15)'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-48 h-48 rounded-full bg-[#021B4E]/95 border border-gold/40 flex items-center justify-center backdrop-blur-md relative"
              >
                <div className="absolute inset-0 rounded-full border border-gold/20 animate-[spin_10s_linear_infinite] border-t-gold/60" />
                <div className="text-center px-4 relative z-10">
                  <h3 className="text-[16px] font-extrabold text-gold tracking-wider uppercase mb-2 leading-tight">Innovation<br/>Ecosystem</h3>
                  <p className="text-[10px] text-white/70 font-semibold tracking-[0.2em] uppercase leading-relaxed">
                    AI • Research<br/>Talent • Solutions
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Top Node - Innovation */}
            <motion.div
              initial={{ scale: 0, opacity: 0, y: 20 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-full pb-6 z-20 group"
            >
              <div className="w-[240px] bg-white/90 backdrop-blur-xl rounded-2xl border border-navy/5 p-5 shadow-[0_8px_30px_rgba(2,27,78,0.06)] group-hover:shadow-[0_0_30px_rgba(212,169,55,0.15)] group-hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/10 pointer-events-none" />
                <div className="relative z-10 flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex flex-shrink-0 items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                    <Zap className="w-5 h-5 text-navy group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h4 className="font-bold text-navy text-[15px] m-0">{checkpoints[0].title}</h4>
                </div>
                <p className="relative z-10 text-[13px] text-text-gray leading-relaxed m-0">{checkpoints[0].description}</p>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full bg-gold border-[3px] border-white shadow-[0_0_15px_rgba(212,169,55,0.5)] group-hover:scale-125 transition-transform duration-300" />
            </motion.div>

            {/* Right Node - Research */}
            <motion.div
              initial={{ scale: 0, opacity: 0, x: -20 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-1/2 left-[80%] -translate-y-1/2 pl-6 z-20 group"
            >
              <div className="w-[240px] bg-white/90 backdrop-blur-xl rounded-2xl border border-navy/5 p-5 shadow-[0_8px_30px_rgba(2,27,78,0.06)] group-hover:shadow-[0_0_30px_rgba(212,169,55,0.15)] group-hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/10 pointer-events-none" />
                <div className="relative z-10 flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex flex-shrink-0 items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                    <BookOpen className="w-5 h-5 text-navy group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h4 className="font-bold text-navy text-[15px] m-0">{checkpoints[1].title}</h4>
                </div>
                <p className="relative z-10 text-[13px] text-text-gray leading-relaxed m-0">{checkpoints[1].description}</p>
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold border-[3px] border-white shadow-[0_0_15px_rgba(212,169,55,0.5)] group-hover:scale-125 transition-transform duration-300" />
            </motion.div>

            {/* Bottom Node - Industry */}
            <motion.div
              initial={{ scale: 0, opacity: 0, y: -20 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute left-1/2 top-[80%] -translate-x-1/2 pt-6 z-20 group"
            >
              <div className="w-[240px] bg-white/90 backdrop-blur-xl rounded-2xl border border-navy/5 p-5 shadow-[0_8px_30px_rgba(2,27,78,0.06)] group-hover:shadow-[0_0_30px_rgba(212,169,55,0.15)] group-hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/10 pointer-events-none" />
                <div className="relative z-10 flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex flex-shrink-0 items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                    <Briefcase className="w-5 h-5 text-navy group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h4 className="font-bold text-navy text-[15px] m-0">{checkpoints[2].title}</h4>
                </div>
                <p className="relative z-10 text-[13px] text-text-gray leading-relaxed m-0">{checkpoints[2].description}</p>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold border-[3px] border-white shadow-[0_0_15px_rgba(212,169,55,0.5)] group-hover:scale-125 transition-transform duration-300" />
            </motion.div>

            {/* Left Node - End-to-End */}
            <motion.div
              initial={{ scale: 0, opacity: 0, x: 20 }}
              whileInView={{ scale: 1, opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-1/2 left-[20%] -translate-y-1/2 -translate-x-full pr-6 z-20 group"
            >
              <div className="w-[240px] bg-white/90 backdrop-blur-xl rounded-2xl border border-navy/5 p-5 shadow-[0_8px_30px_rgba(2,27,78,0.06)] group-hover:shadow-[0_0_30px_rgba(212,169,55,0.15)] group-hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/10 pointer-events-none" />
                <div className="relative z-10 flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex flex-shrink-0 items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                    <Rocket className="w-5 h-5 text-navy group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <h4 className="font-bold text-navy text-[15px] m-0">{checkpoints[3].title}</h4>
                </div>
                <p className="relative z-10 text-[13px] text-text-gray leading-relaxed m-0">{checkpoints[3].description}</p>
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold border-[3px] border-white shadow-[0_0_15px_rgba(212,169,55,0.5)] group-hover:scale-125 transition-transform duration-300" />
            </motion.div>
          </div>
        </div>

        {/* Tablet: Vertical Stack */}
        <div className="hidden md:block lg:hidden mt-16 mb-16">
          <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
            {checkpoints.map((checkpoint, index) => {
              const Icon = checkpoint.icon
              return (
                <motion.div
                  key={checkpoint.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-navy/5 shadow-premium-sm hover:shadow-premium-md transition-all"
                >
                  <div className="flex flex-col items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-[16px] mb-2">
                        {checkpoint.title}
                      </h4>
                      <p className="text-sm text-text-gray leading-relaxed">
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
        <div className="md:hidden mt-12 mb-16">
          <div className="space-y-4 max-w-sm mx-auto">
            {checkpoints.map((checkpoint, index) => {
              const Icon = checkpoint.icon
              return (
                <motion.div
                  key={checkpoint.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-5 rounded-xl bg-white/80 backdrop-blur-md border border-navy/5 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy text-[15px] mb-1.5">
                        {checkpoint.title}
                      </h4>
                      <p className="text-[13px] text-text-gray leading-relaxed">
                        {checkpoint.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom Supporting Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-navy text-lg md:text-xl font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
            RDIO AI combines research, innovation, execution, and workforce readiness into one connected ecosystem.
          </p>
          <button className="px-10 py-4 rounded-xl bg-navy hover:bg-navy/90 text-white font-semibold text-lg transition-all shadow-[0_8px_20px_rgba(2,27,78,0.2)] hover:shadow-[0_12px_25px_rgba(2,27,78,0.3)] hover:-translate-y-1">
            Explore Our Solutions
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
}
