import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, Globe, Instagram, Linkedin, MessageCircle, MapPin } from 'lucide-react'
import { NAV_LINKS, CONTACT_INFO } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="RDIO AI"
                width={56}
                height={56}
                className="w-14 h-14"
              />
            </Link>
            <p className="text-gold font-medium text-sm tracking-wider mb-4">
              INNOVATE • BUILD • TRANSFORM
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Enterprise AI solutions, SaaS platforms, and intelligent systems transforming businesses and driving innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
                >
                  <Mail size={16} className="text-gold flex-shrink-0" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
                >
                  <Phone size={16} className="text-gold flex-shrink-0" />
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`https://${CONTACT_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors text-sm"
                >
                  <Globe size={16} className="text-gold flex-shrink-0" />
                  {CONTACT_INFO.website}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70 text-sm">
                <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <span>Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold">Connect With Us</h4>
            <div className="flex items-center gap-4 mb-6">
              {CONTACT_INFO.social.instagram && (
                <a
                  href={CONTACT_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              )}
              {CONTACT_INFO.social.linkedin && (
                <a
                  href={CONTACT_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {CONTACT_INFO.social.whatsapp && (
                <a
                  href={CONTACT_INFO.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              )}
            </div>
            <p className="text-white/50 text-xs">
              Join our WhatsApp community for updates on programs and events.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} RDIO AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-white/50 hover:text-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/50 hover:text-gold text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
