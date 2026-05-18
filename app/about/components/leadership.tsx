'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'

const leaders = [
  {
    name: 'Mr. Karthik Nama',
    title: 'Founder & Director, RDIO',
    paragraphs: [
      'Mr. Karthik Nama is a visionary leader with extensive experience in research, innovation, and education. With a passion for practical learning, he founded RDIO to transform how students and professionals develop skills and apply knowledge in real-world scenarios.',
      'Under his guidance, RDIO has grown to become a premier innovation hub that collaborates with government bodies, academic institutions, and industry leaders to bridge the gap between theory and practice.'
    ],
    image: '/images/karthik.JPG',
    linkedin: 'https://www.linkedin.com/in/karthik-nama/'
  },
  {
    name: 'Mr. Srikanth Nama',
    title: 'Founder & Director, RDIO',
    paragraphs: [
      'Mr. Srikanth Nama is a purpose-driven leader with a background as a Chartered Accountant and a strong belief in the power of practical skills. He founded RDIO to address the limitations of traditional education and ensure learners are equipped for real-world success.',
      'His vision has shaped RDIO into a dynamic platform where theory meets application—empowering individuals across business, technology, and creative fields to unlock their potential through hands-on learning and meaningful skill development.'
    ],
    image: '/images/srikanth_nama.png'
  }
]

export function Leadership() {
  return (
    <section className="py-20 lg:py-24 bg-[#fafafa]">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        
        <div className="text-center mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-4"
          >
            Leadership
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-gray font-medium"
          >
            Guided by innovation and a commitment to excellence.
          </motion.p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {leaders.map((leader, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.div 
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center`}
              >
                {/* Image Side */}
                <div className={`relative h-[450px] w-full rounded-3xl overflow-hidden shadow-sm border border-gray-100 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="absolute inset-0 bg-navy/5 mix-blend-overlay z-10" />
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-center transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Text Side */}
                <div className={`flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="w-12 h-1 bg-gold rounded-full mb-8" />

                  <h3 className="text-3xl font-bold text-navy mb-2">{leader.name}</h3>
                  <p className="text-sm font-bold text-navy/50 tracking-widest uppercase mb-8">
                    {leader.title}
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    {leader.paragraphs.map((p, i) => (
                      <p key={i} className="text-text-gray/90 leading-relaxed font-medium">
                        {p}
                      </p>
                    ))}
                  </div>
                  
                  <div>
                    <a 
                      href={leader.linkedin ?? '#'} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 text-navy hover:bg-navy hover:text-white transition-colors text-sm font-semibold shadow-sm"
                    >
                      <Linkedin className="w-4 h-4" />
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
