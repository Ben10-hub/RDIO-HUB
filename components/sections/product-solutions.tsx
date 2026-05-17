'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, Cloud, Smartphone, Zap, Code, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/common'

const solutions = [
  {
    id: 1,
    title: 'AI Agent Platform',
    description: 'Enterprise-grade AI agents for automation, customer service, and intelligent decision-making.',
    features: ['Custom AI Models', 'Natural Language Processing', '24/7 Automation'],
    icon: Brain,
    bgGradient: 'from-gold/15 to-gold/5',
    borderColor: 'border-gold/30',
  },
  {
    id: 2,
    title: 'SaaS Solutions',
    description: 'Scalable, cloud-native SaaS platforms built for enterprise clients and startups.',
    features: ['Multi-tenant Architecture', 'Analytics Dashboard', 'API Integration'],
    icon: Cloud,
    bgGradient: 'from-blue-500/15 to-blue-500/5',
    borderColor: 'border-blue-500/30',
  },
  {
    id: 3,
    title: 'IoT Systems',
    description: 'Connected IoT solutions for smart manufacturing, healthcare, and infrastructure.',
    features: ['Real-time Monitoring', 'Edge Computing', 'Device Management'],
    icon: Zap,
    bgGradient: 'from-purple-500/15 to-purple-500/5',
    borderColor: 'border-purple-500/30',
  },
  {
    id: 4,
    title: 'GenAI Applications',
    description: 'Cutting-edge generative AI tools for content, analysis, and creative solutions.',
    features: ['RAG Systems', 'Fine-tuning', 'Integration Ready'],
    icon: Brain,
    bgGradient: 'from-pink-500/15 to-pink-500/5',
    borderColor: 'border-pink-500/30',
  },
  {
    id: 5,
    title: 'Enterprise Web Applications',
    description: 'Modern, scalable web apps built with latest technologies and best practices.',
    features: ['Responsive Design', 'Scalable Backend', 'Real-time Features'],
    icon: Code,
    bgGradient: 'from-cyan-500/15 to-cyan-500/5',
    borderColor: 'border-cyan-500/30',
  },
  {
    id: 6,
    title: 'Cloud & PaaS Solutions',
    description: 'Infrastructure automation, deployment pipelines, and cloud architecture.',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Cost Optimization'],
    icon: Cloud,
    bgGradient: 'from-green-500/15 to-green-500/5',
    borderColor: 'border-green-500/30',
  },
]

export function ProductSolutionsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 lg:px-8 relative z-10"
      >
        <SectionHeader
          label="Product Portfolio"
          title="Product Solutions We Build"
          description="Enterprise-ready solutions designed to solve real-world challenges with scalability, reliability, and innovation at every step."
        />

        {/* Balanced Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group rounded-2xl border ${solution.borderColor} bg-gradient-to-br ${solution.bgGradient} p-8 backdrop-blur-sm hover:shadow-premium-lg hover:scale-105 transition-all duration-300 flex flex-col`}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
                  <Icon className="w-7 h-7 text-gold" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-gray mb-6 leading-relaxed flex-grow">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span className="text-sm text-text-gray">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-navy/10 hover:bg-navy/20 text-navy font-semibold transition-colors"
                >
                  <Link href="/contact">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-text-gray mb-6 max-w-2xl mx-auto">
            Need a custom solution? Let&apos;s discuss how we can build intelligent products tailored to your unique business needs.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-navy hover:bg-navy/90 text-white font-semibold px-8"
          >
            <Link href="/contact">
              Schedule a Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
