import React from 'react'
import PropertyCard from './PropertyCard'
import { cn } from '@/lib/utils'
import { demoProperties } from '@/lib/properties'

interface PropertyGridProps {
  viewMode: 'grid' | 'list'
  statusFilter?: 'available'
  propertyType?: 'rent' | 'sale'
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ viewMode, statusFilter, propertyType }) => {
  let properties = demoProperties

  // Filter by status if provided
  if (statusFilter === 'available') {
    properties = properties.filter((property) => property.status === 'available')
  }

  // Filter by property type (Rent or Sale) if provided
  if (propertyType === 'rent') {
    properties = properties.filter((property) => property.type === 'Rent')
  } else if (propertyType === 'sale') {
    properties = properties.filter((property) => property.type === 'Sale')
  }

  return (
    <div className={cn(
      "grid gap-8",
      viewMode === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"
    )}>
      {properties.map((prop) => (
        <PropertyCard key={prop.id} {...prop} />
      ))}
    </div>
  )
}

export default PropertyGrid
