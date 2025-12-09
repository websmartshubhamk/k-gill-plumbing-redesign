'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, MessageSquare } from 'lucide-react'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Plumbing', href: '/plumbing' },
  { name: 'Heating', href: '/heating' },
  { name: 'Bathrooms', href: '/bathrooms' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Logo.png"
              alt="K Gill Plumbing & Heating"
              width={150}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-brand-blue font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:07990806810"
              className="flex items-center gap-2 px-4 py-2 btn-emergency rounded-lg font-semibold text-sm"
            >
              <Phone className="h-4 w-4" />
              Emergency: 07990 806810
            </a>
            <a
              href="https://wa.me/447990806810"
              className="flex items-center gap-2 px-4 py-2 btn-whatsapp rounded-lg font-semibold text-sm"
            >
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t animate-slide-down">
          <div className="px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-brand-blue font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t">
              <a
                href="tel:07990806810"
                className="flex items-center justify-center gap-2 px-4 py-3 btn-emergency rounded-lg font-semibold"
              >
                <Phone className="h-4 w-4" />
                Emergency: 07990 806810
              </a>
              <a
                href="https://wa.me/447990806810"
                className="flex items-center justify-center gap-2 px-4 py-3 btn-whatsapp rounded-lg font-semibold"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}