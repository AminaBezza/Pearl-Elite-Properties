'use client'

import React, { useState } from 'react'
import LocationsSection from '@/components/home/LocationsSection'
import LocationFilter from '@/components/home/LocationFilter'

const LocationsPage = () => {
  const [filter, setFilter] = useState('all')

  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-luxury-black text-white py-20 lg:py-32">
        <div className="container-custom text-center space-y-4">
          <h3 className="text-gold text-sm tracking-[0.3em] uppercase">Premium Neighborhoods</h3>
          <h1 className="text-4xl lg:text-7xl font-heading">Locations</h1>
        </div>
      </div>
      <div className="bg-white border-b border-gold/20">
        <div className="container-custom">
          <LocationFilter onFilterChange={setFilter} />
        </div>
      </div>
      <LocationsSection filter={filter} />
    </div>
  )
}

export default LocationsPage
