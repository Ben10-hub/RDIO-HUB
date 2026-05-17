import { Metadata } from 'next'
import { Navbar, Footer } from '@/components/layout'
import { CareersHeroSection } from './components/careers-hero'
import { OpportunitiesSection } from './components/opportunities-section'
import { ProgramsSection } from './components/programs-section'
import { CTASection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Careers | RDIO AI',
  description: 'Join RDIO AI. Explore internship programs, hiring opportunities, research fellowships, and tech events for talented individuals.',
  openGraph: {
    title: 'Careers at RDIO AI',
    description: 'Join our team. Internships, hiring, and innovation programs.',
  },
}

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <CareersHeroSection />
        <OpportunitiesSection />
        <ProgramsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
