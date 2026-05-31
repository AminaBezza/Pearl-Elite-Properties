'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const PropertyStatusFilter = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentStatus = searchParams.get('propertyStatus') || 'all'

  const statuses = [
    { id: 'all', label: 'All Properties' },
    { id: 'available', label: 'Available' },
    { id: 'rented', label: 'Rented' },
    { id: 'sold', label: 'Sold' },
  ]

  const handleStatusChange = (statusId: string) => {
    const params = new URLSearchParams(searchParams)
    if (statusId === 'all') {
      params.delete('propertyStatus')
    } else {
      params.set('propertyStatus', statusId)
    }
    router.push(`/properties?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-3 justify-center items-center py-6 border-b border-gold/20">
      {statuses.map((status) => (
        <button
          key={status.id}
          onClick={() => handleStatusChange(status.id)}
          className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
            currentStatus === status.id
              ? 'bg-gold text-luxury-black'
              : 'bg-luxury-gray text-luxury-black border border-gold hover:bg-gold hover:text-luxury-black'
          }`}
        >
          {status.label}
        </button>
      ))}
    </div>
  )
}

export default PropertyStatusFilter
