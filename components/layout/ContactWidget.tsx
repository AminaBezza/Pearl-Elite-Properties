'use client'

import React, { useState } from 'react'
import { MessageCircle, Instagram, Mail, X, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false)

  const contacts = [
    {
      label: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/213676346072',
      color: 'bg-luxury-black',
    },
    {
      label: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/meeena.aa',
      color: 'bg-luxury-black',
    },
    {
      label: 'Email',
      icon: Mail,
      href: 'mailto:bezzaamina31@gmail.com',
      color: 'bg-luxury-black',
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover */}
      <div
        className={cn(
          'mb-4 w-64 bg-white/90 backdrop-blur-md rounded-lg shadow-2xl p-4 transition-all duration-300 origin-bottom-right border border-white/40',
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'
        )}
      >
        <div className="flex items-center justify-between mb-6 px-2">
          <h3 className="font-heading text-lg font-bold">Let's talk</h3>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-luxury-black transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center justify-center space-x-3 w-full py-3.5 rounded-md text-white font-bold transition-all hover:scale-[1.02] active:scale-[0.98]',
                contact.color
              )}
            >
              <contact.icon size={20} />
              <span className="text-sm tracking-wide">{contact.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 overflow-hidden border-2 border-gold/40 hover:border-gold',
          isOpen ? 'bg-luxury-black' : 'bg-gradient-to-br from-gold to-yellow-600 hover:from-gold hover:to-yellow-700 hover:shadow-2xl'
        )}
      >
        {isOpen ? (
          <X size={28} className="text-white" />
        ) : (
          <MessageSquare size={28} className="text-white" />
        )}
      </button>
    </div>
  )
}

export default ContactWidget
