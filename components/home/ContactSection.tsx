"use client"

import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const ContactSection = () => {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-gold text-sm tracking-[0.2em] uppercase">{t('contact.title')}</h3>
              <h2 className="text-4xl lg:text-5xl font-heading text-luxury-black">{t('contact.subtitle')}</h2>
            </div>
            
            <p className="text-gray-600 leading-relaxed max-w-lg">{t('contact.desc')}</p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold/10 border border-gold rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{t('contact.callus')}</p>
                  <p className="text-luxury-black font-medium">+213 676 346 072</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold/10 border border-gold rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{t('contact.emailus')}</p>
                  <p className="text-luxury-black font-medium">bezzaamina31@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold/10 border border-gold rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{t('contact.visitus')}</p>
                  <p className="text-luxury-black font-medium">Elite Tower, Floor 22, West Bay</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/contact" className="btn-gold inline-block px-8 py-4">
                {t('contact.sendmessage')}
              </Link>
            </div>
          </div>

          {/* Right: Decorative */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Animated circles background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-yellow-600/10 rounded-3xl blur-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent rounded-3xl blur-2xl animate-pulse"></div>
              
              <div className="relative bg-gold/5 border-2 border-gold rounded-3xl p-12 backdrop-blur-sm space-y-6 hover:shadow-xl hover:shadow-gold/20 transition-all">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-4">
                    <span className="text-2xl">💬</span>
                  </div>
                  <h3 className="text-xl font-heading text-gold mb-2">24/7 SUPPORT</h3>
                  <p className="text-sm text-gray-600">
                    Our team is available around the clock to answer your questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
