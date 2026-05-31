'use client'

import React, { useState } from 'react'
import { Upload, X, Plus, Image as ImageIcon } from 'lucide-react'

const ImageUploader = () => {
  const [images, setImages] = useState<string[]>([])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((img, i) => (
          <div key={i} className="relative aspect-square bg-luxury-gray group">
            <img src={img} alt="" className="object-cover w-full h-full" />
            <button 
              onClick={() => setImages(images.filter((_, idx) => idx !== i))}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={12} />
            </button>
            {i === 0 && (
              <span className="absolute bottom-0 left-0 right-0 bg-gold text-white text-[8px] font-bold uppercase py-1 text-center">Cover Image</span>
            )}
          </div>
        ))}
        
        <label className="aspect-square border-2 border-dashed border-gray-200 flex flex-col items-center justify-center space-y-2 cursor-pointer hover:border-gold hover:bg-gold/5 transition-all text-gray-400 hover:text-gold">
          <Upload size={24} />
          <span className="text-[10px] uppercase font-bold tracking-widest">Upload Image</span>
          <input type="file" multiple className="hidden" onChange={(e) => {
            // Mock upload
            if (e.target.files) {
              const urls = Array.from(e.target.files).map(file => URL.createObjectURL(file))
              setImages([...images, ...urls])
            }
          }} />
        </label>
      </div>
      
      <p className="text-[10px] text-gray-400 font-medium">
        First image will be used as the property cover. Drag to reorder. Required: 1200x800px min.
      </p>
    </div>
  )
}

export default ImageUploader
