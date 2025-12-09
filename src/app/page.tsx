import { Phone, MessageSquare, Wrench, Flame, Bath, Clock, Shield, Award } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import QuoteCalculator from '@/components/ui/QuoteCalculator'
import Testimonials from '@/components/sections/Testimonials'
import Certifications from '@/components/sections/Certifications'

const services = [
  {
    title: 'Plumbing Services',
    description: 'From repairs to installations, we handle all your plumbing needs with expertise.',
    icon: Wrench,
    href: '/plumbing',
    features: ['Leak repairs', 'Pipe installation', 'Drain unblocking', 'Tap replacement']
  },
  {
    title: 'Heating & Boilers',
    description: 'Keep your home warm with our comprehensive heating and boiler services.',
    icon: Flame,
    href: '/heating',
    features: ['Boiler servicing', 'Central heating', 'Radiator installation', 'Gas safety checks']
  },
  {
    title: 'Bathroom Installation',
    description: 'Transform your bathroom with our professional fitting and renovation services.',
    icon: Bath,
    href: '/bathrooms',
    features: ['Full renovations', 'Suite installation', 'Tiling', 'Underfloor heating']
  }
]

const benefits = [
  {
    title: '24/7 Emergency Service',
    description: 'Available round the clock for urgent plumbing and heating emergencies.',
    icon: Clock,
  },
  {
    title: 'Gas Safe Registered',
    description: 'Fully qualified and registered to work safely on all gas appliances.',
    icon: Shield,
  },
  {
    title: '20+ Years Experience',
    description: 'Trusted by homeowners across Hitchin, Stevenage, and Letchworth.',
    icon: Award,
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-pattern bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Expert Plumbing & Heating Services in{' '}
                <span className="text-gradient">Hertfordshire</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Professional, reliable, and affordable plumbing solutions. 
                Available 24/7 for emergencies. Gas Safe registered engineers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:07990806810"
                  className="flex items-center justify-center gap-2 px-6 py-4 btn-emergency rounded-lg font-semibold text-lg emergency-pulse"
                >
                  <Phone className="h-5 w-5" />
                  Emergency: 07990 806810
                </a>
                <a
                  href="https://wa.me/447990806810"
                  className="flex items-center justify-center gap-2 px-6 py-4 btn-whatsapp rounded-lg font-semibold text-lg"
                >
                  <MessageSquare className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <Image
                src="/images/PipesIcon.png"
                alt="Professional Plumbing Services"
                width={600}
                height={400}
                className="w-full h-auto animate-float"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From emergency repairs to complete installations, we provide comprehensive 
              plumbing and heating solutions for your home or business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="card-service group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 p-3 bg-brand-blue/10 rounded-lg w-fit group-hover:bg-brand-blue/20 transition-colors">
                  <service.icon className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-500 flex items-center gap-2">
                      <div className="h-1 w-1 bg-brand-blue rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-brand-blue text-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose K Gill Plumbing & Heating?
            </h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              With over 20 years of experience, we're the trusted choice for 
              homeowners across Hertfordshire.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="mb-4 p-4 bg-white/10 rounded-lg w-fit mx-auto">
                  <benefit.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Calculator Section */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <QuoteCalculator />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Certifications Section */}
      <Certifications />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-brand-orange to-orange-700">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need an Emergency Plumber?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            We're available 24/7 for emergency callouts. Don't wait - 
            get in touch now for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:07990806810"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-orange rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call Now: 07990 806810
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}