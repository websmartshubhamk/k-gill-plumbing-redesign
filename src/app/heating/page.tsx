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
    title: 'Boiler Repair',
    description: 'Fast and reliable boiler repairs by Gas Safe registered engineers.',
    icon: Settings,
    urgent: true,
  },
  {
    title: 'Annual Servicing',
    description: 'Keep your boiler running efficiently with annual servicing.',
    icon: Calendar,
  },
  {
    title: 'Central Heating',
    description: 'Complete central heating system installation and maintenance.',
    icon: Thermometer,
  },
]

const heatingServices = [
  {
    title: 'Boilers - Installation & Repairs',
    description: 'Expert boiler installation and repair services to keep your home warm and efficient.'
  },
  {
    title: 'Radiators - Installation & Repairs',
    description: 'Professional radiator fitting and maintenance for optimal heat distribution.'
  },
  {
    title: 'Gas Safety Certificates',
    description: 'Annual safety checks and certification for landlords and homeowners.'
  },
  {
    title: 'Thermostats',
    description: 'Smart and traditional thermostat installation for precise temperature control.'
  },
  {
    title: 'Hot Water Cylinders',
    description: 'Installation and maintenance of cylinders for reliable hot water supply.'
  },
  {
    title: 'Electrical Wiring for Heating',
    description: 'Safe electrical connections for all your heating system components.'
  },
  {
    title: 'Immersion Heaters',
    description: 'Emergency backup water heating solutions and repairs.'
  },
  {
    title: 'Underfloor Heating Installations',
    description: 'Modern underfloor heating systems for comfortable, even warmth.'
  },
]

export default function HeatingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heating_home.jpg"
            alt="Expert Heating & Boiler Services"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 w-full pt-[80px] pb-8 sm:pt-[84px] sm:pb-10 lg:pt-[88px] lg:pb-12">
          <div className="section-container">
          <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              DON'T GET LEFT IN THE COLD
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand-orange mb-4">
              CALL US FOR A PROFESSIONAL & RELIABLE SERVICE.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
              We understand how much of an inconvenience it is to you when your heating breaks down, which is why we offer a swift response.
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

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-service card-hover-lift group h-full"
              >
                <div className={`mb-4 p-3 rounded-lg w-fit group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 ${
                  service.urgent ? 'bg-emergency' : service.highlight ? 'bg-brand-orange' : 'bg-brand-blue'
                }`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                  {service.title}
                  {service.urgent && (
                    <span className="ml-2 text-sm text-emergency font-normal">
                      Emergency Service
                    </span>
                  )}
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
                Comprehensive Heating Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Keep your home warm and comfortable with our full range of heating 
                services. From installations to repairs, we've got you covered.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/Heating1.jpg"
                alt="Professional Heating Services"
                width={500}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          {/* Service Blocks */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {heatingServices.map((service) => (
              <div key={service.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <CheckCircle className="h-8 w-8 text-brand-blue mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a
              href="tel:07990806810"
              className="inline-flex items-center gap-2 px-6 py-3 btn-primary rounded-lg font-semibold"
            >
              <Phone className="h-4 w-4" />
              Call for Immediate Help
            </a>
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <GlobalCTA />
    </>
  )
}