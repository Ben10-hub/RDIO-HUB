'use client'

import { motion } from 'framer-motion'
import { Library, BookOpen, GraduationCap, School, Building, Landmark, Microscope, Atom } from 'lucide-react'

const rowOne = [
  { name: 'Tech University', icon: Atom },
  { name: 'Engineering College', icon: Building },
  { name: 'Science Institute', icon: Microscope },
  { name: 'Management School', icon: Landmark },
  { name: 'Tech University', icon: Atom },
  { name: 'Engineering College', icon: Building },
  { name: 'Science Institute', icon: Microscope },
  { name: 'Management School', icon: Landmark },
]

const rowTwo = [
  { name: 'Research Academy', icon: BookOpen },
  { name: 'Innovation Hub', icon: Library },
  { name: 'Digital Institute', icon: GraduationCap },
  { name: 'AI Research Center', icon: School },
  { name: 'Research Academy', icon: BookOpen },
  { name: 'Innovation Hub', icon: Library },
  { name: 'Digital Institute', icon: GraduationCap },
  { name: 'AI Research Center', icon: School },
]

export function SocialProofSection() {
  return (
    <section className="py-20 lg:py-32 bg-white text-foreground overflow-hidden relative">
      {/* Background Glows with slow pulse */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-navy/5 rounded-full blur-[100px] pointer-events-none" 
      />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 lg:px-8 mb-16 lg:mb-24 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-gold/10 border border-gold/20 text-gold font-medium text-sm rounded-full mb-6 tracking-wide uppercase"
          >
            Vast Network
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight text-navy"
          >
            Trusted by <span className="text-gold">Educational Institutions</span> Across India
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-text-gray text-lg md:text-xl leading-relaxed"
          >
            We have partnered with leading colleges, universities, and research centers to deliver world-class quality education and industry training.
          </motion.p>
        </div>
      </motion.div>

      {/* Marquees */}
      <div className="relative z-10 flex flex-col gap-6">
        {/* Gradient Overlays for smooth fade out on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        {/* Row 1 - Scroll Left */}
        <div className="flex w-max relative group">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            className="flex gap-6 items-center px-3 group-hover:[animation-play-state:paused]"
          >
            {rowOne.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={`row1-${index}`}
                  className="flex items-center gap-4 bg-soft-bg border border-border rounded-2xl px-8 py-5 min-w-fit hover:bg-white hover:border-gold/50 hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-semibold tracking-wide whitespace-nowrap text-navy">
                    {item.name}
                  </span>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="flex w-max relative group -ml-[20%]">
          <motion.div
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
            className="flex gap-6 items-center px-3 group-hover:[animation-play-state:paused]"
          >
            {rowTwo.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={`row2-${index}`}
                  className="flex items-center gap-4 bg-soft-bg border border-border rounded-2xl px-8 py-5 min-w-fit hover:bg-white hover:border-gold/50 hover:shadow-lg transition-all duration-300 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-lg font-semibold tracking-wide whitespace-nowrap text-navy">
                    {item.name}
                  </span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
