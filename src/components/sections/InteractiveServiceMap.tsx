'use client'

import { useState } from 'react'
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

  // Calculate the position of the pin on the map
  const getMapPosition = (location: Location) => {
    // These values are approximate positions for the static map
    // In a real implementation, you'd use a proper mapping library
    const mapBounds = {
      north: 52.1,
      south: 51.7,
      east: 0.1,
      west: -0.4,
    }

    const x = ((location.coordinates.lng - mapBounds.west) / (mapBounds.east - mapBounds.west)) * 100
    const y = ((mapBounds.north - location.coordinates.lat) / (mapBounds.north - mapBounds.south)) * 100

    return { x: `${x}%`, y: `${y}%` }
  }

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
        
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-start">
          {/* Location List */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 xl:gap-4 order-2 lg:order-1">
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

          {/* Interactive Map */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-xl p-6 relative">
              {/* Map Container */}
              <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ paddingBottom: '75%' }}>
                {/* Placeholder for map - in production, this would be replaced with an actual map */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100">
                  {/* Enhanced SVG map representation */}
                  <svg 
                    className="w-full h-full" 
                    viewBox="0 0 400 300"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background pattern */}
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.5"/>
                      </pattern>
                      <radialGradient id="serviceGradient">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05"/>
                      </radialGradient>
                    </defs>
                    <rect width="400" height="300" fill="url(#grid)" />
                    
                    {/* Enhanced county boundary with more realistic shape */}
                    <path
                      d="M 120 60 Q 180 45, 240 50 Q 280 55, 310 70 L 325 90 Q 330 120, 325 150 L 315 180 Q 300 210, 270 225 L 240 235 Q 200 240, 160 230 L 130 210 Q 110 180, 105 150 L 100 120 Q 105 85, 120 60 Z"
                      fill="#ffffff"
                      stroke="#cbd5e1"
                      strokeWidth="1.5"
                      filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                    />
                    
                    {/* Multiple service area indicators */}
                    <circle cx="200" cy="140" r="60" fill="url(#serviceGradient)" />
                    <circle cx="250" cy="120" r="40" fill="url(#serviceGradient)" />
                    <circle cx="180" cy="170" r="45" fill="url(#serviceGradient)" />
                    
                    {/* County label */}
                    <text
                      x="200"
                      y="25"
                      textAnchor="middle"
                      className="fill-gray-600 text-sm font-semibold"
                      style={{ fontSize: '14px' }}
                    >
                      HERTFORDSHIRE
                    </text>
                    
                    {/* Roads representation */}
                    <path
                      d="M 50 150 Q 200 140, 350 150"
                      fill="none"
                      stroke="#94a3b8"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                      opacity="0.5"
                    />
                    <path
                      d="M 200 50 Q 210 150, 200 250"
                      fill="none"
                      stroke="#94a3b8"
                      strokeWidth="1"
                      strokeDasharray="3,3"
                      opacity="0.5"
                    />
                  </svg>

                  {/* Location Markers */}
                  {serviceLocations.map((location) => {
                    const position = getMapPosition(location)
                    const isSelected = selectedLocation.name === location.name
                    const isHovered = hoveredLocation === location.name

                    return (
                      <div
                        key={location.name}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
                        style={{ left: position.x, top: position.y }}
                      >
                        <button
                          onClick={() => setSelectedLocation(location)}
                          onMouseEnter={() => setHoveredLocation(location.name)}
                          onMouseLeave={() => setHoveredLocation(null)}
                          className={`relative transition-all duration-300 ${
                            isSelected || isHovered ? 'scale-125 z-10' : 'scale-100'
                          }`}
                        >
                          <div className={`${isSelected ? 'animate-bounce' : ''}`}>
                            <MapPin
                              className={`h-6 w-6 transition-all duration-300 ${
                                isSelected
                                  ? 'text-brand-blue fill-brand-blue drop-shadow-lg'
                                  : isHovered
                                  ? 'text-brand-orange fill-brand-orange drop-shadow-md'
                                  : 'text-red-500 fill-red-500 drop-shadow'
                              }`}
                            />
                          </div>
                          {/* Ripple effect for selected location */}
                          {isSelected && (
                            <div className="absolute inset-0 -z-10">
                              <div className="absolute inset-0 bg-brand-blue rounded-full animate-ping opacity-20" />
                              <div className="absolute inset-0 bg-brand-blue rounded-full animate-ping animation-delay-200 opacity-20" />
                            </div>
                          )}
                          {(isSelected || isHovered) && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
                              {location.name}
                            </div>
                          )}
                        </button>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Selected Location Info */}
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

            {/* Additional Info */}
            <div className="mt-6 text-center">
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
        </div>
      </div>
    </section>
  )
}