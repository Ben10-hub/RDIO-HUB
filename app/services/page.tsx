import { Metadata } from 'next'
import { Navbar, Footer } from '@/components/layout'
import { ServicesHeroSection } from './components/services-hero'
import { ServicesGridSection } from './components/services-grid'
import { CTASection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Services | RDIO AI',
  description: 'Enterprise AI solutions, SaaS development, IoT systems, and product engineering. Comprehensive services for digital transformation.',
  openGraph: {
    title: 'Enterprise Services | RDIO AI',
    description: 'AI solutions, SaaS products, and intelligent systems for enterprises.',
  },
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHeroSection />
        <ServicesGridSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
