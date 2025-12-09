export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">K Gill Plumbing & Heating</h1>
        <p className="text-xl text-gray-600 mb-8">Professional plumbing, heating, and bathroom services</p>
        <div className="flex gap-4">
          <a 
            href="tel:07123456789" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Call Now
          </a>
          <a 
            href="https://wa.me/447123456789" 
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </main>
  )
}