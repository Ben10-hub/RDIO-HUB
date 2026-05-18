'use client'

import { motion } from 'framer-motion'
import { Clock, MapPin, ExternalLink, Image as ImageIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import type { Program } from '@/types'
import { cn } from '@/lib/utils'

interface ProgramCardProps {
  program: Program
  index: number
  featured?: boolean
}

const statusStyles = {
  open: 'bg-status-open/10 text-status-open border-status-open/20',
  'closing-soon': 'bg-status-closing/10 text-status-closing border-status-closing/20',
  closed: 'bg-status-closed/10 text-status-closed border-status-closed/20',
}

const statusLabels = {
  open: 'Open',
  'closing-soon': 'Closing Soon',
  closed: 'Closed',
}

export function ProgramCard({ program, index, featured = false, variant = 'edtech' }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className={cn('group h-full', featured ? 'col-span-1 md:col-span-2 lg:col-span-3' : '')}
    >
      <Dialog>
        <DialogTrigger asChild>
          <div className={cn(
            "h-full rounded-2xl p-6 md:p-8 border hover:shadow-2xl hover:shadow-navy/20 transition-all duration-300 flex flex-col cursor-pointer bg-white text-left",
            featured 
              ? "border-gold hover:border-navy bg-gradient-to-br from-white to-gold/5" 
              : "border-border hover:border-navy"
          )}>
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  {program.badge && variant !== 'enterprise' && (
                    <Badge variant="secondary" className="bg-gold/10 text-gold border-gold/20">
                      {program.badge}
                    </Badge>
                  )}
                  {featured && (
                    <Badge variant="default" className="bg-navy hover:bg-navy text-white">
                      Most Popular ✨
                    </Badge>
                  )}
                </div>
                <h3 className={cn(
                  "font-bold text-navy group-hover:text-gold transition-colors",
                  featured ? "text-2xl md:text-3xl mb-2" : "text-xl"
                )}>
                  {program.title}
                </h3>
              </div>
              {variant !== 'enterprise' && (
                <Badge 
                  variant="outline" 
                  className={cn('text-sm font-medium border shrink-0', statusStyles[program.status])}
                >
                  {statusLabels[program.status]}
                </Badge>
              )}
            </div>

            {/* Details */}
            <div className={cn("flex flex-wrap gap-6 mb-4 text-sm text-text-gray", featured ? "text-base mb-6" : "")}>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-gold" />
                <span className="font-medium">{program.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gold" />
                <span className="font-medium">{program.mode}</span>
              </div>
            </div>

            {/* Description */}
            <p className={cn("text-text-gray leading-relaxed mb-6 flex-grow", featured ? "text-lg max-w-3xl" : "text-base")}>
              {program.description}
            </p>

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between pt-6 border-t border-border mt-auto gap-4">
              <span className={cn("font-bold text-navy", featured ? "text-2xl" : "text-xl")}>
                {program.pricing}
              </span>
              <div className="flex items-center gap-3">
                <Button variant="outline" size={featured ? "lg" : "default"} className="border-navy text-navy hover:bg-navy hover:text-white transition-colors" asChild>
                  <span>View Details</span>
                </Button>
                <Button
                  asChild
                  size={featured ? "lg" : "default"}
                  disabled={program.status === 'closed'}
                  className={cn(
                    'gap-2',
                    program.status === 'closed'
                      ? 'bg-muted text-muted-foreground cursor-not-allowed'
                      : 'bg-gold hover:bg-gold/90 text-navy font-semibold'
                  )}
                >
                  <a
                    href={program.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevent dialog from opening when clicking Apply
                    className={program.status === 'closed' && variant !== 'enterprise' ? 'pointer-events-none' : ''}
                  >
                    {program.status === 'closed' && variant !== 'enterprise' ? 'Closed' : (variant === 'enterprise' ? 'Get Quote' : 'Apply Now')}
                    {(program.status !== 'closed' || variant === 'enterprise') && <ExternalLink size={16} />}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </DialogTrigger>

        {/* Modal Content - Neat Edges & Premium Layout */}
        <DialogContent className="max-w-[95vw] lg:max-w-6xl max-h-[90vh] overflow-y-auto p-0 rounded-none border-0 bg-white shadow-2xl">
          
          {/* Dark Premium Header */}
          <div className="bg-navy p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-3 mb-6">
                {variant !== 'enterprise' && (
                  <Badge variant="outline" className={cn('rounded-none border-white/20 text-white font-medium uppercase tracking-widest', statusStyles[program.status])}>
                    {statusLabels[program.status]}
                  </Badge>
                )}
                {program.badge && variant !== 'enterprise' && (
                  <Badge variant="secondary" className="rounded-none bg-gold text-navy font-bold uppercase tracking-widest">
                    {program.badge}
                  </Badge>
                )}
                {featured && variant === 'enterprise' && (
                  <Badge variant="secondary" className="rounded-none bg-gold text-navy font-bold uppercase tracking-widest">
                    MOST POPULAR ✨
                  </Badge>
                )}
              </div>
              <DialogTitle className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                {program.title}
              </DialogTitle>
              <DialogDescription className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
                {program.description}
              </DialogDescription>
            </div>
            
            {/* Action Button moved to header for immediate visibility */}
            <div className="relative z-10 shrink-0">
               <Button
                  asChild
                  size="lg"
                  disabled={program.status === 'closed'}
                  className={cn(
                    'gap-3 w-full md:w-auto px-10 h-16 rounded-none text-lg tracking-wide',
                    program.status === 'closed'
                      ? 'bg-muted text-muted-foreground cursor-not-allowed'
                      : 'bg-gold hover:bg-gold/90 text-navy font-extrabold shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[2px] transition-all'
                  )}
                >
                  <a
                    href={program.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={program.status === 'closed' && variant !== 'enterprise' ? 'pointer-events-none' : ''}
                  >
                    {program.status === 'closed' && variant !== 'enterprise' ? 'REGISTRATION CLOSED' : (variant === 'enterprise' ? 'GET QUOTE' : 'APPLY NOW')}
                    {(program.status !== 'closed' || variant === 'enterprise') && <ExternalLink size={20} />}
                  </a>
                </Button>
            </div>
          </div>

          <div className="p-8 md:p-12 flex flex-col gap-12 bg-white">
            {/* Quick Facts - Full Width Ribbon */}
            <div className="bg-soft-bg border border-border p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4 shadow-sm">
              <div className="flex flex-col gap-2">
                <span className="text-sm text-text-gray uppercase tracking-widest font-bold">Duration</span>
                <span className="flex items-center gap-3 font-extrabold text-navy text-xl">
                  <Clock size={20} className="text-gold" /> {program.duration}
                </span>
              </div>
              
              <div className="hidden md:block w-px h-16 bg-border"></div>

              <div className="flex flex-col gap-2">
                <span className="text-sm text-text-gray uppercase tracking-widest font-bold">Mode</span>
                <span className="flex items-center gap-3 font-extrabold text-navy text-xl">
                  <MapPin size={20} className="text-gold" /> {program.mode}
                </span>
              </div>

              <div className="hidden md:block w-px h-16 bg-border"></div>

              <div className="flex flex-col gap-2">
                <span className="text-sm text-text-gray uppercase tracking-widest font-bold">Category</span>
                <span className="font-extrabold text-navy text-xl capitalize">{program.category}</span>
              </div>

              <div className="hidden md:block w-px h-16 bg-border"></div>

              <div className="flex flex-col gap-2">
                <span className="text-sm text-text-gray uppercase tracking-widest font-bold">Pricing</span>
                <span className="font-extrabold text-navy text-3xl">{program.pricing}</span>
              </div>
            </div>

            {/* Huge Course Structure Section */}
            <div>
              <div className="flex items-center justify-between mb-8 border-b-2 border-navy pb-4">
                <h4 className="text-3xl font-extrabold text-navy uppercase tracking-widest">
                  {variant === 'enterprise' ? 'Implementation & Architecture' : 'Course Structure & Curriculum'}
                </h4>
              </div>
              
              {/* Massive Graphic Frame */}
              <div className="w-full bg-soft-bg border-2 border-border p-3 md:p-4">
                <div className="w-full bg-white border border-border flex flex-col items-center justify-center p-16 md:p-32 text-center aspect-square md:aspect-[21/9] relative overflow-hidden group/img cursor-pointer">
                  {/* Subtle Grid Pattern */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                  
                  <div className="relative z-10 flex flex-col items-center transform transition-transform duration-500 group-hover/img:scale-105">
                    <div className="w-24 h-24 bg-navy text-gold rounded-none flex items-center justify-center shadow-2xl mb-8">
                      <ImageIcon size={48} />
                    </div>
                    <h5 className="font-extrabold text-navy text-4xl mb-4 tracking-wide">
                      {variant === 'enterprise' ? 'Detailed Solution Architecture' : 'Detailed Curriculum Roadmap'}
                    </h5>
                    <p className="text-text-gray max-w-2xl text-xl leading-relaxed">
                      {variant === 'enterprise' 
                        ? 'This expansive section is reserved for your comprehensive technical architecture diagram, implementation milestones, and system integration workflow.'
                        : 'This expansive section is reserved for your comprehensive week-by-week curriculum, project milestones, and evaluation metrics graphic.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}
