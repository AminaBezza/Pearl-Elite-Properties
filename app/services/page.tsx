import React from 'react'
import ServicesSection from '@/components/home/ServicesSection'
import CTABand from '@/components/home/CTABand'

const ServicesPage = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-luxury-black text-white py-20 lg:py-40">
        <div className="container-custom text-center space-y-4">
          <h3 className="text-gold text-sm tracking-[0.3em] uppercase">What We Offer</h3>
          <h1 className="text-4xl lg:text-7xl font-heading">Our Services</h1>
        </div>
      </div>

      <ServicesSection />

      <div className="bg-luxury-gray py-20 lg:py-32">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-3xl font-heading text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How do I list my property with Pearl Elite?", a: "You can contact our listing department directly via the List Your Property button in the navigation or visit our contact page." },
                { q: "What areas of Qatar do you cover?", a: "We specialize in high-end developments including The Pearl, Lusail City, West Bay, Msheireb Downtown, and exclusive compounds in Al Waab." },
                { q: "Are your agents multi-lingual?", a: "Yes, our team speaks English, Arabic, French, Spanish, Russian, and Mandarin to serve our international clientele." }
              ].map((faq, i) => (
                <div key={i} className="bg-white p-8 border border-gray-100 space-y-4">
                  <h4 className="font-bold text-lg">{faq.q}</h4>
                  <p className="text-gray-500 font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTABand />
    </div>
  )
}

export default ServicesPage
