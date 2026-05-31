'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ContactWidget from './ContactWidget'

interface LayoutWrapperProps {
  children: React.ReactNode
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const pathname = usePathname()
  
  // Pages qui ne doivent pas afficher le navbar, footer, et contact widget
  const hideLayoutPages = ['/admin/login', '/admin/signup', '/admin/forgot-password']
  const shouldHideLayout = hideLayoutPages.some(page => pathname?.startsWith(page))

  if (shouldHideLayout) {
    return (
      <main>
        {children}
      </main>
    )
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ContactWidget />
    </>
  )
}

export default LayoutWrapper
