import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="section-container">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              <strong>Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="mb-4">
                K Gill Plumbing & Heating Ltd ("we", "our", or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you use our website 
                or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Personal identification information (Name, email address, phone number)</li>
                <li>Service address and property details</li>
                <li>Service history and preferences</li>
                <li>Communication records</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide plumbing and heating services</li>
                <li>Schedule appointments and service calls</li>
                <li>Send service reminders and updates</li>
                <li>Process payments and invoicing</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Protection</h2>
              <p className="mb-4">
                We implement appropriate technical and organisational measures to protect your personal data against 
                unauthorised access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Secure storage of customer records</li>
                <li>Limited access to personal information</li>
                <li>Regular security assessments</li>
                <li>Staff training on data protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
              <p className="mb-4">Under UK data protection law, you have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
              <p className="mb-4">
                Our website uses cookies to enhance your browsing experience. These may include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand website usage</li>
                <li>Marketing cookies (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Services</h2>
              <p className="mb-4">
                We may share your information with trusted third parties including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Payment processors</li>
                <li>Insurance companies (for warranty claims)</li>
                <li>Manufacturers (for warranty registration)</li>
                <li>Professional advisors</li>
              </ul>
              <p className="mb-4">
                We ensure all third parties maintain appropriate security measures and only process your data 
                according to our instructions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2"><strong>K Gill Plumbing & Heating Ltd</strong></p>
                <p className="mb-2">9 Common Rise, Hitchin, Hertfordshire, SG4 0HL</p>
                <p className="mb-2">Phone: 07990 806810</p>
                <p>Email: k.gill_plumbing@hotmail.co.uk</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                with an updated revision date. We encourage you to review this policy periodically.
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