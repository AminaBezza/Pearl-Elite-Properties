import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bath, Bed, Waves } from 'lucide-react'
import { formatPrice } from '@/lib/utils'
import type { DemoPropertyStatus } from '@/lib/properties'

interface PropertyCardProps {
  id: string
  title: string
  location: string
  price: number
  type: string
  beds: number
  baths: number
  sqm: number
  image: string
  slug: string
  amenity?: string
  status?: DemoPropertyStatus
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  location,
  price,
  type,
  beds,
  baths,
  sqm,
  image,
  slug,
  amenity = 'Infinity Pool',
  status = 'available',
}) => {
  const statusLabel = {
    available: 'Available',
    sold: 'Sold',
    rented: 'Rented',
    removed: 'Removed',
  }[status]

  const isUnavailable = status !== 'available'

  return (
    <article className="group bg-white border border-gray-100 shadow-[0_8px_22px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(15,23,42,0.14)]">
      <Link href={`/properties/${slug}`} className="block relative aspect-[1.17] overflow-hidden border-[7px] border-white border-b-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className={`absolute left-3 top-3 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white ${isUnavailable ? 'bg-luxury-black/85' : 'bg-gold'}`}>
          {statusLabel}
        </span>
      </Link>

      <div className="px-5 pb-4 pt-2">
        <div className="border-b border-gray-200 pb-4">
          <h3 className={`font-body text-[15px] font-semibold uppercase tracking-wide transition-colors group-hover:text-gold ${isUnavailable ? 'text-gold' : 'text-slate-950'}`}>
            {title}
          </h3>
          <p className="mt-1 text-[12px] font-medium text-slate-600">
            {location}
          </p>
          <p className="mt-4 text-[15px] font-medium text-slate-950">
            {formatPrice(price, type === 'Sale' ? 'sale' : 'rent', type === 'Rent' ? 'month' : null)}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2 pt-3 text-[10px] font-medium text-slate-900">
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <Bed size={13} strokeWidth={1.7} />
            <span>{beds} Bedrooms</span>
          </div>
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <Bath size={13} strokeWidth={1.7} />
            <span>{baths} Bathrooms</span>
          </div>
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <Waves size={13} strokeWidth={1.7} />
            <span>{amenity || `${sqm} sqm`}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PropertyCard
