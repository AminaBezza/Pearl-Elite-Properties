import React from 'react'
import Link from 'next/link'

const CTABand = () => {
  return (
    <section className="bg-gold py-16">
      <div className="container-custom flex flex-col lg:flex-row items-center justify-between text-center lg:text-left space-y-8 lg:space-y-0">
        <div className="space-y-2">
          <h2 className="text-3xl lg:text-4xl text-white font-heading">Ready to find your next luxury home?</h2>
          <p className="text-luxury-black/60 font-medium">Contact our expert agents today for a private consultation.</p>
        </div>
        <Link href="/contact" className="bg-luxury-black text-white px-10 py-4 uppercase text-sm font-bold tracking-widest hover:bg-white hover:text-luxury-black transition-all">
          Get In Touch Now
        </Link>
      </div>
    </section>
  )
}

export default CTABand
