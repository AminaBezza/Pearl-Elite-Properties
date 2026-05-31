import React from 'react'

const stats = [
  { label: 'Listings', value: '500+' },
  { label: 'Years Experience', value: '15+' },
  { label: 'QAR Sold', value: '2B+' },
  { label: 'Satisfaction', value: '98%' },
]

const StatsBar = () => {
  return (
    <div className="bg-luxury-black text-white py-12">
      <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center text-center space-y-1">
            <span className="text-3xl lg:text-5xl font-heading text-gold">{stat.value}</span>
            <span className="text-[10px] lg:text-xs uppercase tracking-[0.3em] font-light text-gray-400">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsBar
