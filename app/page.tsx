import { Navbar, Footer } from '@/components/layout'
import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/sections'

// Dynamically load below-the-fold sections to reduce initial bundle size
const SocialProofSection = dynamic(() => import('@/components/sections').then(mod => mod.SocialProofSection))
const ProgramsSection = dynamic(() => import('@/components/sections').then(mod => mod.ProgramsSection))
const UpcomingEventsSection = dynamic(() => import('@/components/sections').then(mod => mod.UpcomingEventsSection))
const DomainsSection = dynamic(() => import('@/components/sections').then(mod => mod.DomainsSection))
const WhyRdioSection = dynamic(() => import('@/components/sections').then(mod => mod.WhyRdioSection))
const ProjectsSection = dynamic(() => import('@/components/sections').then(mod => mod.ProjectsSection))
const CollaborationSection = dynamic(() => import('@/components/sections').then(mod => mod.CollaborationSection))
const GallerySection = dynamic(() => import('@/components/sections').then(mod => mod.GallerySection))
const FounderSection = dynamic(() => import('@/components/sections').then(mod => mod.FounderSection))
const CTASection = dynamic(() => import('@/components/sections').then(mod => mod.CTASection))
import { getDomains, getPrograms, getEvents, getGalleryImages } from '@/services/google-sheets'

export default async function HomePage() {
  // Fetch dynamic data from Google Sheets (with fallback)
  const [domains, programs, events, gallery] = await Promise.all([
    getDomains(),
    getPrograms(),
    getEvents(),
    getGalleryImages(),
  ])

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <ProgramsSection programs={programs} />
        <UpcomingEventsSection events={events} />
        <DomainsSection domains={domains} />
        <WhyRdioSection />
        <ProjectsSection />
        <CollaborationSection />
        <GallerySection images={gallery} />
        <FounderSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
