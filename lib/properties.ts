export type DemoPropertyStatus = 'available' | 'sold' | 'rented' | 'removed'

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
  '/image/lux-home.webp',
  'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-house.jpg',
  'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-living.jpg',
  'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-bedroom.jpg',
  'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-pool.jpg',
  'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-kitchen.jpg',
  'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-house.jpg',
  'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-living.jpg',
  'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-bedroom.jpg',
  'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-pool.jpg',
  'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-kitchen.jpg',
  '/image/lux-home.webp',
]

export const demoProperties: DemoProperty[] = [
  {
    id: 'pearl-penthouse',
    title: 'The Pearl Penthouse',
    location: 'Doha, Qatar',
    price: 25000000,
    type: 'Sale',
    beds: 4,
    baths: 5,
    sqm: 520,
    image: '/image/lux-home.webp',
    slug: 'the-pearl-penthouse',
    amenity: 'Infinity Pool',
    status: 'available',
    reference: 'pearl-25000000',
    description:
      'A signature penthouse with refined interiors, generous entertaining areas, and panoramic views across The Pearl.',
    amenities: ['Balcony', 'Infinity Pool', 'Security', 'View Of Water', 'Private Parking'],
    photos: galleryPhotos,
  },
  {
    id: 'porto-arabia-bedroom',
    title: 'Luxurious 2 Master Bedrooms in Porto Arabia',
    location: 'Piazza Arabia, Porto Arabia, The Pearl Island, Doha',
    price: 11000,
    type: 'Rent',
    beds: 2,
    baths: 3,
    sqm: 187,
    image: '/image/lux-home.webp',
    slug: 'luxurious-2-master-bedrooms-porto-arabia',
    amenity: 'Shared Pool',
    status: 'rented',
    reference: 'coreo-13182802-cc',
    description:
      'Experience luxurious living in this elegantly renovated 2-master-bedroom apartment located in the heart of Porto Arabia.',
    amenities: ['Balcony', 'Shared Pool', 'Security', 'View Of Water', 'Shared Gym'],
    photos: galleryPhotos,
  },
  {
    id: 'west-bay-apartment',
    title: 'West Bay Luxury Apartment',
    location: 'West Bay, Doha',
    price: 18000000,
    type: 'Sale',
    beds: 4,
    baths: 5,
    sqm: 410,
    image: 'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-house.jpg',
    slug: 'west-bay-luxury-apartment',
    amenity: 'Sea View',
    status: 'sold',
    reference: 'westbay-18000000',
    description:
      'A premium residence with open-plan living, floor-to-ceiling glass, and sweeping views of Doha skyline.',
    amenities: ['Sea View', 'Concierge', 'Security', 'Covered Parking'],
    photos: galleryPhotos,
  },
  {
    id: 'lusail-marina-villa',
    title: 'Lusail Marina Villa',
    location: 'Lusail, Qatar',
    price: 35000000,
    type: 'Sale',
    beds: 4,
    baths: 5,
    sqm: 620,
    image: 'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-living.jpg',
    slug: 'lusail-marina-villa',
    amenity: 'Private Pool',
    status: 'removed',
    reference: 'lusail-35000000',
    description:
      'A contemporary marina villa designed around bright social spaces, privacy, and resort-style outdoor living.',
    amenities: ['Private Pool', 'Garden', 'Security', 'Maid Room'],
    photos: galleryPhotos,
  },
]

export const availableProperties = demoProperties.filter((property) => property.status === 'available')

export const getDemoPropertyBySlug = (slug: string) =>
  demoProperties.find((property) => property.slug === slug)
