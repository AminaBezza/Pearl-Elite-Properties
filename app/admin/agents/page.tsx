import React from 'react'
import { Plus, Edit2, Trash2, Mail, Phone, Award } from 'lucide-react'

const AgentsPage = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-heading mb-2">Our Agents</h1>
          <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">Team management</p>
        </div>
        <button className="flex items-center space-x-2 bg-gold text-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gold/90 transition-all">
          <Plus size={16} />
          <span>Add New Agent</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
           { name: "Khalid Abdullah", role: "Elite Specialist", listingCount: 12, rating: 4.9, email: "khalid@pearlelite.qa" },
           { name: "Sonia Petrova", role: "Luxury Rentals", listingCount: 8, rating: 4.8, email: "sonia@pearlelite.qa" },
           { name: "Marcus Thorne", role: "Commercial Advisor", listingCount: 15, rating: 5.0, email: "marcus@pearlelite.qa" }
        ].map((agent, i) => (
          <div key={i} className="bg-white border border-gray-100 group overflow-hidden">
            <div className="relative h-64 bg-gray-100 overflow-hidden">
               <div className="absolute inset-0 bg-luxury-black/20 group-hover:bg-luxury-black/40 transition-all duration-700"></div>
               <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <button className="bg-white p-2 hover:text-gold shadow-lg"><Edit2 size={14} /></button>
                 <button className="bg-white p-2 hover:text-red-500 shadow-lg"><Trash2 size={14} /></button>
               </div>
               <div className="absolute bottom-4 left-4 flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                 <Award size={12} className="text-gold mr-1" /> Agent of the Month
               </div>
            </div>
            <div className="p-6 text-center space-y-4">
              <div>
                <h3 className="text-xl font-heading">{agent.name}</h3>
                <p className="text-gold text-[10px] font-bold uppercase tracking-widest">{agent.role}</p>
              </div>
              
              <div className="grid grid-cols-2 border-y border-gray-50 py-4">
                <div className="border-r border-gray-50">
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest">Listings</span>
                  <span className="font-heading text-lg">{agent.listingCount}</span>
                </div>
                <div>
                  <span className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest">Rating</span>
                  <span className="font-heading text-lg">{agent.rating} <span className="text-xs text-gold">★</span></span>
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <button className="text-gray-400 hover:text-luxury-black transition-colors"><Mail size={18} /></button>
                <button className="text-gray-400 hover:text-luxury-black transition-colors"><Phone size={18} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AgentsPage
