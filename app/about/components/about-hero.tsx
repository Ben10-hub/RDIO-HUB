'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Code2 } from 'lucide-react'
import Link from 'next/link'

export function AboutHero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-navy/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.15] mb-6">
              Building Intelligent Solutions & Future-Ready Talent
            </h1>
            
            <p className="text-lg text-text-gray/90 leading-relaxed mb-8 max-w-lg font-medium">
              RDIO AI builds AI solutions, SaaS products, research-driven innovation, and workforce development programs.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/solutions">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-navy text-white rounded-lg font-semibold shadow-sm hover:bg-navy/90 transition-all flex items-center gap-2 text-sm"
                >
                  Explore Solutions <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-white text-navy border border-gray-200 rounded-lg font-semibold shadow-sm hover:border-gray-300 transition-all text-sm"
                >
                  Partner With Us
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Visual Composition - Compact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[450px] aspect-[4/3] rounded-3xl bg-[#fafafa] border border-gray-100 shadow-sm overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/5 to-transparent opacity-50" />
              
              {/* Clean Animated Tech Visual */}
              <div className="relative z-10 flex flex-col items-center gap-6">
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center"
                >
                  <Sparkles className="w-8 h-8 text-gold" />
                </motion.div>
                
                <div className="flex gap-4">
                  <motion.div 
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="w-16 h-16 bg-navy rounded-2xl shadow-lg border border-navy/10 flex items-center justify-center"
                  >
                    <Code2 className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div 
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="w-16 h-16 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center"
                  >
                    <div className="w-6 h-6 rounded bg-gold/20" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
