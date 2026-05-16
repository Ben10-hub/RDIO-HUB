import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'RDIO AI - Write • Learn • Innovate • Excel',
    template: '%s | RDIO AI',
  },
  description: 'Upskilling, internships, FDPs, research mentorship, and industry-oriented training for students, colleges, and professionals. Learn beyond classrooms with RDIO AI.',
  keywords: [
    'AI training',
    'Machine Learning',
    'Data Science',
    'Internships',
    'FDP',
    'Faculty Development Program',
    'Corporate Training',
    'Upskilling',
    'Research Mentorship',
    'RDIO AI',
    'Industry Training',
  ],
  authors: [{ name: 'RDIO AI' }],
  creator: 'RDIO AI',
  publisher: 'RDIO AI',
  metadataBase: new URL('https://rdiohub.com'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://rdiohub.com',
    siteName: 'RDIO AI',
    title: 'RDIO AI - Write • Learn • Innovate • Excel',
    description: 'Upskilling, internships, FDPs, research mentorship, and industry-oriented training for students, colleges, and professionals.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RDIO AI - Premium Educational Institution',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RDIO AI - Write • Learn • Innovate • Excel',
    description: 'Upskilling, internships, FDPs, research mentorship, and industry-oriented training.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export const viewport = {
  themeColor: '#021B4E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

import { Chatbot } from '@/components/common'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans bg-soft-bg">
        {children}
        <Chatbot />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
