'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { usePathname } from 'next/navigation'

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

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Plumbing', href: '/plumbing' },
  { name: 'Heating', href: '/heating' },
  { name: 'Bathrooms', href: '/bathrooms' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className={`absolute top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'py-2' : ''
    }`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className={`bg-white/95 backdrop-blur-lg shadow-2xl hover:shadow-3xl rounded-full border border-gray-200/50 transition-all duration-300 ${
          scrolled ? 'py-2 px-4 sm:px-6' : 'py-2 px-6 sm:px-8'
        }`}>
          <div className="flex items-center justify-between gap-2 md:gap-4 lg:gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/Logo.png"
              alt="K Gill Plumbing & Heating"
              width={200}
              height={66}
              className={`w-auto transition-all duration-300 ${
                scrolled ? 'h-8 md:h-9 lg:h-10' : 'h-9 md:h-10 lg:h-12'
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-200 hover:scale-105 text-sm lg:text-base ${
                    isActive 
                      ? 'text-brand-orange' 
                      : 'text-gray-700 hover:text-brand-orange'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:07990806810"
              className="flex items-center gap-2 px-4 py-2.5 bg-brand-orange text-white rounded-full font-semibold text-sm hover:bg-brand-orange-dark hover:shadow-lg transition-all duration-200 whitespace-nowrap"
            >
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span>Emergency: 07990 806810</span>
            </a>
            <a
              href="https://wa.me/447990806810"
              className="flex items-center gap-2 px-4 py-2.5 bg-whatsapp text-white rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-200"
            >
              <WhatsAppIcon className="h-4 w-4 flex-shrink-0" />
              <span className="whitespace-nowrap">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-gray-700" />
            ) : (
              <Menu className="h-5 w-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>
    </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="px-4 sm:px-6 lg:px-8 mt-4">
          <div className="bg-white/95 backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 overflow-hidden animate-slide-down">
          <div className="px-6 py-6 space-y-3">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                    isActive
                      ? 'bg-brand-orange text-white'
                      : 'text-gray-700 hover:text-brand-orange hover:bg-orange-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <div className="pt-4 space-y-3 border-t">
              <a
                href="tel:07990806810"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-brand-orange text-white rounded-full font-semibold hover:bg-brand-orange-dark hover:shadow-lg transition-all"
              >
                <Phone className="h-4 w-4" />
                Emergency: 07990 806810
              </a>
              <a
                href="https://wa.me/447990806810"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-whatsapp text-white rounded-full font-semibold hover:shadow-lg transition-all"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        </div>
      )}
    </header>
  )
}