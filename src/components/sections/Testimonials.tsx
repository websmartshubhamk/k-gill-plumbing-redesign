import { Star, Quote } from 'lucide-react'

const testimonials = [
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
]

export default function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
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

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <Quote className="h-8 w-8 text-brand-blue/20 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    <span className="text-xs bg-brand-blue/10 text-brand-blue px-3 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Rated 5/5 based on 150+ reviews
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <span className="font-semibold">5.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}