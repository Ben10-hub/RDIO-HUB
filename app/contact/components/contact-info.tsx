'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, Globe, MapPin, Instagram, Linkedin, MessageCircle } from 'lucide-react'
import { CONTACT_INFO } from '@/lib/constants'

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">
        Contact Information
      </h2>
      <p className="text-text-gray mb-8 leading-relaxed">
        Reach out to us through any of these channels. We typically respond within 24 hours.
      </p>

      <div className="space-y-6 mb-10">
        <a
          href={`mailto:${CONTACT_INFO.email}`}
          className="flex items-center gap-4 p-4 bg-soft-bg rounded-xl hover:bg-gold/10 transition-colors group"
        >
          <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
            <Mail className="w-5 h-5 text-gold" />
          </div>
          <div>
            <p className="text-sm text-text-gray">Email</p>
            <p className="font-medium text-navy">{CONTACT_INFO.email}</p>
          </div>
        </a>

        <a
          href={`tel:${CONTACT_INFO.phone}`}
          className="flex items-center gap-4 p-4 bg-soft-bg rounded-xl hover:bg-gold/10 transition-colors group"
        >
          <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
            <Phone className="w-5 h-5 text-gold" />
          </div>
          <div>
            <p className="text-sm text-text-gray">Phone</p>
            <p className="font-medium text-navy">{CONTACT_INFO.phone}</p>
          </div>
        </a>

        <a
          href={`https://${CONTACT_INFO.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-4 bg-soft-bg rounded-xl hover:bg-gold/10 transition-colors group"
        >
          <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
            <Globe className="w-5 h-5 text-gold" />
          </div>
          <div>
            <p className="text-sm text-text-gray">Website</p>
            <p className="font-medium text-navy">{CONTACT_INFO.website}</p>
          </div>
        </a>

        <div className="flex items-center gap-4 p-4 bg-soft-bg rounded-xl">
          <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-gold" />
          </div>
          <div>
            <p className="text-sm text-text-gray">Location</p>
            <p className="font-medium text-navy">Hyderabad, Telangana, India</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <h3 className="font-semibold text-navy mb-4">Connect With Us</h3>
      <div className="flex items-center gap-4">
        {CONTACT_INFO.social.instagram && (
          <a
            href={CONTACT_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all text-navy"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        )}
        {CONTACT_INFO.social.linkedin && (
          <a
            href={CONTACT_INFO.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all text-navy"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        )}
        {CONTACT_INFO.social.whatsapp && (
          <a
            href={CONTACT_INFO.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-xl bg-navy/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-all text-navy"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        )}
      </div>

      {/* WhatsApp CTA */}
      <a
        href={CONTACT_INFO.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 flex items-center gap-3 px-6 py-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors w-fit"
      >
        <MessageCircle size={24} />
        <span className="font-semibold">Chat on WhatsApp</span>
      </a>
    </motion.div>
  )
}
