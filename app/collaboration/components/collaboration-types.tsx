'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraduationCap, Building, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ACADEMIC_COLLABORATION, INDUSTRY_COLLABORATION } from '@/lib/constants'

const academicBenefits = [
  'Industry-aligned curriculum support',
  'Expert faculty for workshops & FDPs',
  'Student internship opportunities',
  'Research collaboration & publication support',
  'Placement assistance for students',
  'Access to cutting-edge tools & platforms',
]

const industryBenefits = [
  'Customized training programs',
  'On-site & remote training options',
  'Certified industry professionals',
  'Measurable skill development metrics',
  'Talent pipeline development',
  'Consultancy services',
]

export function CollaborationTypes() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Academic Collaboration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-soft-bg rounded-2xl p-8 lg:p-10 border border-border"
          >
            <div className="w-16 h-16 rounded-xl bg-navy/10 flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-navy" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-3">
              {ACADEMIC_COLLABORATION.title}
            </h2>
            <p className="text-text-gray mb-6">
              Partner with us to enhance your institution&apos;s technical capabilities and provide students with industry-relevant education.
            </p>

            <h3 className="font-semibold text-navy mb-4">What We Offer:</h3>
            <ul className="space-y-3 mb-6">
              {ACADEMIC_COLLABORATION.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-gray">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-navy mb-4">Benefits:</h3>
            <ul className="space-y-3 mb-8">
              {academicBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-text-gray">
                  <CheckCircle className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="bg-navy hover:bg-navy/90 text-white gap-2"
            >
              <Link href="/contact">
                Start Academic Partnership <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>

          {/* Industry Collaboration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-navy rounded-2xl p-8 lg:p-10"
          >
            <div className="w-16 h-16 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
              <Building className="w-8 h-8 text-gold" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              {INDUSTRY_COLLABORATION.title}
            </h2>
            <p className="text-white/80 mb-6">
              Transform your workforce with our tailored corporate training programs designed to meet your organization&apos;s unique needs.
            </p>

            <h3 className="font-semibold text-gold mb-4">What We Offer:</h3>
            <ul className="space-y-3 mb-6">
              {INDUSTRY_COLLABORATION.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-gold mb-4">Benefits:</h3>
            <ul className="space-y-3 mb-8">
              {industryBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-white/80">
                  <CheckCircle className="w-5 h-5 text-white/60 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="bg-gold hover:bg-gold/90 text-navy gap-2"
            >
              <Link href="/contact">
                Start Industry Partnership <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
