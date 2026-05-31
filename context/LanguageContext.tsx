'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Locale = 'en' | 'ar'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  dir: 'ltr' | 'rtl'
}

const translations: Record<Locale, Record<string, string>> = {
  en: {
    'nav.properties': 'Properties',
    'nav.locations': 'Locations',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.signin': 'Sign in',
    'nav.listProperty': 'List Your Property',
    'hero.title': 'Discover Your Dream Luxury Home in Qatar',
    'hero.subtitle': 'World-class real estate services for the most discerning clients.',
    'contact.letstalk': "Let's talk",
  },
  ar: {
    'nav.properties': 'عقارات',
    'nav.locations': 'مواقع',
    'nav.services': 'خدمات',
    'nav.about': 'حول',
    'nav.contact': 'اتصل بنا',
    'nav.signin': 'تسجيل الدخول',
    'nav.listProperty': 'أدرج عقارك',
    'hero.title': 'اكتشف منزل أحلامك الفاخر في قطر',
    'hero.subtitle': 'خدمات عقارية عالمية المستوى للعملاء الأكثر تميزاً.',
    'contact.letstalk': 'لنتحدث',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>('en')

  const t = (key: string) => {
    return translations[locale][key] || key
  }

  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.dir = dir
    document.documentElement.lang = locale
  }, [locale, dir])

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
