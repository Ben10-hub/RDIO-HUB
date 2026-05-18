'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/common'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'Share your requirements and goals. We&apos;ll understand your needs and propose suitable solutions.',
  },
  {
    number: '02',
    title: 'Custom Proposal',
    description: 'Receive a tailored proposal outlining programs, timelines, and investment.',
  },
  {
    number: '03',
    title: 'Agreement & Planning',
    description: 'Finalize the partnership agreement and plan the implementation roadmap.',
  },
  {
    number: '04',
    title: 'Program Execution',
    description: 'Our experts deliver the programs with regular progress updates and support.',
  },
  {
    number: '05',
    title: 'Continuous Support',
    description: 'Ongoing support, feedback collection, and program optimization for best results.',
  },
]

export function CollaborationProcess() {
  return (
    <section className="py-16 lg:py-24 bg-soft-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="How It Works"
          title="Partnership Process"
          description="A simple and transparent process to start your collaboration with RDIO AI."
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
                )}

                <div className="relative z-10 bg-white rounded-2xl p-6 border border-border h-full">
                  <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-4">
                    <span className="text-gold font-bold text-sm">{step.number}</span>
                  </div>
                  <h3 className="font-semibold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-gray text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
