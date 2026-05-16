'use client'

import { motion } from 'framer-motion'

export function ContactHero() {
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
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 text-balance">
            Let&apos;s Start a{' '}
            <span className="text-gold">Conversation</span>
          </h1>
          <p className="text-text-gray text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Have questions about our programs? Want to explore collaboration opportunities? We&apos;d love to hear from you.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
