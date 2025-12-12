'use client'

import { useState, useEffect, useRef } from 'react'
import { MapPin, Phone } from 'lucide-react'
import dynamic from 'next/dynamic'

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

// Dynamic import for Leaflet components (client-side only)
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

export default function InteractiveServiceMapLeaflet() {
  const [selectedLocation, setSelectedLocation] = useState<Location>(serviceLocations[0])
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)
  const [mapHeight, setMapHeight] = useState('400px')
  const locationListRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)

  // Calculate map height based on location list
  useEffect(() => {
    if (locationListRef.current) {
      const listHeight = locationListRef.current.offsetHeight
      setMapHeight(`${listHeight}px`)
    }
  }, [])

  // Calculate center of all locations
  const mapCenter = {
    lat: serviceLocations.reduce((sum, loc) => sum + loc.coordinates.lat, 0) / serviceLocations.length,
    lng: serviceLocations.reduce((sum, loc) => sum + loc.coordinates.lng, 0) / serviceLocations.length
  }

  // Pan to location when selected
  useEffect(() => {
    if (mapRef.current && selectedLocation) {
      mapRef.current.flyTo([selectedLocation.coordinates.lat, selectedLocation.coordinates.lng], 11, {
        duration: 1
      })
    }
  }, [selectedLocation])

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
          <div ref={locationListRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 xl:gap-4 order-2 lg:order-1 content-start">
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
              <div 
                className="relative bg-gray-100 rounded-lg overflow-hidden" 
                style={{ height: mapHeight, minHeight: '400px' }}
              >
                {typeof window !== 'undefined' && (
                  <MapContainer
                    center={[mapCenter.lat, mapCenter.lng]}
                    zoom={10}
                    style={{ height: '100%', width: '100%' }}
                    ref={mapRef}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {serviceLocations.map((location) => (
                      <Marker
                        key={location.name}
                        position={[location.coordinates.lat, location.coordinates.lng]}
                        eventHandlers={{
                          click: () => setSelectedLocation(location),
                        }}
                      >
                        <Popup>
                          <div className="p-2">
                            <h3 className="font-bold mb-1">{location.name}</h3>
                            <p className="text-sm text-gray-600">
                              {location.description || 'Professional plumbing and heating services available'}
                            </p>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                )}
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