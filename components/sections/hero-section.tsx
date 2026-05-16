'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const trustIndicators = [
  '15,000+ Students Trained',
  '50+ Successful FDPs',
  'Industry Partnerships',
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-soft-bg">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              Learn Beyond Classrooms.{' '}
              <span className="text-gold">Build Real-World Skills</span> with RDIO AI.
            </h1>

            <p className="text-text-gray text-lg lg:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Upskilling, internships, FDPs, research mentorship, and industry-oriented training for students, colleges, and professionals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
              <Button
                asChild
                size="lg"
                className="bg-navy hover:bg-navy/90 text-white font-semibold px-8 h-12 text-base"
              >
                <Link href="#programs">
                  Explore Programs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-navy font-semibold px-8 h-12 text-base"
              >
                <Link href="/contact">Apply Now</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
              {trustIndicators.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-text-gray"
                >
                  <CheckCircle className="w-4 h-4 text-gold" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Premium Photo Collage */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block h-[600px] w-full"
          >
            <div className="relative w-full h-full">
              {/* Main Large Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, zIndex: 50 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-10 right-0 w-[80%] h-[65%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 cursor-pointer"
              >
                <Image
                  src="/images/workshop.png"
                  alt="AI Workshop Session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>

              {/* Top Left Image */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, zIndex: 50 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-0 left-0 w-[45%] h-[40%] rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10 cursor-pointer"
              >
                <Image
                  src="/images/classroom.png"
                  alt="Students Learning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority
                />
              </motion.div>

              {/* Bottom Left Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, zIndex: 50 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute bottom-10 left-10 w-[55%] h-[40%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-30 cursor-pointer"
              >
                <Image
                  src="/images/training.png"
                  alt="Training Event"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 30vw"
                  priority
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[35%] -right-4 bg-gold text-navy px-6 py-3 rounded-xl font-bold shadow-lg z-40"
              >
                15,000+ Students
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-4 right-10 bg-navy text-white px-6 py-3 rounded-xl font-bold shadow-lg z-40"
              >
                Industry Ready
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


