'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

// WhatsApp Logo SVG
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

const businessHours = {
  monday: { open: 8, close: 19 },
  tuesday: { open: 8, close: 19 },
  wednesday: { open: 8, close: 19 },
  thursday: { open: 8, close: 19 },
  friday: { open: 8, close: 19 },
  saturday: { open: 8, close: 12 },
  sunday: { open: 0, close: 0 }, // Closed
}

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOnline, setIsOnline] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Check if business is online
    const checkBusinessHours = () => {
      const now = new Date()
      const day = now.getDay()
      const hour = now.getHours()
      
      const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
      const todayHours = businessHours[dayNames[day] as keyof typeof businessHours]
      
      if (todayHours.open === 0 && todayHours.close === 0) {
        setIsOnline(false)
      } else {
        setIsOnline(hour >= todayHours.open && hour < todayHours.close)
      }
    }

    checkBusinessHours()
    const interval = setInterval(checkBusinessHours, 60000) // Check every minute

    // Show tooltip after 5 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
      // Hide tooltip after 10 seconds
      setTimeout(() => setShowTooltip(false), 10000)
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(tooltipTimer)
    }
  }, [])

  const predefinedMessages = [
    { text: "I need emergency plumbing help!", urgent: true },
    { text: "I'd like to book a boiler service", urgent: false },
    { text: "Can I get a quote for bathroom installation?", urgent: false },
    { text: "My heating isn't working", urgent: true },
  ]

  const handleMessageClick = (message: string) => {
    const whatsappUrl = `https://wa.me/447990806810?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {showTooltip && !isOpen && (
          <div className="absolute bottom-full right-0 mb-2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap animate-slide-up">
            <div className="font-semibold">Need help? Chat with us!</div>
            <div className="text-xs text-gray-300">
              {isOnline ? 'We\'re online now' : '24/7 Emergency available'}
            </div>
            <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
          </div>
        )}
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-whatsapp text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
          aria-label="Open WhatsApp chat"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <WhatsAppIcon className="h-6 w-6" />
          )}
        </button>
        
        {/* Online Status Indicator */}
        <div className={`absolute top-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
          isOnline ? 'bg-green-500' : 'bg-gray-400'
        }`} />
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-2xl w-80 animate-slide-up">
          {/* Header */}
          <div className="bg-whatsapp text-white p-4 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">KG</span>
                </div>
                <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-whatsapp ${
                  isOnline ? 'bg-green-300' : 'bg-gray-300'
                }`} />
              </div>
              <div>
                <h3 className="font-semibold">K Gill Plumbing</h3>
                <p className="text-xs opacity-90">
                  {isOnline ? 'Online - Typically replies instantly' : 'Away - 24/7 Emergency available'}
                </p>
              </div>
            </div>
          </div>

          {/* Chat Content */}
          <div className="p-4">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">
                👋 Hi! Thanks for contacting K Gill Plumbing & Heating. 
                How can we help you today?
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {isOnline ? 'We\'re here to help!' : 'We\'ll respond as soon as possible. For emergencies, please call 07990 806810.'}
              </p>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2 mb-4">
              <p className="text-xs text-gray-600 font-semibold uppercase">Quick Messages:</p>
              {predefinedMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => handleMessageClick(msg.text)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    msg.urgent 
                      ? 'border-red-200 hover:bg-red-50 hover:border-red-300' 
                      : 'border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <span className="text-sm text-gray-700">{msg.text}</span>
                  {msg.urgent && (
                    <span className="text-xs text-red-600 block mt-1">⚡ Urgent</span>
                  )}
                </button>
              ))}
            </div>

            {/* Custom Message */}
            <button
              onClick={() => handleMessageClick('')}
              className="w-full bg-whatsapp text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              Start Chat on WhatsApp
            </button>
          </div>

          {/* Footer */}
          <div className="px-4 pb-4">
            <p className="text-xs text-gray-500 text-center">
              By clicking start chat, you'll be redirected to WhatsApp
            </p>
          </div>
        </div>
      )}
    </>
  )
}