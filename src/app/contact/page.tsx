'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react'

// WhatsApp Icon Component
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
import Image from 'next/image'

const serviceOptions = [
  'Emergency Plumbing',
  'General Plumbing',
  'Boiler Service/Repair',
  'Boiler Installation',
  'Central Heating',
  'Bathroom Installation',
  'Other',
]

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Here you would integrate with your backend or email service
    console.log('Form submitted:', formData)
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your enquiry! We\'ll be in touch shortly.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contactImg.jpg"
            alt="Contact K Gill Plumbing"
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
              GET IN TOUCH
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-brand-orange mb-4">
              NEED A PLUMBER? GET A FREE QUOTE OR BOOK OUR SERVICES.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
              We're here to help with all your plumbing and heating needs.
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

      {/* Contact Information */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="card text-center">
              <Phone className="h-8 w-8 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:07990806810" className="text-brand-blue hover:text-brand-blue-dark font-semibold">
                07990 806810
              </a>
              <p className="text-sm text-gray-600 mt-2">Mon-Fri 8-7, Sat 8-12</p>
            </div>

            <div className="card text-center">
              <Mail className="h-8 w-8 text-brand-blue mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:k.gill_plumbing@hotmail.co.uk" className="text-brand-blue hover:text-brand-blue-dark break-all">
                k.gill_plumbing@hotmail.co.uk
              </a>
              <p className="text-sm text-gray-600 mt-2">We'll respond within 24 hours</p>
            </div>

            <div className="card text-center">
              <WhatsAppIcon className="h-8 w-8 text-whatsapp mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp</h3>
              <a href="https://wa.me/447990806810" className="text-whatsapp hover:text-green-600 font-semibold">
                Message on WhatsApp
              </a>
              <p className="text-sm text-gray-600 mt-2">Quick responses</p>
            </div>
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="label">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="label">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="label">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="label">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Please describe your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 btn-primary rounded-lg font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Enquiry
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Company Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      9 Common Rise<br />
                      Hitchin, Hertfordshire<br />
                      SG4 0HL
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 7:00 PM<br />
                      Saturday: 8:00 AM - 12:00 PM<br />
                      Sunday: Closed<br />
                      <span className="text-gray-900 font-semibold">Sunday: Closed</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  We provide plumbing and heating services across Hertfordshire, including:
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {['Hitchin', 'Stevenage', 'Letchworth', 'Baldock', 'Royston', 'Welwyn', 'Knebworth', 'Surrounding areas'].map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 bg-brand-blue rounded-full" />
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default function ContactPage() {
  return <ContactForm />
}