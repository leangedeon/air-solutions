'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-[#0d1117]">
      {/* Gradient Background Effects */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(49,140,231,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(49,140,231,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#318ce7]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#ec008c]/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 lg:pt-32 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-snug tracking-tight">
                Alquiler de{' '}
                <span className="text-[#318ce7]">compresores de aire</span>
              </h1>
              <p className="text-xl text-[#8b949e] max-w-xl leading-relaxed">
                Alquiler de compresores de aire industriales con asesoramiento tecnico especializado y entrega a todo el pais.
              </p>
            </div>
            
            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 py-6 border-y border-[#30363d]">
              <div>
                <div className="text-3xl font-bold text-white">+20</div>
                <div className="text-sm text-[#8b949e]">Años de experiencia en el rubro</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#318ce7]">500+</div>
                <div className="text-sm text-[#8b949e]">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-[#8b949e]">Soporte tecnico</div>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-[#318ce7] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2678cc] transition-all hover:gap-4 group glow-blue"
              >
                Solicitar cotizacion
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 bg-[#21262d] border border-[#30363d] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#30363d] hover:border-[#318ce7]/50 transition-all"
              >
                Ver servicios
              </Link>
            </div>
          </div>
          
          {/* Right - Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-[#30363d] glow-blue">
              <img 
                src="/images/compressor-main.jpg" 
                alt="Compresor de aire industrial Air Solutions Argentina"
                className="w-full h-[500px] object-cover object-center"
              />
              {/* Overlay with info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/80 to-transparent p-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#318ce7] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-white">
                    <div className="font-semibold">Entrega y Logistica</div>
                    <div className="text-sm text-[#8b949e]">En todo el pais</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating accent element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#318ce7] to-[#ec008c] rounded-2xl opacity-20 blur-2xl" />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-sm text-[#8b949e]">Scroll</span>
        <div className="w-6 h-10 border-2 border-[#30363d] rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-[#318ce7] rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
