import { Phone, Bath, ShowerHead, Droplets, Palette, Ruler, CheckCircle, CheckCircle2, Star, Shield, MessageSquare, Calendar, Wrench, Thermometer, Zap, PaintBucket } from 'lucide-react'
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
  {
    title: 'Shower & power showers',
    icon: ShowerHead,
  },
  {
    title: 'Bath installation & replacement',
    icon: Bath,
  },
  {
    title: 'Toilet & basin fitting',
    icon: Droplets,
  },
  {
    title: 'Tiling - walls and floors',
    icon: PaintBucket,
  },
  {
    title: 'Heated towel rails',
    icon: Thermometer,
  },
  {
    title: 'Underfloor heating',
    icon: Zap,
  },
  {
    title: 'Bathroom radiators',
    icon: Thermometer,
  },
  {
    title: 'Complete renovations',
    icon: Wrench,
  },
  {
    title: 'Bathroom design service',
    icon: Palette,
  },
]

const bathroomProcess = [
  {
    title: '1. Initial Consultation',
    description: 'Free design consultation and quote',
    detail: 'No obligation assessment',
    icon: MessageSquare,
    color: 'bg-brand-blue'
  },
  {
    title: '2. Design & Planning',
    description: 'Custom bathroom design to suit your needs',
    detail: '3D visualisation available',
    icon: Ruler,
    color: 'bg-brand-orange'
  },
  {
    title: '3. Professional Installation',
    description: 'Expert fitting by qualified tradesmen',
    detail: 'Fully insured work',
    icon: Wrench,
    color: 'bg-brand-blue'
  },
  {
    title: '4. Final Inspection',
    description: 'Complete quality check and handover',
    detail: 'Satisfaction guaranteed',
    icon: CheckCircle,
    color: 'bg-brand-orange'
  }
]

export default function BathroomsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
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
        
        {/* Hero Content */}
        <div className="relative z-10 w-full py-8 sm:py-10 lg:py-12">
          <div className="section-container">
          <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              TRANSFORM YOUR BATHROOM
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand-orange mb-4">
              PROFESSIONAL INSTALLATION FROM DESIGN TO COMPLETION.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
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

      {/* Bathroom Installation Process */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Bathroom Installation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial consultation to your dream bathroom, we guide you 
              through every step with professional expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {bathroomProcess.map((step, index) => (
              <div
                key={step.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col"
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${step.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-4 flex-grow">
                  {step.description}
                </p>
                
                {/* Detail with Icon */}
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span>{step.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Bathroom Solutions */}
      <section className="py-8 sm:py-10 lg:py-12 xl:py-14 bg-gradient-to-br from-gray-50 to-gray-100 relative">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-stretch">
            {/* Content Panel */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Complete Bathroom Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Create your dream bathroom with our comprehensive installation services. 
                From initial design to final finishing touches, we handle everything.
              </p>
              
              {/* Two-Column Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {bathroomServices.map((service) => (
                  <div key={service.title} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center gap-3">
                      <div className="bg-brand-blue rounded-lg p-2 flex-shrink-0">
                        <service.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-800 font-medium">{service.title}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <a
                  href="tel:07990806810"
                  className="inline-flex items-center gap-2 px-6 py-3 btn-primary rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                >
                  <Phone className="h-4 w-4" />
                  Call for Immediate Help
                </a>
              </div>
            </div>
            
            {/* Image Panel */}
            <div className="relative flex">
              <div className="bg-white rounded-2xl p-4 shadow-lg flex-1 flex flex-col">
                <Image
                  src="/images/plumbingTap.jpg"
                  alt="Professional Bathroom Services"
                  width={600}
                  height={480}
                  className="w-full h-full object-cover rounded-xl shadow-md flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA Section */}
      <GlobalCTA />
    </>
  )
}