'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { SectionHeader, ProgramCard } from '@/components/common'
import { ENTERPRISE_CATEGORIES } from '@/lib/constants'
import { ENTERPRISE_PROGRAMS } from '@/data/enterprise-solutions'
import type { Program, ProgramCategory } from '@/types'
import { cn } from '@/lib/utils'

export function ProductSolutionsSection() {
  const [activeCategory, setActiveCategory] = useState<ProgramCategory | 'all'>('all')
  const [showAll, setShowAll] = useState(false)

  const activePrograms = ENTERPRISE_PROGRAMS
    .filter((p) => p.active)
    .sort((a, b) => a.displayOrder - b.displayOrder)

  const filteredPrograms =
    activeCategory === 'all'
      ? activePrograms
      : activePrograms.filter((p) => p.category === activeCategory)

  // We can choose the first one as featured, or one with a specific title
  const featuredProgram = filteredPrograms.find(p => p.title.toLowerCase().includes('ai product development')) || filteredPrograms[0]
  const standardPrograms = filteredPrograms.filter(p => p.id !== featuredProgram?.id)

  return (
    <section id="solutions" className="py-16 lg:py-24 bg-white scroll-mt-20 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 lg:px-8"
      >
        <SectionHeader
          label="Enterprise Services"
          title="Product Solutions We Build"
          description="Discover our premium AI and SaaS engineering services designed for modern enterprises."
        />

        {/* Category Tabs */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          <motion.button
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            onClick={() => { setActiveCategory('all'); setShowAll(false); }}
            className={cn(
              'px-5 py-2.5 rounded-full text-sm font-medium transition-all',
              activeCategory === 'all'
                ? 'bg-navy text-white'
                : 'bg-muted text-text-gray hover:bg-navy/10'
            )}
          >
            All Solutions
          </motion.button>
          {ENTERPRISE_CATEGORIES.map((category) => (
            <motion.button
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              key={category.id}
              onClick={() => { setActiveCategory(category.id); setShowAll(false); }}
              className={cn(
                'px-5 py-2.5 rounded-full text-sm font-medium transition-all',
                activeCategory === category.id
                  ? 'bg-navy text-white'
                  : 'bg-muted text-text-gray hover:bg-navy/10'
              )}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Programs Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Featured Program */}
            {featuredProgram && (
              <div className="w-full lg:w-4/5 mx-auto mb-4">
                <ProgramCard program={featuredProgram} index={0} featured={true} variant="enterprise" />
              </div>
            )}

            {/* Standard Grid */}
            {standardPrograms.length > 0 && (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {standardPrograms.slice(0, showAll ? undefined : 3).map((program, index) => (
                    <ProgramCard key={program.id} program={program} index={index + (featuredProgram ? 1 : 0)} variant="enterprise" />
                  ))}
                </div>
                {!showAll && standardPrograms.length > 3 && (
                  <div className="mt-12 flex justify-center">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      onClick={() => setShowAll(true)}
                      className="border-navy text-navy hover:bg-navy hover:text-white px-8 h-12 text-base font-semibold transition-all"
                    >
                      View More Solutions
                    </Button>
                  </div>
                )}
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-gray">No solutions available in this category.</p>
          </div>
        )}
      </motion.div>
    </section>
  )
}
