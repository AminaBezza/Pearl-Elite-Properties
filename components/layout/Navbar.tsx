'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Search, Globe, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/LanguageContext'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const languageMenuRef = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()
  const { locale, setLocale, t } = useLanguage()

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'ar', label: 'العربية' },
  ] as const

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setIsLanguageMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { name: t('nav.home'), href: '/#home' },
    { name: t('nav.properties'), href: '/#properties' },
    { name: t('nav.locations'), href: '/#locations' },
    { name: t('nav.services'), href: '/#services' },
    { name: t('nav.about'), href: '/#about' },
    { name: t('nav.contact'), href: '/#contact' },
  ]

  const isHomePage = pathname === '/'
  const isLightNavbar = isHomePage && !isScrolled
  const navbarClassName = isLightNavbar
    ? 'bg-black/22 backdrop-blur-md py-4 shadow-sm border-b border-white/10'
    : 'bg-luxury-black/95 backdrop-blur-md py-3 shadow-lg'

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 py-4',
        navbarClassName
      )}
    >
      <div className="max-w-[1160px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <div className={cn('leading-none text-center', isLightNavbar ? 'text-luxury-black' : 'text-white')}>
            <div>
              <span suppressHydrationWarning className="font-heading text-2xl lg:text-3xl font-bold tracking-normal uppercase">{t('brand.pearl')}</span>
              <span suppressHydrationWarning className="font-light text-gold ml-2 uppercase text-2xl lg:text-3xl">{t('brand.elite')}</span>
            </div>
            <span suppressHydrationWarning className="block text-sm font-semibold uppercase tracking-[0.25em] mt-0.5">{t('brand.properties')}</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'nav-link text-[10px] font-bold uppercase tracking-[0.18em] transition-colors',
                isLightNavbar ? 'text-luxury-black hover:text-gold' : 'text-white hover:text-gold'
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className={cn('hidden lg:flex items-center space-x-5 rtl:space-x-reverse', isLightNavbar ? 'text-luxury-black' : 'text-white')}>
          <div className="relative" ref={languageMenuRef}>
            <button
              type="button"
              onClick={() => setIsLanguageMenuOpen((current) => !current)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors hover:border-gold',
                isLightNavbar
                  ? 'border border-black/10 bg-white text-luxury-black hover:bg-gray-50'
                  : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
              )}
            >
              <Globe size={16} />
              <span>{locale === 'en' ? 'English' : 'العربية'}</span>
              <ChevronDown size={14} className={cn('transition-transform', isLanguageMenuOpen && 'rotate-180')} />
            </button>

            {isLanguageMenuOpen ? (
              <div className={cn('absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-2xl shadow-2xl backdrop-blur-md', isLightNavbar ? 'border border-black/10 bg-white' : 'border border-white/10 bg-luxury-black/95')}>
                {languageOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setLocale(option.value)
                      setIsLanguageMenuOpen(false)
                    }}
                    className={cn(
                      'flex w-full items-center justify-between px-4 py-3 text-sm text-left transition-colors hover:bg-white/10',
                      isLightNavbar
                        ? locale === option.value
                          ? 'text-gold hover:bg-gray-50'
                          : 'text-luxury-black hover:bg-gray-50'
                        : locale === option.value
                          ? 'text-gold'
                          : 'text-white'
                    )}
                  >
                    <span>{option.label}</span>
                    {locale === option.value ? <span className="text-[10px] uppercase tracking-[0.25em]">OK</span> : null}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
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
           <div className="w-full space-y-3">
             <p className="text-center text-xs uppercase tracking-[0.35em] text-white/50">Language</p>
             <div className="grid grid-cols-2 gap-3">
               {languageOptions.map((option) => (
                 <button
                   key={option.value}
                   type="button"
                   onClick={() => {
                     setLocale(option.value)
                     setIsMobileMenuOpen(false)
                   }}
                   className={cn(
                     'flex items-center justify-center gap-2 rounded-xl border px-4 py-4 font-medium transition-colors',
                     locale === option.value
                       ? 'border-gold bg-gold text-luxury-black'
                       : 'border-white/15 bg-white/5 text-white hover:border-gold/70 hover:bg-white/10'
                   )}
                 >
                   <Globe size={16} />
                   <span>{option.label}</span>
                 </button>
               ))}
             </div>
           </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
