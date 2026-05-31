import React from 'react'

interface StatCardProps {
  label: string
  value: string
  icon: React.ReactNode
  delta: string
  positive?: boolean
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon, delta, positive }) => {
  return (
    <div className="bg-white p-6 lg:p-8 border border-gray-100 shadow-sm space-y-4 group hover:border-gold transition-colors">
      <div className="flex justify-between items-start">
        <div className="text-luxury-black bg-luxury-gray p-3 group-hover:bg-gold group-hover:text-white transition-all">
          {icon}
        </div>
        <span className={`text-[10px] font-bold px-2 py-0.5 ${positive ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
          {delta}
        </span>
      </div>
      <div>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">{label}</p>
        <p className="text-3xl font-heading">{value}</p>
      </div>
    </div>
  )
}

export default StatCard
