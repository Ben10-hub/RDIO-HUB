'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraduationCap, Building, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/common'
import { ACADEMIC_COLLABORATION, INDUSTRY_COLLABORATION } from '@/lib/constants'

export function CollaborationSection() {
  return (
    <section className="py-16 lg:py-24 bg-soft-bg relative overflow-hidden">
      {/* Background Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-navy/5 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionHeader
          label="Partnership Opportunities"
          title="Collaborate With Us"
          description="Join hands with RDIO AI for academic excellence and industry-ready workforce development."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Academic Collaboration */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-2xl p-8 border border-border hover:border-navy hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7 text-navy" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-3">
              {ACADEMIC_COLLABORATION.title}
            </h3>
            <p className="text-text-gray mb-6">
              {ACADEMIC_COLLABORATION.description}
            </p>
            <ul className="space-y-3 mb-8">
              {ACADEMIC_COLLABORATION.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-text-gray">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="bg-navy hover:bg-navy/90 text-white gap-2"
            >
              <Link href="/collaboration">
                Learn More <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>

          {/* Industry Collaboration */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-2xl p-8 border border-border hover:border-navy hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
              <Building className="w-7 h-7 text-gold" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-3">
              {INDUSTRY_COLLABORATION.title}
            </h3>
            <p className="text-text-gray mb-6">
              {INDUSTRY_COLLABORATION.description}
            </p>
            <ul className="space-y-3 mb-8">
              {INDUSTRY_COLLABORATION.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-text-gray">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="bg-gold hover:bg-gold/90 text-navy gap-2"
            >
              <Link href="/collaboration">
                Partner With Us <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
