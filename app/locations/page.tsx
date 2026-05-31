import React from 'react'
import LocationsSection from '@/components/home/LocationsSection'

const LocationsPage = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-luxury-black text-white py-20 lg:py-32">
        <div className="container-custom text-center space-y-4">
          <h3 className="text-gold text-sm tracking-[0.3em] uppercase">Premium Neighborhoods</h3>
          <h1 className="text-4xl lg:text-7xl font-heading">Locations</h1>
        </div>
      </div>
      <LocationsSection />
    </div>
  )
}

export default LocationsPage
