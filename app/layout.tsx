import type { Metadata } from 'next'
import { Playfair_Display, Jost } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ContactWidget from '@/components/layout/ContactWidget'
import { Toaster } from 'react-hot-toast'
import { LanguageProvider } from '@/context/LanguageContext'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '700']
})

const jost = Jost({ 
  subsets: ['latin'],
  variable: '--font-jost',
  weight: ['300', '400', '500', '600']
})

export const metadata: Metadata = {
  title: 'Pearl Elite Properties | Luxury Real Estate Qatar',
  description: 'Top-tier luxury real estate agency in Qatar. Discover exclusive properties in The Pearl, Lusail, and West Bay.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${jost.variable} font-body bg-white text-luxury-black antialiased`}>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ContactWidget />
          <Toaster position="bottom-right" />
        </LanguageProvider>
      </body>
    </html>
  )
}
