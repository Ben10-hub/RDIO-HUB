'use client'

import { motion } from 'framer-motion'

export function CollaborationHero() {
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
            Partner With Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 text-balance">
            Build the Future{' '}
            <span className="text-gold">Together</span>
          </h1>
          <p className="text-text-gray text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Join hands with RDIO AI to transform education and workforce development. Whether you&apos;re an academic institution or a corporate organization, we have the right partnership model for you.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
