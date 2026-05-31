import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  role: string
}

const AboutPage = () => {
  const testimonials: Testimonial[] = [
    {
      quote: '"Pearl Elite Properties provided exceptional service. Their knowledge of the Lusail market saved me months of research."',
      name: 'James Wilson',
      role: 'Investor',
    },
    {
      quote: '"The most professional agency I have worked with in Doha. They managed my property sale with absolute discretion and efficiency."',
      name: 'Sarah Al-Thani',
      role: 'Villa Owner',
    },
    {
      quote: '"Finding a home in a new country is stressful, but the team made it feel effortless. Highly recommend their relocation team."',
      name: 'Michael Chen',
      role: 'Expat Client',
    },
  ]

  return (
    <div className="w-full">
      {/* About Content */}
      <section className="section-padding bg-white pt-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-gold text-sm tracking-[0.2em] uppercase">Our Story</h3>
                <h2 className="text-4xl font-heading">Premium Real Estate Excellence</h2>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Pearl Elite Properties is more than just a real estate agency. We are your dedicated partners in navigating the sophisticated Qatari property landscape, offering personalized service that exceeds expectations at every turn.
                </p>
                
                <p>
                  With over a decade of experience in Qatar's luxury real estate market, our team has facilitated hundreds of successful transactions across The Pearl, Lusail, West Bay, and other premier locations. We combine deep local market knowledge with international expertise to serve both domestic and expatriate clients.
                </p>
                
                <p>
                  Our mission is simple: to provide verified listings, secure transactions, and exclusive access to off-market opportunities that reflect our clients' lifestyle and investment goals. Every property, every client, and every transaction receives our unwavering commitment to excellence.
                </p>
              </div>

              <div className="pt-4 space-y-3">
                <h4 className="font-heading text-lg">Our Core Values</h4>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="text-gray-600">Integrity in every transaction</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="text-gray-600">Unmatched market expertise</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="text-gray-600">Personalized client service</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                    <span className="text-gray-600">Exclusive access opportunities</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-96 lg:h-full min-h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=900&q=80"
                alt="Pearl Elite Properties Office"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-gold text-sm tracking-[0.2em] uppercase">Testimonials</h3>
            <h2 className="text-4xl lg:text-5xl font-heading">What Our Clients Say</h2>
          </div>

          {/* Decorative Line */}
          <div className="flex justify-center gap-6 mb-16">
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent to-gold"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-gold to-transparent"></div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-black/50 border-2 border-gold/70 p-8 space-y-4 hover:border-gold hover:bg-gold/10 transition-all duration-500 rounded-2xl group cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:shadow-gold/50 backdrop-blur-sm"
              >
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white italic leading-relaxed group-hover:text-white transition-colors">
                  {testimonial.quote}
                </p>

                {/* Client Info */}
                <div className="pt-4 border-t border-gold/20">
                  <p className="font-heading text-white">{testimonial.name}</p>
                  <p className="text-gold text-xs tracking-wider uppercase font-bold">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-stone-100 to-stone-50">
        <div className="container-custom text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-heading">Ready to Find Your Dream Property?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let our expert team guide you through Qatar's most exclusive real estate opportunities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/properties" className="btn-gold">
              Browse Properties
            </a>
            <a href="/#contact" className="btn-outline">
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
