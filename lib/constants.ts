import type { NavLink, Stat, ContactInfo, Founder, CollaborationType } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Careers', href: '/careers' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const STATS: Stat[] = [
  { value: '15,000+', label: 'Students Trained', icon: 'Users' },
  { value: '50+', label: 'Successful FDPs', icon: 'Award' },
  { value: '100+', label: 'Institution Collaborations', icon: 'Building2' },
  { value: '200+', label: 'Industry Projects', icon: 'Briefcase' },
]

export const FOUNDER: Founder = {
  name: 'Mr. Karthik Nama',
  title: 'Founder & Director – RDIO AI',
  quote: 'Our mission is to bridge the gap between academic learning and industry requirements. At RDIO AI, we believe in empowering students with real-world skills that make them industry-ready from day one.',
}

export const CONTACT_INFO: ContactInfo = {
  email: 'careers@rdiohub.com',
  phone: '+91-7386471784',
  website: 'www.rdiohub.com',
  social: {
    instagram: 'https://instagram.com/rdio_hub',
    linkedin: 'https://linkedin.com/company/rdiohub',
    whatsapp: 'https://wa.me/917386471784',
  },
}

export const ACADEMIC_COLLABORATION: CollaborationType = {
  title: 'Academic Collaboration',
  description: 'Partner with us for comprehensive academic programs',
  items: [
    'College Partnerships',
    'University Tie-ups',
    'Faculty Development Programs (FDP)',
    'Student Workshops & Training',
    'Research Collaboration',
    'Curriculum Development',
  ],
  icon: 'GraduationCap',
}

export const INDUSTRY_COLLABORATION: CollaborationType = {
  title: 'Industry Collaboration',
  description: 'Transform your workforce with our industry programs',
  items: [
    'Corporate Upskilling',
    'Industry Training Programs',
    'Hiring Partnerships',
    'Project-Based Learning',
    'Consultancy Services',
    'Custom Training Solutions',
  ],
  icon: 'Building',
}

export const PROGRAM_CATEGORIES = [
  { id: 'internships', label: 'Internships' },
  { id: 'workshops', label: 'Workshops' },
  { id: 'fdps', label: 'FDPs' },
  { id: 'upskilling', label: 'Upskilling' },
] as const

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'workshops', label: 'Workshops' },
  { id: 'fdps', label: 'FDPs' },
  { id: 'campus-training', label: 'Campus Training' },
  { id: 'internships', label: 'Internships' },
  { id: 'research', label: 'Research' },
  { id: 'tech-events', label: 'Tech Events' },
] as const
