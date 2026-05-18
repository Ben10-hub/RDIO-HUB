'use client'

import { EventCard, SectionHeader } from '@/components/common'
import { FALLBACK_EVENTS } from '@/data/events'
import type { TechEvent } from '@/types'

interface EventsListProps {
  events?: TechEvent[]
}

export function EventsList({ events = FALLBACK_EVENTS }: EventsListProps) {
  const now = new Date()
  
  const upcomingEvents = events
    .filter((e) => new Date(e.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
  
  const pastEvents = events
    .filter((e) => new Date(e.date) < now)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <div className="mb-16">
            <SectionHeader
              label="Mark Your Calendar"
              title="Upcoming Events"
              description="Don't miss out on these exciting opportunities to learn and grow."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div>
            <SectionHeader
              title="Past Events"
              description="A look back at the events that brought our community together."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </div>
        )}

        {events.length === 0 && (
          <div className="text-center py-12">
            <p className="text-text-gray">No events scheduled at the moment. Check back soon!</p>
          </div>
        )}
      </div>
    </section>
  )
}
