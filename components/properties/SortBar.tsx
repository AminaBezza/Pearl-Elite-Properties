import React from 'react'

const SortBar = () => {
  return (
    <div className="flex items-center space-x-3">
      <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">Sort By:</span>
      <select className="bg-transparent text-xs font-bold uppercase tracking-widest outline-none cursor-pointer border-none focus:ring-0">
        <option>Newest</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
        <option>Area: Largest</option>
      </select>
    </div>
  )
}

export default SortBar
