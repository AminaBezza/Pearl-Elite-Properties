import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bath, Bed, MapPin, Maximize, MessageCircle, Phone } from 'lucide-react'
import { demoProperties, getDemoPropertyBySlug } from '@/lib/properties'
import PhotoGalleryModal from '@/components/properties/PhotoGalleryModal'

const ContactPanel = ({ price, reference }: { price: number; reference: string }) => (
  <aside className="rounded-2xl bg-slate-50 p-8 text-center shadow-sm lg:sticky lg:top-28">
    <p className="text-sm font-medium uppercase tracking-wide text-slate-500">Interested in this property?</p>
    <p className="mt-3 text-4xl font-bold text-[#78bf1f]">{price.toLocaleString('en-US')} QAR</p>
    <p className="mt-5 text-sm font-bold text-slate-700">
      Reference: <span className="rounded-full bg-white px-3 py-1 text-slate-700 shadow-sm">{reference}</span>
    </p>
    <div className="mt-6 space-y-4">
      <button className="flex h-14 w-full items-center justify-center gap-3 rounded-lg bg-[#78bf1f] text-lg font-bold text-white transition-colors hover:bg-[#67a91a]">
        <Phone size={20} />
        Call
      </button>
      <button className="flex h-14 w-full items-center justify-center gap-3 rounded-lg border border-gray-200 bg-white text-lg font-bold text-black shadow-sm transition-colors hover:border-gold">
        <MessageCircle size={20} />
        WhatsApp
      </button>
    </div>
  </aside>
)

const PropertyDetailPage = ({ params }: { params: { slug: string } }) => {
  const property = getDemoPropertyBySlug(params.slug) || demoProperties[0]
  const isUnavailable = property.status !== 'available'

  if (isUnavailable) {
    return (
      <div className="min-h-screen bg-[#f7f7f5] pt-28">
        <div className="container-custom py-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gold">Listing update</p>
            <h1 className="mt-4 font-heading text-4xl uppercase tracking-normal text-slate-950 lg:text-6xl">
              Property No Longer Available
            </h1>
          </div>

          <div className="mt-10 max-w-[430px] bg-white p-3 shadow-[0_14px_36px_rgba(15,23,42,0.08)]">
            <div className="relative aspect-[1.08] overflow-hidden">
              <Image src={property.image} alt={property.title} fill className="object-cover" />
            </div>
            <div className="px-5 pb-6 pt-5">
              <h2 className="font-body text-xl font-bold uppercase tracking-wide text-gold">{property.title}</h2>
              <p className="mt-3 text-slate-600">{property.location}</p>
              <p className="mt-6 text-2xl font-semibold text-slate-950">{property.price.toLocaleString('en-US')} QAR</p>
              <Link
                href="/properties?status=available"
                className="mt-7 block bg-gold px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-luxury-black"
              >
                Browse currently available properties
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="relative h-[520px] border-b border-gray-100 bg-slate-100">
        <Image src={property.image} alt={property.title} fill className="object-cover" priority />
        <PhotoGalleryModal title={property.title} photos={property.photos} />
      </section>

      <div className="container-custom py-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_420px]">
          <main>
            <h1 className="max-w-4xl font-body text-5xl font-extrabold uppercase leading-tight tracking-wide text-slate-950">
              {property.title}
            </h1>
            <div className="mt-5 flex items-center gap-3 text-lg text-slate-600">
              <MapPin size={22} className="text-slate-500" />
              {property.location}
            </div>

            <div className="mt-20 flex gap-14 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-4">
                <Bed className="text-slate-400" />
                <div>
                  <p className="text-xl font-bold">{property.beds}</p>
                  <p className="text-xs font-medium uppercase text-slate-400">Beds</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Bath className="text-slate-400" />
                <div>
                  <p className="text-xl font-bold">{property.baths}</p>
                  <p className="text-xs font-medium uppercase text-slate-400">Baths</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Maximize className="text-slate-400" />
                <div>
                  <p className="text-xl font-bold">{property.sqm}</p>
                  <p className="text-xs font-medium uppercase text-slate-400">Sq M</p>
                </div>
              </div>
            </div>

            <section className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold text-slate-950">About this property</h2>
              <p className="max-w-5xl text-lg leading-8 text-slate-600">{property.description}</p>
              <p className="text-lg text-slate-600">Property Highlights:</p>
              <p className="text-lg text-slate-600">Elegant rooms, premium finishing, marina lifestyle, and a curated luxury living experience.</p>
            </section>

            <section className="mt-14">
              <h2 className="text-2xl font-bold text-slate-950">Amenities</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {property.amenities.map((amenity) => (
                  <span key={amenity} className="rounded-full border border-gray-200 bg-slate-50 px-5 py-2 text-sm text-slate-600">
                    {amenity}
                  </span>
                ))}
              </div>
            </section>

            <section className="mt-14">
              <h2 className="text-2xl font-bold text-slate-950">Location</h2>
              <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-slate-100">
                <div className="relative h-52 bg-gradient-to-r from-slate-200 via-sky-100 to-sky-200">
                  <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#78bf1f] text-white shadow-lg">
                    <MapPin size={28} fill="currentColor" />
                  </div>
                </div>
                <div className="flex items-center justify-between bg-white px-6 py-5">
                  <div className="flex items-center gap-3 font-semibold text-slate-700">
                    <MapPin size={22} />
                    {property.location}
                  </div>
                  <a className="font-semibold text-[#78bf1f]" href="#">
                    View on map
                  </a>
                </div>
              </div>
            </section>
          </main>

          <ContactPanel price={property.price} reference={property.reference} />
        </div>
      </div>
    </div>
  )
}

export default PropertyDetailPage
