// Domain/Expertise types
export interface Domain {
  id: string
  title: string
  icon: string
  description: string
  active: boolean
  order: number
}

// Program types
export type ProgramStatus = 'open' | 'closing-soon' | 'closed'
export type ProgramCategory = 'internships' | 'workshops' | 'fdps' | 'upskilling'

export interface Program {
  id: string
  title: string
  category: ProgramCategory
  duration: string
  mode: string
  pricing: string
  description: string
  formLink: string
  status: ProgramStatus
  badge?: string
  active: boolean
  displayOrder: number
}

// Tech Event types
export interface TechEvent {
  id: string
  title: string
  date: string
  poster?: string
  description: string
  registrationLink?: string
  galleryLink?: string
}

// Gallery types
export type GalleryCategory = 'workshops' | 'fdps' | 'campus-training' | 'internships' | 'research' | 'tech-events'

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: GalleryCategory
  title?: string
}

// Navigation types
export interface NavLink {
  label: string
  href: string
}

// Stats types
export interface Stat {
  value: string
  label: string
  icon?: string
}

// Collaboration types
export interface CollaborationType {
  title: string
  description: string
  items: string[]
  icon: string
}

// Founder types
export interface Founder {
  name: string
  title: string
  image?: string
  quote: string
}

// Contact types
export interface ContactInfo {
  email: string
  phone: string
  website: string
  address?: string
  social: {
    instagram?: string
    linkedin?: string
    whatsapp?: string
  }
}
