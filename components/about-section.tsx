'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-[#0d1117] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ec008c]/5 rounded-full blur-[150px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#30363d]">
              <img 
                src="/images/about-team.png" 
                alt="Equipo Air Solutions"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#318ce7] to-[#2678cc] rounded-2xl p-6 shadow-xl glow-blue">
              <div className="text-5xl font-bold text-white">+20</div>
              <div className="text-white/80">años de experiencia en el rubro</div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block text-[#318ce7] font-semibold text-sm uppercase tracking-wider mb-4">
                Quienes Somos
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Simbolo de rapidez y eficiencia
              </h2>
              <p className="text-lg text-[#8b949e] leading-relaxed mb-6">
                Air Solutions es lider en el mercado argentino de venta, reparacion y alquiler de compresores de aire industriales. Trabajamos para ser el socio estrategico de nuestros clientes, brindando soluciones a medida con una estructura dedicada y orientada a satisfacer cualquier necesidad.
              </p>
              <p className="text-lg text-[#8b949e] leading-relaxed">
                Nuestro departamento tecnico brinda asesoramiento especializado para determinar el compresor de aire mas adecuado, garantizando la solucion mas eficiente del mercado tanto en calidad de aire como en ahorro energetico.
              </p>
            </div>
            
            {/* Key Points */}
            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-2 border-[#318ce7] pl-4">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-[#8b949e]">Compromiso</div>
              </div>
              <div className="border-l-2 border-[#ec008c] pl-4">
                <div className="text-2xl font-bold text-white">24hs</div>
                <div className="text-sm text-[#8b949e]">Respuesta</div>
              </div>
            </div>
            
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 text-[#318ce7] font-semibold hover:gap-4 transition-all group"
            >
              Conocer mas sobre nosotros
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
