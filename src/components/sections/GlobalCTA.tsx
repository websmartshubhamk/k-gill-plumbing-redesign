import { Phone } from 'lucide-react'

export default function GlobalCTA() {
  return (
    <section className="relative py-16 md:py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/contactImg.jpg"
          alt="Contact K Gill Plumbing & Heating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Need Emergency Plumbing or Heating Services?
          </h2>
          
          {/* Supporting Line */}
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Fast, reliable service for all your urgent plumbing and heating needs
          </p>
          
          {/* CTA */}
          <div className="flex justify-center">
            {/* Call Now Button */}
            <a
              href="tel:07990806810"
              className="group flex items-center justify-center gap-3 px-10 py-4 bg-brand-orange text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-brand-orange-dark hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Call Now: 07990 806810
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}