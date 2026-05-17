'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/common'

const programs = [
  {
    id: 1,
    title: 'Tech Events & Conferences',
    description: 'Attend and speak at industry-leading tech events, conferences, and workshops.',
    duration: 'Throughout the year',
    participants: '500+ annually',
  },
  {
    id: 2,
    title: 'Mentorship Program',
    description: 'Learn from experienced leaders and innovators in the tech industry.',
    duration: '3-6 months',
    participants: '100+ mentees',
  },
  {
    id: 3,
    title: 'Skills Development Workshops',
    description: 'Enhance your skills with curated workshops on latest technologies and practices.',
    duration: 'Monthly sessions',
    participants: 'Open to all',
  },
  {
    id: 4,
    title: 'Leadership Program',
    description: 'Develop management and leadership skills through dedicated training.',
    duration: '6 months',
    participants: '50+ participants',
  },
  {
    id: 5,
    title: 'Innovation Lab',
    description: 'Work on your own innovative ideas with support and resources.',
    duration: 'Ongoing',
    participants: '30+ projects',
  },
  {
    id: 6,
    title: 'Industry Partnerships',
    description: 'Network with leading companies and explore collaboration opportunities.',
    duration: 'Year-round',
    participants: '100+ companies',
  },
]

export function ProgramsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="Development"
          title="Growth Programs & Initiatives"
          description="Beyond your job title, we invest in your professional development and career advancement."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 border border-border hover:border-gold/30 transition-all duration-300 h-full flex flex-col hover:shadow-premium-lg">
                {/* Number Badge */}
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <span className="text-gold font-bold text-sm">
                    {String(program.id).padStart(2, '0')}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-navy mb-3">
                  {program.title}
                </h3>
                <p className="text-text-gray text-sm mb-6 flex-grow">
                  {program.description}
                </p>

                {/* Stats */}
                <div className="space-y-2 mb-6 pt-6 border-t border-border">
                  <div className="text-sm">
                    <span className="text-text-gray">Duration: </span>
                    <span className="font-semibold text-navy">{program.duration}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-text-gray">Participants: </span>
                    <span className="font-semibold text-navy">{program.participants}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  asChild
                  variant="ghost"
                  className="w-full group/btn text-navy hover:bg-gold/10 justify-between"
                >
                  <Link href={`/contact?program=${program.id}`}>
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 lg:mt-16 p-8 bg-soft-bg rounded-2xl border border-border"
        >
          <h3 className="text-2xl font-bold text-navy mb-3">
            Ready to join our team?
          </h3>
          <p className="text-text-gray mb-6 max-w-xl mx-auto">
            We&apos;re always looking for talented individuals who are passionate about technology and innovation.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-navy hover:bg-navy/90 text-white font-semibold px-8"
          >
            <Link href="/contact">
              Submit Your Application
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
