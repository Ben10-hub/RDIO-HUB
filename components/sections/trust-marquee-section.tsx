'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '150+', label: 'Enterprise Clients' },
  { value: '50+', label: 'AI Solutions' },
  { value: '100+', label: 'Institutional Partners' },
  { value: '20+', label: 'SaaS Products' },
  { value: '500+', label: 'Research Projects' },
]

export function TrustMarqueeSection() {
  return (
    <section className="py-12 lg:py-16 bg-navy text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Scrolling Stats */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-16 lg:gap-24 whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {/* First set */}
              {stats.map((stat, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {stats.map((stat, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
