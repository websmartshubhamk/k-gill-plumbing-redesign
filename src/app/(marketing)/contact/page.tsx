'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react'

const serviceOptions = [
  'Emergency Plumbing',
  'General Plumbing',
  'Boiler Service/Repair',
  'Boiler Installation',
  'Central Heating',
  'Bathroom Installation',
  'Other',
]

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Pre-fill message from quote calculator if present
    const message = searchParams.get('message')
    if (message) {
      setFormData(prev => ({ ...prev, message: decodeURIComponent(message) }))
    }
  }, [searchParams])

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
      <section className="hero-pattern bg-gradient-to-br from-gray-50 to-white">
        <div className="section-container section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Need a plumber? Get a free quote or book our services. 
              We're here to help with all your plumbing and heating needs.
            </p>
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
              <p className="text-sm text-gray-600 mt-2">24/7 Emergency Service</p>
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
              <MessageSquare className="h-8 w-8 text-whatsapp mx-auto mb-4" />
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
                      <span className="text-emergency font-semibold">24/7 Emergency Service Available</span>
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

      {/* Emergency CTA */}
      <section className="section-padding bg-emergency text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Emergency Help?
          </h2>
          <p className="text-lg mb-6">
            Don't wait! Call us now for immediate assistance with burst pipes, 
            boiler breakdowns, or any plumbing emergency.
          </p>
          <a
            href="tel:07990806810"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emergency rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            <Phone className="h-5 w-5 animate-pulse" />
            Emergency: 07990 806810
          </a>
        </div>
      </section>
    </>
  )
}