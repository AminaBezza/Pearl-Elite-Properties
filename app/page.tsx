import HeroSection from '@/components/home/HeroSection'
import FeaturedProperties from '@/components/home/FeaturedProperties'
import LocationsSection from '@/components/home/LocationsSection'
import WhyUsSection from '@/components/home/WhyUsSection'
import ServicesSection from '@/components/home/ServicesSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTABand from '@/components/home/CTABand'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div id="home" className="scroll-mt-24">
        <HeroSection />
      </div>
      <div id="properties" className="scroll-mt-24">
        <FeaturedProperties />
      </div>
      <div id="locations" className="scroll-mt-24">
        <LocationsSection />
      </div>
      <div id="about" className="scroll-mt-24">
        <WhyUsSection />
      </div>
      <div id="services" className="scroll-mt-24">
        <ServicesSection />
      </div>
      <TestimonialsSection />
      <div id="contact" className="scroll-mt-24">
        <CTABand />
      </div>
    </div>
  )
}
