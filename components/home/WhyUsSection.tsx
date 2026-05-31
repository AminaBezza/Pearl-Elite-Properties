"use client"

import React from 'react'
import Link from 'next/link'
import { ShieldCheck, Award, Users, Search } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const WhyUsSection = () => {
  const { t } = useLanguage()

  const features = [
    { icon: <ShieldCheck size={32} />, title: t('whyus.feature1'), desc: t('whyus.feature1desc') },
    { icon: <Award size={32} />, title: t('whyus.feature2'), desc: t('whyus.feature2desc') },
    { icon: <Users size={32} />, title: t('whyus.feature3'), desc: t('whyus.feature3desc') },
    { icon: <Search size={32} />, title: t('whyus.feature4'), desc: t('whyus.feature4desc') },
  ]

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Text Content - Beige/Cream */}
        <div className="lg:w-1/2 section-padding px-4 sm:px-8 lg:px-24 flex flex-col justify-center space-y-8 bg-stone-100">
          <div className="space-y-4">
            <h3 className="text-gold text-sm tracking-[0.2em] uppercase">{t('whyus.title')}</h3>
            <h2 className="text-3xl lg:text-5xl leading-tight text-luxury-black font-heading">{t('whyus.heading')}</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">{t('whyus.desc')}</p>
          <div className="pt-4">
            <Link href="/about" className="btn-outline inline-block">
              {t('whyus.learnmore')}
            </Link>
          </div>
        </div>

        {/* Right: Grid Cards - Dark Background */}
        <div 
          className="lg:w-1/2 section-padding px-4 sm:px-8 lg:px-12 flex items-center justify-center"
          style={{
            background: '#0f0f0f',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-lg">
            {features.map((f, i) => (
              <div 
                key={i} 
                className="bg-black/50 border-2 border-gold/70 p-8 space-y-4 hover:border-gold hover:bg-gold/10 transition-all duration-500 rounded-2xl group cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:shadow-gold/50 backdrop-blur-sm"
              >
                <div className="text-gold text-4xl group-hover:scale-125 group-hover:text-yellow-400 transition-all duration-500 inline-block animate-pulse">
                  {f.icon}
                </div>
                <h4 className="text-white text-lg font-heading uppercase tracking-wider leading-tight">{f.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection
