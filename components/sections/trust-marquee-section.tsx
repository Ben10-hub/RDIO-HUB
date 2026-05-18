'use client'

import { motion } from 'framer-motion'

const items = [
  '150+ Enterprise Clients',
  '50+ AI Solutions',
  '100+ Institutional Partners',
  '20+ SaaS Products',
  '500+ Research Projects',
]

export function TrustMarqueeSection() {
  return (
    <section className="py-6 lg:py-8 bg-navy text-white overflow-hidden">
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-8 lg:gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* First set */}
          {items.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 inline-flex items-center gap-3 text-sm lg:text-base"
            >
              <span className="text-gold font-semibold">•</span>
              <span className="text-white/90">{item}</span>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {items.map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 inline-flex items-center gap-3 text-sm lg:text-base"
            >
              <span className="text-gold font-semibold">•</span>
              <span className="text-white/90">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
