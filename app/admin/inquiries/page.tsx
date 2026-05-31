import React from 'react'
import { Mail, Phone, Calendar, CheckCircle, Clock } from 'lucide-react'

const InquiriesPage = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-heading mb-2">Daily Inquiries</h1>
          <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">Incoming property requests</p>
        </div>
        <div className="flex space-x-2">
            <button className="px-4 py-2 border border-gray-200 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50">Export CSV</button>
            <button className="px-4 py-2 bg-luxury-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-black/90 transition-all">Today 
              <span className="ml-2 bg-white/20 px-2 py-0.5 rounded">4</span>
            </button>
        </div>
      </div>

      <div className="bg-white border border-gray-100 divide-y divide-gray-50">
        {[
          { name: "John Smith", email: "john@example.com", phone: "+974 5555 1234", interest: "Lusail Penthouse", date: "2 hours ago", status: "unread" },
          { name: "Ali Ahmed", email: "ali@dohacorp.qa", phone: "+974 6666 9876", interest: "West Bay Villa", date: "5 hours ago", status: "unread" },
          { name: "Sarah Williams", email: "s.williams@global.com", phone: "+44 7700 900342", interest: "The Pearl Apartment", date: "Yesterday", status: "replied" },
          { name: "David Chen", email: "david.chen@invest.hk", phone: "+852 9876 5432", interest: "Commercial Building", date: "2 days ago", status: "closed" }
        ].map((item, i) => (
          <div key={i} className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-luxury-gray/50 transition-colors group">
            <div className="flex items-center space-x-4">
              <div className={`w-2 h-2 rounded-full ${item.status === 'unread' ? 'bg-gold' : 'bg-gray-300'}`}></div>
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500 font-medium">
                  <span className="flex items-center"><Mail size={12} className="mr-1" /> {item.email}</span>
                  <span className="flex items-center"><Phone size={12} className="mr-1" /> {item.phone}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 md:mt-0 md:text-right flex flex-col items-start md:items-end space-y-2">
               <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Interested in</span>
               <span className="text-sm font-bold text-luxury-black">{item.interest}</span>
            </div>

            <div className="mt-4 md:mt-0 flex items-center space-x-6">
              <div className="text-right">
                <span className="flex items-center text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
                   <Calendar size={12} className="mr-1" /> {item.date}
                </span>
                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-1 ${
                  item.status === 'unread' ? 'text-gold' : 
                  item.status === 'replied' ? 'text-blue-500' : 'text-gray-400'
                }`}>
                  {item.status}
                </span>
              </div>
              <button className="bg-luxury-black text-white p-3 hover:bg-gold transition-all">
                 <Mail size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InquiriesPage
