'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Search, User, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/LanguageContext'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { locale, setLocale, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: t('nav.properties'), href: '/#properties' },
    { name: t('nav.locations'), href: '/#locations' },
    { name: t('nav.services'), href: '/#services' },
    { name: t('nav.about'), href: '/#about' },
    { name: t('nav.contact'), href: '/#contact' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 py-4',
        isScrolled ? 'bg-luxury-black/95 backdrop-blur-md py-3' : 'bg-black/10'
      )}
    >
      <div className="max-w-[1160px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <div className="text-white leading-none text-center">
            <div>
              <span className="font-heading text-lg lg:text-xl font-bold tracking-normal uppercase">Pearl</span>
              <span className="font-light text-gold ml-1 uppercase">Elite</span>
            </div>
            <span className="block text-[7px] font-semibold uppercase tracking-[0.25em]">Properties</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="nav-link text-white text-[10px] font-bold uppercase tracking-[0.18em]">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex items-center space-x-5 rtl:space-x-reverse text-white">
          {/* Sign in Button - Icon Only */}
          <Link href="/admin/login" className="text-white hover:text-gold transition-colors">
            <User size={18} />
          </Link>

          {/* Language Switcher - Icon Only */}
          <button 
            onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
            className="text-white hover:text-gold transition-colors"
          >
            <Globe size={18} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>


      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 bg-luxury-black z-40 lg:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-500',
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-2xl font-heading text-white hover:text-gold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        
        <div className="flex flex-col items-center space-y-4 pt-4 w-full px-8">
           <button 
             onClick={() => { setLocale(locale === 'en' ? 'ar' : 'en'); setIsMobileMenuOpen(false); }}
             className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-white text-luxury-black rounded-lg font-medium"
           >
             <Globe size={20} />
             <span>{locale === 'en' ? 'English' : 'العربية'}</span>
           </button>

           <Link
             href="/admin/login"
             className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-white text-luxury-black rounded-lg font-medium"
             onClick={() => setIsMobileMenuOpen(false)}
           >
             <User size={20} />
             <span>Sign in</span>
           </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
