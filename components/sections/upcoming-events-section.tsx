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

  return (
    <section className="py-16 lg:py-24 bg-soft-bg relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-navy/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5], rotate: [0, -90, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 -left-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 lg:px-12 relative z-10"
      >
        <SectionHeader
          label="Upcoming Events"
          title="Join Our Next Big Tech Event"
          description="Participate in our upcoming workshops, seminars, and networking sessions designed to accelerate your career."
        />

        <div className="mt-12 relative">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {events.map((event, index) => (
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
      </motion.div>
    </section>
  )
}
