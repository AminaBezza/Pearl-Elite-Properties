'use client'

import React from 'react'
import SearchBar from './SearchBar'
import { useLanguage } from '@/context/LanguageContext'

const HeroSection = () => {
  const { t } = useLanguage()

  return (
    <section className="relative h-screen min-h-[640px] w-full flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/image/lux-home.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/35"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/30"></div>
      </div>

      <div className="relative z-10 container-custom text-center text-white px-4 pt-16">
        <div className="space-y-5 mb-8 lg:mb-9">
          <h2 className="text-gold text-sm md:text-lg font-medium tracking-[0.5em] uppercase font-body">
            Pearl Elite Properties
          </h2>
          <h1 className="normal-case tracking-normal text-5xl md:text-7xl lg:text-[86px] xl:text-[92px] font-heading leading-[1.05] mx-auto max-w-5xl drop-shadow-2xl">
            Discover your Dream <br /> 
            Luxury Home
          </h1>
        </div>

        <div className="reveal active">
          <SearchBar />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3 opacity-75">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white font-semibold">Scroll</span>
        <div className="w-[1px] h-11 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  )
}

export default HeroSection
