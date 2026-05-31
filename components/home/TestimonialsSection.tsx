import React from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  { name: 'James Wilson', role: 'Investor', text: 'Pearl Elite Properties provided exceptional service. Their knowledge of the Lusail market saved me months of research.' },
  { name: 'Sarah Al-Thani', role: 'Villa Owner', text: 'The most professional agency I have worked with in Doha. They managed my property sale with absolute discretion and efficiency.' },
  { name: 'Michael Chen', role: 'Expat Client', text: 'Finding a home in a new country is stressful, but the team made it feel effortless. Highly recommend their relocation team.' },
]

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-luxury-gray">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-gold text-sm tracking-[0.2em] uppercase">Testimonials</h3>
          <h2 className="text-3xl lg:text-5xl">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-10 relative border-t-4 border-gold">
              <Quote className="text-gold/20 absolute top-8 right-8" size={64} />
              <div className="relative z-10 space-y-6">
                <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-heading text-lg">{t.name}</h4>
                  <span className="text-xs text-gold uppercase tracking-widest">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
