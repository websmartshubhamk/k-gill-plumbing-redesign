'use client'

import { useState } from 'react'
import { Calculator, Send, ChevronRight, Info } from 'lucide-react'

type ServiceType = 'plumbing' | 'heating' | 'bathroom'

interface ServiceOption {
  id: string
  name: string
  basePrice: number
  description: string
}

const serviceCategories = {
  plumbing: {
    name: 'Plumbing Services',
    options: [
      { id: 'tap-repair', name: 'Tap Repair/Replacement', basePrice: 75, description: 'Fix dripping or broken taps' },
      { id: 'toilet-repair', name: 'Toilet Repair', basePrice: 95, description: 'Fix running toilets, broken flush' },
      { id: 'pipe-repair', name: 'Pipe Repair (per hour)', basePrice: 85, description: 'Fix burst or leaking pipes' },
      { id: 'drain-unblock', name: 'Drain Unblocking', basePrice: 120, description: 'Clear blocked drains' },
      { id: 'emergency', name: 'Emergency Callout', basePrice: 150, description: '24/7 emergency service' },
    ]
  },
  heating: {
    name: 'Heating & Boiler',
    options: [
      { id: 'boiler-service', name: 'Annual Boiler Service', basePrice: 89, description: 'Keep your boiler safe and efficient' },
      { id: 'boiler-repair', name: 'Boiler Repair (from)', basePrice: 150, description: 'Diagnose and fix boiler issues' },
      { id: 'radiator-install', name: 'Radiator Installation', basePrice: 250, description: 'Supply and fit new radiator' },
      { id: 'powerflush', name: 'Power Flush', basePrice: 400, description: 'Clean your heating system' },
      { id: 'boiler-install', name: 'New Boiler Installation', basePrice: 2000, description: 'Full boiler replacement' },
    ]
  },
  bathroom: {
    name: 'Bathroom Installation',
    options: [
      { id: 'toilet-install', name: 'Toilet Installation', basePrice: 200, description: 'Supply and fit new toilet' },
      { id: 'basin-install', name: 'Basin Installation', basePrice: 250, description: 'Supply and fit new basin' },
      { id: 'shower-install', name: 'Shower Installation', basePrice: 500, description: 'Install new shower' },
      { id: 'full-bathroom', name: 'Full Bathroom Renovation', basePrice: 5000, description: 'Complete bathroom refit' },
      { id: 'tiling', name: 'Tiling (per m²)', basePrice: 45, description: 'Wall or floor tiling' },
    ]
  },
}

export default function QuoteCalculator() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceType>('plumbing')
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [showResult, setShowResult] = useState(false)

  const handleServiceToggle = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId))
      const newQuantities = { ...quantities }
      delete newQuantities[serviceId]
      setQuantities(newQuantities)
    } else {
      setSelectedServices([...selectedServices, serviceId])
      setQuantities({ ...quantities, [serviceId]: 1 })
    }
  }

  const handleQuantityChange = (serviceId: string, quantity: number) => {
    if (quantity < 1) return
    setQuantities({ ...quantities, [serviceId]: quantity })
  }

  const calculateTotal = () => {
    let total = 0
    const category = serviceCategories[selectedCategory]
    
    selectedServices.forEach(serviceId => {
      const service = category.options.find(opt => opt.id === serviceId)
      if (service) {
        total += service.basePrice * (quantities[serviceId] || 1)
      }
    })
    
    return total
  }

  const handleGetQuote = () => {
    const total = calculateTotal()
    const selectedItems = selectedServices.map(serviceId => {
      const category = serviceCategories[selectedCategory]
      const service = category.options.find(opt => opt.id === serviceId)
      return service ? `${service.name} x${quantities[serviceId] || 1}` : ''
    }).filter(Boolean).join(', ')

    const message = `Hi, I'd like a quote for: ${selectedItems}. Estimated total: £${total}. Can you confirm the price and availability?`
    window.location.href = `/contact?message=${encodeURIComponent(message)}`
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-brand-blue text-white p-6">
        <div className="flex items-center gap-3 mb-2">
          <Calculator className="h-6 w-6" />
          <h2 className="text-2xl font-bold">Quick Quote Calculator</h2>
        </div>
        <p className="text-blue-100">
          Get an instant estimate for our services
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex border-b">
        {(Object.keys(serviceCategories) as ServiceType[]).map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category)
              setSelectedServices([])
              setQuantities({})
              setShowResult(false)
            }}
            className={`flex-1 px-4 py-3 font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-brand-blue text-white'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            {serviceCategories[category].name}
          </button>
        ))}
      </div>

      {/* Service Options */}
      <div className="p-6">
        <div className="space-y-3 mb-6">
          {serviceCategories[selectedCategory].options.map((service) => (
            <div
              key={service.id}
              className={`border rounded-lg p-4 cursor-pointer transition-all ${
                selectedServices.includes(service.id)
                  ? 'border-brand-blue bg-brand-blue/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1" onClick={() => handleServiceToggle(service.id)}>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.id)}
                      onChange={() => {}}
                      className="h-5 w-5 text-brand-blue rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                      <p className="text-brand-blue font-semibold mt-2">
                        From £{service.basePrice}
                      </p>
                    </div>
                  </div>
                </div>
                {selectedServices.includes(service.id) && (
                  <div className="ml-4">
                    <label className="text-sm text-gray-600">Quantity:</label>
                    <input
                      type="number"
                      min="1"
                      value={quantities[service.id] || 1}
                      onChange={(e) => handleQuantityChange(service.id, parseInt(e.target.value))}
                      className="w-16 px-2 py-1 border rounded text-center"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <div className="flex gap-2">
            <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-amber-800">
              <p className="font-semibold mb-1">Please Note:</p>
              <p>
                Prices shown are estimates only. Final quotes may vary based on 
                specific requirements, materials needed, and job complexity. 
                VAT not included where applicable.
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        {selectedServices.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Estimated Total:
              </h3>
              <div className="text-3xl font-bold text-brand-blue">
                £{calculateTotal()}
              </div>
            </div>
            
            <button
              onClick={handleGetQuote}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 btn-primary rounded-lg font-semibold"
            >
              <Send className="h-4 w-4" />
              Get Proper Quote
              <ChevronRight className="h-4 w-4" />
            </button>
            
            <p className="text-xs text-gray-600 text-center mt-3">
              We'll contact you within 2 hours during business hours
            </p>
          </div>
        )}
      </div>
    </div>
  )
}