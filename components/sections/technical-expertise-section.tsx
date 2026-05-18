'use client'

import { motion } from 'framer-motion'
import { Brain, Database, Boxes, Cpu, Zap, Cloud, Code, Shield, Award, Sparkles, Server, TestTube } from 'lucide-react'

const expertiseItems = [
  { id: 1, label: 'AI/ML', desc: 'Intelligent automation & prediction systems', icon: Brain },
  { id: 2, label: 'Generative AI', desc: 'LLMs, RAG & AI-powered applications', icon: Sparkles },
  { id: 3, label: 'Data Science', desc: 'Statistical modeling & data analysis', icon: Database },
  { id: 4, label: 'Big Data', desc: 'Scalable data processing architectures', icon: Boxes },
  { id: 5, label: 'Deep Learning', desc: 'Neural networks & advanced AI models', icon: Cpu },
  { id: 6, label: 'Agentic AI', desc: 'Autonomous AI agents & workflows', icon: Brain },
  { id: 7, label: 'IoT', desc: 'Smart connected systems & automation', icon: Zap },
  { id: 8, label: 'Cloud', desc: 'Scalable infrastructure & deployment', icon: Cloud },
  { id: 9, label: 'PaaS', desc: 'Platform as a service solutions', icon: Server },
  { id: 10, label: 'Python', desc: 'Enterprise backend & ML pipelines', icon: Code },
  { id: 11, label: 'Java', desc: 'Robust enterprise applications', icon: Code },
  { id: 12, label: 'Research', desc: 'Academic & industry R&D initiatives', icon: TestTube },
]

export function TechnicalExpertiseSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-4"
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-gray font-medium"
          >
            Core Competencies
          </motion.p>
        </div>

        {/* Clean, Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative flex flex-col p-6 rounded-2xl bg-[#fafafa] border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 hover:border-gold/30 transition-all duration-300 ease-out"
              >
                <div className="mb-4">
                  <Icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-navy mb-1">{item.label}</h3>
                <p className="text-sm text-text-gray/80 leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Minimal Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-base font-medium text-text-gray tracking-wide">
            Research-driven expertise across modern AI and enterprise technologies.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
