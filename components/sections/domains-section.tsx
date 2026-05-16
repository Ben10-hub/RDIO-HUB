'use client'

import { useState } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import { SectionHeader, DomainCard } from '@/components/common'
import { FALLBACK_DOMAINS } from '@/data/domains'
import type { Domain } from '@/types'

interface DomainsSectionProps {
  domains?: Domain[]
}

export function DomainsSection({ domains = FALLBACK_DOMAINS }: DomainsSectionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const activeDomains = domains
    .filter((d) => d.active)
    .sort((a, b) => a.order - b.order)

  return (
    <section className="py-16 lg:py-24 bg-soft-bg overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 lg:px-8"
      >
        <SectionHeader
          label="Our Expertise"
          title="Domains We Cover"
          description="From foundational programming to cutting-edge AI technologies, we offer comprehensive training across multiple domains."
        />

        <LayoutGroup>
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 items-start">
            {activeDomains.map((domain, index) => (
              <DomainCard 
                key={domain.id} 
                domain={domain} 
                index={index} 
                isExpanded={expandedId === domain.id}
                onClick={() => setExpandedId(expandedId === domain.id ? null : domain.id)}
              />
            ))}
          </motion.div>
        </LayoutGroup>
      </motion.div>
    </section>
  )
}
