'use client'

import { useState, useEffect } from 'react'
import { Phone, X } from 'lucide-react'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Show after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isMinimized ? 'scale-75' : 'scale-100'}`}>
      {!isMinimized ? (
        <div className="bg-emergency text-white p-4 rounded-lg shadow-lg max-w-sm animate-slide-in-right">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse" />
              <span className="font-semibold text-sm">Emergency Plumber Available</span>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="text-sm mb-3 text-red-100">
            Need urgent help? We're available 24/7 for plumbing emergencies.
          </p>
          <a
            href="tel:07990806810"
            className="flex items-center justify-center gap-2 bg-white text-emergency px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call Now: 07990 806810
          </a>
        </div>
      ) : (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-emergency text-white p-3 rounded-full shadow-lg emergency-pulse hover:scale-105 transition-transform"
        >
          <Phone className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}