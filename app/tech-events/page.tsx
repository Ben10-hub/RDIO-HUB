import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components/layout'
import { EventsHero } from './components/events-hero'
import { EventsList } from './components/events-list'
import { CTASection } from '@/components/sections'
import { getEvents } from '@/services/google-sheets'

export const metadata: Metadata = {
  title: 'Tech Events',
  description: 'Stay updated with our tech events, hackathons, workshops, and industry talks at RDIO AI.',
}

export default async function TechEventsPage() {
  const events = await getEvents()

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <EventsHero />
        <EventsList events={events} />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
