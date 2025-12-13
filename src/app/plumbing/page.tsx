import { Phone, MessageSquare, Droplets, Wrench, Home, AlertTriangle, CheckCircle, Search, Settings, CheckCircle2, Zap, ShowerHead, Gauge, Filter } from 'lucide-react'
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
  {
    title: 'Drains & Drainage',
    icon: Home,
  },
  {
    title: 'Pipes',
    icon: Wrench,
  },
  {
    title: 'Leaks & Overflows',
    icon: Droplets,
  },
  {
    title: 'Blockages',
    icon: Filter,
  },
  {
    title: 'Ball Valves',
    icon: Settings,
  },
  {
    title: 'Dripping Taps',
    icon: ShowerHead,
  },
  {
    title: 'Hot & Cold Tanks',
    icon: Gauge,
  },
  {
    title: 'Appliance Installation',
    icon: Zap,
  },
  {
    title: 'Bathrooms',
    icon: Home,
  },
]

const plumbingProcess = [
  {
    title: '1. Emergency Call',
    description: 'Call us for immediate plumbing response',
    detail: 'Fast emergency response',
    icon: Phone,
    color: 'bg-brand-blue'
  },
  {
    title: '2. Problem Assessment',
    description: 'Quick diagnosis of your plumbing issue',
    detail: 'Expert evaluation on-site',
    icon: Search,
    color: 'bg-brand-orange'
  },
  {
    title: '3. Professional Repair',
    description: 'Quality plumbing work with guaranteed results',
    detail: 'Using professional tools & parts',
    icon: Settings,
    color: 'bg-brand-blue'
  },
  {
    title: '4. Job Complete',
    description: 'Clean finish with full satisfaction',
    detail: 'Warranty included on all work',
    icon: CheckCircle2,
    color: 'bg-brand-orange'
  }
]

export default function PlumbingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
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
        
        {/* Hero Content */}
        <div className="relative z-10 w-full py-8 sm:py-10 lg:py-12">
          <div className="section-container">
          <div className="max-w-4xl xl:max-w-5xl 2xl:max-w-6xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              DRIPPING TAP OR A BURST PIPE CAUSING YOU TROUBLE?
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand-orange mb-4">
              OUR QUALIFIED TEAM ARE ON HAND TO PROVIDE SPEEDY REPAIRS.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
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

      {/* Plumbing Process Section */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Handle Your Plumbing Emergency
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From your emergency call to job completion, our streamlined process ensures 
              fast, reliable, and professional plumbing service every time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {plumbingProcess.map((step, index) => (
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

      {/* Common Problems */}
      <section className="py-8 sm:py-10 lg:py-12 xl:py-14 bg-gradient-to-br from-gray-50 to-gray-100 relative">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
            {/* Content Panel */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Common Plumbing Problems We Fix
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg">
                Don't let plumbing problems disrupt your day. We're experienced in 
                diagnosing and fixing all types of plumbing issues quickly and efficiently.
              </p>
              
              {/* Two-Column Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {commonProblems.map((problem) => (
                  <div key={problem.title} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center gap-3">
                      <div className="bg-brand-blue rounded-lg p-2 flex-shrink-0">
                        <problem.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-800 font-medium">{problem.title}</span>
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
            <div className="relative">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src="/images/Home3.jpg"
                  alt="Professional Plumbing Services"
                  width={600}
                  height={480}
                  className="w-full h-auto rounded-xl shadow-md"
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