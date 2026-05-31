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
    'nav.home': 'Home',
    // Navigation
    'nav.properties': 'Properties',
    'nav.locations': 'Locations',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.signin': 'Sign in',
    'nav.listProperty': 'List Your Property',
    
    // Hero Section
    'hero.title': 'Discover Your Dream Luxury Home',
    'hero.subtitle': 'World-class real estate services for the most discerning clients.',
    'hero.cta': "Let's talk",
    'hero.titleLine1': 'Discover Your Dream',
    'hero.titleLine2': 'Luxury Home',
    'home.scroll': 'Scroll',
    
    // Featured Properties
    'featured.selection': 'Our Selection',
    'properties.title': 'Featured Properties',
    'properties.subtitle': 'Handpicked luxury properties across Qatar\'s finest locations',
    'featured.viewAll': 'View All',
    'properties.forSale': 'For Sale',
    'properties.forRent': 'For Rent',
    'properties.beds': 'Beds',
    'properties.baths': 'Baths',
    'properties.sqm': 'sqm',
    'properties.viewDetails': 'View Details',
    
    // Locations
    'locations.title': 'Explore Premium Locations',
    'locations.subtitle': 'Discover Qatar\'s most exclusive neighborhoods',
    'locations.empty': 'No properties found for this filter.',
    
    // Services
    'services.title': 'Our Services',
    'services.service1': 'Property Sales',
    'services.service2': 'Luxury Rentals',
    'services.service3': 'Property Management',
    'services.service4': 'Investment Advisory',
    'services.service5': 'Valuations',
    'services.service6': 'Relocation Services',
    
    // Why Us
    'whyus.title': 'Elevating Real Estate Excellence in Qatar',
    'whyus.heading': 'Elevating Real Estate Excellence in Qatar',
    'whyus.desc': 'Pearl Elite Properties is more than a real estate agency. We are your dedicated partners in navigating the sophisticated Qatari property landscape, offering personalized service that exceeds expectations at every turn.',
    'whyus.learnmore': 'Learn More About Us',
    'whyus.feature1': 'Premium Security',
    'whyus.feature1desc': 'Verified listings and secure transactions always.',
    'whyus.feature2': 'Award Winning',
    'whyus.feature2desc': 'Recognized as Qatar best luxury agency 3 years running.',
    'whyus.feature3': 'Expert Agents',
    'whyus.feature3desc': 'Multi-lingual team with deep local market knowledge.',
    'whyus.feature4': 'Exclusive Access',
    'whyus.feature4desc': 'Off-market opportunities you wont find anywhere else.',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to Find Your Dream Property?',
    'contact.desc': 'Our expert team is available 24/7 to assist you with any inquiries about buying, renting, or listing properties in Qatar\'s most prestigious locations.',
    'contact.phone': 'Call Us',
    'contact.email': 'Email Us',
    'contact.visit': 'Visit Us',
    'contact.sendmessage': 'Send a Message',
    'contact.support': '24/7 Support',
    'contact.supportdesc': 'Our team is available around the clock to answer your questions.',
    'contact.callus': 'Call Us',
    'contact.emailus': 'Email Us',
    'contact.visitus': 'Visit Us',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.notrobot': 'Je ne suis pas un robot',
    'contact.form.send': 'Send Message',
    'contact.office': 'Our Office',
    'contact.hours': 'Office Hours',
    'contact.follow': 'Follow Us',
    'contact.hours1': 'Sunday - Thursday',
    'contact.hours1time': '9:00 AM - 6:00 PM',
    'contact.hours2': 'Saturday',
    'contact.hours2time': '10:00 AM - 4:00 PM',
    'contact.hours3': 'Friday',
    'contact.hours3time': 'Closed',
    
    // About
    'about.story': 'Our Story',
    'about.title': 'Premium Real Estate Excellence',
    'about.desc': 'Pearl Elite Properties is more than just a real estate agency. We are your dedicated partners in navigating the sophisticated Qatari property landscape, offering personalized service that exceeds expectations at every turn.',
    'about.desc2': 'With over a decade of experience in Qatar\'s luxury real estate market, our team has facilitated hundreds of successful transactions across The Pearl, Lusail, West Bay, and other premier locations. We combine deep local market knowledge with international expertise to serve both domestic and expatriate clients.',
    'about.desc3': 'Our mission is simple: to provide verified listings, secure transactions, and exclusive access to off-market opportunities that reflect our clients\' lifestyle and investment goals. Every property, every client, and every transaction receives our unwavering commitment to excellence.',
    'about.values': 'Our Core Values',
    'about.value1': 'Integrity in every transaction',
    'about.value2': 'Unmatched market expertise',
    'about.value3': 'Personalized client service',
    'about.value4': 'Exclusive access opportunities',
    'about.testimonials': 'Testimonials',
    'about.testimonialssubtitle': 'What Our Clients Say',
    'about.ready': 'Ready to Find Your Dream Property?',
    'about.readydesc': 'Let our expert team guide you through Qatar\'s most exclusive real estate opportunities.',
    'about.browseprops': 'Browse Properties',
    'about.contactus': 'Contact Us',

    // Admin
    'admin.overview': 'Overview',
    'admin.dashboard': 'Dashboard',
    'admin.totalProperties': 'Total Properties',
    'admin.activeInquiries': 'Active Inquiries',
    'admin.websiteViews': 'Website Views',
    'admin.activeAgents': 'Active Agents',
    'admin.recentInquiries': 'Recent Inquiries',
    'admin.viewAll': 'View All',
    'admin.propertyPerformance': 'Property Performance',
    'admin.salesVsTarget': 'Sales vs Target',
    'admin.monthlyGrowth': 'Monthly Growth',
    'admin.growthDesc': 'Up by 15% from last month',
  },
  ar: {
    'nav.home': 'الرئيسية',
    // Navigation
    'nav.properties': 'العقارات',
    'nav.locations': 'المواقع',
    'nav.services': 'الخدمات',
    'nav.about': 'حول',
    'nav.contact': 'اتصل بنا',
    'nav.signin': 'تسجيل الدخول',
    'nav.listProperty': 'أدرج عقارك',
    
    // Hero Section
    'hero.title': 'اكتشف منزل أحلامك الفاخر',
    'hero.subtitle': 'خدمات عقارية عالمية المستوى للعملاء الأكثر تمييزاً',
    'hero.cta': 'دعنا نتحدث',
    'hero.titleLine1': 'اكتشف',
    'hero.titleLine2': 'منزل أحلامك الفاخر',
    'home.scroll': 'مرر للأسفل',
    
    // Featured Properties
    'featured.selection': 'اختياراتنا',
    'properties.title': 'العقارات المختارة',
    'properties.subtitle': 'عقارات فاخرة مختارة بعناية في أفضل مواقع قطر',
    'featured.viewAll': 'عرض الكل',
    'properties.forSale': 'للبيع',
    'properties.forRent': 'للإيجار',
    'properties.beds': 'غرف نوم',
    'properties.baths': 'حمامات',
    'properties.sqm': 'متر مربع',
    'properties.viewDetails': 'عرض التفاصيل',
    
    // Locations
    'locations.title': 'استكشف المواقع المميزة',
    'locations.subtitle': 'اكتشف أحياء قطر الأكثر حصرية',
    'locations.empty': 'لم يتم العثور على عقارات لهذا الفلتر.',
    
    // Services
    'services.title': 'خدماتنا',
    'services.service1': 'بيع العقارات',
    'services.service2': 'الإيجار الفاخر',
    'services.service3': 'إدارة العقارات',
    'services.service4': 'استشارات الاستثمار',
    'services.service5': 'التقييمات',
    'services.service6': 'خدمات النقل',
    
    // Why Us
    'whyus.title': 'رفع معايير التميز العقاري في قطر',
    'whyus.heading': 'رفع معايير التميز العقاري في قطر',
    'whyus.desc': 'بيرل إيليت برويرتيز ليست مجرد وكالة عقارية. نحن شركاؤك المخصصون في التنقل عبر سوق العقارات القطري المتطور، مقدمين خدمة شخصية تتجاوز التوقعات في كل خطوة.',
    'whyus.learnmore': 'اعرف المزيد عنا',
    'whyus.feature1': 'الأمان المميز',
    'whyus.feature1desc': 'قوائم موثوقة ومعاملات آمنة دائماً',
    'whyus.feature2': 'حائز على جوائز',
    'whyus.feature2desc': 'تم الاعتراف به كأفضل وكالة عقارات فاخرة في قطر لمدة 3 سنوات متتالية',
    'whyus.feature3': 'وكلاء متخصصون',
    'whyus.feature3desc': 'فريق متعدد اللغات مع معرفة عميقة بالسوق المحلي',
    'whyus.feature4': 'وصول حصري',
    'whyus.feature4desc': 'فرص غير معروضة للبيع لن تجدها في أي مكان آخر',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'هل أنت مستعد للعثور على منزل أحلامك؟',
    'contact.desc': 'فريقنا المتخصص متاح 24/7 للإجابة على أي استفسارات حول شراء أو تأجير أو بيع العقارات في أكثر المواقع المرموقة في قطر',
    'contact.phone': 'اتصل بنا',
    'contact.email': 'راسلنا',
    'contact.visit': 'زرنا',
    'contact.sendmessage': 'إرسال رسالة',
    'contact.support': 'دعم 24/7',
    'contact.supportdesc': 'فريقنا متاح على مدار الساعة للإجابة على أسئلتك',
    'contact.callus': 'اتصل بنا',
    'contact.emailus': 'راسلنا',
    'contact.visitus': 'زرنا',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'عنوان بريد إلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.message': 'الرسالة',
    'contact.form.notrobot': 'أنا لست روبوت',
    'contact.form.send': 'إرسال الرسالة',
    'contact.office': 'مكتبنا',
    'contact.hours': 'ساعات العمل',
    'contact.follow': 'تابعنا',
    'contact.hours1': 'الأحد - الخميس',
    'contact.hours1time': '9:00 صباحاً - 6:00 مساءً',
    'contact.hours2': 'السبت',
    'contact.hours2time': '10:00 صباحاً - 4:00 مساءً',
    'contact.hours3': 'الجمعة',
    'contact.hours3time': 'مغلق',
    
    // About
    'about.story': 'قصتنا',
    'about.title': 'التميز العقاري المميز',
    'about.desc': 'بيرل إيليت برويرتيز ليست مجرد وكالة عقارية. نحن شركاؤك المخصصون في التنقل عبر سوق العقارات القطري المتطور، مقدمين خدمة شخصية تتجاوز التوقعات في كل خطوة',
    'about.desc2': 'مع أكثر من عقد من الخبرة في سوق العقارات الفاخرة في قطر، سهلنا مئات المعاملات الناجحة عبر اللؤلؤة ولوسيل وويست باي والمواقع الأخرى المرموقة. نجمع بين المعرفة العميقة بالسوق المحلي والخبرة الدولية لخدمة العملاء المحليين والمغتربين',
    'about.desc3': 'مهمتنا بسيطة: توفير قوائم موثوقة ومعاملات آمنة والوصول الحصري إلى فرص غير معروضة للبيع تعكس نمط حياة أهدافك الاستثمارية. كل عقار وكل عميل وكل معاملة يتلقى التزامنا الثابت بالتميز',
    'about.values': 'قيمنا الأساسية',
    'about.value1': 'النزاهة في كل معاملة',
    'about.value2': 'خبرة السوق غير المتطابقة',
    'about.value3': 'خدمة العملاء الشخصية',
    'about.value4': 'فرص الوصول الحصري',
    'about.testimonials': 'شهادات العملاء',
    'about.testimonialssubtitle': 'ما يقوله عملاؤنا',
    'about.ready': 'هل أنت مستعد للعثور على منزل أحلامك؟',
    'about.readydesc': 'دع فريقنا المتخصص يرشدك عبر أكثر فرص العقارات حصرية في قطر',
    'about.browseprops': 'تصفح العقارات',
    'about.contactus': 'اتصل بنا',

    // Admin
    'admin.overview': 'نظرة عامة',
    'admin.dashboard': 'لوحة التحكم',
    'admin.totalProperties': 'إجمالي العقارات',
    'admin.activeInquiries': 'الاستفسارات النشطة',
    'admin.websiteViews': 'مشاهدات الموقع',
    'admin.activeAgents': 'الوكلاء النشطون',
    'admin.recentInquiries': 'آخر الاستفسارات',
    'admin.viewAll': 'عرض الكل',
    'admin.propertyPerformance': 'أداء العقارات',
    'admin.salesVsTarget': 'المبيعات مقابل الهدف',
    'admin.monthlyGrowth': 'النمو الشهري',
    'admin.growthDesc': 'ارتفع بنسبة 15% عن الشهر الماضي',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === 'undefined') return 'en'

    const savedLocale = window.localStorage.getItem('locale')
    return savedLocale === 'ar' ? 'ar' : 'en'
  })

  const t = (key: string) => {
    return translations[locale][key] || key
  }

  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.dir = dir
    document.documentElement.lang = locale
    window.localStorage.setItem('locale', locale)
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
