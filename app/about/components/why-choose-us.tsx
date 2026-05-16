'use client'

import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Users, 
  Award, 
  Lightbulb, 
  TrendingUp, 
  HeartHandshake 
} from 'lucide-react'
import { SectionHeader } from '@/components/common'

const reasons = [
  {
    icon: GraduationCap,
    title: 'Industry-Oriented Curriculum',
    description: 'Our programs are designed in collaboration with industry experts to ensure relevance and practical applicability.',
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Learn from experienced professionals who bring real-world insights and industry best practices to the classroom.',
  },
  {
    icon: Award,
    title: 'Hands-On Projects',
    description: 'Work on real industry projects that build your portfolio and demonstrate your skills to potential employers.',
  },
  {
    icon: Lightbulb,
    title: 'Cutting-Edge Technologies',
    description: 'Stay ahead with training in the latest technologies including AI, ML, Data Science, and emerging tech.',
  },
  {
    icon: TrendingUp,
    title: 'Career Support',
    description: 'Get placement assistance, resume building, and interview preparation to launch your tech career.',
  },
  {
    icon: HeartHandshake,
    title: 'Flexible Learning',
    description: 'Choose from online, offline, or hybrid modes that fit your schedule and learning preferences.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-soft-bg">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader
          label="Why RDIO AI"
          title="Why Choose Us?"
          description="We combine academic excellence with industry expertise to deliver transformative learning experiences."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-border hover:border-gold/30 hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
                <reason.icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-semibold text-navy text-lg mb-2">
                {reason.title}
              </h3>
              <p className="text-text-gray text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
