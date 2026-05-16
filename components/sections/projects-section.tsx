'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { SectionHeader } from '@/components/common'
import { ArrowRight, Microscope, Building, GraduationCap } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: 'Academic Upskilling',
    description: 'Empowering students with industry-relevant skills bridging the gap between college curricula and corporate demands.',
    icon: GraduationCap,
    features: ['Curriculum Integration', 'Hands-on Workshops', 'Hackathons'],
    color: 'bg-navy',
    textColor: '!text-white', // Strictly forced white text
    iconColor: 'text-gold',
    borderColor: 'bg-gold',
    className: 'lg:col-span-1'
  },
  {
    title: 'Corporate Upskilling',
    description: 'Transforming workforces with tailored training programs in AI, Data Science, and emerging technologies.',
    icon: Building,
    features: ['Customized Training', 'Executive Masterclasses', 'Tech Consulting'],
    color: 'bg-gold',
    textColor: 'text-navy', // Explicit text color
    iconColor: 'text-navy',
    borderColor: 'bg-navy',
    className: 'lg:col-span-1'
  },
  {
    title: 'Research Projects',
    description: 'Fostering innovation through guided research programs, resulting in publications and patents.',
    icon: Microscope,
    features: ['Mentored Research', 'Paper Publications', 'Prototype Development'],
    color: 'bg-white shadow-xl',
    textColor: 'text-navy', // Explicit text color
    iconColor: 'text-navy',
    borderColor: 'bg-navy',
    className: 'lg:col-span-2'
  },
]

function TiltCard({ children, className, variant }: { children: React.ReactNode, className?: string, variant?: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={variant}
      style={{ perspective: 1200 }}
      className={`group relative w-full h-full ${className}`}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full transition-shadow duration-300 hover:shadow-2xl rounded-3xl"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section className="py-16 lg:py-24 bg-soft-bg relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 lg:px-8 relative z-10"
      >
        <SectionHeader
          label="Our Focus Areas"
          title="Projects & Research"
          description="Discover how we make an impact across academia, corporate sectors, and advanced research."
        />

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-12"
        >
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <TiltCard
                key={project.title}
                className={project.className}
                variant={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } 
                  }
                }}
              >
                {/* The Card Content */}
                <div 
                  style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
                  className={`relative z-10 rounded-3xl p-8 md:p-10 flex flex-col h-full ${project.color} ${project.textColor} transition-transform duration-500 ease-out`}
                >
                  <div className={`mb-8 ${project.iconColor}`}>
                    <Icon className="w-12 h-12" />
                  </div>
                  <h3 className={`text-3xl font-extrabold mb-4 tracking-tight ${project.textColor}`}>{project.title}</h3>
                  <p className="mb-8 flex-grow text-lg leading-relaxed opacity-90">
                    {project.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-4 font-semibold text-sm tracking-wide opacity-90">
                        <div className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/projects"
                    className="inline-flex items-center font-bold uppercase tracking-widest text-sm hover:opacity-70 transition-opacity mt-auto"
                  >
                    Learn More <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>

                {/* 
                  Border-Draw Effect 
                  We place this outside the translateZ container so it wraps the 3D card boundaries tightly
                */}
                <div 
                  style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
                  className="absolute inset-[-4px] rounded-[26px] md:rounded-[36px] pointer-events-none overflow-hidden z-0"
                >
                  <span className={`absolute top-0 left-0 w-0 h-[3px] transition-all duration-300 ease-out group-hover:w-full ${project.borderColor}`} />
                  <span className={`absolute top-0 right-0 w-[3px] h-0 transition-all duration-300 ease-out delay-75 group-hover:h-full ${project.borderColor}`} />
                  <span className={`absolute bottom-0 right-0 w-0 h-[3px] transition-all duration-300 ease-out delay-150 group-hover:w-full ${project.borderColor}`} />
                  <span className={`absolute bottom-0 left-0 w-[3px] h-0 transition-all duration-300 ease-out delay-200 group-hover:h-full ${project.borderColor}`} />
                </div>
              </TiltCard>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
