import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components/layout'
import { AboutHero } from './components/about-hero'
import { TrustBar } from './components/trust-bar'
import { WhoWeAre } from './components/who-we-are'
import { Leadership } from './components/leadership'
import { MissionVision } from './components/mission-vision'
import { Collaborations } from './components/collaborations'
import { CTASection, TechnicalExpertiseSection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'About RDIO AI | Innovation & Enterprise Tech',
  description: 'RDIO AI builds AI solutions, SaaS products, research-driven innovation, and workforce development programs.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <AboutHero />
        <TrustBar />
        <WhoWeAre />
        <Leadership />
        <MissionVision />
        <TechnicalExpertiseSection />
        <Collaborations />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
