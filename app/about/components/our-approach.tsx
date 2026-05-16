'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/common'

const steps = [
  {
    number: '01',
    title: 'Assess & Understand',
    description: 'We begin by understanding your learning goals, current skill level, and career aspirations.',
  },
  {
    number: '02',
    title: 'Customize Learning Path',
    description: 'Our experts design a personalized curriculum that aligns with your objectives and industry demands.',
  },
  {
    number: '03',
    title: 'Hands-On Training',
    description: 'Learn through practical projects, real-world case studies, and industry-standard tools.',
  },
  {
    number: '04',
    title: 'Mentorship & Support',
    description: 'Get continuous guidance from industry mentors throughout your learning journey.',
  },
  {
    number: '05',
    title: 'Career Launch',
    description: 'Graduate with a strong portfolio, industry connections, and career placement support.',
  },
]

export function OurApproach() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="Our Process"
          title="How We Work"
          description="A structured approach to transform your learning into career success."
        />

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 top-14 w-0.5 h-full bg-border" />
              )}

              {/* Number */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy flex items-center justify-center">
                <span className="text-gold font-bold text-sm">{step.number}</span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="font-semibold text-navy text-xl mb-2">
                  {step.title}
                </h3>
                <p className="text-text-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
