import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components/layout'
import { ContactHero } from './components/contact-hero'
import { ContactInfo } from './components/contact-info'
import { ContactForm } from './components/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with RDIO AI for inquiries about programs, collaborations, or general questions.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <ContactHero />
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
