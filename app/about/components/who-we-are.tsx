'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function WhoWeAre() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Short Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy tracking-tight mb-6">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-text-gray/90 leading-relaxed font-medium">
              <p>
                RDIO AI is an innovation-driven organization focused on AI, SaaS, Generative AI, IoT, digital products, research, and future-ready workforce development.
              </p>
              <p>
                We bridge the gap between academic learning and industry demands by building scalable enterprise software while cultivating a deep ecosystem of practical talent and continuous research.
              </p>
            </div>
          </motion.div>

          {/* Right: Layered Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[450px] w-full flex items-center justify-end"
          >
            {/* Background Image (Team/Training) */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="absolute right-0 top-0 w-3/4 h-[350px] rounded-[2rem] overflow-hidden shadow-lg border border-gray-100"
            >
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=1632&auto=format&fit=crop"
                alt="RDIO AI Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy/10 mix-blend-overlay" />
            </motion.div>

            {/* Foreground Image (Tech / Founder) */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4 }}
              className="absolute left-0 bottom-0 w-3/5 h-[280px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1769&auto=format&fit=crop"
                alt="RDIO AI Innovation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
