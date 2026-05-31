'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CompanyPage() {
  const links = [
    { label: 'About Us', href: '/about', desc: 'Learn more about Pearl Elite Properties' },
    { label: 'Our Services', href: '/#services', desc: 'Explore our premium real estate services' },
    { label: 'Contact Us', href: '/#contact', desc: 'Get in touch with our expert team' },
    { label: 'Terms of Service', href: '/terms', desc: 'Read our terms and conditions' },
    { label: 'Privacy Policy', href: '/privacy', desc: 'Your privacy matters to us' },
  ]

  return (
    <div className="w-full pt-32">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-stone-100 to-stone-50">
        <div className="container-custom text-center space-y-6">
          <h1 className="text-5xl lg:text-6xl font-heading">Company</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Pearl Elite Properties
          </p>
        </div>
      </section>

      {/* Links */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="space-y-4">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="group flex items-center justify-between p-6 bg-stone-50 border-2 border-stone-200 rounded-lg hover:border-gold hover:bg-gold/5 transition-all duration-300"
              >
                <div className="space-y-1">
                  <h3 className="text-lg font-heading text-luxury-black group-hover:text-gold transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-sm text-gray-600">{link.desc}</p>
                </div>
                <ArrowRight 
                  size={24} 
                  className="text-gold group-hover:translate-x-2 transition-transform duration-300" 
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
