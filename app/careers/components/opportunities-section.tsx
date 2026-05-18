'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Users, BookOpen, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/common'

const opportunities = [
  {
    id: 1,
    title: 'Full-Time Positions',
    description: 'Join our core team as engineers, product managers, designers, and specialists.',
    icon: Code,
    items: ['Software Engineers', 'Product Managers', 'AI/ML Engineers', 'Cloud Architects'],
    badge: 'Hiring Now',
  },
  {
    id: 2,
    title: 'Internship Programs',
    description: ' Gain hands-on experience working on real-world projects with mentorship.',
    icon: Users,
    items: ['Engineering Internships', 'Product Internships', 'Research Internships', 'UI/UX Internships'],
    badge: 'Open',
  },
  {
    id: 3,
    title: 'Research Fellowships',
    description: 'Collaborate on cutting-edge research in AI, ML, and distributed systems.',
    icon: BookOpen,
    items: ['AI Research', 'Systems Research', 'Data Science', 'Security Research'],
    badge: 'Limited Slots',
  },
  {
    id: 4,
    title: 'Graduate Programs',
    description: 'Fast-track your career with our specialized graduate development programs.',
    icon: Award,
    items: ['Tech Leadership', 'Product Development', 'Entrepreneurship', 'Advanced Engineering'],
    badge: 'Apply Now',
  },
]

export function OpportunitiesSection() {
  return (
    <section id="opportunities" className="py-16 lg:py-24 bg-soft-bg overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="Career Paths"
          title="Opportunities for Everyone"
          description="Whether you&apos;re starting your career or a seasoned professional, find the perfect role to grow with us."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {opportunities.map((opp, index) => {
            const Icon = opp.icon
            return (
              <motion.div
                key={opp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative bg-card rounded-2xl p-8 border border-border hover:border-gold/30 transition-all duration-300 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold/20 text-gold">
                      {opp.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-navy mb-3">
                    {opp.title}
                  </h3>
                  <p className="text-text-gray mb-6">
                    {opp.description}
                  </p>

                  {/* Items List */}
                  <div className="space-y-2 mb-8 flex-grow">
                    {opp.items.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-text-gray">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {item}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    className="w-full bg-navy hover:bg-navy/90 text-white font-semibold"
                  >
                    <Link href={`/contact?opportunity=${opp.id}`}>
                      Apply for This Role
                      <ArrowRight className="ml-2 w-4 h-4" />
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
