import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components/layout'
import { GalleryHero } from './components/gallery-hero'
import { GalleryGrid } from './components/gallery-grid'
import { getGalleryImages } from '@/services/google-sheets'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore photos from our workshops, FDPs, internships, campus training, and tech events at RDIO AI.',
}

export default async function GalleryPage() {
  const images = await getGalleryImages()

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <GalleryHero />
        <GalleryGrid images={images} />
      </main>
      <Footer />
    </>
  )
}
