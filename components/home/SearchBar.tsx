'use client'

import React, { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const filters = [
  {
    label: 'Location',
    options: ['All Locations', 'The Pearl', 'Lusail', 'West Bay', 'Msheireb'],
  },
  {
    label: 'Property Type',
    options: ['All Types', 'Apartment', 'Villa', 'Penthouse', 'Commercial'],
  },
  {
    label: 'Price Range',
    options: ['Any Price', 'QAR 1M - 5M', 'QAR 5M - 10M', 'QAR 10M+'],
  },
  {
    label: 'Bedrooms',
    options: ['Any', '1+ Beds', '2+ Beds', '3+ Beds', '4+ Beds', '5+ Beds'],
  },
]

const SearchBar = () => {
  const [openFilter, setOpenFilter] = useState<string | null>(null)
  const [values, setValues] = useState(() =>
    Object.fromEntries(filters.map((filter) => [filter.label, filter.options[0]]))
  )

  return (
    <div className="w-full max-w-[1050px] mx-auto">
      <div className="relative backdrop-blur-md bg-white/25 border border-white/25 rounded-lg shadow-2xl overflow-visible">
        {/* Top Search Input */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_150px] border-b border-white/20">
          <div className="relative">
            <input
              type="text"
              placeholder="Search properties..."
              className="w-full bg-transparent py-5 px-7 text-base font-medium text-white placeholder-white/90 focus:outline-none focus:ring-0 transition-all"
            />
          </div>
          <div className="flex items-center justify-center p-3 md:border-l border-white/15">
            <button className="w-full h-[52px] min-h-[52px] bg-black/85 hover:bg-black text-white px-5 flex items-center justify-center space-x-3 transition-all duration-300 border border-white/10 group">
              <Search size={16} className="text-white group-hover:scale-110 transition-transform" />
              <span className="uppercase text-[11px] font-bold tracking-[0.18em]">Search</span>
            </button>
          </div>
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 items-stretch">
          {filters.map((filter) => {
            const isOpen = openFilter === filter.label

            return (
              <div
                key={filter.label}
                className="relative px-7 py-5 border-b md:border-b-0 md:border-r last:border-r-0 border-white/15"
              >
                <label className="block text-[9px] text-white/75 uppercase tracking-widest font-bold mb-1.5">
                  {filter.label}
                </label>
                <button
                  type="button"
                  onClick={() => setOpenFilter(isOpen ? null : filter.label)}
                  className="flex w-full items-center justify-between gap-4 py-1 text-left text-sm font-medium text-white transition-colors hover:text-white"
                >
                  <span>{values[filter.label]}</span>
                  <ChevronDown
                    className={cn('text-white/70 transition-transform', isOpen && 'rotate-180')}
                    size={15}
                  />
                </button>

                <div
                  className={cn(
                    'absolute left-4 right-4 top-[calc(100%-1px)] z-[80] overflow-hidden rounded-b-md border border-white/25 bg-white/40 backdrop-blur-xl shadow-2xl transition-all duration-200',
                    isOpen
                      ? 'translate-y-0 opacity-100 visible'
                      : '-translate-y-2 opacity-0 invisible pointer-events-none'
                  )}
                >
                  {filter.options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setValues((current) => ({ ...current, [filter.label]: option }))
                        setOpenFilter(null)
                      }}
                      className={cn(
                        'block w-full px-4 py-3 text-left text-sm font-medium text-white transition-colors hover:bg-white/20',
                        values[filter.label] === option && 'bg-white/20'
                      )}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchBar
