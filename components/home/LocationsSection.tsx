'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface LocationData {
  name: string
  image: string
  slug: string
  count: number
}

const locations: LocationData[] = [
  { 
    name: 'The Pearl', 
    image: 'https://images.unsplash.com/photo-1512207736139-6c3ee1990bf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80', 
    slug: 'the-pearl', 
    count: 124 
  },
  { 
    name: 'Lusail', 
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd3d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80', 
    slug: 'lusail', 
    count: 86 
  },
  { 
    name: 'West Bay', 
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80', 
    slug: 'west-bay', 
    count: 54 
  },
  { 
    name: 'Al Waab', 
    image: 'https://images.unsplash.com/photo-1576070542803-bc87d43ded73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80', 
    slug: 'al-waab', 
    count: 32 
  },
  { 
    name: 'Msheireb', 
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80', 
    slug: 'msheireb', 
    count: 18 
  },
  { 
    name: 'Marina District', 
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80', 
    slug: 'marina-district', 
    count: 42 
  },
]

interface LocationsSectionProps {
  filter?: string
}

const LocationsSection = ({ filter = 'all' }: LocationsSectionProps) => {
  const filteredLocations = locations

  return (
    <section className="section-padding bg-luxury-gray">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-gold text-sm tracking-[0.2em] uppercase">Premium Neighborhoods</h3>
          <h2 className="text-3xl lg:text-5xl font-heading">Explore Locations</h2>
        </div>

        {filteredLocations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((loc) => (
              <Link 
                key={loc.name} 
                href={`/locations/${loc.slug}`}
                className="group relative h-80 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-heading mb-2">{loc.name}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold">
                    {loc.count} Properties
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-luxury-black/60 text-lg">No properties found for this filter.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default LocationsSection
