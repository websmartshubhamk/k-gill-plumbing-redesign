import { Phone, MessageSquare, Droplets, Wrench, Home, AlertTriangle, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import GlobalCTA from '@/components/sections/GlobalCTA'

const services = [
  {
    title: 'Emergency Plumbing',
    description: 'Burst pipes, major leaks, and urgent repairs available 24/7.',
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
  'Burst pipes and water leaks',
  'Blocked toilets and drains',
  'Dripping taps and fixtures',
  'Low water pressure issues',
  'Toilet cistern problems',
  'Sink and bath blockages',
  'Radiator leaks',
  'Outdoor tap installation',
]

export default function PlumbingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Plumbing4.jpg"
            alt="Professional Plumbing Services"
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
                Professional Plumbing Services in{' '}
                <span className="text-brand-orange">Hertfordshire</span>
              </h1>
              <p className="text-lg md:text-xl xl:text-2xl text-gray-200 mb-8 xl:mb-10">
                From emergency repairs to new installations, K Gill Plumbing provides 
                reliable, professional plumbing services across Hitchin, Stevenage, and Letchworth.
              </p>
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
            Our Plumbing Services
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We offer a comprehensive range of plumbing services to keep your home's 
            water systems running smoothly.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className={`card ${service.urgent ? 'border-emergency' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    service.urgent ? 'bg-emergency/10' : 'bg-brand-blue/10'
                  }`}>
                    <service.icon className={`h-6 w-6 ${
                      service.urgent ? 'text-emergency' : 'text-brand-blue'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                      {service.urgent && (
                        <span className="ml-2 text-sm text-emergency font-normal">
                          24/7 Available
                        </span>
                      )}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Common Plumbing Problems We Fix
              </h2>
              <p className="text-lg text-gray-600 mb-8">
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
              <div className="mt-8">
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