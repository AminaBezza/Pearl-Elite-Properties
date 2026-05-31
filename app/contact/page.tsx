import React from 'react'
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react'

const ContactPage = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-luxury-black text-white py-20 lg:py-32">
        <div className="container-custom text-center space-y-4">
          <h3 className="text-gold text-sm tracking-[0.3em] uppercase">Connect With Us</h3>
          <h1 className="text-4xl lg:text-7xl font-heading">Contact</h1>
        </div>
      </div>

      <div className="container-custom py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Form */}
          <div className="lg:w-3/5 space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-heading">Send a Message</h2>
              <p className="text-gray-500 max-w-lg">
                Whether you are looking to buy, rent or list your property, our team is ready to assist you.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                <input type="text" className="w-full border border-gray-100 p-4 text-sm focus:border-gold outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                <input type="email" className="w-full border border-gray-100 p-4 text-sm focus:border-gold outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                <input type="tel" className="w-full border border-gray-100 p-4 text-sm focus:border-gold outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Subject</label>
                <select className="w-full border border-gray-100 p-4 text-sm focus:border-gold outline-none">
                  <option>Buying Interest</option>
                  <option>Rental Inquiry</option>
                  <option>List My Property</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Your Message</label>
                <textarea rows={6} className="w-full border border-gray-100 p-4 text-sm focus:border-gold outline-none"></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="btn-gold px-12 py-4">Send Message</button>
              </div>
            </form>
          </div>

          {/* Info */}
          <div className="lg:w-2/5 space-y-12">
            <div className="bg-luxury-gray p-10 lg:p-16 space-y-10">
              <div className="space-y-6">
                <h3 className="text-lg font-heading border-b border-gray-200 pb-4">Our Office</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-gold shrink-0" size={20} />
                    <p className="text-sm text-gray-500 leading-relaxed font-medium">
                      Elite Tower, Floor 22, <br />
                      West Bay, Doha, Qatar
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="text-gold" size={20} />
                    <p className="text-sm text-gray-500 font-medium">+974 4444 0000</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="text-gold" size={20} />
                    <p className="text-sm text-gray-500 font-medium">info@pearlelite.qa</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-heading border-b border-gray-200 pb-4">Office Hours</h3>
                <ul className="space-y-2 text-sm text-gray-500 font-medium">
                  <li className="flex justify-between"><span>Sunday - Thursday</span> <span>9:00 AM - 6:00 PM</span></li>
                  <li className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 4:00 PM</span></li>
                  <li className="flex justify-between text-gray-300"><span>Friday</span> <span>Closed</span></li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-heading border-b border-gray-200 pb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 border border-gray-200 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-white transition-all">
                      <Icon size={18} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="h-64 bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 italic text-sm">
               Google Map Embed API
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
