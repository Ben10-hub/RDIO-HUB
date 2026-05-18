'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Building, FileText, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/common'

const projectCategories = [
  {
    id: 'academic',
    icon: GraduationCap,
    title: 'Academic Upskilling',
    description: 'Comprehensive programs designed for students and faculty to bridge the academic-industry gap.',
    projects: [
      'AI/ML Training Programs for Engineering Students',
      'Data Science Bootcamps for Science Graduates',
      'Faculty Development Programs (FDPs)',
      'Campus-wide Technical Workshops',
      'Research Paper Writing Workshops',
      'Industry Internship Programs',
    ],
    color: 'navy',
  },
  {
    id: 'corporate',
    icon: Building,
    title: 'Corporate Upskilling',
    description: 'Tailored training solutions for organizations to upskill their workforce with latest technologies.',
    projects: [
      'Enterprise AI Implementation Training',
      'Data Analytics for Business Teams',
      'Leadership Tech Awareness Programs',
      'Custom Corporate Training Modules',
      'Team-based Project Learning',
      'Technology Transition Programs',
    ],
    color: 'gold',
  },
  {
    id: 'research',
    icon: FileText,
    title: 'Research Projects',
    description: 'Mentorship and guidance for students and professionals pursuing research and publications.',
    projects: [
      'Research Paper Writing Mentorship',
      'Journal Publication Guidance',
      'Conference Paper Preparation',
      'PhD Research Support',
      'Industry-Academia Research Projects',
      'Innovation and Patent Support',
    ],
    color: 'navy',
  },
]

export function ProjectsGrid() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          title="Our Project Categories"
          description="Explore our diverse range of projects across academic, corporate, and research domains."
        />

        <div className="space-y-8">
          {projectCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-soft-bg rounded-2xl p-8 lg:p-10 border border-border"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Header */}
                <div className="lg:w-1/3">
                  <div 
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                      category.color === 'gold' ? 'bg-gold/10' : 'bg-navy/10'
                    }`}
                  >
                    <category.icon 
                      className={`w-7 h-7 ${
                        category.color === 'gold' ? 'text-gold' : 'text-navy'
                      }`} 
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3">
                    {category.title}
                  </h3>
                  <p className="text-text-gray mb-6">
                    {category.description}
                  </p>
                  <Button
                    asChild
                    className={`gap-2 ${
                      category.color === 'gold' 
                        ? 'bg-gold hover:bg-gold/90 text-navy' 
                        : 'bg-navy hover:bg-navy/90 text-white'
                    }`}
                  >
                    <Link href="/contact">
                      Get Started <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>

                {/* Projects List */}
                <div className="lg:w-2/3">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {category.projects.map((project) => (
                      <div
                        key={project}
                        className="bg-white rounded-xl p-4 border border-border hover:border-gold/30 transition-colors"
                      >
                        <p className="text-navy font-medium">{project}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
