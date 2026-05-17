'use client'

import { motion } from 'framer-motion'
import { Brain, Database, Boxes, Cpu, Zap, Cloud, Code, Shield, Award, Gauge } from 'lucide-react'
import { SectionHeader } from '@/components/common'

const expertiseTags = [
  { id: 1, label: 'AI/ML', icon: Brain },
  { id: 2, label: 'Data Science', icon: Database },
  { id: 3, label: 'Big Data', icon: Boxes },
  { id: 4, label: 'Deep Learning', icon: Cpu },
  { id: 5, label: 'Generative AI', icon: Brain },
  { id: 6, label: 'Agentic AI', icon: Brain },
  { id: 7, label: 'IoT', icon: Zap },
  { id: 8, label: 'Cloud', icon: Cloud },
  { id: 9, label: 'PaaS', icon: Cloud },
  { id: 10, label: 'Python', icon: Code },
  { id: 11, label: 'Java', icon: Code },
  { id: 12, label: 'Research', icon: Award },
]

export function TechnicalExpertiseSection() {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 lg:px-8 relative z-10"
      >
        <SectionHeader
          label="Core Competencies"
          title="Technical Expertise"
          description="Deep specialization across cutting-edge technologies and proven industry domains."
        />

        {/* Expertise Tags Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          {expertiseTags.map((tag, index) => {
            const Icon = tag.icon
            return (
              <motion.div
                key={tag.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-xl border border-border bg-card p-5 hover:border-gold/50 hover:shadow-premium-md hover:scale-105 transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <p className="text-sm font-semibold text-navy group-hover:text-gold transition-colors">
                  {tag.label}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Sub-text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-navy/5 to-gold/5 border border-navy/10"
        >
          <p className="text-center text-text-gray leading-relaxed max-w-3xl mx-auto">
            Every solution we build is backed by years of research, hands-on implementation, and continuous learning. We stay at the forefront of technology adoption while maintaining the reliability that enterprise clients depend on.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
