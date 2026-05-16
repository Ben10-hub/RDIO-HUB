'use client'

import { motion } from 'framer-motion'
import { 
  Brain,
  BarChart3,
  Database,
  Network,
  Sparkles,
  Bot,
  Atom,
  Code,
  GitBranch,
  Cpu,
  PieChart,
  FileText,
  Cloud,
  Shield,
  Table,
  FileSpreadsheet,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import type { Domain } from '@/types'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const iconMap: Record<string, LucideIcon> = {
  Brain,
  BarChart3,
  Database,
  Network,
  Sparkles,
  Bot,
  Atom,
  Code,
  GitBranch,
  Cpu,
  PieChart,
  FileText,
  Cloud,
  Shield,
  Table,
  Sheet: FileSpreadsheet,
}

interface DomainCardProps {
  domain: Domain
  index: number
  isExpanded?: boolean
  onClick?: () => void
}

export function DomainCard({ domain, index, isExpanded = false, onClick }: DomainCardProps) {
  const Icon = iconMap[domain.icon] || Brain

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className={cn(
        "group cursor-pointer",
        isExpanded ? "col-span-2 md:col-span-3 lg:col-span-4" : "col-span-1"
      )}
    >
      <motion.div 
        layout
        className={cn(
          "h-full bg-white rounded-2xl border transition-all duration-300 overflow-hidden relative",
          isExpanded 
            ? "border-navy shadow-2xl p-8 md:p-12 bg-navy text-white" 
            : "border-border hover:border-navy hover:shadow-xl p-6 bg-white"
        )}
      >
        {isExpanded && (
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/10 blur-[80px] rounded-full pointer-events-none" />
        )}
        
        <div className={cn(
          "flex flex-col h-full relative z-10",
          isExpanded ? "md:flex-row md:items-center gap-8 md:gap-16" : ""
        )}>
          {/* Collapsed State OR Left Side of Expanded */}
          <div className={cn("flex-1", isExpanded ? "" : "")}>
            <motion.div layout className={cn(
              "rounded-xl flex items-center justify-center mb-4 transition-colors",
              isExpanded ? "w-20 h-20 bg-white/10" : "w-12 h-12 bg-navy/5 group-hover:bg-navy"
            )}>
              <Icon className={cn(
                "transition-colors",
                isExpanded ? "w-10 h-10 text-gold" : "w-6 h-6 text-navy group-hover:text-white"
              )} />
            </motion.div>
            
            <motion.h3 layout className={cn(
              "font-bold mb-2 transition-colors",
              isExpanded ? "text-3xl md:text-5xl text-white mb-6 leading-tight" : "text-lg text-navy"
            )}>
              {domain.title}
            </motion.h3>
            
            <motion.p layout className={cn(
              "leading-relaxed",
              isExpanded ? "text-lg md:text-xl text-white/80 max-w-2xl" : "text-sm text-text-gray"
            )}>
              {domain.description}
            </motion.p>

            {!isExpanded && (
              <div className="mt-4 flex items-center text-navy font-bold text-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                Explore <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            )}
          </div>

          {/* Expanded State - Right Side Details */}
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex-1 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-16 flex flex-col justify-center"
            >
              <h4 className="text-gold font-extrabold uppercase tracking-widest text-sm mb-6">Why this domain?</h4>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-white/90 font-medium">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" /> High industry demand and lucrative career paths
                </li>
                <li className="flex items-center gap-3 text-white/90 font-medium">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" /> Hands-on real-world corporate projects
                </li>
                <li className="flex items-center gap-3 text-white/90 font-medium">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full" /> Mentorship from elite tech professionals
                </li>
              </ul>
              
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-navy font-bold w-fit gap-2">
                Explore Programs <ArrowRight size={18} />
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
