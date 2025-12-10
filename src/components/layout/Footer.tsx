import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const quickLinks = [
  { name: 'Emergency Plumbing', href: '/plumbing#emergency' },
  { name: 'Boiler Services', href: '/heating#boilers' },
  { name: 'Bathroom Installation', href: '/bathrooms' },
  { name: 'Get a Quote', href: '/contact' },
]

const services = [
  { name: 'Plumbing Repairs', href: '/plumbing' },
  { name: 'Heating & Boilers', href: '/heating' },
  { name: 'Bathroom Fitting', href: '/bathrooms' },
  { name: 'Emergency Callout', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4 bg-white rounded px-3 py-2 inline-block">
              <Image
                src="/images/Logo.png"
                alt="K Gill Plumbing & Heating"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </div>
            <p className="text-sm mb-4">
              Professional plumbing, heating and bathroom services across Hitchin, Stevenage, and Letchworth.
            </p>
            <p className="text-sm font-semibold text-brand-blue-light">
              Gas Safe Registered
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-brand-blue-light" />
                <a href="tel:07990806810" className="hover:text-white">
                  07990 806810
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-brand-blue-light" />
                <a href="mailto:k.gill_plumbing@hotmail.co.uk" className="hover:text-white break-all">
                  k.gill_plumbing@hotmail.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 text-brand-blue-light flex-shrink-0 mt-0.5" />
                <span>
                  9 Common Rise<br />
                  Hitchin, Hertfordshire<br />
                  SG4 0HL
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="h-4 w-4 text-brand-blue-light flex-shrink-0 mt-0.5" />
                <span>
                  Mon-Fri: 8:00-19:00<br />
                  Saturday: 8:00-12:00<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} K Gill Plumbing & Heating Ltd. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}