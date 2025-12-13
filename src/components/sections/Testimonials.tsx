'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Sam & Matt',
    location: 'Hitchin',
    rating: 5,
    text: 'What a great experience! They called to let us know that they were running a bit late due to a previous job, and when they arrived the job was done quickly and professionally. Couldn\'t be happier.',
    service: 'Plumbing Services',
  },
  {
    name: 'Sarah Johnson',
    location: 'Hitchin',
    rating: 5,
    text: 'Excellent service! K Gill fixed our burst pipe on a Sunday morning. Professional, quick, and reasonably priced. Highly recommend!',
    service: 'Emergency Plumbing',
  },
  {
    name: 'Mike Thompson',
    location: 'Stevenage',
    rating: 5,
    text: 'Had my boiler serviced and a new thermostat fitted. Very knowledgeable engineer who explained everything clearly. Will use again.',
    service: 'Boiler Service',
  },
  {
    name: 'Emma Davies',
    location: 'Letchworth',
    rating: 5,
    text: 'Complete bathroom renovation completed to a very high standard. The team were tidy, professional, and finished on time. Absolutely thrilled!',
    service: 'Bathroom Installation',
  },
  {
    name: 'David Wilson',
    location: 'Hitchin',
    rating: 5,
    text: 'Gas safety check completed quickly and efficiently. Very competitive price and friendly service. My go-to plumber from now on.',
    service: 'Gas Safety Certificate',
  },
  {
    name: 'Rachel Green',
    location: 'Baldock',
    rating: 5,
    text: 'Outstanding work on our central heating installation. The team arrived on time, worked cleanly, and explained everything. Excellent value for money.',
    service: 'Central Heating',
  },
  {
    name: 'James Parker',
    location: 'Welwyn',
    rating: 5,
    text: 'Called for an emergency leak at midnight and they were here within an hour. Professional service even at unsociable hours. Truly grateful!',
    service: 'Emergency Callout',
  },
  {
    name: 'Lisa Martinez',
    location: 'St Albans',
    rating: 5,
    text: 'Fantastic bathroom fitting service. From design advice to final installation, everything was perfect. Would definitely recommend to friends.',
    service: 'Bathroom Fitting',
  },
  {
    name: 'Robert Taylor',
    location: 'Royston',
    rating: 5,
    text: 'Regular maintenance on our commercial premises. Always reliable, professional, and competitive pricing. A trusted partner for our business.',
    service: 'Commercial Plumbing',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Show 2 testimonials at a time on desktop, 1 on mobile
  const testimonialsPerView = 2
  const maxIndex = Math.max(0, testimonials.length - testimonialsPerView)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(nextSlide, 5000) // 5 seconds for auto-slide
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)
  
  // Touch/Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentIndex < maxIndex) {
      nextSlide()
    }
    if (isRightSwipe && currentIndex > 0) {
      prevSlide()
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide()
      } else if (e.key === 'ArrowRight') {
        nextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <section className="pt-16 md:pt-20 pb-0 bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - see what our satisfied customers 
            across Hertfordshire have to say about our services.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          ref={containerRef}
          className="relative" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-white text-brand-blue p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-white text-brand-blue p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5 group-hover:scale-110 transition-transform" />
          </button>

          {/* Testimonials Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / testimonialsPerView)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Five Stars at Top */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-brand-orange text-brand-orange" />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-gray-700 mb-6 leading-relaxed flex-grow">{testimonial.text}</p>
                    
                    {/* Divider */}
                    <div className="border-t border-gray-200 pt-4 mt-auto">
                      {/* Bold Name + Muted Location */}
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-brand-blue w-8' 
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Go to testimonial set ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}