'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

export function MissionVision() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-navy rounded-2xl p-8 lg:p-10"
          >
            <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-gold" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Our Mission
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              To democratize quality tech education by providing industry-oriented training that transforms students into skilled professionals. We aim to make every learner job-ready through hands-on experience, mentorship, and real-world projects.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-soft-bg rounded-2xl p-8 lg:p-10 border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-navy" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-4">
              Our Vision
            </h2>
            <p className="text-text-gray text-lg leading-relaxed">
              To become the leading platform for industry-academia collaboration, creating a future where every student has access to quality education and every institution can deliver industry-relevant curriculum with confidence.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
