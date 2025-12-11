import { Phone, Bath, ShowerHead, Droplets, Palette, Ruler, CheckCircle, Star, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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

const bathroomFeatures = [
  'Shower & power showers',
  'Baths & luxury spa baths',
  'Sinks & vanity units',
  'Toilets & bidets',
  'Bath resurfacing',
  'Underfloor heating',
  'Heated towel rails',
  'Hot water cylinders',
  'Wet rooms',
  'Disability adaptations',
  'En-suite installation',
  'Cloakroom fitting',
]

const processSteps = [
  {
    step: '1',
    title: 'Free Consultation',
    description: 'We visit your home to discuss your ideas and take measurements.',
  },
  {
    step: '2',
    title: 'Design & Quote',
    description: 'Receive a detailed design plan and transparent pricing.',
  },
  {
    step: '3',
    title: 'Installation',
    description: 'Our expert team completes your bathroom transformation.',
  },
  {
    step: '4',
    title: 'Final Inspection',
    description: 'We ensure everything is perfect and you\'re 100% satisfied.',
  },
]

export default function BathroomsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/plumbingTap.jpg"
            alt="Professional Bathroom Installation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 section-container py-16 sm:py-20 xl:py-24">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
            <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
              <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-6 xl:mb-8">
                Professional Bathroom Installation in{' '}
                <span className="text-brand-orange">Hertfordshire</span>
              </h1>
              <p className="text-lg md:text-xl xl:text-2xl text-gray-200 mb-8 xl:mb-10">
                Transform your bathroom with our complete fitting service. From luxury suites 
                to practical wet rooms, we bring your dream bathroom to life.
              </p>
              <div className="mt-6 flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1 text-brand-orange">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-gray-200">5-star rated bathroom installations</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Image
                  src="/images/1logos.png"
                  alt="Gas Safe Registered"
                  width={150}
                  height={100}
                  className="h-auto w-full max-w-[150px]"
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
            Complete Bathroom Services
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We handle every aspect of your bathroom project, from initial design 
            to the final finishing touches.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`card ${service.highlight ? 'border-brand-blue' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    service.highlight ? 'bg-brand-blue/10' : 'bg-gray-100'
                  }`}>
                    <service.icon className={`h-6 w-6 ${
                      service.highlight ? 'text-brand-blue' : 'text-gray-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything You Need for Your Dream Bathroom
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 20 years of experience, we've installed hundreds of bathrooms 
                across Hertfordshire. No job is too big or small.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {bathroomFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-blue flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/images/plumbingTap.jpg"
                  alt="Professional Bathroom Installation"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 40%' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Simple 4-Step Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center relative">
                <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury CTA */}
      <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Bathroom?
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              From modern minimalist designs to traditional luxury suites, we'll create 
              the perfect bathroom for your home and budget.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Ruler className="h-8 w-8 mx-auto mb-2 text-brand-blue-light" />
                <h3 className="font-semibold mb-1">Free Design Service</h3>
                <p className="text-sm text-gray-400">Professional bathroom planning</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-brand-blue-light" />
                <h3 className="font-semibold mb-1">Fully Guaranteed</h3>
                <p className="text-sm text-gray-400">All work comes with warranty</p>
              </div>
              <div className="text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-2 text-brand-blue-light" />
                <h3 className="font-semibold mb-1">Fixed Price Quote</h3>
                <p className="text-sm text-gray-400">No hidden costs or surprises</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07990806810"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-lg font-semibold text-lg hover:bg-brand-blue-dark transition-colors"
              >
                <Phone className="h-5 w-5" />
                Book Free Consultation
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}