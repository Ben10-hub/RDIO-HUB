'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { FOUNDER } from '@/lib/constants'

export function FounderSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-navy rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl" />

            <div className="relative z-10">
              {/* Quote icon */}
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-gold" />
              </div>

              {/* Quote */}
              <blockquote className="text-white text-xl lg:text-2xl font-medium leading-relaxed mb-8 text-pretty">
                &quot;{FOUNDER.quote}&quot;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold text-2xl font-bold">
                    {FOUNDER.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{FOUNDER.name}</h4>
                  <p className="text-gold text-sm">{FOUNDER.title}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
