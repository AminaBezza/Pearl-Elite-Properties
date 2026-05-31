'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

interface PropertyGalleryProps {
  images: string[]
}

const PropertyGallery: React.FC<PropertyGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length)
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="relative h-full w-full overflow-hidden group">
      {/* Main Image */}
      <div className="relative h-full w-full">
        <Image
          src={images[activeIndex]}
          alt={`Gallery image ${activeIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Navigation Controls */}
      <button 
        onClick={prevImage}
        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-gold p-4 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextImage}
        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-gold p-4 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={32} />
      </button>

      {/* Index Counter */}
      <div className="absolute bottom-10 left-10 flex items-center space-x-4 text-white">
        <span className="font-heading text-4xl">{activeIndex + 1}</span>
        <div className="w-12 h-[1px] bg-gold"></div>
        <span className="text-sm font-light uppercase tracking-widest text-gray-300">Of {images.length} Images</span>
      </div>

      {/* Lightbox Toggle Placeholder */}
      <button className="absolute bottom-10 right-10 bg-white/10 hover:bg-gold p-4 text-white backdrop-blur-sm transition-all">
        <Maximize2 size={24} />
      </button>
      
      {/* Thumbnails (Optional overlay) */}
      <div className="absolute bottom-32 left-10 flex space-x-3">
        {images.map((img, idx) => (
          <button 
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative w-24 h-16 border-2 transition-all ${activeIndex === idx ? 'border-gold scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
          >
            <Image src={img} alt={`Thumb ${idx}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default PropertyGallery
