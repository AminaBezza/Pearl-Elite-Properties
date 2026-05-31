'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

const SortBar = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const currentSort = searchParams.get('sort') || 'newest'
  const currentPropertyType = searchParams.get('type') || 'all'
  
  const [openDropdown, setOpenDropdown] = useState<'sort' | 'type' | null>(null)

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('sort', value)
    router.push(`/properties?${params.toString()}`)
    setOpenDropdown(null)
  }

  const handleTypeChange = (value: string) => {
    const params = new URLSearchParams(searchParams)
    if (value === 'all') {
      params.delete('type')
    } else {
      params.set('type', value)
    }
    router.push(`/properties?${params.toString()}`)
    setOpenDropdown(null)
  }

  const getSortLabel = () => {
    switch (currentSort) {
      case 'price-low': return 'Price: Low to High'
      case 'price-high': return 'Price: High to Low'
      case 'area': return 'Area: Largest'
      default: return 'Newest'
    }
  }

  const getTypeLabel = () => {
    switch (currentPropertyType) {
      case 'rent': return 'Rent'
      case 'sale': return 'Sold'
      default: return 'All Types'
    }
  }

  return (
    <div className="flex items-center space-x-6 pb-6 border-b border-gray-100">
      {/* Sort Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpenDropdown(openDropdown === 'sort' ? null : 'sort')}
          className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-gold transition-colors"
        >
          <span>Sort By:</span>
          <span className="text-gold">{getSortLabel()}</span>
          <ChevronDown size={16} />
        </button>
        
        {openDropdown === 'sort' && (
          <div className="absolute top-full mt-2 left-0 bg-white border border-gold/30 rounded shadow-lg z-10 min-w-[200px]">
            <button
              onClick={() => handleSortChange('newest')}
              className={`w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                currentSort === 'newest' ? 'bg-gold/10 text-gold' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Newest
            </button>
            <button
              onClick={() => handleSortChange('price-low')}
              className={`w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                currentSort === 'price-low' ? 'bg-gold/10 text-gold' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Price: Low to High
            </button>
            <button
              onClick={() => handleSortChange('price-high')}
              className={`w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                currentSort === 'price-high' ? 'bg-gold/10 text-gold' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Price: High to Low
            </button>
            <button
              onClick={() => handleSortChange('area')}
              className={`w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                currentSort === 'area' ? 'bg-gold/10 text-gold' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Area: Largest
            </button>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="h-6 w-px bg-gray-200"></div>

      {/* Property Type Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpenDropdown(openDropdown === 'type' ? null : 'type')}
          className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-gold transition-colors"
        >
          <span>Property Type:</span>
          <span className="text-gold">{getTypeLabel()}</span>
          <ChevronDown size={16} />
        </button>
        
        {openDropdown === 'type' && (
          <div className="absolute top-full mt-2 left-0 bg-white border border-gold/30 rounded shadow-lg z-10 min-w-[150px]">
            <button
              onClick={() => handleTypeChange('all')}
              className={`w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                currentPropertyType === 'all' ? 'bg-gold/10 text-gold' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              All Types
            </button>
            <button
              onClick={() => handleTypeChange('rent')}
              className={`w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                currentPropertyType === 'rent' ? 'bg-gold/10 text-gold' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Rent
            </button>
            <button
              onClick={() => handleTypeChange('sale')}
              className={`w-full text-left px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                currentPropertyType === 'sale' ? 'bg-gold/10 text-gold' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Sold
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SortBar
