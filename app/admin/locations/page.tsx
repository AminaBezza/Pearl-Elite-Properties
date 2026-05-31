import React from 'react'
import { Plus, MapPin, ChevronRight, Settings } from 'lucide-react'

const LocationsAdminPage = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-heading mb-2">Prime Locations</h1>
          <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">Neighborhood management</p>
        </div>
        <button className="flex items-center space-x-2 bg-luxury-black text-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black/90 transition-all">
          <Plus size={16} />
          <span>New Location</span>
        </button>
      </div>

      <div className="bg-white border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Neighborhood</th>
              <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Total Properties</th>
              <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Avg. Price (QAR)</th>
              <th className="p-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">Status</th>
              <th className="p-6"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {[
              { name: "The Pearl-Qatar", count: 124, price: "3,500,000", status: "Active" },
              { name: "West Bay", count: 86, price: "4,200,000", status: "Active" },
              { name: "Lusail City", count: 212, price: "2,800,000", status: "Focus" },
              { name: "Msheireb Downtown", count: 45, price: "5,100,000", status: "Active" }
            ].map((loc, i) => (
              <tr key={i} className="hover:bg-luxury-gray/30 transition-colors group">
                <td className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 flex items-center justify-center text-gold">
                      <MapPin size={18} />
                    </div>
                    <span className="font-bold text-luxury-black">{loc.name}</span>
                  </div>
                </td>
                <td className="p-6 font-medium text-gray-500">{loc.count}</td>
                <td className="p-6 font-medium text-gray-500">{loc.price}</td>
                <td className="p-6">
                   <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 ${
                     loc.status === 'Focus' ? 'bg-gold/10 text-gold' : 'bg-green-50 text-green-600'
                   }`}>
                     {loc.status}
                   </span>
                </td>
                <td className="p-6 text-right">
                  <button className="text-gray-300 hover:text-gold transition-colors">
                    <Settings size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LocationsAdminPage
