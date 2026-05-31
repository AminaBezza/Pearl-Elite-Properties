'use client'

import React, { useState } from 'react'

interface LocationFilterProps {
  onFilterChange: (filter: string) => void
}

const LocationFilter: React.FC<LocationFilterProps> = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'All Properties' },
    { id: 'available', label: 'Available' },
    { id: 'rented', label: 'Rented' },
    { id: 'sold', label: 'Sold' },
  ]

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId)
    onFilterChange(filterId)
  }

  return (
    <div className="flex flex-wrap gap-3 justify-center items-center py-6">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => handleFilterClick(filter.id)}
          className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
            activeFilter === filter.id
              ? 'bg-gold text-luxury-black'
              : 'bg-luxury-gray text-luxury-black border border-gold hover:bg-gold hover:text-luxury-black'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

export default LocationFilter
