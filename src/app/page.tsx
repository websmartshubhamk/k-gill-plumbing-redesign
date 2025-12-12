import { Phone, Wrench, Flame, Bath, Award, CheckCircle2, Users } from 'lucide-react'

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
import InteractiveServiceMap from '@/components/sections/InteractiveServiceMap'
import GlobalCTA from '@/components/sections/GlobalCTA'

const services = [
  {
    title: 'PLUMBING',
    description: 'Our knowledgeable and friendly team are trained to provide you with a wide array of plumbing services. Whatever your problem, we have a solution.',
    icon: Wrench,
    href: '/plumbing',
    features: ['Leak repairs', 'Pipe installation', 'Drain unblocking', 'Tap replacement']
  },
  {
    title: 'HEATING & BOILER REPAIR',
    description: "Heating causing you trouble? Don't get left in the cold, call K.Gill Plumbing & Heating for a professional and reliable call out service.",
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
          <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-4 sm:mb-6 xl:mb-8 leading-tight">
              K. GILL PLUMBING & HEATING
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-brand-orange mb-4">
              EXPERTISE YOU CAN TRUST
            </p>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl text-gray-200 mb-8">
              Honest, Affordable & Experienced<br />
              Clear Solutions for your Plumbing & Heating
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

      {/* About Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              WELCOME<br />
              <span className="text-brand-blue">WE'RE HERE TO HELP YOU OUT.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At K.Gill Plumbing & Heating, we have been providing Hertfordshire with a reliable and affordable service for over 10 years. From dripping taps to full bathroom suite installations, you can rest assured that you will get a professional job at an unbeatable price
            </p>
            <p className="text-base text-gray-600 mt-4">
              Services in and around Hitchin, Letchworth & Stevenage
            </p>
            <p className="text-sm text-gray-500 mt-2 uppercase tracking-wide">
              We undertake a wide range of domestic plumbing services including repairs, installations and servicing
            </p>
          </div>

          <div className="grid md:grid-cols-3 xl:grid-cols-3 gap-8 xl:gap-12 2xl:gap-16">
            <div className="text-center">
              <div className="mb-4 mx-auto w-fit">
                <Image
                  src="/images/1logos.png"
                  alt="Gas Safe Registered"
                  width={120}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Gas Safe Registered</h3>
              <p className="text-gray-600">Fully qualified and registered to work safely on all gas appliances.</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 p-4 bg-brand-blue rounded-lg w-fit mx-auto">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Over 10 Years Experience</h3>
              <p className="text-gray-600">Providing Hertfordshire with reliable and affordable service.</p>
            </div>
            
            <div className="text-center">
              <div className="mb-4 p-4 bg-brand-blue rounded-lg w-fit mx-auto">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Local & Trusted</h3>
              <p className="text-gray-600">Serving Hitchin, Stevenage, Letchworth and surrounding areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Interactive Service Areas Map */}
      <InteractiveServiceMap />

      {/* Global CTA Section */}
      <GlobalCTA />
    </>
  )
}