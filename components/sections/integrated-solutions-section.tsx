'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, Cloud, Smartphone, Zap, Database, Code, Cpu, Shield, Gauge, Boxes } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/common'

// Expertise tags
const expertiseTags = [
  { id: 1, label: 'AI/ML', icon: Brain },
  { id: 2, label: 'Data Science', icon: Database },
  { id: 3, label: 'Big Data', icon: Boxes },
  { id: 4, label: 'Deep Learning', icon: Cpu },
  { id: 5, label: 'Generative AI', icon: Brain },
  { id: 6, label: 'Agentic AI', icon: Brain },
  { id: 7, label: 'Quantum Computing', icon: Gauge },
  { id: 8, label: 'Python & Java', icon: Code },
  { id: 9, label: 'IoT & Robotics', icon: Zap },
  { id: 10, label: 'Cloud & PaaS', icon: Cloud },
  { id: 11, label: 'Research', icon: Code },
  { id: 12, label: 'Automation', icon: Gauge },
  { id: 13, label: 'Web Development', icon: Code },
  { id: 14, label: 'Cybersecurity', icon: Shield },
]

// Solution products
const solutions = [
  {
    id: 1,
    title: 'AI Agent Platform',
    description: 'Enterprise-grade AI agents for automation, customer service, and intelligent decision-making.',
    features: ['Custom AI Models', 'Natural Language Processing', '24/7 Automation'],
    icon: Brain,
    bgGradient: 'from-gold/15 to-gold/5',
    size: 'large', // Takes more space in grid
  },
  {
    id: 2,
    title: 'SaaS Solutions',
    description: 'Scalable, cloud-native SaaS platforms built for enterprise clients and startups.',
    features: ['Multi-tenant Architecture', 'Analytics Dashboard', 'API Integration'],
    icon: Cloud,
    bgGradient: 'from-blue-500/15 to-blue-500/5',
    size: 'medium',
  },
  {
    id: 3,
    title: 'IoT Systems',
    description: 'Connected IoT solutions for smart manufacturing, healthcare, and infrastructure.',
    features: ['Real-time Monitoring', 'Edge Computing', 'Device Management'],
    icon: Zap,
    bgGradient: 'from-green-500/15 to-green-500/5',
    size: 'medium',
  },
  {
    id: 4,
    title: 'GenAI Applications',
    description: 'Custom generative AI applications tailored for enterprise workflows and content generation.',
    features: ['RAG Systems', 'Fine-tuning', 'Integration Ready'],
    icon: Brain,
    bgGradient: 'from-purple-500/15 to-purple-500/5',
    size: 'medium',
  },
  {
    id: 5,
    title: 'Enterprise Web Applications',
    description: 'High-performance web applications with modern architecture and best practices.',
    features: ['Responsive Design', 'Scalable Backend', 'Real-time Features'],
    icon: Code,
    bgGradient: 'from-orange-500/15 to-orange-500/5',
    size: 'medium',
  },
  {
    id: 6,
    title: 'Automation & Cloud Systems',
    description: 'End-to-end automation and cloud infrastructure solutions for operational excellence.',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Cost Optimization'],
    icon: Cpu,
    bgGradient: 'from-pink-500/15 to-pink-500/5',
    size: 'large',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export function IntegratedSolutionsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            label="Expertise & Solutions"
            title="What We Build & Deliver"
            description="Deep technical expertise combined with proven product solutions. We engineer intelligent systems that solve real business challenges at enterprise scale."
          />
        </motion.div>

        {/* Part 1: Expertise Tags */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 lg:mb-20"
        >
          <h3 className="text-lg font-semibold text-navy mb-6 text-balance">
            Core Technical Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {expertiseTags.map((tag) => {
              const IconComponent = tag.icon
              return (
                <motion.div
                  key={tag.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, translateY: -2 }}
                  className="group"
                >
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-card border border-border hover:border-gold/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-premium-sm">
                    <IconComponent className="w-4 h-4 text-gold" />
                    <span className="text-sm font-medium text-navy whitespace-nowrap">
                      {tag.label}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Part 2: Premium Bento Grid - Solutions */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-navy mb-6 text-balance">
            Product Solutions & Platforms
          </h3>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-max"
        >
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon
            const isLarge = solution.size === 'large'

            return (
              <motion.div
                key={solution.id}
                variants={itemVariants}
                className={isLarge ? 'lg:col-span-2 lg:row-span-2' : ''}
              >
                <div className="group h-full">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${solution.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />

                  {/* Card container */}
                  <div className="relative h-full bg-card rounded-2xl p-8 border border-border hover:border-gold/30 transition-all duration-300 flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-lg bg-gold/10 group-hover:bg-gold/20 transition-colors flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-gold" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`font-bold text-navy mb-3 group-hover:text-gold transition-colors ${
                      isLarge ? 'text-2xl lg:text-3xl' : 'text-xl'
                    }`}>
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-gray mb-6 flex-grow leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-8">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm text-text-gray">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      asChild
                      variant="ghost"
                      className="w-full group/btn text-navy hover:bg-gold/10 justify-between font-medium"
                    >
                      <Link href={`/services#${solution.id}`}>
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 lg:mt-20"
        >
          <p className="text-text-gray text-lg mb-8 max-w-2xl mx-auto">
            Ready to transform your business with intelligent solutions backed by deep technical expertise?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-navy hover:bg-navy/90 text-white font-semibold px-8 h-12 shadow-premium-lg hover:shadow-premium-xl transition-all"
          >
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
