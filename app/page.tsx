import { Navbar, Footer } from '@/components/layout'
import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/sections'

// Dynamically load below-the-fold sections to reduce initial bundle size
const TrustMarqueeSection = dynamic(() => import('@/components/sections').then(mod => mod.TrustMarqueeSection))
const ProductSolutionsSection = dynamic(() => import('@/components/sections').then(mod => mod.ProductSolutionsSection))
const WhyRdioSection = dynamic(() => import('@/components/sections').then(mod => mod.WhyRdioSection))
const UpcomingEventsSection = dynamic(() => import('@/components/sections').then(mod => mod.UpcomingEventsSection))
const CollaborationSection = dynamic(() => import('@/components/sections').then(mod => mod.CollaborationSection))
const GallerySection = dynamic(() => import('@/components/sections').then(mod => mod.GallerySection))
const FounderSection = dynamic(() => import('@/components/sections').then(mod => mod.FounderSection))
const CTASection = dynamic(() => import('@/components/sections').then(mod => mod.CTASection))
import { getEvents, getGalleryImages } from '@/services/google-sheets'

export default async function HomePage() {
  // Fetch dynamic data from Google Sheets (with fallback)
  const [events, gallery] = await Promise.all([
    getEvents(),
    getGalleryImages(),
  ])

  return (
    <>
      <Navbar />
      <main>
        {/* Section Order (Spec Compliance) */}
        <HeroSection />
        <TrustMarqueeSection />
        <ProductSolutionsSection />
        <WhyRdioSection />
        <UpcomingEventsSection events={events} />
        <CollaborationSection />
        <GallerySection images={gallery} />
        <FounderSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
