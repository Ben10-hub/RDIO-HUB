'use client'

import { motion } from 'framer-motion'

export function AboutHero() {
  return (
    <section className="py-16 lg:py-24 bg-soft-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold font-medium text-sm rounded-full mb-6">
            About RDIO AI
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 text-balance">
            Empowering the Next Generation of{' '}
            <span className="text-gold">Tech Leaders</span>
          </h1>
          <p className="text-text-gray text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            RDIO AI is a premier educational and industry upskilling company dedicated to bridging the gap between academic learning and real-world industry requirements. We empower students, professionals, and institutions with cutting-edge skills in AI, Data Science, and emerging technologies.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
