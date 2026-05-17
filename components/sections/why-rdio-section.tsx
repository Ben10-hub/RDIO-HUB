'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/common'
import { BookOpen, Briefcase, Code, Award } from 'lucide-react'

const features = [
  {
    title: 'Innovation First',
    description: 'We lead with cutting-edge technology and novel approaches to solve complex, real-world problems.',
    icon: Code,
  },
  {
    title: 'Research-Driven',
    description: 'Every solution is backed by rigorous research, data analysis, and continuous learning.',
    icon: BookOpen,
  },
  {
    title: 'Industry Ready',
    description: 'Build solutions that enterprises trust and deploy today, not theoretical concepts.',
    icon: Award,
  },
  {
    title: 'End-to-End Solutions',
    description: 'From concept to deployment, we handle architecture, development, and long-term support.',
    icon: Briefcase,
  },
]

export function WhyRdioSection() {
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
          label="Why Choose RDIO AI"
          title="Why Organizations Choose RDIO AI"
          description="Building intelligent systems, research-driven solutions, and future-ready technology through innovation and execution."
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
                className="group p-8 rounded-2xl border border-border bg-soft-bg hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-white transition-colors duration-300 text-navy">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-text-gray leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
