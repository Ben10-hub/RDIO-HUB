'use client'

import { motion } from 'framer-motion'
import { SectionHeader, EventCard } from '@/components/common'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import type { TechEvent } from '@/types'
import { FALLBACK_EVENTS } from '@/data/events'

interface UpcomingEventsSectionProps {
  events?: TechEvent[]
}

export function UpcomingEventsSection({ events = FALLBACK_EVENTS }: UpcomingEventsSectionProps) {
  if (!events || events.length === 0) return null

  // Get the next featured event (first one)
  const featuredEvent = events[0]
  const otherEvents = events.slice(1)

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 lg:px-8 relative z-10"
      >
        <SectionHeader
          label="Upcoming Events"
          title="Join Our Next Big Tech Event"
          description="Participate in our upcoming workshops, seminars, and networking sessions designed to accelerate your career and build your network."
        />

        {/* Featured Event - Image Left, Content Right */}
        {featuredEvent && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            {/* Image Section */}
            <div className="rounded-2xl overflow-hidden shadow-premium-lg h-[400px] lg:h-[500px]">
              <div className="w-full h-full bg-gradient-to-br from-gold/20 to-navy/20 flex items-center justify-center">
                <div className="text-center text-white/50">
                  <div className="text-6xl mb-4">📍</div>
                  <p className="text-lg">{featuredEvent.title}</p>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 mb-6">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-sm font-semibold text-gold">Featured Event</span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
                  {featuredEvent.title}
                </h3>

                <p className="text-lg text-text-gray mb-8 leading-relaxed">
                  {featuredEvent.description || 'Join us for an immersive tech event featuring expert speakers, hands-on workshops, and networking opportunities.'}
                </p>

                {/* Event Details */}
                <div className="space-y-4 mb-8">
                  {featuredEvent.date && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center">
                        <span className="text-lg">📅</span>
                      </div>
                      <div>
                        <p className="text-sm text-text-gray">Date & Time</p>
                        <p className="font-semibold text-navy">{featuredEvent.date}</p>
                      </div>
                    </div>
                  )}
                  {featuredEvent.location && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center">
                        <span className="text-lg">📍</span>
                      </div>
                      <div>
                        <p className="text-sm text-text-gray">Location</p>
                        <p className="font-semibold text-navy">{featuredEvent.location}</p>
                      </div>
                    </div>
                  )}
                  {featuredEvent.category && (
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center">
                        <span className="text-lg">🎯</span>
                      </div>
                      <div>
                        <p className="text-sm text-text-gray">Event Type</p>
                        <p className="font-semibold text-navy capitalize">{featuredEvent.category}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 px-6 py-3 rounded-lg bg-navy hover:bg-navy/90 text-white font-semibold transition-colors flex items-center justify-center gap-2">
                    Register Now
                    <span>→</span>
                  </button>
                  <button className="flex-1 px-6 py-3 rounded-lg border-2 border-navy text-navy hover:bg-navy/5 font-semibold transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {otherEvents.length > 0 && (
          <div className="mt-16 pt-12 border-t border-border">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-navy mb-8"
            >
              More Events Coming Up
            </motion.h3>
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4 md:-ml-8">
                {otherEvents.map((event, index) => (
                  <CarouselItem key={event.id} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="h-full py-4"
                    >
                      <EventCard event={event} index={index} />
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Desktop Controls */}
              <div className="hidden md:block">
                <CarouselPrevious className="-left-12 lg:-left-16 bg-white hover:bg-navy hover:text-white border-border hover:border-navy transition-all duration-300 w-14 h-14 shadow-md" />
                <CarouselNext className="-right-12 lg:-right-16 bg-white hover:bg-navy hover:text-white border-border hover:border-navy transition-all duration-300 w-14 h-14 shadow-md" />
              </div>
              
              {/* Mobile Controls */}
              <div className="flex items-center justify-center gap-4 mt-8 md:hidden">
                <CarouselPrevious className="static translate-y-0 translate-x-0 bg-white hover:bg-navy hover:text-white border-border hover:border-navy transition-all w-12 h-12 shadow-sm" />
                <CarouselNext className="static translate-y-0 translate-x-0 bg-white hover:bg-navy hover:text-white border-border hover:border-navy transition-all w-12 h-12 shadow-sm" />
              </div>
            </Carousel>
          </div>
        )}
      </motion.div>
    </section>
  )
}
