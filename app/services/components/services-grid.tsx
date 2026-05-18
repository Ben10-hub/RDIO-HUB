'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, Cloud, Zap, Code, Shield, Cpu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/common'

const services = [
  {
    id: 'ai-agents',
    title: 'AI Agent Development',
    description: 'Intelligent autonomous agents for automation, customer service, and decision-making.',
    details: [
      'Custom AI Model Development',
      'NLP & Conversational AI',
      '24/7 Automation Solutions',
      'Multi-agent Systems',
      'Integration with Existing Systems',
    ],
    icon: Brain,
  },
  {
    id: 'saas-solutions',
    title: 'SaaS Development',
    description: 'Scalable, cloud-native SaaS platforms built for enterprise and startup needs.',
    details: [
      'Multi-tenant Architecture',
      'Real-time Analytics Dashboard',
      'API-first Development',
      'Payment Integration',
      'Compliance & Security',
    ],
    icon: Cloud,
  },
  {
    id: 'iot-systems',
    title: 'IoT Solutions',
    description: 'Connected IoT systems for smart manufacturing, healthcare, and smart cities.',
    details: [
      'Edge Computing',
      'Real-time Monitoring',
      'Device Management',
      'Data Collection & Analysis',
      'Predictive Maintenance',
    ],
    icon: Zap,
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    description: 'Modern, scalable web applications with optimal performance and UX.',
    details: [
      'Progressive Web Apps',
      'Real-time Collaboration',
      'Database Optimization',
      'Microservices Architecture',
      'SEO Optimization',
    ],
    icon: Code,
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'End-to-end cloud migration, deployment, and management services.',
    details: [
      'Cloud Migration',
      'Infrastructure as Code',
      'Auto-scaling Setup',
      'Disaster Recovery',
      'Cost Optimization',
    ],
    icon: Shield,
  },
  {
    id: 'automation',
    title: 'Business Automation',
    description: 'Process automation and optimization for increased efficiency.',
    details: [
      'Workflow Automation',
      'RPA Solutions',
      'Document Processing',
      'Data Pipeline Automation',
      'Custom Integrations',
    ],
    icon: Cpu,
  },
]

export function ServicesGridSection() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-soft-bg overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="Our Capabilities"
          title="Complete Service Spectrum"
          description="Comprehensive solutions across AI, cloud, IoT, and product engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="bg-card rounded-2xl p-8 border border-border hover:border-gold/30 transition-all duration-300 h-full flex flex-col hover:shadow-premium-lg">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-gray mb-6">
                    {service.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-8 flex-grow">
                    {service.details.map((detail) => (
                      <div key={detail} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1 flex-shrink-0" />
                        <span className="text-sm text-text-gray">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full group/btn text-navy hover:bg-gold/10 justify-between"
                  >
                    <Link href={`/contact?service=${service.id}`}>
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
