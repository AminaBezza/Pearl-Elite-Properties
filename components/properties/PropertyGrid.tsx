import React from 'react'
import PropertyCard from './PropertyCard'
import { cn } from '@/lib/utils'
import { demoProperties } from '@/lib/properties'

interface PropertyGridProps {
  viewMode: 'grid' | 'list'
  statusFilter?: 'available'
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ viewMode, statusFilter }) => {
  const properties =
    statusFilter === 'available'
      ? demoProperties.filter((property) => property.status === 'available')
      : demoProperties

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
