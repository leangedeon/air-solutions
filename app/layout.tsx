import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Air Solutions | Alquiler de Compresores de Aire Industrial',
  description: 'Alquiler de compresores de aire industriales en Argentina. +20 años de experiencia en el rubro, asesoramiento técnico gratuito y entrega a todo el país.',
  keywords: ['compresores de aire', 'alquiler compresores', 'aire comprimido industrial', 'Argentina'],
  openGraph: {
    title: 'Air Solutions | Alquiler de Compresores de Aire',
    description: 'Soluciones integrales en aire comprimido industrial. +20 años de experiencia en el rubro.',
    type: 'website',
    locale: 'es_AR',
  },
}

export const viewport: Viewport = {
  themeColor: '#318ce7',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
