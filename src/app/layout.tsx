import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppWidget from '@/components/ui/WhatsAppWidget'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'K Gill Plumbing & Heating | Professional Plumbing Services in Hitchin',
  description: 'Expert plumbing, heating, and bathroom installation services in Hitchin, Stevenage, and Letchworth. 24/7 emergency callout available. Gas Safe registered.',
  keywords: 'plumber Hitchin, heating engineer Stevenage, bathroom fitter Letchworth, emergency plumber, boiler repair, Gas Safe',
  openGraph: {
    title: 'K Gill Plumbing & Heating',
    description: 'Professional plumbing and heating services in Hertfordshire',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="pt-[52px] md:pt-[56px] lg:pt-[64px] min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  )
}