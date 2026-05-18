import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components/layout'
import { CollaborationHero } from './components/collaboration-hero'
import { CollaborationTypes } from './components/collaboration-types'
import { CollaborationProcess } from './components/collaboration-process'
import { CTASection } from '@/components/sections'

export const metadata: Metadata = {
  title: 'Collaboration',
  description: 'Partner with RDIO AI for academic and industry collaboration - FDPs, corporate training, research partnerships, and more.',
}

export default function CollaborationPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <CollaborationHero />
        <CollaborationTypes />
        <CollaborationProcess />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
