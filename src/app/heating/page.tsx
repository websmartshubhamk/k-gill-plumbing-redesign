import { Phone, Flame, Thermometer, Shield, Settings, AlertCircle, CheckCircle, Calendar } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import GlobalCTA from '@/components/sections/GlobalCTA'

const services = [
  {
    title: 'Boiler Installation',
    description: 'New energy-efficient boiler installation with warranty and aftercare.',
    icon: Flame,
    highlight: true,
  },
  {
    title: 'Boiler Servicing',
    description: 'Annual boiler servicing to maintain efficiency and safety.',
    icon: Settings,
  },
  {
    title: 'Boiler Repairs',
    description: 'Emergency boiler repair service for all makes and models.',
    icon: AlertCircle,
    urgent: true,
  },
  {
    title: 'Central Heating',
    description: 'Complete central heating system installation and maintenance.',
    icon: Thermometer,
  },
]

const boilerBrands = [
  'Worcester Bosch',
  'Vaillant',
  'Baxi',
  'Ideal',
  'Viessmann',
  'Glow-worm',
  'Potterton',
  'Alpha',
]

const heatingServices = [
  'Boilers - Installation & Repairs',
  'Radiators - Installation & Repairs',
  'Gas Safety Certificates',
  'Thermostats',
  'Hot Water Cylinders',
  'Electrical Wiring for Heating',
  'Immersion Heaters',
  'Underfloor Heating Installations',
]

export default function HeatingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heating_home.jpg"
            alt="Expert Heating & Boiler Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 section-container py-16 sm:py-20 xl:py-24">
          <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-6 xl:mb-8">
              DON'T GET LEFT IN THE COLD
            </h1>
            <p className="text-xl md:text-2xl xl:text-3xl text-brand-orange mb-4">
              CALL US FOR A PROFESSIONAL & RELIABLE SERVICE.
            </p>
            <p className="text-lg md:text-xl xl:text-2xl text-gray-200 mb-8 xl:mb-10">
              We understand how much of an inconvenience it is to you when your heating breaks down, which is why we offer a swift response.
            </p>
            <div className="mt-6">
              <Image
                src="/images/1logos.png"
                alt="Gas Safe Registered"
                width={120}
                height={80}
                className="h-auto max-w-[120px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            HEATING SERVICES
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            From new boiler installations to emergency repairs, we provide complete 
            heating solutions for your home.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`card ${service.highlight ? 'border-brand-orange' : ''} ${
                  service.urgent ? 'border-emergency' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    service.highlight ? 'bg-brand-orange/10' : 
                    service.urgent ? 'bg-emergency/10' : 'bg-brand-blue/10'
                  }`}>
                    <service.icon className={`h-6 w-6 ${
                      service.highlight ? 'text-brand-orange' :
                      service.urgent ? 'text-emergency' : 'text-brand-blue'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                      {service.urgent && (
                        <span className="ml-2 text-sm text-emergency font-normal">
                          Emergency Service
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
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

      {/* Boiler Brands */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Image
                src="/images/heating_home.jpg"
                alt="Heating and Boiler Services"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We Service All Major Boiler Brands
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our Gas Safe registered engineers are trained to work on all major 
                boiler manufacturers, ensuring expert service regardless of your system.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {boilerBrands.map((brand) => (
                  <div key={brand} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-blue flex-shrink-0" />
                    <span className="text-gray-700">{brand}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 btn-primary rounded-lg font-semibold"
              >
                Get a Boiler Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Complete Heating Solutions
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {heatingServices.map((service) => (
              <div key={service} className="card text-center">
                <CheckCircle className="h-8 w-8 text-brand-blue mx-auto mb-3" />
                <p className="font-medium text-gray-900">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <GlobalCTA />
    </>
  )
}