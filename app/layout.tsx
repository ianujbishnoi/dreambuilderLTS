import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Dream Builders Adelaide | Luxury Custom Home Builders',
  description: 'Adelaide\'s premier luxury custom home builders. We specialize in premium craftsmanship, modern architecture, and transparent project delivery.',
  keywords: 'luxury home builders adelaide, custom home builders, premium home construction, modern architecture adelaide',
  openGraph: {
    title: 'Dream Builders Adelaide | Luxury Custom Home Builders',
    description: 'Adelaide\'s premier luxury custom home builders specializing in premium craftsmanship and modern architecture.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
