'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-navy">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Ready to Transform Your Business with <span className="text-gold">RDIO AI</span>?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s discuss how our AI, SaaS, and product engineering solutions can solve your most complex challenges and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 h-12 text-base gap-2"
            >
              <Link href="/contact">
                Schedule Consultation <ArrowRight size={18} />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white border-white text-navy hover:bg-white/90 font-semibold px-8 h-12 text-base gap-2"
            >
              <Link href="/services">
                Explore Our Services <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
