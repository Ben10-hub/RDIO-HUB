import type { Domain, Program, TechEvent, GalleryImage } from '@/types'
import { FALLBACK_DOMAINS } from '@/data/domains'
import { FALLBACK_PROGRAMS } from '@/data/programs'
import { FALLBACK_EVENTS } from '@/data/events'
import { FALLBACK_GALLERY } from '@/data/gallery'

// Google Sheets public CSV export URLs
// To use: Publish your Google Sheet to web as CSV
// Format: https://docs.google.com/spreadsheets/d/{SHEET_ID}/gviz/tq?tqx=out:csv&sheet={SHEET_NAME}

const SHEETS_CONFIG = {
  domains: process.env.NEXT_PUBLIC_DOMAINS_SHEET_URL,
  programs: process.env.NEXT_PUBLIC_PROGRAMS_SHEET_URL,
  events: process.env.NEXT_PUBLIC_EVENTS_SHEET_URL,
  gallery: process.env.NEXT_PUBLIC_GALLERY_SHEET_URL,
}

// Parse CSV string to array of objects
function parseCSV<T>(csv: string): T[] {
  const lines = csv.trim().split('\n')
  if (lines.length < 2) return []

  const headers = parseCSVLine(lines[0])
  const data: T[] = []

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVLine(lines[i])
    const obj = {} as Record<string, string | boolean | number>

    headers.forEach((header, index) => {
      let value: string | boolean | number = values[index] || ''

      // Convert boolean strings
      if (value.toLowerCase() === 'true') value = true
      else if (value.toLowerCase() === 'false') value = false
      // Convert numbers
      else if (!isNaN(Number(value)) && value !== '') value = Number(value)

      obj[header] = value
    })

    data.push(obj as T)
  }

  return data
}

// Parse a single CSV line handling quoted values
function parseCSVLine(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }

  result.push(current.trim())
  return result
}

// Fetch data from Google Sheets with fallback
async function fetchFromSheet<T>(
  sheetUrl: string | undefined,
  fallback: T[],
  transform?: (data: Record<string, unknown>[]) => T[]
): Promise<T[]> {
  if (!sheetUrl) {
    console.log('Sheet URL not configured, using fallback data')
    return fallback
  }

  try {
    const response = await fetch(sheetUrl, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`)
    }

    const csv = await response.text()
    const data = parseCSV<Record<string, unknown>>(csv)

    return transform ? transform(data) : (data as T[])
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error)
    return fallback
  }
}

// Transform functions to map sheet data to our types
function transformDomains(data: Record<string, unknown>[]): Domain[] {
  return data.map((row, index) => ({
    id: String(row.id || index + 1),
    title: String(row.title || ''),
    icon: String(row.icon || 'Brain'),
    description: String(row.description || ''),
    active: row.active === true || row.active === 'true' || row.active === 'TRUE',
    order: Number(row.order) || index + 1,
  }))
}

function transformPrograms(data: Record<string, unknown>[]): Program[] {
  return data.map((row, index) => ({
    id: String(row.id || index + 1),
    title: String(row.title || ''),
    category: String(row.category || 'internships') as Program['category'],
    duration: String(row.duration || ''),
    mode: String(row.mode || ''),
    pricing: String(row.pricing || ''),
    description: String(row.description || ''),
    formLink: String(row.form_link || row.formLink || ''),
    status: String(row.status || 'open') as Program['status'],
    badge: row.badge ? String(row.badge) : undefined,
    active: row.active === true || row.active === 'true' || row.active === 'TRUE',
    displayOrder: Number(row.display_order || row.displayOrder) || index + 1,
  }))
}

function transformEvents(data: Record<string, unknown>[]): TechEvent[] {
  return data.map((row, index) => ({
    id: String(row.id || index + 1),
    title: String(row.title || ''),
    date: String(row.date || ''),
    poster: row.poster ? String(row.poster) : undefined,
    description: String(row.description || ''),
    registrationLink: row.registration_link || row.registrationLink
      ? String(row.registration_link || row.registrationLink)
      : undefined,
    galleryLink: row.gallery_link || row.galleryLink
      ? String(row.gallery_link || row.galleryLink)
      : undefined,
  }))
}

function transformGallery(data: Record<string, unknown>[]): GalleryImage[] {
  return data.map((row, index) => ({
    id: String(row.id || index + 1),
    src: String(row.src || row.url || ''),
    alt: String(row.alt || row.title || ''),
    category: String(row.category || 'workshops') as GalleryImage['category'],
    title: row.title ? String(row.title) : undefined,
  }))
}

// Public API functions
export async function getDomains(): Promise<Domain[]> {
  return fetchFromSheet(SHEETS_CONFIG.domains, FALLBACK_DOMAINS, transformDomains)
}

export async function getPrograms(): Promise<Program[]> {
  return fetchFromSheet(SHEETS_CONFIG.programs, FALLBACK_PROGRAMS, transformPrograms)
}

export async function getEvents(): Promise<TechEvent[]> {
  return fetchFromSheet(SHEETS_CONFIG.events, FALLBACK_EVENTS, transformEvents)
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  return fetchFromSheet(SHEETS_CONFIG.gallery, FALLBACK_GALLERY, transformGallery)
}
