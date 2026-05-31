import React from 'react'

const FilterSidebar = () => {
  return (
    <div className="space-y-8 sticky top-28">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Location</h3>
        <select className="w-full border border-gray-200 p-3 text-sm focus:border-gold outline-none transition-colors">
          <option>All Locations</option>
          <option>The Pearl</option>
          <option>Lusail</option>
          <option>West Bay</option>
          <option>Al Waab</option>
        </select>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Property Type</h3>
        <div className="space-y-3">
          {['Apartment', 'Villa', 'Penthouse', 'Commercial', 'Townhouse'].map((type) => (
            <label key={type} className="flex items-center space-x-3 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 accent-gold cursor-pointer" />
              <span className="text-sm text-gray-500 group-hover:text-gold transition-colors">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Price Range (QAR)</h3>
        <input type="range" min="0" max="50000000" step="100000" className="w-full accent-gold mb-2" />
        <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
          <span>0</span>
          <span>50M+</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Beds</h3>
          <select className="w-full border border-gray-200 p-3 text-sm focus:border-gold outline-none">
            <option>Any</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
          </select>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Baths</h3>
          <select className="w-full border border-gray-200 p-3 text-sm focus:border-gold outline-none">
            <option>Any</option>
            <option>1+</option>
            <option>2+</option>
          </select>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Area (SQM)</h3>
        <div className="flex items-center space-x-2">
          <input type="number" placeholder="Min" className="w-1/2 border border-gray-200 p-3 text-sm focus:border-gold outline-none" />
          <input type="number" placeholder="Max" className="w-1/2 border border-gray-200 p-3 text-sm focus:border-gold outline-none" />
        </div>
      </div>

      <button className="w-full btn-gold py-4 shadow-lg">
        Apply Filters
      </button>
      
      <button className="w-full text-xs uppercase tracking-widest text-gray-400 font-bold hover:text-luxury-black transition-colors">
        Clear All
      </button>
    </div>
  )
}

export default FilterSidebar
