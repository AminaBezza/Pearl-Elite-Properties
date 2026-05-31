export type PropertyType = 'apartment' | 'villa' | 'penthouse' | 'commercial' | 'townhouse'
export type PropertyStatus = 'active' | 'sold' | 'rented' | 'draft'
export type PriceType = 'sale' | 'rent'

export interface Property {
  id: string
  title: string
  slug: string
  description: string
  price: number
  price_type: PriceType
  rent_period?: 'monthly' | 'yearly' | null
  property_type: PropertyType
  status: PropertyStatus
  location_id: string
  locations?: Location // Join data
  bedrooms: number
  bathrooms: number
  area_sqm: number
  floor?: number
  parking: boolean
  furnished: boolean
  features: string[]
  images: string[]
  cover_image: string
  is_featured: boolean
  is_exclusive: boolean
  agent_id: string
  agents?: Agent // Join data
  created_at: string
  updated_at: string
}

export interface Location {
  id: string
  name: string
  slug: string
  description: string
  image: string
  city: string
  created_at: string
  property_count?: number // Calculated
}

export interface Agent {
  id: string
  name: string
  title: string
  photo: string
  email: string
  phone: string
  whatsapp: string
  languages: string[]
  bio: string
  is_active: boolean
  created_at: string
}

export interface Inquiry {
  id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  property_id?: string
  agent_id?: string
  is_read: boolean
  created_at: string
}

export interface Testimonial {
  id: string
  client_name: string
  client_role: string
  client_photo: string
  content: string
  rating: number
  is_active: boolean
  created_at: string
}
