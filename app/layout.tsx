import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Nunito } from 'next/font/google'
import { CartProvider } from '@/components/cart-provider'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' })
const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })

export const metadata: Metadata = {
  title: 'Little Squish Co. | Biodegradable squishies, handmade in Australia',
  description:
    'Palm-sized, non-toxic, fully biodegradable squishy toys for kids. Handmade locally in Australia with care, for calm hands and a healthier planet.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#f8f3e8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU" className={`${fraunces.variable} ${nunito.variable} bg-background`}>
      <body className="antialiased">
        <CartProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
