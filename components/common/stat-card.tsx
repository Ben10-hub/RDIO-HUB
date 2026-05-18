'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Award, 
  Building2, 
  Briefcase,
  type LucideIcon 
} from 'lucide-react'
import type { Stat } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  Users,
  Award,
  Building2,
  Briefcase,
}

interface StatCardProps {
  stat: Stat
  index: number
}

export function StatCard({ stat, index }: StatCardProps) {
  const Icon = stat.icon ? iconMap[stat.icon] : Users

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-border hover:shadow-lg hover:border-gold/20 transition-all duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
            <Icon className="w-6 h-6 text-gold" />
          </div>
        </div>
        <div className="text-4xl lg:text-5xl font-bold text-navy mb-2">
          {stat.value}
        </div>
        <div className="text-text-gray font-medium">
          {stat.label}
        </div>
      </div>
    </motion.div>
  )
}
