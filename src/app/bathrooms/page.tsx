import { Phone, Bath, ShowerHead, Droplets, Palette, Ruler, CheckCircle, Star, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import GlobalCTA from '@/components/sections/GlobalCTA'

const services = [
  {
    title: 'Complete Bathroom Renovation',
    description: 'Full bathroom transformation from design to completion.',
    icon: Bath,
    highlight: true,
  },
  {
    title: 'Shower Installation',
    description: 'Walk-in showers, power showers, and shower enclosures.',
    icon: ShowerHead,
  },
  {
    title: 'Bathroom Suite Fitting',
    description: 'Professional installation of baths, basins, and toilets.',
    icon: Droplets,
  },
  {
    title: 'Tiling & Finishing',
    description: 'Expert wall and floor tiling with perfect finishing touches.',
    icon: Palette,
  },
]

const bathroomServices = [
  'Shower & power showers',
  'Bath installation & replacement',
  'Toilet & basin fitting',
  'Tiling - walls and floors',
  'Heated towel rails',
  'Underfloor heating',
  'Bathroom radiators',
  'Complete renovations',
  'Bathroom design service',
]

export default function BathroomsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] lg:min-h-[45vh] flex items-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/plumbingpicNew.jpg"
            alt="Professional Bathroom Installation"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 section-container py-8 sm:py-10 lg:py-12">
          <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4">
              TRANSFORM YOUR BATHROOM
            </h1>
            <p className="text-xl md:text-2xl text-brand-orange mb-4">
              PROFESSIONAL INSTALLATION FROM DESIGN TO COMPLETION.
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Whether you're looking for a simple refresh or a complete renovation, our experienced team delivers quality bathroom installations that combine style with functionality.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <div className="bg-white/90 p-3 rounded-md shadow-lg">
                <Image
                  src="/images/1logos.png"
                  alt="Gas Safe Registered"
                  width={140}
                  height={90}
                  className="h-auto w-[140px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            BATHROOM SERVICES
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            From modern shower rooms to traditional bathroom suites, we provide complete 
            bathroom installation services tailored to your needs.
          </p>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-service card-hover-lift group h-full"
              >
                <div className={`mb-4 p-3 rounded-lg w-fit group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 ${
                  service.highlight ? 'bg-brand-orange' : 'bg-brand-blue'
                }`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-gray-600 text-lg italic">
              We treat every home we work in with the same care and attention we would show our own homes, making sure that any mess is fully cleared up once we've finished.
            </p>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-8 sm:py-10 lg:py-12 xl:py-14 bg-gray-50 relative">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Bathroom Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Create your dream bathroom with our comprehensive installation services. 
                From initial design to final finishing touches, we handle everything.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {bathroomServices.map((service) => (
                  <div key={service} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-blue flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="tel:07990806810"
                  className="inline-flex items-center gap-2 px-6 py-3 btn-primary rounded-lg font-semibold"
                >
                  <Phone className="h-4 w-4" />
                  Call for Immediate Help
                </a>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/plumbingTap.jpg"
                alt="Professional Bathroom Services"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <GlobalCTA />
    </>
  )
}