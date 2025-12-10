import { Shield, Award, CheckCircle, Users } from 'lucide-react'
import Image from 'next/image'

const certifications = [
  {
    name: 'Gas Safe Registered',
    description: 'Fully qualified to work on gas appliances',
    icon: Shield,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    name: '20+ Years Experience',
    description: 'Trusted local plumber since 2003',
    icon: Award,
    color: 'text-brand-orange',
    bgColor: 'bg-orange-50',
  },
  {
    name: 'Fully Insured',
    description: 'Complete public liability insurance',
    icon: CheckCircle,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    name: 'Local & Trusted',
    description: 'Serving Hertfordshire communities',
    icon: Users,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
]

export default function Certifications() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why We're Hertfordshire's Trusted Plumbers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional certifications and qualifications you can rely on
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert) => (
            <div key={cert.name} className="text-center">
              <div className={`${cert.bgColor} rounded-full p-4 w-fit mx-auto mb-4`}>
                <cert.icon className={`h-8 w-8 ${cert.color}`} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Gas Safe Badge */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Gas Safe Registered Engineers
                </h3>
                <p className="text-gray-600 mb-4">
                  All our engineers are Gas Safe registered, meaning they are legally 
                  qualified to work on gas appliances. This certification ensures your 
                  safety and compliance with UK regulations.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Annual safety inspections</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Boiler installations & repairs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Gas leak detection & repair</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <div className="mb-4">
                    <Image
                      src="/images/1logos.png"
                      alt="Gas Safe Register"
                      width={150}
                      height={100}
                      className="mx-auto"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Gas Safe Register
                  </h4>
                  <p className="text-sm text-gray-600">
                    Registration No: 123456
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}