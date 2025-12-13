import { Phone, MessageSquare, Droplets, Wrench, Home, AlertTriangle, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import GlobalCTA from '@/components/sections/GlobalCTA'

const services = [
  {
    title: 'Emergency Plumbing',
    description: 'Burst pipes, major leaks, and urgent repairs with rapid response.',
    icon: AlertTriangle,
    urgent: true,
  },
  {
    title: 'Leak Detection & Repair',
    description: 'Expert leak detection using advanced equipment to find and fix hidden leaks.',
    icon: Droplets,
  },
  {
    title: 'Pipe Installation & Repair',
    description: 'Complete pipework services including installation, repair, and replacement.',
    icon: Wrench,
  },
  {
    title: 'Drainage Services',
    description: 'Drain unblocking, cleaning, and CCTV surveys to keep your drains flowing.',
    icon: Home,
  },
]

const commonProblems = [
  'Drains & Drainage',
  'Pipes',
  'Leaks & Overflows',
  'Blockages',
  'Ball Valves',
  'Dripping Taps',
  'Hot & Cold Tanks',
  'Appliance Installation',
  'Bathrooms',
]

export default function PlumbingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Plumbing4.jpg"
            alt="Professional Plumbing Services"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative z-10 w-full py-8 sm:py-10 lg:py-12">
          <div className="section-container">
          <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-4">
              DRIPPING TAP OR A BURST PIPE CAUSING YOU TROUBLE?
            </h1>
            <p className="text-xl md:text-2xl text-brand-orange mb-4">
              OUR QUALIFIED TEAM ARE ON HAND TO PROVIDE SPEEDY REPAIRS.
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Whether you need a dripping tap fixed or a full bathroom installed, our experienced and fully-trained Plumbers can provide you with a quality, long lasting solution - which won't break the bank.
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
            PLUMBING SERVICES
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We offer a comprehensive range of plumbing services to keep your home's 
            water systems running smoothly.
          </p>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-service card-hover-lift group h-full"
              >
                <div className={`mb-4 p-3 rounded-lg w-fit group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 ${
                  service.urgent ? 'bg-emergency' : 'bg-brand-blue'
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
                Common Plumbing Problems We Fix
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Don't let plumbing problems disrupt your day. We're experienced in 
                diagnosing and fixing all types of plumbing issues quickly and efficiently.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {commonProblems.map((problem) => (
                  <div key={problem} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-blue flex-shrink-0" />
                    <span className="text-gray-700">{problem}</span>
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
                src="/images/Home3.jpg"
                alt="Professional Plumbing Services"
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