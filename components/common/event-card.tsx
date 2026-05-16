'use client'

import { motion } from 'framer-motion'
import { Calendar, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { TechEvent } from '@/types'

interface EventCardProps {
  event: TechEvent
  index: number
}

export function EventCard({ event, index }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const isPast = new Date(event.date) < new Date()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="h-full bg-white rounded-2xl p-6 border border-border hover:border-navy hover:shadow-2xl hover:shadow-navy/20 hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer">
        {/* Date Badge */}
        <div className="flex items-center gap-2 text-sm text-text-gray mb-4">
          <Calendar size={16} className="text-gold" />
          <span>{formattedDate}</span>
          {isPast && (
            <span className="ml-auto text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded">
              Past Event
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-navy text-xl mb-3 group-hover:text-gold transition-colors">
          {event.title}
        </h3>

        {/* Description */}
        <p className="text-text-gray text-sm leading-relaxed mb-6 flex-grow">
          {event.description}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {event.registrationLink && !isPast && (
            <Button
              asChild
              size="sm"
              className="bg-gold hover:bg-gold/90 text-navy gap-2"
            >
              <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                Register <ExternalLink size={14} />
              </a>
            </Button>
          )}
          {event.galleryLink && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-navy text-navy hover:bg-navy/5"
            >
              <a href={event.galleryLink} target="_blank" rel="noopener noreferrer">
                View Gallery
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
