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
    default: 'RDIO AI - Enterprise AI & SaaS Solutions',
    template: '%s | RDIO AI',
  },
  description: 'Enterprise AI solutions, SaaS products, and IoT systems. AI agents, cloud solutions, and intelligent automation for enterprise clients. Leading product engineering and AI innovation.',
  keywords: [
    'AI solutions',
    'Enterprise AI',
    'SaaS products',
    'IoT systems',
    'AI agents',
    'Product engineering',
    'Cloud solutions',
    'AI consulting',
    'Digital transformation',
    'Machine learning',
    'Enterprise software',
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
    title: 'RDIO AI - Enterprise AI & SaaS Solutions',
    description: 'Enterprise AI solutions, SaaS products, and intelligent systems for modern businesses. AI agents, cloud solutions, and digital innovation.',
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
    title: 'RDIO AI - Enterprise AI & SaaS Solutions',
    description: 'Enterprise AI solutions and intelligent systems for modern businesses.',
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
    <html lang="en" className={`${inter.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans bg-background">
        {children}
        <Chatbot />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
