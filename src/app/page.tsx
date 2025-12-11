import { Phone, Wrench, Flame, Bath, Clock, Shield, Award, CheckCircle2, Users, Gauge } from 'lucide-react'

// WhatsApp Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
)
import Link from 'next/link'
import Image from 'next/image'
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
    isGasSafe: true,
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
      {/* Hero Section with Team Photo */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/team-with-van.jpg"
            alt="K Gill Plumbing Team"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        
        {/* Hero Content */}
        <div className="section-container relative z-10 py-20 sm:py-24 lg:py-32 xl:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl xl:max-w-3xl 2xl:max-w-4xl animate-slide-in-left text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-4 sm:mb-6 xl:mb-8 leading-tight">
                Expert Plumbing & Heating Services in{' '}
                <span className="text-brand-orange">Hertfordshire</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-200 mb-6 sm:mb-8 xl:mb-10">
                Professional, reliable, and affordable plumbing solutions. 
                Available 24/7 for emergencies. Gas Safe registered engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.href}
                className="card-service card-hover-lift group stagger-animation"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  transform: 'translateY(20px)'
                }}
              >
                <div className="mb-4 p-3 bg-brand-blue rounded-lg w-fit group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-700">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-500 flex items-center gap-2 group-hover:text-gray-600 transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-brand-blue group-hover:text-green-500 transition-colors" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-brand-blue font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-brand-blue to-blue-800 text-white">
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

          <div className="grid md:grid-cols-3 xl:grid-cols-3 gap-8 xl:gap-12 2xl:gap-16">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                {benefit.isGasSafe ? (
                  <div className="mb-4 mx-auto w-fit">
                    <Image
                      src="/images/1logos.png"
                      alt="Gas Safe Registered"
                      width={120}
                      height={80}
                      className="mx-auto"
                    />
                  </div>
                ) : (
                  <div className="mb-4 p-4 bg-brand-orange rounded-lg w-fit mx-auto">
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Service Areas Section */}
      <section className="section-padding bg-gradient-to-br from-white to-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Providing professional plumbing and heating services across Hertfordshire and surrounding areas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 xl:gap-16 2xl:gap-20 items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 xl:gap-6">
              {[
                'Hitchin', 'Stevenage', 'Letchworth', 'Baldock', 
                'Royston', 'Knebworth', 'Codicote', 'Welwyn', 
                'Hertford', 'Ware', 'St Albans', 'Hatfield'
              ].map((area, index) => (
                <div
                  key={area}
                  className="text-center p-4 bg-gray-50 rounded-lg hover:bg-brand-blue hover:text-white transition-all duration-300 cursor-pointer group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="font-semibold">{area}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Local Experts, Regional Coverage
              </h3>
              <p className="text-gray-600 mb-6">
                Based in Hitchin, we serve customers throughout Hertfordshire and beyond. 
                Our local knowledge combined with professional expertise ensures quick 
                response times and reliable service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:07990806810"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Check Coverage
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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