'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
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

// Declare the google maps types
declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}

export default function InteractiveServiceMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location>(serviceLocations[0])
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapError, setMapError] = useState(false)
  
  const mapRef = useRef<HTMLDivElement>(null)
  const googleMapRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])
  const infoWindowRef = useRef<any>(null)
  const locationListRef = useRef<HTMLDivElement>(null)

  // Load Google Maps script
  useEffect(() => {
    const loadGoogleMaps = () => {
      // Check if already loaded
      if (window.google && window.google.maps) {
        setMapLoaded(true)
        return
      }

      // Check if script is already being loaded
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]')
      if (existingScript) {
        existingScript.addEventListener('load', () => setMapLoaded(true))
        existingScript.addEventListener('error', () => setMapError(true))
        return
      }

      // Create and load the script
      const script = document.createElement('script')
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      
      if (!apiKey) {
        console.warn('Google Maps API key not found. Using fallback static map.')
        setMapError(true)
        return
      }
      
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`
      script.async = true
      script.defer = true
      
      window.initMap = () => {
        setMapLoaded(true)
      }

      script.addEventListener('error', () => {
        console.error('Failed to load Google Maps')
        setMapError(true)
      })

      document.head.appendChild(script)
    }

    loadGoogleMaps()
  }, [])

  // Initialize map when loaded
  useEffect(() => {
    if (!mapLoaded || !mapRef.current || mapError) return

    try {
      // Calculate center of all locations
      const avgLat = serviceLocations.reduce((sum, loc) => sum + loc.coordinates.lat, 0) / serviceLocations.length
      const avgLng = serviceLocations.reduce((sum, loc) => sum + loc.coordinates.lng, 0) / serviceLocations.length

      // Create map
      googleMapRef.current = new window.google.maps.Map(mapRef.current, {
        center: { lat: avgLat, lng: avgLng },
        zoom: 10,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#c9c9c9' }]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
          }
        ],
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
      })

      // Create info window
      infoWindowRef.current = new window.google.maps.InfoWindow()

      // Create markers
      serviceLocations.forEach((location) => {
        const marker = new window.google.maps.Marker({
          position: location.coordinates,
          map: googleMapRef.current,
          title: location.name,
          icon: {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="${location.name === selectedLocation.name ? '#1e40af' : '#ef4444'}"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(32, 32),
            anchor: new window.google.maps.Point(16, 32)
          }
        })

        marker.addListener('click', () => {
          setSelectedLocation(location)
          
          const content = `
            <div style="padding: 8px;">
              <h3 style="font-weight: bold; margin-bottom: 4px;">${location.name}</h3>
              <p style="color: #666; font-size: 14px;">${location.description || 'Professional plumbing and heating services available'}</p>
            </div>
          `
          
          infoWindowRef.current.setContent(content)
          infoWindowRef.current.open(googleMapRef.current, marker)
        })

        markersRef.current.push({ marker, location })
      })
    } catch (error) {
      console.error('Error initializing map:', error)
      setMapError(true)
    }
  }, [mapLoaded, mapError])

  // Update markers when selection changes
  useEffect(() => {
    if (!googleMapRef.current || !markersRef.current.length) return

    markersRef.current.forEach(({ marker, location }) => {
      const isSelected = location.name === selectedLocation.name
      marker.setIcon({
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="${isSelected ? '#1e40af' : '#ef4444'}"/>
          </svg>
        `),
        scaledSize: new window.google.maps.Size(isSelected ? 40 : 32, isSelected ? 40 : 32),
        anchor: new window.google.maps.Point(isSelected ? 20 : 16, isSelected ? 40 : 32)
      })
      
      if (isSelected) {
        marker.setAnimation(window.google.maps.Animation.BOUNCE)
        setTimeout(() => marker.setAnimation(null), 2000)
        
        // Pan to selected location
        googleMapRef.current.panTo(location.coordinates)
      }
    })
  }, [selectedLocation])

  // Calculate map height based on location list
  const [mapHeight, setMapHeight] = useState('400px')
  
  useEffect(() => {
    if (locationListRef.current) {
      const listHeight = locationListRef.current.offsetHeight
      setMapHeight(`${listHeight}px`)
    }
  }, [])

  // Fallback static map
  const getMapPosition = (location: Location) => {
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
                ref={mapRef} 
                className="relative bg-gray-100 rounded-lg overflow-hidden" 
                style={{ height: mapHeight, minHeight: '400px' }}
              >
                {/* Show Google Map if available, otherwise show static fallback */}
                {mapError && (
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