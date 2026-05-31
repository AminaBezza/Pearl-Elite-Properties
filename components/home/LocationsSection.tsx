import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const locations = [
  { name: 'The Pearl', image: 'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-house.jpg', slug: 'the-pearl', count: 124 },
  { name: 'Lusail', image: 'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-living.jpg', slug: 'lusail', count: 86 },
  { name: 'West Bay', image: 'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-pool.jpg', slug: 'west-bay', count: 54 },
  { name: 'Al Waab', image: 'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-bedroom.jpg', slug: 'al-waab', count: 32 },
  { name: 'Msheireb', image: 'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-kitchen.jpg', slug: 'msheireb', count: 18 },
  { name: 'Marina District', image: 'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-house.jpg', slug: 'marina-district', count: 42 },
]

const LocationsSection = () => {
  return (
    <section className="section-padding bg-luxury-gray">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-gold text-sm tracking-[0.2em] uppercase">Premium Neighborhoods</h3>
          <h2 className="text-3xl lg:text-5xl">Explore Locations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Link 
              key={loc.name} 
              href={`/locations/${loc.slug}`}
              className="group relative h-96 overflow-hidden block"
            >
              <Image
                src={loc.image}
                alt={loc.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-2xl font-heading mb-1">{loc.name}</h3>
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                  {loc.count} Properties
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LocationsSection
