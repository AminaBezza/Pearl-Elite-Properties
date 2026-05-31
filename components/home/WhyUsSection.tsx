import React from 'react'
import { ShieldCheck, Award, Users, Search } from 'lucide-react'

const features = [
  { icon: <ShieldCheck size={32} />, title: 'Premium Security', desc: 'Verified listings and secure transactions always.' },
  { icon: <Award size={32} />, title: 'Award Winning', desc: 'Recognized as Qatar best luxury agency 3 years running.' },
  { icon: <Users size={32} />, title: 'Expert Agents', desc: 'Multi-lingual team with deep local market knowledge.' },
  { icon: <Search size={32} />, title: 'Exclusive Access', desc: 'Off-market opportunities you wont find anywhere else.' },
]

const WhyUsSection = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Text Content */}
        <div className="lg:w-1/2 section-padding px-4 sm:px-8 lg:px-24 flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-gold text-sm tracking-[0.2em] uppercase">Why Choose Us</h3>
            <h2 className="text-3xl lg:text-5xl leading-tight">Elevating Real Estate <br /> Excellence in Qatar</h2>
          </div>
          <p className="text-gray-500 leading-relaxed">
            Pearl Elite Properties is more than a real estate agency. We are your dedicated partners in navigating the sophisticated Qatari property landscape, offering personalized service that exceeds expectations at every turn.
          </p>
          <div className="pt-4">
            <button className="btn-outline">Learn More About Us</button>
          </div>
        </div>

        {/* Right: Grid Cards */}
        <div className="lg:w-1/2 bg-luxury-black section-padding px-4 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 space-y-4 hover:border-gold/50 transition-colors">
              <div className="text-gold">{f.icon}</div>
              <h4 className="text-white text-lg font-heading">{f.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection
