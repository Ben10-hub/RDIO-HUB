'use client'

import { motion } from 'framer-motion'
import { Award, Building, Landmark } from 'lucide-react'

const awards = [
  { title: 'Bonjour India', subtitle: 'Indo-French Collaboration' },
  { title: 'ACMA Chennai', subtitle: 'Automotive Excellence' },
  { title: 'MSME Expo', subtitle: 'New Delhi Recognition' },
  { title: 'Innovation Awards', subtitle: 'Research & Prototyping' }
]

const govAcademics = [
  'MSME',
  'AICTE',
  'iHub',
  'NITI Aayog'
]

const industryPartners = [
  'TCS',
  'Cognizant',
  'Infosys',
  'Google',
  'Valuelabs',
  'Tiger Analytics',
  'IIC Technologies'
]

export function Collaborations() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Section 1: Recognition & Awards */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-gold" />
            </div>
            <h2 className="text-3xl font-extrabold text-navy tracking-tight">
              Recognition & Awards
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-[#fafafa] border border-gray-100 shadow-sm flex flex-col justify-center"
              >
                <h3 className="text-xl font-bold text-navy mb-2">{award.title}</h3>
                <p className="text-sm text-text-gray/80 font-medium">{award.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Our Collaborations */}
        <div>
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold text-navy tracking-tight mb-4">
              Our Collaborations
            </h2>
            <p className="text-lg text-text-gray font-medium">
              Bridging the gap between academia, government, and enterprise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Government & Academic */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Landmark className="w-5 h-5 text-gold" />
                <h3 className="text-xl font-bold text-navy">Government & Academic</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {govAcademics.map(partner => (
                  <div 
                    key={partner} 
                    className="px-6 py-3 rounded-xl bg-white border border-gray-200 shadow-sm text-navy font-semibold text-sm hover:border-gold/30 transition-colors"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Industry Collaborations */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Building className="w-5 h-5 text-navy" />
                <h3 className="text-xl font-bold text-navy">Industry Collaborations</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {industryPartners.map(partner => (
                  <div 
                    key={partner} 
                    className="px-6 py-3 rounded-xl bg-navy text-white shadow-sm font-semibold text-sm hover:bg-navy/90 transition-colors"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}
