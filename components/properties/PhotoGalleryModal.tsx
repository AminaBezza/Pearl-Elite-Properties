'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Grid3X3, X } from 'lucide-react'

interface PhotoGalleryModalProps {
  title: string
  photos: string[]
}

const PhotoGalleryModal: React.FC<PhotoGalleryModalProps> = ({ title, photos }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="absolute right-12 top-8 flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:border-gold hover:text-gold"
      >
        <Grid3X3 size={18} />
        Show all 12 photos
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-white">
          <div className="sticky top-0 z-10 border-b border-gray-100 bg-white/95 backdrop-blur-md">
            <div className="container-custom flex items-center justify-between py-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Property gallery</p>
                <h2 className="mt-1 text-2xl font-bold text-slate-950">{title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-slate-700 transition-colors hover:border-gold hover:text-gold"
                aria-label="Close gallery"
              >
                <X size={22} />
              </button>
            </div>
          </div>

          <div className="container-custom py-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {photos.map((photo, index) => (
                <div
                  key={`${photo}-${index}`}
                  className={index === 0 ? 'relative h-[420px] md:col-span-2 lg:col-span-2' : 'relative h-64'}
                >
                  <Image
                    src={photo}
                    alt={`${title} photo ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PhotoGalleryModal
