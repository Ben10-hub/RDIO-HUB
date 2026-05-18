'use client'

import { motion } from 'framer-motion'

const trustItems = [
  '150+ Clients',
  '50+ Mentors',
  '15,000+ Students',
  'Research Projects',
  'Institution Partnerships'
]

export function TrustBar() {
  return (
    <section className="py-6 border-y border-gray-100 bg-[#fafafa] overflow-hidden">
      <div className="relative flex w-full overflow-hidden max-w-[1400px] mx-auto">
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#fafafa] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#fafafa] to-transparent z-10" />

        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 30,
          }}
          className="flex items-center gap-16 lg:gap-24 whitespace-nowrap px-8"
        >
          {/* Render three times to ensure smooth infinite scroll without snapping empty space */}
          {[...trustItems, ...trustItems, ...trustItems].map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 text-navy/70 hover:text-navy transition-colors font-medium text-sm uppercase tracking-wider"
            >
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
