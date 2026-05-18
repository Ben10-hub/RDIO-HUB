'use client'

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-soft-bg rounded-2xl p-8 lg:p-10 border border-border"
    >
      <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">
        Send Us a Message
      </h2>
      <p className="text-text-gray mb-8">
        Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      <form className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-navy">Full Name *</Label>
            <Input
              id="name"
              placeholder="John Doe"
              className="bg-white border-border focus:border-gold"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-navy">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="bg-white border-border focus:border-gold"
              required
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-navy">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 12345 67890"
              className="bg-white border-border focus:border-gold"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="inquiry" className="text-navy">Inquiry Type *</Label>
            <select
              id="inquiry"
              className="flex h-10 w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-navy focus:outline-none focus:border-gold"
              required
            >
              <option value="">Select an option</option>
              <option value="programs">Programs & Courses</option>
              <option value="internship">Internships</option>
              <option value="academic">Academic Collaboration</option>
              <option value="corporate">Corporate Training</option>
              <option value="research">Research Mentorship</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="organization" className="text-navy">Organization / Institution</Label>
          <Input
            id="organization"
            placeholder="Your college or company name"
            className="bg-white border-border focus:border-gold"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-navy">Message *</Label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us about your requirements..."
            className="flex w-full rounded-md border border-border bg-white px-3 py-2 text-sm text-navy placeholder:text-muted-foreground focus:outline-none focus:border-gold resize-none"
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold h-12 text-base gap-2"
        >
          Send Message <Send size={18} />
        </Button>

        <p className="text-xs text-text-gray text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </motion.div>
  )
}
