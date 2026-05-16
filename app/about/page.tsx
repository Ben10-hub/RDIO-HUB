import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components/layout'
import { AboutHero } from './components/about-hero'
import { MissionVision } from './components/mission-vision'
import { WhyChooseUs } from './components/why-choose-us'
import { OurApproach } from './components/our-approach'
import { CTASection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about RDIO AI - Our mission to bridge the gap between academic learning and industry requirements through quality education and training.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <AboutHero />
        <MissionVision />
        <WhyChooseUs />
        <OurApproach />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
