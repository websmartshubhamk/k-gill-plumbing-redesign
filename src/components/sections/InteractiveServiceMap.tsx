'use client'

import { useState, useRef, useEffect } from 'react'
import { MapPin, Phone } from 'lucide-react'

interface Location {
  name: string
  coordinates: { lat: number; lng: number }
  description?: string
}

const serviceLocations: Location[] = [
  { name: 'Hitchin', coordinates: { lat: 51.9487, lng: -0.2806 }, description: 'Our main base of operations' },
  { name: 'Stevenage', coordinates: { lat: 51.9037, lng: -0.2017 } },
  { name: 'Letchworth', coordinates: { lat: 51.9799, lng: -0.2294 } },
  { name: 'Baldock', coordinates: { lat: 51.9891, lng: -0.1889 } },
  { name: 'Royston', coordinates: { lat: 52.0471, lng: -0.0202 } },
  { name: 'Knebworth', coordinates: { lat: 51.8669, lng: -0.1833 } },
  { name: 'Codicote', coordinates: { lat: 51.8486, lng: -0.2547 } },
  { name: 'Welwyn', coordinates: { lat: 51.8332, lng: -0.2135 } },
  { name: 'Hertford', coordinates: { lat: 51.7977, lng: -0.0781 } },
  { name: 'Ware', coordinates: { lat: 51.8081, lng: -0.0289 } },
  { name: 'St Albans', coordinates: { lat: 51.7520, lng: -0.3360 } },
  { name: 'Hatfield', coordinates: { lat: 51.7645, lng: -0.2284 } },
]

export default function InteractiveServiceMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location>(serviceLocations[0])
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)
  const locationListRef = useRef<HTMLDivElement>(null)
  const [mapHeight, setMapHeight] = useState('300px')

  // Update map height to match location list height
  useEffect(() => {
    const updateMapHeight = () => {
      if (locationListRef.current) {
        const height = locationListRef.current.offsetHeight
        // Set map height to match location list but cap at a reasonable max
        setMapHeight(`${Math.min(height, 500)}px`)
      }
    }

    updateMapHeight()
    window.addEventListener('resize', updateMapHeight)
    return () => window.removeEventListener('resize', updateMapHeight)
  }, [])

  return (
    <section className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Areas We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Providing professional plumbing and heating services across Hertfordshire and surrounding areas.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-stretch">
          {/* Location List */}
          <div ref={locationListRef} className="order-2 lg:order-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 xl:gap-3">
              {serviceLocations.map((location) => (
                <button
                  key={location.name}
                  onClick={() => setSelectedLocation(location)}
                  onMouseEnter={() => setHoveredLocation(location.name)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className={`text-center py-3 px-4 rounded-lg transition-all duration-300 cursor-pointer ${
                    selectedLocation.name === location.name
                      ? 'bg-brand-blue text-white shadow-lg'
                      : 'bg-gray-50 hover:bg-brand-blue hover:text-white hover:shadow-md'
                  }`}
                >
                  <div className="font-semibold text-sm lg:text-base">{location.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Map */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              {/* Map Container */}
              <div className="relative" style={{ height: mapHeight }}>
                {/* Google Maps Embed - No API key required */}
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.72810619872!2d-0.3817765050863085!3d51.89730680362813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876366c7c5cba1f%3A0xf82e17b8a6e30ad0!2s${selectedLocation.name}%2C%20UK!5e0!3m2!1sen!2suk!4v1702472896524!5m2!1sen!2suk`}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="K Gill Plumbing Service Areas Map"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Selected Location Info - Mobile and below map */}
        <div className="mt-6 lg:hidden text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Currently viewing: {selectedLocation.name}
          </h3>
          <a
            href="tel:07990806810"
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
        </div>

        {/* Additional Info - Bottom aligned */}
        <div className="mt-8 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Local Experts, Regional Coverage
          </h3>
          <p className="text-gray-600">
            Based in Hitchin, we serve customers throughout Hertfordshire and beyond. 
            Our local knowledge combined with professional expertise ensures quick 
            response times and reliable service.
          </p>
        </div>
      </div>
    </section>
  )
}