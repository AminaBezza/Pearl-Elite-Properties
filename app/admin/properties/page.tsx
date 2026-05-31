'use client'

import React from 'react'
import Link from 'next/link'
import { Plus, Search, Edit2, Trash2, Eye } from 'lucide-react'
import Image from 'next/image'

const AdminPropertiesList = () => {
  // Mock data
  const properties = [
    { id: '1', title: 'Royal Penthouse', location: 'The Pearl', price: 12500000, type: 'Sale', status: 'Active', image: 'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-house.jpg' },
    { id: '2', title: 'Modern Canal Villa', location: 'Lusail', price: 8900000, type: 'Sale', status: 'Active', image: 'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-living.jpg' },
    { id: '3', title: 'Skyline Apartment', location: 'West Bay', price: 35000, type: 'Rent', status: 'Active', image: 'https://res.cloudinary.com/demo/image/upload/v1652345678/luxury-pool.jpg' },
  ]

  return (
    <div className="space-y-10 pl-64">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <p className="text-xs text-gold uppercase tracking-[0.3em] font-bold">Inventory</p>
          <h1 className="text-4xl font-heading">Properties</h1>
        </div>
        <Link href="/admin/properties/new" className="btn-gold flex items-center space-x-2">
          <Plus size={18} />
          <span>Add New Property</span>
        </Link>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-gray-100 p-4 flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search properties by title, location, or SKU..." 
            className="w-full bg-luxury-gray border-none pl-12 p-3 text-sm focus:ring-1 focus:ring-gold outline-none"
          />
        </div>
        <select className="bg-luxury-gray border-none px-4 text-xs font-bold uppercase tracking-widest outline-none">
          <option>All Types</option>
          <option>Sale</option>
          <option>Rent</option>
        </select>
        <select className="bg-luxury-gray border-none px-4 text-xs font-bold uppercase tracking-widest outline-none">
          <option>All Status</option>
          <option>Active</option>
          <option>Sold/Rented</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-100 overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-luxury-gray border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Property</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Location</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Price</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {properties.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-12 bg-gray-200">
                      <Image src={p.image} alt={p.title} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">{p.title}</p>
                      <p className="text-[10px] text-gray-400 uppercase">{p.type}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{p.location}</td>
                <td className="px-6 py-4 text-sm font-bold">
                  {new Intl.NumberFormat('en-QA', { style: 'currency', currency: 'QAR' }).format(p.price)}
                </td>
                <td className="px-6 py-4">
                  <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-1 uppercase">{p.status}</span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gold transition-colors"><Eye size={16} /></button>
                    <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors"><Edit2 size={16} /></button>
                    <button className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminPropertiesList
