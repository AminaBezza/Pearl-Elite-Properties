'use client'

import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import FilterSidebar from '@/components/properties/FilterSidebar'
import SortBar from '@/components/properties/SortBar'
import PropertyGrid from '@/components/properties/PropertyGrid'
import { LayoutGrid, List } from 'lucide-react'
import { cn } from '@/lib/utils'

const PropertiesPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const searchParams = useSearchParams()
  const statusFilter = searchParams.get('status') === 'available' ? 'available' : undefined

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-luxury-black text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl lg:text-6xl font-heading mb-4">Properties</h1>
          <p className="text-gray-400 max-w-2xl">
            Explore our curated collection of Qatar most exclusive real estate listings. From luxury penthouses in The Pearl to expansive villas in Lusail.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <FilterSidebar />
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-gray-100 pb-6">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={cn("p-2 transition-colors", viewMode === 'grid' ? "text-gold" : "text-gray-300")}
                >
                  <LayoutGrid size={20} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={cn("p-2 transition-colors", viewMode === 'list' ? "text-gold" : "text-gray-300")}
                >
                  <List size={20} />
                </button>
                <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                  {statusFilter === 'available' ? 'Showing available properties' : 'Showing all demo properties'}
                </span>
              </div>
              <SortBar />
            </div>

            <PropertyGrid viewMode={viewMode} statusFilter={statusFilter} />

            {/* Pagination */}
            <div className="flex justify-center space-x-2 pt-12">
              {[1, 2, 3, '...', 12].map((p, idx) => (
                <button 
                  key={idx}
                  className={cn(
                    "w-10 h-10 flex items-center justify-center border text-xs font-bold transition-all",
                    p === 1 ? "bg-luxury-black text-white border-luxury-black" : "border-gray-200 hover:border-gold"
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default PropertiesPage
