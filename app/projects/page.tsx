import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components/layout'
import { ProjectsHero } from './components/projects-hero'
import { ProjectsGrid } from './components/projects-grid'
import { CTASection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore our academic upskilling, corporate training, and research projects at RDIO AI.',
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ProjectsHero />
        <ProjectsGrid />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
