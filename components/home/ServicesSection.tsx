import React from 'react'

const services = [
  { 
    id: '01', 
    title: 'Property Sales', 
    desc: 'Expert guidance for buying premium residential and commercial assets.' 
  },
  { 
    id: '02', 
    title: 'Luxury Rentals', 
    desc: 'Exclusive leasing opportunities in Qatar most prestigious towers.' 
  },
  { 
    id: '03', 
    title: 'Property Management', 
    desc: 'Complete hassle-free management for property owners.' 
  },
  { 
    id: '04', 
    title: 'Investment Advisory', 
    desc: 'Strategic advice for high-yield real estate investments in Doha.' 
  },
  { 
    id: '05', 
    title: 'Valuations', 
    desc: 'Accurate market valuations based on real-time data and trends.' 
  },
  { 
    id: '06', 
    title: 'Relocation Services', 
    desc: 'Smooth transition services for international clients moving to Qatar.' 
  },
]

const ServicesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="space-y-4">
            <h3 className="text-gold text-sm tracking-[0.2em] uppercase">What we do</h3>
            <h2 className="text-3xl lg:text-5xl">Our Premium Services</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div 
              key={s.id} 
              className="group relative bg-stone-100 border-2 border-stone-200 rounded-xl p-8 space-y-4 hover:shadow-xl hover:border-gold hover:bg-gold/5 transition-all duration-500"
            >
              {/* Numbered Circle Badge */}
              <div className="absolute -top-6 -left-6 w-14 h-14 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-gold/50 transition-all duration-500">
                {s.id}
              </div>

              {/* Title */}
              <h4 className="text-lg font-heading text-luxury-black group-hover:text-gold transition-colors pt-2">
                {s.title}
              </h4>

              {/* Description */}
              <p className="text-gray-600 group-hover:text-gray-700 text-sm leading-relaxed transition-colors">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
