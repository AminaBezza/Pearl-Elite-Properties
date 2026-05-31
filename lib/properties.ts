export type DemoPropertyStatus = 'available'

export interface DemoProperty {
  id: string
  title: string
  location: string
  price: number
  type: 'Sale' | 'Rent'
  beds: number
  baths: number
  sqm: number
  image: string
  slug: string
  amenity: string
  status: DemoPropertyStatus
  description: string
  amenities: string[]
  reference: string
  photos: string[]
}

const galleryPhotos = [
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80',
  'https://images.unsplash.com/photo-1600607687644-c173e01bbf43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80',
  'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80',
  'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80',
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80',
  'https://images.unsplash.com/photo-1512917774080-9a485d6274a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80',
]

export const demoProperties: DemoProperty[] = [
  {
    id: 'pearl-penthouse-001',
    title: 'Luxury Penthouse - The Pearl',
    location: 'The Pearl, Doha, Qatar',
    price: 25000000,
    type: 'Sale',
    beds: 4,
    baths: 5,
    sqm: 520,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80',
    slug: 'luxury-penthouse-pearl',
    amenity: 'Infinity Pool & Spa',
    status: 'available',
    reference: 'PEARL-2024-001',
    description:
      'Stunning penthouse with panoramic views of The Pearl Island. Features a private infinity pool, spa, and state-of-the-art smart home system. Located in the heart of Doha\'s most prestigious development.',
    amenities: ['Private Infinity Pool', 'Spa & Sauna', 'Smart Home', 'Wine Cellar', 'Cinema Room', 'Private Parking'],
    photos: galleryPhotos,
  },
  {
    id: 'porto-arabia-001',
    title: 'Modern 3BR Apartment - Porto Arabia',
    location: 'Porto Arabia, The Pearl, Doha',
    price: 12500,
    type: 'Rent',
    beds: 3,
    baths: 3,
    sqm: 220,
    image: 'https://images.unsplash.com/photo-1600607687644-c173e01bbf43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80',
    slug: 'modern-apartment-porto-arabia',
    amenity: 'Marina View',
    status: 'available',
    reference: 'PORTO-2024-001',
    description:
      'Beautifully furnished modern apartment with stunning marina views. Perfect for families or professionals looking for luxury living in the heart of Porto Arabia. Includes access to exclusive amenities.',
    amenities: ['Marina View', 'Gym Access', 'Swimming Pool', 'Concierge', 'Parking', 'Furnished'],
    photos: galleryPhotos,
  },
  {
    id: 'west-bay-villa-001',
    title: 'Premium Villa - West Bay',
    location: 'West Bay, Doha, Qatar',
    price: 22000000,
    type: 'Sale',
    beds: 5,
    baths: 6,
    sqm: 650,
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80',
    slug: 'premium-villa-west-bay',
    amenity: 'Sea View & Garden',
    status: 'available',
    reference: 'WEST-BAY-001',
    description:
      'Exceptional waterfront villa with direct sea views. Features landscaped gardens, private beach access, and contemporary architecture. One of the most sought-after properties in West Bay.',
    amenities: ['Sea View', 'Private Beach', 'Garden', 'Pool', 'Gym', 'Guest House'],
    photos: galleryPhotos,
  },
  {
    id: 'lusail-apartment-001',
    title: 'Elegant 2BR Apartment - Lusail',
    location: 'Lusail, Doha, Qatar',
    price: 8500,
    type: 'Rent',
    beds: 2,
    baths: 2,
    sqm: 145,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80',
    slug: 'elegant-apartment-lusail',
    amenity: 'Golf Course View',
    status: 'available',
    reference: 'LUSAIL-2024-001',
    description:
      'Stunning 2-bedroom apartment overlooking the golf course in prestigious Lusail. Modern finishes, high-end appliances, and premium finishes throughout.',
    amenities: ['Golf View', 'Pool', 'Gym', 'Parking', 'Security', 'Air Conditioning'],
    photos: galleryPhotos,
  },
  {
    id: 'al-waab-villa-001',
    title: 'Spacious Villa - Al Waab',
    location: 'Al Waab, Doha, Qatar',
    price: 18500000,
    type: 'Sale',
    beds: 6,
    baths: 7,
    sqm: 750,
    image: 'https://images.unsplash.com/photo-1512917774080-9a485d6274a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80',
    slug: 'spacious-villa-al-waab',
    amenity: 'Swimming Pool',
    status: 'available',
    reference: 'ALWAAB-001',
    description:
      'Luxurious 6-bedroom villa with comprehensive amenities. Features large living spaces, gourmet kitchen, resort-style pool, and beautifully landscaped gardens.',
    amenities: ['Swimming Pool', 'Garden', 'Maid Room', 'Parking', 'Security System'],
    photos: galleryPhotos,
  },
  {
    id: 'doha-downtown-001',
    title: 'Downtown Studio - Doha',
    location: 'Downtown Doha, Qatar',
    price: 4500,
    type: 'Rent',
    beds: 1,
    baths: 1,
    sqm: 65,
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80',
    slug: 'downtown-studio-doha',
    amenity: 'City Center',
    status: 'available',
    reference: 'DOWNTOWN-2024-001',
    description:
      'Compact and stylish studio apartment in the heart of downtown Doha. Perfect for professionals with easy access to shopping, dining, and business districts.',
    amenities: ['City View', 'Gym', 'Parking', 'Furnished', 'Security'],
    photos: galleryPhotos,
  },
  {
    id: 'msheireb-penthouse-001',
    title: 'Modern Penthouse - Msheireb',
    location: 'Msheireb, Doha, Qatar',
    price: 16000000,
    type: 'Sale',
    beds: 3,
    baths: 4,
    sqm: 380,
    image: 'https://images.unsplash.com/photo-1512917774080-9a485d6274a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80',
    slug: 'modern-penthouse-msheireb',
    amenity: 'City Skyline View',
    status: 'available',
    reference: 'MSHEIREB-001',
    description:
      'Contemporary penthouse in Msheireb Downtown Doha with spectacular city views. Modern design, premium finishes, and access to world-class shopping and dining.',
    amenities: ['City View', 'Terrace', 'Smart Home', 'Parking', 'Concierge'],
    photos: galleryPhotos,
  },
  {
    id: 'marina-district-001',
    title: 'Waterfront Apartment - Marina District',
    location: 'Marina District, Doha, Qatar',
    price: 13500,
    type: 'Rent',
    beds: 2,
    baths: 2,
    sqm: 165,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=800&q=80',
    slug: 'waterfront-apartment-marina',
    amenity: 'Marina View',
    status: 'available',
    reference: 'MARINA-2024-001',
    description:
      'Beautiful waterfront apartment with direct marina views. Modern design with high-end finishes, perfect for those who appreciate fine living and water views.',
    amenities: ['Marina View', 'Pool Access', 'Gym', 'Parking', 'Furnished', 'Security'],
    photos: galleryPhotos,
  },
]

export const availableProperties = demoProperties.filter((property) => property.status === 'available')

export const getDemoPropertyBySlug = (slug: string) =>
  demoProperties.find((property) => property.slug === slug)
