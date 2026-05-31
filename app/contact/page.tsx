'use client'

import React, { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const ContactPage = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-luxury-black text-white py-20 lg:py-32">
        <div className="container-custom text-center space-y-4">
          <h3 className="text-gold text-sm tracking-[0.3em] uppercase">{t('contact.title')}</h3>
          <h1 className="text-4xl lg:text-7xl font-heading">{t('contact.subtitle')}</h1>
        </div>
      </div>

      {/* Info Cards */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address Card */}
            <div className="border border-gray-200 p-10 text-center space-y-4 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <MapPin className="text-gold" size={40} />
              </div>
              <h3 className="text-xl font-heading text-luxury-black">{t('contact.visitus')}</h3>
              <p className="text-sm text-gray-600 font-medium">Elite Tower, Floor 22</p>
              <p className="text-sm text-gray-600 font-medium">West Bay, Doha, Qatar</p>
            </div>

            {/* Contact Card */}
            <div className="border border-gray-200 p-10 text-center space-y-4 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Phone className="text-gold" size={40} />
              </div>
              <h3 className="text-xl font-heading text-luxury-black">{t('contact.callus')}</h3>
              <a href="https://wa.me/97444440000" className="text-sm text-blue-500 hover:underline font-medium">
                +974 4444 0000
              </a>
              <p className="text-xs text-gray-500">(Available on WhatsApp)</p>
            </div>

            {/* Email Card */}
            <div className="border border-gray-200 p-10 text-center space-y-4 hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Mail className="text-gold" size={40} />
              </div>
              <h3 className="text-xl font-heading text-luxury-black">{t('contact.emailus')}</h3>
              <a href="mailto:info@pearlelite.qa" className="text-sm text-blue-500 hover:underline font-medium">
                info@pearlelite.qa
              </a>
              <p className="text-xs text-gray-500">(Response within 24 hours)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="section-padding bg-luxury-gray">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="h-96 lg:h-full min-h-[500px] bg-gray-200 border border-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.7435093038286!2d51.53524!3d25.282844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534fec00001%3A0x1234567890ab!2sWest%20Bay%2C%20Doha!5e0!3m2!1sen!2sqa!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Form */}
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-heading text-luxury-black">{t('contact.sendmessage')}</h2>
                <p className="text-gray-600">{t('contact.supportdesc')}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t('contact.form.name')}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-4 text-sm focus:border-gold outline-none bg-white"
                    placeholder={t('contact.form.name')}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-4 text-sm focus:border-gold outline-none bg-white"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 p-4 text-sm focus:border-gold outline-none bg-white"
                    placeholder="+974 XXXX XXXX"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{t('contact.form.message')}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border border-gray-300 p-4 text-sm focus:border-gold outline-none bg-white"
                    placeholder={t('contact.form.message')}
                  ></textarea>
                </div>

                {/* reCAPTCHA */}
                <div className="flex items-center border border-gray-300 bg-white p-3 rounded">
                  <input type="checkbox" className="w-6 h-6 cursor-pointer" />
                  <div className="flex-1 flex items-center justify-between ml-3">
                    <span className="text-xs text-gray-600">{t('contact.form.notrobot')}</span>
                    <div className="text-right">
                      <p className="text-[10px] text-gray-400">reCAPTCHA</p>
                      <p className="text-[8px] text-gray-400">Privacy - Terms</p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn-gold w-full py-4 text-center font-bold uppercase tracking-wider"
                >
                  {t('contact.form.send')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-heading">{t('contact.hours')}</h2>
            <p className="text-gray-600">{t('contact.supportdesc')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <p className="font-heading text-lg text-luxury-black">{t('contact.hours1')}</p>
              <p className="text-gray-600">9:00 AM - 6:00 PM</p>
            </div>
            <div className="space-y-2">
              <p className="font-heading text-lg text-luxury-black">{t('contact.hours2')}</p>
              <p className="text-gray-600">10:00 AM - 4:00 PM</p>
            </div>
            <div className="space-y-2">
              <p className="font-heading text-lg text-gold">{t('contact.hours3')}</p>
              <p className="text-gray-600">{t('contact.hours3time')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
