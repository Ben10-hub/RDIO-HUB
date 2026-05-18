'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Brain, Cloud, Smartphone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/common'

const products = [
  {
    id: 1,
    title: 'AI Agent Platform',
    description: 'Enterprise-grade AI agents for automation, customer service, and intelligent decision-making.',
    features: ['Custom AI Models', 'Natural Language Processing', '24/7 Automation'],
    icon: Brain,
    color: 'from-gold/20 to-gold/5',
  },
  {
    id: 2,
    title: 'SaaS Solutions',
    description: 'Scalable, cloud-native SaaS platforms built for enterprise clients and startups.',
    features: ['Multi-tenant Architecture', 'Analytics Dashboard', 'API Integration'],
    icon: Cloud,
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    id: 3,
    title: 'IoT Systems',
    description: 'Connected IoT solutions for smart manufacturing, healthcare, and infrastructure.',
    features: ['Real-time Monitoring', 'Edge Computing', 'Device Management'],
    icon: Zap,
    color: 'from-green-500/20 to-green-500/5',
  },
  {
    id: 4,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps with seamless user experience and performance.',
    features: ['iOS & Android', 'Offline Capability', 'Real-time Sync'],
    icon: Smartphone,
    color: 'from-purple-500/20 to-purple-500/5',
  },
]

export function ProductSolutionsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="Product Portfolio"
          title="Solutions We Build"
          description="Innovative products and platforms designed for enterprise success and market impact."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-gold/30 transition-all duration-300 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-gold" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-navy mb-3">
                    {product.title}
                  </h3>
                  <p className="text-text-gray mb-6 flex-grow">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-8">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-text-gray">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full group/btn text-navy hover:bg-gold/10 justify-between"
                  >
                    <Link href={`/services#${product.id}`}>
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 lg:mt-16"
        >
          <p className="text-text-gray mb-6">
            Ready to transform your business with intelligent solutions?
          </p>
          <Button
            asChild
            size="lg"
            className="bg-navy hover:bg-navy/90 text-white font-semibold px-8"
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
