import React from 'react'

const services = [
  { id: '01', title: 'Property Sales', desc: 'Expert guidance for buying premium residential and commercial assets.' },
  { id: '02', title: 'Luxury Rentals', desc: 'Exclusive leasing opportunities in Qatar most prestigious towers.' },
  { id: '03', title: 'Property Management', desc: 'Complete hassle-free management for property owners.' },
  { id: '04', title: 'Investment Advisory', desc: 'Strategic advice for high-yield real estate investments in Doha.' },
  { id: '05', title: 'Valuations', desc: 'Accurate market valuations based on real-time data and trends.' },
  { id: '06', title: 'Relocation Services', desc: 'Smooth transition services for international clients moving to Qatar.' },
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.id} className="group border border-gray-100 p-12 space-y-6 hover:bg-luxury-black transition-all duration-500">
              <span className="text-5xl font-heading text-gold/20 group-hover:text-gold transition-colors block">
                {s.id}
              </span>
              <h4 className="text-xl font-heading group-hover:text-white transition-colors">{s.title}</h4>
              <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed transition-colors">
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
