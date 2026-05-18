import type { TechEvent } from '@/types'

// Fallback data when Google Sheets is not available
export const FALLBACK_EVENTS: TechEvent[] = [
  {
    id: '1',
    title: 'AI Summit 2026',
    date: '2026-06-15',
    description: 'Annual flagship event bringing together industry experts, researchers, and students to discuss the latest in AI.',
    registrationLink: 'https://forms.google.com/rdio-ai-summit',
  },
  {
    id: '2',
    title: 'Hackathon: Code for Future',
    date: '2026-07-20',
    description: '24-hour hackathon challenging participants to build innovative solutions using AI and ML.',
    registrationLink: 'https://forms.google.com/rdio-hackathon',
  },
  {
    id: '3',
    title: 'Research Paper Writing Workshop',
    date: '2026-05-25',
    description: 'Learn the art of academic writing and get your research published in top journals.',
    registrationLink: 'https://forms.google.com/rdio-research-workshop',
  },
  {
    id: '4',
    title: 'Industry Connect: Tech Talks',
    date: '2026-08-10',
    description: 'Monthly series featuring industry leaders sharing insights on emerging technologies.',
    registrationLink: 'https://forms.google.com/rdio-tech-talks',
  },
]
