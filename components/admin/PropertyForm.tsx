'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Upload, X, Plus } from 'lucide-react'
import ImageUploader from './ImageUploader'

const schema = z.object({
  title: z.string().min(5),
  price: z.number().positive(),
  property_type: z.string(),
  location_id: z.string(),
  description: z.string().min(20),
  bedrooms: z.number().min(0),
  bathrooms: z.number().min(0),
  area_sqm: z.number().positive(),
})

const PropertyForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
      {/* Basic Info */}
      <section className="bg-white p-8 border border-gray-100 shadow-sm space-y-6">
        <h3 className="text-sm font-bold uppercase tracking-widest border-b border-gray-100 pb-4 mb-6">General Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Property Title</label>
            <input {...register('title')} className="w-full bg-luxury-gray border-none p-4 text-sm focus:ring-1 focus:ring-gold outline-none" placeholder="e.g. Royal Penthouse with Sea View" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Price (QAR)</label>
            <input type="number" {...register('price', { valueAsNumber: true })} className="w-full bg-luxury-gray border-none p-4 text-sm focus:ring-1 focus:ring-gold outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Property Type</label>
            <select {...register('property_type')} className="w-full bg-luxury-gray border-none p-4 text-sm focus:ring-1 focus:ring-gold outline-none">
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="penthouse">Penthouse</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Location</label>
            <select {...register('location_id')} className="w-full bg-luxury-gray border-none p-4 text-sm focus:ring-1 focus:ring-gold outline-none">
              <option value="1">The Pearl</option>
              <option value="2">Lusail</option>
              <option value="3">West Bay</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Description</label>
          <textarea {...register('description')} rows={6} className="w-full bg-luxury-gray border-none p-4 text-sm focus:ring-1 focus:ring-gold outline-none" placeholder="Detailed property description..." />
        </div>
      </section>

      {/* Specifications */}
      <section className="bg-white p-8 border border-gray-100 shadow-sm space-y-6">
        <h3 className="text-sm font-bold uppercase tracking-widest border-b border-gray-100 pb-4 mb-6">Specifications</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Bedrooms</label>
            <input type="number" {...register('bedrooms', { valueAsNumber: true })} className="w-full bg-luxury-gray border-none p-4 text-sm focus:ring-1 focus:ring-gold outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Bathrooms</label>
            <input type="number" {...register('bathrooms', { valueAsNumber: true })} className="w-full bg-luxury-gray border-none p-4 text-sm focus:ring-1 focus:ring-gold outline-none" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Area (SQM)</label>
            <input type="number" {...register('area_sqm', { valueAsNumber: true })} className="w-full bg-luxury-gray border-none p-4 text-sm focus:ring-1 focus:ring-gold outline-none" />
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="bg-white p-8 border border-gray-100 shadow-sm space-y-6">
        <h3 className="text-sm font-bold uppercase tracking-widest border-b border-gray-100 pb-4 mb-6">Media & Images</h3>
        <ImageUploader />
      </section>

      <div className="flex justify-end space-x-4">
        <button type="button" className="px-8 py-4 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-luxury-black transition-colors">
          Discard Draft
        </button>
        <button type="submit" className="btn-gold px-12 py-4 shadow-xl">
          Publish Property
        </button>
      </div>
    </form>
  )
}

export default PropertyForm
