import React from 'react'
import { Save, Shield, Bell, Globe, Mail } from 'lucide-react'

const SettingsPage = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-heading mb-2">Platform Settings</h1>
          <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">Configuration & Identity</p>
        </div>
        <button className="flex items-center space-x-2 bg-gold text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gold/90 transition-all shadow-lg shadow-gold/20">
          <Save size={16} />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Navigation */}
        <div className="lg:col-span-1 space-y-2">
            {[
                { label: 'General Info', icon: Globe, active: true },
                { label: 'Security', icon: Shield, active: false },
                { label: 'Notifications', icon: Bell, active: false },
                { label: 'Email Templates', icon: Mail, active: false }
            ].map((item, i) => (
                <button 
                  key={i} 
                  className={`w-full flex items-center space-x-4 p-4 text-[11px] font-bold uppercase tracking-[0.2em] border-l-2 transition-all ${
                    item.active ? 'border-gold bg-white text-luxury-black shadow-sm' : 'border-transparent text-gray-400 hover:text-luxury-black hover:bg-gray-50'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
            ))}
        </div>

        {/* Form Content */}
        <div className="lg:col-span-2 space-y-8">
            <div className="bg-white border border-gray-100 p-8 space-y-8">
                <div className="space-y-6">
                    <h3 className="text-xl font-heading border-b border-gray-50 pb-4">Brand Identity</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Site Title</label>
                            <input type="text" defaultValue="Pearl Elite Properties" className="w-full border border-gray-100 p-3 text-sm focus:border-gold outline-none" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Tagline</label>
                            <input type="text" defaultValue="Dohas Premier Luxury Real Estate" className="w-full border border-gray-100 p-3 text-sm focus:border-gold outline-none" />
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-heading border-b border-gray-50 pb-4">Contact Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Admin Email</label>
                            <input type="email" defaultValue="admin@pearlelite.qa" className="w-full border border-gray-100 p-3 text-sm focus:border-gold outline-none" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Support Phone</label>
                          <input type="text" defaultValue="+213 676 346 072" className="w-full border border-gray-100 p-3 text-sm focus:border-gold outline-none" />
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-heading border-b border-gray-50 pb-4">Social Media Links</h3>
                    <div className="space-y-4">
                        {['Instagram', 'Facebook', 'LinkedIn'].map(social => (
                            <div key={social} className="flex items-center space-x-4">
                                <span className="w-24 text-[10px] font-bold uppercase tracking-widest text-gray-400">{social}</span>
                                <input type="text" placeholder={`https://${social.toLowerCase()}.com/pearlelite`} className="flex-1 border border-gray-100 p-3 text-sm focus:border-gold outline-none" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-red-50/30 border border-red-100 p-8 flex justify-between items-center">
                <div>
                   <h3 className="text-red-900 font-bold">Maintenance Mode</h3>
                   <p className="text-red-700/70 text-sm font-medium">Temporarily disable the public website.</p>
                </div>
                <button className="bg-red-500 text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-red-600 transition-all">Enable</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
