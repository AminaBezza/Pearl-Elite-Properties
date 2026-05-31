import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-luxury-gray py-20 lg:py-40">
        <div className="container-custom flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 space-y-8">
            <h3 className="text-gold text-sm tracking-[0.3em] uppercase">Legacy of Excellence</h3>
            <h1 className="text-4xl lg:text-7xl font-heading leading-tight">About <br /> Pearl Elite</h1>
            <p className="text-gray-500 text-lg leading-loose font-light">
              Founded in 2009, Pearl Elite Properties has grown from a boutique firm to Qatar leading premier real estate agency. We specialize in providing a curated selection of properties for the most discerning clients.
            </p>
          </div>
          <div className="lg:w-1/2 relative h-[600px] w-full bg-luxury-black">
            <Image 
              src="https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-living.jpg" 
              alt="Luxury Living" 
              fill 
              className="object-cover opacity-80" 
            />
          </div>
        </div>
      </div>

      <div className="section-padding container-custom grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-6">
          <h2 className="text-2xl font-heading text-gold">Our Mission</h2>
          <p className="text-gray-500 leading-relaxed italic border-l-4 border-gold pl-6 py-2">
            "To define the standard of luxury real estate in Qatar through unparalleled expertise, integrity, and personalized service."
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-heading text-gold">Our Vision</h2>
          <p className="text-gray-500 leading-relaxed">
            We aim to be the most trusted and sought-after real estate partner in the Middle East, connecting global investors with Doha most exclusive opportunities.
          </p>
        </div>
      </div>

      {/* Team Preview */}
      <section className="bg-luxury-black text-white section-padding">
        <div className="container-custom text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-heading">Our Expert Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Meet the professionals behind international award-winning agency.</p>
        </div>
        <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2, 3].map(i => (
            <div key={i} className="space-y-6 flex flex-col items-center">
              <div className="relative w-full aspect-[4/5] bg-gray-800">
                <Image src={`https://res.cloudinary.com/demo/image/upload/v1652345678/agent.jpg`} alt="Agent" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="text-center">
                <h4 className="font-heading text-xl">Khalid Abdullah</h4>
                <p className="text-gold text-[10px] uppercase font-bold tracking-widest mt-1">Founder & CEO</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default AboutPage
