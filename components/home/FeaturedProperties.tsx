'use client'

import React from 'react'
import PropertyCard from '../properties/PropertyCard'
import Link from 'next/link'
import { demoProperties } from '@/lib/properties'
import { useLanguage } from '@/context/LanguageContext'

const FeaturedProperties = () => {
  const { t } = useLanguage()

  return (
    <section className="bg-[#fbfaf7] py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[980px] px-5">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h3 className="font-body text-[13px] font-medium uppercase tracking-[0.45em] text-gold">
              {t('featured.selection')}
            </h3>
            <h2 className="mt-3 font-heading text-4xl uppercase leading-none tracking-normal text-slate-950 lg:text-[42px]">
              {t('properties.title')}
            </h2>
          </div>
          <Link
            href="/properties"
            className="mb-2 shrink-0 border-b border-gold pb-1 text-[12px] font-semibold uppercase tracking-wide text-gold hover:text-slate-950 hover:border-slate-950"
          >
            {t('featured.viewAll')}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {demoProperties.map((prop) => (
              <PropertyCard
                key={prop.id}
                id={prop.id}
                title={prop.title}
                location={prop.location}
                price={Number(prop.price)}
                type={prop.type}
                beds={prop.beds}
                baths={prop.baths}
                sqm={prop.sqm}
                image={prop.image}
                slug={prop.slug}
                amenity={prop.amenity}
                status={prop.status}
              />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties

