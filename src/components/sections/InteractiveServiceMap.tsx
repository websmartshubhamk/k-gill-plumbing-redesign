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
  const [mapHeight, setMapHeight] = useState('400px')

  // Update map height to match location list height
  useEffect(() => {
    const updateMapHeight = () => {
      if (locationListRef.current) {
        const height = locationListRef.current.offsetHeight
        setMapHeight(`${height}px`)
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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 xl:gap-4">
              {serviceLocations.map((location) => (
                <button
                  key={location.name}
                  onClick={() => setSelectedLocation(location)}
                  onMouseEnter={() => setHoveredLocation(location.name)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className={`text-center p-4 rounded-lg transition-all duration-300 cursor-pointer group ${
                    selectedLocation.name === location.name
                      ? 'bg-brand-blue text-white shadow-lg scale-105'
                      : 'bg-gray-50 hover:bg-brand-blue hover:text-white hover:shadow-md'
                  }`}
                >
                  <div className="font-semibold">{location.name}</div>
                  {location.description && selectedLocation.name === location.name && (
                    <div className="text-xs mt-1 opacity-90">{location.description}</div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Map */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-xl p-6 relative">
              {/* Map Container */}
              <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ height: mapHeight, minHeight: '400px' }}>
                {/* Google Maps Embed - centered on Hertfordshire with markers */}
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${selectedLocation.name},Hertfordshire,UK&zoom=10&center=${selectedLocation.coordinates.lat},${selectedLocation.coordinates.lng}`}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="K Gill Plumbing Service Areas Map"
                />
              </div>

              {/* Selected Location Info - Bottom aligned */}
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedLocation.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedLocation.description || 'Professional plumbing and heating services available'}
                </p>
                <a
                  href="tel:07990806810"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-lg font-semibold hover:bg-brand-blue-dark transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Check Coverage
                </a>
              </div>
            </div>
          </div>
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