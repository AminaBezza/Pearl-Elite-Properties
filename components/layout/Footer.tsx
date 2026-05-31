import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-luxury-black text-white pt-20 pb-10">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
        {/* Brand */}
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <span className="font-heading text-2xl font-bold">PEARL</span>
            <span className="font-light text-gold ml-1 text-2xl">ELITE</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Defining excellence in Qatar's luxury real estate market since 2009. We specialize in premium properties across The Pearl, Lusail, and West Bay.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-gold transition-colors"><Linkedin size={20} /></Link>
            <Link href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></Link>
          </div>
        </div>

        {/* Company */}
        <div className="space-y-6">
          <h3 className="text-lg font-heading text-gold">Company</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Our Services</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Discover */}
        <div className="space-y-6">
          <h3 className="text-lg font-heading text-gold">Discover</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/properties?type=apartment" className="hover:text-white transition-colors">Apartments for Sale</Link></li>
            <li><Link href="/properties?type=villa" className="hover:text-white transition-colors">Luxury Villas</Link></li>
            <li><Link href="/locations/the-pearl" className="hover:text-white transition-colors">The Pearl Properties</Link></li>
            <li><Link href="/locations/lusail" className="hover:text-white transition-colors">Lusail City</Link></li>
            <li><Link href="/properties?status=rent" className="hover:text-white transition-colors">Rentals</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="text-lg font-heading text-gold">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-gold shrink-0" />
              <span>Elite Tower, Floor 22, West Bay, Doha, Qatar</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-gold shrink-0" />
              <span>+974 4444 0000</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-gold shrink-0" />
              <span>info@pearlelite.qa</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container-custom pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
        <p>&copy; 2026 Pearl Elite Properties. All Rights Reserved.</p>
        <p>Managed by Gold Standard Agencies</p>
      </div>
    </footer>
  )
}

export default Footer
