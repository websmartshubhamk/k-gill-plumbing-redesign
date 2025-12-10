import Link from 'next/link'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="section-container">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              <strong>Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                By using the services of K Gill Plumbing & Heating Ltd ("Company", "we", "our", or "us"), 
                you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, 
                please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Our Services</h2>
              <p className="mb-4">K Gill Plumbing & Heating Ltd provides:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Plumbing installation, maintenance, and repair services</li>
                <li>Heating system installation, servicing, and repairs</li>
                <li>Boiler installation and servicing</li>
                <li>Bathroom installations</li>
                <li>Emergency callout services</li>
                <li>Gas safety certificates</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Booking and Appointments</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Appointments must be scheduled in advance, except for emergency services</li>
                <li>We will provide estimated arrival times but cannot guarantee exact timing</li>
                <li>Cancellations must be made at least 24 hours in advance to avoid charges</li>
                <li>We reserve the right to charge a callout fee for missed appointments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pricing and Payment</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All quotes are estimates and may change based on actual work required</li>
                <li>Additional work discovered during service will be discussed before proceeding</li>
                <li>Payment is due upon completion of work unless otherwise agreed</li>
                <li>We accept cash, bank transfer, and major credit/debit cards</li>
                <li>VAT will be added where applicable</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Warranties and Guarantees</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All work is guaranteed for 12 months from completion</li>
                <li>Manufacturer warranties apply to parts and equipment</li>
                <li>Warranty does not cover normal wear and tear or misuse</li>
                <li>Emergency repairs may have limited warranty periods</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Customer Responsibilities</h2>
              <p className="mb-4">Customers must:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide safe and clear access to work areas</li>
                <li>Ensure an adult is present during service visits</li>
                <li>Disclose any known hazards or issues</li>
                <li>Maintain installed equipment according to manufacturer guidelines</li>
                <li>Not attempt repairs on gas appliances</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Health and Safety</h2>
              <p className="mb-4">
                We are committed to maintaining the highest safety standards:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All engineers are Gas Safe registered</li>
                <li>We carry full public liability insurance</li>
                <li>We follow all relevant health and safety regulations</li>
                <li>Customers must follow safety instructions provided by our engineers</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Liability</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>We are insured for damage caused by our negligence</li>
                <li>We are not liable for pre-existing issues or hidden defects</li>
                <li>Our liability is limited to the value of the service provided</li>
                <li>We are not responsible for delays due to circumstances beyond our control</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Complaints Procedure</h2>
              <p className="mb-4">
                If you are not satisfied with our service:
              </p>
              <ol className="list-decimal pl-6 mb-4 space-y-2">
                <li>Contact us immediately to discuss the issue</li>
                <li>We will investigate and respond within 48 hours</li>
                <li>If necessary, we will arrange a revisit to resolve the problem</li>
                <li>Written complaints can be sent to our registered address</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="mb-4">
                These Terms are governed by the laws of England and Wales. Any disputes will be 
                subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2"><strong>K Gill Plumbing & Heating Ltd</strong></p>
                <p className="mb-2">9 Common Rise, Hitchin, Hertfordshire, SG4 0HL</p>
                <p className="mb-2">Phone: 07990 806810</p>
                <p className="mb-2">Email: k.gill_plumbing@hotmail.co.uk</p>
                <p>Gas Safe Registration: 123456</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to update these Terms at any time. Changes will be effective 
                immediately upon posting to our website. Continued use of our services after changes 
                constitutes acceptance of the revised Terms.
              </p>
            </section>
          </div>

          <div className="mt-8 pt-8 border-t">
            <Link href="/" className="text-brand-blue hover:text-brand-blue-dark font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}