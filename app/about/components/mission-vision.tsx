'use client'

import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

export function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr">
          
          {/* Mission - Dark Navy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-navy rounded-[2rem] p-10 lg:p-12 relative overflow-hidden flex flex-col justify-center h-full"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 backdrop-blur-sm">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                Our Mission
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light">
                To democratize access to enterprise-grade AI and digital product engineering. We build powerful software solutions while equipping the next generation of technologists with real-world skills.
              </p>
            </div>
          </motion.div>

          {/* Vision - Premium Light */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#fafafa] border border-gray-100 rounded-[2rem] p-10 lg:p-12 relative overflow-hidden flex flex-col justify-center h-full shadow-sm"
          >
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-8">
                <Eye className="w-7 h-7 text-navy" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4 tracking-tight">
                Our Vision
              </h2>
              <p className="text-lg text-text-gray/90 leading-relaxed font-light">
                To be the premier ecosystem where academic learning converges with industry innovation. We envision a world where every enterprise is AI-empowered and every talent is ready to architect the future.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
